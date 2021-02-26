---
id: portal
title: Portal
sidebar_label: Portal
slug: /reference/api/portal
description: Portal Endpoints
keywords:
  - Rest API
---

Portal Endpoints



## Make a portal request



<Endpoint method="post" path="/api/v1/portal/request"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
body |  | body | [EntitlementRequest](/docs/reference/api/api-schemas#entitlementrequest) | true | |


#### Request Example
```json
{
  "operations": [
    "..."
  ]
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Flows created after this request. | [EntitlementReqResponse](/docs/reference/api/api-schemas#entitlementreqresponse)
[207 Multi-Status](https://tools.ietf.org/html/rfc7231) | Some entitlements could not be requested. | [EntitlementReqResponse](/docs/reference/api/api-schemas#entitlementreqresponse)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "flowIds": [
    "..."
  ],
  "notCreated": [
    "..."
  ]
}
```











## Make a portal specific resources search



<Endpoint method="post" path="/api/v1/portal/.gsearch"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
body | Portal General Search parameters | body | [searchBody](/docs/reference/api/api-schemas#searchbody) | true | |


#### Request Example
```json
{
  "appIds": [
    "..."
  ],
  "attributes": [
    "..."
  ],
  "count": 2,
  "searchFor": "...",
  "startIndex": 2,
  "term": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Flows created after this request. | [resourcesList](/docs/reference/api/api-schemas#resourceslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "Resources": [
    {
      "displayName": "Administrators",
      "id": "3NUzqrq3s2tB3Wcg6b2eyi",
      "meta": {
        "appId": "azuread",
        "resourceType": "Group"
      }
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```










import Endpoint from "../../../src/components/Endpoint.js"
