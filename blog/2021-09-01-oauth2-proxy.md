---
slug: oauth2-proxy
title: Proxy with oauth2-proxy
description: Protect your apps and files using oauth2-proxy identity awareness proxy.
author: Asaf Shakarzy
author_title: Core Team
author_url: https://github.com/asaf
tags: [proxy, reverse proxy, zero trust, oauth2, openid]
---

import Mermaid from '@theme/Mermaid';
import AddIntegration from '../src/components/AddIntegration';

If you want to free yourself from coding authentication for your apps, or just want to servce protected files only for your users, a reverse proxy with identity awareness can be a good fit.

Such reverse proxy, like [oauth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy) is able to authenicate users before forwarding the requests to your app.

The proxy enhances each request with headers that identifies the the authenticated user, so your app can simply reply on those headers to establish some identity context.

This post explains how to configure and run _oauth2-proxy_ in a docker container and authenticate users by Crossid.

## Architecture

<Mermaid chart={`sequenceDiagram; autonumber; Browser->>+Oauth2-Proxy: GET: /myapp; Browser->>+Crossid: User not authenticated; Crossid->>Crossid: User Signin; Crossid->>Browser: User Session Created; Browser->>App: GET /myapp; Note right of App: forwarded-user: foo@bar.com;`}/>

1. An anonymous visitor tries to access the app.
2. _oauth2-proxy_ has no session for the visitor, so it redirects the user to Crossid for login.
3. Crossid asks the user to login.
4. _oauth2-proxy_ creates a session for the authenticated user.
5. _oauth2-proxy_ proxies the request to the app with some identity headers.

Let's get started!

## Add oauth2-proxy integration

First, we need to tell Crossid about our oauth2-proxy.

Login to your existing crossid tenant or [signup for free](https://crossid.io/signup).

<AddIntegration name="oauth2-proxy"/>

:::note

- For this example, the **redirect URL** should be `http://127.0.0.1:4180/oauth2/callback`, which is where the oauth2-proxy is located.
- Save _client_id_ and _client_secret_ for the next step.

:::

### Grant your user access to proxy

Lets grant your user access to the proxy.

- In proxy's app page, navigate to **Users** tab and click the **Add User Assignment** button.
- Select your user and press save.

## httpbin as our app

For the sake of example, we use http://httpbin.org/anything as our app. try clicking on it, it just renders our HTTP request as JSON.

## Run oauth2-proxy

Lets configure and run _oauth2-proxy_ in a docker container:

```bash {5-8,12-13}
docker run --rm -p 4180:4180 \
-e OAUTH2_PROXY_HTTP_ADDRESS=0.0.0.0:4180 \
-e OAUTH2_PROXY_SCOPE='openid email profile' \
-e OAUTH2_PROXY_REDIRECT_URL=http://127.0.0.1:4180/oauth2/callback \
-e OAUTH2_PROXY_LOGIN_URL=https://<tenant>.crossid.io/oauth2/auth?audience=oauth2proxy \
-e OAUTH2_PROXY_REDEEM_URL=https://<tenant>.crossid.io/oauth2/token?audience=oauth2proxy \
-e OAUTH2_PROXY_VALIDATE_URL=https://<tenant>.crossid.io/oauth2/userinfo \
-e OAUTH_PROXY_VALIDATE=https://<tenant>.crossid.io/oauth2/userinfo \
-e OAUTH2_PROXY_EMAIL_DOMAINS=* \
-e OAUTH2_PROXY_COOKIE_SECRET=someSecret123456 \
-e OAUTH2_PROXY_COOKIE_SECURE=true \
-e OAUTH2_PROXY_CLIENT_ID=<client_id> \
-e OAUTH2_PROXY_CLIENT_SECRET=<client_secret> \
-e OAUTH2_PROXY_UPSTREAMS=http://httpbin.org/anything \
-e OAUTH2_PROXY_SKIP_PROVIDER_BUTTON=true \
quay.io/oauth2-proxy/oauth2-proxy:latest
```

Replace <tenant_url> with your tenant (e.g., `acme.crossid.io/....`)

With this configuration, every request to `http://127.0.0.1:4180/anything` will be proxied to the upstream (our app).
We simply use _httpbin.org_ that simply echos the request info.

Tip: for a random cookie secret run `python -c 'import os,base64; print(base64.urlsafe_b64encode(os.urandom(16)).decode())'`

## Accessing our app

Navigate to http://127.0.0.1:4180/anything should redirect user to crossid for login.
Upon successful login, the request should be proxied to our app (httpbin.org).

_Partial response example_:

```json
{
  ...
  "headers": {
    "X-Forwarded-Email": "asaf@crossid.io",
    "X-Forwarded-User": "EN6vzb5dNBuc6fUAkYeKZ8"
  },
  "method": "GET",
  "url": "http://127.0.0.1/anything"
}
```

`X-Forwarded-User` should be the crossid user id and `X-Forwarded-Email` should be user's email.

## Tips

- To check if browser is authenticated in _oauth2-proxy_, navigate to http://127.0.0.1:4180/oauth2/userinfo

## Recap

We have seen how we can free our app from auth complexity by lifting the auth complexity to _oauth2-proxy_.

For more info about oauth2-proxy, visit https://oauth2-proxy.github.io/oauth2-proxy/docs.
