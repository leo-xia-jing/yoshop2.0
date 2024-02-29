import{_ as t}from"./u-icon.3564f78b.js";import{x as e,o as i,c as s,w as a,b as o,F as n,d as c,k as r,a as l,h,i as u,$ as d}from"./index-b2e89937.js";import{r as m}from"./uni-app.es.868efe30.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const p=v({name:"u-rate",emits:["update:modelValue","input","change"],props:{value:{type:[Number,String],default:-1},modelValue:{type:[Number,String],default:-1},count:{type:[Number,String],default:5},current:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:32},inactiveColor:{type:String,default:"#b2b2b2"},activeColor:{type:String,default:"#FA3534"},gutter:{type:[Number,String],default:10},minCount:{type:[Number,String],default:0},allowHalf:{type:Boolean,default:!1},activeIcon:{type:String,default:"star-fill"},inactiveIcon:{type:String,default:"star"},customPrefix:{type:String,default:"uicon"},colors:{type:Array,default:()=>[]},icons:{type:Array,default:()=>[]}},data(){return{elId:this.$u.guid(),elClass:this.$u.guid(),starBoxLeft:0,activeIndex:0,starWidth:0,starWidthArr:[]}},created(){this.activeIndex=-1!=this.valueCom?this.valueCom:this.current},watch:{current(t){this.activeIndex=t},valueCom(t){this.activeIndex=t}},computed:{valueCom(){return this.modelValue},decimal(){return this.disabled?100*this.activeIndex%100:this.allowHalf?50:void 0},elActiveIcon(){const t=this.icons.length;if(t&&t<=this.count){const e=Math.round(this.activeIndex/Math.round(this.count/t));return e<1?this.icons[0]:e>t?this.icons[t-1]:this.icons[e-1]}return this.activeIcon},elActiveColor(){const t=this.colors.length;if(t&&t<=this.count){const e=Math.round(this.activeIndex/Math.round(this.count/t));return e<1?this.colors[0]:e>t?this.colors[t-1]:this.colors[e-1]}return this.activeColor}},methods:{getElRectById(){this.$uGetRect("#"+this.elId).then((t=>{this.starBoxLeft=t.left}))},getElRectByClass(){this.$uGetRect("."+this.elClass).then((t=>{this.starWidth=t.width;for(let e=0;e<this.count;e++)this.starWidthArr[e]=(e+1)*this.starWidth}))},touchMove(t){if(this.disabled)return;if(!t.changedTouches[0])return;const e=t.changedTouches[0].pageX-this.starBoxLeft;e<=0&&(this.activeIndex=0);let i=Math.ceil(e/this.starWidth);this.activeIndex=i>this.count?this.count:i,this.activeIndex<this.minCount&&(this.activeIndex=this.minCount),this.emitEvent()},click(t,e){this.disabled||(this.allowHalf,1==t?1==this.activeIndex?this.activeIndex=0:this.activeIndex=1:this.activeIndex=t,this.activeIndex<this.minCount&&(this.activeIndex=this.minCount),this.emitEvent())},emitEvent(){this.$emit("change",this.activeIndex),-1!=this.valueCom&&(this.$emit("input",this.activeIndex),this.$emit("update:modelValue",this.activeIndex))},showDecimalIcon(t){return this.disabled&&parseInt(this.activeIndex)===t}},mounted(){this.getElRectById(),this.getElRectByClass()}},[["render",function(d,v,p,f,I,x){const g=m(e("u-icon"),t),y=u;return i(),s(y,{class:"u-rate",id:I.elId,onTouchmove:h(x.touchMove,["stop","prevent"])},{default:a((()=>[(i(!0),o(n,null,c(p.count,((t,e)=>(i(),s(y,{class:r(["u-star-wrap",[I.elClass]]),key:e},{default:a((()=>[l(g,{name:I.activeIndex>e?x.elActiveIcon:p.inactiveIcon,onClick:t=>x.click(e+1,t),color:I.activeIndex>e?x.elActiveColor:p.inactiveColor,"custom-style":{fontSize:p.size+"rpx",padding:"0 "+(p.gutter/2+"rpx")},"custom-prefix":p.customPrefix,"show-decimal-icon":x.showDecimalIcon(e),percent:x.decimal,"inactive-color":p.inactiveColor},null,8,["name","onClick","color","custom-style","custom-prefix","show-decimal-icon","percent","inactive-color"])])),_:2},1032,["class"])))),128))])),_:1},8,["id","onTouchmove"])}],["__scopeId","data-v-ba10ec0d"]]),f="comment/list",I="comment/listRows",x="comment/total",g=(t,e,i)=>d.get(f,{...e,goodsId:t},i),y=(t,e=5)=>d.get(I,{goodsId:t,limit:e}),C=t=>d.get(x,{goodsId:t});export{p as _,g as a,y as l,C as t};
