---
id: add_web_app
title: Add a Web Application.
sidebar_label: Add Web App
slug: /guides/howto/add-web-app
description: How to let Crossid know about your Single Page Application (SPA).
---

import AddWebApp from "../../../src/components/AddWebApp.mdx";

### What is an app?

An _app_ represents your application where users logs in.

This explains how to add a web app, used by backends such as _Nodejs_ and _Golang_, etc...

:::note
For other app types, see [application](/docs/concepts/application).
:::

## Adding an app

<AddWebApp/>

Crossid will give you back _client id_ and _client_secret_ to be embedded into your app's code.

## Update your app

Every time a user tries to login, the app should redirect to Crossid and provide the _client id_.
