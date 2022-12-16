(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5726],{65488:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var r=o(87462),a=o(67294),n=o(86010),i=o(72389),l=o(67392),s=o(7094),d=o(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,o;const{lazy:i,block:p,defaultValue:v,values:f,groupId:b,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((e=>{let{props:{value:t,label:o,attributes:r}}=e;return{value:t,label:o,attributes:r}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===v?v:null!=(t=null!=v?v:null==(o=h.find((e=>e.props.default)))?void 0:o.props.value)?t:h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:A}=(0,s.U)(),[E,T]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:L}=(0,d.o5)();if(null!=b){const e=w[b];null!=e&&e!==E&&y.some((t=>t.value===e))&&T(e)}const R=e=>{const t=e.currentTarget,o=x.indexOf(t),r=y[o].value;r!==E&&(L(t),T(r),null!=b&&A(b,String(r)))},_=e=>{var t;let o=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;o=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;o=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=o)||t.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},m)},y.map((e=>{let{value:t,label:o,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:_,onClick:R},i,{className:(0,n.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=o?o:t)}))),i?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function v(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},44765:(e,t,o)=>{"use strict";o(67294),o(93162)},92272:(e,t,o)=>{"use strict";o(67294)},68660:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=o(87462),a=(o(67294),o(3905));o(92272),o(65488),o(85162),o(44765);const n={id:"valkyrie-provider-api",title:"Valkyrie Provider API",description:"The exposed endpoints by the enabled game provider modules.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},i="Valkyrie Provider API",l={unversionedId:"providerApis/valkyrie-provider-api",id:"providerApis/valkyrie-provider-api",title:"Valkyrie Provider API",description:"The exposed endpoints by the enabled game provider modules.",source:"@site/docs/providerApis/valkyrie-provider-api.info.mdx",sourceDirName:"providerApis",slug:"/providerApis/valkyrie-provider-api",permalink:"/valkyrie-site/docs/providerApis/valkyrie-provider-api",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671196587,formattedLastUpdatedAt:"Dec 16, 2022",sidebarPosition:0,frontMatter:{id:"valkyrie-provider-api",title:"Valkyrie Provider API",description:"The exposed endpoints by the enabled game provider modules.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"defaultSidebar",previous:{title:"Red Tiger",permalink:"/valkyrie-site/docs/providers/redtiger/"},next:{title:"Balance",permalink:"/valkyrie-site/docs/providerApis/caleta-balance"}},s={},d=[],u={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"valkyrie-provider-api"},"Valkyrie Provider API"),(0,a.kt)("p",null,"The exposed endpoints by the enabled game provider modules."))}c.isMDXComponent=!0},93162:function(e,t,o){var r,a,n;a=[],r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,o){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,o)},r.onerror=function(){console.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var l=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?n(s):a(s.href)?r(e,t,o):n(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){n(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(a(e))r(e,o,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){n(l)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,o);var n="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||n&&s||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=d?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var c=i.URL||i.webkitURL,p=c.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){c.revokeObjectURL(p)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s},void 0===(n="function"==typeof r?r.apply(t,a):r)||(e.exports=n)}}]);