<?php
// +----------------------------------------------------------------------
// | 萤火商城系统 [ 致力于通过产品和服务，帮助商家高效化开拓市场 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2023 https://www.yiovo.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 这不是一个自由软件，不允许对程序代码以任何形式任何目的的再发行
// +----------------------------------------------------------------------
// | Author: 萤火科技 <admin@yiovo.com>
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\store\service\order;

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use app\store\model\{Order as OrderModel, order\Export as ExportModel, OrderAddress as OrderAddressModel};
use app\common\library\helper;
use app\common\service\BaseService;
use app\common\service\Goods as GoodsService;
use app\common\enum\order\{
    PayType as PayTypeEnum,
    PayStatus as PayStatusEnum,
    OrderSource as OrderSourceEnum,
    OrderStatus as OrderStatusEnum,
    DeliveryType as DeliveryTypeEnum,
    ReceiptStatus as ReceiptStatusEnum,
    DeliveryStatus as DeliveryStatusEnum,
    export\ExportStatus as ExportStatusEnum
};
use cores\exception\BaseException;

/**
 * 服务层：订单导出Excel
 * Class Export
 * @package app\store\service\order
 */
class Export extends BaseService
{
    // 表格文件标题名称
    private $title = '订单导出结果';

    /**
     * 执行订单导出excel
     * @param array $param
     * @return bool
     * @throws BaseException
     */
    public function exportOrder(array $param): bool
    {
        // 根据条件查询订单列表
        $orderList = $this->getOrderList($param)->toArray();
//        //兼容导出进货单
//        if($param['tableType'] == 3){
//            return $this->exportProcurementTicket($param,$orderList);
//        }elseif($param['tableType'] == 2){
//            //发货单
//            return $this->exportGoodsTicket($param,$orderList);
//        }
        // 格式化生成表格数据
        $excelList = $this->getExcelList($orderList, $param['columns']);
        // 获取导出的记录列名集
        $columns = $this->getColumns($param['columns']);
        // 输出并写入到excel文件
        $filePath = $this->outputExcel($columns, $excelList);
        // 新增订单导出记录
        $this->record($filePath);
        return true;
    }

    /**
     * 导出发货单
     * @param array $param
     * @param array $orderList
     * @return bool
     * @author wws
     * @date 2023-05-17 17:21
     */
    public function exportGoodsTicket(array $param)
    {
        //获取订单数据
        $model = new OrderModel;
        $list = $model->getListAll('delivery', $param);
        // 格式化生成表格数据
        $excelData = [];
        foreach ($list as $order){
            $goodsList = [];
            foreach ($order['goods'] as $key => $goods) {
                $goodsAttr = '';
                if (!empty($goods['goods_props'])) {
                    $goodsAttr = GoodsService::goodsPropsToAttr($goods['goods_props']);
                }

                $temp = [
                    'goods_name'=>$goods['goods_name']." ".$goodsAttr,
                    'total_num'=>$goods['total_num'],
                    'total_price'=>$goods['total_price'],
                    'receipt_name' => !empty($order['address']) ? $this->filterValue($order['address']['name']) : '',
                    'receipt_phone' => !empty($order['address']) ? $this->filterValue($order['address']['phone']) : '',
                    'receipt_address' => !empty($order['address']) ? OrderAddressModel::fullAddress($order['address']) : '',
                ];
                $goodsList[] = $temp;
            }
            $excelData[] = $goodsList;
        }

        // 获取导出的记录列名集
        $columns = ['商品名','数量','价格','收货人姓名','收货人手机','收货人地址'];
        // 输出并写入到excel文件
        $filePath = $this->outputGoodsExcel($columns, $excelData);
        // 新增订单导出记录
        $this->goodsrecord($filePath);
        return true;
    }

