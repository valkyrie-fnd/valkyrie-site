"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8960],{56916:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>b});var r=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),n=a(74933),l=a(47507),m=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"rt-promo-settle",title:"PromoSettle",description:"PromoSettle",sidebar_label:"PromoSettle",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoSettle",operationId:"RTPromoSettle",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{$ref:"#/components/requestBodies/RTPayoutReq"},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{maxLength:8,type:"string"},id:{type:"string"},payout:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/settle",info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"PromoSettle",description:{content:"PromoSettle",type:"text/plain"},url:{path:["providers","redtiger","promo","settle"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},u=void 0,y={unversionedId:"providerApis/rt-promo-settle",id:"providerApis/rt-promo-settle",title:"PromoSettle",description:"PromoSettle",source:"@site/docs/providerApis/rt-promo-settle.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/rt-promo-settle",permalink:"/docs/providerApis/rt-promo-settle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671196210,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{id:"rt-promo-settle",title:"PromoSettle",description:"PromoSettle",sidebar_label:"PromoSettle",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoSettle",operationId:"RTPromoSettle",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{$ref:"#/components/requestBodies/RTPayoutReq"},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{maxLength:8,type:"string"},id:{type:"string"},payout:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/settle",info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"PromoSettle",description:{content:"PromoSettle",type:"text/plain"},url:{path:["providers","redtiger","promo","settle"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},sidebar:"defaultSidebar",previous:{title:"PromoRefund",permalink:"/docs/providerApis/rt-promo-refund"},next:{title:"Refund",permalink:"/docs/providerApis/rt-refund"}},h={},b=[{value:"PromoSettle",id:"promosettle",level:2}],v={toc:b};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"promosettle"},"PromoSettle"),(0,s.kt)("p",null,"PromoSettle"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"balance"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"cash",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"currency",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 8 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"payout"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"bonus",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"cash",required:!1,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "result": {\n    "balance": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "currency": "string",\n    "id": "string",\n    "payout": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "token": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);