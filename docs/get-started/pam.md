---
title: Player Account Management
sidebar_position: 5
---

### PAM
A PAM is the system the operator uses to keep track of the players' accounts and balances. Also referred to as wallet.
### Wallets
When configuring Valkyrie you need to specify a compatible PAM(player account management) also called wallets.

It is the system the operator uses to keep track of the players accounts and balance, why it is also referenced as wallets.

Valkyrie is in essence an integration between the operator's wallet implementation and the provider's API.

Available wallets in Valkyrie can be found [here](/docs/wallet/valkyrie-pam-api).

### Configuration
Specify what pam to use in the configuration. If you're using Valkyrie PAM API you specify `generic` as the name.


```yaml
pam:
  name: generic # Name of the wallet
  api_key: pam-api-key
  url: 'https://pam-url'
```