"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8960],{56916:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),o=a(94891),n=a(75190),m=a(47507),l=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"rt-promo-settle",title:"PromoSettle",description:"PromoSettle",sidebar_label:"PromoSettle",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoSettle",operationId:"RTPromoSettle",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{casino:{maxLength:50,type:"string"},currency:{maxLength:8,type:"string"},game:{properties:{key:{maxLength:128,type:"string"},type:{type:"string"},version:{maxLength:128,type:"string"}},type:"object"},ip:{type:"string"},jackpot:{properties:{contribution:{type:"string"},group:{maxLength:100,type:"string"},pots:{items:{type:"string"},type:"array"}},type:"object"},promo:{properties:{campaignCode:{maxLength:64,type:"string"},campaignId:{type:"integer"},instanceCode:{maxLength:64,type:"string"},instanceId:{type:"integer"},type:{type:"string"}},type:"object"},retry:{type:"boolean"},round:{properties:{ends:{type:"boolean"},id:{maxLength:32,type:"string"},starts:{type:"boolean"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"},transaction:{properties:{details:{properties:{game:{type:"number"},jackpot:{type:"number"}},type:"object"},id:{maxLength:32,type:"string"},payout:{minimum:0,type:"number"},payoutPromo:{minimum:0,type:"number"},sources:{properties:{features:{type:"number"},jackpot:{additionalProperties:{type:"number"},type:"object"},lines:{type:"number"}},type:"object"}},type:"object"},userId:{maxLength:36,type:"string"}},required:["token"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{maxLength:8,type:"string"},id:{type:"string"},payout:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/settle",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{casino:"string",currency:"string",game:{key:"string",type:"string",version:"string"},ip:"string",jackpot:{contribution:"string",group:"string",pots:["string"]},promo:{campaignCode:"string",campaignId:0,instanceCode:"string",instanceId:0,type:"string"},retry:!0,round:{ends:!0,id:"string",starts:!0},token:"string",transaction:{details:{game:0,jackpot:0},id:"string",payout:0,payoutPromo:0,sources:{features:0,jackpot:{},lines:0}},userId:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"PromoSettle",description:{content:"PromoSettle",type:"text/plain"},url:{path:["providers","redtiger","promo","settle"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},u=void 0,y={unversionedId:"providerApis/rt-promo-settle",id:"providerApis/rt-promo-settle",title:"PromoSettle",description:"PromoSettle",source:"@site/docs/providerApis/rt-promo-settle.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/rt-promo-settle",permalink:"/docs/providerApis/rt-promo-settle",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"rt-promo-settle",title:"PromoSettle",description:"PromoSettle",sidebar_label:"PromoSettle",hide_title:!0,hide_table_of_contents:!0,api:{description:"PromoSettle",operationId:"RTPromoSettle",parameters:[{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{casino:{maxLength:50,type:"string"},currency:{maxLength:8,type:"string"},game:{properties:{key:{maxLength:128,type:"string"},type:{type:"string"},version:{maxLength:128,type:"string"}},type:"object"},ip:{type:"string"},jackpot:{properties:{contribution:{type:"string"},group:{maxLength:100,type:"string"},pots:{items:{type:"string"},type:"array"}},type:"object"},promo:{properties:{campaignCode:{maxLength:64,type:"string"},campaignId:{type:"integer"},instanceCode:{maxLength:64,type:"string"},instanceId:{type:"integer"},type:{type:"string"}},type:"object"},retry:{type:"boolean"},round:{properties:{ends:{type:"boolean"},id:{maxLength:32,type:"string"},starts:{type:"boolean"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"},transaction:{properties:{details:{properties:{game:{type:"number"},jackpot:{type:"number"}},type:"object"},id:{maxLength:32,type:"string"},payout:{minimum:0,type:"number"},payoutPromo:{minimum:0,type:"number"},sources:{properties:{features:{type:"number"},jackpot:{additionalProperties:{type:"number"},type:"object"},lines:{type:"number"}},type:"object"}},type:"object"},userId:{maxLength:36,type:"string"}},required:["token"],type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},result:{properties:{balance:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},currency:{maxLength:8,type:"string"},id:{type:"string"},payout:{properties:{bonus:{type:"number"},cash:{type:"number"}},type:"object"},token:{maxLength:128,minLength:32,type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{error:{properties:{code:{enum:[100,200,201,301,302,303,304,305,306,400,401,500,501],type:"integer","x-enum-varnames":["APIAuthError","InvalidInput","GenericError","NotAuthorized","UserNotFound","BannedUser","InsufficientFunds","InvalidUserCurrency","UserLimitedPlaying","TransactionNotFound","DuplicateTransaction","InternalServerError","UnderMaintenanceMode"]},message:{type:"string"}},type:"object"},success:{type:"boolean"}},type:"object"}}}}},tags:["Red Tiger"],method:"post",path:"/providers/redtiger/promo/settle",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{casino:"string",currency:"string",game:{key:"string",type:"string",version:"string"},ip:"string",jackpot:{contribution:"string",group:"string",pots:["string"]},promo:{campaignCode:"string",campaignId:0,instanceCode:"string",instanceId:0,type:"string"},retry:!0,round:{ends:!0,id:"string",starts:!0},token:"string",transaction:{details:{game:0,jackpot:0},id:"string",payout:0,payoutPromo:0,sources:{features:0,jackpot:{},lines:0}},userId:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"PromoSettle",description:{content:"PromoSettle",type:"text/plain"},url:{path:["providers","redtiger","promo","settle"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"PromoRefund",permalink:"/docs/providerApis/rt-promo-refund"},next:{title:"Refund",permalink:"/docs/providerApis/rt-refund"}},g={},h=[{value:"PromoSettle",id:"promosettle",level:2}],v={toc:h};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"promosettle"},"PromoSettle"),(0,i.kt)("p",null,"PromoSettle"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{description:"API Key",in:"header",name:"Authorization",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Request body"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"casino",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 50 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"currency",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 8 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"game"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"ip",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"jackpot"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"contribution",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"group",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"pots",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"promo"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"campaignCode",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"campaignId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"instanceCode",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"instanceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"retry",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"round"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"ends",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"starts",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"token",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"transaction"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"game",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"jackpot",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"payout",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"payoutPromo",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"sources"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"features",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"jackpot"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number")))))),(0,i.kt)(l.Z,{collapsible:!1,name:"lines",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(l.Z,{collapsible:!1,name:"userId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 36 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"error"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"balance"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"bonus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"cash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"currency",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 8 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payout"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"bonus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"cash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"token",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"success",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "result": {\n    "balance": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "currency": "string",\n    "id": "string",\n    "payout": {\n      "bonus": 0,\n      "cash": 0\n    },\n    "token": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"error"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:"**Possible values:** [`100`, `200`, `201`, `301`, `302`, `303`, `304`, `305`, `306`, `400`, `401`, `500`, `501`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"success",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "error": {\n    "code": 100,\n    "message": "string"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);