(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["store"],{"0c84":function(e,a,t){"use strict";t("de94")},"4d55":function(e,a,t){"use strict";t.d(a,"e",(function(){return s})),t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return n})),t.d(a,"d",(function(){return l})),t.d(a,"c",(function(){return c}));var r=t("b775"),i={list:"/store.address/list",all:"/store.address/all",add:"/store.address/add",edit:"/store.address/edit",delete:"/store.address/delete"};function s(e){return Object(r["b"])({url:i.list,method:"get",params:e})}function o(e){return Object(r["b"])({url:i.all,method:"get",params:e})}function n(e){return Object(r["b"])({url:i.add,method:"post",data:e})}function l(e){return Object(r["b"])({url:i.edit,method:"post",data:e})}function c(e){return Object(r["b"])({url:i.delete,method:"post",data:e})}},"5d1d":function(e,a,t){},"90ac":function(e,a,t){},"976c":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),a("a-spin",{attrs:{spinning:e.isLoading}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"商城名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["store_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['store_name', { rules: [{ required: true, min: 2, message: '请输入至少2个字符' }] }]"}]})],1),a("a-form-item",{attrs:{label:"商城简介",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe"],expression:"['describe']"}]})],1),a("a-form-item",{attrs:{label:"商城Logo",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"建议尺寸: 300*300"}},[a("SelectImage",{directives:[{name:"decorator",rawName:"v-decorator",value:["logo_image_id"],expression:"['logo_image_id']"}],attrs:{defaultList:e.record.logoImage?[e.record.logoImage]:[]}})],1),a("a-form-item",{attrs:{wrapperCol:{span:e.wrapperCol.span,offset:e.labelCol.span}}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},i=[],s=(t("d3b7"),t("88bc")),o=t.n(s),n=t("33ca"),l=t("2af9"),c={components:{SelectImage:l["f"]},data:function(){return{labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,n["a"]().then((function(a){e.record=a.data.storeInfo,e.setFieldsValue()})).finally((function(){return e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,a=this.form.setFieldsValue;this.$nextTick((function(){a(o()(e,["store_name","describe","logo_image_id"]))}))},handleSubmit:function(e){var a=this;e.preventDefault();var t=this.form.validateFields;t((function(e,t){!e&&a.onFormSubmit(t)}))},onFormSubmit:function(e){var a=this;this.isLoading=!0,n["b"]({form:e}).then((function(e){return a.$message.success(e.message,1.5)})).finally((function(){return a.isLoading=!1}))}}},d=c,u=(t("9a30"),t("2877")),m=Object(u["a"])(d,r,i,!1,null,"7c474c8b",null);a["default"]=m.exports},"9a30":function(e,a,t){"use strict";t("5d1d")},a61f:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"card-title"},[e._v("主题风格")]),a("a-spin",{attrs:{spinning:e.isLoading}},[a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("a-form-model",{ref:"myForm",staticClass:"my-form",attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"主题色系"}},[a("a-radio-group",{model:{value:e.record.mode,callback:function(a){e.$set(e.record,"mode",a)},expression:"record.mode"}},[a("a-radio",{attrs:{value:10}},[e._v("系统推荐")]),a("a-radio",{attrs:{value:20}},[e._v("自定义")])],1)],1),10==e.record.mode?a("a-form-model-item",{attrs:{label:"选择色系"}},[a("div",{staticClass:"color-radio-group"},e._l(e.themeTemplate,(function(t,r){return a("div",{key:r,staticClass:"color-radio-item",style:{backgroundColor:t.mainBg},on:{click:function(a){return e.handleColorRadio(r,t)}}},[e.record.themeTemplateIdx===r?a("a-icon",{attrs:{type:"check"}}):e._e()],1)})),0)]):e._e(),20==e.record.mode?a("div",[a("a-form-model-item",{attrs:{label:"按钮颜色渐变"}},[a("a-radio-group",{on:{change:function(a){return e.onGradualChangeData()}},model:{value:e.record.data.gradualChange,callback:function(a){e.$set(e.record.data,"gradualChange",a)},expression:"record.data.gradualChange"}},[a("a-radio",{attrs:{value:1}},[e._v("开启")]),a("a-radio",{attrs:{value:0}},[e._v("关闭")])],1)],1),a("a-form-model-item",{attrs:{label:"主背景"}},[a("div",{staticClass:"color-picker"},[a("colorPicker",{attrs:{defaultColor:"#fff"},model:{value:e.record.data.mainBg,callback:function(a){e.$set(e.record.data,"mainBg",a)},expression:"record.data.mainBg"}}),e.record.data.gradualChange?a("colorPicker",{attrs:{defaultColor:"#fff"},model:{value:e.record.data.mainBg2,callback:function(a){e.$set(e.record.data,"mainBg2",a)},expression:"record.data.mainBg2"}}):e._e()],1)]),a("a-form-model-item",{attrs:{label:"主文字"}},[a("div",{staticClass:"color-picker"},[a("colorPicker",{attrs:{defaultColor:"#fff"},model:{value:e.record.data.mainText,callback:function(a){e.$set(e.record.data,"mainText",a)},expression:"record.data.mainText"}})],1)]),a("a-form-model-item",{attrs:{label:"副背景"}},[a("div",{staticClass:"color-picker"},[a("colorPicker",{attrs:{defaultColor:"#fff"},model:{value:e.record.data.viceBg,callback:function(a){e.$set(e.record.data,"viceBg",a)},expression:"record.data.viceBg"}}),e.record.data.gradualChange?a("colorPicker",{attrs:{defaultColor:"#fff"},model:{value:e.record.data.viceBg2,callback:function(a){e.$set(e.record.data,"viceBg2",a)},expression:"record.data.viceBg2"}}):e._e()],1)]),a("a-form-model-item",{attrs:{label:"副文字"}},[a("div",{staticClass:"color-picker"},[a("colorPicker",{attrs:{defaultColor:"#fff"},model:{value:e.record.data.viceText,callback:function(a){e.$set(e.record.data,"viceText",a)},expression:"record.data.viceText"}})],1)])],1):e._e(),a("a-form-model-item",{attrs:{wrapperCol:{offset:e.labelCol.span}}},[a("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)],1),a("div",{staticClass:"preview",style:e.appThemeStyle},[a("div",{staticClass:"example-item"},[a("div",{staticClass:"example-item-scale"},[a("img",{staticClass:"bg-image",attrs:{src:"static/img/theme/10.png"}}),a("div",{staticClass:"content"},[a("span",{staticClass:"goods-price"},[a("span",{staticClass:"unit"},[e._v("￥")]),a("span",{staticClass:"value"},[e._v("4969.00")])]),a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn-item btn-item-deputy"},[a("span",[e._v("加入购物车")])]),a("div",{staticClass:"btn-item btn-item-main"},[a("span",[e._v("立即购买")])])])])])]),a("div",{staticClass:"example-item"},[a("div",{staticClass:"example-item-scale"},[a("img",{staticClass:"bg-image",attrs:{src:"static/img/theme/20.png"}}),a("div",{staticClass:"content"},[a("span",{staticClass:"goods-price"},[a("span",{staticClass:"unit"},[e._v("￥")]),a("span",{staticClass:"value"},[e._v("4969.00")])]),a("div",{staticClass:"item-content"},[a("span",[e._v("墨影灰")])]),a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn-item btn-item-main"},[a("span",[e._v("立即购买")])])])])])]),a("div",{staticClass:"example-item"},[a("div",{staticClass:"example-item-scale"},[a("img",{staticClass:"bg-image",attrs:{src:"static/img/theme/30.png"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"swiper-tab"},[a("div",{staticClass:"swiper-tab-item"},[e._v("快递配送")])]),a("div",{staticClass:"flow-cont1"},[e._v("￥4969.00")]),a("div",{staticClass:"flow-cont2"},[e._v("￥4969.00")]),a("div",{staticClass:"flow-cont3"},[e._v("+￥0.00")]),a("div",{staticClass:"flow-cont4"},[e._v("￥4969.00")]),a("div",{staticClass:"flow-btn"},[e._v("提交订单")])])])])])])])],1)},i=[],s=(t("ac1f"),t("5319"),t("d3b7"),t("ddb0"),t("2b0e")),o=t("a9f5"),n=t.n(o),l=t("2ef0"),c=t("f585"),d=t("35c4"),u=(t("b0c0"),function(){var e=this,a=e._self._c;return a("a-spin",{attrs:{spinning:e.isLoading}},[a("a-select",{on:{change:e.onChange},model:{value:e.selectedId,callback:function(a){e.selectedId=a},expression:"selectedId"}},[a("a-select-option",{attrs:{value:-1}},[e._v("全部")]),e._l(e.categoryList,(function(t,r){return a("a-select-option",{key:r,attrs:{value:t.category_id}},[e._v(e._s(t.name))])}))],2)],1)}),m=[],f=t("4d91"),p=t("89a2"),v={name:"SArticleCate",components:{},model:{prop:"value",event:"change"},props:{value:f["a"].integer.def(-1)},data:function(){return{isLoading:!1,categoryList:[],selectedId:-1}},watch:{value:{immediate:!0,handler:function(e){this.selectedId=e}}},created:function(){this.getCategoryList()},methods:{getCategoryList:function(){var e=this;this.isLoading=!0,p["d"]().then((function(a){e.categoryList=a.data.list})).finally((function(){return e.isLoading=!1}))},onChange:function(e){this.$emit("change",e)}}},g=v,h=(t("0c84"),t("2877")),b=Object(h["a"])(g,u,m,!1,null,"ca8435fc",null),C=b.exports;s["a"].use(n.a);var x={mode:10,themeTemplateIdx:-1,data:{gradualChange:0,mainBg:"#fa2209",mainBg2:"#ff6335",mainText:"#ffffff",viceBg:"#ffb100",viceBg2:"#ffb900",viceText:"#ffffff"}},w=[{mainBg:"#fa2209",mainBg2:"#ff6335",mainText:"#ffffff",viceBg:"#ffb100",viceBg2:"#ffb900",viceText:"#ffffff",gradualChange:1},{mainBg:"#ff547b",mainBg2:"#ff547b",mainText:"#ffffff",viceBg:"#FFE6E8",viceBg2:"#FFE6E8",viceText:"#ff547b",gradualChange:0},{mainBg:"#63be72",mainBg2:"#63be72",mainText:"#ffffff",viceBg:"#E1F4E3",viceBg2:"#E1F4E3",viceText:"#50be58",gradualChange:0},{mainBg:"#c3a769",mainBg2:"#c3a769",mainText:"#ffffff",viceBg:"#F3EEE1",viceBg2:"#F3EEE1",viceText:"#C3A769",gradualChange:0},{mainBg:"#2f2f34",mainBg2:"#2f2f34",mainText:"#ffffff",viceBg:"#EBECF2",viceBg2:"#EBECF2",viceText:"#2F2F34",gradualChange:0},{mainBg:"#884cff",mainBg2:"#884cff",mainText:"#ffffff",viceBg:"#EFE6FF",viceBg2:"#EFE6FF",viceText:"#884cff",gradualChange:0},{mainBg:"#65c4aa",mainBg2:"#65c4aa",mainText:"#ffffff",viceBg:"#D9F6EF",viceBg2:"#D9F6EF",viceText:"#65c4aa",gradualChange:0},{mainBg:"#FCC600",mainBg2:"#FCC600",mainText:"#ffffff",viceBg:"#1D262E",viceBg2:"#1D262E",viceText:"#ffffff",gradualChange:0},{mainBg:"#4a90e2",mainBg2:"#4a90e2",mainText:"#ffffff",viceBg:"#D6E9FC",viceBg2:"#D6E9FC",viceText:"#0080FF",gradualChange:0}],_=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},y={components:{ColorRadio:C},data:function(){return{key:d["a"].APP_THEME.value,labelCol:{span:2},wrapperCol:{span:22},isLoading:!1,confirmLoading:!1,themeTemplate:w,record:Object(l["cloneDeep"])(x)}},computed:{appThemeStyle:function(){var e=this.record.data,a={};for(var t in e){var r=_(t);a["--".concat(r)]=e[t]}return a}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,c["a"](this.key).then((function(a){return e.record=a.data.values})).finally((function(){return e.isLoading=!1}))},handleColorRadio:function(e,a){this.record.themeTemplateIdx=e,this.record.data=Object(l["cloneDeep"])(a)},onGradualChangeData:function(){this.record.data.gradualChange||(this.record.data.mainBg2=this.record.data.mainBg,this.record.data.viceBg2=this.record.data.viceBg)},handleSubmit:function(e){var a=this;this.confirmLoading=!0,c["b"](this.key,{form:this.record}).then((function(e){return a.$message.success(e.message,1.5)})).finally((function(e){return a.confirmLoading=!1}))}}},B=y,F=(t("ba35"),Object(h["a"])(B,r,i,!1,null,"5a8a70b4",null));a["default"]=F.exports},ba35:function(e,a,t){"use strict";t("90ac")},de94:function(e,a,t){},f30f:function(e,a,t){"use strict";t.r(a);t("ac1f"),t("841c");var r=function(){var e=this,a=e._self._c;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),a("div",{staticClass:"table-operator"},[a("a-row",[a("a-col",{attrs:{span:5}},[a("a-button",{directives:[{name:"action",rawName:"v-action:add",arg:"add"}],attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("a-col",{staticClass:"flex flex-x-end",attrs:{span:11,offset:8}},[a("a-select",{staticStyle:{width:"220px","margin-right":"20px"},attrs:{placeholder:"请选择地址类型"},model:{value:e.queryParam.type,callback:function(a){e.$set(e.queryParam,"type",a)},expression:"queryParam.type"}},[a("a-select-option",{attrs:{value:0}},[e._v("全部")]),a("a-select-option",{attrs:{value:10}},[e._v("发货地址")]),a("a-select-option",{attrs:{value:20}},[e._v("退货地址")])],1),a("a-input-search",{staticStyle:{"max-width":"300px","min-width":"150px"},attrs:{placeholder:"请输入姓名/联系电话"},on:{search:e.onSearch},model:{value:e.queryParam.search,callback:function(a){e.$set(e.queryParam,"search",a)},expression:"queryParam.search"}})],1)],1)],1),a("s-table",{ref:"table",attrs:{rowKey:"address_id",loading:e.isLoading,columns:e.columns,data:e.loadData,pageSize:15},scopedSlots:e._u([{key:"full_address",fn:function(t){return a("span",{},[a("p",{staticClass:"twoline-hide",staticStyle:{width:"270px"}},[e._v(e._s(t))])])}},{key:"type",fn:function(t){return a("span",{},[a("a-tag",[e._v(e._s(10==t?"发货地址":"退货地址"))])],1)}},{key:"action",fn:function(t,r){return a("span",{},[a("a",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}],staticStyle:{"margin-right":"8px"},on:{click:function(a){return e.handleEdit(r)}}},[e._v("编辑")]),a("a",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}],on:{click:function(a){return e.handleDelete(r)}}},[e._v("删除")])])}}])}),a("AddForm",{ref:"AddForm",on:{handleSubmit:e.handleRefresh}}),a("EditForm",{ref:"EditForm",on:{handleSubmit:e.handleRefresh}})],1)},i=[],s=t("5530"),o=(t("d3b7"),t("4d55")),n=t("2af9"),l=function(){var e=this,a=e._self._c;return a("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"地址类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:10,rules:[{required:!0}]}],expression:"['type', { initialValue: 10, rules: [{ required: true }] }]"}]},[a("a-radio",{attrs:{value:10}},[e._v("发货地址")]),a("a-radio",{attrs:{value:20}},[e._v("退货地址")])],1)],1),a("a-form-item",{attrs:{label:"联系人姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入联系人姓名"}]}],expression:"['name', { rules: [{ required: true, message: '请输入联系人姓名' }] }]"}]})],1),a("a-form-item",{attrs:{label:"联系电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入联系电话"}]}],expression:"['phone', { rules: [{ required: true, message: '请输入联系电话' }] }]"}]})],1),a("a-form-item",{attrs:{label:"选择地区",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("SelectRegion",{directives:[{name:"decorator",rawName:"v-decorator",value:["cascader",{rules:[{required:!0,message:"请选择省市区"}]}],expression:"['cascader', { rules: [{ required: true, message: '请选择省市区' }] }]"}],attrs:{placeholder:"请选择省市区"}})],1),a("a-form-item",{attrs:{label:"详细地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["detail",{rules:[{required:!0,message:"请输入详细地址"}]}],expression:"['detail', { rules: [{ required: true, message: '请输入详细地址' }] }]"}]})],1),a("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入排序值"}]}],expression:"['sort', { initialValue: 100, rules: [{ required: true, message: '请输入排序值' }] }]"}],attrs:{min:0}})],1)],1)],1)],1)},c=[],d={components:{SelectRegion:n["g"]},data:function(){return{title:"新增地址",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this)}},methods:{add:function(){this.visible=!0},handleSubmit:function(e){var a=this;e.preventDefault();var t=this.form.validateFields;t((function(e,t){!e&&a.onFormSubmit(t)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var a=this;this.confirmLoading=!0,o["a"]({form:e}).then((function(t){a.$message.success(t.message,1.5),a.handleCancel(),a.$emit("handleSubmit",e)})).finally((function(){return a.confirmLoading=!1}))}}},u=d,m=t("2877"),f=Object(m["a"])(u,l,c,!1,null,null,null),p=f.exports,v=function(){var e=this,a=e._self._c;return a("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"地址类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:10,rules:[{required:!0}]}],expression:"['type', { initialValue: 10, rules: [{ required: true }] }]"}]},[a("a-radio",{attrs:{value:10}},[e._v("发货地址")]),a("a-radio",{attrs:{value:20}},[e._v("退货地址")])],1)],1),a("a-form-item",{attrs:{label:"联系人姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入联系人姓名"}]}],expression:"['name', { rules: [{ required: true, message: '请输入联系人姓名' }] }]"}]})],1),a("a-form-item",{attrs:{label:"联系电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入联系电话"}]}],expression:"['phone', { rules: [{ required: true, message: '请输入联系电话' }] }]"}]})],1),a("a-form-item",{attrs:{label:"选择地区",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("SelectRegion",{directives:[{name:"decorator",rawName:"v-decorator",value:["cascader",{rules:[{required:!0,message:"请选择省市区"}]}],expression:"['cascader', { rules: [{ required: true, message: '请选择省市区' }] }]"}],attrs:{placeholder:"请选择省市区"}})],1),a("a-form-item",{attrs:{label:"详细地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["detail",{rules:[{required:!0,message:"请输入详细地址"}]}],expression:"['detail', { rules: [{ required: true, message: '请输入详细地址' }] }]"}]})],1),a("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入排序值"}]}],expression:"['sort', { initialValue: 100, rules: [{ required: true, message: '请输入排序值' }] }]"}],attrs:{min:0}})],1)],1)],1)],1)},g=[],h=t("88bc"),b=t.n(h),C={components:{SelectRegion:n["g"]},data:function(){return{title:"编辑地址",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{}}},methods:{edit:function(e){this.visible=!0,this.record=e,this.setFieldsValue()},setFieldsValue:function(){var e=this.record,a=this.form.setFieldsValue;e.cascader=[e.province_id,e.city_id,e.region_id],this.$nextTick((function(){a(b()(e,["type","name","phone","cascader","detail","sort"]))}))},handleSubmit:function(e){var a=this;e.preventDefault();var t=this.form.validateFields;t((function(e,t){!e&&a.onFormSubmit(t)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var a=this;this.confirmLoading=!0,o["d"]({addressId:this.record.address_id,form:e}).then((function(t){a.$message.success(t.message,1.5),a.handleCancel(),a.$emit("handleSubmit",e)})).finally((function(){return a.confirmLoading=!1}))}}},x=C,w=Object(m["a"])(x,v,g,!1,null,null,null),_=w.exports,y={name:"Index",components:{STable:n["c"],AddForm:p,EditForm:_},data:function(){var e=this;return{queryParam:{},isLoading:!1,columns:[{title:"地址ID",dataIndex:"address_id"},{title:"联系人姓名",dataIndex:"name"},{title:"联系电话",dataIndex:"phone"},{title:"详细地址",dataIndex:"full_address",scopedSlots:{customRender:"full_address"}},{title:"地址类型",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"排序",dataIndex:"sort"},{title:"添加时间",dataIndex:"create_time"},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(a){return o["e"](Object(s["a"])(Object(s["a"])({},a),e.queryParam)).then((function(e){return e.data.list}))}}},created:function(){},methods:{handleAdd:function(){this.$refs.AddForm.add()},handleEdit:function(e){this.$refs.EditForm.edit(e)},handleDelete:function(e){var a=this,t=this.$confirm({title:"您确定要删除该记录吗?",content:"删除后不可恢复",onOk:function(){return o["c"]({addressId:e.address_id}).then((function(e){a.$message.success(e.message,1.5),a.handleRefresh()})).finally((function(e){return t.destroy()}))}})},handleRefresh:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.table.refresh(e)},onSearch:function(){this.handleRefresh(!0)}}},B=y,F=Object(m["a"])(B,r,i,!1,null,null,null);a["default"]=F.exports}}]);