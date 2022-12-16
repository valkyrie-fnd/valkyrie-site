"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1590],{92503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),i=n(95999),l=n(86668);const s="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();return"h1"!==t&&n?r.createElement(t,(0,a.Z)({},m,{className:(0,o.Z)("anchor",d?c:s),id:n}),m.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,a.Z)({},m,{id:void 0}))}},55203:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(67294),r=n(3905),o=n(87462),i=n(35742);var l=n(170);var s=n(39960);var c=n(86010),m=n(72389),d=n(86043);const u="details_lb9f",p="isBrowser_bmU9",h="collapsibleContent_i85q";function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function v(e,t){return!!e&&(e===t||v(e.parentElement,t))}function g(e){let{summary:t,children:n,...r}=e;const i=(0,m.Z)(),l=(0,a.useRef)(null),{collapsed:s,setCollapsed:g}=(0,d.u)({initialState:!r.open}),[E,y]=(0,a.useState)(r.open);return a.createElement("details",(0,o.Z)({},r,{ref:l,open:E,"data-collapsed":s,className:(0,c.Z)(u,i&&p,r.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;f(t)&&v(t,l.current)&&(e.preventDefault(),s?(g(!1),y(!0)):g(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(d.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),y(!e)}},a.createElement("div",{className:h},n)))}const E="details_b_Ee";function y(e){let{...t}=e;return a.createElement(g,(0,o.Z)({},t,{className:(0,c.Z)("alert alert--info",E,t.className)}))}var b=n(92503);function k(e){return a.createElement(b.Z,e)}const Z="containsTaskList_mC6p";const w="img_ev3q";var N=n(35281),C=n(95999);const T="admonition_LlT9",_="admonitionHeading_tbUL",z="admonitionIcon_kALy",M="admonitionContent_S0QG";const V={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(C.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(C.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(C.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(C.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(C.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},x={secondary:"note",important:"info",success:"tip",warning:"danger"};function L(e){var t;const{mdxAdmonitionTitle:n,rest:r}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:r}}const A={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(i.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(l.Z,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){var t;return a.createElement(l.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(y,(0,o.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Z))}));var t},img:function(e){return a.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,w))}));var t},h1:e=>a.createElement(k,(0,o.Z)({as:"h1"},e)),h2:e=>a.createElement(k,(0,o.Z)({as:"h2"},e)),h3:e=>a.createElement(k,(0,o.Z)({as:"h3"},e)),h4:e=>a.createElement(k,(0,o.Z)({as:"h4"},e)),h5:e=>a.createElement(k,(0,o.Z)({as:"h5"},e)),h6:e=>a.createElement(k,(0,o.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:o}=L(e),i=function(e){var t;const n=null!=(t=x[e])?t:e;return V[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),V.info)}(n),l=null!=r?r:i.label,{iconComponent:s}=i,m=null!=o?o:a.createElement(s,null);return a.createElement("div",{className:(0,c.Z)(N.k.common.admonition,N.k.common.admonitionType(e.type),"alert","alert--"+i.infimaClassName,T)},a.createElement("div",{className:_},a.createElement("span",{className:z},m),l),a.createElement("div",{className:M},t))},mermaid:n(11875).Z};function D(e){let{children:t}=e;return a.createElement(r.Zo,{components:A},t)}},59266:(e,t,n)=>{n.d(t,{$:()=>d});var a=n(87462),r=n(67294),o=n(83321);const i="valkButton_aKAY",l="buttonArrow_djaH",s="buttonContent_pc5p";var c=n(40075),m=n(39960);function d(e){const t={};return e.href&&(t.component=m.Z,t.href=e.href),r.createElement(o.Z,(0,a.Z)({},t,{className:i+" "+e.className,startIcon:e.startIcon,variant:"contained"}),r.createElement("div",{className:""+s},r.createElement("span",null,e.children),r.createElement(c.Z,{className:""+l})))}},87771:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(67294);const r="letsBegin_m6Gk",o="item__aHN",i="buttonWrapper_yHP5";var l=n(87279),s=n(2817),c=n(41098),m=n(59266);function d(){return a.createElement("div",{className:""+r},a.createElement("h2",{className:""+o},"Let's Begin!"),a.createElement("div",{className:i+" "+o},a.createElement(m.$,{startIcon:a.createElement(l.Z,null),href:"/providers"},"Game Providers"),a.createElement(m.$,{startIcon:a.createElement(c.Z,null),href:"/docs"},"Documentation"),a.createElement(m.$,{startIcon:a.createElement(s.Z,null),href:"/docs/wallet/valkyrie-pam-api"},"Wallet")))}var u=n(84118),p=n(87462),h=n(3905);const f={toc:[{value:"What is Valkyrie?",id:"what-is-valkyrie",level:2}]};function v(e){let{components:t,...n}=e;return(0,h.kt)("wrapper",(0,p.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,h.kt)("h2",{id:"what-is-valkyrie"},"What is Valkyrie?"),(0,h.kt)("p",null,"An open source game aggregator written in Go."),(0,h.kt)("p",null,"Valkyrie software presents an easy way to integrate game providers to gaming operators in order to remove the need for additional\nlicensed aggregator software and potentially standardizing the integration.\nValkyrie provides a generic interface for operators to integrate with,\nand have game provider specific modules which can be enabled on a per provider basis."),(0,h.kt)("p",null,"In it's current shape, Valkyrie is a thread safe, stateless, high performant adapter plug connecting providers and operators."),(0,h.kt)("p",null,"The software consists of a set of core functions together with a standardized operator interface client and provider specific modules.\nValkyrie runs as a service with endpoints for provider wallet transactions,\na client communicating with operators' wallet and endpoints for server-to-server game launches for those operators/providers who prefer\nthis game launch flavour. In addition, Valkyrie offers some utilities for front end game client interaction."),(0,h.kt)("p",null,"Optional integrations to proprietary operators' protocols can be handled on a case to case basis."),(0,h.kt)("p",null,"Valkyrie is configurable with respect to providers, operators, logging, tracing and communication timeouts."),(0,h.kt)("p",null,"The software is available as a Go binary file, packaged in container or as raw code for anyone to compile and use.\nValkyrie is recommended to execute within operators' networks but it can optionally be deployed virtually anywhere."))}v.isMDXComponent=!0;const g={toc:[{value:"What&#39;s the point?",id:"whats-the-point",level:2}]};function E(e){let{components:t,...n}=e;return(0,h.kt)("wrapper",(0,p.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,h.kt)("h2",{id:"whats-the-point"},"What's the point?"),(0,h.kt)("p",null,"To fight the current oligopoly situation in the gaming markets,\nthe target for the Valkyrie initiative is to enable smooth integrations of numerous gaming operators to numerous game providers directly\nand thus bypass existing large platform players and aggregators.\nOne standardized (to as great degree as possible) interface to operators and one proprietary interface per provider.\nCore functionality is implemented in a central Valkyrie component."),(0,h.kt)("p",null,"To fuel incentives to integrate directly, the integration software will be offered free of charge.\nIn addition, all Valkyrie software will be open sourced to enable operators or other gaming market players to independently operate\nand maintain the software."))}E.isMDXComponent=!0;const y={toc:[{value:"Contact us",id:"contact-us",level:2}]};function b(e){let{components:t,...n}=e;return(0,h.kt)("wrapper",(0,p.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,h.kt)("h2",{id:"contact-us"},"Contact us"),(0,h.kt)("p",null,"If you have questions regarding an integration you can either create an issue on github och contact us on: info(at)valkyrie.bet"))}b.isMDXComponent=!0;const k="mainAbout_UYOs",Z="container_MOLi",w="paragraphWrapper_Nm3E",N="header_sRmx",C="image_v3cR";var T=n(55203);function _(){return a.createElement(u.Z,null,a.createElement("main",{className:"container  "+k},a.createElement("div",{className:w},a.createElement("h1",{className:""+N},"About us"),a.createElement("article",{className:Z},a.createElement(T.Z,null,a.createElement(v,{className:Z})))),a.createElement("img",{className:C,src:"img/casino.png"}),a.createElement("div",{className:w},a.createElement("article",{className:""+Z},a.createElement(T.Z,null,a.createElement(E,null))),a.createElement(d,null),a.createElement("article",{className:""+Z},a.createElement(T.Z,null,a.createElement(b,null))))))}}}]);