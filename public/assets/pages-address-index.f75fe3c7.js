import{o as e,c as s,w as a,n as t,i as d,a as l,b as n,d as i,F as o,e as c,f as r,r as u,t as f,l as h,a0 as _}from"./index-3b24b149.js";import{l as m,d as p,r as g,s as k}from"./address.49ff3c3e.js";import{E as v}from"./index.04a48f44.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";const C=I({components:{Empty:v},data:()=>({options:{},isLoading:!0,list:[],defaultId:null}),onLoad(e){this.options=e},onShow(){this.getPageData()},methods:{getPageData(){const e=this;e.isLoading=!0,Promise.all([e.getDefaultId(),e.getAddressList()]).then((()=>{e.onReorder()})).finally((()=>e.isLoading=!1))},getAddressList(){const e=this;return new Promise(((s,a)=>{m().then((a=>{e.list=a.data.list,s(a)})).catch(a)}))},getDefaultId(){return new Promise(((e,s)=>{const a=this;p().then((s=>{a.defaultId=s.data.defaultId,e(s)})).catch(s)}))},onReorder(){const e=this;e.list.sort((s=>s.address_id==e.defaultId?-1:1))},handleCreate(){this.$navTo("pages/address/create")},handleUpdate(e){this.$navTo("pages/address/update",{addressId:e})},handleRemove(e){const s=this;uni.showModal({title:"提示",content:"您确定要删除当前收货地址吗?",success({confirm:a}){a&&s.onRemove(e)}})},onRemove(e){const s=this;g(e).then((e=>{s.getPageData()}))},handleSetDefault(e){const s=this;k(e).then((a=>{s.defaultId=e,"checkout"===s.options.from&&uni.navigateBack()}))}}},[["render",function(m,p,g,k,v,I){const C=h,y=d,L=_,D=u("empty");return e(),s(y,{class:"container",style:t(m.appThemeStyle)},{default:a((()=>[l(y,{class:"addres-list"},{default:a((()=>[(e(!0),n(o,null,i(v.list,((t,d)=>(e(),s(y,{class:"address-item",key:d},{default:a((()=>[l(y,{class:"contacts"},{default:a((()=>[l(C,{class:"name"},{default:a((()=>[r(f(t.name),1)])),_:2},1024),l(C,{class:"phone"},{default:a((()=>[r(f(t.phone),1)])),_:2},1024)])),_:2},1024),l(y,{class:"address"},{default:a((()=>[(e(!0),n(o,null,i(t.region,((t,d)=>(e(),s(C,{class:"region",key:d},{default:a((()=>[r(f(t),1)])),_:2},1024)))),128)),l(C,{class:"detail"},{default:a((()=>[r(f(t.detail),1)])),_:2},1024)])),_:2},1024),l(y,{class:"line"}),l(y,{class:"item-option"},{default:a((()=>[l(y,{class:"_left"},{default:a((()=>[l(y,{class:"item-radio",onClick:e=>I.handleSetDefault(t.address_id)},{default:a((()=>[l(L,{class:"radio",color:m.appTheme.mainBg,checked:t.address_id==v.defaultId},null,8,["color","checked"]),l(C,{class:"text"},{default:a((()=>[r(f(t.address_id==v.defaultId?"默认":"选择"),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024),l(y,{class:"_right"},{default:a((()=>[l(y,{class:"events"},{default:a((()=>[l(y,{class:"event-item",onClick:e=>I.handleUpdate(t.address_id)},{default:a((()=>[l(C,{class:"iconfont icon-edit"}),l(C,{class:"title"},{default:a((()=>[r("编辑")])),_:1})])),_:2},1032,["onClick"]),l(y,{class:"event-item",onClick:e=>I.handleRemove(t.address_id)},{default:a((()=>[l(C,{class:"iconfont icon-delete"}),l(C,{class:"title"},{default:a((()=>[r("删除")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),v.list.length?c("",!0):(e(),s(D,{key:0,isLoading:v.isLoading,tips:"亲，暂无收货地址"},null,8,["isLoading"])),l(y,{class:"footer-fixed"},{default:a((()=>[l(y,{class:"btn-wrapper"},{default:a((()=>[l(y,{class:"btn-item btn-item-main",onClick:p[0]||(p[0]=e=>I.handleCreate())},{default:a((()=>[r("添加新地址")])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-4be25097"]]);export{C as default};
