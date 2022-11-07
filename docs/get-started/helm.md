---
sidebar_position: 2
title: Helm
---
## Helm chart for Valkyrie

Helm is a package manager for Kubernetes. For basic usage and installation please refer to https://helm.sh/.

## Configuration

This is a sample configuration. For a more extensive example refer to [Configuration](./configuration)
```yaml
  config:
    logging:
      level: info
    pam:
      name: generic
      api_key: ${PAM_API_KEY}
      url: 'https://api.your.pam'
    providers:
      - name: some_provider
        url: 'https://api.some.provider'
        auth:
          api_key: ${SOME_PROVIDER_API_TOKEN}
  env:
    - name: SOME_PROVIDER_API_TOKEN
      valueFrom:
        secretKeyRef:
          name: 'the-secret-your-created'
          key: some-provider-api-token
```

In order to provide external access to the valkyrie service a few things will be needed which are
dependent on the environment:
- domain names and SSL certificates
- most likely some sort of IP whitelisting for each provider
- NAT gateway for egress Valkyrie traffic providing a static IP for provider whitelisting

### Using GCP for surrounding features
1. SSL: [google-managed ssl for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs)
2. IP whitelisting: [Google Cloud Armor Ingress security policy](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#cloud_armor)
3. Static IP for outgoing traffic: [Set up Cloud NAT with GKE](https://cloud.google.com/nat/docs/gke-example)

## Install

Show the supported values that can be configured:

`helm show values path/to/helm`

Simulate an install using the `--dry-run` flag and provide a few explicit values:

`helm install my-valkyrie path/to/helm --set image.repository=<container repo> --set image.tag=<version> --dry-run`

Install using a user provided values file (`-f <valuesfile>`):

`helm install my-valkyrie path/to/helm -f <values-file>`

## Packaging

Package the chart:

`helm package path/to/helm`

Push the packaged chart to repo:

`helm push valkyrie-0.1.0.tgz oci://oci-repo`

You can now access the chart using the OCI registry:

`helm show readme oci://oci-repo/valkyrie`

## Troubleshooting

Render the k8s resources produced by the chart:

`helm template path/to/helm --debug`

