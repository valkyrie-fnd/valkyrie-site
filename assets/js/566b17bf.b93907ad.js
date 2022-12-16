"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5966],{833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Caleta",id:"caleta-index"},o=void 0,l={unversionedId:"providers/caleta/caleta-index",id:"providers/caleta/caleta-index",title:"Caleta",description:"Caleta Gaming System is a complete RGS + RNG system that has been designed to offer Game Providers and Operators an easy and quick solution for any kind of Game Platform: Slots, Bingo, Kenos, Video Poker, etc.",source:"@site/docs/providers/caleta/index.md",sourceDirName:"providers/caleta",slug:"/providers/caleta/",permalink:"/docs/providers/caleta/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671196210,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{title:"Caleta",id:"caleta-index"},sidebar:"defaultSidebar",previous:{title:"Launch game",permalink:"/docs/gamelaunch/game-launch"},next:{title:"Evolution",permalink:"/docs/providers/evolution/"}},s={},d=[{value:"Required Configuration",id:"required-configuration",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://caletagaming.com/"},"Caleta Gaming System")," is a complete RGS + RNG system that has been designed to offer Game Providers and Operators an easy and quick solution for any kind of Game Platform: Slots, Bingo, Kenos, Video Poker, etc."),(0,n.kt)("h3",{id:"required-configuration"},"Required Configuration"),(0,n.kt)("p",null,"As always, contact the provider before you begin in order to get hold of URLs, keys and parameters. "),(0,n.kt)("p",null,"Caleta will provide:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"operator_id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"verification_key"))),(0,n.kt)("p",null,"Caleta will request:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An url for your Valkyrie deployment"),(0,n.kt)("li",{parentName:"ul"},"Your public key for your ",(0,n.kt)("inlineCode",{parentName:"li"},"signing_key")," for verifying request signatures")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"providers:\n  - name: Caleta\n    url: 'https://Caleta-Base-url' # base url used for request toward caleta\n    auth:\n      operator_id: YourCasino # Your operator id in Caleta system\n      verification_key: | # public key provided by Caleta to verify their requests\n        -----BEGIN PUBLIC KEY-----\n        xyz-etc...\n        -----END PUBLIC KEY-----\n      signing_key: ${PRIVATE_KEY} # Private key used to sign requests toward Caleta.\n")))}p.isMDXComponent=!0}}]);