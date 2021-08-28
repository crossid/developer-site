---
title: Languages
sidebar_label: Overview
slug: /languages
description: Languages Overview
---

:::note
New to Crossid? check out the [get started](/docs/guides/get-started) guide.
:::

The _OpenID Connect_ and _OAuth2_ are standard protocols and there are many libraries that support them.

We have written some walk throughts on popular languages and frameworks to get you started.

### Languages & Framework Guides

- [Node.JS using Express](/docs/langs/backend/nodejs-express)

### Libraries

:::tip
Crossid uses standard protocols such as _OpenID Connect_ and _OAuth2_ to log users in.

We advise not to use any proprietary libraries to avoid vendor lock.
:::

#### Javascript

| Library                                                     | Purpose                            | Demo Repo                                      |
| ----------------------------------------------------------- | ---------------------------------- | ---------------------------------------------- |
| [Crossid SPA JS](https://github.com/crossid/crossid-spa-js) | Use if you write plain js/ts code  | https://github.com/crossid/crossid-spa-js-demo |
| [Crossid React](https://github.com/crossid/crossid-react)   | Use if you write your app in React | https://github.com/crossid/crossid-react-demo  |
| [Crossid Vue](https://github.com/crossid/crossid-vue)       | Se if you write your app in Vue    | https://github.com/crossid/crossid-vue-demo    |

#### NodeJS

| Library                                                                   |
| ------------------------------------------------------------------------- |
| [Node OIDC Provider](https://github.com/panva/node-oidc-provider)         |
| [Express OpenID Conenct](https://github.com/auth0/express-openid-connect) |
| [PassportJS](http://www.passportjs.org)                                   |

#### Golang

| Library             | Purpose                              | Demo Repo                                                      |
| ------------------- | ------------------------------------ | -------------------------------------------------------------- |
| Go OAuth 2.0 Client | Official HTTP Client                 | https://github.com/crossid/crossid-go/tree/main/examples/login |
| Crossid Go          | Protect endpoints with JWTs and more | https://github.com/crossid/crossid-go                          |
