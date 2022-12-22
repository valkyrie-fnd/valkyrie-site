"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9124],{81121:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var i=t(87462),r=(t(67294),t(3905)),n=t(26389),l=t(94891),o=t(75190),s=t(47507),d=t(24310),p=t(63303),m=(t(75035),t(85162));const c={id:"game-launch",title:"Launch game",description:"Launch a provider game through valkyrie",sidebar_label:"Launch game",hide_title:!0,hide_table_of_contents:!0,api:{description:"Launch a provider game through valkyrie",operationId:"GameLaunch",parameters:[{in:"path",name:"provider",required:!0,description:"Provider identification string",example:"redtiger",schema:{type:"string"}},{name:"X-Player-Token",description:"Player game session identifier",in:"header",required:!0,schema:{description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:1,maxLength:40}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",required:["currency","providerGameId","playerId"],properties:{casino:{type:"string",example:"YourCasino"},country:{type:"string",example:"SE"},currency:{type:"string",example:"SEK"},providerGameId:{type:"string",example:"BadLuck"},language:{type:"string",example:"sv"},launchConfig:{type:"object",example:'{"providerSpecificConfiguration": "Value", "brandId": 1}'},playerId:{type:"string",example:"Tyrone"},sessionIp:{type:"string",example:"0.0.0.0"}}}}}},responses:{200:{description:"Successfully launched the specified provider game",content:{"application/json":{schema:{type:"object",properties:{gameUrl:{type:"string"}}}}}},400:{description:"Invalid request",content:{"application/json":{schema:{type:"string"},example:"Bad game launch call"}}}},method:"post",path:"/operator/{provider}/gamelaunch",servers:[{url:"http://localhost:8084",description:"operator server"}],jsonRequestBodyExample:{casino:"YourCasino",country:"SE",currency:"SEK",providerGameId:"BadLuck",language:"sv",launchConfig:'{"providerSpecificConfiguration": "Value", "brandId": 1}',playerId:"Tyrone",sessionIp:"0.0.0.0"},info:{title:"Valkyrie Operator API",description:"Valkyrie endpoint for launching a game at a provider. Relevant for providers and operators using server to server game launch.",version:"0.1.0",license:{name:"MIT",url:"https://github.com/valkyrie-fnd/valkyrie/blob/main/LICENSE.md"}},postman:{name:"Launch game",description:{content:"Launch a provider game through valkyrie",type:"text/plain"},url:{path:["operator",":provider","gamelaunch"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Provider identification string",type:"text/plain"},type:"any",value:"",key:"provider"}]},header:[{disabled:!1,description:{content:"(Required) Player game session identifier",type:"text/plain"},key:"X-Player-Token",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/gamelaunch/valkyrie-operator-api",custom_edit_url:null},u=void 0,g={unversionedId:"gamelaunch/game-launch",id:"gamelaunch/game-launch",title:"Launch game",description:"Launch a provider game through valkyrie",source:"@site/docs/gamelaunch/game-launch.api.mdx",sourceDirName:"gamelaunch",slug:"/gamelaunch/game-launch",permalink:"/docs/gamelaunch/game-launch",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671700173,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{id:"game-launch",title:"Launch game",description:"Launch a provider game through valkyrie",sidebar_label:"Launch game",hide_title:!0,hide_table_of_contents:!0,api:{description:"Launch a provider game through valkyrie",operationId:"GameLaunch",parameters:[{in:"path",name:"provider",required:!0,description:"Provider identification string",example:"redtiger",schema:{type:"string"}},{name:"X-Player-Token",description:"Player game session identifier",in:"header",required:!0,schema:{description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:1,maxLength:40}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",required:["currency","providerGameId","playerId"],properties:{casino:{type:"string",example:"YourCasino"},country:{type:"string",example:"SE"},currency:{type:"string",example:"SEK"},providerGameId:{type:"string",example:"BadLuck"},language:{type:"string",example:"sv"},launchConfig:{type:"object",example:'{"providerSpecificConfiguration": "Value", "brandId": 1}'},playerId:{type:"string",example:"Tyrone"},sessionIp:{type:"string",example:"0.0.0.0"}}}}}},responses:{200:{description:"Successfully launched the specified provider game",content:{"application/json":{schema:{type:"object",properties:{gameUrl:{type:"string"}}}}}},400:{description:"Invalid request",content:{"application/json":{schema:{type:"string"},example:"Bad game launch call"}}}},method:"post",path:"/operator/{provider}/gamelaunch",servers:[{url:"http://localhost:8084",description:"operator server"}],jsonRequestBodyExample:{casino:"YourCasino",country:"SE",currency:"SEK",providerGameId:"BadLuck",language:"sv",launchConfig:'{"providerSpecificConfiguration": "Value", "brandId": 1}',playerId:"Tyrone",sessionIp:"0.0.0.0"},info:{title:"Valkyrie Operator API",description:"Valkyrie endpoint for launching a game at a provider. Relevant for providers and operators using server to server game launch.",version:"0.1.0",license:{name:"MIT",url:"https://github.com/valkyrie-fnd/valkyrie/blob/main/LICENSE.md"}},postman:{name:"Launch game",description:{content:"Launch a provider game through valkyrie",type:"text/plain"},url:{path:["operator",":provider","gamelaunch"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Provider identification string",type:"text/plain"},type:"any",value:"",key:"provider"}]},header:[{disabled:!1,description:{content:"(Required) Player game session identifier",type:"text/plain"},key:"X-Player-Token",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/gamelaunch/valkyrie-operator-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/gamelaunch/valkyrie-operator-api"},next:{title:"Caleta",permalink:"/docs/providers/caleta/"}},h={},y=[{value:"Launch game",id:"launch-game",level:2}],v={toc:y};function k(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"launch-game"},"Launch game"),(0,r.kt)("p",null,"Launch a provider game through valkyrie"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{in:"path",name:"provider",required:!0,description:"Provider identification string",example:"redtiger",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"X-Player-Token",description:"Player game session identifier",in:"header",required:!0,schema:{description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:1,maxLength:40}},mdxType:"ParamsItem"})))),(0,r.kt)(l.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"casino",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"currency",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"providerGameId",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"language",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"launchConfig",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"playerId",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"sessionIp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successfully launched the specified provider game")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"gameUrl",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "gameUrl": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Invalid request")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))))),(0,r.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:"Bad game launch call",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);