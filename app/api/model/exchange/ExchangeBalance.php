<?php

namespace app\api\model\exchange;
use app\api\model\User as UserModel;
use app\api\model\user\BalanceLog as BalanceLogModel;
use app\api\service\User as UserService;
use app\common\enum\user\balanceLog\Scene as SceneEnum;
use \app\common\model\exchange\ExchangeBalanceModel;

class ExchangeBalance extends ExchangeBalanceModel
{
    /**
     * 隐藏字段
     * @var array
     */
    protected $hidden = [
        'store_id',
        'mobile',
    ];

    /**
     * 获取账单明细列表
     * @return \think\Paginator
     * @throws \app\common\exception\BaseException
     * @throws \think\db\exception\DbException
     */
    public function getList()
    {
        // 当前用户ID
        $userId = UserService::getCurrentLoginUserId();
        $user = UserModel::get($userId)->getData();
        // 获取列表数据
        return $this->whereRaw("user_id = {$userId} OR mobile = '{$user['mobile']}'")
            ->order(['status' => 'asc'])
            ->paginate(15);
    }

    /**
     * 领取消费金
     * @param $id
     * @author wws
     * @date 2023-05-17 14:25
     */
    public function receiveById($id)
    {
        $model = $this->get($id);
        if(!$model){
            $this->error = "记录不存在";
            return false;
        }
        $status = $this->transaction(function () use($model){
                //修改为已领取
                $model['status'] = 20;
                $model->save();
                $user_id = $model['user_id'];
                if(empty($user_id)){
                    $user_id = UserModel::where('mobile','=',$model['mobile'])->value('user_id');
                }
                // 更新用户消费金
                UserModel::setIncBalance($user_id, (float)$model['money']);
                // 新增消费金变动记录
                BalanceLogModel::add(SceneEnum::EXCHANGE, [
                    'user_id' => (int)$user_id,
                    'money' => $model['money'],
                ], ['exchange_balance_id' => "流水序号为".$model['id']]);
                return true;
        });
        if(!$status){
            $this->error = "领取失败";
            return false;
        }
        return true;
    }
}