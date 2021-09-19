---
slug: grant-oauth-proxy-with-crossid
title: Using grant OAuth2 proxy with Crossid
description: How to use grant OAuth2 nodejs proxy with Crossid.
author: Asaf Shakarzy
author_title: Core Team
author_url: https://github.com/asaf
tags: [oauth2, openid, nodejs, proxy]
---

import AddIntegration from "../src/components/AddIntegration.js";
import AppUserAssignment from "../src/components/AssignUserToApp.mdx";

[grant](https://github.com/simov/grant) is a nodejs OAuth proxy.

With few lines of code, _grant_ can add oauth login support for any node.js app.

For example, [Strapi](https://strapi.io/) uses _grant_ to authenticate users via Oauth2.

This post explains how to use _grant_ to authenticate Crossid.

## Init a new project

```bash
mkdir grant-crossid && cd grant-crossid
npm -y init
npm install grant express express-session
```

## Let crossid know about Grant

We need to let Crossid know about our grant app.

<AddIntegration name="Web App" steps={["Redirect URIs: http://localhost:3005/connect/crossid/callback"]}/>

### Grant your user access to this app.

<AppUserAssignment/>

Save the _Client ID_ to the next deployment steps.

## config.json

```json {8-10}
{
  "defaults": {
    "origin": "http://localhost:3005",
    "transport": "session",
    "state": true
  },
  "crossid": {
    "subdomain": "acme",
    "key": "<client_id>",
    "secret": "<client_secret>",
    "scope": ["openid"],
    "callback": "/hello",
    "response": ["tokens", "raw", "profile"]
  }
}
```

The configuration file defines the _crossid_ as an auth provider.

- replace _subdomain_ with your [tenant](/docs/concepts/tenant).
- replace _<client_id>_ and _<client_secret>_ with your app credentials.

## index.js

```js
var express = require("express");
var session = require("express-session");
var grant = require("grant").express();

express()
  .use(session({ secret: "grant", saveUninitialized: true, resave: false }))
  .use(grant(require("./config.json")))
  .get("/hello", (req, res) => {
    res.end(JSON.stringify(req.session.grant.response, null, 2));
  })
  .listen(3005);
```

## Try it

Run the example by: `node index.js`

Open browser in _https://localhost:3005/connect/crossid_

You should be redirected to the login page, once user is logged in, you should see the _access token_ and the user's profile.

## References

- repo: https://github.com/simov/grant
