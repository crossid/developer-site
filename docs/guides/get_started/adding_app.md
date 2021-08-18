---
id: add_app
title: Add an App
sidebar_label: Add an App
slug: /guides/get-started/add-app
description: Adding an App
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### What is an app?

An _app_ represents your application where users logs in.

For simplicty, let's create a server-side web app.

:::note
Crossid supports various app types such as _single page applications (SPA)_, _mobile_ and _APIs_. for more info see [application](/docs/concepts/application).
:::

### Start from a sample

To speed things up, let's start from a sample with a framework of your choice.

| Framework       | Repository                                             |
| --------------- | ------------------------------------------------------ |
| Node.js Express | [see walk through](/docs/langs/backend/nodejs-express) |
| Golang          | https://github.com/crossid/samples-golang              |

Each sample has a _README.md_ file with instructipns how to set up the sample.

:::note
For more in-depth guides per language, check [languages](/docs/languages).
:::

### Tell Crossid about your app

Once the app is running we should tell Crossid about it.

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
{label: 'Curl', value: 'curl'}
]}>
<TabItem value="console">

1. In Admin console, navigate to <b>Integration &rarr; Marketplace</b>.
1. Choose <b>Web Application</b>.
1. Click on <b>Add Integration</b>.
1. Follow wizard steps.

</TabItem>
<TabItem value="curl">

```bash {10-11,18-22}
curl -X POST \
-H "Authorization: Bearer <API_TOKEN>" \
-d '
{
  "type": "singlePageApp",
  "data": [
    {
      "collectorId": "appDetails",
      "vars": {
        "displayName": "My App",
        "appId": "myapp"
      }
    },
    {
      "collectorId": "oauth2Client",
      "type": "oauth2Client",
      "vars": {
        "client_id": "myapp",
        "redirect_uris": [
          "https://localhost/callback"
        ],
        "audience": ["https://localhost"]
      }
    }
  ]
}
' https://{tenant}.crossid.io/api/v1/apps/.provision/?reason=sample-app
```

</TabItem>
</Tabs>

Crossid will give you back _client id_ and _client secret_ needed for our app.

### Update your app

Everytime a user tries to login, the app should redirect to Crossid and provide the _client id_.

Follow the _README.md_ of the sample project how to set the _client_id_ and optionally the _client_secret_ in your app.
