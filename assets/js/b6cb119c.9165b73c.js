"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9312],{34197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),r=a(94891),o=a(74933),l=(a(47507),a(24310)),d=a(63303),c=(a(75035),a(85162));const p={id:"caleta-rollback",title:"Rollback",description:"Wallet rollback",sidebar_label:"Rollback",hide_title:!0,hide_table_of_contents:!0,api:{description:"Wallet rollback",operationId:"CaletaRollback",parameters:[{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{game_code:{description:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",type:"string"},game_id:{description:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",type:"integer"},is_free:{description:"IsFree Flag which shows that transaction was generated by a promotional tool (FreeSpins, etc). Usually, these transactions are credited to bonus wallets (if available).",type:"boolean"},reference_transaction_uuid:{description:"ReferenceTransactionUuid Unique identifier of the transaction that this transaction is referencing. In case of rollback, this field will contain transaction_uuid of the transaction which needs to be rolled back. In case of win, there will be transaction_uuid of the bet to which this win is related.",type:"string"},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},round:{description:"Round Game round id. Used to relate all bets and wins in one round. All transactions related to the same round will have the same value in this field. It's unique through whole system.",type:"string"},round_closed:{description:"RoundClosed Denotes when the round is closed",type:"boolean"},token:{description:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",type:"string"},transaction_uuid:{description:"TransactionUuid Unique wallet transaction.",type:"string"},user:{description:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",type:"string"}},type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{}}}},400:{description:"Bad Request",content:{"application/json":{schema:{}}}}},tags:["Caleta"],method:"post",path:"/providers/caleta/wallet/rollback",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{game_code:"string",game_id:0,is_free:!0,reference_transaction_uuid:"string",request_uuid:"string",round:"string",round_closed:!0,token:"string",transaction_uuid:"string",user:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"Rollback",description:{content:"Wallet rollback",type:"text/plain"},url:{path:["providers","caleta","wallet","rollback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Signature for request",type:"text/plain"},key:"X-Auth-Signature",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},u=void 0,m={unversionedId:"providerApis/caleta-rollback",id:"providerApis/caleta-rollback",title:"Rollback",description:"Wallet rollback",source:"@site/docs/providerApis/caleta-rollback.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/caleta-rollback",permalink:"/docs/providerApis/caleta-rollback",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671457553,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{id:"caleta-rollback",title:"Rollback",description:"Wallet rollback",sidebar_label:"Rollback",hide_title:!0,hide_table_of_contents:!0,api:{description:"Wallet rollback",operationId:"CaletaRollback",parameters:[{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{game_code:{description:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",type:"string"},game_id:{description:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",type:"integer"},is_free:{description:"IsFree Flag which shows that transaction was generated by a promotional tool (FreeSpins, etc). Usually, these transactions are credited to bonus wallets (if available).",type:"boolean"},reference_transaction_uuid:{description:"ReferenceTransactionUuid Unique identifier of the transaction that this transaction is referencing. In case of rollback, this field will contain transaction_uuid of the transaction which needs to be rolled back. In case of win, there will be transaction_uuid of the bet to which this win is related.",type:"string"},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},round:{description:"Round Game round id. Used to relate all bets and wins in one round. All transactions related to the same round will have the same value in this field. It's unique through whole system.",type:"string"},round_closed:{description:"RoundClosed Denotes when the round is closed",type:"boolean"},token:{description:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",type:"string"},transaction_uuid:{description:"TransactionUuid Unique wallet transaction.",type:"string"},user:{description:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",type:"string"}},type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{}}}},400:{description:"Bad Request",content:{"application/json":{schema:{}}}}},tags:["Caleta"],method:"post",path:"/providers/caleta/wallet/rollback",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{game_code:"string",game_id:0,is_free:!0,reference_transaction_uuid:"string",request_uuid:"string",round:"string",round_closed:!0,token:"string",transaction_uuid:"string",user:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"Rollback",description:{content:"Wallet rollback",type:"text/plain"},url:{path:["providers","caleta","wallet","rollback"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Signature for request",type:"text/plain"},key:"X-Auth-Signature",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},sidebar:"defaultSidebar",previous:{title:"Check",permalink:"/docs/providerApis/caleta-check"},next:{title:"Win",permalink:"/docs/providerApis/caleta-win"}},h={},g=[{value:"Rollback",id:"rollback",level:2}],b={toc:g};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"rollback"},"Rollback"),(0,n.kt)("p",null,"Wallet rollback"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"Request body"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"game_code",required:!1,schemaDescription:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"game_id",required:!1,schemaDescription:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"is_free",required:!1,schemaDescription:"IsFree Flag which shows that transaction was generated by a promotional tool (FreeSpins, etc). Usually, these transactions are credited to bonus wallets (if available).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"reference_transaction_uuid",required:!1,schemaDescription:"ReferenceTransactionUuid Unique identifier of the transaction that this transaction is referencing. In case of rollback, this field will contain transaction_uuid of the transaction which needs to be rolled back. In case of win, there will be transaction_uuid of the bet to which this win is related.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"request_uuid",required:!1,schemaDescription:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"round",required:!1,schemaDescription:"Round Game round id. Used to relate all bets and wins in one round. All transactions related to the same round will have the same value in this field. It's unique through whole system.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"round_closed",required:!1,schemaDescription:"RoundClosed Denotes when the round is closed",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"transaction_uuid",required:!1,schemaDescription:"TransactionUuid Unique wallet transaction.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"user",required:!1,schemaDescription:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}})))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}})))))))))))}y.isMDXComponent=!0}}]);