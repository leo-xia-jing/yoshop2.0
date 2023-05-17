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

namespace app\common\model\user;

use cores\BaseModel;

/**
 * 用户会员等级模型
 * Class Grade
 * @package app\common\model\user
 */
class Org extends BaseModel
{
    // 定义表名
    protected $name = 'org';

    // 定义主键
    protected $pk = 'id';

    /**
     * 验证组织架构是否存在
     * @param string $org_name 验证组织架构是否存在
     * @return bool
     */
    public static function checkExistByOrgName(string $org_name,int $parent_id): bool
    {
        return !!(new static)->where('org_name', '=', $org_name)
            ->where('parent_id', '=', $parent_id)
            ->where('is_delete', '=', 0)
            ->value('id');
    }

    public static function detail(int $orgId, array $with = [])
    {
        return static::get($orgId, $with);
    }

    public static function checkExistByParentId(int $parent_id)
    {
        return static::where("parent_id","=",$parent_id)->where("is_delete","=",0)->find();
    }

}
