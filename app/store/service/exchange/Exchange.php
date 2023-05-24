<?php

namespace app\store\service\exchange;

use app\common\service\BaseService;
use app\store\model\Exchange as ExchangeModel;

class Exchange extends BaseService
{
    public function excelToBalance($inputFile)
    {
        $inputFileName = app()->getRootPath().'public/uploads/'.$inputFile['file_path'];
        /** 根据类型创建合适的读取器对象 **/
        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader('Xlsx');
        $reader->setReadDataOnly(TRUE);
        $spreadsheet = $reader->load($inputFileName); //载入excel表格
        $worksheet = $spreadsheet->getActiveSheet();
        $highestRow = $worksheet->getHighestRow(); // 总行数
        $lines = $highestRow - 2;
        if ($lines <= 0) {
            $this->error = "Excel表格中没有数据";
            return false;
        }
        $data = [];
        //获取标题
        $title = $worksheet->getCellByColumnAndRow(1, 1)->getValue();
        for ($row = 3; $row <= $highestRow; ++$row) {
            $temp['name'] = $worksheet->getCellByColumnAndRow(1, $row)->getValue(); //姓名
            $temp['mobile'] = $worksheet->getCellByColumnAndRow(2, $row)->getValue(); //手机号
            $temp['money'] = (double)$worksheet->getCellByColumnAndRow(3, $row)->getValue(); //金额
            $temp['org'] = $worksheet->getCellByColumnAndRow(4, $row)->getValue(); //组织架构
            $data[] = $temp;
        }
        $model = new ExchangeModel();
        return $model->add(['title'=>$title,'list'=>json_encode($data)]);
    }
}