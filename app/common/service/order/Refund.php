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

namespace app\common\service\order;

use app\common\exception\BaseException;
use app\common\model\User as UserModel;
use app\common\model\wxapp\Setting as WxappSettingModel;
use app\common\model\user\BalanceLog as BalanceLogModel;
use app\common\enum\order\PayType as OrderPayTypeEnum;
use app\common\enum\user\balanceLog\Scene as SceneEnum;
use app\common\library\wechat\WxPay;
use app\common\service\BaseService;

/**
 * 订单退款服务类
 * Class Refund
 * @package app\common\service\order
 */
class Refund extends BaseService
{
    /**
     * 执行订单退款
     * @param $order
     * @param null $money
     * @return bool
     * @throws \cores\exception\BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function execute($order, $money = null): bool
    {
        // 退款金额，如不指定则默认为订单实付款金额
        is_null($money) && $money = $order['pay_price'];
        // 1.微信支付退款
        if ($order['pay_type'] == OrderPayTypeEnum::WECHAT) {
            return $this->wxpay($order, (string)$money);
        }
        // 2.消费金支付退款
        if ($order['pay_type'] == OrderPayTypeEnum::BALANCE) {
            return $this->balance($order, (string)$money);
        }
        // 3.组合支付退款
        if ($order['pay_type'] == OrderPayTypeEnum::CONSTITUTE) {
            return $this->constitute($order, (string)$money);
        }
        return false;
    }

    /**
     * 消费金支付退款
     * @param $order
     * @param $money
     * @return bool
     */
    private function balance($order, $money): bool
    {
        // 回退用户消费金
        UserModel::setIncBalance((int)$order['user_id'], (float)$money);
        // 记录消费金明细
        BalanceLogModel::add(SceneEnum::REFUND, [
            'user_id' => $order['user_id'],
            'money' => $money,
        ], ['order_no' => $order['order_no']]);
        return true;
    }

    /**
     * 组合支付退款
     * @param $order
     * @param $money
     * @return bool
     * @author wws
     * @date 2023-05-09 14:06
     */
    private function constitute($order,$money): bool
    {
        //根据实际情况退回
        // 回退用户消费金
        UserModel::setIncBalance((int)$order['user_id'], (float)$order['constitute_price']);
        // 记录消费金明细
        BalanceLogModel::add(SceneEnum::REFUND, [
            'user_id' => $order['user_id'],
            'money' => (float)$order['constitute_price'],
        ], ['order_no' => $order['order_no']]);
        //退款微信支付部分
        $wxConfig = WxappSettingModel::getWxappConfig($order['store_id']);
        $WxPay = new WxPay($wxConfig, $order['store_id']);
        $wx_price = (float)$order['pay_price'] - (float)$order['constitute_price'];
        return $WxPay->refund($order['transaction_id'], (string)$wx_price , (string)$wx_price);
    }

    /**
     * 微信支付退款
     * @param $order
     * @param string $money
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \cores\exception\BaseException
     */
    private function wxpay($order, string $money): bool
    {
        $wxConfig = WxappSettingModel::getWxappConfig($order['store_id']);
        $WxPay = new WxPay($wxConfig, $order['store_id']);
        return $WxPay->refund($order['transaction_id'], $order['pay_price'], $money);
    }
}