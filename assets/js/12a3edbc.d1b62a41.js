"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13],{95895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>D,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),s=a(94891),o=a(74933),d=(a(47507),a(24310)),l=a(63303),c=(a(75035),a(85162));const u={id:"caleta-win",title:"Win",description:"Wallet win",sidebar_label:"Win",hide_title:!0,hide_table_of_contents:!0,api:{description:"Wallet win",operationId:"CaletaWin",parameters:[{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{amount:{description:"Amount We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",type:"integer"},bet:{description:"Bet Field for metadata related to transaction, such as type of bet, value, time, etc. Differs from game to game. Not relevant for transaction processing procedure but could be useful for statistics or activity backtracking.",type:"string"},campaign_uuid:{description:"CampaignUuid Each Free Bet campaign contains an unique identifier on Caleta side. Campaings holds information of game where Free Bet will happen, total of spins, bet value and period of campaign.",type:"string"},currency:{allOf:[{enum:["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","mBTC","MDL","mETH","MGA","MKD","mLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","uBTC","uETH","UGX","uLTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"],type:"string","x-enum-varnames":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","MBTC","MDL","METH","MGA","MKD","MLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UBTC","UETH","UGX","ULTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"]}],description:"Currency ISO 4217 currency code. Following enum contains all currencies supported by our system. Existing of currency in this list doesn't mean that all providers support native game play with it. Please contact us to know which provider supports which currencies."},game_code:{description:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",type:"string"},game_id:{description:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",type:"integer"},is_free:{description:"IsFree Flag which shows that transaction was generated by a promotional tool (FreeSpins, etc). Usually, these transactions are credited to bonus wallets (if available).",type:"boolean"},jackpot_win:{description:"JackpotWin This field is included if a jackpot win occurred. The reported value indicate how much of the win amount was contributed to from winning the jackpot. This value is represented as an integer similar to amount.",type:"integer"},reference_transaction_uuid:{description:"ReferenceTransactionUuid Unique identifier of the transaction that this transaction is referencing. In case of rollback, this field will contain transaction_uuid of the transaction which needs to be rolled back. In case of win, there will be transaction_uuid of the bet to which this win is related.",type:"string"},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},reward_uuid:{description:"RewardUuid This holds the uuid of a reward given to a player on Caleta side. Rewards holds information about which campaigns belong, player, quantity left of Free Bets.",type:"string"},round:{description:"Round Game round id. Used to relate all bets and wins in one round. All transactions related to the same round will have the same value in this field. It's unique through whole system.",type:"string"},round_closed:{description:"RoundClosed Denotes when the round is closed",type:"boolean"},supplier_user:{description:"SupplierUser The name of the user in Provider's system (in case Operator needs to find user in Provder's back office or report problem with the user). If value is NULL, the Operator can search for their own user_id.",type:"string"},token:{description:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",type:"string"},transaction_uuid:{description:"TransactionUuid Unique wallet transaction.",type:"string"}},type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{}}}},400:{description:"Bad Request",content:{"application/json":{schema:{}}}}},tags:["Caleta"],method:"post",path:"/providers/caleta/wallet/win",jsonRequestBodyExample:{amount:0,bet:"string",campaign_uuid:"string",currency:"AED",game_code:"string",game_id:0,is_free:!0,jackpot_win:0,reference_transaction_uuid:"string",request_uuid:"string",reward_uuid:"string",round:"string",round_closed:!0,supplier_user:"string",token:"string",transaction_uuid:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"Win",description:{content:"Wallet win",type:"text/plain"},url:{path:["providers","caleta","wallet","win"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Signature for request",type:"text/plain"},key:"X-Auth-Signature",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},p=void 0,m={unversionedId:"providerApis/caleta-win",id:"providerApis/caleta-win",title:"Win",description:"Wallet win",source:"@site/docs/providerApis/caleta-win.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/caleta-win",permalink:"/valkyrie-site/docs/providerApis/caleta-win",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671199147,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{id:"caleta-win",title:"Win",description:"Wallet win",sidebar_label:"Win",hide_title:!0,hide_table_of_contents:!0,api:{description:"Wallet win",operationId:"CaletaWin",parameters:[{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{amount:{description:"Amount We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",type:"integer"},bet:{description:"Bet Field for metadata related to transaction, such as type of bet, value, time, etc. Differs from game to game. Not relevant for transaction processing procedure but could be useful for statistics or activity backtracking.",type:"string"},campaign_uuid:{description:"CampaignUuid Each Free Bet campaign contains an unique identifier on Caleta side. Campaings holds information of game where Free Bet will happen, total of spins, bet value and period of campaign.",type:"string"},currency:{allOf:[{enum:["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","mBTC","MDL","mETH","MGA","MKD","mLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","uBTC","uETH","UGX","uLTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"],type:"string","x-enum-varnames":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","MBTC","MDL","METH","MGA","MKD","MLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UBTC","UETH","UGX","ULTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"]}],description:"Currency ISO 4217 currency code. Following enum contains all currencies supported by our system. Existing of currency in this list doesn't mean that all providers support native game play with it. Please contact us to know which provider supports which currencies."},game_code:{description:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",type:"string"},game_id:{description:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",type:"integer"},is_free:{description:"IsFree Flag which shows that transaction was generated by a promotional tool (FreeSpins, etc). Usually, these transactions are credited to bonus wallets (if available).",type:"boolean"},jackpot_win:{description:"JackpotWin This field is included if a jackpot win occurred. The reported value indicate how much of the win amount was contributed to from winning the jackpot. This value is represented as an integer similar to amount.",type:"integer"},reference_transaction_uuid:{description:"ReferenceTransactionUuid Unique identifier of the transaction that this transaction is referencing. In case of rollback, this field will contain transaction_uuid of the transaction which needs to be rolled back. In case of win, there will be transaction_uuid of the bet to which this win is related.",type:"string"},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},reward_uuid:{description:"RewardUuid This holds the uuid of a reward given to a player on Caleta side. Rewards holds information about which campaigns belong, player, quantity left of Free Bets.",type:"string"},round:{description:"Round Game round id. Used to relate all bets and wins in one round. All transactions related to the same round will have the same value in this field. It's unique through whole system.",type:"string"},round_closed:{description:"RoundClosed Denotes when the round is closed",type:"boolean"},supplier_user:{description:"SupplierUser The name of the user in Provider's system (in case Operator needs to find user in Provder's back office or report problem with the user). If value is NULL, the Operator can search for their own user_id.",type:"string"},token:{description:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",type:"string"},transaction_uuid:{description:"TransactionUuid Unique wallet transaction.",type:"string"}},type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{}}}},400:{description:"Bad Request",content:{"application/json":{schema:{}}}}},tags:["Caleta"],method:"post",path:"/providers/caleta/wallet/win",jsonRequestBodyExample:{amount:0,bet:"string",campaign_uuid:"string",currency:"AED",game_code:"string",game_id:0,is_free:!0,jackpot_win:0,reference_transaction_uuid:"string",request_uuid:"string",reward_uuid:"string",round:"string",round_closed:!0,supplier_user:"string",token:"string",transaction_uuid:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:""},postman:{name:"Win",description:{content:"Wallet win",type:"text/plain"},url:{path:["providers","caleta","wallet","win"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Signature for request",type:"text/plain"},key:"X-Auth-Signature",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api"},sidebar:"defaultSidebar",previous:{title:"Rollback",permalink:"/valkyrie-site/docs/providerApis/caleta-rollback"},next:{title:"Balance",permalink:"/valkyrie-site/docs/providerApis/evo-balance"}},h={},g=[{value:"Win",id:"win",level:2}],f={toc:g};function D(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"win"},"Win"),(0,n.kt)("p",null,"Wallet win"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"Request body"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,schemaDescription:"Amount We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"bet",required:!1,schemaDescription:"Bet Field for metadata related to transaction, such as type of bet, value, time, etc. Differs from game to game. Not relevant for transaction processing procedure but could be useful for statistics or activity backtracking.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"campaign_uuid",required:!1,schemaDescription:"CampaignUuid Each Free Bet campaign contains an unique identifier on Caleta side. Campaings holds information of game where Free Bet will happen, total of spins, bet value and period of campaign.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"currency",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"game_code",required:!1,schemaDescription:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"game_id",required:!1,schemaDescription:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"is_free",required:!1,schemaDescription:"IsFree Flag which shows that transaction was generated by a promotional tool (FreeSpins, etc). Usually, these transactions are credited to bonus wallets (if available).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"jackpot_win",required:!1,schemaDescription:"JackpotWin This field is included if a jackpot win occurred. The reported value indicate how much of the win amount was contributed to from winning the jackpot. This value is represented as an integer similar to amount.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"reference_transaction_uuid",required:!1,schemaDescription:"ReferenceTransactionUuid Unique identifier of the transaction that this transaction is referencing. In case of rollback, this field will contain transaction_uuid of the transaction which needs to be rolled back. In case of win, there will be transaction_uuid of the bet to which this win is related.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"request_uuid",required:!1,schemaDescription:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"reward_uuid",required:!1,schemaDescription:"RewardUuid This holds the uuid of a reward given to a player on Caleta side. Rewards holds information about which campaigns belong, player, quantity left of Free Bets.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"round",required:!1,schemaDescription:"Round Game round id. Used to relate all bets and wins in one round. All transactions related to the same round will have the same value in this field. It's unique through whole system.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"round_closed",required:!1,schemaDescription:"RoundClosed Denotes when the round is closed",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"supplier_user",required:!1,schemaDescription:"SupplierUser The name of the user in Provider's system (in case Operator needs to find user in Provder's back office or report problem with the user). If value is NULL, the Operator can search for their own user_id.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"token",required:!1,schemaDescription:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"transaction_uuid",required:!1,schemaDescription:"TransactionUuid Unique wallet transaction.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}})))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}})))))))))))}D.isMDXComponent=!0}}]);