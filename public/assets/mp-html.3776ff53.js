import{r as t,o as e,c as s,w as i,b as n,F as a,d as r,n as o,e as l,k as h,m as c,f as d,t as p,a as m,g,l as u,i as f,O as y,_ as b,B as x}from"./index-3b24b149.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";var v={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};const w={isInline:function(t,e){return v[t]||-1!==(e||"").indexOf("display:inline")}},T=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("handler"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.handler=w}})},_={name:"node",options:{},data:()=>({ctrl:{}}),props:{name:String,attrs:{type:Object,default:()=>({})},childs:Array,opts:Array},components:{},mounted(){if(this.$nextTick((()=>{for(this.root=this.$parent;"mp-html"!==this.root.$options.name;this.root=this.root.$parent);})),this.opts[0]){let t;for(t=this.childs.length;t--&&"img"!==this.childs[t].name;);-1!==t&&(this.observer=uni.createIntersectionObserver(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(t=>{t.intersectionRatio&&(this.$set(this.ctrl,"load",1),this.observer.disconnect())})))}},beforeDestroy(){this.observer&&this.observer.disconnect()},methods:{play(t){if(this.root.$emit("play"),this.root.pauseVideo){let e=!1;const s=t.target.id;for(let t=this.root._videos.length;t--;)this.root._videos[t].id===s?e=!0:this.root._videos[t].pause();if(!e){const t=uni.createVideoContext(s,this);t.id=s,this.root.playbackRate&&t.playbackRate(this.root.playbackRate),this.root._videos.push(t)}}},imgTap(t){const e=this.childs[t.currentTarget.dataset.i];e.a?this.linkTap(e.a):e.attrs.ignore||(e.attrs.src=e.attrs.src||e.attrs["data-src"],this.root.$emit("imgtap",e.attrs),this.root.previewImg&&uni.previewImage({current:parseInt(e.attrs.i),urls:this.root.imgList}))},imgLongTap(t){},imgLoad(t){const e=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[e]||-1===this.ctrl[e])&&this.$set(this.ctrl,e,1),this.checkReady()},checkReady(){this.root.lazyLoad||(this.root._unloadimgs-=1,this.root._unloadimgs||setTimeout((()=>{this.root.getRect().then((t=>{this.root.$emit("ready",t)})).catch((()=>{this.root.$emit("ready",{})}))}),350))},linkTap(t){const e=t.currentTarget?this.childs[t.currentTarget.dataset.i]:{},s=e.attrs||t,i=s.href.replace("client://","");this.root.$emit("linktap",Object.assign({innerText:this.root.getText(e.children||[])},s)),i&&("#"===i[0]?this.root.navigateTo(i.substring(1)).catch((()=>{})):i.split("?")[0].includes("://")?this.root.copyLink&&window.open(i):uni.navigateTo({url:"/"+i,fail(){uni.switchTab({url:"/"+i,fail(){}})}}))},mediaError(t){const e=t.currentTarget.dataset.i,s=this.childs[e];if("video"===s.name||"audio"===s.name){let t=(this.ctrl[e]||0)+1;if(t>s.src.length&&(t=0),t<s.src.length)return void this.$set(this.ctrl,e,t)}else if("img"===s.name){if(this.opts[0]&&!this.ctrl.load)return;this.opts[2]&&this.$set(this.ctrl,e,-1),this.checkReady()}this.root&&this.root.$emit("error",{source:s.name,attrs:s.attrs})}}};T(_);const $=k(_,[["render",function(x,k,v,w,T,_){const $=g,N=u,S=t("node",!0),L=f,O=y,C=b;return e(),s(L,{id:v.attrs.id,class:h("_block _"+v.name+" "+v.attrs.class),style:o(v.attrs.style)},{default:i((()=>[(e(!0),n(a,null,r(v.childs,((t,g)=>(e(),n(a,{key:g},["img"===t.name&&!t.t&&(v.opts[1]&&!T.ctrl[g]||T.ctrl[g]<0)?(e(),s($,{key:0,class:"_img",style:o(t.attrs.style),src:T.ctrl[g]<0?v.opts[2]:v.opts[1],mode:"widthFix"},null,8,["style","src"])):l("",!0),"img"===t.name?(e(),n("img",{key:1,id:t.attrs.id,class:h("_img "+t.attrs.class),style:o((-1===T.ctrl[g]?"display:none;":"")+t.attrs.style),src:t.attrs.src||(T.ctrl.load?t.attrs["data-src"]:""),"data-i":g,onLoad:k[0]||(k[0]=(...t)=>_.imgLoad&&_.imgLoad(...t)),onError:k[1]||(k[1]=(...t)=>_.mediaError&&_.mediaError(...t)),onClick:k[2]||(k[2]=c(((...t)=>_.imgTap&&_.imgTap(...t)),["stop"])),onLongpress:k[3]||(k[3]=(...t)=>_.imgLongTap&&_.imgLongTap(...t))},null,46,["id","src","data-i"])):t.text?(e(),s(N,{key:2,decode:""},{default:i((()=>[d(p(t.text),1)])),_:2},1024)):"br"===t.name?(e(),s(N,{key:3},{default:i((()=>[d("\\n")])),_:1})):"a"===t.name?(e(),s(L,{key:4,id:t.attrs.id,class:h((t.attrs.href?"_a ":"")+t.attrs.class),"hover-class":"_hover",style:o("display:inline;"+t.attrs.style),"data-i":g,onClick:c(_.linkTap,["stop"])},{default:i((()=>[m(S,{name:"span",childs:t.children,opts:v.opts,style:{display:"inherit"}},null,8,["childs","opts"])])),_:2},1032,["id","class","style","data-i","onClick"])):"video"===t.name?(e(),s(O,{key:5,id:t.attrs.id,class:h(t.attrs.class),style:o(t.attrs.style),autoplay:t.attrs.autoplay,controls:t.attrs.controls,loop:t.attrs.loop,muted:t.attrs.muted,"object-fit":t.attrs["object-fit"],poster:t.attrs.poster,src:t.src[T.ctrl[g]||0],"data-i":g,onPlay:_.play,onError:_.mediaError},null,8,["id","class","style","autoplay","controls","loop","muted","object-fit","poster","src","data-i","onPlay","onError"])):"iframe"===t.name?(e(),n("iframe",{key:6,style:o(t.attrs.style),allowfullscreen:t.attrs.allowfullscreen,frameborder:t.attrs.frameborder,src:t.attrs.src},null,12,["allowfullscreen","frameborder","src"])):"embed"===t.name?(e(),n("embed",{key:7,style:o(t.attrs.style),src:t.attrs.src},null,12,["src"])):"table"===t.name&&t.c||"li"===t.name?(e(),s(L,{key:8,id:t.attrs.id,class:h("_"+t.name+" "+t.attrs.class),style:o(t.attrs.style)},{default:i((()=>["li"===t.name?(e(),s(S,{key:0,childs:t.children,opts:v.opts},null,8,["childs","opts"])):(e(!0),n(a,{key:1},r(t.children,((t,l)=>(e(),s(L,{key:l,class:h("_"+t.name+" "+t.attrs.class),style:o(t.attrs.style)},{default:i((()=>["td"===t.name||"th"===t.name?(e(),s(S,{key:0,childs:t.children,opts:v.opts},null,8,["childs","opts"])):(e(!0),n(a,{key:1},r(t.children,((t,l)=>(e(),n(a,{key:l},["td"===t.name||"th"===t.name?(e(),s(L,{key:0,class:h("_"+t.name+" "+t.attrs.class),style:o(t.attrs.style)},{default:i((()=>[m(S,{childs:t.children,opts:v.opts},null,8,["childs","opts"])])),_:2},1032,["class","style"])):(e(),s(L,{key:1,class:h("_"+t.name+" "+t.attrs.class),style:o(t.attrs.style)},{default:i((()=>[(e(!0),n(a,null,r(t.children,((t,n)=>(e(),s(L,{key:n,class:h("_"+t.name+" "+t.attrs.class),style:o(t.attrs.style)},{default:i((()=>[m(S,{childs:t.children,opts:v.opts},null,8,["childs","opts"])])),_:2},1032,["class","style"])))),128))])),_:2},1032,["class","style"]))],64)))),128))])),_:2},1032,["class","style"])))),128))])),_:2},1032,["id","class","style"])):t.c||x.handler.isInline(t.name,t.attrs.style)?2===t.c?(e(),s(L,{key:10,id:t.attrs.id,class:h("_block _"+t.name+" "+t.attrs.class),style:o(t.f+";"+t.attrs.style)},{default:i((()=>[(e(!0),n(a,null,r(t.children,((t,i)=>(e(),s(S,{key:i,style:o(t.f),name:t.name,attrs:t.attrs,childs:t.children,opts:v.opts},null,8,["style","name","attrs","childs","opts"])))),128))])),_:2},1032,["id","class","style"])):(e(),s(S,{key:11,style:o(t.f),name:t.name,attrs:t.attrs,childs:t.children,opts:v.opts},null,8,["style","name","attrs","childs","opts"])):(e(),s(C,{key:9,id:t.attrs.id,style:o(t.f),"user-select":v.opts[4],nodes:[t]},null,8,["id","style","user-select","nodes"]))],64)))),128))])),_:1},8,["id","class","style"])}],["__scopeId","data-v-d4aec1db"]]),N={trustTags:I("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:I("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:I("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:I("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…",larr:"←",uarr:"↑",rarr:"→",darr:"↓"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",strike:"text-decoration:line-through",u:"text-decoration:underline",p:"margin:0;padding:0;"},svgDict:{animatetransform:"animateTransform",lineargradient:"linearGradient",viewbox:"viewBox",attributename:"attributeName",repeatcount:"repeatCount",repeatdur:"repeatDur"}},S={},{windowWidth:L}=uni.getSystemInfoSync(),O=I(" ,\r,\n,\t,\f");let C=0;function I(t){const e=Object.create(null),s=t.split(",");for(let i=s.length;i--;)e[s[i]]=!0;return e}function j(t,e){let s=t.indexOf("&");for(;-1!==s;){const i=t.indexOf(";",s+3);let n;if(-1===i)break;"#"===t[s+1]?(n=parseInt(("x"===t[s+2]?"0":"")+t.substring(s+2,i)),isNaN(n)||(t=t.substr(0,s)+String.fromCharCode(n)+t.substr(i+1))):(n=t.substring(s+1,i),(N.entities[n]||"amp"===n&&e)&&(t=t.substr(0,s)+(N.entities[n]||"&")+t.substr(i+1))),s=t.indexOf("&",s+1)}return t}function R(t){let e=t.length-1;for(let s=e;s>=-1;s--)(-1===s||t[s].c||!t[s].name||"div"!==t[s].name&&"p"!==t[s].name&&"h"!==t[s].name[0]||(t[s].attrs.style||"").includes("inline"))&&(e-s>=5&&t.splice(s+1,e-s,{name:"div",attrs:{},children:t.slice(s+1,e+1)}),e=s-1)}function A(t){this.options=t||{},this.tagStyle=Object.assign({},N.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.imgList._unloadimgs=0,this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[],this.pre=(this.options.containerStyle||"").includes("white-space")&&this.options.containerStyle.includes("pre")?2:0}function z(t){this.handler=t}N.ignoreTags.iframe=void 0,N.trustTags.iframe=!0,N.ignoreTags.embed=void 0,N.trustTags.embed=!0,A.prototype.parse=function(t){for(let e=this.plugins.length;e--;)this.plugins[e].onUpdate&&(t=this.plugins[e].onUpdate(t,N)||t);for(new z(this).parse(t);this.stack.length;)this.popNode();return this.nodes.length>50&&R(this.nodes),this.nodes},A.prototype.expose=function(){for(let t=this.stack.length;t--;){const e=this.stack[t];if(e.c||"a"===e.name||"video"===e.name||"audio"===e.name)return;e.c=1}},A.prototype.hook=function(t){for(let e=this.plugins.length;e--;)if(this.plugins[e].onParse&&!1===this.plugins[e].onParse(t,this))return!1;return!0},A.prototype.getUrl=function(t){const e=this.options.domain;return"/"===t[0]?"/"===t[1]?t=(e?e.split("://")[0]:"http")+":"+t:e&&(t=e+t):t.includes("data:")||t.includes("://")||e&&(t=e+"/"+t),t},A.prototype.parseStyle=function(t){const e=t.attrs,s=(this.tagStyle[t.name]||"").split(";").concat((e.style||"").split(";")),i={};let n="";e.id&&!this.xml&&(this.options.useAnchor?this.expose():"img"!==t.name&&"a"!==t.name&&"video"!==t.name&&"audio"!==t.name&&(e.id=void 0)),e.width&&(i.width=parseFloat(e.width)+(e.width.includes("%")?"%":"px"),e.width=void 0),e.height&&(i.height=parseFloat(e.height)+(e.height.includes("%")?"%":"px"),e.height=void 0);for(let a=0,r=s.length;a<r;a++){const t=s[a].split(":");if(t.length<2)continue;const e=t.shift().trim().toLowerCase();let r=t.join(":").trim();if("-"===r[0]&&r.lastIndexOf("-")>0||r.includes("safe"))n+=`;${e}:${r}`;else if(!i[e]||r.includes("import")||!i[e].includes("import")){if(r.includes("url")){let t=r.indexOf("(")+1;if(t){for(;'"'===r[t]||"'"===r[t]||O[r[t]];)t++;r=r.substr(0,t)+this.getUrl(r.substr(t))}}else r.includes("rpx")&&(r=r.replace(/[0-9.]+\s*rpx/g,(t=>parseFloat(t)*L/750+"px")));i[e]=r}}return t.attrs.style=n,i},A.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"===this.tagName&&(this.xml=(this.xml||0)+1)},A.prototype.onAttrName=function(t){"data-"===(t=this.xml?t:t.toLowerCase()).substr(0,5)?"data-src"!==t||this.attrs.src?"img"===this.tagName||"a"===this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},A.prototype.onAttrVal=function(t){const e=this.attrName||"";"style"===e||"href"===e?this.attrs[e]=j(t,!0):e.includes("src")?this.attrs[e]=this.getUrl(j(t,!0)):e&&(this.attrs[e]=t)},A.prototype.onOpenTag=function(t){const e=Object.create(null);e.name=this.tagName,e.attrs=this.attrs,this.options.nodes.length&&(e.type="node"),this.attrs=Object.create(null);const s=e.attrs,i=this.stack[this.stack.length-1],n=i?i.children:this.nodes,a=this.xml?t:N.voidTags[e.name];if(S[e.name]&&(s.class=S[e.name]+(s.class?" "+s.class:"")),"embed"===e.name&&this.expose(),"video"!==e.name&&"audio"!==e.name||("video"!==e.name||s.id||(s.id="v"+C++),s.controls||s.autoplay||(s.controls="T"),e.src=[],s.src&&(e.src.push(s.src),s.src=void 0),this.expose()),a){if(!this.hook(e)||N.ignoreTags[e.name])return void("base"!==e.name||this.options.domain?"source"===e.name&&i&&("video"===i.name||"audio"===i.name)&&s.src&&i.src.push(s.src):this.options.domain=s.href);const t=this.parseStyle(e);if("img"===e.name){if(s.src&&(s.src.includes("webp")&&(e.webp="T"),s.src.includes("data:")&&!s["original-src"]&&(s.ignore="T"),!s.ignore||e.webp||s.src.includes("cloud://"))){for(let n=this.stack.length;n--;){const i=this.stack[n];"a"===i.name&&(e.a=i.attrs),"table"!==i.name||e.webp||s.src.includes("cloud://")||(!t.display||t.display.includes("inline")?e.t="inline-block":e.t=t.display,t.display=void 0),i.c=1}s.i=this.imgList.length.toString();let i=s["original-src"]||s.src;this.imgList.push(i),e.t||(this.imgList._unloadimgs+=1),this.options.lazyLoad&&(s["data-src"]=s.src,s.src=void 0)}"inline"===t.display&&(t.display=""),s.ignore&&(t["max-width"]=t["max-width"]||"100%",s.style+=";-webkit-touch-callout:none"),parseInt(t.width)>L&&(t.height=void 0),isNaN(parseInt(t.width))||(e.w="T"),!isNaN(parseInt(t.height))&&(!t.height.includes("%")||i&&(i.attrs.style||"").includes("height"))&&(e.h="T")}else if("svg"===e.name)return n.push(e),this.stack.push(e),void this.popNode();for(const e in t)t[e]&&(s.style+=`;${e}:${t[e].replace(" !important","")}`);s.style=s.style.substr(1)||void 0}else("pre"===e.name||(s.style||"").includes("white-space")&&s.style.includes("pre"))&&2!==this.pre&&(this.pre=e.pre=1),e.children=[],this.stack.push(e);n.push(e)},A.prototype.onCloseTag=function(t){let e;for(t=this.xml?t:t.toLowerCase(),e=this.stack.length;e--&&this.stack[e].name!==t;);if(-1!==e)for(;this.stack.length>e;)this.popNode();else if("p"===t||"br"===t){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push({name:t,attrs:{class:S[t]||"",style:this.tagStyle[t]||""}})}},A.prototype.popNode=function(){const t=this.stack.pop();let e=t.attrs;const s=t.children,i=this.stack[this.stack.length-1],n=i?i.children:this.nodes;if(!this.hook(t)||N.ignoreTags[t.name])return"title"===t.name&&s.length&&"text"===s[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:s[0].text}),void n.pop();if(t.pre&&2!==this.pre){this.pre=t.pre=void 0;for(let t=this.stack.length;t--;)this.stack[t].pre&&(this.pre=1)}const a={};if("svg"===t.name){if(this.xml>1)return void this.xml--;let s="";const i=e.style;return e.style="",e.xmlns="http://www.w3.org/2000/svg",function t(e){if("text"===e.type)return void(s+=e.text);const i=N.svgDict[e.name]||e.name;s+="<"+i;for(const n in e.attrs){const t=e.attrs[n];t&&(s+=` ${N.svgDict[n]||n}="${t}"`)}if(e.children){s+=">";for(let s=0;s<e.children.length;s++)t(e.children[s]);s+="</"+i+">"}else s+="/>"}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,"+s.replace(/#/g,"%23"),style:i,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(e.align&&("table"===t.name?"center"===e.align?a["margin-inline-start"]=a["margin-inline-end"]="auto":a.float=e.align:a["text-align"]=e.align,e.align=void 0),e.dir&&(a.direction=e.dir,e.dir=void 0),"font"===t.name&&(e.color&&(a.color=e.color,e.color=void 0),e.face&&(a["font-family"]=e.face,e.face=void 0),e.size)){let t=parseInt(e.size);isNaN(t)||(t<1?t=1:t>7&&(t=7),a["font-size"]=["x-small","small","medium","large","x-large","xx-large","xxx-large"][t-1]),e.size=void 0}if((e.class||"").includes("align-center")&&(a["text-align"]="center"),Object.assign(a,this.parseStyle(t)),"table"!==t.name&&parseInt(a.width)>L&&(a["max-width"]="100%",a["box-sizing"]="border-box"),N.blockTags[t.name]?t.name="div":N.trustTags[t.name]||this.xml||(t.name="span"),"a"===t.name||"ad"===t.name||"iframe"===t.name)this.expose();else if("video"===t.name)(a.height||"").includes("auto")&&(a.height=void 0);else if("ul"!==t.name&&"ol"!==t.name||!t.c){if("table"===t.name){let i=parseFloat(e.cellpadding),n=parseFloat(e.cellspacing);const r=parseFloat(e.border),o=a["border-color"],l=a["border-style"];if(t.c&&(isNaN(i)&&(i=2),isNaN(n)&&(n=2)),r&&(e.style+=`;border:${r}px ${l||"solid"} ${o||"gray"}`),t.flag&&t.c){a.display="grid",n?(a["grid-gap"]=n+"px",a.padding=n+"px"):r&&(e.style+=";border-left:0;border-top:0");const h=[],c=[],d=[],p={};!function t(e){for(let s=0;s<e.length;s++)"tr"===e[s].name?c.push(e[s]):t(e[s].children||[])}(s);for(let t=1;t<=c.length;t++){let e=1;for(let s=0;s<c[t-1].children.length;s++){const a=c[t-1].children[s];if("td"===a.name||"th"===a.name){for(;p[t+"."+e];)e++;let s=a.attrs.style||"",c=s.indexOf("width")?s.indexOf(";width"):0;if(-1!==c){let t=s.indexOf(";",c+6);-1===t&&(t=s.length),a.attrs.colspan||(h[e]=s.substring(c?c+7:6,t)),s=s.substr(0,c)+s.substr(t)}if(s+=";display:flex",c=s.indexOf("vertical-align"),-1!==c){const t=s.substr(c+15,10);t.includes("middle")?s+=";align-items:center":t.includes("bottom")&&(s+=";align-items:flex-end")}else s+=";align-items:center";if(c=s.indexOf("text-align"),-1!==c){const t=s.substr(c+11,10);t.includes("center")?s+=";justify-content: center":t.includes("right")&&(s+=";justify-content: right")}if(s=(r?`;border:${r}px ${l||"solid"} ${o||"gray"}`+(n?"":";border-right:0;border-bottom:0"):"")+(i?`;padding:${i}px`:"")+";"+s,a.attrs.colspan&&(s+=`;grid-column-start:${e};grid-column-end:${e+parseInt(a.attrs.colspan)}`,a.attrs.rowspan||(s+=`;grid-row-start:${t};grid-row-end:${t+1}`),e+=parseInt(a.attrs.colspan)-1),a.attrs.rowspan){s+=`;grid-row-start:${t};grid-row-end:${t+parseInt(a.attrs.rowspan)}`,a.attrs.colspan||(s+=`;grid-column-start:${e};grid-column-end:${e+1}`);for(let s=1;s<a.attrs.rowspan;s++)for(let i=0;i<(a.attrs.colspan||1);i++)p[t+s+"."+(e-i)]=1}s&&(a.attrs.style=s),d.push(a),e++}}if(1===t){let t="";for(let s=1;s<e;s++)t+=(h[s]?h[s]:"auto")+" ";a["grid-template-columns"]=t}}t.children=d}else t.c&&(a.display="table"),isNaN(n)||(a["border-spacing"]=n+"px"),(r||i)&&function t(e){for(let s=0;s<e.length;s++){const n=e[s];"th"===n.name||"td"===n.name?(r&&(n.attrs.style=`border:${r}px ${l||"solid"} ${o||"gray"};${n.attrs.style||""}`),i&&(n.attrs.style=`padding:${i}px;${n.attrs.style||""}`)):n.children&&t(n.children)}}(s);if(this.options.scrollTable&&!(e.style||"").includes("inline")){const s=Object.assign({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[s],e=s.attrs}}else if("td"!==t.name&&"th"!==t.name||!e.colspan&&!e.rowspan)if("ruby"===t.name){t.name="span";for(let t=0;t<s.length-1;t++)"text"===s[t].type&&"rt"===s[t+1].name&&(s[t]={name:"div",attrs:{style:"display:inline-block;text-align:center"},children:[{name:"div",attrs:{style:"font-size:50%;"+(s[t+1].attrs.style||"")},children:s[t+1].children},s[t]]},s.splice(t+1,1))}else t.c&&function(t){t.c=2;for(let e=t.children.length;e--;){const s=t.children[e];s.c&&"table"!==s.name||(t.c=1)}}(t);else for(let o=this.stack.length;o--;)if("table"===this.stack[o].name){this.stack[o].flag=1;break}}else{const t={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};t[e.type]&&(e.style+=";list-style-type:"+t[e.type],e.type=void 0);for(let e=s.length;e--;)"li"===s[e].name&&(s[e].c=1)}if((a.display||"").includes("flex")&&!t.c)for(let o=s.length;o--;){const t=s[o];t.f&&(t.attrs.style=(t.attrs.style||"")+t.f,t.f=void 0)}const r=i&&((i.attrs.style||"").includes("flex")||(i.attrs.style||"").includes("grid"))&&!t.c;r&&(t.f=";max-width:100%"),s.length>=50&&t.c&&!(a.display||"").includes("flex")&&R(s);for(const o in a)if(a[o]){const s=`;${o}:${a[o].replace(" !important","")}`;r&&(o.includes("flex")&&"flex-direction"!==o||"align-self"===o||o.includes("grid")||"-"===a[o][0]||o.includes("width")&&s.includes("%"))?(t.f+=s,"width"===o&&(e.style+=";width:100%")):e.style+=s}e.style=e.style.substr(1)||void 0},A.prototype.onText=function(t){if(!this.pre){let e,s="";for(let i=0,n=t.length;i<n;i++)O[t[i]]?(" "!==s[s.length-1]&&(s+=" "),"\n"!==t[i]||e||(e=!0)):s+=t[i];if(" "===s){if(e)return;{const t=this.stack[this.stack.length-1];if(t&&"t"===t.name[0])return}}t=s}const e=Object.create(null);if(e.type="text",e.text=j(t),this.hook(e)){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push(e)}},z.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(let e=this.content.length;-1!==this.i&&this.i<e;)this.state()},z.prototype.checkClose=function(t){const e="/"===this.content[this.i];return!!(">"===this.content[this.i]||e&&">"===this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=e?2:1,this.start=this.i,this.handler.onOpenTag(e),"script"===this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!==this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},z.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1===this.i)return void(this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length)));const t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"===t||"!"===t||"?"===t){this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i));const e=this.content[this.i+2];if("/"===t&&(e>="a"&&e<="z"||e>="A"&&e<="Z"))return this.i+=2,this.start=this.i,void(this.state=this.endTag);let s="--\x3e";"!"===t&&"-"===this.content[this.i+2]&&"-"===this.content[this.i+3]||(s=">"),this.i=this.content.indexOf(s,this.i),-1!==this.i&&(this.i+=s.length,this.start=this.i)}else this.i++},z.prototype.tagName=function(){if(O[this.content[this.i]]){for(this.handler.onTagName(this.content.substring(this.start,this.i));O[this.content[++this.i]];);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},z.prototype.attrName=function(){let t=this.content[this.i];if(O[t]||"="===t){this.handler.onAttrName(this.content.substring(this.start,this.i));let e="="===t;const s=this.content.length;for(;++this.i<s;)if(t=this.content[this.i],!O[t]){if(this.checkClose())return;if(e)return this.start=this.i,void(this.state=this.attrVal);if("="!==this.content[this.i])return this.start=this.i,void(this.state=this.attrName);e=!0}}else this.checkClose("onAttrName")||this.i++},z.prototype.attrVal=function(){const t=this.content[this.i],e=this.content.length;if('"'===t||"'"===t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1===this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<e;this.i++){if(O[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}for(;O[this.content[++this.i]];);this.i<e&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},z.prototype.endTag=function(){const t=this.content[this.i];if(O[t]||">"===t||"/"===t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!==t&&(this.i=this.content.indexOf(">",this.i),-1===this.i))return;this.start=++this.i,this.state=this.text}else this.i++};const B=[];const V=k({name:"mp-html",data:()=>({nodes:[]}),props:{containerStyle:{type:String,default:""},content:{type:String,default:""},copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},emits:["load","ready","imgtap","linktap","play","error"],components:{node:$},watch:{content(t){this.setContent(t)}},created(){this.plugins=[];for(let t=B.length;t--;)this.plugins.push(new B[t](this))},mounted(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy(){this._hook("onDetached")},methods:{in(t,e,s){t&&e&&s&&(this._in={page:t,selector:e,scrollTop:s})},navigateTo(t,e){return new Promise(((s,i)=>{if(!this.useAnchor)return void i(Error("Anchor is disabled"));e=e||parseInt(this.useAnchor)||0;const n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"._root")+(t?` #${t}`:"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((t=>{if(!t[0])return void i(Error("Label not found"));const n=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+e;this._in?this._in.page[this._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),s()}))}))},getText(t){let e="";return function t(s){for(let i=0;i<s.length;i++){const n=s[i];if("text"===n.type)e+=n.text.replace(/&amp;/g,"&");else if("br"===n.name)e+="\n";else{const s="p"===n.name||"div"===n.name||"tr"===n.name||"li"===n.name||"h"===n.name[0]&&n.name[1]>"0"&&n.name[1]<"7";s&&e&&"\n"!==e[e.length-1]&&(e+="\n"),n.children&&t(n.children),s&&"\n"!==e[e.length-1]?e+="\n":"td"!==n.name&&"th"!==n.name||(e+="\t")}}}(t||this.nodes),e},getRect(){return new Promise(((t,e)=>{uni.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((s=>s[0]?t(s[0]):e(Error("Root label not found"))))}))},pauseMedia(){for(let t=(this._videos||[]).length;t--;)this._videos[t].pause()},setPlaybackRate(t){this.playbackRate=t;for(let e=(this._videos||[]).length;e--;)this._videos[e].playbackRate(t)},setContent(t,e){e&&this.imgList||(this.imgList=[]);const s=new A(this).parse(t);if(this.$set(this,"nodes",e?(this.nodes||[]).concat(s):s),this._videos=[],this.$nextTick((()=>{this._hook("onLoad"),this.$emit("load")})),this.lazyLoad||this.imgList._unloadimgs<this.imgList.length/2){let t=0;const e=s=>{s&&s.height||(s={}),s.height===t?this.$emit("ready",s):(t=s.height,setTimeout((()=>{this.getRect().then(e).catch(e)}),350))};this.getRect().then(e).catch(e)}else this.imgList._unloadimgs||this.getRect().then((t=>{this.$emit("ready",t)})).catch((()=>{this.$emit("ready",{})}))},_hook(t){for(let e=B.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()}}},[["render",function(n,a,r,l,c,d){const p=t("node"),m=f;return e(),s(m,{id:"_root",class:h((r.selectable?"_select ":"")+"_root"),style:o(r.containerStyle)},{default:i((()=>[c.nodes[0]?(e(),s(p,{key:1,childs:c.nodes,opts:[r.lazyLoad,r.loadingImg,r.errorImg,r.showImgMenu,r.selectable],name:"span"},null,8,["childs","opts"])):x(n.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}],["__scopeId","data-v-35b639b7"]]);export{V as _};
