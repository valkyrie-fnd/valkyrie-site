"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1515],{58397:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>b,toc:()=>v});var s=t(87462),i=(t(67294),t(3905)),n=t(26389),r=t(94891),o=t(74933),l=t(47507),p=t(24310),d=t(63303),m=(t(75035),t(85162));const u={id:"evo-balance",title:"Balance",description:"Used to get user\u2019s balance",sidebar_label:"Balance",hide_title:!0,hide_table_of_contents:!0,api:{description:"Used to get user\u2019s balance",operationId:"EvoBalance",parameters:[{description:"Api token",in:"query",name:"authToken",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{currency:{type:"string"},game:{},sid:{type:"string"},userId:{type:"string"},uuid:{type:"string"}},required:["currency","sid","userId"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}}},tags:["Evolution"],method:"post",path:"/providers/evolution/balance",jsonRequestBodyExample:{currency:"string",game:{},sid:"string",userId:"string",uuid:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"Balance",description:{content:"Used to get user\u2019s balance",type:"text/plain"},url:{path:["providers","evolution","balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Api token",type:"text/plain"},key:"authToken",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},c=void 0,b={unversionedId:"providerApis/evo-balance",id:"providerApis/evo-balance",title:"Balance",description:"Used to get user\u2019s balance",source:"@site/docs/providerApis/evo-balance.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/evo-balance",permalink:"/docs/providerApis/evo-balance",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671196210,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{id:"evo-balance",title:"Balance",description:"Used to get user\u2019s balance",sidebar_label:"Balance",hide_title:!0,hide_table_of_contents:!0,api:{description:"Used to get user\u2019s balance",operationId:"EvoBalance",parameters:[{description:"Api token",in:"query",name:"authToken",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{currency:{type:"string"},game:{},sid:{type:"string"},userId:{type:"string"},uuid:{type:"string"}},required:["currency","sid","userId"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}}},tags:["Evolution"],method:"post",path:"/providers/evolution/balance",jsonRequestBodyExample:{currency:"string",game:{},sid:"string",userId:"string",uuid:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"Balance",description:{content:"Used to get user\u2019s balance",type:"text/plain"},url:{path:["providers","evolution","balance"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Api token",type:"text/plain"},key:"authToken",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},sidebar:"defaultSidebar",previous:{title:"Win",permalink:"/docs/providerApis/caleta-win"},next:{title:"Cancel",permalink:"/docs/providerApis/evo-cancel"}},y={},v=[{value:"Balance",id:"balance",level:2}],h={toc:v};function g(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"balance"},"Balance"),(0,i.kt)("p",null,"Used to get user\u2019s balance"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Api token",in:"query",name:"authToken",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Request body"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"currency",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"game",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sid",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"userId",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"uuid",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"balance",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"retransmission",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"uuid",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "balance": 0,\n  "bonus": 0,\n  "retransmission": true,\n  "status": "string",\n  "uuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"balance",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"retransmission",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"uuid",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "balance": 0,\n  "bonus": 0,\n  "retransmission": true,\n  "status": "string",\n  "uuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"balance",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"retransmission",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"uuid",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "balance": 0,\n  "bonus": 0,\n  "retransmission": true,\n  "status": "string",\n  "uuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);