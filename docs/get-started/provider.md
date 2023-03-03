---
title: Provider implementation
description: Guideline on how to add a new provider to Valkyrie 
sidebar_position: 5
---

## Basics
A Valkyrie provider module exposes the provider specific wallet api server in one end and implements a PAM client, communicating with the operator's wallet, in the other.

In addition, endpoints used for operator->provider communication might be needed if the operator requires server to server game launch, game rendering functionality or similar.

Valkyre is preferably installed in the operator's environment, but it is possible to run it from virtually anywhere.

### Provider
Wallet server API for a provider is based on the provider's wallet API specification, i.e. the interface a provider normally requests being implemented on the operator side. Hence the provider sees Valkyrie as the operator.

Wallet specification normally states expected endpoints, message formats and response/error logic. In addition authentication methods are usually stated as well.

In case the operator (or provider, for that sake) requires server to server game launch capabilities and / or game rendering functionality, these endpoints have to be implemented as well, then with its own port. These server endpoints routes the appropriate requests from operator to provider and produces the necessary mappings.

### Operator
The standardized Valkyrie PAM client API presents an easy way for operators (or even game aggregators for that sake) to integrate with Valkyrie. This integration has to be implemented only once whereafter multiple providers may be integrated without changes at the operator.

## Boiler plate
To implement a provider module from scratch, an example on how to do it is available in the [Valkyrie source code](https://github.com/valkyrie-fnd/valkyrie) under /example/example-game-provider.