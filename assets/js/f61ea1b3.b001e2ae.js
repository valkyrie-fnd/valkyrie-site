"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6701],{27858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>_,metadata:()=>R,toc:()=>u});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),r=n(94891),o=n(74933),d=n(47507),l=n(24310),c=n(63303),p=(n(75035),n(85162));const _={id:"get-session",title:"Get session details",description:"Get details for the player game session. The session details shall not change during the session lifetime.",sidebar_label:"Get session details",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getSession",description:"Get details for the player game session. The session details shall not change during the session lifetime.\n",tags:["session"],parameters:[{in:"query",name:"provider",required:!0,description:"Name of the game provider associated with the session",example:"Evolution",schema:{type:"string"}},{name:"X-Player-Token",description:"Player game session identifier",in:"header",required:!0,schema:{name:"sessionToken",description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:32,maxLength:40}},{name:"X-Correlation-ID",description:"Header for correlating requests between the services for debugging purposes and request tracing. The value will originate from the game providers that support request identification. Otherwise Valkyrie will generate a value.\n",in:"header",required:!0,schema:{type:"string"}}],responses:{200:{description:"A SessionResponse containing the session details.",content:{"application/json":{schema:{allOf:[{type:"object",properties:{status:{type:"string",enum:["OK","ERROR"]},error:{description:"Error details describing why PAM rejected the request",type:"object",required:["code","message"],properties:{code:{type:"string",description:"- `PAM_ERR_UNDEFINED` - When you need a generic error.\n- `PAM_ERR_ACC_NOT_FOUND` - When account of `playerId` is not found.\n- `PAM_ERR_GAME_NOT_FOUND` - When specified `providerGameId` is not found.\n- `PAM_ERR_ROUND_NOT_FOUND` - In getGameRound, when there is no game round with id `providerGameRoundId`.\n- `PAM_ERR_TRANS_NOT_FOUND` - In DEPOSIT transaction if the game round with id `providerRoundId` is not found.\n- `PAM_ERR_CASH_OVERDRAFT` - When user does not have enough funds on their account for a withdraw transactions.\n- `PAM_ERR_BONUS_OVERDRAFT` - When user does not have enough funds on their bonus account for a withdraw transaction.\n- `PAM_ERR_SESSION_NOT_FOUND` - When no session is found for provided `X-Player-Token`.\n- `PAM_ERR_SESSION_EXPIRED` - When session related to `X-Player-Token` has expired.\n- `PAM_ERR_MISSING_PROVIDER` - When specified query parameter `provider` is not found.\n- `PAM_ERR_TRANS_CURRENCY` - When specified `Currency` does not match that of the session.\n- `PAM_ERR_NEGATIVE_STAKE` - When transaction amount is negative.\n- `PAM_ERR_CANCEL_NOT_FOUND` - When the transaction trying to cancel doesn't exist.\n- `PAM_ERR_TRANS_ALREADY_CANCELLED` - When trying to cancel an already cancelled transaction, or when a Deposit is made toward a cancelled withdraw.\n- `PAM_ERR_CANCEL_NON_WITHDRAW` - When trying to cancel a transaction that is not a Withdraw transaction.\n- `PAM_ERR_BET_NOT_ALLOWED` - When a bet cannot be done, eg when the user is blocked.\n- `PAM_ERR_PLAYER_NOT_FOUND` - When `playerId` is not found.\n- `PAM_ERR_API_TOKEN` - When `Authorization` header api token does not match the PAM api token.\n- `PAM_ERR_TRANS_ALREADY_SETTLED` - When trying to cancel an already Deposited bet or when trying to Deposit on an already finished gameRound, finished bet.\n- `PAM_ERR_DUPLICATE_TRANS` - When a Deposit is made with an already existing `providerTransactionId` but with different `playerId`/`providerGameId`/`providerRoundId`.\n- `PAM_ERR_PROMO_OVERDRAFT` - When user does not have enough funds on their promo account for a withdraw transaction.\n",enum:["PAM_ERR_UNDEFINED","PAM_ERR_ACC_NOT_FOUND","PAM_ERR_GAME_NOT_FOUND","PAM_ERR_ROUND_NOT_FOUND","PAM_ERR_TRANS_NOT_FOUND","PAM_ERR_CASH_OVERDRAFT","PAM_ERR_BONUS_OVERDRAFT","PAM_ERR_SESSION_NOT_FOUND","PAM_ERR_SESSION_EXPIRED","PAM_ERR_MISSING_PROVIDER","PAM_ERR_TRANS_CURRENCY","PAM_ERR_NEGATIVE_STAKE","PAM_ERR_CANCEL_NOT_FOUND","PAM_ERR_TRANS_ALREADY_CANCELLED","PAM_ERR_CANCEL_NON_WITHDRAW","PAM_ERR_BET_NOT_ALLOWED","PAM_ERR_PLAYER_NOT_FOUND","PAM_ERR_API_TOKEN","PAM_ERR_TRANS_ALREADY_SETTLED","PAM_ERR_DUPLICATE_TRANS","PAM_ERR_PROMO_OVERDRAFT"]},message:{type:"string"}}}},required:["status"]},{type:"object",properties:{session:{type:"object",properties:{playerId:{description:"id of player",type:"string",example:"73619e57b3bc4b4e9014132be3bd12a9",minLength:1,maxLength:40},token:{name:"sessionToken",description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:32,maxLength:40},currency:{type:"string",description:"ISO 4217 three letter currency code",pattern:"^[A-Z]{3}$",example:"USD",externalDocs:{url:"https://en.wikipedia.org/wiki/ISO_4217"}},country:{type:"string",description:"ISO 3166-1 alpha-2 two letter country code",pattern:"^[A-Z]{2}$",example:"US",externalDocs:{url:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}},language:{type:"string",description:"ISO 639-1 two letter language code",pattern:"^[A-Z]{2}$",example:"en",externalDocs:{url:"https://en.wikipedia.org/wiki/ISO_639-1"}},gameId:{description:"The game identifier unique for the RGS(provider)",type:"string",example:"ecf559b11f0",minLength:1,maxLength:40}},required:["playerId","token","currency","country","language"]}}}]}}}},401:{description:"Invalid session or api key",content:{"application/json":{schema:{type:"object",required:["status","error"],properties:{status:{description:"Status is Error",type:"string",example:"Error"},error:{description:"Error details describing why PAM rejected the request",type:"object",required:["code","message"],properties:{message:{type:"string"},code:{description:'Pam Error code "PAM_ERR_SESSION_NOT_FOUND" or "PAM_ERR_UNDEFINED"',type:"string",example:"PAM_ERR_SESSION_NOT_FOUND"}}}}}}}}},method:"get",path:"/players/session",security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",description:"PAM API token, if any is required",scheme:"bearer"}},info:{title:"Valkyrie PAM API",description:'Specification describing required endpoints implemented in an operator\nPlayer Account Management(PAM) system, in order to integrate with\nthe Valkyrie aggregator.\n\nResponse format will consist of a common wrapper containing status\ncode and either requested data or error details according to specs\nbelow. In general HTTP error codes will only describe hard errors\nnot business logic.\n```json\n{\n  "status": "OK",\n  "entity": {...}\n}\n```\nor in case of error:\n```json\n{\n  "status": "ERROR",\n  "error": {\n    "code": 1\n    "msg": "provider not recognized"\n  }\n}\n```\n',version:"0.4.1"},postman:{name:"Get session details",description:{content:"Get details for the player game session. The session details shall not change during the session lifetime.\n",type:"text/plain"},url:{path:["players","session"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Name of the game provider associated with the session",type:"text/plain"},key:"provider",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Player game session identifier",type:"text/plain"},key:"X-Player-Token",value:""},{disabled:!1,description:{content:"(Required) Header for correlating requests between the services for debugging purposes and request tracing. The value will originate from the game providers that support request identification. Otherwise Valkyrie will generate a value.\n",type:"text/plain"},key:"X-Correlation-ID",value:""},{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wallet/valkyrie-pam-api"},m=void 0,R={unversionedId:"wallet/get-session",id:"wallet/get-session",title:"Get session details",description:"Get details for the player game session. The session details shall not change during the session lifetime.",source:"@site/docs/wallet/get-session.api.mdx",sourceDirName:"wallet",slug:"/wallet/get-session",permalink:"/docs/wallet/get-session",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671201313,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{id:"get-session",title:"Get session details",description:"Get details for the player game session. The session details shall not change during the session lifetime.",sidebar_label:"Get session details",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getSession",description:"Get details for the player game session. The session details shall not change during the session lifetime.\n",tags:["session"],parameters:[{in:"query",name:"provider",required:!0,description:"Name of the game provider associated with the session",example:"Evolution",schema:{type:"string"}},{name:"X-Player-Token",description:"Player game session identifier",in:"header",required:!0,schema:{name:"sessionToken",description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:32,maxLength:40}},{name:"X-Correlation-ID",description:"Header for correlating requests between the services for debugging purposes and request tracing. The value will originate from the game providers that support request identification. Otherwise Valkyrie will generate a value.\n",in:"header",required:!0,schema:{type:"string"}}],responses:{200:{description:"A SessionResponse containing the session details.",content:{"application/json":{schema:{allOf:[{type:"object",properties:{status:{type:"string",enum:["OK","ERROR"]},error:{description:"Error details describing why PAM rejected the request",type:"object",required:["code","message"],properties:{code:{type:"string",description:"- `PAM_ERR_UNDEFINED` - When you need a generic error.\n- `PAM_ERR_ACC_NOT_FOUND` - When account of `playerId` is not found.\n- `PAM_ERR_GAME_NOT_FOUND` - When specified `providerGameId` is not found.\n- `PAM_ERR_ROUND_NOT_FOUND` - In getGameRound, when there is no game round with id `providerGameRoundId`.\n- `PAM_ERR_TRANS_NOT_FOUND` - In DEPOSIT transaction if the game round with id `providerRoundId` is not found.\n- `PAM_ERR_CASH_OVERDRAFT` - When user does not have enough funds on their account for a withdraw transactions.\n- `PAM_ERR_BONUS_OVERDRAFT` - When user does not have enough funds on their bonus account for a withdraw transaction.\n- `PAM_ERR_SESSION_NOT_FOUND` - When no session is found for provided `X-Player-Token`.\n- `PAM_ERR_SESSION_EXPIRED` - When session related to `X-Player-Token` has expired.\n- `PAM_ERR_MISSING_PROVIDER` - When specified query parameter `provider` is not found.\n- `PAM_ERR_TRANS_CURRENCY` - When specified `Currency` does not match that of the session.\n- `PAM_ERR_NEGATIVE_STAKE` - When transaction amount is negative.\n- `PAM_ERR_CANCEL_NOT_FOUND` - When the transaction trying to cancel doesn't exist.\n- `PAM_ERR_TRANS_ALREADY_CANCELLED` - When trying to cancel an already cancelled transaction, or when a Deposit is made toward a cancelled withdraw.\n- `PAM_ERR_CANCEL_NON_WITHDRAW` - When trying to cancel a transaction that is not a Withdraw transaction.\n- `PAM_ERR_BET_NOT_ALLOWED` - When a bet cannot be done, eg when the user is blocked.\n- `PAM_ERR_PLAYER_NOT_FOUND` - When `playerId` is not found.\n- `PAM_ERR_API_TOKEN` - When `Authorization` header api token does not match the PAM api token.\n- `PAM_ERR_TRANS_ALREADY_SETTLED` - When trying to cancel an already Deposited bet or when trying to Deposit on an already finished gameRound, finished bet.\n- `PAM_ERR_DUPLICATE_TRANS` - When a Deposit is made with an already existing `providerTransactionId` but with different `playerId`/`providerGameId`/`providerRoundId`.\n- `PAM_ERR_PROMO_OVERDRAFT` - When user does not have enough funds on their promo account for a withdraw transaction.\n",enum:["PAM_ERR_UNDEFINED","PAM_ERR_ACC_NOT_FOUND","PAM_ERR_GAME_NOT_FOUND","PAM_ERR_ROUND_NOT_FOUND","PAM_ERR_TRANS_NOT_FOUND","PAM_ERR_CASH_OVERDRAFT","PAM_ERR_BONUS_OVERDRAFT","PAM_ERR_SESSION_NOT_FOUND","PAM_ERR_SESSION_EXPIRED","PAM_ERR_MISSING_PROVIDER","PAM_ERR_TRANS_CURRENCY","PAM_ERR_NEGATIVE_STAKE","PAM_ERR_CANCEL_NOT_FOUND","PAM_ERR_TRANS_ALREADY_CANCELLED","PAM_ERR_CANCEL_NON_WITHDRAW","PAM_ERR_BET_NOT_ALLOWED","PAM_ERR_PLAYER_NOT_FOUND","PAM_ERR_API_TOKEN","PAM_ERR_TRANS_ALREADY_SETTLED","PAM_ERR_DUPLICATE_TRANS","PAM_ERR_PROMO_OVERDRAFT"]},message:{type:"string"}}}},required:["status"]},{type:"object",properties:{session:{type:"object",properties:{playerId:{description:"id of player",type:"string",example:"73619e57b3bc4b4e9014132be3bd12a9",minLength:1,maxLength:40},token:{name:"sessionToken",description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:32,maxLength:40},currency:{type:"string",description:"ISO 4217 three letter currency code",pattern:"^[A-Z]{3}$",example:"USD",externalDocs:{url:"https://en.wikipedia.org/wiki/ISO_4217"}},country:{type:"string",description:"ISO 3166-1 alpha-2 two letter country code",pattern:"^[A-Z]{2}$",example:"US",externalDocs:{url:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}},language:{type:"string",description:"ISO 639-1 two letter language code",pattern:"^[A-Z]{2}$",example:"en",externalDocs:{url:"https://en.wikipedia.org/wiki/ISO_639-1"}},gameId:{description:"The game identifier unique for the RGS(provider)",type:"string",example:"ecf559b11f0",minLength:1,maxLength:40}},required:["playerId","token","currency","country","language"]}}}]}}}},401:{description:"Invalid session or api key",content:{"application/json":{schema:{type:"object",required:["status","error"],properties:{status:{description:"Status is Error",type:"string",example:"Error"},error:{description:"Error details describing why PAM rejected the request",type:"object",required:["code","message"],properties:{message:{type:"string"},code:{description:'Pam Error code "PAM_ERR_SESSION_NOT_FOUND" or "PAM_ERR_UNDEFINED"',type:"string",example:"PAM_ERR_SESSION_NOT_FOUND"}}}}}}}}},method:"get",path:"/players/session",security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",description:"PAM API token, if any is required",scheme:"bearer"}},info:{title:"Valkyrie PAM API",description:'Specification describing required endpoints implemented in an operator\nPlayer Account Management(PAM) system, in order to integrate with\nthe Valkyrie aggregator.\n\nResponse format will consist of a common wrapper containing status\ncode and either requested data or error details according to specs\nbelow. In general HTTP error codes will only describe hard errors\nnot business logic.\n```json\n{\n  "status": "OK",\n  "entity": {...}\n}\n```\nor in case of error:\n```json\n{\n  "status": "ERROR",\n  "error": {\n    "code": 1\n    "msg": "provider not recognized"\n  }\n}\n```\n',version:"0.4.1"},postman:{name:"Get session details",description:{content:"Get details for the player game session. The session details shall not change during the session lifetime.\n",type:"text/plain"},url:{path:["players","session"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Name of the game provider associated with the session",type:"text/plain"},key:"provider",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) Player game session identifier",type:"text/plain"},key:"X-Player-Token",value:""},{disabled:!1,description:{content:"(Required) Header for correlating requests between the services for debugging purposes and request tracing. The value will originate from the game providers that support request identification. Otherwise Valkyrie will generate a value.\n",type:"text/plain"},key:"X-Correlation-ID",value:""},{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wallet/valkyrie-pam-api"},sidebar:"defaultSidebar",previous:{title:"Get game rounds",permalink:"/docs/wallet/get-game-round"},next:{title:"Get transactions",permalink:"/docs/wallet/get-transactions"}},h={},u=[{value:"Get session details",id:"get-session-details",level:2}],E={toc:u};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-session-details"},"Get session details"),(0,s.kt)("p",null,"Get details for the player game session. The session details shall not change during the session lifetime."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"provider",required:!0,description:"Name of the game provider associated with the session",example:"Evolution",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"X-Player-Token",description:"Player game session identifier",in:"header",required:!0,schema:{name:"sessionToken",description:"Player game session identifier",type:"string",example:"7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",minLength:32,maxLength:40}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"X-Correlation-ID",description:"Header for correlating requests between the services for debugging purposes and request tracing. The value will originate from the game providers that support request identification. Otherwise Valkyrie will generate a value.\n",in:"header",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A SessionResponse containing the session details.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`OK`, `ERROR`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Error details describing why PAM rejected the request")),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:"- `PAM_ERR_UNDEFINED` - When you need a generic error.\n- `PAM_ERR_ACC_NOT_FOUND` - When account of `playerId` is not found.\n- `PAM_ERR_GAME_NOT_FOUND` - When specified `providerGameId` is not found.\n- `PAM_ERR_ROUND_NOT_FOUND` - In getGameRound, when there is no game round with id `providerGameRoundId`.\n- `PAM_ERR_TRANS_NOT_FOUND` - In DEPOSIT transaction if the game round with id `providerRoundId` is not found.\n- `PAM_ERR_CASH_OVERDRAFT` - When user does not have enough funds on their account for a withdraw transactions.\n- `PAM_ERR_BONUS_OVERDRAFT` - When user does not have enough funds on their bonus account for a withdraw transaction.\n- `PAM_ERR_SESSION_NOT_FOUND` - When no session is found for provided `X-Player-Token`.\n- `PAM_ERR_SESSION_EXPIRED` - When session related to `X-Player-Token` has expired.\n- `PAM_ERR_MISSING_PROVIDER` - When specified query parameter `provider` is not found.\n- `PAM_ERR_TRANS_CURRENCY` - When specified `Currency` does not match that of the session.\n- `PAM_ERR_NEGATIVE_STAKE` - When transaction amount is negative.\n- `PAM_ERR_CANCEL_NOT_FOUND` - When the transaction trying to cancel doesn't exist.\n- `PAM_ERR_TRANS_ALREADY_CANCELLED` - When trying to cancel an already cancelled transaction, or when a Deposit is made toward a cancelled withdraw.\n- `PAM_ERR_CANCEL_NON_WITHDRAW` - When trying to cancel a transaction that is not a Withdraw transaction.\n- `PAM_ERR_BET_NOT_ALLOWED` - When a bet cannot be done, eg when the user is blocked.\n- `PAM_ERR_PLAYER_NOT_FOUND` - When `playerId` is not found.\n- `PAM_ERR_API_TOKEN` - When `Authorization` header api token does not match the PAM api token.\n- `PAM_ERR_TRANS_ALREADY_SETTLED` - When trying to cancel an already Deposited bet or when trying to Deposit on an already finished gameRound, finished bet.\n- `PAM_ERR_DUPLICATE_TRANS` - When a Deposit is made with an already existing `providerTransactionId` but with different `playerId`/`providerGameId`/`providerRoundId`.\n- `PAM_ERR_PROMO_OVERDRAFT` - When user does not have enough funds on their promo account for a withdraw transaction.\n",schemaName:"string",qualifierMessage:"**Possible values:** [`PAM_ERR_UNDEFINED`, `PAM_ERR_ACC_NOT_FOUND`, `PAM_ERR_GAME_NOT_FOUND`, `PAM_ERR_ROUND_NOT_FOUND`, `PAM_ERR_TRANS_NOT_FOUND`, `PAM_ERR_CASH_OVERDRAFT`, `PAM_ERR_BONUS_OVERDRAFT`, `PAM_ERR_SESSION_NOT_FOUND`, `PAM_ERR_SESSION_EXPIRED`, `PAM_ERR_MISSING_PROVIDER`, `PAM_ERR_TRANS_CURRENCY`, `PAM_ERR_NEGATIVE_STAKE`, `PAM_ERR_CANCEL_NOT_FOUND`, `PAM_ERR_TRANS_ALREADY_CANCELLED`, `PAM_ERR_CANCEL_NON_WITHDRAW`, `PAM_ERR_BET_NOT_ALLOWED`, `PAM_ERR_PLAYER_NOT_FOUND`, `PAM_ERR_API_TOKEN`, `PAM_ERR_TRANS_ALREADY_SETTLED`, `PAM_ERR_DUPLICATE_TRANS`, `PAM_ERR_PROMO_OVERDRAFT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"session"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"playerId",required:!1,schemaDescription:"id of player",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 40 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:"Player game session identifier",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 40 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"currency",required:!1,schemaDescription:"ISO 4217 three letter currency code",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[A-Z]{3}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"country",required:!1,schemaDescription:"ISO 3166-1 alpha-2 two letter country code",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[A-Z]{2}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"language",required:!1,schemaDescription:"ISO 639-1 two letter language code",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^[A-Z]{2}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"gameId",required:!1,schemaDescription:"The game identifier unique for the RGS(provider)",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 40 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "status": "OK",\n  "error": {\n    "code": "PAM_ERR_UNDEFINED",\n    "message": "string"\n  },\n  "session": {\n    "playerId": "73619e57b3bc4b4e9014132be3bd12a9",\n    "token": "7ca10daf12f2cac9fecf559b11f0f0c8bd21ae43",\n    "currency": "USD",\n    "country": "US",\n    "language": "en",\n    "gameId": "ecf559b11f0"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Invalid session or api key")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Status is Error",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Error details describing why PAM rejected the request")),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:'Pam Error code "PAM_ERR_SESSION_NOT_FOUND" or "PAM_ERR_UNDEFINED"',schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "status": "Error",\n  "error": {\n    "message": "string",\n    "code": "PAM_ERR_SESSION_NOT_FOUND"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);