"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Player Account Management",description:"A PAM is the system the operator uses to keep track of the players' accounts and balances. Also referred to as wallet.",sidebar_position:5},l=void 0,i={unversionedId:"get-started/pam",id:"get-started/pam",title:"Player Account Management",description:"A PAM is the system the operator uses to keep track of the players' accounts and balances. Also referred to as wallet.",source:"@site/docs/get-started/pam.md",sourceDirName:"get-started",slug:"/get-started/pam",permalink:"/docs/get-started/pam",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Player Account Management",description:"A PAM is the system the operator uses to keep track of the players' accounts and balances. Also referred to as wallet.",sidebar_position:5},sidebar:"sidebar",previous:{title:"Helm",permalink:"/docs/get-started/helm"},next:{title:"Introduction",permalink:"/docs/wallet/valkyrie-pam/valkyrie-pam-api"}},s={},p=[{value:"PAM",id:"pam",level:2},{value:"Wallets",id:"wallets",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Generic Pam",id:"generic-pam",level:4},{value:"VPlugin",id:"vplugin",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pam"},"PAM"),(0,r.kt)("p",null,"A PAM is the system the operator uses to keep track of the players' accounts and balances. Also referred to as wallet."),(0,r.kt)("h2",{id:"wallets"},"Wallets"),(0,r.kt)("p",null,"When configuring Valkyrie you need to specify a compatible wallet."),(0,r.kt)("p",null,"It is the system the operator uses to keep track of the players accounts and balance, why it is also referenced as wallets."),(0,r.kt)("p",null,"Valkyrie is in essence an integration between the operator's wallet implementation and the provider's API."),(0,r.kt)("p",null,"Available wallets in Valkyrie can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallet/valkyrie-pam/valkyrie-pam-api"},"here"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Specify what PAM to use in the configuration. Each PAM has their own set of configuration fields. "),(0,r.kt)("h4",{id:"generic-pam"},"Generic Pam"),(0,r.kt)("p",null,"If you have PAM that implements the ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallet/valkyrie-pam/valkyrie-pam-api"},"Valkyrie PAM API")," you can set the following configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pam:\n  name: generic # Name of the wallet\n  api_key: pam-api-key # uses an api key to verify requests\n  url: 'https://pam-url' # base uri to the pam\n")),(0,r.kt)("h4",{id:"vplugin"},"VPlugin"),(0,r.kt)("p",null,"It is also possible to have the PAM implementation in a separate executable using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-plugin"},"Hashicorp go-plugin"),"."),(0,r.kt)("p",null,"Read more about VPlugin ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallet/vplugin/vplugin-introduction"},"here")," "),(0,r.kt)("p",null,"You set the following config to use a pam as vplugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pam:\n  name: vplugin # Name should be set to "vplugin"\n  pluginPath: path/to/plugin-executable # path to the plugin\n  type: pluginName # name of the plugin, the key in the plugin map.\n  # Any other configuration set here will be forwarded to the pam plugin in a map[string]any\n  plugin_setting: "configValue"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the PAM client will have a configured number of decimals for amounts, and\nif rounding is required the transactions will be rejected.")))}u.isMDXComponent=!0}}]);