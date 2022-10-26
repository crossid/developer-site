---
id: signup
title: Signup a new tenant
sidebar_label: Sign Up
slug: /guides/get-started/signup
description: Signup a new tenant
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What is a Tenant?

A tenant is an isolated private namespace that holds all resources related to identity management, such as [applications](/docs/concepts/Application), users, groups.

To get started, let's signup a free developer edition tenant.

## Create a new tenant

You have to choose a tenant name, which is used in various places such as Login page.

For example, if you choose `hooli` as a tenant name, your tenant URL would be `https://hooli.crossid.io`

<Tabs
defaultValue="web"
values={[
{label: 'Web', value: 'web'},
{label: 'Curl', value: 'curl'},
]}>
<TabItem value="curl">

```curl {3,6-9}
curl -X POST -d '
{
  "displayName": "Hooli Corp",
  "tenantId": "hooli",
  "type": "developer",
  "user": {
    "displayName": "Gavin Belson",
    "email": "gavin@hooli.io",
    "password": "initial_pass"
  }
}' https://cid.crossid.io/api/global/v1/tenants/.register
```

</TabItem>
<TabItem value="web">

1. Go to https://crossid.io/signup
1. Signup for a new tenant.

</TabItem>
</Tabs>

Check your email for tenant activation.

## Get API token

:::note
API token is only required if you plan to interact with the REST API using an HTTP client such as curl. Skip this step if you plan to use the web admin console.
:::

Let's get a short access token that is required to securely interact with Crossid API.

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
]}>
<TabItem value="console">

1. From the admin console, navigate to <b>Applications</b> -> <b>Crossid</b>.
1. Select the <b>API Access</b> tab.
1. Click <b>Generate Token</b> and copy it.

</TabItem>
</Tabs>

## Next Steps

Your tenant is created and ready to be used, follow email instructions how to login to the admin console.

In the next steps we will add a user sample, an OAuth2 application (client) and use those to perform a login using your favorite stack.
