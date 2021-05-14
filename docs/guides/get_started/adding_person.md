---
id: add_person
title: Add a Person
sidebar_label: Add a Person
slug: /guides/get-started/add-person
description: Adding a new Person
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A person is a digital representation of a human that access your app(s). this can be a customer for public web sites or an employee for a private app.

With Crossid you don't need to maintain your own user management. Ceating new user profile, unlock or changing passwords can all be done via the admin console.

Lets add a new person:

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
{label: 'Curl', value: 'curl'},
]}>
<TabItem value="console">

1. From the admin console, navigate to <b>Directory</b> -> <b>People</b>.
1. Click the <b>Add Person</b> button.
1. Fill up the form and click <b>Save</b>.

</TabItem>

<TabItem value="curl">

```curl {5-7}
curl -X POST \
-H "Authorization: Bearer 4oUgbPOXbBMnpp2YorY6185odcnub3h3" \
-d '
{
  "userName": "jared",
  "displayName": "Jared Dunn",
  "active": true,
  "password": "initial_pass"
}
' https://<my-tenant>.crossid.io/api/v1/resources/cid/Users?reason=sample-user
```

</TabItem>
</Tabs>

The person is now created and ready to be used, lets register an application.
