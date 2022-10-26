---
id: custom_domain
title: Add custom domain.
sidebar_label: Custom Domain
slug: /guides/howto/custom-domain
description: How to add a custom domain.
---

A [Custom Domain](/docs/concepts/custom-domain) let you serve login under your own domain.

This page explains how to add a custom domain.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Add the domain

<Tabs
defaultValue="console"
values={[
{label: 'Console', value: 'console'},
]}>
<TabItem value="console">

1. In Admin console, navigate to **Branding &rarr; Domains**.
1. Click on **Add Integration**.
1. In the DNS record, put your chosen custom domain.
   For example: _auth.acme.io_
1. Click the **Add** button.

</TabItem>
</Tabs>

## Domain validation

For security reasons, we have to ensure that you own the domain,
This requires you to add a TXT record with the given details in your domain entries.

<img src="/img/howto/customdomain_dns_record.png" width="60%"/><br/><br/>

(See below if your DNS provider is GoDaddy)

After adding the DNS record, click the **Verify Domain** button.

The domain should be in a _verified_ state.

![verified](/img/howto/customdomain_verified.png)

## Certificate deployment

For SSL to work, a certificate (with its key) should be provided,

Issuing a certificate is beyond the scope of this tutorial.

Once a certificate issued, you should have a PEM file with a full chain certificate and a key.

In the domains action, click the **deploy** button (see screenshot above).

Provide the certificate and key and click deploy.

If everything is okay, the deployment state should be green.

Wait a bit for the deployment process to end.

## Use the domain

Refer to your domain instead of _crossid.io_, for example, if your tenant is _acme_, located in US then

OAuth endpoints would be referred to: _https://acme.crossid.io/oauth2/.well-known/openid-configuration_

If your custom domain is _auth.acme.io_, your can refer now to the URL: _https://auth.acme.io/oauth2/.well-known/openid-configuration_ instead.

## DNS Providers

### GoDaddy

If your domain is hosted in GoDaddy follow these steps:

1. Open https://dcc.godaddy.com/manage/acme.io/dns
1. Put a _TXT_ record with the given _name_ and _value_.
1. Click the **Add Record**.

![godaddy](/img/howto/customdomain_godaddy.png)
