---
id: intro
description: An open source game aggregator written in Go
sidebar_position: 1
slug: /
---

# Intro

## Valkyrie Game Aggregator
Valkyrie software is distributed freely on [GitHub](https://github.com/valkyrie-fnd/valkyrie). 

The software can be downloaded as either a Go binary, container image or you can clone the repo and build yourself.

Operational and configuration instructions - plus other things to think of - are found in the subsections of this page.

For integration testing and kick start purposes, there is an additional project, [valkyrie-stubs](https://github.com/valkyrie-fnd/valkyrie-stubs), available. 
Valkyrie-stubs contains a mock test bench simulating a boiler plate casino wallet [generic pam](/docs/wallet/valkyrie-pam/valkyrie-pam-api). 
The valkyrie-stubs wallet publishes services according to Valkyrie OAPI3 PAM client specification, 
some basic business logic and an in-memory, [simple datastore](https://github.com/valkyrie-fnd/valkyrie-stubs/tree/main/memorydatastore). 
Test benches simulating providers are available in the [Valkyrie project itself](https://github.com/valkyrie-fnd/valkyrie/tree/main/provider) 
in a test folder under each available provider. 
In other words, Valkyrie project, together with valkyrie-stubs, 
constitute an environment enabling integration tests of the Valkyrie software in any isolated environment.