"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4914],{17280:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(67294),l=a(84118),r=a(55203);const c="mainPage_gaaP",i="left_jVKB",o="right_jV5u",s="header_so8d";var m=a(28084);const u="tileSearchGrid_IVnS",d="tileSearchItem_aXp8",p="card_UCKI",v="valkCardMedia_PelB",E="cardLink_AvSE",g="searchWrapper_Fotn";var h=a(47739),y=a(66242),f=a(44267),k=a(78862),N=a(82516),b=a(96486),Z=a(18716),_=a(21190),C=a(39960);function w(e){return n.createElement("div",{className:(e.className?e.className:"")+" "+v},n.createElement("img",{src:e.src,alt:e.alt}))}function L(e){let{item:t}=e;return n.createElement(Z.E.div,{className:d,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.3},layout:!0},n.createElement(C.Z,{href:t.url,className:E},n.createElement(h.Z,null,n.createElement(y.Z,{className:p},n.createElement(w,{src:"img/"+t.cardImageUrl,alt:""+t.name}),n.createElement(f.Z,null,n.createElement(k.Z,{gutterBottom:!0,variant:"h5",component:"div"},t.name),n.createElement(k.Z,{variant:"body1",color:"text.primary"},t.description))))))}function S(e){let{label:t,items:a}=e;const[l,r]=(0,n.useState)(a);function c(e){console.log("filter items based on text: "+e.target.value),r(a.filter((t=>t.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))))}const i=(0,n.useMemo)((()=>(0,b.debounce)(c,300)),[]);return n.createElement(n.Fragment,null,n.createElement("div",{className:g},n.createElement(N.Z,{label:""+t,onChange:i})),l.length>0?n.createElement(Z.E.div,{layout:!0,className:u},n.createElement(_.M,null,l.map((e=>n.createElement(L,{item:e,key:e.id}))))):n.createElement("div",null,"No matching result"))}var V=a(87462),M=a(3905);const x={toc:[]};function I(e){let{components:t,...a}=e;return(0,M.kt)("wrapper",(0,V.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("p",null,"Discover game providers you can unlock by using Valkyrie as your open source aggregator.\nAll providers listed have implemented modules in Valkyrie enabling you as an operator to integrate with minimal coding efforts.\nAll you need is agreements with the provider and setup your Valkyrie instance to make all the games available."))}function P(){const{providers:e}=(0,m.eZ)("provider-data-plugin","provider-data-plugin");return console.log(e),n.createElement(l.Z,null,n.createElement("main",null,n.createElement("div",{className:"container "+c},n.createElement("div",{className:i},n.createElement("h1",{className:""+s},"Game provider"),n.createElement(r.Z,null,n.createElement(I,null))),n.createElement("div",{className:o},n.createElement(S,{items:e,label:"Search Provider"})))))}I.isMDXComponent=!0}}]);