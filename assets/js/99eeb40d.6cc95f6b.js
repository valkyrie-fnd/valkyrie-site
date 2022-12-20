"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9908],{2416:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const n={title:"Evolution",id:"evolution-index"},r=void 0,l={unversionedId:"providers/evolution/evolution-index",id:"providers/evolution/evolution-index",title:"Evolution",description:"Games",source:"@site/docs/providers/evolution/index.md",sourceDirName:"providers/evolution",slug:"/providers/evolution/",permalink:"/docs/providers/evolution/",draft:!1,tags:[],version:"current",lastUpdatedBy:"genesisporridge",lastUpdatedAt:1671548312,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Evolution",id:"evolution-index"},sidebar:"defaultSidebar",previous:{title:"Caleta",permalink:"/docs/providers/caleta/"},next:{title:"Red Tiger",permalink:"/docs/providers/redtiger/"}},s={},d=[{value:"Games",id:"games",level:3},{value:"Evolution API",id:"evolution-api",level:3},{value:"Valkyrie integration",id:"valkyrie-integration",level:3},{value:"Configuration",id:"configuration",level:3}],u={toc:d};function p(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"games"},"Games"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.evolution.com/"},"Evolution")," offers leading live games such as casino, cards & craps."),(0,a.kt)("h3",{id:"evolution-api"},"Evolution API"),(0,a.kt)("p",null,"See evolution API (",(0,a.kt)("a",{parentName:"p",href:"https://studio.evolution.com/api/docs"},"https://studio.evolution.com/api/docs"),") for details on Evolution eco system."),(0,a.kt)("h3",{id:"valkyrie-integration"},"Valkyrie integration"),(0,a.kt)("p",null,'Integrate your gaming lobby and wallet system (often enough referred to as "PAM") to Valkyrie and you will be able to access all games offered by Evolution Gaming!'),(0,a.kt)("p",null,"You can either integrate directly to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wallet/valkyrie-pam-api"},"Valkyrie standardized gaming API"),"  or implement a proprietary integration to Valkyrie. If you choose proprietary option, you can either add the solution to the valkyrie repo, or make use of the vplugin option."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"providers:\n  - name: Evolution\n    url: 'https://Evo-baseurl' # \n    auth:\n      casino_key: ${EVO_CASINO_KEY} # Casino specific key provided by Evolution\n      api_key: ${EVO_API_KEY} # Evolution api key\n      casino_token:  ${EVO_CASINO_API_TOKEN} # Token used for game launch requests toward evolution backend\n")))}p.isMDXComponent=!0}}]);