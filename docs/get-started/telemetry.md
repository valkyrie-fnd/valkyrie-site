---
title: Telemetry
sidebar_position: 2
---

# Telemetry

Valkyrie uses [OpenTelemetry](https://opentelemetry.io/docs/concepts/what-is-opentelemetry/) for its telemetry 
needs, which allows for easy integration with most standard observability backends.

## Logging

Valkyrie has extensive support for logging and integrates well with standard log aggregation systems.

Features:
- Structured logging in JSON format
- HTTP request/response logging for `debug` level
- Trace information (`traceparent`) attached to log entries if available
- Asynchronous log writer for low latency footprint
- Rotation and compression of log files

Logging is configured in Valkyrie's standard config file and supports the following options:

```yaml
logging:
  level: debug # trace, debug, info, warn, error, fatal, panic (info being default)
  async: # Optional async configuration (enabled by default, with default values)
    enabled: true
    buffer_size: 500000 # Log buffer will be emptied when full to avoid blocking producers
    poll_interval: 5ms # Time duration between the log writer polling for new events
  output:
    type: stdout # Supported types: stdout, stderr, file
    # for type=file, the following config is available:
    # filename: /var/log/valkyrie.log # is the file to write logs to
    # max_size: 100                   # the maximum size in megabytes of the log file before it gets rotated
    # max_age: 28                     # the maximum number of days to retain old log files based on the
    #                                 # timestamp encoded in their filename
    # max_backups: 3                  # the maximum number of old log files to retain
    # compress: false                 # determines if the rotated log files should be compressed using gzip
```

:::note
Configuring Valkyrie with logging level `trace` or `debug` will produce very verbose logs and should be avoided
in production environments.
:::

Providers may also support some form of tracing identifier, which is mapped to a field called `correlationID` by
Valkyrie and propagated using HTTP header `X-Correlation-ID` as part of its standard PAM API.

## Tracing

| Supported tracing exporters                                         | Docs                                                                                    |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) | [github](https://github.com/open-telemetry/opentelemetry-collector-contrib)             |
| StdOut                                                              | [github](https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/stdout) |

Tracing is configured in Valkyrie's standard config file under `telemetry` and supports the following options: 

```yaml
telemetry:
  tracing:
    type: otlphttptrace                             # supported: stdout, otlptracehttp
    url: "http://traces-url"                        # optional, otlphttptrace will default to "http://localhost:4318/v1/traces"
    google_project_id: ${TRACING_GOOGLE_PROJECT_ID} # optional, applicable if you're using google cloud
    sample_ratio: 0.1                               # optional, default samples 1% of traces
```

* `otlphttptrace` configures exporting over [OLTP/HTTP](https://opentelemetry.io/docs/reference/specification/protocol/) to an OpenTelemetry Collector
* `stdout` configures printing of traces to standard out

OpenTelemetry Collector can then be configured with the following [exporters](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter).

### Running locally with OpenTelemetry Collector and Jaeger for tracing

1. Valkyrie provides a sample `docker-compose-local.yaml` for starting a local OpenTelemetry Collector and Jaeger: https://github.com/valkyrie-fnd/valkyrie/tree/main/ops/otel
2. Start Valkyrie locally and configure trace exporting with `otlphttptrace`:
   ```yaml
   telemetry:
     service_name: sample-valkyrie
     tracing:
       type: otlphttptrace
       sample_ratio: 1.0
   ```
   The exporter will by default send traces to OpenTelemetry Collector on `http://localhost:4318/v1/traces` that is running in docker.
3. Trigger a traced wallet call and inspect it in Jaeger on `http://localhost:16686`

## Metrics

Simple application metrics are available at http://localhost:8084/monitoring/metrics and contains:

* CPU usage
* Memory usage
* Response time
* Open connections

More advanced metrics (including above) can be exported by Valkyrie. This includes metrics for:

* HTTP server
* GC statistics
* Memory statistics
* Uptime

| Supported metric exporters                                          | Docs                                                                                    |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) | [github](https://github.com/open-telemetry/opentelemetry-collector-contrib)             |
| StdOut                                                              | [github](https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/stdout) |

Metrics are configured in Valkyrie's standard config file under `telemetry` and supports the following options:

```yaml
telemetry:
  metric:
    type: otlpmetrichttp      # supported: stdout, otlpmetrichttp
    url: "http://metrics-url" # optional, otlpmetrichttp will default to "http://localhost:4318/v1/metrics"
```

* `otlpmetrichttp` configures exporting over [OLTP/HTTP](https://opentelemetry.io/docs/reference/specification/protocol/) to an OpenTelemetry Collector
* `stdout` configures printing of metrics to standard out

### Running locally with OpenTelemetry Collector and Prometheus for metrics

1. Valkyrie provides a sample `docker-compose-local.yaml` for starting a local OpenTelemetry Collector and Prometheus: https://github.com/valkyrie-fnd/valkyrie/tree/main/ops/otel
2. Start Valkyrie locally and configure metric exporting with `otlpmetrichttp`:
   ```yaml
   telemetry:
     service_name: sample-valkyrie
     metric:
       type: otlpmetrichttp
   ```
   The exporter will by default send metrics to OpenTelemetry Collector on `http://localhost:4318/v1/metrics` that is running in docker.
3. Inspect the metrics in Prometheus on `http://localhost:9090`

## Profiling

To enable the profiling endpoint set the env variable `PPROF=true` and use the [pprof tool](https://github.com/google/pprof)
to extract runtime data:
```bash
go tool pprof 'localhost:8084/debug/pprof/profile?seconds=25'
```