"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"link","label":"Intro","href":"/docs/","docId":"intro"},{"type":"link","label":"Prerequisites","href":"/docs/prerequisites/","docId":"prerequisites/prerequisites"},{"type":"category","label":"Get Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/get-started/introduction","docId":"get-started/introduction"},{"type":"link","label":"Configuration","href":"/docs/get-started/configuration","docId":"get-started/configuration"},{"type":"link","label":"Logging and tracing","href":"/docs/get-started/logging-and-tracing","docId":"get-started/logging-and-tracing"},{"type":"link","label":"Docker","href":"/docs/get-started/docker","docId":"get-started/docker"},{"type":"link","label":"Helm","href":"/docs/get-started/helm","docId":"get-started/helm"},{"type":"link","label":"Player Account Management","href":"/docs/get-started/pam","docId":"get-started/pam"}]},{"type":"category","label":"wallet","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"valkyrie-pam","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/wallet/valkyrie-pam/valkyrie-pam-api","docId":"wallet/valkyrie-pam/valkyrie-pam-api"},{"type":"link","label":"Create transaction for one player ","href":"/docs/wallet/valkyrie-pam/add-transaction","className":"post api-method","docId":"wallet/valkyrie-pam/add-transaction"},{"type":"link","label":"Get player account balance","href":"/docs/wallet/valkyrie-pam/get-balance","className":"get api-method","docId":"wallet/valkyrie-pam/get-balance"},{"type":"link","label":"Get game rounds","href":"/docs/wallet/valkyrie-pam/get-game-round","className":"get api-method","docId":"wallet/valkyrie-pam/get-game-round"},{"type":"link","label":"Get session details","href":"/docs/wallet/valkyrie-pam/get-session","className":"get api-method","docId":"wallet/valkyrie-pam/get-session"},{"type":"link","label":"Get transactions","href":"/docs/wallet/valkyrie-pam/get-transactions","className":"get api-method","docId":"wallet/valkyrie-pam/get-transactions"},{"type":"link","label":"Refresh player session","href":"/docs/wallet/valkyrie-pam/refresh-session","className":"put api-method","docId":"wallet/valkyrie-pam/refresh-session"}]},{"type":"category","label":"vplugin","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/wallet/vplugin/vplugin-introduction","docId":"wallet/vplugin/vplugin-introduction"},{"type":"link","label":"Usage","href":"/docs/wallet/vplugin/vplugin-setup","docId":"wallet/vplugin/vplugin-setup"},{"type":"link","label":"VPlugin interface","href":"/docs/wallet/vplugin/vplugin-interface","docId":"wallet/vplugin/vplugin-interface"}]}]},{"type":"category","label":"Operator API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/operator/valkyrie-operator-api","docId":"operator/valkyrie-operator-api"},{"type":"link","label":"Launch game","href":"/docs/operator/game-launch","className":"post api-method","docId":"operator/game-launch"},{"type":"link","label":"Render game round","href":"/docs/operator/game-round-render","className":"get api-method","docId":"operator/game-round-render"}]},{"type":"category","label":"providers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Caleta","href":"/docs/providers/caleta/","docId":"providers/caleta/caleta-index"},{"type":"link","label":"Evolution","href":"/docs/providers/evolution/","docId":"providers/evolution/evolution-index"},{"type":"link","label":"Red Tiger","href":"/docs/providers/redtiger/","docId":"providers/redtiger/redtiger-index"}]}]},"docs":{"get-started/configuration":{"id":"get-started/configuration","title":"Configuration","description":"Configuration specification when launching Valkyrie","sidebar":"sidebar"},"get-started/docker":{"id":"get-started/docker","title":"Docker","description":"Build image yourself","sidebar":"sidebar"},"get-started/helm":{"id":"get-started/helm","title":"Helm","description":"Helm chart for Valkyrie","sidebar":"sidebar"},"get-started/introduction":{"id":"get-started/introduction","title":"Get Started Introduction","description":"Installing","sidebar":"sidebar"},"get-started/logging-and-tracing":{"id":"get-started/logging-and-tracing","title":"Logging and tracing","description":"Logging","sidebar":"sidebar"},"get-started/pam":{"id":"get-started/pam","title":"Player Account Management","description":"A PAM is the system the operator uses to keep track of the players\' accounts and balances. Also referred to as wallet.","sidebar":"sidebar"},"intro":{"id":"intro","title":"Intro","description":"An open source game aggregator written in Go","sidebar":"sidebar"},"operator/game-launch":{"id":"operator/game-launch","title":"Launch game","description":"Launch a provider game through valkyrie","sidebar":"sidebar"},"operator/game-round-render":{"id":"operator/game-round-render","title":"Render game round","description":"Optional. Returns a rendered representation of the specified game round.","sidebar":"sidebar"},"operator/valkyrie-operator-api":{"id":"operator/valkyrie-operator-api","title":"Valkyrie Operator API","description":"Valkyrie endpoints for communicating with a provider. Exposed valkyrie endpoints can differ between configured provider modules. Make sure the ones you want to use are implemented.","sidebar":"sidebar"},"prerequisites/prerequisites":{"id":"prerequisites/prerequisites","title":"Prerequisites","description":"Before it\'s time to start you need an agreement with each specific provider","sidebar":"sidebar"},"providers/caleta/caleta-index":{"id":"providers/caleta/caleta-index","title":"Caleta","description":"Caleta Gaming System is a complete RGS + RNG system that has been designed to offer Game Providers and Operators an easy and quick solution for any kind of Game Platform: Slots, Bingo, Kenos, Video Poker, etc.","sidebar":"sidebar"},"providers/evolution/evolution-index":{"id":"providers/evolution/evolution-index","title":"Evolution","description":"Evolution offers leading live games such as casino, cards & craps.","sidebar":"sidebar"},"providers/redtiger/redtiger-index":{"id":"providers/redtiger/redtiger-index","title":"Red Tiger","description":"Red Tiger offers leading games in the slot space.","sidebar":"sidebar"},"wallet/valkyrie-pam/add-transaction":{"id":"wallet/valkyrie-pam/add-transaction","title":"Create transaction for one player ","description":"Create a transaction for player with `playerId`","sidebar":"sidebar"},"wallet/valkyrie-pam/get-balance":{"id":"wallet/valkyrie-pam/get-balance","title":"Get player account balance","description":"Get account balance information for a player","sidebar":"sidebar"},"wallet/valkyrie-pam/get-game-round":{"id":"wallet/valkyrie-pam/get-game-round","title":"Get game rounds","description":"Get game round for `playerId` of the game round `providerGameRoundId`","sidebar":"sidebar"},"wallet/valkyrie-pam/get-session":{"id":"wallet/valkyrie-pam/get-session","title":"Get session details","description":"Get details for the player game session. The session details shall not change during the session lifetime.","sidebar":"sidebar"},"wallet/valkyrie-pam/get-transactions":{"id":"wallet/valkyrie-pam/get-transactions","title":"Get transactions","description":"Lookup transactions. At least one lookup parameter, `providerTransactionId` or `providerBetRef`, is required.","sidebar":"sidebar"},"wallet/valkyrie-pam/refresh-session":{"id":"wallet/valkyrie-pam/refresh-session","title":"Refresh player session","description":"Refresh the player game session, returning a new session. Useful for cases when game launch","sidebar":"sidebar"},"wallet/valkyrie-pam/valkyrie-pam-api":{"id":"wallet/valkyrie-pam/valkyrie-pam-api","title":"Valkyrie PAM API","description":"Specification describing required endpoints implemented in an operator","sidebar":"sidebar"},"wallet/vplugin/vplugin-interface":{"id":"wallet/vplugin/vplugin-interface","title":"VPlugin interface","description":"The interface that the plugin needs to implement","sidebar":"sidebar"},"wallet/vplugin/vplugin-introduction":{"id":"wallet/vplugin/vplugin-introduction","title":"VPlugin","description":"Vplugin is a PAM option where you build the PAM-integration separatly and make use of hashicorp go-plugin","sidebar":"sidebar"},"wallet/vplugin/vplugin-setup":{"id":"wallet/vplugin/vplugin-setup","title":"VPlugin Usage","description":"Specification on how to use vplugin","sidebar":"sidebar"}}}')}}]);