    /**
     * 导出进货单
     * @param array $param
     * @param array $orderList
     * @return bool
     * @author wws
     * @date 2023-05-17 17:21
     */
    public function exportProcurementTicket(string $dataType,array $param)
    {
        //获取订单数据
        $model = new OrderModel;
        $list = $model->getListAll($dataType, $param)->toArray();
        // 格式化生成表格数据
        $excelData = [];
        foreach ($list as $order){
            foreach ($order['goods'] as $key => $goods) {
//                //初始化商品
                if (!isset($excelData[$goods['goods_id']])) {
                    $excelData[$goods['goods_id']] = [
                        'goods_name' => $goods['goods_name'],
                        'sku_list' => [],
                        'count' => 0,
                    ];
                }
                //判断该规格是否存在
                if (!isset($excelData[$goods['goods_id']]['sku_list'][$goods['goods_sku_id']])) {
                    if (!empty($goods['goods_props'])) {
                        $goodsAttr = GoodsService::goodsPropsToAttr($goods['goods_props']);
                    }else{
                        $goodsAttr = '基础版本';
                    }
                    $excelData[$goods['goods_id']]['sku_list'][$goods['goods_sku_id']] = [
                        'goods_name' => $goods['goods_name'],
                        'goods_attr' => $goodsAttr,
                        'count' => 0,
                    ];
                }
                $excelData[$goods['goods_id']]['sku_list'][$goods['goods_sku_id']]['count']++;
                $excelData[$goods['goods_id']]['count']++;
            }
        }
        // 获取导出的记录列名集
        $columns = ['商品名','规格','数量'];
        // 输出并写入到excel文件
        $filePath = $this->outputProcurementExcel($columns, $excelData);
        // 新增订单导出记录
        $this->goodsrecord($filePath,30);
        return true;
    }
    /**
     * 根据条件查询订单列表
     * @param array $param
     * @return mixed
     * @throws BaseException
     */
    private function getOrderList(array $param)
    {
        // 根据条件查询订单列表
        $model = new OrderModel;
        $orderList = $model->getListAll(OrderModel::LIST_TYPE_ALL, $param);
        if ($orderList->isEmpty()) {
            throwError('很抱歉，没有查询到订单数据');
        }
        return $orderList;
    }

    /**
     * 输出并写入到excel文件
     * @param array $columns 列名
     * @param array $excelList 表格内容
     * @return string
     * @throws BaseException
     */
    private function outputExcel(array $columns, array $excelList): string
    {
        // 生成工作表
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet()->setTitle($this->title);
        // 列宽
        $sheet->getDefaultColumnDimension()->setWidth(24);
        // 默认行高
        $sheet->getDefaultRowDimension()->setRowHeight(20);
        // 字体加粗(第一行)
        $sheet->getStyle('1')->getFont()->setBold(true);
        // 写入标题数据
        foreach ($columns as $key => $val) {
            $sheet->setCellValueByColumnAndRow($key + 1, 1, $val);
        }
        // 写入内容数据
        foreach ($excelList as $key => $item) {
            $row = $key + 2;
            foreach (array_values($item) as $k => $val) {
                $sheet->setCellValueByColumnAndRow($k + 1, $row, $val);
            }
        }
        // 生成文件路径
        $fileName = 'order-' . time() . '.xlsx';
        $filePath = $this->getExportPath();
        // 保存到文件
        try {
            $writer = new Xlsx($spreadsheet);
            $writer->save(public_path() . $filePath . $fileName);
        } catch (\PhpOffice\PhpSpreadsheet\Writer\Exception $e) {
            throwError($e->getMessage());
        }
        return $filePath . $fileName;
    }

    private function outputGoodsExcel(array $columns, array $excelList)
    {
        // 生成工作表
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet()->setTitle("发货单");
        // 列宽
        $sheet->getDefaultColumnDimension()->setWidth(14);
        // 默认行高
        $sheet->getDefaultRowDimension()->setRowHeight(20);
        //设置外边框和内边框
//        $styleArray = [
//            'borders' => [
//                'outline' => [
//                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
//                ],
//                'inside' =>[
//                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
//                ]
//            ],
//        ];
//        $spreadsheet->getDefaultStyle()->applyFromArray($styleArray);
        //字体大小
        $spreadsheet->getDefaultStyle()->getFont()->setSize('9');
        //居中
        $spreadsheet->getDefaultStyle()->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        // 字体加粗(第一行)
//        $sheet->getStyle('1')->getFont()->setBold(true);
        // 写入标题数据
//        foreach ($columns as $key => $val) {
//            $sheet->setCellValueByColumnAndRow($key + 1, 1, $val);
//        }
        //行数
        $row =  1;
        // 写入内容数据
        //遍历订单
        foreach ($excelList as $key => $order) {
            //标题
            foreach ($columns as $k2 => $val) {
                $sheet->setCellValueByColumnAndRow($k2 + 1, $row, $val);
            }
            $row++;

            //遍历商品
            foreach ($order as $k=>$goods){
                $d = 1;
                foreach (array_values($goods) as $k1 => $val) {
                    $sheet->setCellValueByColumnAndRow($d, $row, $val);
                    $d++;
                }
                if($goods == end($order)){
                    $sheet->setBreak('A'.$row, \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet::BREAK_ROW);
                }
                $row++;
            }
            //遍历订单完成 空白一行放标题
            $row++;
        }
        // 生成文件路径
        $fileName = 'goods-' . time() . '.xlsx';
        $filePath = $this->getExportPath();

        // 保存到文件
        try {
            $writer = new Xlsx($spreadsheet);
            $writer->save(public_path() . $filePath . $fileName);
        } catch (\PhpOffice\PhpSpreadsheet\Writer\Exception $e) {
            throwError($e->getMessage());
        }
        return $filePath . $fileName;
    }

