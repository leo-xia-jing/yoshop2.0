import{q as e,o as t,c as r,w as i,a as n,n as a,f as l,e as s,h as o,t as u,z as d,k as f,l as c,i as p,a5 as h,I as m}from"./index-Drdq8Rgk.js";import{_ as g}from"./u-icon.BZ5A4twx.js";import{r as y}from"./uni-app.es.D6sSmWWN.js";import{E as b}from"./emitter.DrjJCwnj.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},S.apply(this,arguments)}var _=/%[sdj%]/g,w=function(){};function x(e){if(!e||!e.length)return null;var t={};return e.forEach((function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)})),t}function q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=1,n=t[0],a=t.length;if("function"==typeof n)return n.apply(null,t.slice(1));if("string"==typeof n){for(var l=String(n).replace(_,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}})),s=t[i];i<a;s=t[++i])l+=" "+s;return l}return n}function C(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function k(e,t,r){var i=0,n=e.length;!function a(l){if(l&&l.length)r(l);else{var s=i;i+=1,s<n?t(e[s],a):r([])}}([])}function F(e,t,r,i){if(t.first){var n=new Promise((function(t,n){var a=function(e){var t=[];return Object.keys(e).forEach((function(r){t.push.apply(t,e[r])})),t}(e);k(a,r,(function(e){return i(e),e.length?n({errors:e,fields:x(e)}):t()}))}));return n.catch((function(e){return e})),n}var a=t.firstFields||[];!0===a&&(a=Object.keys(e));var l=Object.keys(e),s=l.length,o=0,u=[],d=new Promise((function(t,n){var d=function(e){if(u.push.apply(u,e),++o===s)return i(u),u.length?n({errors:u,fields:x(u)}):t()};l.length||(i(u),t()),l.forEach((function(t){var i=e[t];-1!==a.indexOf(t)?k(i,r,d):function(e,t,r){var i=[],n=0,a=e.length;function l(e){i.push.apply(i,e),++n===a&&r(i)}e.forEach((function(e){t(e,l)}))}(i,r,d)}))}));return d.catch((function(e){return e})),d}function O(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function A(e,t){if(t)for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];"object"==typeof i&&"object"==typeof e[r]?e[r]=S({},e[r],{},i):e[r]=i}return e}function j(e,t,r,i,n,a){!e.required||r.hasOwnProperty(e.field)&&!C(t,a||e.type)||i.push(q(n.messages.required,e.fullField))}var P={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},B={integer:function(e){return B.number(e)&&parseInt(e,10)===e},float:function(e){return B.number(e)&&!B.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof+e},object:function(e){return"object"==typeof e&&!B.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(P.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(P.url)},hex:function(e){return"string"==typeof e&&!!e.match(P.hex)}};var I={required:j,whitespace:function(e,t,r,i,n){(/^\s+$/.test(t)||""===t)&&i.push(q(n.messages.whitespace,e.fullField))},type:function(e,t,r,i,n){if(e.required&&void 0===t)j(e,t,r,i,n);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?B[a](t)||i.push(q(n.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&i.push(q(n.messages.types[a],e.fullField,e.type))}},range:function(e,t,r,i,n){var a="number"==typeof e.len,l="number"==typeof e.min,s="number"==typeof e.max,o=t,u=null,d="number"==typeof t,f="string"==typeof t,c=Array.isArray(t);if(d?u="number":f?u="string":c&&(u="array"),!u)return!1;c&&(o=t.length),f&&(o=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?o!==e.len&&i.push(q(n.messages[u].len,e.fullField,e.len)):l&&!s&&o<e.min?i.push(q(n.messages[u].min,e.fullField,e.min)):s&&!l&&o>e.max?i.push(q(n.messages[u].max,e.fullField,e.max)):l&&s&&(o<e.min||o>e.max)&&i.push(q(n.messages[u].range,e.fullField,e.min,e.max))},enum:function(e,t,r,i,n){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(t)&&i.push(q(n.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,t,r,i,n){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(q(n.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||i.push(q(n.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function $(e,t,r,i,n){var a=e.type,l=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t,a)&&!e.required)return r();I.required(e,t,i,l,n,a),C(t,a)||I.type(e,t,i,l,n)}r(l)}var E={string:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t,"string")&&!e.required)return r();I.required(e,t,i,a,n,"string"),C(t,"string")||(I.type(e,t,i,a,n),I.range(e,t,i,a,n),I.pattern(e,t,i,a,n),!0===e.whitespace&&I.whitespace(e,t,i,a,n))}r(a)},method:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&I.type(e,t,i,a,n)}r(a)},number:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(""===t&&(t=void 0),C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&(I.type(e,t,i,a,n),I.range(e,t,i,a,n))}r(a)},boolean:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&I.type(e,t,i,a,n)}r(a)},regexp:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),C(t)||I.type(e,t,i,a,n)}r(a)},integer:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&(I.type(e,t,i,a,n),I.range(e,t,i,a,n))}r(a)},float:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&(I.type(e,t,i,a,n),I.range(e,t,i,a,n))}r(a)},array:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t,"array")&&!e.required)return r();I.required(e,t,i,a,n,"array"),C(t,"array")||(I.type(e,t,i,a,n),I.range(e,t,i,a,n))}r(a)},object:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&I.type(e,t,i,a,n)}r(a)},enum:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n),void 0!==t&&I.enum(e,t,i,a,n)}r(a)},pattern:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t,"string")&&!e.required)return r();I.required(e,t,i,a,n),C(t,"string")||I.pattern(e,t,i,a,n)}r(a)},date:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();var l;if(I.required(e,t,i,a,n),!C(t))l="number"==typeof t?new Date(t):t,I.type(e,l,i,a,n),l&&I.range(e,l.getTime(),i,a,n)}r(a)},url:$,hex:$,email:$,required:function(e,t,r,i,n){var a=[],l=Array.isArray(t)?"array":typeof t;I.required(e,t,i,a,n,l),r(a)},any:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(C(t)&&!e.required)return r();I.required(e,t,i,a,n)}r(a)}};function D(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var V=D();function T(e){this.rules=null,this._messages=V,this.define(e)}T.prototype={messages:function(e){return e&&(this._messages=A(D(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,r){var i=this;void 0===t&&(t={}),void 0===r&&(r=function(){});var n,a,l=e,s=t,o=r;if("function"==typeof s&&(o=s,s={}),!this.rules||0===Object.keys(this.rules).length)return o&&o(),Promise.resolve();if(s.messages){var u=this.messages();u===V&&(u=D()),A(u,s.messages),s.messages=u}else s.messages=this.messages();var d={};(s.keys||Object.keys(this.rules)).forEach((function(t){n=i.rules[t],a=l[t],n.forEach((function(r){var n=r;"function"==typeof n.transform&&(l===e&&(l=S({},l)),a=l[t]=n.transform(a)),(n="function"==typeof n?{validator:n}:S({},n)).validator=i.getValidationMethod(n),n.field=t,n.fullField=n.fullField||t,n.type=i.getType(n),n.validator&&(d[t]=d[t]||[],d[t].push({rule:n,value:a,source:l,field:t}))}))}));var f={};return F(d,s,(function(e,t){var r,i=e.rule,n=!("object"!==i.type&&"array"!==i.type||"object"!=typeof i.fields&&"object"!=typeof i.defaultField);function a(e,t){return S({},t,{fullField:i.fullField+"."+e})}function l(r){void 0===r&&(r=[]);var l=r;if(Array.isArray(l)||(l=[l]),!s.suppressWarning&&l.length&&T.warning("async-validator:",l),l.length&&i.message&&(l=[].concat(i.message)),l=l.map(O(i)),s.first&&l.length)return f[i.field]=1,t(l);if(n){if(i.required&&!e.value)return l=i.message?[].concat(i.message).map(O(i)):s.error?[s.error(i,q(s.messages.required,i.field))]:[],t(l);var o={};if(i.defaultField)for(var u in e.value)e.value.hasOwnProperty(u)&&(o[u]=i.defaultField);for(var d in o=S({},o,{},e.rule.fields))if(o.hasOwnProperty(d)){var c=Array.isArray(o[d])?o[d]:[o[d]];o[d]=c.map(a.bind(null,d))}var p=new T(o);p.messages(s.messages),e.rule.options&&(e.rule.options.messages=s.messages,e.rule.options.error=s.error),p.validate(e.value,e.rule.options||s,(function(e){var r=[];l&&l.length&&r.push.apply(r,l),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(l)}n=n&&(i.required||!i.required&&e.value),i.field=e.field,i.asyncValidator?r=i.asyncValidator(i,e.value,l,e.source,s):i.validator&&(!0===(r=i.validator(i,e.value,l,e.source,s))?l():!1===r?l(i.message||i.field+" fails"):r instanceof Array?l(r):r instanceof Error&&l(r.message)),r&&r.then&&r.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){!function(e){var t,r,i,n=[],a={};for(t=0;t<e.length;t++)r=e[t],i=void 0,Array.isArray(r)?n=(i=n).concat.apply(i,r):n.push(r);n.length?a=x(n):(n=null,a=null),o(n,a)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!E.hasOwnProperty(e.type))throw new Error(q("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?E.required:E[this.getType(e)]||!1}},T.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");E[e]=t},T.warning=w,T.messages=V,T.warning=function(){};const L=v({name:"u-form-item",emits:["click","labelClick","rightClick","leftClick"],mixins:[b],inject:{uForm:{default:()=>null}},props:{label:{type:String,default:""},prop:{type:String,default:""},borderBottom:{type:[String,Boolean],default:""},labelPosition:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelStyle:{type:Object,default:()=>({})},labelAlign:{type:String,default:""},rightIcon:{type:String,default:""},leftIcon:{type:String,default:""},leftIconStyle:{type:Object,default:()=>({})},rightIconStyle:{type:Object,default:()=>({})},required:{type:Boolean,default:!1},inputAlign:{type:String,default:""}},data:()=>({initialValue:"",validateState:"",validateMessage:"",errorType:["message"],fieldValue:"",parentData:{borderBottom:!0,labelWidth:90,labelPosition:"left",labelStyle:{},labelAlign:"left",inputAlign:"left"}}),watch:{validateState(e){this.broadcastInputError()},"uForm.errorType"(e){this.errorType=e,this.broadcastInputError()}},computed:{uLabelWidth(){return"left"==this.elLabelPosition?"true"===this.label||""===this.label?"auto":this.$u.addUnit(this.elLabelWidth):"100%"},showError(){return e=>!(this.errorType.indexOf("none")>=0)&&this.errorType.indexOf(e)>=0},elLabelWidth(){return 0!=this.labelWidth||""!=this.labelWidth?this.labelWidth:this.parentData.labelWidth?this.parentData.labelWidth:90},elLabelStyle(){return Object.keys(this.labelStyle).length?this.labelStyle:this.parentData.labelStyle?this.parentData.labelStyle:{}},elLabelPosition(){return this.labelPosition?this.labelPosition:this.parentData.labelPosition?this.parentData.labelPosition:"left"},elLabelAlign(){return this.labelAlign?this.labelAlign:this.parentData.labelAlign?this.parentData.labelAlign:"left"},elBorderBottom(){return""!==this.borderBottom?this.borderBottom:"boolean"!=typeof this.parentData.borderBottom||this.parentData.borderBottom},elInputAlign(){return this.inputAlign?this.inputAlign:this.parentData.inputAlign?this.parentData.inputAlign:"left"}},methods:{onClick(){this.$emit("click")},onLabelClick(){this.$emit("labelClick")},onRightClick(){this.$emit("rightClick")},onLeftClick(){this.$emit("leftClick")},broadcastInputError(){this.broadcast("u-input","onFormItemError","error"===this.validateState&&this.showError("border"))},setRules(){uni.$on("onFieldBlur",this.onFieldBlur),uni.$on("onFieldChange",this.onFieldChange)},getRules(){let e=this.parent.rules;return e=e?e[this.prop]:[],[].concat(e||[])},onFieldBlur(){this.validation("blur")},onFieldChange(){this.validation("change")},getFilteredRule(e=""){let t=this.getRules();return e?t.filter((t=>t.trigger&&-1!==t.trigger.indexOf(e))):t},getData(e,t,r){let i;if(e){i=JSON.parse(JSON.stringify(e));let r="",n=".",a="[",l="]";t=t.replace(/\s+/g,r)+n;let s=r;for(let e=0;e<t.length;e++){let o=t.charAt(e);o!=n&&o!=a&&o!=l?s+=o:i&&(s!=r&&(i=i[s]),s=r)}}return void 0===i&&void 0!==r&&(i=r),i},setData(e,t,r){let i;i="object"==typeof r?JSON.parse(JSON.stringify(r)):r;let n=new RegExp("([\\w$]+)|\\[(:\\d)\\]","g");const a=t.match(n);for(let l=0;l<a.length-1;l++){let t=a[l];"object"!=typeof e[t]&&(e[t]={}),e=e[t]}e[a[a.length-1]]=i},validation(e,t=(()=>{})){if(!this.parent||!this.parent.model)return t("");this.fieldValue=this.getData(this.parent.model,this.prop);let r=this.getFilteredRule(e);if(!r||0===r.length)return t("");this.validateState="validating",new T({[this.prop]:r}).validate({[this.prop]:this.fieldValue},{firstFields:!0},((e,r)=>{this.validateState=e?"error":"success",this.validateMessage=e?e[0].message:"";let i=e?e[0].field:"";t(this.validateMessage,{state:this.validateState,key:i,msg:this.validateMessage})}))},resetField(){this.setData(this.parent.model,this.prop,this.initialValue),this.validateState="success"}},mounted(){this.parent=this.$u.$parent.call(this,"u-form"),this.parent&&(Object.keys(this.parentData).map((e=>{this.parentData[e]=this.parent[e]})),this.prop&&(this.parent.fields.push(this),this.errorType=this.parent.errorType,this.initialValue=this.fieldValue,this.$nextTick((()=>{this.setRules()}))))},beforeUnmount(){this.parent&&this.prop&&this.parent.fields.map(((e,t)=>{e===this&&this.parent.fields.splice(t,1)}))}},[["render",function(h,m,b,v,S,_){const w=c,x=y(e("u-icon"),g),q=p;return t(),r(q,{class:f(["u-form-item",{"u-border-bottom":_.elBorderBottom,"u-form-item__border-bottom--error":"error"===S.validateState&&_.showError("border-bottom")}]),onClick:_.onClick},{default:i((()=>[n(q,{class:"u-form-item__body",style:a({flexDirection:"left"==_.elLabelPosition?"row":"column"})},{default:i((()=>[n(q,{class:"u-form-item--left",style:a({width:_.uLabelWidth,flex:`0 0 ${_.uLabelWidth}`,marginBottom:"left"==_.elLabelPosition?0:"10rpx"})},{default:i((()=>[b.required||b.leftIcon||b.label?(t(),r(q,{key:0,class:"u-form-item--left__content"},{default:i((()=>[b.required?(t(),r(w,{key:0,class:"u-form-item--left__content--required"},{default:i((()=>[l("*")])),_:1})):s("",!0),b.leftIcon?(t(),r(q,{key:1,class:"u-form-item--left__content__icon",onClick:o(_.onLeftClick,["stop"])},{default:i((()=>[n(x,{name:b.leftIcon,"custom-style":b.leftIconStyle},null,8,["name","custom-style"])])),_:1},8,["onClick"])):s("",!0),n(q,{class:"u-form-item--left__content__label",style:a([_.elLabelStyle,{"justify-content":"left"==_.elLabelAlign?"flex-start":"center"==_.elLabelAlign?"center":"flex-end"}]),onClick:_.onLabelClick},{default:i((()=>[l(u(b.label),1)])),_:1},8,["style","onClick"])])),_:1})):s("",!0)])),_:1},8,["style"]),n(q,{class:"u-form-item--right u-flex"},{default:i((()=>[n(q,{class:"u-form-item--right__content"},{default:i((()=>[n(q,{class:"u-form-item--right__content__slot",style:a("left"==_.elLabelPosition&&"right"==_.elInputAlign?"text-align:right;display: inline-block;line-height:initial;":"")},{default:i((()=>[d(h.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),h.$slots.right||b.rightIcon?(t(),r(q,{key:0,class:"u-form-item--right__content__icon u-flex",onClick:o(_.onRightClick,["stop"])},{default:i((()=>[b.rightIcon?(t(),r(x,{key:0,"custom-style":b.rightIconStyle,name:b.rightIcon},null,8,["custom-style","name"])):s("",!0),d(h.$slots,"right",{},void 0,!0)])),_:3},8,["onClick"])):s("",!0)])),_:3})])),_:3})])),_:3},8,["style"]),"error"===S.validateState&&_.showError("message")?(t(),r(q,{key:0,class:"u-form-item__message",style:a({paddingLeft:"left"==_.elLabelPosition?h.$u.addUnit(_.elLabelWidth):"0",textAlign:"right"==_.elInputAlign?"right":"left"})},{default:i((()=>[l(u(S.validateMessage),1)])),_:1},8,["style"])):s("",!0)])),_:3},8,["class","onClick"])}],["__scopeId","data-v-f36f1446"]]);const N=v({name:"u-input",emits:["update:modelValue","input","change","confirm","clear","blur","focus","click","touchstart"],mixins:[b],props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:""},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:()=>({})},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:[Boolean,String]},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0},adjustPosition:{type:Boolean,default:!0},backgroundColor:{type:String},padding:{type:String}},data:()=>({defaultValue:"",inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:"",uForm:{inputAlign:"",clearable:""},showCover:!1}),watch:{valueCom(e,t){this.defaultValue=e,e!=t&&"select"==this.type&&this.handleInput({detail:{value:e}})},defaultValue(e,t){e&&e.length>this.maxlength&&setTimeout((()=>{e=e.substring(0,this.maxlength),this.handleInput({detail:{value:e}})}),0)}},computed:{valueCom(){return this.modelValue},inputAlignCom(){return this.inputAlign||this.uForm.inputAlign||"left"},clearableCom(){return"boolean"==typeof this.clearable?this.clearable:"boolean"!=typeof this.uForm.clearable||this.uForm.clearable},inputMaxlength(){return Number(this.maxlength)},getStyle(){let e={};return e.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",e=Object.assign(e,this.customStyle),e},getCursorSpacing(){return Number(this.cursorSpacing)},uSelectionStart(){return String(this.selectionStart)},uSelectionEnd(){return String(this.selectionEnd)}},created(){this.defaultValue=this.valueCom},mounted(){let e=this.$u.$parent.call(this,"u-form");e&&Object.keys(this.uForm).map((t=>{this.uForm[t]=e[t]}))},methods:{handleInput(e){let t=e.detail.value;this.trim&&(t=this.$u.trim(t)),this.$emit("input",t),this.$emit("update:modelValue",t),this.defaultValue=t,setTimeout((()=>{this.dispatch("u-form-item","onFieldChange",t)}),40)},handleBlur(e){setTimeout((()=>{this.focused=!1}),100);let t=e.detail.value;this.$emit("blur",t),setTimeout((()=>{this.dispatch("u-form-item","onFieldBlur",t)}),40)},onFormItemError(e){this.validateState=e},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",e.detail.value)},onClear(e){this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},inputClick(){this.$emit("click")}}},[["render",function(l,u,d,c,b,v){const S=h,_=m,w=p,x=y(e("u-icon"),g);return t(),r(w,{class:f(["u-input",{"u-input--border":d.border,"u-input--error":b.validateState}]),style:a({padding:d.padding?d.padding:`0 ${d.border?20:0}rpx`,borderColor:d.borderColor,textAlign:v.inputAlignCom,backgroundColor:d.backgroundColor}),onClick:o(v.inputClick,["stop"])},{default:i((()=>["textarea"==d.type?(t(),r(S,{key:0,class:"u-input__input u-input__textarea",style:a([v.getStyle]),value:b.defaultValue,placeholder:d.placeholder,placeholderStyle:d.placeholderStyle,disabled:d.disabled,fixed:d.fixed,focus:d.focus,maxlength:-1,autoHeight:d.autoHeight,"selection-end":v.uSelectionEnd,"selection-start":v.uSelectionStart,"cursor-spacing":v.getCursorSpacing,"show-confirm-bar":d.showConfirmbar,"adjust-position":d.adjustPosition,onInput:v.handleInput,onBlur:v.handleBlur,onFocus:v.onFocus,onConfirm:v.onConfirm},null,8,["style","value","placeholder","placeholderStyle","disabled","fixed","focus","autoHeight","selection-end","selection-start","cursor-spacing","show-confirm-bar","adjust-position","onInput","onBlur","onFocus","onConfirm"])):(t(),r(_,{key:1,class:f(["u-input__input","u-input__"+d.type]),type:"password"==d.type?"text":d.type,style:a([v.getStyle]),value:b.defaultValue,maxlength:1e4,password:"password"==d.type&&!b.showPassword,placeholder:d.placeholder,placeholderStyle:d.placeholderStyle,disabled:d.disabled||"select"===d.type&&!b.showCover,focus:d.focus,confirmType:d.confirmType,"cursor-spacing":v.getCursorSpacing,"selection-end":v.uSelectionEnd,"selection-start":v.uSelectionStart,"show-confirm-bar":d.showConfirmbar,"adjust-position":d.adjustPosition,onFocus:v.onFocus,onBlur:v.handleBlur,onInput:v.handleInput,onConfirm:v.onConfirm},null,8,["class","type","style","value","password","placeholder","placeholderStyle","disabled","focus","confirmType","cursor-spacing","selection-end","selection-start","show-confirm-bar","adjust-position","onFocus","onBlur","onInput","onConfirm"])),"select"===d.type&&b.showCover?(t(),r(w,{key:2,class:"cover-input",onClick:o(v.inputClick,["stop"])},null,8,["onClick"])):s("",!0),n(w,{class:"u-input__right-icon u-flex"},{default:i((()=>[v.clearableCom&&""!=v.valueCom&&b.focused?(t(),r(w,{key:0,class:"u-input__right-icon__clear u-input__right-icon__item",onClick:v.onClear},{default:i((()=>[n(x,{size:"32",name:"close-circle-fill",color:"#c0c4cc"})])),_:1},8,["onClick"])):s("",!0),d.passwordIcon&&"password"==d.type?(t(),r(w,{key:1,class:"u-input__right-icon__clear u-input__right-icon__item"},{default:i((()=>[n(x,{size:"32",name:b.showPassword?"eye-fill":"eye",color:"#c0c4cc",onClick:u[0]||(u[0]=e=>b.showPassword=!b.showPassword)},null,8,["name"])])),_:1})):s("",!0),"select"==d.type?(t(),r(w,{key:2,class:f(["u-input__right-icon--select u-input__right-icon__item",{"u-input__right-icon--select--reverse":d.selectOpen}])},{default:i((()=>[n(x,{name:"arrow-down-fill",size:"26",color:"#c0c4cc"})])),_:1},8,["class"])):s("",!0)])),_:1})])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-e75d4366"]]);const R=v({name:"u-form",props:{model:{type:Object,default:()=>({})},errorType:{type:Array,default:()=>["message","toast"]},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:()=>({})},inputAlign:{type:String,default:"left"},clearable:{type:Boolean,default:!0}},provide(){return{uForm:this}},data:()=>({rules:{}}),created(){this.fields=[]},methods:{setRules(e){this.rules=e},resetFields(){this.fields.map((e=>{e.resetField()}))},validate(e){return new Promise((t=>{let r=!0,i=0,n=[],a=[];this.fields.map((l=>{l.validation("",((l,s)=>{l&&(r=!1,n.push(l),a.push(s)),++i===this.fields.length&&(t(r,a[0]),-1===this.errorType.indexOf("none")&&this.errorType.indexOf("toast")>=0&&n.length&&this.$u.toast(n[0]),"function"==typeof e&&e(r,a[0]))}))}))}))}}},[["render",function(e,n,a,l,s,o){const u=p;return t(),r(u,{class:"u-form"},{default:i((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-6cc4f821"]]);export{L as _,N as a,R as b};
