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

| Framework       | Repository                                 |
| --------------- | ------------------------------------------ |
| Node.js Express | https://github.com/crossid/sample-js-react |

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

1. In Admin console, navigate to <b>Applications</b>.
1. Click <b>Add Application</b>.
1. Select <b>Web App</b>.

</TabItem>
<TabItem value="curl">

```bash {15-18}
curl -X POST \
-H "Authorization: Bearer <API_TOKEN>" \
-d '
{
    "provisionFlowId":"provisionOAuthClient",
    "provisionFlowData": {
    "currentStepId": "AppManifest",
    "partial": false,
    "stepData": [{
            "title": "title",
            "stepID": "AppManifest",
            "stepType": "AppManifest",
            "tag": "OAuthClientProvision",
            "data": {
                "clientId": "sample",
                "clientName": "Sample app",
                "clientSecret": "super-secret",
                "redirectUri": "https://localhost/callback"
            },
            "skipped": false
        }
    ]}
}
' https://{tenant}.crossid.io/api/v1/apps/.fromTemplate/?reason=sample-app
```

</TabItem>
</Tabs>

Crossid will give you back _client id_ and _client secret_ needed for our app.

### Update app config

Everytime a user tries to login, the app should redirect to Crossid and provide the client id.

Follow the _README.md_ of the sample project how to set the _client_id_ and optionally the _client_secret_.
