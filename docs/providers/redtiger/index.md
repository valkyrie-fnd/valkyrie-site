---
title: "Redtiger"
id: "redtiger-index"
---

## Red Tiger

### Games

[Red Tiger](https://www.redtiger.com/) offers leading games in the slot space.

### Wallet API

See our wallet API (https://dev.redtigergaming.com/#!/) for details on how to integrate directly with RT RGS or integrate via Valkyrie and you'll do the job once.

### Valkyrie integration

Integrate your gaming lobby and wallet system (often enough referred to as "PAM") to Valkyrie and you will be able to access all games offered by Red Tiger!

You can either integrate directly to the [Valkyrie standardized gaming API](/wallets)  or implement a proprietary integration to Valkyrie. If you choose proprietary option, please contribute to the Valkyrie open code base found here (https://github.com/four-fingers/valkyrie).

### Configuration

```yaml
providers:
  - name: Red Tiger
    url: 'https://redtiger' # see your settings page at https://dev.redtigergaming.com to see your operator specific url
    auth:
      api_key: ${RED_TIGER_API_KEY} # Red tiger api key. Found in https://dev.redtigergaming.com
      recon_token:  ${RECON_TOKEN} # Reconciliation token. See https://dev.redtigergaming.com
```