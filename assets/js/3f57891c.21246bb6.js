"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7478],{1951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>T,frontMatter:()=>S,metadata:()=>E,toc:()=>u});var r=a(87462),s=(a(67294),a(3905)),R=a(26389),n=a(94891),i=a(75190),o=a(47507),d=a(24310),c=a(63303),l=(a(75035),a(85162));const S={id:"caleta-balance",title:"Balance",description:"Wallet balance",sidebar_label:"Balance",hide_title:!0,hide_table_of_contents:!0,api:{description:"Wallet balance",operationId:"CaletaBalance",parameters:[{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{game_code:{description:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",type:"string"},game_id:{description:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",type:"integer"},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},supplier_user:{description:"SupplierUser The name of the user in Provider's system (in case Operator needs to find user in Provder's back office or report problem with the user). If value is NULL, the Operator can search for their own user_id.",type:"string"},token:{description:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",type:"string"}},type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{balance:{description:"Balance We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",type:"integer"},currency:{allOf:[{enum:["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","mBTC","MDL","mETH","MGA","MKD","mLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","uBTC","uETH","UGX","uLTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"],type:"string","x-enum-varnames":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","MBTC","MDL","METH","MGA","MKD","MLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UBTC","UETH","UGX","ULTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"]}],description:"Currency ISO 4217 currency code. Following enum contains all currencies supported by our system. Existing of currency in this list doesn't mean that all providers support native game play with it. Please contact us to know which provider supports which currencies."},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},status:{allOf:[{enum:["RS_ERROR_BET_LIMIT_EXCEEDED","RS_ERROR_DUPLICATE_TRANSACTION","RS_ERROR_INVALID_GAME","RS_ERROR_INVALID_SIGNATURE","RS_ERROR_INVALID_TOKEN","RS_ERROR_NOT_ENOUGH_MONEY","RS_ERROR_TIMEOUT","RS_ERROR_TOKEN_EXPIRED","RS_ERROR_TRANSACTION_DOES_NOT_EXIST","RS_ERROR_TRANSACTION_ROLLED_BACK","RS_ERROR_UNKNOWN","RS_ERROR_USER_DISABLED","RS_ERROR_WRONG_CURRENCY","RS_ERROR_WRONG_SYNTAX","RS_ERROR_WRONG_TYPES","RS_OK"],type:"string","x-enum-varnames":["RSERRORBETLIMITEXCEEDED","RSERRORDUPLICATETRANSACTION","RSERRORINVALIDGAME","RSERRORINVALIDSIGNATURE","RSERRORINVALIDTOKEN","RSERRORNOTENOUGHMONEY","RSERRORTIMEOUT","RSERRORTOKENEXPIRED","RSERRORTRANSACTIONDOESNOTEXIST","RSERRORTRANSACTIONROLLEDBACK","RSERRORUNKNOWN","RSERRORUSERDISABLED","RSERRORWRONGCURRENCY","RSERRORWRONGSYNTAX","RSERRORWRONGTYPES","RSOK"]}],description:"Status Response status usage:<br/>RS_OK - when transaction was processed correctly or was already processed before.<br/>RS_ERROR_UNKNOWN - use this when you need a generic error code<br/>RS_ERROR_TIMEOUT - when the server was disconnected by timeout<br/>RS_ERROR_INVALID_TOKEN - when token never existed or is not associated to this player.<br/>RS_ERROR_INVALID_GAME - when the game doesn't exist<br/>RS_ERROR_WRONG_CURRENCY - when the currency is not active or does not exist<br/>RS_ERROR_NOT_ENOUGH_MONEY - when user is short of money<br/>RS_ERROR_USER_DISABLED when user is banned or inactive<br/>RS_ERROR_INVALID_SIGNATURE - when signature doesn't match<br/>RS_ERROR_TOKEN_EXPIRED - when a new token exists (this rule applies only for /wallet/bet)<br/>RS_ERROR_WRONG_SYNTAX - message can't be decoded to JSON<br/>RS_ERROR_WRONG_TYPES - i.e. when a type should be integer and came as string<br/>RS_ERROR_DUPLICATE_TRANSACTION - when the same transaction_uuid appears but for a different user, round and game, otherwise returns RS_OK<br/>RS_ERROR_TRANSACTION_DOES_NOT_EXIST - when doing a 'win' transaction and the 'bet' transaction id doesn't exist<br/>RS_ERROR_TRANSACTION_ROLLED_BACK - when a 'win' transaction happens in name of a rolled back transaction (when receiving a 'rollback' replies with 'RS_OK'<br/>RS_ERROR_BET_LIMIT_EXCEEDED - when the user exceeded its limits"},user:{description:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",type:"string"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{balance:{description:"Balance We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",type:"integer"},currency:{allOf:[{enum:["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","mBTC","MDL","mETH","MGA","MKD","mLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","uBTC","uETH","UGX","uLTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"],type:"string","x-enum-varnames":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","MBTC","MDL","METH","MGA","MKD","MLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UBTC","UETH","UGX","ULTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"]}],description:"Currency ISO 4217 currency code. Following enum contains all currencies supported by our system. Existing of currency in this list doesn't mean that all providers support native game play with it. Please contact us to know which provider supports which currencies."},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},status:{allOf:[{enum:["RS_ERROR_BET_LIMIT_EXCEEDED","RS_ERROR_DUPLICATE_TRANSACTION","RS_ERROR_INVALID_GAME","RS_ERROR_INVALID_SIGNATURE","RS_ERROR_INVALID_TOKEN","RS_ERROR_NOT_ENOUGH_MONEY","RS_ERROR_TIMEOUT","RS_ERROR_TOKEN_EXPIRED","RS_ERROR_TRANSACTION_DOES_NOT_EXIST","RS_ERROR_TRANSACTION_ROLLED_BACK","RS_ERROR_UNKNOWN","RS_ERROR_USER_DISABLED","RS_ERROR_WRONG_CURRENCY","RS_ERROR_WRONG_SYNTAX","RS_ERROR_WRONG_TYPES","RS_OK"],type:"string","x-enum-varnames":["RSERRORBETLIMITEXCEEDED","RSERRORDUPLICATETRANSACTION","RSERRORINVALIDGAME","RSERRORINVALIDSIGNATURE","RSERRORINVALIDTOKEN","RSERRORNOTENOUGHMONEY","RSERRORTIMEOUT","RSERRORTOKENEXPIRED","RSERRORTRANSACTIONDOESNOTEXIST","RSERRORTRANSACTIONROLLEDBACK","RSERRORUNKNOWN","RSERRORUSERDISABLED","RSERRORWRONGCURRENCY","RSERRORWRONGSYNTAX","RSERRORWRONGTYPES","RSOK"]}],description:"Status Response status usage:<br/>RS_OK - when transaction was processed correctly or was already processed before.<br/>RS_ERROR_UNKNOWN - use this when you need a generic error code<br/>RS_ERROR_TIMEOUT - when the server was disconnected by timeout<br/>RS_ERROR_INVALID_TOKEN - when token never existed or is not associated to this player.<br/>RS_ERROR_INVALID_GAME - when the game doesn't exist<br/>RS_ERROR_WRONG_CURRENCY - when the currency is not active or does not exist<br/>RS_ERROR_NOT_ENOUGH_MONEY - when user is short of money<br/>RS_ERROR_USER_DISABLED when user is banned or inactive<br/>RS_ERROR_INVALID_SIGNATURE - when signature doesn't match<br/>RS_ERROR_TOKEN_EXPIRED - when a new token exists (this rule applies only for /wallet/bet)<br/>RS_ERROR_WRONG_SYNTAX - message can't be decoded to JSON<br/>RS_ERROR_WRONG_TYPES - i.e. when a type should be integer and came as string<br/>RS_ERROR_DUPLICATE_TRANSACTION - when the same transaction_uuid appears but for a different user, round and game, otherwise returns RS_OK<br/>RS_ERROR_TRANSACTION_DOES_NOT_EXIST - when doing a 'win' transaction and the 'bet' transaction id doesn't exist<br/>RS_ERROR_TRANSACTION_ROLLED_BACK - when a 'win' transaction happens in name of a rolled back transaction (when receiving a 'rollback' replies with 'RS_OK'<br/>RS_ERROR_BET_LIMIT_EXCEEDED - when the user exceeded its limits"},user:{description:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",type:"string"}},type:"object"}}}}},tags:["Caleta"],method:"post",path:"/providers/caleta/wallet/balance",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{game_code:"string",game_id:0,request_uuid:"string",supplier_user:"string",token:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"Balance",description:{content:"Wallet balance",type:"text/plain"},url:{path:["providers","caleta","wallet","balance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Signature for request",type:"text/plain"},key:"X-Auth-Signature",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},p=void 0,E={unversionedId:"providerApis/caleta-balance",id:"providerApis/caleta-balance",title:"Balance",description:"Wallet balance",source:"@site/docs/providerApis/caleta-balance.api.mdx",sourceDirName:"providerApis",slug:"/providerApis/caleta-balance",permalink:"/docs/providerApis/caleta-balance",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedBy:"Gustav Stensson",lastUpdatedAt:1671700173,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{id:"caleta-balance",title:"Balance",description:"Wallet balance",sidebar_label:"Balance",hide_title:!0,hide_table_of_contents:!0,api:{description:"Wallet balance",operationId:"CaletaBalance",parameters:[{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{properties:{game_code:{description:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",type:"string"},game_id:{description:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",type:"integer"},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},supplier_user:{description:"SupplierUser The name of the user in Provider's system (in case Operator needs to find user in Provder's back office or report problem with the user). If value is NULL, the Operator can search for their own user_id.",type:"string"},token:{description:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",type:"string"}},type:"object"}}},description:"Request body",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{properties:{balance:{description:"Balance We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",type:"integer"},currency:{allOf:[{enum:["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","mBTC","MDL","mETH","MGA","MKD","mLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","uBTC","uETH","UGX","uLTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"],type:"string","x-enum-varnames":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","MBTC","MDL","METH","MGA","MKD","MLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UBTC","UETH","UGX","ULTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"]}],description:"Currency ISO 4217 currency code. Following enum contains all currencies supported by our system. Existing of currency in this list doesn't mean that all providers support native game play with it. Please contact us to know which provider supports which currencies."},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},status:{allOf:[{enum:["RS_ERROR_BET_LIMIT_EXCEEDED","RS_ERROR_DUPLICATE_TRANSACTION","RS_ERROR_INVALID_GAME","RS_ERROR_INVALID_SIGNATURE","RS_ERROR_INVALID_TOKEN","RS_ERROR_NOT_ENOUGH_MONEY","RS_ERROR_TIMEOUT","RS_ERROR_TOKEN_EXPIRED","RS_ERROR_TRANSACTION_DOES_NOT_EXIST","RS_ERROR_TRANSACTION_ROLLED_BACK","RS_ERROR_UNKNOWN","RS_ERROR_USER_DISABLED","RS_ERROR_WRONG_CURRENCY","RS_ERROR_WRONG_SYNTAX","RS_ERROR_WRONG_TYPES","RS_OK"],type:"string","x-enum-varnames":["RSERRORBETLIMITEXCEEDED","RSERRORDUPLICATETRANSACTION","RSERRORINVALIDGAME","RSERRORINVALIDSIGNATURE","RSERRORINVALIDTOKEN","RSERRORNOTENOUGHMONEY","RSERRORTIMEOUT","RSERRORTOKENEXPIRED","RSERRORTRANSACTIONDOESNOTEXIST","RSERRORTRANSACTIONROLLEDBACK","RSERRORUNKNOWN","RSERRORUSERDISABLED","RSERRORWRONGCURRENCY","RSERRORWRONGSYNTAX","RSERRORWRONGTYPES","RSOK"]}],description:"Status Response status usage:<br/>RS_OK - when transaction was processed correctly or was already processed before.<br/>RS_ERROR_UNKNOWN - use this when you need a generic error code<br/>RS_ERROR_TIMEOUT - when the server was disconnected by timeout<br/>RS_ERROR_INVALID_TOKEN - when token never existed or is not associated to this player.<br/>RS_ERROR_INVALID_GAME - when the game doesn't exist<br/>RS_ERROR_WRONG_CURRENCY - when the currency is not active or does not exist<br/>RS_ERROR_NOT_ENOUGH_MONEY - when user is short of money<br/>RS_ERROR_USER_DISABLED when user is banned or inactive<br/>RS_ERROR_INVALID_SIGNATURE - when signature doesn't match<br/>RS_ERROR_TOKEN_EXPIRED - when a new token exists (this rule applies only for /wallet/bet)<br/>RS_ERROR_WRONG_SYNTAX - message can't be decoded to JSON<br/>RS_ERROR_WRONG_TYPES - i.e. when a type should be integer and came as string<br/>RS_ERROR_DUPLICATE_TRANSACTION - when the same transaction_uuid appears but for a different user, round and game, otherwise returns RS_OK<br/>RS_ERROR_TRANSACTION_DOES_NOT_EXIST - when doing a 'win' transaction and the 'bet' transaction id doesn't exist<br/>RS_ERROR_TRANSACTION_ROLLED_BACK - when a 'win' transaction happens in name of a rolled back transaction (when receiving a 'rollback' replies with 'RS_OK'<br/>RS_ERROR_BET_LIMIT_EXCEEDED - when the user exceeded its limits"},user:{description:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",type:"string"}},type:"object"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{properties:{balance:{description:"Balance We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",type:"integer"},currency:{allOf:[{enum:["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","mBTC","MDL","mETH","MGA","MKD","mLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","uBTC","uETH","UGX","uLTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"],type:"string","x-enum-varnames":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CHF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LYD","MAD","MBTC","MDL","METH","MGA","MKD","MLTC","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SLL","SOC","SOS","SRD","SSP","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UBTC","UETH","UGX","ULTC","USD","UYU","UZS","VEF","VND","VUV","WST","XCD","XOF","XPF","XXX","YER","ZAR","ZMW","ZWD"]}],description:"Currency ISO 4217 currency code. Following enum contains all currencies supported by our system. Existing of currency in this list doesn't mean that all providers support native game play with it. Please contact us to know which provider supports which currencies."},request_uuid:{description:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",type:"string"},status:{allOf:[{enum:["RS_ERROR_BET_LIMIT_EXCEEDED","RS_ERROR_DUPLICATE_TRANSACTION","RS_ERROR_INVALID_GAME","RS_ERROR_INVALID_SIGNATURE","RS_ERROR_INVALID_TOKEN","RS_ERROR_NOT_ENOUGH_MONEY","RS_ERROR_TIMEOUT","RS_ERROR_TOKEN_EXPIRED","RS_ERROR_TRANSACTION_DOES_NOT_EXIST","RS_ERROR_TRANSACTION_ROLLED_BACK","RS_ERROR_UNKNOWN","RS_ERROR_USER_DISABLED","RS_ERROR_WRONG_CURRENCY","RS_ERROR_WRONG_SYNTAX","RS_ERROR_WRONG_TYPES","RS_OK"],type:"string","x-enum-varnames":["RSERRORBETLIMITEXCEEDED","RSERRORDUPLICATETRANSACTION","RSERRORINVALIDGAME","RSERRORINVALIDSIGNATURE","RSERRORINVALIDTOKEN","RSERRORNOTENOUGHMONEY","RSERRORTIMEOUT","RSERRORTOKENEXPIRED","RSERRORTRANSACTIONDOESNOTEXIST","RSERRORTRANSACTIONROLLEDBACK","RSERRORUNKNOWN","RSERRORUSERDISABLED","RSERRORWRONGCURRENCY","RSERRORWRONGSYNTAX","RSERRORWRONGTYPES","RSOK"]}],description:"Status Response status usage:<br/>RS_OK - when transaction was processed correctly or was already processed before.<br/>RS_ERROR_UNKNOWN - use this when you need a generic error code<br/>RS_ERROR_TIMEOUT - when the server was disconnected by timeout<br/>RS_ERROR_INVALID_TOKEN - when token never existed or is not associated to this player.<br/>RS_ERROR_INVALID_GAME - when the game doesn't exist<br/>RS_ERROR_WRONG_CURRENCY - when the currency is not active or does not exist<br/>RS_ERROR_NOT_ENOUGH_MONEY - when user is short of money<br/>RS_ERROR_USER_DISABLED when user is banned or inactive<br/>RS_ERROR_INVALID_SIGNATURE - when signature doesn't match<br/>RS_ERROR_TOKEN_EXPIRED - when a new token exists (this rule applies only for /wallet/bet)<br/>RS_ERROR_WRONG_SYNTAX - message can't be decoded to JSON<br/>RS_ERROR_WRONG_TYPES - i.e. when a type should be integer and came as string<br/>RS_ERROR_DUPLICATE_TRANSACTION - when the same transaction_uuid appears but for a different user, round and game, otherwise returns RS_OK<br/>RS_ERROR_TRANSACTION_DOES_NOT_EXIST - when doing a 'win' transaction and the 'bet' transaction id doesn't exist<br/>RS_ERROR_TRANSACTION_ROLLED_BACK - when a 'win' transaction happens in name of a rolled back transaction (when receiving a 'rollback' replies with 'RS_OK'<br/>RS_ERROR_BET_LIMIT_EXCEEDED - when the user exceeded its limits"},user:{description:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",type:"string"}},type:"object"}}}}},tags:["Caleta"],method:"post",path:"/providers/caleta/wallet/balance",servers:[{url:"http://localhost:8083"}],jsonRequestBodyExample:{game_code:"string",game_id:0,request_uuid:"string",supplier_user:"string",token:"string"},info:{contact:{},description:"The exposed endpoints by the enabled game provider modules.",title:"Valkyrie Provider API",version:"-"},postman:{name:"Balance",description:{content:"Wallet balance",type:"text/plain"},url:{path:["providers","caleta","wallet","balance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Signature for request",type:"text/plain"},key:"X-Auth-Signature",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/providerApis/valkyrie-provider-api",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/providerApis/valkyrie-provider-api"},next:{title:"Bet",permalink:"/docs/providerApis/caleta-bet"}},O={},u=[{value:"Balance",id:"balance",level:2}],D={toc:u};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"balance"},"Balance"),(0,s.kt)("p",null,"Wallet balance"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{description:"Signature for request",in:"header",name:"X-Auth-Signature",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"Request body"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"game_code",required:!1,deprecated:void 0,schemaDescription:"GameCode Unique Game Code on Caleta system. Can be obtained from `/api/game/list` endpoint. This variable intends to replace `game_id`.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"game_id",required:!1,deprecated:void 0,schemaDescription:"GameId Deprecated: Use `game_code` instead.<br/>Unique game ID Caleta system. Can be obtained from `/api/game/list` endpoint.<br/>Note: this value may change from each server (staging, production)",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"request_uuid",required:!1,deprecated:void 0,schemaDescription:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"supplier_user",required:!1,deprecated:void 0,schemaDescription:"SupplierUser The name of the user in Provider's system (in case Operator needs to find user in Provder's back office or report problem with the user). If value is NULL, the Operator can search for their own user_id.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"token",required:!1,deprecated:void 0,schemaDescription:"Token Operator's back end generates a token associated with the User, game, his or her current currency and maybe other parameters depending on the Operator's preferences. The token acts as an ID parameter for the game session. It is important that the currency is not changed during the current game session. If the User changes the currency or display unit, the Operator's backend needs to generate a new token and re-open the game with new token. In case of DEMO gameplay, this parameter may be omitted.<br/>A token should be valid for all bet transactions until a new one is generated, expired tokens should continue be valid for Win/Rollback transactions if is related to a previous existing bet.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(R.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:"Balance We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"currency",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"request_uuid",required:!1,deprecated:void 0,schemaDescription:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"user",required:!1,deprecated:void 0,schemaDescription:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "balance": 0,\n  "currency": "AED",\n  "request_uuid": "string",\n  "status": "RS_ERROR_BET_LIMIT_EXCEEDED",\n  "user": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:"Balance We use integers to represent the amount of money. To convert real float value to integer we multiply it by 100000. Example: $3.56 must be represented as 356000",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"currency",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"request_uuid",required:!1,deprecated:void 0,schemaDescription:"RequestUuid Standard 16-byte UUID. This id can be seen as network layer action. An id of an action that is generated for each our call to Operator. Used to sync Hub88 and Operator sides for debugging purposes. Operator has to respond with the same request_uuid as the one that was received in request.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"user",required:!1,deprecated:void 0,schemaDescription:"User Unique User ID in the Operator\ufffds system. In case of DEMO gameplay, this parameter may be omitted.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "balance": 0,\n  "currency": "AED",\n  "request_uuid": "string",\n  "status": "RS_ERROR_BET_LIMIT_EXCEEDED",\n  "user": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);