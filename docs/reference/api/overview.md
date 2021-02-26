---
id: api-overview
title: API Overview
sidebar_label: API Overview
slug: /reference/api/api-overview
description: REST API Overview
keywords:
  - Rest API
---

## URL Namespace

All URLs are preceded with your tenant's subdomain and API version in the form of `https://{tenant}.crossid.io/api/{api-version}`

If your teant is `hooli` then any URL should be preceded with `https://hooli.crossid.io/api/v1`

## Authentication

Use API Tokens to interact with the API directly.

## Pagination

Pagination follows [SCIM v2 pagination](https://tools.ietf.org/html/rfc7644#section-3.4.2.4) specification.

## Filtering

Crossid uses [SCIM v2 filters](https://tools.ietf.org/html/rfc7644#section-3.4.2.2) to narrow find results.

`name.givenName eq "Barbara"`

## Media Types

The API onlly accept and return JSON format. it is advised to set `Content-Type` and `Accept` headers as `application/json` for every API request call.

### Date Format

All dates sent and received should be in [ISO 3339](https://tools.ietf.org/html/rfc3339) format.

YYYY-MM-DDT23:59:60Z (e.g., `2006-01-02T15:04:05Z07:00`)

## Character sets

All requests and responses must be encoded using the UTF-8 encoding [RFC3629](https://tools.ietf.org/html/rfc3629).

## Errors

- Responses for managed resources follows the [SCIM v2 errors](https://tools.ietf.org/html/rfc7644#section-3.7.3).
- Responses for OAuth follows [RFC6749](https://tools.ietf.org/html/rfc6749#section-5.2).
