---
title: Player Account Management
sidebar_position: 5
---
### Wallets
When configuring Valkyrie you need to specify a compatible PAM(player account management) also called wallets.

It is the system the operator uses to keep track of the players accounts and balance, why it is also referenced as wallets.

Valkyrie is in essence an integration between the operator's wallet implementation and the provider's APIs.

Available wallets in valkyrie can be found [here](/wallets).

### Configuration
Name of the pam is found in the specific documentation above
```yaml
pam:
  name: generic # Name of the wallet
  api_key: pam-api-key
  url: 'https://pam-url'
```