---
title: Introduction
sidebar_position: 0
---

# Get Started

## Installing

Valkyrie is easily built from source by running:

```shell
go mod download
go build
```
:::note
Requires go 1.19 or later
:::
You can then simply run Valkyrie using:

```shell
./valkyrie -config path/to/config.yml
```
This will open two ports: `:8083` and `:8084`. On port 8084 you will have a game launch endpoint.

Port 8083 is open for the provider to communicate with Valkyrie, and Valkyrie will normalize the request to your specified PAM module.

The ports can be configured in the config. Read [configuration](configuration) to see what the configs needs to contain.