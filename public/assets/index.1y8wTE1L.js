import{B as o,r as e,o as s,c as a}from"./index-Drdq8Rgk.js";import{G as t,h as d,S as i}from"./index.C6JO26de.js";import{a as r}from"./cart.xBU3JpT5.js";import{s as n}from"./index.I_5eePpq.js";import{_ as u}from"./_plugin-vue_export-helper.BCo6x5W8.js";const l=u({components:{GoodsSkuPopup:t},props:{btnStyle:{type:Number,default:1}},data:()=>({visible:!1,goods:{},localdata:{}}),computed:{activedBtnBackgroundColor(){return d(this.appTheme.mainBg,.1)}},methods:{async handle(o){this.goods=o,o.spec_type==i.SINGLE.value&&this.singleEvent(),o.spec_type==i.MULTI.value&&this.multiEvent()},singleEvent(){const{goods:o}=this;this.addCart({goods_id:o.goods_id,goods_sku_id:"0",buy_num:1})},async multiEvent(){const o=this,{goods:e}=o,{data:{specData:s}}=await n(e.goods_id);e.skuList=s.skuList,e.specList=s.specList,o.localdata={_id:e.goods_id,name:e.goods_name,goods_thumb:e.goods_image,sku_list:o.getSkuList(),spec_list:o.getSpecList()},this.visible=!0},onChangeValue(o){this.visible=o},getSkuList(){const o=this,{goods:{goods_name:e,goods_image:s,skuList:a}}=o,t=[];return a.forEach((a=>{t.push({_id:a.id,goods_sku_id:a.goods_sku_id,goods_id:a.goods_id,goods_name:e,image:a.image_url?a.image_url:s,price:100*a.goods_price,stock:a.stock_num,spec_value_ids:a.spec_value_ids,sku_name_arr:o.getSkuNameArr(a.spec_value_ids)})})),t},getSkuNameArr(o){const e=this,s=[];return o&&o.forEach(((o,a)=>{const t=e.getSpecValueName(o,a);s.push(t)})),s.length?s:["默认"]},getSpecValueName(o,e){const{goods:{specList:s}}=this;return s[e].valueList.find((e=>e.spec_value_id==o)).spec_value},getSpecList(){const{goods:{specList:o}}=this,e=[];return o.forEach((o=>{const s=[];o.valueList.forEach((o=>{s.push({name:o.spec_value})})),e.push({name:o.spec_name,list:s})})),e.length?e:[{name:"默认",list:[{name:"默认"}]}]},addCart(e){const s=this,{goods_id:a,goods_sku_id:t,buy_num:d}=e;r(a,t,d).then((e=>{s.$toast(e.message,1e3,!1),s.onChangeValue(!1);const a=e.data.cartTotal;o(a),s.$emit("addCart",a)}))}}},[["render",function(o,t,d,i,r,n){const u=e("goods-sku-popup");return s(),a(u,{modelValue:r.visible,onInput:n.onChangeValue,"border-radius":"20",localdata:r.localdata,mode:2,maskCloseAble:!0,priceColor:o.appTheme.mainBg,buyNowBackgroundColor:o.appTheme.mainBg,addCartColor:o.appTheme.viceText,addCartBackgroundColor:o.appTheme.viceBg,activedStyle:{color:o.appTheme.mainBg,borderColor:o.appTheme.mainBg,backgroundColor:n.activedBtnBackgroundColor},onAddCart:n.addCart,buyNowText:"立即购买"},null,8,["modelValue","onInput","localdata","priceColor","buyNowBackgroundColor","addCartColor","addCartBackgroundColor","activedStyle","onAddCart"])}]]);export{l as A};
