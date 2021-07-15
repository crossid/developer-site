---
slug: crossid-spa-js-with-hydra
title: SPA with Hydra & crossid-spa-js
author: Asaf Shakarzy
author_title: Core Team
author_url: https://github.com/asaf
tags: [oauth2, openid, pkce, spa, hydra, crossid-spa-js]
---

If a self-hosted OIDC / OAuth2 provider is your thing, then most chances [Hydra](https://github.com/ory/hydra) would be your best choice.

This post explains how to write a single page app (SPA) in js, with no backend that performs authentication via Hydra.

It uses [crossid-spa-js](https://github.com/crossid/crossid-spa-js), a javascript OAuth2 client (with PKCE) that suites for SPA apps that is able to sign users in and out with advanced features such caching and refresh token.

## Setup Hydra

This setup is based on the [5 Minutes Tutorial](https://www.ory.sh/hydra/docs/5min-tutorial/) which:

- setup Hydra as an OAuth2 provider.
- setup a server that serves an example of a login page.
- create a client configured for SPA apps.

### Configuration

Hydra needs to be configured with:

- admin CORS enabled for the _OIDC wellknown_ endpoint.
- public CORS enabled for the _token_ endpoint.
- issue access tokens in JWT format.

Edit `contrib/quickstart/5-min/hydra.yml` with:

```yaml
serve:
  ...
  admin:
    cors:
      enabled: true
  public:
    cors:
      enabled: true
strategies:
  access_token: jwt
```

Start Hydra:

```sh
$ docker-compose -f quickstart.yml \
    -f quickstart-postgres.yml \
    up --build

Starting hydra_postgresd_1
Starting hydra_hydra_1
```

### Create a client

The client needs to be created as follows:

```bash {7}
$ docker-compose -f quickstart.yml exec hydra \
    hydra clients create \
    --endpoint http://127.0.0.1:4445 \
    --id myspa \
    --grant-types authorization_code,refresh_token \
    --response-types code,id_token \
    --token-endpoint-auth-method none \
    --audience myspa.com \
    --scope openid,offline \
    --callbacks http://localhost:3009 \
    --allowed-cors-origins http://127.0.0.1:3009


OAuth 2.0 Client ID: myspa
This OAuth 2.0 Client has no secret
```

We should not create a secret and set _token-endpoint-auth-method_ to _none_ as public clients cannot provide a secret.

## SPA app

Our SPA app is a vanilla (frameworkless) javascript app sign users in, once user signed in, the user's profile will be displayed.

:::note
If you use React, try **[crossid-react](https://github.com/crossid/crossid-react)** that wraps the _crossid-spa-js_ library in a more convinience way.
:::

Clone the [crossid-spa-js-example](https://github.com/crossid/crossid-spa-js-example) repo:

```sh
git clone https://github.com/crossid/crossid-spa-js-example myspa
cd myspa
npm install
```

This example is composed only from two files: `src/main.js` which contains the logic to initialize a client and signin and `index.html` which is the html of our app.

Lets edit `src/main.js` to init a [Client](https://crossid.github.io/crossid-spa-js/classes/client.html) that matches the params of the Hydra client we created above.

```ts
// ...
import { newCrossidClientByDiscovery, Client } from "@crossid/crossid-spa-js";

// inits a client that handles signing users in and out.
export const initClient = async () => {
  const client = await newCrossidClientByDiscovery({
    // configure a client by the oidc configuration well known endpoint
    wellknown_endpoint:
      "http://localhost:4444/.well-known/openid-configuration",
    client_id: "myspa",
    audience: ["myspa.com"],
    scope: "openid offline",
    redirect_uri: "http://localhost:3009",
    // default cache is 'memory', enable to preserve user in cache
    // cache_type: "session_storage",
  });

  return client;
};

//...
```

Take a look at [index.html](https://github.com/crossid/crossid-spa-js-example/blob/main/index.html) that uses our `login` method.

Start the spa app:

```sh
npm run dev
```

And open browser at [http://localhost:3009](http://localhost:3009)

## Recap

We see more and more SPA apps, [crossid-spa-js](https://github.com/crossid/crossid-spa-js) library makes it easy to integrate any JS app with OIDC provider such Hydra.

:::tip
Interested in SAAS identity platform? visit [crossid.io](https://crossid.io)
:::
