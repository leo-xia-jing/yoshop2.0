<?php

namespace app\common\model\exchange;

use cores\BaseModel;

class ExchangeBalanceModel extends BaseModel
{
    // 定义表名
    protected $name = 'exchange_balance';

    // 定义主键
    protected $pk = 'id';

    protected $updateTime = false;
}