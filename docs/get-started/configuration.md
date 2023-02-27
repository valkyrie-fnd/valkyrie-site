---
title: Configuration
description: Configuration specification when launching Valkyrie
sidebar_position: 1
---

## Valkyrie Config
Supply a yaml config file when running Valkyrie. It contains config for logging and tracing as well as provider specific configuration. It's possible to add environment variables within `${}`, which will be replaced before the yaml is processed.
```yaml
logging:
  level: info # trace, debug, info, warn, error, fatal, panic (info being default)
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
telemetry:
  service_name: serviceName # adds name metadata to tracing and metric telemetry
  namespace: namespace      # adds namespace metadata to tracing and metric telemetry
  tracing:
    type: stdout                        # supported: stdout, otlptracehttp
    # url: "https://tracing-server-url" # optional, otlphttptrace will default to "http://localhost:4318/v1/traces"
    # google_project_id: xyz            # optional, applicable if you're using google cloud
    # sample_ratio: 0.01                # optional, default samples 1% of traces
  metric:
    type: stdout                       # supported: stdout, otlpmetrichttp
    # url: "https://metric-server-url" # optional, otlpmetrichttp will default to "http://localhost:4318/v1/metrics"
pam: # Player Account Management
  name: generic
  api_key: pam-api-key
  url: 'https://pam-url'
provider_base_path: "/providers" # Optional field to set a base path to all requests incoming from provider side, ie wallet calls
operator_base_path: "/operator" # Optional field to set a base path to all requests incoming from operator side
operator_api_key: "token" # Optional, configures an api key used to authorize requests to operator endpoints (using `Authorization: Bearer token` header)
providers:
  - name: providerName
    base_path: "/providername" # base path for the providers. Used to differentiate between Valkyrie's exposed endpoints for the specific providers.
    url: 'http://localhost:3000'
    auth: # Different providers use different auth. Add what is needed for the specific Providers
      api_key: 123
http_server: # optional http server configuration
  read_timeout: 1s
  write_timeout: 1s
  idle_timeout: 30s
  provider_address: localhost:8083 # Base url exposed toward providers
  operator_address: localhost:8084 # Used by operator to trigger gamelaunch
http_client: # optional http client configuration
  read_timeout: 1s
  write_timeout: 1s
  idle_timeout: 30s
  request_timeout: 1s
```

For a full list of available providers please look [here](/providers). Each provider specifies what configuration is needed.
