---
title: What's Valkyrie about?
description: What's the intention. And for whom?
date: 2022-12-18T12:00
authors:
  - name: Klas
---

Valkyrie - what's it all about, who would want to use it and for what?
<!--truncate-->

As can be somewhat decoded from this website, the Valkyrie initiative is about decoupling the iGaming market and present free alternatives for integration of game providers and gaming operators.

At present, two Valkyrie support components - the *valkyrie-stubs* and *valkyrie-event-adapter* - are published. The main valkyrie integrator component will follow shortly.
The valkyrie-stubs component simulates a standard gaming operator wallet implementing the standard API described in this site, while the valkyrie-event-adapter component offers some game client interaction support.

## Gaming Operator
If you're an operator you simply integrate the Valkyrie wallet server described [here](https://valkyrie.bet/docs/wallet/valkyrie-pam/valkyrie-pam-api) and get access to all game providers already integrated with Valkyrie. It's possible to create proprietary integrations to your wallet server as well using the vPlugin mechanism.

## Game Provider
For providers Valkyrie offers direct exposure to gaming operators for free. All you need to do to offer your products to operators connected to Valkyrie is to make sure your RGS integrates with Valkyrie [provider API](https://valkyrie.bet/docs/) by implementing (or have somebody doing it) an RGS specific Valkyrie module. In addition, there are iGaming aggregators who already support Valkyrie integration, so if you prefer exposure via an aggregator, this might also be an option. New provider Valkyrie integrations will join the present ones in an open source GitHub repo.

## Aggregator
Aggregators, keen on easy plug'n spin connections to operators as well as providers, may find the Valkyrie components useful too. Integrations to aggregator platforms are easily implemented using Valkyrie standardized wallet as well as customized provider APIs.

## Help
If you don't want to fiddle around with your present system, or you feel you'd rather have somebody creating an integration for you rather than doing it yourself, integration assistance will shortly be offered as professional services costing you a few pennies. Once you're done with that, everything is free to use!
Keep an eye on our [About page](https://valkyrie.bet/about) section.
