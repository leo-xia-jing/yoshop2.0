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

namespace app\store\model;

use app\api\model\exchange\ExchangeBalance;
use app\common\model\Exchange as ExchangeModel;

class Exchange extends ExchangeModel
{
    /**
     * 添加新记录
     * @param $data
     * @return false|int
     */
    public function add(array $data)
    {
        $data['store_id'] = self::$storeId;
        return $this->save($data);
    }

    /**
     * 编辑记录
     * @param $data
     * @return bool|int
     */
    public function edit(array $data)
    {
        //使记录生效
        $model = new ExchangeBalance();
        $list = json_decode($this['list'],true);
        foreach ($list as $key=>&$value){
            $value['describe'] = '管理员预充值';
            $value['store_id'] = $this['store_id'];
        }
        $model->allowField(['describe','store_id','mobile','money'])->saveAll($list);
        $data['status'] = 20;
        return $this->save($data);
    }

    /**
     * 删除记录
     * @return bool
     * @throws \Exception
     */
    public function remove()
    {
        if ($this['status'] == 20) {
            $this->error = '当前发放记录已生效，不允许删除';
            return false;
        }
        return $this->delete();
    }

}