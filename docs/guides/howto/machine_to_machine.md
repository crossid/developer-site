---
id: machine_to_machine
title: Machine to Machine
sidebar_label: Machine to Machine
slug: /guides/howto/machine-to-machine
description: How to programatically access a machine from a machin.
---

A service (aka: _machine_) is a non human program that may request an access token from _Crossid_ in order to authenticate to other services.

A good example is a micro service or a schedueld job that requires access to a protected REST API.

This how-to explains how to perform authentication programmatically, with no user interaction, so a service could access some API.

### Create a service account

A service account is a user intended to be used for services rather people.

Lets create a service account that will be granted with privileges to access our API.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
{label: 'Curl', value: 'curl'}
]}>
<TabItem value="console">

1. In Admin console, navigate to <b>Directory &rarr; Service Accounts</b>.
1. Open the Actions dropdown and click <b>Add</b>
1. Follow the modal (don't forget to make the account active).

![how-to](/img/add_svc_account.gif)

</TabItem>
<TabItem value="curl">

```bash {10-11,18-22}
curl -X POST \
-H "Authorization: Bearer <API_TOKEN>" \
-d '
{
  "userName": "periodicCleanup",
  "displayName": "Periodic Cleanup Account",
  "active": true
}
' https://{tenant}.crossid.io/api/v1/resources/cid/ServiceAccount?reason=add-user
```

</TabItem>
</Tabs>

### Machine to Machine

Thie machine to machine integration will make our service account be able to authenticate via OAuth2.

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
]}>
<TabItem value="console">

1. In Admin console, navigate to <b>Marketplace &rarr; Machine to Machine</b>.
1. Click the <b>Add Integration</b> button.
1. Follow the wizard.

![how-to](/img/add_machine_to_machine_integration.gif)

</TabItem>
</Tabs>

Copy the _Client ID_ and _Client Secret_ for the next steps.

### Create an API integration

Lets create an API that our service should access.

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
]}>
<TabItem value="console">

1. In Admin console, navigate to <b>Marketplace &rarr; API</b>.
1. Click the <b>Add Integration</b> button.
1. Follow the wizard.

![how-to](/img/add_api_integration.gif)

</TabItem>
</Tabs>

### Grant Access

We have to grant our service account access to the API.

### Authenticate

At this point, we have a service account that have _write_ grants to access our API app, lets authenticate.

1. Replace <client_id> with the ID from step 2
1. Replace <client_secret> with the Secret from step 2

```bash
curl -X POST https://{tenant}.crossid.io/oauth2/token \
  -F grant_type=client_credentials \
  -F client_id=<client_id> \
  -F client_secret=<client_secret> \
  -F scope='write'
```

Output:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImt...",
  "expires_in": 3599,
  "refresh_expires_in": 2592000000000000,
  "scope": "write",
  "token_type": "bearer"
}
```
