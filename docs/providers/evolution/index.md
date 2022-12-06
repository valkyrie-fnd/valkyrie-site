---
title: "Evolution"
id: "evolution-index"
---

## Evolution

### Games

[Evolution](https://www.evolution.com/) offers leading live games such as casino, cards & craps.

### Wallet API

See our wallet API (https://studio.evolution.com/api/docs) for details on how to integrate directly with Evolution RGS or integrate via Valkyrie and you'll do the job once.

### Valkyrie integration

Integrate your gaming lobby and wallet system (often enough referred to as "PAM") to Valkyrie and you will be able to access all games offered by Evolution Gaming!

You can either integrate directly to the [Valkyrie standardized gaming API](/docs/wallet/valkyrie-pam-api)  or implement a proprietary integration to Valkyrie. If you choose proprietary option, please contribute to the Valkyrie open code base found here (https://github.com/valkyrie-fnd).

### Configuration

```yaml
providers:
  - name: Evolution
    url: 'https://Evo-baseurl' # 
    auth:
      casino_key: ${EVO_CASINO_KEY} # Casino specific key provided by Evolution
      api_key: ${EVO_API_KEY} # Evolution api key
      casino_token:  ${EVO_CASINO_API_TOKEN} # Token used for game launch requests toward evolution backend
```