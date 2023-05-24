<?php

namespace app\common\model;

use cores\BaseModel;

class Exchange extends BaseModel
{
    // 定义表名
    protected $name = 'exchange';

    // 定义主键
    protected $pk = 'exchange_id';

    /**
     * 获取全部记录
     * @param array $param
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAll($param = [])
    {
        // 检索查询条件
        $filter = $this->getFilter($param);
        // 查询列表数据
        return $this->where($filter)->order(['sort', $this->getPk()])->select();
    }

    /**
     * 获取列表
     * @param array $param
     * @return \think\Paginator
     * @throws \think\db\exception\DbException
     */
    public function getList($param = [])
    {
        // 检索查询调价你
        $filter = $this->getFilter($param);
        // 查询列表数据
        return $this->where($filter)->order(['exchange_id'=>'desc'])->paginate(15);
    }

    /**
     * 检索查询条件
     * @param array $param
     * @return array
     */
    private function getFilter($param = [])
    {
        // 默认查询条件
        $params = $this->setQueryDefaultValue($param, ['search' => '']);
        // 检索查询条件
        $filter = [];
        !empty($params['search']) && $filter[] = ['title', 'like', "%{$params['search']}%"];
        // 起止时间
        if (!empty($params['betweenTime'])) {
            $times = between_time($params['betweenTime']);
            $filter[] = ['create_time', '>=', $times['start_time']];
            $filter[] = ['create_time', '<', $times['end_time'] + 86400];
        }
        return $filter;
    }

    /**
     * 物流公司详情
     * @param int $expressId
     * @return null|static
     */
    public static function detail(int $exchangeId)
    {
        return self::get($exchangeId);
    }
}