---
title: Player Account Management
sidebar_position: 5
---

## PAM
A PAM is the system the operator uses to keep track of the players' accounts and balances. Also referred to as wallet.
## Wallets
When configuring Valkyrie you need to specify a compatible wallet.

It is the system the operator uses to keep track of the players accounts and balance, why it is also referenced as wallets.

Valkyrie is in essence an integration between the operator's wallet implementation and the provider's API.

Available wallets in Valkyrie can be found [here](/docs/wallet/valkyrie-pam/valkyrie-pam-api).

## Configuration
Specify what PAM to use in the configuration. Each PAM has their own set of configuration fields. 

#### Generic Pam
If you have PAM that implements the [Valkyrie PAM API](/docs/wallet/valkyrie-pam/valkyrie-pam-api) you can set the following configuration

```yaml
pam:
  name: generic # Name of the wallet
  api_key: pam-api-key # uses an api key to verify requests
  url: 'https://pam-url' # base uri to the pam
```
#### VPlugin
It is also possible to have the PAM implementation in a separate executable using [Hashicorp go-plugin](https://github.com/hashicorp/go-plugin).

Read more about VPlugin [here](/docs/wallet/vplugin/vplugin-introduction) 

You set the following config to use a pam as vplugin:
```yaml
pam:
  name: vplugin # Name should be set to "vplugin"
  pluginPath: path/to/plugin-executable # path to the plugin
  type: pluginName # name of the plugin, the key in the plugin map.
  # Any other configuration set here will be forwarded to the pam plugin in a map[string]any
  plugin_setting: "configValue"
```


:::caution
Please note that the PAM client will have a configured number of decimals for amounts, and
if rounding is required the transactions will be rejected.
:::