    public function outputProcurementExcel(array $columns, array $excelList)
    {
        // 生成工作表
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet()->setTitle("进货单");
        // 列宽
        $sheet->getDefaultColumnDimension()->setWidth(14);
        // 默认行高
        $sheet->getDefaultRowDimension()->setRowHeight(20);
        //字体大小
        $spreadsheet->getDefaultStyle()->getFont()->setSize('9');
        //居中
        $spreadsheet->getDefaultStyle()->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        // 字体加粗(第一行)
        $sheet->getStyle('1')->getFont()->setBold(true);
        //写入标题数据
        foreach ($columns as $key => $val) {
            $sheet->setCellValueByColumnAndRow($key + 1, 1, $val);
        }
        //行数
        $row =  2;
        // 写入内容数据
        //遍历商品
        foreach ($excelList as $key => $goods) {
            //遍历商品
            foreach ($goods['sku_list'] as $sku){
                $d = 1;
                foreach (array_values($sku) as $val) {
                    $sheet->setCellValueByColumnAndRow($d, $row, $val);
                    $d++;
                }
                $row++;
            }
        }
        // 生成文件路径
        $fileName = 'jinhuo-' . time() . '.xlsx';
        $filePath = $this->getExportPath();

        // 保存到文件
        try {
            $writer = new Xlsx($spreadsheet);
            $writer->save(public_path() . $filePath . $fileName);
        } catch (\PhpOffice\PhpSpreadsheet\Writer\Exception $e) {
            throwError($e->getMessage());
        }
        return $filePath . $fileName;
    }
    /**
     * 获取导出的文件夹路径
     * @return string
     */
    private function getExportPath(): string
    {
        $filePath = 'downloads/' . $this->getStoreId() . '/';
        !is_dir($filePath) && mkdir($filePath, 0755, true);
        return $filePath;
    }

    /**
     * 写入订单导出记录
     * @param array $param
     * @param string $filePath
     * @return void
     */
    private function record(array $param, string $filePath): void
    {
        // 生成记录数据
        $data = [
            'file_path' => $filePath,
            'status' => ExportStatusEnum::COMPLETED,
            'store_id' => $this->getStoreId(),
        ];
        // 起止时间
        if (!empty($param['betweenTime'])) {
            $times = between_time($param['betweenTime']);
            $data['start_time'] = $times['start_time'];
            $data['end_time'] = $times['end_time'];
        }
        // 新增记录
        $model = new ExportModel;
        $model->add($data);
    }

    /**
     * 写入订单导出记录
     * @param array $param
     * @param string $filePath
     * @return void
     */
    private function goodsRecord(string $filePath,$type = 20): void
    {
        // 生成记录数据
        $data = [
            'file_path' => $filePath,
            'status' => ExportStatusEnum::COMPLETED,
            'store_id' => $this->getStoreId(),
            'type' => $type
        ];
        $data['start_time'] = time();
        $data['end_time'] = time();
        // 新增记录
        $model = new ExportModel;
        $model->add($data);
    }

    /**
     * 获取导出的记录列名集
     * @param array $onlyFields
     * @return array
     */
    private function getColumns(array $onlyFields): array
    {
        return array_values(helper::pick($this->dictionary(), $onlyFields));
    }

