"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4199],{25257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>v});var a=r(87462),s=(r(67294),r(3905)),o=r(26389),n=r(94891),i=r(74933),m=r(47507),l=r(24310),d=r(63303),p=(r(75035),r(85162));const c={id:"rt-promo-refund",title:"PromoRefund",description:"PromoRefund",sidebar_label:"PromoRefund",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoRefund",operationId:"RTPromoRefund",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{$ref:"#/components/requestBodies/RTPromoBuyinReq"},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{type:"string"},error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{id:{type:"string"},stake:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/refund",info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"PromoRefund",description:{content:"PromoRefund",type:"text/plain"},url:{path:["providers","redtiger","promo","refund"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},u=void 0,y={unversionedId:"providerApis/rt-promo-refund",id:"providerApis/rt-promo-refund",title:"PromoRefund",description:"PromoRefund",source:"@site/docs/providerApis/rt-promo-refund.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/rt-promo-refund",permalink:"/docs/providerApis/rt-promo-refund",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671201313,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{id:"rt-promo-refund",title:"PromoRefund",description:"PromoRefund",sidebar_label:"PromoRefund",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoRefund",operationId:"RTPromoRefund",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{$ref:"#/components/requestBodies/RTPromoBuyinReq"},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{type:"string"},error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{id:{type:"string"},stake:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/refund",info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"PromoRefund",description:{content:"PromoRefund",type:"text/plain"},url:{path:["providers","redtiger","promo","refund"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},sidebar:"defaultSidebar",previous:{title:"PromoBuyin",permalink:"/docs/providerApis/rt-promo-buyin"},next:{title:"PromoSettle",permalink:"/docs/providerApis/rt-promo-settle"}},h={},v=[{value:"PromoRefund",id:"promorefund",level:2}],b={toc:v};function k(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"promorefund"},"PromoRefund"),(0,s.kt)("p",null,"PromoRefund"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"balance"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"cash",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"currency",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"stake"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"cash",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "balance": {\n    "bonus": 0,\n    "cash": 0\n  },\n  "currency": "string",\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "result": {\n    "id": "string",\n    "stake": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "token": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);