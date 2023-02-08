"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Configuration",description:"Configuration specification when launching Valkyrie",sidebar_position:1},a=void 0,s={unversionedId:"get-started/configuration",id:"get-started/configuration",title:"Configuration",description:"Configuration specification when launching Valkyrie",source:"@site/docs/get-started/configuration.md",sourceDirName:"get-started",slug:"/get-started/configuration",permalink:"/docs/get-started/configuration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuration",description:"Configuration specification when launching Valkyrie",sidebar_position:1},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/get-started/introduction"},next:{title:"Logging and tracing",permalink:"/docs/get-started/logging-and-tracing"}},l={},p=[{value:"Valkyrie Config",id:"valkyrie-config",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"valkyrie-config"},"Valkyrie Config"),(0,o.kt)("p",null,"Supply a yaml config file when running Valkyrie. It contains config for logging and tracing as well as provider specific configuration. It's possible to add environment variables within ",(0,o.kt)("inlineCode",{parentName:"p"},"${}"),", which will be replaced before the yaml is processed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"logging:\n  level: info # debug, info, warn, error, fatal, panic\ntracing:\n  type: jaeger # stdout, jaeger, googleCloudTrace\n  url: 'http://traces-url'\n  service_name: valkyrie\n  google_project_id: ${TRACING_GOOGLE_PROJECT_ID} # if you're using googleCloudTrace\npam: # Player Account Management\n  name: generic\n  api_key: pam-api-key\n  url: 'https://pam-url'\nprovider_base_path: \"/providers\" # Optional field to set a base path to all requests incoming from provider side, ie wallet calls\noperator_base_path: \"/operator\" # Optional field to set a base path to all requests incoming from operator side\noperator_api_key: \"token\" # Optional, configures an api key used to authorize requests to operator endpoints (using `Authorization: Bearer token` header)\nproviders:\n  - name: providerName\n    base_path: \"/providername\" # base path for the providers. Used to differentiate between Valkyrie's exposed endpoints for the specific providers.\n    url: 'http://localhost:3000'\n    auth: # Different providers use different auth. Add what is needed for the specific Providers\n      api_key: 123\nhttp_server: # optional http server configuration\n  read_timeout: 1s\n  write_timeout: 1s\n  idle_timeout: 30s\n  provider_address: localhost:8083 # Base url exposed toward providers\n  operator_address: localhost:8084 # Used by operator to trigger gamelaunch\nhttp_client: # optional http client configuration\n  read_timeout: 1s\n  write_timeout: 1s\n  idle_timeout: 30s\n  request_timeout: 1s\n")),(0,o.kt)("p",null,"For a full list of available providers please look ",(0,o.kt)("a",{parentName:"p",href:"/providers"},"here"),". Each provider specifies what configuration is needed."))}u.isMDXComponent=!0}}]);