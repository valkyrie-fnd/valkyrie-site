---
sidebar_position: 4
title: Helm
---
## Helm chart for Valkyrie

Helm is a package manager for Kubernetes. For basic usage and installation please refer to the official [quickstart guide](https://helm.sh/docs/intro/quickstart/).

### Getting started

The Valkyrie Helm chart is available on [Docker Hub](https://hub.docker.com/r/valkyriefnd/valkyrie-chart) and can be
installed from there directly by Helm:

```shell
helm install valkyrie oci://docker.io/valkyriefnd/valkyrie-chart -v values.yaml
```

The above command will install Valkyrie in the current Kubernetes cluster your configured `values.yaml`.

For a more detailed example please follow the tutorial below.

#### Tutorial: installing your first Valkyrie using Helm

The following command will install Valkyrie in your currently configured Kubernetes cluster:

```shell
helm upgrade --install my-valkyrie             \
    oci://docker.io/valkyriefnd/valkyrie-chart \
    -n playground-valkyrie --create-namespace
```

Let's break down the above command:
1. It will upgrade (or install if missing) a Helm _release_ called `my-valkyrie`
2. The chart will be pulled from `oci://docker.io/valkyriefnd/valkyrie-chart`
3. The _release_ will be installed into `playground-valkyrie` Kubernetes namespace (creating the namespace if missing)

Helm can now be used to manage this _release_. Try listing the release using Helm:

```shell
helm list -n playground-valkyrie
```

You should now see the release listed by Helm.

In a real scenario you will want to further configure Valkyrie with a _pam_ and one or more _providers_. 
For the sake of learning, let's upgrade our _release_ `my-valkyrie` and change the configured logging level:

```shell
helm upgrade my-valkyrie                       \
    oci://docker.io/valkyriefnd/valkyrie-chart \
    --set "config.logging.level=debug"
    -n playground-valkyrie
```

This should upgrade to a new revision of our _release_ `my-valkyrie` with the _value_ `config.logging.level` set to `debug`,
overriding the default logging level (`info`).

You can also simulate an upgrade using the `--dry-run` flag:

```shell
helm upgrade my-valkyrie oci://docker.io/valkyriefnd/valkyrie-chart \
    -n playground-valkyrie --dry-run
```

This will output the produced kubernetes manifests that would be applied by Helm.

To further configure the chart, please refer to the [Chart configuration](#chart-configuration) section below.

Finally, lets cleanup after ourselves by uninstalling the _release_:

```shell
helm uninstall my-valkyrie -n playground-valkyrie
```

This will remove all resources in Kubernetes related to the _release_.

### Chart configuration

Helm charts are configured by supplying _values_, typically by a _values.yaml_-file.

The chart [values.yaml](https://github.com/valkyrie-fnd/valkyrie/blob/main/helm/values.yaml) can be found in the Valkyrie repository on GitHub.
This file has all the default values for the Helm chart, but also includes commented parts with example configuration for reference.

:::note
You can also show the chart values using the command:
```shell
helm show values oci://docker.io/valkyriefnd/valkyrie-chart
```
:::

Custom values are typically provided to Helm using the `-v <values.yaml>` flag when running the `helm upgrade` command.

#### Application config

To configure the Valkyrie application (previously described in [Configuration](./configuration) section) the `config` key is available. Everything configured under the `config` key will
be available to the running application.

Below is a small sample:
```yaml
config:
  logging:
    level: debug
```

In the example above, the key `logging.level=debug` will be configured for the Valkyrie application.

#### Secrets

A common use case is to configure a secret for the Valkyrie application (for example an API token).
The recommendation is to configure the secret value using a `Secret` resource in Kubernetes, please refer to the
official Kubernetes [Secret documentation](https://kubernetes.io/docs/concepts/configuration/secret/) for this.

Once the secret has been configured as a `Secret` resource, you may refer to the resource name from the Helm chart 
configuration. We recommend that you use the `env` key in the Helm chart, which allows the secret to be placed into
an environment variable for the running container.

```yaml
env:
  - name: SOME_PROVIDER_API_TOKEN
    valueFrom:
      secretKeyRef:
        name: 'the-secret-your-created'
        key: some-provider-api-token
```

You may then reference the environment variable in the application configuration safely without leaking the secret:

```yaml
config:
  providers:
    - name: some_provider
      url: 'https://api.some.provider'
      auth:
        api_key: ${SOME_PROVIDER_API_TOKEN}
```

### Cloud provider configuration

In order to provide external access to the valkyrie service a few things will be needed which are
dependent on the environment:
- domain names and SSL certificates
- most likely some sort of IP whitelisting for each provider
- NAT gateway for egress Valkyrie traffic providing a static IP for provider whitelisting

#### Using GCP for surrounding features
1. SSL: [google-managed ssl for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs)
2. IP whitelisting: [Google Cloud Armor Ingress security policy](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#cloud_armor)
3. Static IP for outgoing traffic: [Set up Cloud NAT with GKE](https://cloud.google.com/nat/docs/gke-example)
