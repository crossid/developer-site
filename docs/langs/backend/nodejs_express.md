---
id: nodejs_express
title: Nodejs with Express
sidebar_label: Nodejs with Express
slug: /langs/backend/nodejs-express
description: NodeJs Integration
keywords:
  - openid
  - nodejs
  - express
---

This guide explains the basics of how to sign users in using Node.JS and Express.

:::note
For a more robust example, see [https://github.com/crossid/sample-nodejs](https://github.com/crossid/sample-nodejs).
:::

We use a simple [express-openid-connect](https://github.com/auth0/express-openid-connect) library that wraps the certified [openid-client](https://github.com/panva/node-openid-client) for the Express framework.

### Project Init

Let's init a new project:

```bash
mkdir myapp ; cd myapp
npm init -f
npm install express dotenv auth0/express-openid-connect
```

### Configure

_express-openid-connect_ can be configured via _env vars_, a minimal `.env` file would like look:

```bash {1-3}
ISSUER_BASE_URL=https://<TENANT>.crossid.io/oauth2
CLIENT_ID=<CLIENT_ID>
CLIENT_SECRET=<CLIENT_SECRET>
SECRET=<RANDOM_STRING>
BASE_URL=https://localhost
```

All `<>` placeholders must be replaced.

- Line 1: `<TENANT>` is your Crossid tenant, don't have a tenant yet? [create one for free!](/docs/guides/get-started/signup)
- Line 2: `<CLIENT_ID>` is the [client id](/docs/guides/get-started/add-app#tell-crossid-about-your-app) you get by telling Crossid about your app.
- Line 3: `<CLIENT_SECRET>` is the [client secret](/docs/guides/get-started/add-app#tell-crossid-about-your-app) you get by telling Crossid about your app.
- Line 4: Choose a long random string (note: this is not a client secret, it's secret for protecting the session cookie)

Notes:

- We use `https` in our _BASE_URL_ to avoid cookie policy issues so proxy is needed (see Caddy below)
- The app below requires the _redirect_uris_ to be _https://localhost/callback_

### Server

A minimal server would look like:

```js
// server.js
const express = require("express");
const { auth } = require("express-openid-connect");
require("dotenv").config();
const app = express();
app.use(
  auth({
    authorizationParams: {
      response_type: "code id_token",
      audience: "example.com",
      scope: "openid profile",
    },
  })
);
app.set("trust proxy", true);
app.get("/", (req, res) => {
  res.send(`hello ${req.oidc.user.name}`);
});
app.listen(3005, () => console.log("listening at http://localhost:3005"));
```

Let's start a reverse proxy which will route any traffic coming from 443 to port 3005.

```bash
caddy reverse-proxy --from localhost:443 --to localhost:3005
```

(can be installed via `brew install Caddy` or [https://caddyserver.com/docs/download](https://caddyserver.com/docs/download)).

Start the server and hit [https://localhost](https://localhost)

```bash
node ./server.js
```

### References

For more information see [express-openid-connect](https://github.com/auth0/express-openid-connect)
