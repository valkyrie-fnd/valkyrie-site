"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2817],{69175:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(87462),a=(t(67294),t(3905));const o={title:"Red Tiger",id:"redtiger-index"},n=void 0,d={unversionedId:"providers/redtiger/redtiger-index",id:"providers/redtiger/redtiger-index",title:"Red Tiger",description:"Games",source:"@site/docs/providers/redtiger/index.md",sourceDirName:"providers/redtiger",slug:"/providers/redtiger/",permalink:"/docs/providers/redtiger/",draft:!1,tags:[],version:"current",frontMatter:{title:"Red Tiger",id:"redtiger-index"},sidebar:"defaultSidebar",previous:{title:"Evolution",permalink:"/docs/providers/evolution/"},next:{title:"Introduction",permalink:"/docs/providerApis/valkyrie-provider-api"}},s={},l=[{value:"Games",id:"games",level:3},{value:"Red Tiger API",id:"red-tiger-api",level:3},{value:"Valkyrie integration",id:"valkyrie-integration",level:3},{value:"Configuration",id:"configuration",level:3}],g={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"games"},"Games"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.redtiger.com/"},"Red Tiger")," offers leading games in the slot space."),(0,a.kt)("h3",{id:"red-tiger-api"},"Red Tiger API"),(0,a.kt)("p",null,"See Red Tigers API (",(0,a.kt)("a",{parentName:"p",href:"https://dev.redtigergaming.com/#!/"},"https://dev.redtigergaming.com/#!/"),") for details on Red Tiger eco system."),(0,a.kt)("h3",{id:"valkyrie-integration"},"Valkyrie integration"),(0,a.kt)("p",null,'Integrate your gaming lobby and wallet system (often enough referred to as "PAM") to Valkyrie and you will be able to access all games offered by Red Tiger!'),(0,a.kt)("p",null,"You can either integrate directly to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wallet/valkyrie-pam-api"},"Valkyrie standardized gaming API"),"  or implement a proprietary integration to Valkyrie. If you choose proprietary option, you can either add the solution to the valkyrie repo, or make use of the vplugin option."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"providers:\n  - name: Red Tiger\n    url: 'https://redtiger' # see your settings page at https://dev.redtigergaming.com to see your operator specific url\n    auth:\n      api_key: ${RED_TIGER_API_KEY} # Red tiger api key. Found in https://dev.redtigergaming.com\n      recon_token:  ${RECON_TOKEN} # Reconciliation token. See https://dev.redtigergaming.com\n")))}p.isMDXComponent=!0}}]);