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

namespace app\api\service;

use app\api\model\Order as OrderModel;
use app\api\service\User as UserService;
use app\api\model\wxapp\Setting as WxappSettingModel;
use app\common\enum\OrderType as OrderTypeEnum;
use app\common\enum\order\PayType as OrderPayTypeEnum;
use app\common\service\BaseService;
use app\common\library\wechat\WxPay;
use app\common\exception\BaseException;

/**
 * 订单支付服务类
 * Class Payment
 * @package app\api\service
 */
class Payment extends BaseService
{
    /**
     * 构建订单支付参数
     * @param $order
     * @param $payType
     * @return array
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function orderPayment($order, $payType): array
    {
        if ($payType == OrderPayTypeEnum::WECHAT) {
            return self::wechat(
                $order['order_id'],
                $order['order_no'],
                $order['pay_price'],
                OrderTypeEnum::ORDER
            );
        }

        if($payType == OrderPayTypeEnum::CONSTITUTE){
            $order = OrderModel::find($order['order_id']);
            $price = $order['pay_price'] - $order['constitute_price'];
            if($price){
                //组合支付情况下，还需要微信支付部分
                return self::wechat(
                    $order['order_id'],
                    $order['order_no'],
                    $price,
                    OrderTypeEnum::ORDER
                );
            }
        }
        return [];
    }

    /**
     * 构建微信支付
     * @param $orderId
     * @param $orderNo
     * @param $payPrice
     * @param int $orderType
     * @return array
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function wechat(
        $orderId,
        $orderNo,
        $payPrice,
        int $orderType = OrderTypeEnum::ORDER
    ): array
    {
        // 获取当前用户信息
        $userInfo = UserService::getCurrentLoginUser(true);
        // 获取第三方用户信息(微信)
        $oauth = UserService::getOauth($userInfo['user_id'], 'MP-WEIXIN');
        empty($oauth) && throwError('没有找到第三方用户信息oauth');
        // 统一下单API
        $WxPay = new WxPay(static::getWxConfig());
        return $WxPay->unifiedorder($orderNo, $oauth['oauth_id'], $payPrice, $orderType);
    }

    /**
     *
     * @param $orderId
     * @param $orderNo
     * @param $payPrice
     * @param int $orderType
     * @return array
     * @throws \cores\exception\BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author wws
     * @date 2023-05-08 15:02
     */
    public static function constitute(
        $orderId,
        $orderNo,
        $payPrice,
        int $orderType = OrderTypeEnum::ORDER
    ): array
    {
        // 获取当前用户信息
        $userInfo = UserService::getCurrentLoginUser(true);
        // 获取第三方用户信息(微信)
        $oauth = UserService::getOauth($userInfo['user_id'], 'MP-WEIXIN');
        empty($oauth) && throwError('没有找到第三方用户信息oauth');
        // 统一下单API
        $WxPay = new WxPay(static::getWxConfig());
        return $WxPay->unifiedorder($orderNo, $oauth['oauth_id'], $payPrice, $orderType);
    }
    /**
     * 获取微信支付配置
     * @return array
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private static function getWxConfig(): array
    {
        $storeId = getStoreId();
        return WxappSettingModel::getWxappConfig($storeId);
    }
}