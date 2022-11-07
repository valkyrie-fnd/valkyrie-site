---
title: Logging and tracing
sidebar_position: 4
---

### Logging
Features:
- Structured logging JSON
- Optional request/response logging
- Trace information attached if available

### Metrics
Simple metrics are available at http://localhost:8084/monitoring/metrics

### Tracing
| Supported tracing exporters                          | Docs                                                                                    |
|------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [Jaeger](https://www.jaegertracing.io/)              | [github](https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/jaeger) |
| [Zipkin](https://zipkin.io/)                         | [github](https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/zipkin) |
| [Google Cloud Trace](https://cloud.google.com/trace) | [github](https://github.com/GoogleCloudPlatform/opentelemetry-operations-go)            |

### Running locally with Jaeger for tracing
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

### Profiling
To enable the profiling endpoint set the env variable `PPROF=true` and use the [pprof tool](https://github.com/google/pprof)
to extract runtime data:
```bash
go tool pprof 'localhost:8084/debug/pprof/profile?seconds=25'
```
### Configuration

```yaml
logging:
  level: info # debug, info, warn, error, fatal, panic
tracing:
  type: jaeger # stdout, jaeger, Zipkin, googleCloudTrace
  url: 'http://traces-url'
  service_name: valkyrie
  google_project_id: ${TRACING_GOOGLE_PROJECT_ID} # if you're using googleCloudTrace
```