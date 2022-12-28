---
sidebar_position: 1
title: Docker
---
### Build image yourself
Valkyrie image is built using:

```shell
docker build -t valkyrie .
```

You can then run a valkyrie container using:

```shell
docker run -v /absolute/path/config.yml:/app/config.yml valkyrie -config config.yml
```

### From docker hub

```shell
docker pull valkyriefnd/valkyrie
docker run -v /absolute/path/config.yml:/app/config.yml valkyriefnd/valkyrie -config config.yml
```