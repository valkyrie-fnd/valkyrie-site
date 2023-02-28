---
title: Quickstart
sidebar_label: Quickstart
sidebar_position: 0
---

# Quickstart

Installing Valkyrie is simple and the following approaches are supported:

1. Using an [official release](https://github.com/valkyrie-fnd/valkyrie/releases)
2. Using a [Docker container](docker)
3. Installing on Kubernetes using [Helm](helm)
4. Building [from source](#building-from-source)

Using an official release is the easiest, unless you know you want to use another approach.

## Building from source

Valkyrie is built using [Go](https://go.dev/) and supports most platforms and architectures. 

Clone the source repository from GitHub:

```bash
git clone https://github.com/valkyrie-fnd/valkyrie.git
cd valkyrie
```

The application can then be built by running:

```shell
go build
```
:::note
Requires go 1.19 or later
:::

## Running

You can run Valkyrie using:

```shell
./valkyrie -config path/to/config.yml
```

This will open two ports: `:8083` and `:8084`. On port 8084 you will have a game launch endpoint.

Port 8083 is open for the provider to communicate with Valkyrie, and Valkyrie will normalize the request to your specified PAM module.

The ports can be configured in the config. Read [configuration](configuration) to see what the configs needs to contain.
