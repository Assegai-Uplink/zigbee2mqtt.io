(function(){"use strict";var e={9223:function(e,o,t){var n=t(5102),l=t(9269);const r={class:"supported-devices"},s={class:"filters"},i={key:"no-results"};function a(e,o,t,a,c,u){const d=(0,l.up)("filters"),v=(0,l.up)("device"),p=(0,l.up)("infinite-scroll"),m=(0,l.up)("back-to-top");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",s,[(0,l.Wm)(d,{modelValue:a.currentFilters,"onUpdate:modelValue":o[0]||(o[0]=e=>a.currentFilters=e)},null,8,["modelValue"])]),(0,l.Wm)(p,{onLoad:a.loadItemsByScroll},{default:(0,l.w5)((()=>[(0,l.Wm)(n.W3,{class:"devices-list",tag:"div",name:"device"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.devicesToShow,(e=>((0,l.wg)(),(0,l.j4)(v,{key:e.vendor+e.model,device:e,onClick:a.storePosition,onVendorClick:a.onVendorClick},null,8,["device","onClick","onVendorClick"])))),128)),0===a.devicesToShow.length?((0,l.wg)(),(0,l.iD)("p",i,"No devices found.")):(0,l.kq)("",!0)])),_:1})])),_:1},8,["onLoad"]),(0,l.Wm)(m)])}const c={class:"back-to-top"};function u(e,o,t,r,s,i){const a=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(n.uT,{name:"fade"},{default:(0,l.w5)((()=>[e.visible?((0,l.wg)(),(0,l.j4)(a,{key:0,onClick:e.scrollToTop,icon:"keyboard_arrow_up",round:""},null,8,["onClick"])):(0,l.kq)("",!0)])),_:1})])}function d(e,o=300){let t,n=!1;return(...l)=>{t?n=!0:(e.apply(this,l),t=setTimeout((()=>{t=void 0,n&&e.apply(this,l),n=!1}),o))}}var v=t(5857),p=t(6237),m=(0,l.aZ)({name:"BackToTop",setup(){const e=(0,p.iH)(!1),o=d((()=>{e.value=window.scrollY>500}),500),t=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),v.Z.remove("zigbee2mqtt-devices-overview")};return(0,l.bv)((()=>window.addEventListener("scroll",o))),(0,l.Jd)((()=>window.addEventListener("scroll",o))),{visible:e,scrollToTop:t}}}),f=t(7617),h=t(4073),w=t(1410),b=t.n(w);const y=(0,f.Z)(m,[["render",u]]);var g=y;b()(m,"components",{QBtn:h.Z});var k=t(3201);const P={class:"device"},_=["href"],T={class:"thumb"},V={class:"top-right"},x={key:0},I={key:0,class:"is-new"},U=(0,l.Uk)("new"),Z=["href"],S={class:"desc"},q={class:"model"};function E(e,o,t,n,r,s){const i=(0,l.up)("q-tooltip"),a=(0,l.up)("q-icon");return(0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("a",{class:"title",href:n.baseUri+t.device.link},(0,k.zw)(t.device.description),9,_),(0,l._)("div",T,[(0,l._)("div",V,[(0,l._)("div",null,[(0,l._)("div",{class:"vendor",onClick:o[0]||(o[0]=o=>e.$emit("vendor-click",t.device.vendor))},[(0,l.Uk)((0,k.zw)(t.device.vendor),1),(0,l.Wm)(i,{self:"center end"},{default:(0,l.w5)((()=>[t.device.isWhiteLabel?((0,l.wg)(),(0,l.iD)("span",x,"White-Label Device -")):(0,l.kq)("",!0),(0,l.Uk)(" Filter by "+(0,k.zw)(t.device.vendor),1)])),_:1}),t.device.isWhiteLabel?((0,l.wg)(),(0,l.j4)(a,{key:0,name:"more"})):(0,l.kq)("",!0)])])]),n.isNew?((0,l.wg)(),(0,l.iD)("div",I,[U,(0,l.Wm)(i,{self:"center start"},{default:(0,l.w5)((()=>[(0,l.Uk)("Added at "+(0,k.zw)(new Date(t.device.addedAt).toLocaleString()),1)])),_:1})])):(0,l.kq)("",!0),(0,l._)("a",{class:"device-img",href:n.baseUri+t.device.link,style:(0,k.j5)({backgroundImage:"url("+n.baseUri+t.device.image+")"})},null,12,Z)]),(0,l._)("div",S,[(0,l._)("div",q,(0,k.zw)(t.device.model),1),(0,l.Uk)("- "+(0,k.zw)(t.device.exposes.join(", ")),1)])])}var F={name:"Device",props:["device"],emits:["vendor-click"],setup(e){let o="./";const t=(0,p.iH)(!1);return(0,l.YP)(e.device,(e=>{t.value=new Date(e.addedAt)>Date.now()-2592e6}),{immediate:!0}),{isNew:t,baseUri:o}}},H=t(4806),C=t(4633);const D=(0,f.Z)(F,[["render",E]]);var O=D;b()(F,"components",{QTooltip:H.Z,QIcon:C.Z});const W={class:"device-filters"},j={class:"vendor-filter"},L={class:"exposes-filter"},Y={class:"search-filter"},Q=(0,l.Uk)("RegEx support. E.g you can use"),z=(0,l._)("code",null," (wall|switch)",-1),A=(0,l.Uk)(" to search for wall OR switch.");function R(e,o,t,n,r,s){const i=(0,l.up)("multi-select"),a=(0,l.up)("q-icon"),c=(0,l.up)("q-tooltip"),u=(0,l.up)("q-input");return(0,l.wg)(),(0,l.iD)("div",W,[(0,l._)("div",j,[(0,l.Wm)(i,{label:"Vendor",options:e.vendors,modelValue:e.vendorFilter,"onUpdate:modelValue":o[0]||(o[0]=o=>e.vendorFilter=o)},null,8,["options","modelValue"])]),(0,l._)("div",L,[(0,l.Wm)(i,{label:"Exposes",options:e.exposes,modelValue:e.exposesFilter,"onUpdate:modelValue":o[1]||(o[1]=o=>e.exposesFilter=o)},null,8,["options","modelValue"])]),(0,l._)("div",Y,[(0,l.Wm)(u,{modelValue:e.searchFilter,"onUpdate:modelValue":o[2]||(o[2]=o=>e.searchFilter=o),filled:"",debounce:500,type:"search",placeholder:e.searchPlaceholder,label:e.searchFilter||"type to search"===e.searchPlaceholder?"Search":"Press / to search",onFocus:o[3]||(o[3]=o=>e.searchPlaceholder="type to search"),onBlur:o[4]||(o[4]=o=>e.searchPlaceholder="Press / to search"),clearable:""},{append:(0,l.w5)((()=>[(0,l.Wm)(a,{name:"info"}),(0,l.Wm)(c,{offset:[0,15],self:"bottom middle"},{default:(0,l.w5)((()=>[Q,z,A])),_:1})])),_:1},8,["modelValue","placeholder","label"])])])}const B=(0,l.Uk)("No results");function N(e,o,t,n,r,s){const i=(0,l.up)("q-item-section"),a=(0,l.up)("q-item"),c=(0,l.up)("q-select");return(0,l.wg)(),(0,l.j4)(c,{label:e.label,filled:"",clearable:"","use-chips":"","use-input":"","input-debounce":"0",options:e.filteredOptions,onFilter:e.filterFn,multiple:"","options-dense":"",onPopupHide:o[0]||(o[0]=o=>e.clearSearch(this)),ref:"el","onUpdate:modelValue":e.hidePopup},{"no-option":(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"text-grey"},{default:(0,l.w5)((()=>[B])),_:1})])),_:1})])),_:1},8,["label","options","onFilter","onUpdate:modelValue"])}var K=(0,l.aZ)({name:"multi-select",props:["label","options"],inheritAttrs:!0,setup(e,{emit:o,attrs:t}){const n=(0,p.iH)(null),r=(0,p.iH)(e.options);((0,p.dq)(e.options)||(0,p.PG)(e.options))&&(0,l.YP)(e.options,(e=>{o("update:modelValue",t.modelValue.value.filter((o=>e.includes(o))))}));const s=()=>{n.value.hidePopup()};return{el:n,hidePopup:s,clearSearch(e){setTimeout((()=>{e.$el.querySelector("input").value=""}),10)},filteredOptions:r,filterFn(o,t){t((()=>{const t=o.toLowerCase();r.value=e.options.filter((e=>e.toLowerCase().includes(t)))}))}}}}),$=t(4478),M=t(5246),G=t(2278);const J=(0,f.Z)(K,[["render",N]]);var X=J;b()(K,"components",{QSelect:$.Z,QItem:M.Z,QItemSection:G.Z});const ee=window.ZIGBEE2MQTT_SUPPORTED_DEVICES,oe=new Set,te=new Set;ee.forEach((({exposes:e,vendor:o})=>{te.add(o),e.forEach((e=>oe.add(e)))}));const ne=(e,o)=>e.localeCompare(o,void 0,{sensitivity:"base"}),le=ee,re=Array.from(te).sort(ne),se=Array.from(oe).sort(ne),ie=e=>e.sort(((e,o)=>{const t=ne(e.vendor,o.vendor);return 0===t?ne(e.model,o.model):t}));var ae={arrayKeys:[],parseHash(){const e=location.hash.substr(1).split("&").map((e=>e.split("="))).map((([e,o])=>this.arrayKeys.includes(e)?[e,o.split(",").map((e=>decodeURIComponent(e)))]:[e,decodeURIComponent(o)])).filter((([e,o])=>e.length>0&&o.length>0));return Object.fromEntries(e)},updateHash(e){const o=this.parseHash();Object.entries(e).forEach((([e,t])=>{o[e]=t}));let t="#";Object.entries(o).forEach((([e,o])=>{if(void 0!==o&&null!==o&&""!==o)if(this.arrayKeys.includes(e)){const n=o.map((e=>encodeURIComponent(e))).join(",");t+=`${e}=${n}&`}else t+=`${e}=${encodeURIComponent(o)}&`})),location.hash=t.substr(0,t.length-1)}};ae.arrayKeys.push("v"),ae.arrayKeys.push("e");var ce=(0,l.aZ)({name:"filters",components:{MultiSelect:X},props:["modelValue"],setup(e,{emit:o}){const t=ae.parseHash(),n=(0,p.iH)(t.e||null),r=(0,p.iH)(t.v||null),s=(0,p.iH)(t.s||null),i=e=>()=>{Array.isArray(e.value)&&0===e.value.length&&(e.value=null)};(0,l.YP)((()=>e.modelValue),(e=>{if(!e)return;const{exposes:o,vendors:t,search:l}=e;o&&(n.value=o),t&&(r.value=t),l&&(s.value=l)}));const a=()=>{ae.updateHash({e:n.value,v:r.value,s:s.value}),n.value||r.value||s.value?o("update:modelValue",{exposes:n.value,vendors:r.value,search:s.value}):o("update:modelValue",null)};a(),(0,l.YP)(n,i(n)),(0,l.YP)(r,i(r)),(0,l.YP)(n,a),(0,l.YP)(r,a),(0,l.YP)(s,a);const c=e=>{"/"===e.key&&"INPUT"!==e.target.tagName&&(e.preventDefault(),document.querySelector(".search-filter input").focus())};return(0,l.bv)((()=>{document.body.addEventListener("keypress",c)})),(0,l.Jd)((()=>{document.removeEventListener("keypress",c)})),{searchPlaceholder:(0,p.iH)("Press / to search"),exposes:se,vendors:re,exposesFilter:n,vendorFilter:r,searchFilter:s}}}),ue=t(6874);const de=(0,f.Z)(ce,[["render",R]]);var ve=de;b()(ce,"components",{QInput:ue.Z,QIcon:C.Z,QTooltip:H.Z});var pe={name:"InfiniteScroll",props:{debounce:{default:350,type:Number},offset:{default:500,type:Number}},emits:["load"],setup(e,{slots:o,emit:t}){const n=(0,p.iH)(null),r=d((()=>{n.value&&n.value.getBoundingClientRect().bottom-window.innerHeight<e.offset&&t("load")}),e.debounce);return(0,l.bv)((()=>{window.addEventListener("scroll",r)})),(0,l.Ah)((()=>{window.removeEventListener("scroll",r)})),()=>(0,l.h)("div",{class:"q-infinite-scroll",ref:n},o.default())}},me=t(2672);const fe=pe;var he=fe;function we(e,o){(0,l.YP)(e,(()=>{if(!e.value)return void(o.value=le);const{exposes:t,vendors:n,search:l}=e.value;let r=!1;if(l)try{r=new RegExp(l,"i")}catch(i){}const s=le.filter((e=>!(t&&!t.every((o=>e.exposes.includes(o))))&&(!(n&&!n.includes(e.vendor))&&!(r&&!["model","vendor","description"].some((o=>r.test(e[o])))))));o.value=ie(s)}),{immediate:!0})}b()(pe,"components",{QInfiniteScroll:me.Z});var be={name:"SupportedDevices",components:{BackToTop:g,InfiniteScroll:he,Filters:ve,Device:O},setup(){const e=(0,p.iH)(null),o=(0,p.iH)(v.Z.getItem("loadIndex")||1),t=(0,p.iH)([]),n=(0,p.iH)([]);(0,l.YP)(t,(()=>{n.value=t.value.slice(0,20),o.value=1})),(0,l.YP)(o,(e=>{n.value=t.value.slice(0,20*e)})),we(e,t);const r=()=>{20*o.value>=t.value.length||o.value++},s=()=>{v.Z.set("zigbee2mqtt-devices-overview",{loadIndex:o.value,scrollTop:window.scrollY})},i=o=>{e.value?e.value.vendors?e.value.vendors.includes(o)||e.value.vendors.push(o):e.value.vendors=[o]:e.value={vendors:[o]}};return(0,l.bv)((()=>{const e=v.Z.getItem("zigbee2mqtt-devices-overview")||{};e.loadIndex&&(o.value=e.loadIndex),e.scrollTop&&setTimeout((()=>{window.scrollTo(null,e.scrollTop)}))})),{currentFilters:e,devicesToShow:n,loadItemsByScroll:r,storePosition:s,onVendorClick:i}}};const ye=(0,f.Z)(be,[["render",a]]);var ge=ye,ke=t(2227);const Pe={config:{},plugins:{}};(0,n.ri)(ge).use(ke.Z,Pe).mount("#supported-devices-app")}},o={};function t(n){var l=o[n];if(void 0!==l)return l.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,n,l,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],r=e[u][2];for(var i=!0,a=0;a<n.length;a++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[a])}))?n.splice(a--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=l();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,l,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var l,r,s=n[0],i=n[1],a=n[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(l in i)t.o(i,l)&&(t.m[l]=i[l]);if(a)var u=a(t)}for(o&&o(n);c<s.length;c++)r=s[c],t.o(e,r)&&e[r]&&e[r][0](),e[s[c]]=0;return t.O(u)},n=self["webpackChunkdevices_overview"]=self["webpackChunkdevices_overview"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9223)}));n=t.O(n)})();
//# sourceMappingURL=app.js.map