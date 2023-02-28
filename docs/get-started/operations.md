---
title: Operations
sidebar_position: 3
---

# Operating

This section provides information for operating Valkyrie in a production environment.

## Running

Valkyrie support several ways of running the application:

* Kubernetes: use the provided [Helm chart](helm).
* Docker: use the official [Docker image](docker).
* Other: use one of the prebuilt binary releases on [GitHub](https://github.com/valkyrie-fnd/valkyrie/releases)

### systemd

Valkyrie binary releases for Linux also includes systemd script `svc.sh` for installing the application
as a systemd service. For a list of available commands run `./svc.sh`.

## Network

Valkyrie will accept HTTP traffic on two ports, typically these ports are mapped to `8083` and `8084`, but they can
also be configured.

Outgoing traffic from Valkyrie is also HTTP-based and varies depending on which providers are used.

SSL termination and load balancing concerns should be implemented outside the application through standard
infrastructure components.

Valkyrie provides an HTTP endpoint `GET /ping`, which can be used for load balancer monitoring etc.

## Scaling

Valkyrie is built as a stateless component and is scalable both horizontally by running many instances of the
application, and vertically by being able to efficiently utilize the cores available on the host system.

## Security

Valkyrie supports API key authorization on both operator and provider ports (depending on the provider implementation).

To further control network access to and from Valkyrie, IP-restrictions and private networking may also
be used.