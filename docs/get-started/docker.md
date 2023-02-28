---
sidebar_position: 4
title: Docker
---
### Build image yourself

Valkyrie image is built using:

```shell
docker build -t valkyrie .
```

You can then run a Valkyrie container using:

```shell
docker run -v /absolute/path/config.yml:/app/config.yml valkyrie -config config.yml
```

### From Docker Hub

You can also pull the official image of Valkyrie directly from Docker Hub:

```shell
docker run -v /absolute/path/config.yml:/app/config.yml valkyriefnd/valkyrie -config config.yml
```