<?php
// +----------------------------------------------------------------------
// | 萤火商城系统 [ 致力于通过产品和服务，帮助商家高效化开拓市场 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2024 https://www.yiovo.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 这不是一个自由软件，不允许对程序代码以任何形式任何目的的再发行
// +----------------------------------------------------------------------
// | Author: 萤火科技 <admin@yiovo.com>
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\store\model\user;

use app\common\model\user\GradeLog as GradeLogModel;

/**
 * 用户会员等级变更记录模型
 * Class GradeLog
 * @package app\store\model\user
 */
class GradeLog extends GradeLogModel
{
    /**
     * 新增变更记录
     * @param array $data
     * @return bool
     */
    public function record(array $data): bool
    {
        return $this->records([$data]);
    }
}