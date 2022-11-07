---
sidebar_position: 3
---

# Get Started

## Installing

Valkyrie is easily built from source by running:

```shell
go mod download
go build
```

You can then simply run Valkyrie using:

```shell
./valkyrie -config path/to/config.yml
```
This will open two ports: `:8083` and `:8084`. On port 8084 you will have a game launch endpoint.

Port 8083 is open for the provider to communicate with valkyrie, and valkyrie will normalize the request to your specified PAM module.

## Configuration

Please note that the configured PAM client will have a configured number of decimals for amounts, and
if rounding is required the transactions will be rejected
