import{_ as e}from"./u-tabs.be288a3e.js";import{p as a,q as t,o as s,c as l,w as o,n,i,a as r,b as u,d,F as c,x as m,f as _,t as p,e as f,l as h,g}from"./index-b2e89937.js";import{r as y}from"./uni-app.es.868efe30.js";import{M as v,_ as C}from"./mescroll-mixins.ac1843d6.js";import{a as E,D as T,b,P as k,R as S}from"./OrderType.0c6999e7.js";import{l as R,c as D,r as L}from"./order.56cadccd.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const I=[{name:"全部",value:"all"},{name:"待支付",value:"payment"},{name:"待发货",value:"delivery"},{name:"待收货",value:"received"},{name:"待评价",value:"comment"}];const P=x({mixins:[v],data:()=>({DeliveryStatusEnum:E,DeliveryTypeEnum:T,OrderStatusEnum:b,PayStatusEnum:k,ReceiptStatusEnum:S,options:{dataType:"all"},tabs:I,curTab:0,list:a(),upOption:{auto:!0,page:{size:15},noMoreSize:4,empty:{tip:"亲，暂无订单记录"}},canReset:!1}),onLoad(e){this.initCurTab(e),uni.$on("syncRefresh",(e=>{this.canReset=e}))},onShow(){this.canReset&&this.onRefreshList(),this.canReset=!1},onUnload(){uni.$off("syncRefresh")},methods:{initCurTab(e){const a=this;if(e.dataType){const t=a.tabs.findIndex((a=>a.value==e.dataType));a.curTab=t>-1?t:0}},upCallback(e){const a=this;a.getOrderList(e.num).then((e=>{const t=e.data.length,s=e.data.total;a.mescroll.endBySize(t,s)})).catch((()=>a.mescroll.endErr()))},getOrderList(e=1){const a=this;return new Promise(((s,l)=>{R({dataType:a.getTabValue(),page:e},{load:!1}).then((l=>{const o=a.initList(l.data.list);a.list.data=t(o,a.list,e),s(o)}))}))},initList:e=>(e.data.forEach((e=>{e.total_num=0,e.goods.forEach((a=>{e.total_num+=a.total_num}))})),e),getTabValue(){return this.tabs[this.curTab].value},onChangeTab(e){this.curTab=e,this.onRefreshList()},onRefreshList(){this.list=a(),setTimeout((()=>{this.mescroll.resetUpScroll()}),120)},onCancel(e){const a=this;uni.showModal({title:"友情提示",content:"确认要取消该订单吗？",success(t){t.confirm&&D(e).then((e=>{a.$toast(e.message),a.onRefreshList()}))}})},onReceipt(e){const a=this;uni.showModal({title:"友情提示",content:"确认收到商品了吗？",success(t){t.confirm&&L(e).then((e=>{a.$success(e.message),a.onRefreshList()}))}})},onPay(e){this.$navTo("pages/checkout/cashier/index",{orderId:e})},handleTargetDetail(e){this.$navTo("pages/order/detail",{orderId:e})},handleTargetComment(e){this.$navTo("pages/order/comment/index",{orderId:e})}}},[["render",function(a,t,v,E,T,b){const k=y(m("u-tabs"),e),S=h,R=i,D=g,L=y(m("mescroll-body"),C);return s(),l(R,{class:"container",style:n(a.appThemeStyle)},{default:o((()=>[r(L,{ref:"mescrollRef",sticky:!0,onInit:a.mescrollInit,down:{native:!0},onDown:a.downCallback,up:T.upOption,onUp:b.upCallback},{default:o((()=>[r(k,{list:T.tabs,"is-scroll":!1,modelValue:T.curTab,"onUpdate:modelValue":t[0]||(t[0]=e=>T.curTab=e),"active-color":a.appTheme.mainBg,duration:.2,onChange:b.onChangeTab},null,8,["list","modelValue","active-color","duration","onChange"]),r(R,{class:"order-list"},{default:o((()=>[(s(!0),u(c,null,d(T.list.data,((e,a)=>(s(),l(R,{class:"order-item",key:a},{default:o((()=>[r(R,{class:"item-top"},{default:o((()=>[r(R,{class:"item-top-left"},{default:o((()=>[r(S,{class:"order-time"},{default:o((()=>[_(p(e.create_time),1)])),_:2},1024)])),_:2},1024),r(R,{class:"item-top-right"},{default:o((()=>[r(S,{class:"state-text"},{default:o((()=>[_(p(e.state_text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(R,{class:"goods-list",onClick:a=>b.handleTargetDetail(e.order_id)},{default:o((()=>[(s(!0),u(c,null,d(e.goods,((e,a)=>(s(),l(R,{class:"goods-item",key:a},{default:o((()=>[r(R,{class:"goods-image"},{default:o((()=>[r(D,{class:"image",src:e.goods_image,mode:"scaleToFill"},null,8,["src"])])),_:2},1024),r(R,{class:"goods-content"},{default:o((()=>[r(R,{class:"goods-title"},{default:o((()=>[r(S,{class:"twoline-hide"},{default:o((()=>[_(p(e.goods_name),1)])),_:2},1024)])),_:2},1024),r(R,{class:"goods-props clearfix"},{default:o((()=>[(s(!0),u(c,null,d(e.goods_props,((e,a)=>(s(),l(R,{class:"goods-props-item",key:a},{default:o((()=>[r(S,null,{default:o((()=>[_(p(e.value.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024),r(R,{class:"goods-trade"},{default:o((()=>[r(R,{class:"goods-price"},{default:o((()=>[r(S,{class:"unit"},{default:o((()=>[_("￥")])),_:1}),r(S,{class:"value"},{default:o((()=>[_(p(e.is_user_grade?e.grade_goods_price:e.goods_price),1)])),_:2},1024)])),_:2},1024),r(R,{class:"goods-num"},{default:o((()=>[r(S,null,{default:o((()=>[_("×"+p(e.total_num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["onClick"]),r(R,{class:"order-total"},{default:o((()=>[r(S,null,{default:o((()=>[_("共"+p(e.total_num)+"件商品，总金额",1)])),_:2},1024),r(S,{class:"unit"},{default:o((()=>[_("￥")])),_:1}),r(S,{class:"money"},{default:o((()=>[_(p(e.pay_price),1)])),_:2},1024)])),_:2},1024),e.order_status!=T.OrderStatusEnum.CANCELLED.value?(s(),l(R,{key:0,class:"order-handle"},{default:o((()=>[r(R,{class:"btn-group clearfix"},{default:o((()=>[e.pay_status==T.PayStatusEnum.PENDING.value?(s(),l(R,{key:0,class:"btn-item",onClick:a=>b.onCancel(e.order_id)},{default:o((()=>[_("取消")])),_:2},1032,["onClick"])):f("",!0),e.order_status!=T.OrderStatusEnum.APPLY_CANCEL.value?(s(),u(c,{key:1},[e.pay_status==T.PayStatusEnum.SUCCESS.value&&e.delivery_status==T.DeliveryStatusEnum.NOT_DELIVERED.value?(s(),l(R,{key:0,class:"btn-item",onClick:a=>b.onCancel(e.order_id)},{default:o((()=>[_("申请取消")])),_:2},1032,["onClick"])):f("",!0)],64)):(s(),l(R,{key:2,class:"f-28 col-8"},{default:o((()=>[_("取消申请中")])),_:1})),e.pay_status==T.PayStatusEnum.PENDING.value?(s(),l(R,{key:3,class:"btn-item active",onClick:a=>b.onPay(e.order_id)},{default:o((()=>[_("去支付")])),_:2},1032,["onClick"])):f("",!0),e.delivery_status==T.DeliveryStatusEnum.DELIVERED.value&&e.receipt_status==T.ReceiptStatusEnum.NOT_RECEIVED.value?(s(),l(R,{key:4,class:"btn-item active",onClick:a=>b.onReceipt(e.order_id)},{default:o((()=>[_("确认收货")])),_:2},1032,["onClick"])):f("",!0),e.order_status==T.OrderStatusEnum.COMPLETED.value&&0==e.is_comment?(s(),l(R,{key:5,class:"btn-item",onClick:a=>b.handleTargetComment(e.order_id)},{default:o((()=>[_("评价")])),_:2},1032,["onClick"])):f("",!0)])),_:2},1024)])),_:2},1024)):f("",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["onInit","onDown","up","onUp"])])),_:1},8,["style"])}],["__scopeId","data-v-ee1733f2"]]);export{P as default};
