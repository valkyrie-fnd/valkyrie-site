(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2463],{65488:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var r=a(87462),n=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a;const{lazy:i,block:p,defaultValue:v,values:m,groupId:f,className:b}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===v?v:null!=(t=null!=v?v:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:E}=(0,s.U)(),[T,L]=(0,n.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&L(e)}const _=e=>{const t=e.currentTarget,a=A.indexOf(t),r=h[a].value;r!==T&&(R(t),L(r),null!=f&&E(f,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{var r;const t=A.indexOf(e.currentTarget)+1;a=null!=(r=A[t])?r:A[0];break}case"ArrowLeft":{var n;const t=A.indexOf(e.currentTarget)-1;a=null!=(n=A[t])?n:A[A.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>A.push(e),onKeyDown:O,onClick:_},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function v(e){const t=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},44765:(e,t,a)=>{"use strict";a(67294),a(93162)},92272:(e,t,a)=>{"use strict";a(67294)},55448:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(92272),a(65488),a(85162),a(44765);const o={id:"valkyrie-operator-api",title:"Valkyrie Operator API",description:"Valkyrie endpoint for launching a game at a provider. Relevant for providers and operators using server to server game launch.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},i=void 0,l={unversionedId:"gamelaunch/valkyrie-operator-api",id:"gamelaunch/valkyrie-operator-api",title:"Valkyrie Operator API",description:"Valkyrie endpoint for launching a game at a provider. Relevant for providers and operators using server to server game launch.",source:"@site/docs/gamelaunch/valkyrie-operator-api.info.mdx",sourceDirName:"gamelaunch",slug:"/gamelaunch/valkyrie-operator-api",permalink:"/docs/gamelaunch/valkyrie-operator-api",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671700173,formattedLastUpdatedAt:"Dec 22, 2022",sidebarPosition:0,frontMatter:{id:"valkyrie-operator-api",title:"Valkyrie Operator API",description:"Valkyrie endpoint for launching a game at a provider. Relevant for providers and operators using server to server game launch.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Refresh player session",permalink:"/docs/wallet/refresh-session"},next:{title:"Launch game",permalink:"/docs/gamelaunch/game-launch"}},s={},u=[],c={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.1.0"),(0,n.kt)("h1",{id:"valkyrie-operator-api"},"Valkyrie Operator API"),(0,n.kt)("p",null,"Valkyrie endpoint for launching a game at a provider. Relevant for providers and operators using server to server game launch."),(0,n.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,n.kt)("a",{href:"https://github.com/valkyrie-fnd/valkyrie/blob/main/LICENSE.md"},"MIT")))}d.isMDXComponent=!0},93162:function(e,t,a){var r,n,o;n=[],r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,a){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,a)},r.onerror=function(){console.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,a){var l=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):n(s.href)?r(e,t,a):o(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){o(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),a);else if(n(e))r(e,a,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){o(l)}))}}:function(e,t,a,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,a);var o="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s},void 0===(o="function"==typeof r?r.apply(t,n):r)||(e.exports=o)}}]);