import{_ as e}from"./u-tabs.be288a3e.js";import{p as t,q as a,o as s,c as l,w as o,n,i,a as u,b as r,d as c,F as p,x as m,k as d,f,t as _,e as y,l as h}from"./index-b2e89937.js";import{r as b}from"./uni-app.es.868efe30.js";import{M as x,_ as T}from"./mescroll-mixins.ac1843d6.js";import{l as C}from"./myCoupon.2db44d16.js";import{C as g}from"./CouponType.ef8dccdd.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const k=["red","blue","violet","yellow"],U=[{name:"未使用",value:"isUnused"},{name:"已使用",value:"isUse"},{name:"已过期",value:"isExpire"}];const j=v({mixins:[x],data:()=>({CouponTypeEnum:g,color:k,tabs:U,curTab:0,list:t(),upOption:{auto:!0,page:{size:15},noMoreSize:4,empty:{tip:"亲，暂无相关优惠券"}}}),onLoad(e){},methods:{upCallback(e){const t=this;t.getCouponList(e.num).then((e=>{const a=e.data.length,s=e.data.total;t.mescroll.endBySize(a,s)})).catch((()=>t.mescroll.endErr()))},getCouponList(e=1){const t=this;return new Promise(((s,l)=>{C({dataType:t.getTabValue(),page:e},{load:!1}).then((l=>{const o=l.data.list;t.list.data=a(o,t.list,e),s(o)}))}))},getTabValue(){return this.tabs[this.curTab].value},onChangeTab(e){this.curTab=e,this.onRefreshList()},onRefreshList(){this.list=t(),setTimeout((()=>{this.mescroll.resetUpScroll()}),120)}}},[["render",function(t,a,x,C,g,v){const k=b(m("u-tabs"),e),U=i,j=h,E=b(m("mescroll-body"),T);return s(),l(U,{class:"container",style:n(t.appThemeStyle)},{default:o((()=>[u(E,{ref:"mescrollRef",sticky:!0,onInit:t.mescrollInit,down:{use:!1},up:g.upOption,onUp:v.upCallback},{default:o((()=>[u(k,{list:g.tabs,"is-scroll":!1,modelValue:g.curTab,"onUpdate:modelValue":a[0]||(a[0]=e=>g.curTab=e),"active-color":t.appTheme.mainBg,duration:.2,onChange:v.onChangeTab},null,8,["list","modelValue","active-color","duration","onChange"]),u(U,{class:"coupon-list"},{default:o((()=>[(s(!0),r(p,null,c(g.list.data,((e,t)=>(s(),l(U,{class:"coupon-item",key:t},{default:o((()=>[u(U,{class:d(["item-wrapper",["color-"+(e.state.value?g.color[t%g.color.length]:"gray")]])},{default:o((()=>[u(U,{class:"coupon-type"},{default:o((()=>[f(_(g.CouponTypeEnum[e.coupon_type].name),1)])),_:2},1024),u(U,{class:"tip dis-flex flex-dir-column flex-x-center"},{default:o((()=>[e.coupon_type==g.CouponTypeEnum.FULL_DISCOUNT.value?(s(),l(U,{key:0},{default:o((()=>[u(j,{class:"f-30"},{default:o((()=>[f("￥")])),_:1}),u(j,{class:"money"},{default:o((()=>[f(_(e.reduce_price),1)])),_:2},1024)])),_:2},1024)):y("",!0),e.coupon_type==g.CouponTypeEnum.DISCOUNT.value?(s(),l(j,{key:1,class:"money"},{default:o((()=>[f(_(e.discount)+"折",1)])),_:2},1024)):y("",!0),u(j,{class:"pay-line"},{default:o((()=>[f("满"+_(e.min_price)+"元可用",1)])),_:2},1024)])),_:2},1024),u(U,{class:"split-line"}),u(U,{class:"content dis-flex flex-dir-column flex-x-between"},{default:o((()=>[u(U,{class:"title"},{default:o((()=>[f(_(e.name),1)])),_:2},1024),u(U,{class:"bottom dis-flex flex-y-center"},{default:o((()=>[u(U,{class:"time flex-box"},{default:o((()=>[e.start_time===e.end_time?(s(),r(p,{key:0},[f(_(e.start_time)+" 当天有效",1)],64)):(s(),r(p,{key:1},[f(_(e.start_time)+"~"+_(e.end_time),1)],64))])),_:2},1024),u(U,{class:"receive state"},{default:o((()=>[u(j,null,{default:o((()=>[f(_(e.state.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["onInit","up","onUp"])])),_:1},8,["style"])}],["__scopeId","data-v-4565949d"]]);export{j as default};
