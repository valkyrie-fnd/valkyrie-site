---
title: Operations
sidebar_position: 2
---

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

Providers may also support some form of tracing identifier, which is mapped to a field called `correlationID` by
Valkyrie and propagated using HTTP header `X-Correlation-ID` as part of its standard PAM API.

## Telemetry

Valkyrie uses [OpenTelemetry](https://opentelemetry.io/docs/concepts/what-is-opentelemetry/) for all its telemetry 
needs, which allows for easy integration with most standard observability backends.

### Tracing

| Supported tracing exporters                          | Docs                                                                                    |
|------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [Jaeger](https://www.jaegertracing.io/)              | [github](https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/jaeger) |
| [Google Cloud Trace](https://cloud.google.com/trace) | [github](https://github.com/GoogleCloudPlatform/opentelemetry-operations-go)            |

Tracing is configured in Valkyrie's standard config file and supports the following options: 

```yaml
tracing:
  type: jaeger # stdout, jaeger, googleCloudTrace
  url: 'http://traces-url'
  service_name: valkyrie
  google_project_id: ${TRACING_GOOGLE_PROJECT_ID} # if you're using googleCloudTrace
```

#### Running locally with Jaeger for tracing
1. Start Jaeger in docker
    ```bash
    docker run -d --name jaeger \
      -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
      -p 5775:5775/udp -p 6831:6831/udp -p 6832:6832/udp -p 5778:5778 -p 16686:16686 \
      -p 14250:14250 -p 14268:14268 -p 14269:14269 -p 9411:9411 \
      jaegertracing/all-in-one:1.35
    ```
2. Set environment variables for Valkyrie.
    ```bash
    TRACING_TYPE=jaeger
    TRACING_URL=http://localhost:14268/api/traces
    TRACING_SERVICE_NAME=valkyrie
    ```

### Metrics

Simple metrics are available at http://localhost:8084/monitoring/metrics.

## Profiling

To enable the profiling endpoint set the env variable `PPROF=true` and use the [pprof tool](https://github.com/google/pprof)
to extract runtime data:
```bash
go tool pprof 'localhost:8084/debug/pprof/profile?seconds=25'
```

## Operating

This section provides information for operating Valkyrie in a production environment.

### Running

Valkyrie support several ways of running the application:

* Kubernetes: use the provided [Helm chart](helm).
* Docker: use the official [Docker image](docker).
* Other: use one of the prebuilt binary releases on [GitHub](https://github.com/valkyrie-fnd/valkyrie/releases)

#### systemd

Valkyrie binary releases for Linux also includes systemd script `svc.sh` for installing the application
as a systemd service. For a list of available commands run `./svc.sh`.

### Network

Valkyrie will accept HTTP traffic on two ports, typically these ports are mapped to `8083` and `8084`, but they can
also be configured.

Outgoing traffic from Valkyrie is also HTTP-based and varies depending on which providers are used.

SSL termination and load balancing concerns should be implemented outside the application through standard
infrastructure components.

Valkyrie provides an HTTP endpoint `GET /ping`, which can be used for load balancer monitoring etc.

### Scaling

Valkyrie is built as a stateless component and is scalable both horizontally by running many instances of the
application, and vertically by being able to efficiently utilize the cores available on the host system.

### Security

Valkyrie supports API key authorization on both operator and provider ports (depending on the provider implementation).

To further control network access to and from Valkyrie, IP-restrictions and private networking may also
be used.