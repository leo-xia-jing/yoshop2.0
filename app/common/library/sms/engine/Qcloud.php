<?php
// +----------------------------------------------------------------------
// | 萤火商城系统 [ 致力于通过产品和服务，帮助商家高效化开拓市场 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2021 https://www.yiovo.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 这不是一个自由软件，不允许对程序代码以任何形式任何目的的再发行
// +----------------------------------------------------------------------
// | Author: 萤火科技 <admin@yiovo.com>
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\common\library\sms\engine;

use Qcloud\Sms\SmsMultiSender;

/**
 * 腾讯云短信模块引擎
 * Class Qcloud
 * @package app\common\library\sms\engine
 */
class Qcloud extends Server
{
    private $config;

    /**
     * 构造方法
     * Qcloud constructor.
     * @param $config
     */
    public function __construct($config)
    {
        $this->config = $config;
    }

    /**
     * 发送短信通知
     * @param array $sceneConfig 场景配置
     * @param array $templateParams 短信模板参数
     * @return bool
     */
    public function sendSms(array $sceneConfig, array $templateParams)
    {
        $params = [];
        $params['phoneNumbers'] = explode(',', $sceneConfig['acceptPhone']);
        $params['templateId'] = $sceneConfig['templateCode'];
        $params['templateParam'] = array_values($templateParams);
        $params['sign'] = $this->config['sign'];

        $msender = new SmsMultiSender($this->config['AppId'], $this->config['AppKey']);
        $result = $msender->sendWithParam('86', $params['phoneNumbers'], $params['templateId'], $params['templateParam'], $params['sign']);
        $response = json_decode($result);

        // 记录日志
        log_record([
            'name' => '发送短信',
            'config' => $this->config,
            'params' => $params,
        ]);
        log_record($response);

        $this->error = $response->errmsg ?? $response->ErrorInfo ?? '未知错误';
        return isset($response->result) && $response->result === 0;
    }

}
