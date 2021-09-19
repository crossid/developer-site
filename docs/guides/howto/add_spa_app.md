---
id: add_spa_app
title: Add a Single Page Application (SPA) App
sidebar_label: Add SPA App
slug: /guides/howto/add-spa-app
description: How to let Crossid know about your Single Page Application (SPA).
---

import AddSpaApp from "../../../src/components/AddSpaApp.mdx";

### What is an app?

An _app_ represents your application where users logs in.

This explains how to add SPA app, used by frameworks such as _React_ and _Vue_.

:::note
For other app types, see [application](/docs/concepts/application).
:::

## Adding an app

<AddSpaApp/>

Crossid will give you back _client id_ to be embedded into your app's code.

## Update your app

Everytime a user tries to login, the app should redirect to Crossid and provide the _client id_.