    /**
     * 订单记录字典
     * @return string[]
     */
    private function dictionary(): array
    {
        return [
            'order_id' => '订单ID',
            'order_no' => '订单号',
            'goods_detail' => '商品信息',
            'total_price' => '商品总额',
            'coupon_money' => '优惠券抵扣金额',
            'points_money' => '积分抵扣金额',
            'update_price' => '后台改价',
            'express_price' => '运费金额',
            'pay_price' => '订单实付款',
            'pay_type' => '支付方式',
            'create_time' => '下单时间',
            'user_info' => '买家信息',
            'buyer_remark' => '买家留言',
            'delivery_type' => '配送方式',
            'receipt_name' => '收货人',
            'receipt_phone' => '联系电话',
            'receipt_address' => '收货地址',
            'express_company' => '物流公司',
            'express_no' => '物流单号',
            'pay_status' => '付款状态',
            'pay_time' => '付款时间',
            'delivery_status' => '发货状态',
            'delivery_time' => '发货时间',
            'receipt_status' => '收货状态',
            'receipt_time' => '收货时间',
            'order_status' => '订单状态',
            'is_comment' => '是否已评价',
            'order_source' => '订单来源',
        ];
    }

    /**
     * 格式化生成表格数据
     * @param array $orderList
     * @param array $onlyFields
     * @return array
     */
    private function getExcelList(array $orderList, array $onlyFields): array
    {
        // 获取订单表格数据
        $excelList = $this->getOrderDataForExcel($orderList);
        // 仅输出用户设置的字段
        $data = [];
        foreach ($excelList as $item) {
            $data[] = helper::pick($item, $onlyFields);
        }
        return $data;
    }

    /**
     * 获取订单列表数据(用于生成Excel)
     * @param $orderList
     * @return array
     */
    private function getOrderDataForExcel($orderList): array
    {
        // 表格内容
        $dataArray = [];
        foreach ($orderList as $order) {
            $dataArray[] = [
                'order_id' => $this->filterValue($order['order_id']),
                'order_no' => $this->filterValue($order['order_no']),
                'goods_detail' => $this->filterGoodsInfo($order),
                'total_price' => $this->filterValue($order['total_price']) . '元',
                'coupon_money' => $this->filterValue($order['coupon_money']) . '元',
                'points_money' => $this->filterValue($order['points_money']) . '元',
                'update_price' => "{$order['update_price']['symbol']}{$order['update_price']['value']}元",
                'express_price' => $this->filterValue($order['express_price']) . '元',
                'pay_price' => $this->filterValue($order['pay_price']) . '元',
                'pay_type' => PayTypeEnum::data()[$order['pay_type']]['name'],
                'create_time' => $this->filterValue($order['create_time']),
                'user_info' => $this->filterValue($order['user']['nick_name']),
                'buyer_remark' => $this->filterValue($order['buyer_remark']),
                'delivery_type' => DeliveryTypeEnum::data()[$order['delivery_type']]['name'],
                'receipt_name' => !empty($order['address']) ? $this->filterValue($order['address']['name']) : '',
                'receipt_phone' => !empty($order['address']) ? $this->filterValue($order['address']['phone']) : '',
                'receipt_address' => !empty($order['address']) ? OrderAddressModel::fullAddress($order['address']) : '',
                'express_company' => !empty($order['express']) ? $order['express']['express_name'] : '',
                'express_no' => $this->filterValue($order['express_no']),
                'pay_status' => PayStatusEnum::data()[$order['pay_status']]['name'],
                'pay_time' => $order['pay_time'],
                'delivery_status' => DeliveryStatusEnum::data()[$order['delivery_status']]['name'],
                'delivery_time' => $order['delivery_time'] ?: '',
                'receipt_status' => ReceiptStatusEnum::data()[$order['receipt_status']]['name'],
                'receipt_time' => $order['receipt_time'] ?: '',
                'order_status' => OrderStatusEnum::data()[$order['order_status']]['name'],
                'is_comment' => $order['is_comment'] ? '是' : '否',
                'order_source' => OrderSourceEnum::data()[$order['order_source']]['name'],
            ];
        }
        return $dataArray;
    }

    /**
     * 格式化商品信息
     * @param $order
     * @return string
     */
    private function filterGoodsInfo($order): string
    {
        $content = '';
        foreach ($order['goods'] as $key => $goods) {
            $content .= ($key + 1) . ".商品名称：{$goods['goods_name']}\n";
            if (!empty($goods['goods_props'])) {
                $goodsAttr = GoodsService::goodsPropsToAttr($goods['goods_props']);
                $content .= "　商品规格：{$goodsAttr}\n";
            }
            $content .= "　购买数量：{$goods['total_num']}\n";
            $content .= "　商品总价：{$goods['total_price']}元\n\n";
        }
        return $content;
    }

    /**
     * 表格值过滤
     * @param $value
     * @return string
     */
    private function filterValue($value): string
    {
        return "\t{$value}\t";
    }
}