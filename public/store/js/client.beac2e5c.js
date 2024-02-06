(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client"],{"2fa9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{staticClass:"mt-30",attrs:{label:"是否开启访问",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["enabled",{rules:[{required:!0}]}],expression:"['enabled', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:!0}},[e._v("开启")]),t("a-radio",{attrs:{value:!1}},[e._v("关闭")])],1),t("div",{staticClass:"form-item-help"},[t("small",[e._v("注：如关闭，用户则无法通过H5端访问商城")])])],1),t("a-form-item",{attrs:{label:"H5站点地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["baseUrl",{rules:[{required:!0,message:"请输入H5站点地址"}]}],expression:"['baseUrl', { rules: [{ required: true, message: '请输入H5站点地址' }] }]"}]}),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[t("span",[e._v("请填写H5端实际的访问地址，以")]),t("a-tag",{staticClass:"mlr-5"},[e._v("https://")]),e._v("开头； 斜杠 "),t("a-tag",{staticClass:"mlr-5"},[e._v("/")]),t("span",[e._v("结尾")])],1),t("p",{staticClass:"extra"},[t("span",[e._v("例如：https://www.你的域名.com/")]),t("span",{staticClass:"ml-8"},[e._v("https://shop10001.你的域名.com/")])])])],1),t("a-form-item",{attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},i=[],s=(a("d3b7"),a("88bc")),n=a.n(s),o=a("ca00"),l=a("5530"),u=a("b775"),c={detail:"/client.h5.setting/detail",update:"/client.h5.setting/update"};function p(e){return Object(u["b"])({url:c.detail,method:"get",params:{key:e}})}function d(e,t){return Object(u["b"])({url:c.update,method:"post",data:Object(l["a"])({key:e},t)})}var m={data:function(){return{labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),key:"basic",record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,p(this.key).then((function(t){e.record=t.data.detail,e.setFieldsValue()})).finally((function(){return e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.$nextTick,a=this.form;!Object(o["f"])(a.getFieldsValue())&&t((function(){a.setFieldsValue(n()(e,["enabled","baseUrl"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a((function(e,a){!e&&t.onFormSubmit(a)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,d(this.key,{form:e}).then((function(e){return t.$message.success(e.message,1.5)})).finally((function(){return t.isLoading=!1}))}}},f=m,v=(a("9a01"),a("2877")),h=Object(v["a"])(f,r,i,!1,null,"3025a70a",null);t["default"]=h.exports},3267:function(e,t,a){"use strict";var r=a("5c06");t["a"]=new r["a"]([{key:"CAPTCHA",name:"短信验证码",value:"captcha"},{key:"ORDER_PAY",name:"新付款订单",value:"order_pay"}])},"56ee":function(e,t,a){},"5c06":function(e,t,a){"use strict";var r=a("d4ec"),i=a("bee2"),s=(a("d81d"),a("b0c0"),a("dca8"),function(){function e(t){var a=this;Object(r["a"])(this,e);var i=[],s=[];if(!Array.isArray(t))throw new Error("param is not an array!");t.map((function(e){e.key&&e.name&&(i.push(e.key),s.push(e.value),a[e.key]=e,e.key!==e.value&&(a[e.value]=e))})),this.data=t,this.keyArr=i,this.valueArr=s,Object.freeze(this)}return Object(i["a"])(e,[{key:"keyOf",value:function(e){return this.data[this.keyArr.indexOf(e)]}},{key:"valueOf",value:function(e){return this.data[this.valueArr.indexOf(e)]}},{key:"getNameByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getNameByValue",value:function(e){var t=this.valueOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getValueByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.value}},{key:"getData",value:function(){return this.data}}]),e}());t["a"]=s},"5c33":function(e,t,a){"use strict";a("6827")},6827:function(e,t,a){},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",s="[object Function]",n="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function p(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function d(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function m(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var f=Object.prototype,v=f.hasOwnProperty,h=f.toString,b=c.Symbol,g=f.propertyIsEnumerable,w=b?b.isConcatSpreadable:void 0,C=Math.max;function y(e,t,a,r,i){var s=-1,n=e.length;a||(a=F),i||(i=[]);while(++s<n){var o=e[s];t>0&&a(o)?t>1?y(o,t-1,a,r,i):m(i,o):r||(i[i.length]=o)}return i}function _(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var r=-1,i=t.length,s={};while(++r<i){var n=t[r],o=e[n];a(o,n)&&(s[n]=o)}return s}function O(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=C(a.length-t,0),s=Array(i);while(++r<i)s[r]=a[t+r];r=-1;var n=Array(t+1);while(++r<t)n[r]=a[r];return n[t]=s,p(e,this,n)}}function F(e){return j(e)||M(e)||!!(w&&e&&e[w])}function k(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function M(e){return q(e)&&v.call(e,"callee")&&(!g.call(e,"callee")||h.call(e)==i)}var j=Array.isArray;function V(e){return null!=e&&A(e.length)&&!S(e)}function q(e){return L(e)&&V(e)}function S(e){var t=N(e)?h.call(e):"";return t==s||t==n}function A(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function D(e){return"symbol"==typeof e||L(e)&&h.call(e)==o}var $=O((function(e,t){return null==e?{}:_(e,d(y(t,1),k))}));e.exports=$}).call(this,a("c8ba"))},"8c72":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"默认登录/注册方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["registerMethod",{rules:[{required:!0}]}],expression:"['registerMethod', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:10}},[e._v("手机号 + 短信验证码")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[t("small",[e._v("发送短信服务需要先配置")]),t("router-link",{attrs:{target:"_blank",to:{path:"/setting/sms"}}},[e._v("短信通知设置")])],1),t("p",{staticClass:"extra"},[e._v("使用手机号注册可以实现多种客户端的账号统一，例如H5、微信小程序、APP，是目前最主流的方案")])])],1),t("a-form-item",{attrs:{label:"手动绑定手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isManualBind",{rules:[{required:!0}]}],expression:"['isManualBind', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[e._v("显示")]),t("a-radio",{attrs:{value:0}},[e._v("不显示")])],1),t("div",{staticClass:"form-item-help"},[t("small",[e._v("用户在个人中心页可以手动操作绑定手机号（仅未绑定手机号时显示）")]),t("a-popover",{attrs:{title:!1}},[t("template",{slot:"content"},[t("img",{staticClass:"bg-image",staticStyle:{width:"300px"},attrs:{src:"static/img/client/register/isManualBind.png"}})]),t("a",{attrs:{href:"javascript:;"}},[e._v("查看示例")]),t("img",{staticClass:"hiden",attrs:{src:"static/img/client/register/isManualBind.png"}})],2)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.$module("client-mpWeixin"),expression:"$module('client-mpWeixin')"}]},[t("a-divider",{attrs:{orientation:"left"}},[e._v("微信小程序授权登录")]),t("a-form-item",{attrs:{label:"一键授权登录/注册",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isOauthMpweixin",{rules:[{required:!0}]}],expression:"['isOauthMpweixin', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[t("span",[e._v("开启")]),t("a-tag",{staticClass:"ml-5",attrs:{color:"green"}},[e._v("推荐")])],1),t("a-radio",{attrs:{value:0}},[e._v("关闭")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[e._v("开启后在微信小程序端一键获取用户授权并登录和注册（请先配置微信小程序设置）")]),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.form.getFieldValue("isOauthMpweixin"),expression:"form.getFieldValue('isOauthMpweixin') == 0"}],staticClass:"extra c-red"},[e._v("关闭后微信小程序端将无法获取用户的openid，同时无法使用微信支付")])])],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("isOauthMpweixin"),expression:"form.getFieldValue('isOauthMpweixin') == 1"}],attrs:{label:"填写微信头像和昵称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isPersonalMpweixin",{rules:[{required:!0}]}],expression:"['isPersonalMpweixin', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[e._v("开启")]),t("a-radio",{attrs:{value:0}},[t("span",[e._v("关闭")]),t("a-tag",{staticClass:"ml-5",attrs:{color:"green"}},[e._v("推荐")])],1)],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[e._v("开启后在微信小程序端一键授权注册时要求用户填写微信头像和昵称，仅首次注册时弹出")])])],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("isOauthMpweixin"),expression:"form.getFieldValue('isOauthMpweixin') == 1"}],attrs:{label:"注册时绑定手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isForceBindMpweixin",{rules:[{required:!0}]}],expression:"['isForceBindMpweixin', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[t("span",[e._v("强制绑定")]),t("a-tag",{staticClass:"ml-5",attrs:{color:"green"}},[e._v("推荐")])],1),t("a-radio",{attrs:{value:0}},[e._v("不绑定")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[e._v("开启后在微信小程序端一键授权注册时强制绑定手机号，仅首次注册时弹出")]),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.form.getFieldValue("isForceBindMpweixin"),expression:"form.getFieldValue('isForceBindMpweixin') == 0"}],staticClass:"extra c-red"},[e._v("如果不强制绑定手机号，会造成多端情况下同一个用户注册多个账户，强烈推荐绑定手机号")])])],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("isOauthMpweixin")&&1==e.form.getFieldValue("isForceBindMpweixin"),expression:"form.getFieldValue('isOauthMpweixin') == 1 && form.getFieldValue('isForceBindMpweixin') == 1"}],attrs:{label:"一键获取微信手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isOauthMobileMpweixin",{rules:[{required:!0}]}],expression:"['isOauthMobileMpweixin', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[t("span",[e._v("开启")]),t("a-tag",{staticClass:"ml-5",attrs:{color:"green"}},[e._v("推荐")])],1),t("a-radio",{attrs:{value:0}},[e._v("关闭")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[t("small",[e._v("开启后在微信小程序端授权获取微信用户的手机号并登录和注册（请先配置微信小程序设置）")]),t("a-popover",{attrs:{title:!1}},[t("template",{slot:"content"},[t("img",{staticClass:"bg-image",staticStyle:{width:"300px"},attrs:{src:"static/img/client/register/isOauthMobileMpweixin.png"}})]),t("a",{attrs:{href:"javascript:;"}},[e._v("查看示例")]),t("img",{staticClass:"hiden",attrs:{src:"static/img/client/register/isOauthMobileMpweixin.png"}})],2)],1),t("p",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("isOauthMobileMpweixin"),expression:"form.getFieldValue('isOauthMobileMpweixin') == 1"}],staticClass:"extra c-red"},[t("span",[e._v("微信官方将于2023年8月26日起对该接口功能收费，每次成功调用收费0.03元；详情 ")]),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html",target:"_blank"}},[e._v("查看文档")])])])],1)],1),t("a-form-item",{attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},i=[],s=(a("d3b7"),a("ddb0"),a("88bc")),n=a.n(s),o=a("ca00"),l=a("f585"),u=a("3267"),c={data:function(){return{SettingSmsSceneEnum:u["a"],key:"register",labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{}}},beforeCreate:function(){Object(o["a"])(this,{isEmpty:o["f"]})},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,l["a"](this.key).then((function(t){e.record=t.data.values,e.setFieldsValue()})).finally((function(){return e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.$nextTick,a=this.form;!Object(o["f"])(a.getFieldsValue())&&t((function(){a.setFieldsValue(n()(e,["registerMethod","isManualBind","isOauthMpweixin","isPersonalMpweixin","isForceBindMpweixin","isOauthMobileMpweixin"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a((function(e,a){!e&&t.onFormSubmit(a)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,l["b"](this.key,{form:e}).then((function(e){return t.$message.success(e.message,1.5)})).finally((function(){return t.isLoading=!1}))}}},p=c,d=(a("c4e8"),a("2877")),m=Object(d["a"])(p,r,i,!1,null,"1fcc6362",null);t["default"]=m.exports},"9a01":function(e,t,a){"use strict";a("56ee")},bee2:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("a38e");function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Object(r["a"])(i.key),i)}}function s(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}},c4e8:function(e,t,a){"use strict";a("d21c")},d21c:function(e,t,a){},d4ec:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return r}))},e36a:function(e,t,a){"use strict";a.r(t);a("b0c0"),a("99af");var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{staticClass:"mt-30",attrs:{label:"是否开启访问",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["enabled",{rules:[{required:!0}]}],expression:"['enabled', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:!0}},[e._v("开启")]),t("a-radio",{attrs:{value:!1}},[e._v("关闭")])],1),t("div",{staticClass:"form-item-help"},[t("small",[e._v("注：如关闭，用户则无法通过微信小程序端访问商城")])])],1),t("a-form-item",{staticClass:"mt-30",attrs:{label:"小程序 AppID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_id",{rules:[{required:!0,message:"请输入小程序AppID"}]}],expression:"['app_id', { rules: [{ required: true, message: '请输入小程序AppID' }] }]"}]}),t("p",{staticClass:"form-item-help"},[t("small",[e._v("登录微信小程序平台，开发 - 开发管理 - 开发设置，记录AppID (小程序ID)")])])],1),t("a-form-item",{attrs:{label:"小程序 AppSecret",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_secret",{rules:[{required:!0,message:"请输入小程序AppSecret"}]}],expression:"['app_secret', { rules: [{ required: true, message: '请输入小程序AppSecret' }] }]"}],attrs:{type:"password"}}),t("p",{staticClass:"form-item-help"},[t("small",[e._v("登录微信小程序平台，开发 - 开发管理 - 开发设置，记录AppSecret (小程序密钥)")])])],1),t("a-divider",{attrs:{orientation:"left"}},[e._v("授权域名设置")]),e._l(e.domainList,(function(a,r){return t("a-form-item",{key:r,staticClass:"mt-30",attrs:{label:"".concat(a.name,"合法域名"),labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[t("span",{staticClass:"f-14"},[e._v(e._s("".concat(a.protocol,"://").concat(e.domain)))]),t("a",{staticClass:"ml-15 f-12",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.handleCopyLink("".concat(a.protocol,"://").concat(e.domain))}}},[e._v("点击复制")]),t("p",{staticClass:"form-item-help"},[t("small",[e._v("登录小程序平台，开发 - 开发管理 - 开发设置 - 服务器域名，修改"+e._s(a.protocol)+"协议业务域名")])])])})),t("a-form-item",{attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],2)],1)],1)},i=[],s=(a("d3b7"),a("88bc")),n=a.n(s),o=a("ca00"),l=a("5530"),u=a("b775"),c={detail:"/client.wxapp.setting/detail",update:"/client.wxapp.setting/update"};function p(e){return Object(u["b"])({url:c.detail,method:"get",params:{key:e}})}function d(e,t){return Object(u["b"])({url:c.update,method:"post",data:Object(l["a"])({key:e},t)})}var m=[{name:"request",protocol:"https"},{name:"socket",protocol:"wss"},{name:"uploadFile",protocol:"https"},{name:"downloadFile",protocol:"https"}],f={data:function(){return{labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),key:"basic",domainList:m,record:{},domain:""}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,p(this.key).then((function(t){e.record=t.data.detail,e.domain=t.data.domain,e.setFieldsValue()})).finally((function(){return e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.$nextTick,a=this.form;!Object(o["f"])(a.getFieldsValue())&&t((function(){a.setFieldsValue(n()(e,["enabled","app_id","app_secret"]))}))},handleCopyLink:function(e){var t=this;this.$copyText(e).then((function(e){t.$message.success("复制成功",.8)}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a((function(e,a){!e&&t.onFormSubmit(a)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,d(this.key,{form:e}).then((function(e){return t.$message.success(e.message,1.5)})).finally((function(){return t.isLoading=!1}))}}},v=f,h=(a("5c33"),a("2877")),b=Object(h["a"])(v,r,i,!1,null,"044a35ec",null);t["default"]=b.exports},f585:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var r=a("5530"),i=a("b775"),s={detail:"/setting/detail",update:"/setting/update"};function n(e){return Object(i["b"])({url:s.detail,method:"get",params:{key:e}})}function o(e,t){return Object(i["b"])({url:s.update,method:"post",data:Object(r["a"])({key:e},t)})}}}]);