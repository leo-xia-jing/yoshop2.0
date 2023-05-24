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

namespace app\store\model\user;

use app\common\model\user\Org as OrgModel;

use app\store\model\User as UserModel;

/**
 * 用户会员等级模型
 * Class Grade
 * @package app\store\model\user
 */
class Org extends OrgModel
{
    // 表单验证场景: 新增
    const FORM_SCENE_ADD = 'add';

    // 表单验证场景: 编辑
    const FORM_SCENE_EDIT = 'edit';

    /**
     * 获取全部记录
     * @param array $param
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAll(array $param)
    {
        return $this->where($this->getFilter($param))
            ->where('is_delete', '=', 0)
            ->order([$this->getPk()])
            ->select();
    }

    /**
     * 获取列表记录
     * @param array $param
     * @return \think\Paginator
     * @throws \think\db\exception\DbException
     */
    public function getList(array $param)
    {
        return $this->where($this->getFilter($param))
        ->where('is_delete', '=', 0)
        ->order([$this->getPk()])
        ->paginate();
    }

    /**
     * 获取查询条件
     * @param array $param
     * @return array
     */
    private function getFilter(array $param)
    {
        return [];
    }

    /**
     * 新增记录
     * @param $data
     * @return bool
     * @throws \Exception
     */
    public function add(array $data)
    {
        if (!$this->validateForm($data)) {
            return false;
        }
        $data['store_id'] = self::$storeId;
        return $this->save($data);
    }

    /**
     * 编辑记录
     * @param $data
     * @return false|int
     */
    public function edit(array $data)
    {
        if (!$this->validateForm($data,self::FORM_SCENE_EDIT)) {
            return false;
        }
        return $this->save($data) !== false;
    }

    /**
     * 软删除
     * @return false|int
     */
    public function setDelete()
    {
        // 判断该组织架构下是否存在会员
        if (UserModel::checkExistByOrgId((int)$this['id'])) {
            $this->error = '该组织架构下存在用户，不允许删除';
            return false;
        }
        if (OrgModel::checkExistByParentId((int)$this['id'])) {
            $this->error = '该组织架构存在下级机构，不允许删除';
            return false;
        }
        return $this->save(['is_delete' => 1]);
    }

    /**
     * 表单验证
     * @param $data
     * @param string $scene
     * @return bool
     */
    private function validateForm(array $data, string $scene = self::FORM_SCENE_ADD)
    {
        // 需要判断组织架构是否已存在
        if (self::checkExistByOrgName($data['org_name'],$data['parent_id'])) {
            $this->error = '该节点下组织架构已存在';
            return false;
        }
        // 暂时只允许增加一级组织架构
        $parent = self::get($data['parent_id']);
        if($parent['parent_id'] > 0){
            $this->error = '父级请选择顶级架构';
            return false;
        }
        return true;
    }

}
