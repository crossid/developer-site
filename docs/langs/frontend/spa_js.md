---
id: spa_js
title: Javascript.
sidebar_label: Javascript
slug: /langs/frontend/spa_js
description: Single Page Application(SPA) with plain js.
keywords:
  - openid
  - spa
  - pkce
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to sign users in using plain javascript.

It requires an openid authorization server that supports the PKCE extension.

:::note
Use [React](https://github.com/crossid/crossid-react) or [Vue](https://github.com/crossid/crossid-vue) libraries that wrap this library for a more framework native experience.
:::

For simplicity, this guide imports the [crossid-spa-js](https://github.com/crossid/crossid-spa-js) library from CDN.

For a more complete example using npm and a build system, see [crossid-spa-js-example](https://github.com/crossid/crossid-spa-js-example)

First, we include the [crossid-spa-js](https://github.com/crossid/crossid-spa-js) library via a `script` tag.

The code below handles the signin process of a user, caches a user object and provides an _access token_ which can be used to access your application API.

```html
<!DOCTYPE html>
<html>
  <head>
    <!--
    The script is packed as a _universal module definition_ (aka: UMD\_) which exposes a single object named `crossid`, which contains the SDK to manage user authentication such as signing users in and out.
    -->
    <script src="https://unpkg.com/@crossid/crossid-spa-js@0.0.4/dist/crossid-spa-js.js"></script>
  </head>
  <body>
    <!-- clicking on this button starts the signin process -->
    <button id="login">Login</button>
    <!-- will contain the user details once the user signs-in -->
    <p id="profile"></p>
    <script>
      window.onload = async () => {
        // configure the client
        const client = await crossid.newCrossidClient({
          // tenant at crossid.io.
          // for other providers see https://crossid.github.io/crossid-spa-js
          tenant_id: "demo",
          // your oauth2 client_id
          client_id: "DMjxjVJEJ8ROScoxHEWw4gvmSerBZhdg",
          // the audience to request access for
          audience: ["example.com"],
          // the scopes to be requested
          scope: "openid profile email",
          // where to redirect upon a completion of a successful signin
          redirect_uri: "http://localhost:3009/",
        });

        const qp = new URLSearchParams(window.location.search);
        // if we see in URL a code then it means the user was signed in successfully
        if (qp.has("code")) {
          // completes the flow
          await client.handleRedirectCallback();
          // remove the 'code' query param from URL
          window.history.replaceState(null, document.title, "/");
        }

        document.getElementById("login").addEventListener("click", async () => {
          // redirect browser to the login page
          await client.loginWithRedirect();
        });

        // get user from cache.
        const user = await client.getUser();
        if (user) {
          document.getElementById("login").style.display = "none";
          document.getElementById("profile").innerHTML = `Hi ${user.name}`;
        } else {
          document.getElementById(
            "profile"
          ).innerHTML = `User is not authenticated, please login.`;
        }
      };
    </script>
  </body>
</html>
```

That's all it takes to perform a full signin process in a javascript application.
