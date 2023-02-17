"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5174],{94395:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/01/Release 0.6.0","metadata":{"permalink":"/updates/2023/01/Release 0.6.0","source":"@site/blog/2023/01/Release 0.6.0.md","title":"Release 0.6.0","description":"A little intro to the new release","date":"2023-02-17T15:30:00.000Z","formattedDate":"February 17, 2023","tags":[],"readingTime":0.425,"hasTruncateMarker":true,"authors":[{"name":"Klas"}],"frontMatter":{"title":"Release 0.6.0","description":"A little intro to the new release","date":"2023-02-17T15:30","authors":[{"name":"Klas"}]},"nextItem":{"title":"Release 0.5.1","permalink":"/updates/2023/01/Release 0.5.1"}},"content":"Yet another minor release is available!\\n\x3c!--truncate--\x3e\\n\\nThe 0.6.0 release contains configuration options for providers and operators. In addition two new Caleta provider endpoints supporting \\"mixed settlements\\" and game rendering.\\n\\n* Provider configs\\n* Operator configs\\n* Caleta game rendering endpoint for back office use\\n* Caleta endpoint for obtaining bets included in a game round. For mixed settlement purposes\\n* Some operational improvements\\n* Example implementation for a new provider\\n\\nCheck out the release notes [here](https://github.com/valkyrie-fnd/valkyrie/releases/tag/v0.6.0)\\n\\nStay tuned - more is around the corner!"},{"id":"/2023/01/Release 0.5.1","metadata":{"permalink":"/updates/2023/01/Release 0.5.1","source":"@site/blog/2023/01/Release 0.5.1.md","title":"Release 0.5.1","description":"A few comments on the release","date":"2023-01-20T15:30:00.000Z","formattedDate":"January 20, 2023","tags":[],"readingTime":0.335,"hasTruncateMarker":true,"authors":[{"name":"Klas"}],"frontMatter":{"title":"Release 0.5.1","description":"A few comments on the release","date":"2023-01-20T15:30","authors":[{"name":"Klas"}]},"prevItem":{"title":"Release 0.6.0","permalink":"/updates/2023/01/Release 0.6.0"},"nextItem":{"title":"...annnd there it goes!","permalink":"/updates/2022/12/valkyrie"}},"content":"New minor release is available!\\n\x3c!--truncate--\x3e\\n\\nThe 0.5.1 contains a cpl of operational improvements and minor adjustments in the Caleta provider endpoint.\\n\\n* Improved logging\\n* Swagger doc generated in dev builds only, to reduce the footprint of production binary\\n* Bet code and original bet timestamp added in the Caleta interface\\n* Some adjustments to vplugin - Valkyrie\'s custom operator adapter\\n\\nMore is on the way!"},{"id":"/2022/12/valkyrie","metadata":{"permalink":"/updates/2022/12/valkyrie","source":"@site/blog/2022/12/valkyrie.md","title":"...annnd there it goes!","description":"Valkyrie - the free, open source game aggregator is let loose!","date":"2022-12-20T15:30:00.000Z","formattedDate":"December 20, 2022","tags":[],"readingTime":0.555,"hasTruncateMarker":true,"authors":[{"name":"Klas"}],"frontMatter":{"title":"...annnd there it goes!","description":"Valkyrie - the free, open source game aggregator is let loose!","date":"2022-12-20T15:30","authors":[{"name":"Klas"}]},"prevItem":{"title":"Release 0.5.1","permalink":"/updates/2023/01/Release 0.5.1"},"nextItem":{"title":"What\'s Valkyrie about?","permalink":"/updates/2022/12/what"}},"content":"A couple of minutes ago it was finally released on GitHub and Docker Hub.\\n\x3c!--truncate--\x3e\\n\\nThe Valkyrie integration component is alive and free to use. You\'ll find it [here](https://github.com/valkyrie-fnd/valkyrie).\\n\\nThe component is written in Go and constitutes, together with the mock casino operator *valkyrie-stubs*, a kick start kit to enable quick integrations between game providers and gaming operators.\\n\\nFeel free to clone and start exploring the stuff! If you are not comfortable with messing around with Go source code, binaries are available in the repo.\\n\\nDo you prefer to launch a readily built container image, it\'s available at [Docker Hub](https://hub.docker.com/u/valkyriefnd) together with Helm stuff to ease up Kubernetes adventures.\\n\\nHave fun!"},{"id":"/2022/12/what","metadata":{"permalink":"/updates/2022/12/what","source":"@site/blog/2022/12/what.md","title":"What\'s Valkyrie about?","description":"What\'s the intention. And for whom?","date":"2022-12-18T12:00:00.000Z","formattedDate":"December 18, 2022","tags":[],"readingTime":1.645,"hasTruncateMarker":true,"authors":[{"name":"Klas"}],"frontMatter":{"title":"What\'s Valkyrie about?","description":"What\'s the intention. And for whom?","date":"2022-12-18T12:00","authors":[{"name":"Klas"}]},"prevItem":{"title":"...annnd there it goes!","permalink":"/updates/2022/12/valkyrie"},"nextItem":{"title":"Open sourcing valkyrie","permalink":"/updates/2022/12/opensource"}},"content":"Valkyrie - what\'s it all about, who would want to use it and for what?\\n\x3c!--truncate--\x3e\\n\\nAs can be somewhat decoded from this website, the Valkyrie initiative is about decoupling the iGaming market and present free alternatives for integration of game providers and gaming operators.\\n\\nAt present, two Valkyrie support components - the *valkyrie-stubs* and *valkyrie-event-adapter* - are published. The main valkyrie integrator component will follow shortly.\\nThe valkyrie-stubs component simulates a standard gaming operator wallet implementing the standard API described in this site, while the valkyrie-event-adapter component offers some game client interaction support.\\n\\n## Gaming Operator\\nIf you\'re an operator you simply integrate the Valkyrie wallet server described [here](https://valkyrie.bet/docs/wallet/valkyrie-pam-api) and get access to all game providers already integrated with Valkyrie. It\'s possible to create proprietary integrations to your wallet server as well using the vPlugin mechanism.\\n\\n## Game Provider\\nFor providers Valkyrie offers direct exposure to gaming operators for free. All you need to do to offer your products to operators connected to Valkyrie is to make sure your RGS integrates with Valkyrie [provider API](https://valkyrie.bet/docs/providerApis/valkyrie-provider-api) by implementing (or have somebody doing it) an RGS specific Valkyrie module. In addition, there are iGaming aggregators who already support Valkyrie integration, so if you prefer exposure via an aggregator, this might also be an option. New provider Valkyrie integrations will join the present ones in an open source GitHub repo.\\n\\n## Aggregator\\nAggregators, keen on easy plug\'n spin connections to operators as well as providers, may find the Valkyrie components useful too. Integrations to aggregator platforms are easily implemented using Valkyrie standardized wallet as well as customized provider APIs.\\n\\n## Help\\nIf you don\'t want to fiddle around with your present system, or you feel you\'d rather have somebody creating an integration for you rather than doing it yourself, integration assistance will shortly be offered as professional services costing you a few pennies. Once you\'re done with that, everything is free to use!\\nKeep an eye on our [About page](https://valkyrie.bet/about) section."},{"id":"/2022/12/opensource","metadata":{"permalink":"/updates/2022/12/opensource","source":"@site/blog/2022/12/opensource.md","title":"Open sourcing valkyrie","description":"Valkyrie is now open source","date":"2022-12-16T16:30:00.000Z","formattedDate":"December 16, 2022","tags":[],"readingTime":0.195,"hasTruncateMarker":true,"authors":[{"name":"Gustav"}],"frontMatter":{"title":"Open sourcing valkyrie","description":"Valkyrie is now open source","date":"2022-12-16T16:30","authors":[{"name":"Gustav"}]},"prevItem":{"title":"What\'s Valkyrie about?","permalink":"/updates/2022/12/what"}},"content":"Valkyrie is now open source and available to all.\\n\x3c!--truncate--\x3e\\n\\nA milestone reached in december 2022, having the project open sourced.\\nAlthough limited use, hopefully this step will help our visibility and getting more Valkyrie instances running in 2023."}]}')}}]);