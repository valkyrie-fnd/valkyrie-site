---
title: What's Valkyrie about?
description: What's the intention. And for whom?
authors:
  - name: Klas
---

Valkyrie - what's it all about, who would want to use it and for what?
<!--truncate-->

As can be somewhat decoded from this website, the Valkyrie initiative is about decoupling the iGaming market and present free alternatives for integration of game providers and gaming operators.

At present, two Valkyrie support components - the *valkyrie-stubs* and *valkyrie-event-adapter* - are published. The the main valkyrie integrator component will follow shortly.
The valkyrie-stubs component simulates a standard gaming operator wallet implementing the standard API described in this site, while the valkyrie-event-adapter component offers some game client interaction support.

## Gaming Operator
If you're an operator you simply integrate the Valkyrie wallet server described [here](https://valkyrie.bet/docs/wallet/valkyrie-pam-api) and get access to all game providers already integrated with Valkyrie. Optionally, if you don't want to fiddle around with your present system, there is help to get (or will be very soon at least, in our [About us](https://valkyrie.bet/about-us) section). It's even possible to handle your operator stuff in a customized vPlugin component that can be concealed from public in a private repo.

## Game Provider
For providers Valkyrie offers direct exposure to gaming operators for free. All you need to do to offer your products to operators connected to Valkyrie is to make sure your RGS connects to the Valkyrie [provider API](https://valkyrie.bet/docs/providerApis/valkyrie-provider-api) by implementing (or have somebody doing it) an RGS specific Valkyrie module. In addition, there are iGaming aggregators who already support Valkyrie integration, so if you prefer exposure via an aggregator, this might also be an option. Again, there is - or will be very shortly - help to get if you need a hand plugging into Valkyrie. New provider Valkyrie integrations will join the present ones in an open source GitHub repo,

## Aggregator
Aggregators, keen on easy plug'n spin connections to operators as well as providers, may find the Valkyrie components useful too. Integrations to aggregator platforms are easily implemented using Valkyrie standardized wallet as well as customized provider APIs.

Any Valkyrie integration assistance will shortly be offered as professional services costing you a few pennies. Once you're done with that, everything is free to use!