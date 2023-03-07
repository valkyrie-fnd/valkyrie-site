---
title: Release 0.7.0 with improved telemetry support
description: A few comments on the 0.7.0 release
date: 2023-03-07T15:30
authors:
  - name: Carl
---

New [Valkyrie 0.7.0](https://github.com/valkyrie-fnd/valkyrie/releases/tag/v0.7.0) release available!

This release contains improved support for telemetry, adding support for custom metric collection, as well as built-in
instrumentation of HTTP and golang runtime metrics. For more information about metrics please refer to the
[Telemetry](https://valkyrie.bet/docs/get-started/telemetry#metrics) section in the documentation.

The exporting of telemetry data has also been updated to support 
[OpenTelemetry Protocol (OTLP)](https://opentelemetry.io/docs/reference/specification/protocol/). This allows for Valkyrie
to export all telemetry data to an [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/). The Collector
then allows for exporting and distribution tracing data to all major observability platforms (including major cloud providers).

For a full list of changes please read the [release notes](https://github.com/valkyrie-fnd/valkyrie/releases/tag/v0.7.0).