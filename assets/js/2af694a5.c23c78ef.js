"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3536],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),s=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return o.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(v,a(a({ref:r},d),{},{components:t})):o.createElement(v,a({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43751:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const i={title:"Provider implementation",description:"Guideline on how to add a new provider to Valkyrie",sidebar_position:6},a=void 0,l={unversionedId:"get-started/provider",id:"get-started/provider",title:"Provider implementation",description:"Guideline on how to add a new provider to Valkyrie",source:"@site/docs/get-started/provider.md",sourceDirName:"get-started",slug:"/get-started/provider",permalink:"/docs/get-started/provider",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Provider implementation",description:"Guideline on how to add a new provider to Valkyrie",sidebar_position:6},sidebar:"sidebar",previous:{title:"Player Account Management",permalink:"/docs/get-started/pam"},next:{title:"Introduction",permalink:"/docs/wallet/valkyrie-pam/valkyrie-pam-api"}},p={},s=[{value:"Basics",id:"basics",level:2},{value:"Provider",id:"provider",level:3},{value:"Operator",id:"operator",level:3},{value:"Boiler plate",id:"boiler-plate",level:2}],d={toc:s};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("p",null,"A Valkyrie provider module exposes the provider specific wallet api server in one end and implements a PAM client, communicating with the operator's wallet, in the other."),(0,n.kt)("p",null,"In addition, endpoints used for operator->provider communication might be needed if the operator requires server to server game launch, game rendering functionality or similar."),(0,n.kt)("p",null,"Valkyre is preferably installed in the operator's environment, but it is possible to run it from virtually anywhere."),(0,n.kt)("h3",{id:"provider"},"Provider"),(0,n.kt)("p",null,"Wallet server API for a provider is based on the provider's wallet API specification, i.e. the interface a provider normally requests being implemented on the operator side. Hence the provider sees Valkyrie as the operator."),(0,n.kt)("p",null,"Wallet specification normally states expected endpoints, message formats and response/error logic. In addition authentication methods are usually stated as well."),(0,n.kt)("p",null,"In case the operator (or provider, for that sake) requires server to server game launch capabilities and / or game rendering functionality, these endpoints have to be implemented as well, then with its own port. These server endpoints routes the appropriate requests from operator to provider and produces the necessary mappings."),(0,n.kt)("h3",{id:"operator"},"Operator"),(0,n.kt)("p",null,"The standardized Valkyrie PAM client API presents an easy way for operators (or even game aggregators for that sake) to integrate with Valkyrie. This integration has to be implemented only once whereafter multiple providers may be integrated without changes at the operator."),(0,n.kt)("h2",{id:"boiler-plate"},"Boiler plate"),(0,n.kt)("p",null,"To implement a provider module from scratch, an example on how to do it is available in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/valkyrie-fnd/valkyrie"},"Valkyrie source code")," under /example/example-game-provider."))}c.isMDXComponent=!0}}]);