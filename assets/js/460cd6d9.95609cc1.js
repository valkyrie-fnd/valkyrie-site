"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5290],{93488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),o=a(94891),n=a(75190),m=a(47507),d=a(24310),l=a(63303),p=(a(75035),a(85162));const c={id:"rt-promo-buyin",title:"PromoBuyin",description:"PromoBuyin",sidebar_label:"PromoBuyin",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoBuyin",operationId:"RTPromoBuyin",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{casino:{maxLength:50,type:"string"},currency:{maxLength:8,type:"string"},game:{properties:{key:{maxLength:128,type:"string"},type:{type:"string"},version:{maxLength:128,type:"string"}},type:"object"},ip:{type:"string"},promo:{properties:{campaignCode:{maxLength:64,type:"string"},campaignId:{type:"integer"},instanceCode:{maxLength:64,type:"string"},instanceId:{type:"integer"},type:{type:"string"}},type:"object"},round:{properties:{ends:{type:"boolean"},id:{maxLength:32,type:"string"},starts:{type:"boolean"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"},transaction:{properties:{details:{properties:{game:{type:"number"},jackpot:{type:"number"}},type:"object"},id:{maxLength:32,type:"string"},stake:{type:"number"},stakePromo:{type:"number"}},type:"object"},userId:{maxLength:36,type:"string"}},required:["token"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{maxLength:8,type:"string"},id:{type:"string"},stake:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/buyin",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{casino:"string",currency:"string",game:{key:"string",type:"string",version:"string"},ip:"string",promo:{campaignCode:"string",campaignId:0,instanceCode:"string",instanceId:0,type:"string"},round:{ends:!0,id:"string",starts:!0},token:"string",transaction:{details:{game:0,jackpot:0},id:"string",stake:0,stakePromo:0},userId:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"PromoBuyin",description:{content:"PromoBuyin",type:"text/plain"},url:{path:["providers","redtiger","promo","buyin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},u=void 0,y={unversionedId:"providerApis/rt-promo-buyin",id:"providerApis/rt-promo-buyin",title:"PromoBuyin",description:"PromoBuyin",source:"@site/docs/providerApis/rt-promo-buyin.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/rt-promo-buyin",permalink:"/docs/providerApis/rt-promo-buyin",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"Tommy",lastUpdatedAt:1671693633,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{id:"rt-promo-buyin",title:"PromoBuyin",description:"PromoBuyin",sidebar_label:"PromoBuyin",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoBuyin",operationId:"RTPromoBuyin",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{casino:{maxLength:50,type:"string"},currency:{maxLength:8,type:"string"},game:{properties:{key:{maxLength:128,type:"string"},type:{type:"string"},version:{maxLength:128,type:"string"}},type:"object"},ip:{type:"string"},promo:{properties:{campaignCode:{maxLength:64,type:"string"},campaignId:{type:"integer"},instanceCode:{maxLength:64,type:"string"},instanceId:{type:"integer"},type:{type:"string"}},type:"object"},round:{properties:{ends:{type:"boolean"},id:{maxLength:32,type:"string"},starts:{type:"boolean"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"},transaction:{properties:{details:{properties:{game:{type:"number"},jackpot:{type:"number"}},type:"object"},id:{maxLength:32,type:"string"},stake:{type:"number"},stakePromo:{type:"number"}},type:"object"},userId:{maxLength:36,type:"string"}},required:["token"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{maxLength:8,type:"string"},id:{type:"string"},stake:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/buyin",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{casino:"string",currency:"string",game:{key:"string",type:"string",version:"string"},ip:"string",promo:{campaignCode:"string",campaignId:0,instanceCode:"string",instanceId:0,type:"string"},round:{ends:!0,id:"string",starts:!0},token:"string",transaction:{details:{game:0,jackpot:0},id:"string",stake:0,stakePromo:0},userId:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"PromoBuyin",description:{content:"PromoBuyin",type:"text/plain"},url:{path:["providers","redtiger","promo","buyin"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Payout",permalink:"/docs/providerApis/rt-payout"},next:{title:"PromoRefund",permalink:"/docs/providerApis/rt-promo-refund"}},g={},h=[{value:"PromoBuyin",id:"promobuyin",level:2}],v={toc:h};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"promobuyin"},"PromoBuyin"),(0,s.kt)("p",null,"PromoBuyin"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"Request body"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"casino",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 50 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"currency",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 8 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"game"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"ip",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"promo"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"campaignCode",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"campaignId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"instanceCode",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"instanceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"round"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"ends",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"starts",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"token",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"transaction"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"game",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"jackpot",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"stake",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"stakePromo",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"userId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 36 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"balance"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"bonus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"cash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"currency",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 8 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"stake"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"bonus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"cash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"token",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"success",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "result": {\n    "balance": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "currency": "string",\n    "id": "string",\n    "stake": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "token": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"success",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);