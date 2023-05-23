<?php

namespace app\api\controller;

/**
 * 默认控制器
 * Class Index
 * @package app\api\controller
 */
class Index
{
    public function index()
    {
        return '<style type="text/css">#dibu{ position:fixed;bottom:20px;width: 100%; height:10px;text-align: center;} *{ padding: 0; margin: 0; } div{ padding: 4px 48px;} a{color:#2E5CD5;cursor: pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family: "Century Gothic","Microsoft yahei"; color: #333;font-size:18px;} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"> <h1>:) </h1><span style="font-size:25px;">[<a href="https://www.hzjsh.net/index.html#/" target="yisu">点击进入商城入口</a>  ]</span></div><script type="text/javascript" src="https://e.topthink.com/Public/static/client.js"></script> <div id="dibu">备案号：<a href="https://beian.miit.gov.cn">浙ICP备2023011533号-1</a></div>';
    }
}