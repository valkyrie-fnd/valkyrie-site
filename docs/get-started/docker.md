---
sidebar_position: 1
title: Docker
---
Valkyrie image is built using:

```shell
docker build -t valkyrie .
```

You can then run a Valkyrie container using:

```shell
docker run -v /absolute/path/config.yml:/app/config.yml valkyrie -config config.yml
```