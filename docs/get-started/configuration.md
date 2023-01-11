---
title: Configuration
sidebar_position: 1
---

## Valkyrie Config
Supply a yaml config file when running Valkyrie. It contains config for logging and tracing as well as provider specific configuration. It's possible to add environment variables within `${}`, which will be replaced before the yaml is processed.
```yaml
logging:
  level: info # debug, info, warn, error, fatal, panic
tracing:
  type: jaeger # stdout, jaeger, Zipkin, googleCloudTrace
  url: 'http://traces-url'
  service_name: valkyrie
  google_project_id: ${TRACING_GOOGLE_PROJECT_ID} # if you're using googleCloudTrace
pam: # Player Account Management
  name: generic
  api_key: pam-api-key
  url: 'https://pam-url'
providers:
  - name: providerName
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
