"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8023],{72280:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={title:"Introduction",sidebar_position:0},r="Get Started",l={unversionedId:"get-started/introduction",id:"get-started/introduction",title:"Introduction",description:"Installing",source:"@site/docs/get-started/introduction.md",sourceDirName:"get-started",slug:"/get-started/introduction",permalink:"/docs/get-started/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tommy",lastUpdatedAt:1671693633,formattedLastUpdatedAt:"Dec 22, 2022",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0},sidebar:"defaultSidebar",previous:{title:"Prerequisites",permalink:"/docs/prerequisites/"},next:{title:"Docker",permalink:"/docs/get-started/docker"}},s={},d=[{value:"Installing",id:"installing",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:d};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get Started"),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("p",null,"Valkyrie is easily built from source by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go mod download\ngo build\n")),(0,o.kt)("p",null,"You can then simply run Valkyrie using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./valkyrie -config path/to/config.yml\n")),(0,o.kt)("p",null,"This will open two ports: ",(0,o.kt)("inlineCode",{parentName:"p"},":8083")," and ",(0,o.kt)("inlineCode",{parentName:"p"},":8084"),". On port 8084 you will have a game launch endpoint."),(0,o.kt)("p",null,"Port 8083 is open for the provider to communicate with Valkyrie, and Valkyrie will normalize the request to your specified PAM module."),(0,o.kt)("p",null,"The ports can be configured in the config."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Please note that the PAM client will have a configured number of decimals for amounts, and\nif rounding is required the transactions will be rejected."))}c.isMDXComponent=!0}}]);