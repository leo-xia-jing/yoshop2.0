(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"5ca4":function(t,e,a){},7334:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("content-header",{attrs:{title:"服务器信息"}}),e("a-table",{attrs:{rowKey:"key",size:"middle",columns:t.columns.server,"data-source":t.scienceInfo.server,loading:t.isLoading,rowClassName:t.rowClassName,pagination:!1},scopedSlots:t._u([{key:"remark",fn:function(a,n){return e("span",{},["normal"!==n.status?[t._v(t._s(a))]:t._e()],2)}}])}),e("content-header",{staticStyle:{"margin-top":"50px"},attrs:{title:"PHP环境要求"}}),e("a-table",{attrs:{rowKey:"key",size:"middle",columns:t.columns.phpinfo,"data-source":t.scienceInfo.phpinfo,loading:t.isLoading,rowClassName:t.rowClassName,pagination:!1},scopedSlots:t._u([{key:"status",fn:function(t){return e("span",{},[e("a-icon",{class:["icon","status-icon"],attrs:{type:"normal"===t?"check":"close"}})],1)}},{key:"remark",fn:function(a,n){return e("span",{},["normal"!==n.status?[t._v(t._s(a))]:t._e()],2)}}])}),e("content-header",{staticStyle:{"margin-top":"50px"},attrs:{title:"目录权限监测"}}),e("a-table",{attrs:{rowKey:"key",size:"middle",columns:t.columns.writeable,"data-source":t.scienceInfo.writeable,loading:t.isLoading,rowClassName:t.rowClassName,pagination:!1},scopedSlots:t._u([{key:"status",fn:function(t){return e("span",{},[e("a-icon",{class:["icon","status-icon"],attrs:{type:"normal"===t?"check":"close"}})],1)}}])})],1)},s=[],o=(a("d3b7"),a("f6ae")),i=a("b775");function r(){return Object(i["b"])({url:o["a"].setting.science,method:"get"})}var c=a("2af9"),l={name:"TableList",components:{ContentHeader:c["a"]},data:function(){return{isLoading:!1,scienceInfo:{server:[],phpinfo:[],writeable:[]},columns:{server:[{title:"参数",dataIndex:"name",width:"30%"},{title:"值",dataIndex:"value"},{title:"备注",dataIndex:"remark",scopedSlots:{customRender:"remark"}}],phpinfo:[{title:"选项",dataIndex:"name"},{title:"要求",dataIndex:"value"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"备注",dataIndex:"remark",scopedSlots:{customRender:"remark"}}],writeable:[{title:"名称",dataIndex:"name"},{title:"路径",dataIndex:"value"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}}]}}},created:function(){var t=this;this.$nextTick((function(){t.getScienceInfo()}))},methods:{getScienceInfo:function(){var t=this;this.isLoading=!0,r().then((function(e){t.scienceInfo=e.data.scienceInfo})).finally((function(){return t.isLoading=!1}))},rowClassName:function(t){return t.status}}},d=l,u=(a("95d5"),a("2877")),m=Object(u["a"])(d,n,s,!1,null,"d7f7fd92",null);e["default"]=m.exports},"7a28":function(t,e,a){"use strict";a("5ca4")},"95d5":function(t,e,a){"use strict";a("c419")},"9b7d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("content-header",{attrs:{title:"清理缓存"}}),e("a-form",{attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"缓存项目",labelCol:{span:6},wrapperCol:{span:13}}},[e("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["item",{initialValue:["data","temp"]}],expression:"['item', { initialValue: ['data', 'temp'] }]"}]},[e("a-checkbox",{attrs:{value:"data"}},[t._v("数据缓存")]),e("a-checkbox",{attrs:{value:"temp"}},[t._v("临时图片")])],1)],1),e("a-form-item",{attrs:{label:"强制模式",labelCol:{span:6},wrapperCol:{span:13},extra:"强制清空所有缓存文件，包含用户授权登录状态的数据，正式环境中请勿勾选"}},[e("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["isForce",{valuePropName:"checked"}],expression:"['isForce', { valuePropName: 'checked' }]"}]})],1),e("a-form-item",{attrs:{wrapperCol:{span:13,offset:6}}},[e("a-button",{attrs:{type:"primary",loading:t.isLoading,disabled:t.isLoading},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1)},s=[],o=(a("d3b7"),a("f6ae")),i=a("b775");function r(t){return Object(i["b"])({url:o["a"].setting.cache.clear,method:"post",data:t})}var c=a("2af9"),l=a("4360"),d={name:"TableList",components:{ContentHeader:c["a"],STable:c["d"]},data:function(){return{isLoading:!1,form:this.$form.createForm(this)}},created:function(){},methods:{handleSubmit:function(){var t=this,e=this.form.validateFields;e((function(e,a){e||(t.isLoading=!0,t.onFormSubmit(a).finally((function(){return t.isLoading=!1})))}))},onFormSubmit:function(t){var e=this;return r({form:t}).then((function(a){e.$message.success(a.message),!0===t.isForce&&l["a"].dispatch("Logout").then((function(){setTimeout((function(){window.location.reload()}),1200)}))}))}}},u=d,m=a("2877"),f=Object(m["a"])(u,n,s,!1,null,null,null);e["default"]=f.exports},c419:function(t,e,a){},dae5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("content-header",{attrs:{title:"定时任务"}}),e("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{message:"系统定时任务用于处理商城系统的订单状态、订单结算、优惠券状态、分销结算、会员等级等数据的更新，所以必须要开启",type:"warning","show-icon":""}}),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("第一步、启动定时任务")]),e("p",{staticClass:"text"},[e("a",{attrs:{href:"https://www.yiovo.com/doc/10046",target:"_blank"}},[t._v("点击查看定时任务启动教程")])]),e("h4",{staticClass:"title"},[t._v("第二步、测试定时任务是否启动")]),e("p",{staticClass:"text mtb-10"},[e("a-button",{attrs:{loading:t.isBtnLoading},on:{click:function(e){return t.handleTest()}}},[t._v("点击测试")])],1),e("p",{staticClass:"text"},[e("span",[t._v("测试过程可能需要3秒-5秒钟时间")])])])],1)},s=[],o=(a("d3b7"),a("ac1f"),a("f6ae")),i=a("b775");function r(t){return Object(i["b"])({url:o["a"].setting.timer.test,method:"post",data:t})}var c=a("2af9"),l={components:{ContentHeader:c["a"]},data:function(){return{isBtnLoading:!1}},created:function(){},methods:{handleTest:function(){var t=this;this.isBtnLoading=!0,r().then((function(e){t.$message.success(e.message,5)})).finally((function(){return t.isBtnLoading=!1}))}}},d=l,u=(a("7a28"),a("2877")),m=Object(u["a"])(d,n,s,!1,null,"58c1a092",null);e["default"]=m.exports}}]);