"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4914],{17280:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(67294),r=a(84118),l=a(55203);const i="mainPage_gaaP",c="left_jVKB",o="right_jV5u",s="header_so8d";var m=a(28084);const u="tileSearchGrid_IVnS",d="tileSearchItem_aXp8",p="card_UCKI",v="valkCardMedia_PelB",E="cardLink_AvSE",g="searchWrapper_Fotn";var h=a(47739),y=a(66242),f=a(44267),k=a(78862),N=a(82516),b=a(96486),Z=a(18716),_=a(21190),C=a(39960);function w(e){return n.createElement("div",{className:(e.className?e.className:"")+" "+v},n.createElement("img",{src:e.src,alt:e.alt}))}function V(e){let{item:t}=e;return n.createElement(Z.E.div,{className:d,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.3},layout:!0},n.createElement(C.Z,{href:t.url,className:E},n.createElement(h.Z,null,n.createElement(y.Z,{className:p},n.createElement(w,{src:"img/"+t.cardImageUrl,alt:""+t.name}),n.createElement(f.Z,null,n.createElement(k.Z,{gutterBottom:!0,variant:"h5",component:"div"},t.name),n.createElement(k.Z,{variant:"body1",color:"text.primary"},t.description))))))}function L(e){let{label:t,items:a}=e;const[r,l]=(0,n.useState)(a);function i(e){console.log("filter items based on text: "+e.target.value),l(a.filter((t=>t.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))))}const c=(0,n.useMemo)((()=>(0,b.debounce)(i,300)),[]);return n.createElement(n.Fragment,null,n.createElement("div",{className:g},n.createElement(N.Z,{label:""+t,onChange:c})),r.length>0?n.createElement(Z.E.div,{layout:!0,className:u},n.createElement(_.M,null,r.map((e=>n.createElement(V,{item:e,key:e.id}))))):n.createElement("div",null,"No matching result"))}var S=a(87462),M=a(3905);const P={toc:[]};function x(e){let{components:t,...a}=e;return(0,M.kt)("wrapper",(0,S.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("p",null,"Discover game providers you can unlock by using Valkyrie as your open source aggregator.\nAll providers listed have implemented modules in Valkyrie enabling you as an operator to integrate with minimal coding efforts.\nAll you need is agreements with the provider and setup your Valkyrie instance to make all the games available."))}function A(){const{providers:e}=(0,m.eZ)("provider-data-plugin","provider-data-plugin");return n.createElement(r.Z,{title:"Providers",description:"Available game providers on Valkyrie platform"},n.createElement("main",null,n.createElement("div",{className:"container "+i},n.createElement("div",{className:c},n.createElement("h1",{className:""+s},"Game provider"),n.createElement(l.Z,null,n.createElement(x,null))),n.createElement("div",{className:o},n.createElement(L,{items:e,label:"Search Provider"})))))}x.isMDXComponent=!0}}]);