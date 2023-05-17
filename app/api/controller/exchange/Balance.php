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

namespace app\api\controller\exchange;

use think\response\Json;
use app\api\controller\Controller;
use app\api\model\exchange\ExchangeBalance as ExchangeBalanceModel;

/**
 * 消费金账单明细
 * Class Log
 * @package app\api\controller\balance
 */
class Balance extends Controller
{
    /**
     * 消费金兑换列表
     * @return Json
     * @throws \cores\exception\BaseException
     * @throws \think\db\exception\DbException
     */
    public function list(): Json
    {
        $model = new ExchangeBalanceModel;
        $list = $model->getList();
        return $this->renderSuccess(compact('list'));
    }

    /**
     * 领取消费金
     * @return Json
     * @author wws
     * @date 2023-05-17 14:25
     */

    public function receive(int $id = 0)
    {
        $model = new ExchangeBalanceModel;
        if (!$model->receiveById($id)) {
            return $this->renderError($model->getError() ?: '操作失败');
        }
        return $this->renderSuccess('领取成功');
    }
}