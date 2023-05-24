<?php

namespace app\store\controller\files;
use app\common\enum\file\Storage as StorageEnum;
use app\store\model\Setting as SettingModel;
use app\store\model\UploadFile as UploadFileModel;
use app\common\enum\file\FileType as FileTypeEnum;
use app\common\enum\Setting as SettingEnum;
use app\common\library\storage\Driver as StorageDriver;
use app\store\controller\Controller;
use app\store\service\exchange\Exchange as ExchangeService;
use app\store\model\Exchange as ExchangeModel;

class Upload extends Controller
{
    public function upload()
    {
        // 存储配置信息
        $config = SettingModel::getItem(SettingEnum::STORAGE);
        $storage = new StorageDriver($config,StorageEnum::LOCAL);
        // 设置上传文件的信息
        $storage->setUploadFile('xlsx')
            ->setRootDirName((string)$this->storeId)
            ->setValidationScene();
        // 执行文件上传
        if (!$storage->upload()) {
            return $this->renderError('上传失败：' . $storage->getError());
        }
        // 文件信息
        $fileInfo = $storage->getSaveFileInfo();
        // 添加文件库记录
        $model = new UploadFileModel;
        $model->add($fileInfo, FileTypeEnum::ANNEX, 0);
        //执行数据解析
        $exchange = new ExchangeService();
        if(!$exchange->excelToBalance($fileInfo)){
            return $this->renderError($exchange->getError());
        }
        // 上传成功
        return $this->renderSuccess('记录导入成功');
    }

    /**
     * 列表
     * @return array
     */
    public function list()
    {
        // 订单列表
        $model = new ExchangeModel;
        $list = $model->getList($this->request->param());
        return $this->renderSuccess(compact('list'));
    }

    public function edit(int $exchangeId)
    {
        // 分组详情
        $model = ExchangeModel::detail($exchangeId);
        // 更新记录
        if ($model->edit(['exchange_id'=>$exchangeId])) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }
    /**
     * 详情
     * @param int $exchangeId
     * @return array
     */
    public function detail(int $exchangeId)
    {
        // 订单详情
        $model = new ExchangeModel;
        if (!$detail = $model->getDetail($exchangeId)) {
            return $this->renderError('未找到该记录');
        }
        return $this->renderSuccess(compact('detail'));
    }

    /**
     * 删除商品分类
     * @param $exchangeId
     * @return array
     * @throws \Exception
     */
    public function delete(int $exchangeId)
    {
        // 分类详情
        $model = ExchangeModel::detail($exchangeId);
        if (!$model->remove()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }
}