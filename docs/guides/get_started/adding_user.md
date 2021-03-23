---
id: add_user
title: Add a User
sidebar_label: Add a User
slug: /guides/get-started/add-user
description: Adding a new User
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A user is a digital representation of a person that access your app. this can be a client for public web sites or an employee for a private app.

With Crossid you don't need to maintain your own user management. Ceating new user profile, unlock or changing passwords can all be done via the admin console.

Lets add a new user:

<Tabs
defaultValue="curl"
values={[
{label: 'Curl', value: 'curl'},
]}>
<TabItem value="curl">

```curl {5-7}
curl -X POST \
-H "Authorization: Bearer 4oUgbPOXbBMnpp2YorY6185odcnub3h3" \
-d '
{
  "userName": "jared",
  "displayName": "Jared Dunn",
  "password": "initial_pass"
}
' https://<my-tenant>.crossid.io/api/v1/resources/cid/Users?reason=sample-user
```

</TabItem>
</Tabs>

The user is now created and ready to be used, lets register an application.
