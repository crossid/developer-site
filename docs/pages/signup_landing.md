---
id: signup_landing
title: User Signup Completed
slug: /pages/signup-landing
description: User signup completed
---

### Why I see this?

This is the default landing page once user signup completed.

You should change this page to your website, management control panel, etc.

### How to change signup return-to URL

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
]}>
<TabItem value="console">

1. In Admin console, navigate to <b>Settings &rarr; Auth</b>.
1. Click the <b>Edit</b> button.
1. Follow wizard steps.
1. Replace the value of _Signup default return to url_ with your URL.

</TabItem>
</Tabs>
