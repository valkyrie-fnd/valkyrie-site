"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3496],{57879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>v,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),o=a(94891),d=a(75190),n=a(47507),l=a(24310),p=a(63303),m=(a(75035),a(85162));const c={id:"evo-check",title:"Check",description:"Should be used for additional validation of redirected user and sid",sidebar_label:"Check",hide_title:!0,hide_table_of_contents:!0,api:{description:"Should be used for additional validation of redirected user and sid",operationId:"EvoCheck",parameters:[{description:"Api token",in:"query",name:"authToken",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{channel:{properties:{type:{type:"string"}},type:"object"},sid:{type:"string"},userId:{type:"string"},uuid:{type:"string"}},required:["sid","userId"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{sid:{type:"string"},status:{type:"string"},uuid:{type:"string"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}}},tags:["Evolution"],method:"post",path:"/providers/evolution/check",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{channel:{type:"string"},sid:"string",userId:"string",uuid:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"Check",description:{content:"Should be used for additional validation of redirected user and sid",type:"text/plain"},url:{path:["providers","evolution","check"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Api token",type:"text/plain"},key:"authToken",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},u=void 0,v={unversionedId:"providerApis/evo-check",id:"providerApis/evo-check",title:"Check",description:"Should be used for additional validation of redirected user and sid",source:"@site/docs/providerApis/evo-check.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/evo-check",permalink:"/docs/providerApis/evo-check",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"evo-check",title:"Check",description:"Should be used for additional validation of redirected user and sid",sidebar_label:"Check",hide_title:!0,hide_table_of_contents:!0,api:{description:"Should be used for additional validation of redirected user and sid",operationId:"EvoCheck",parameters:[{description:"Api token",in:"query",name:"authToken",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{channel:{properties:{type:{type:"string"}},type:"object"},sid:{type:"string"},userId:{type:"string"},uuid:{type:"string"}},required:["sid","userId"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{sid:{type:"string"},status:{type:"string"},uuid:{type:"string"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{properties:{balance:{type:"number"},bonus:{type:"number"},retransmission:{type:"boolean"},status:{type:"string"},uuid:{type:"string"}},required:["balance","status"],type:"object"}}}}},tags:["Evolution"],method:"post",path:"/providers/evolution/check",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{channel:{type:"string"},sid:"string",userId:"string",uuid:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"Check",description:{content:"Should be used for additional validation of redirected user and sid",type:"text/plain"},url:{path:["providers","evolution","check"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Api token",type:"text/plain"},key:"authToken",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Cancel",permalink:"/docs/providerApis/evo-cancel"},next:{title:"Credit",permalink:"/docs/providerApis/evo-credit"}},y={},h=[{value:"Check",id:"check",level:2}],k={toc:h};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"check"},"Check"),(0,s.kt)("p",null,"Should be used for additional validation of redirected user and sid"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(d.Z,{className:"paramsItem",param:{description:"Api token",in:"query",name:"authToken",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"Request body"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"channel"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"sid",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"userId",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"uuid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"sid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"uuid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "sid": "string",\n  "status": "string",\n  "uuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"bonus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"retransmission",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"uuid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "balance": 0,\n  "bonus": 0,\n  "retransmission": true,\n  "status": "string",\n  "uuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"bonus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"retransmission",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"uuid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "balance": 0,\n  "bonus": 0,\n  "retransmission": true,\n  "status": "string",\n  "uuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);