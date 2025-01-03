import{_ as e}from"./u-tabs.DDpHGTt6.js";import{m as a,p as s,q as t,r as o,c as l,w as r,n,i,o as c,a as m,b as u,d,F as p,f as g,t as f,e as _,l as h,g as T}from"./index-Drdq8Rgk.js";import{r as b}from"./uni-app.es.D6sSmWWN.js";import{a as y,t as v,_ as I}from"./comment.OlXf2QsQ.js";import{M as C,_ as k}from"./mescroll-mixins.Bqk3PzlT.js";import{A as w}from"./index.MPyfAH97.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./u-icon.BZ5A4twx.js";const j=[{name:"全部",scoreType:-1},{name:"好评",scoreType:10},{name:"中评",scoreType:20},{name:"差评",scoreType:30}];const S=x({components:{AvatarImage:w},mixins:[C],data:()=>({goodsId:null,curTab:0,list:a(),total:{all:0,negative:0,praise:0,review:0},rates:{10:5,20:3,30:1},tabs:j,upOption:{auto:!0,page:{size:15},noMoreSize:4,empty:{tip:"亲，暂无相关商品评价"}}}),onLoad(e){this.goodsId=e.goodsId,this.getTotal()},methods:{upCallback(e){const a=this;a.getCommentList(e.num).then((e=>{const s=e.data.length,t=e.data.total;a.mescroll.endBySize(s,t)})).catch((()=>a.mescroll.endErr()))},getCommentList(e=1){const a=this;return new Promise(((t,o)=>{y(a.goodsId,{scoreType:a.getScoreType(),page:e},{load:!1}).then((o=>{const l=o.data.list;a.list.data=s(l,a.list,e),t(l)}))}))},getScoreType(){return this.tabs[this.curTab].scoreType},getTotal(){const e=this;v(e.goodsId).then((a=>{const s=a.data.total;e.getTabs(s)}))},getTabs(e){const a=this.tabs;a[0].name=`全部(${e.all})`,a[1].name=`好评(${e.praise})`,a[2].name=`中评(${e.review})`,a[3].name=`差评(${e.negative})`},onChangeTab(e){this.curTab=e,this.onRefreshList()},onRefreshList(){this.list=a(),setTimeout((()=>{this.mescroll.resetUpScroll()}),120)},onPreviewImages(e,a){const s=this.list.data[e].images.map((e=>e.image_url));uni.previewImage({current:s[a],urls:s})}}},[["render",function(a,s,y,v,C,w){const x=b(t("u-tabs"),e),j=o("avatar-image"),S=i,L=h,P=b(t("u-rate"),I),U=T,$=b(t("mescroll-body"),k);return c(),l(S,{class:"container",style:n(a.appThemeStyle)},{default:r((()=>[m($,{ref:"mescrollRef",sticky:!0,onInit:a.mescrollInit,down:{use:!1},up:C.upOption,onUp:w.upCallback},{default:r((()=>[m(x,{list:C.tabs,"is-scroll":!1,modelValue:C.curTab,"onUpdate:modelValue":s[0]||(s[0]=e=>C.curTab=e),"active-color":a.appTheme.mainBg,duration:.2,onChange:w.onChangeTab},null,8,["list","modelValue","active-color","onChange"]),m(S,{class:"comment-list"},{default:r((()=>[(c(!0),u(p,null,d(C.list.data,((e,a)=>(c(),l(S,{class:"comment-item",key:a},{default:r((()=>[m(S,{class:"item-head"},{default:r((()=>[m(S,{class:"user-info"},{default:r((()=>[m(S,{class:"user-avatar"},{default:r((()=>[m(j,{url:e.user.avatar_url,width:50},null,8,["url"])])),_:2},1024),m(L,{class:"user-name f-26"},{default:r((()=>[g(f(e.user.nick_name),1)])),_:2},1024)])),_:2},1024),m(P,{"active-color":"#f4a213",current:C.rates[e.score],disabled:!0},null,8,["current"]),m(S,{class:"flex-box f-22 col-9 t-r"},{default:r((()=>[g(f(e.create_time),1)])),_:2},1024)])),_:2},1024),m(S,{class:"item-content m-top20"},{default:r((()=>[m(L,{class:"f-26"},{default:r((()=>[g(f(e.content),1)])),_:2},1024)])),_:2},1024),e.images.length?(c(),l(S,{key:0,class:"images-list clearfix"},{default:r((()=>[(c(!0),u(p,null,d(e.images,((e,s)=>(c(),l(S,{class:"image-preview",key:s},{default:r((()=>[m(U,{class:"image",mode:"aspectFill",src:e.image_url,onClick:e=>w.onPreviewImages(a,s)},null,8,["src","onClick"])])),_:2},1024)))),128))])),_:2},1024)):_("",!0),m(S,{class:"goods-props clearfix"},{default:r((()=>[(c(!0),u(p,null,d(e.orderGoods.goods_props,((e,a)=>(c(),l(S,{class:"goods-props-item",key:a},{default:r((()=>[m(L,{class:"group-name"},{default:r((()=>[g(f(e.group.name)+": ",1)])),_:2},1024),m(L,null,{default:r((()=>[g(f(e.value.name)+"；",1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["onInit","up","onUp"])])),_:1},8,["style"])}],["__scopeId","data-v-4294a7df"]]);export{S as default};
