---
id: resource-types
title: Resource Types
sidebar_label: Resource Types
slug: /reference/api/resource-types
description: Resource Types Endpoints
keywords:
  - Rest API
---

Resource Types Endpoints



## List Resource Types



<Endpoint method="get" path="/api/v1/resource-types/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| filter | The filter string used to request a subset of models. | query | string | false |  |
| count | The desired maximum number of query results per page, e.g., 10. A negative value is interpreted as "0". A value of "0" indicates that no model results are to be returned except for "totalResults". | query | integer | false |  |
| startIndex | The 1-based index of the first query result. A value less than 1 SHALL be interpreted as 1. | query | integer | false |  |
| sortBy | A string indicating the attribute whose value SHALL be used to order the returned responses. | query | string | false |  |
| sortOrder | A string indicating the order in which the "sortBy" parameter is applied.  Allowed values are "ascending" and "descending". | query | string | false |  |
| attributes | A multi-valued list of strings indicating the names of resource attributes to return in the response, overriding the set of attributes that would be returned by default. | query | array | false |  |
| excludedAttributes | A multi-valued list of strings indicating the names of resource attributes to be removed from the default set of attributes to return.  This parameter SHALL have no effect on attributes whose schema "returned" setting is "always". | query | array | false |  |
| forTime | a date time indicating that the requested resources should be retrieved from history as how they looked for the specified time. | query | string | false |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of resource types. | [resourceTypesList](/docs/reference/api/api-schemas#resourcetypeslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "Resources": [
    {
      "appId": "...",
      "description": "...",
      "endpoint": "...",
      "id": "...",
      "meta": {
        "appId": "...",
        "commitId": "...",
        "created": "2021-02-25T20:49:09.170Z",
        "lastModified": "2021-02-25T20:49:09.170Z",
        "location": "...",
        "refersToId": "...",
        "resourceType": "...",
        "revision": 2,
        "tenantId": "..."
      },
      "mode": "...",
      "name": "...",
      "schema": "...",
      "schemaExtensions": [
        "..."
      ],
      "schemaInterfaces": [
        "..."
      ],
      "toApp": "...",
      "toStore": "...",
      "ui": {
        "edit": [
          "..."
        ],
        "overview": [
          "..."
        ],
        "rules": [
          "..."
        ]
      }
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```










## Get a Resource Type



<Endpoint method="get" path="/api/v1/resource-types/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the resource type to retrieve. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [ResourceType](/docs/reference/api/api-schemas#resourcetype)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "appId": "...",
  "description": "...",
  "endpoint": "...",
  "id": "...",
  "meta": {
    "appId": "...",
    "commitId": "...",
    "created": "2021-02-25T20:49:09.170Z",
    "lastModified": "2021-02-25T20:49:09.170Z",
    "location": "...",
    "refersToId": "...",
    "resourceType": "...",
    "revision": 2,
    "tenantId": "..."
  },
  "mode": "...",
  "name": "...",
  "schema": "...",
  "schemaExtensions": [
    "..."
  ],
  "schemaInterfaces": [
    "..."
  ],
  "toApp": "...",
  "toStore": "...",
  "ui": {
    "edit": [
      "..."
    ],
    "overview": [
      "..."
    ],
    "rules": [
      "..."
    ]
  }
}
```











## Create a Resource Type



<Endpoint method="post" path="/api/v1/resource-types/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
body |  | body | [ResourceType](/docs/reference/api/api-schemas#resourcetype) | true | |


#### Request Example
```json
{
  "appId": "...",
  "description": "...",
  "endpoint": "...",
  "id": "...",
  "meta": {
    "appId": "...",
    "commitId": "...",
    "created": "2021-02-25T20:49:09.170Z",
    "lastModified": "2021-02-25T20:49:09.170Z",
    "location": "...",
    "refersToId": "...",
    "resourceType": "...",
    "revision": 2,
    "tenantId": "..."
  },
  "mode": "...",
  "name": "...",
  "schema": "...",
  "schemaExtensions": [
    "..."
  ],
  "schemaInterfaces": [
    "..."
  ],
  "toApp": "...",
  "toStore": "...",
  "ui": {
    "edit": [
      "..."
    ],
    "overview": [
      "..."
    ],
    "rules": [
      "..."
    ]
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The Resource Type state after creation. | [ResourceType](/docs/reference/api/api-schemas#resourcetype)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "appId": "...",
  "description": "...",
  "endpoint": "...",
  "id": "...",
  "meta": {
    "appId": "...",
    "commitId": "...",
    "created": "2021-02-25T20:49:09.170Z",
    "lastModified": "2021-02-25T20:49:09.170Z",
    "location": "...",
    "refersToId": "...",
    "resourceType": "...",
    "revision": 2,
    "tenantId": "..."
  },
  "mode": "...",
  "name": "...",
  "schema": "...",
  "schemaExtensions": [
    "..."
  ],
  "schemaInterfaces": [
    "..."
  ],
  "toApp": "...",
  "toStore": "...",
  "ui": {
    "edit": [
      "..."
    ],
    "overview": [
      "..."
    ],
    "rules": [
      "..."
    ]
  }
}
```











## Replace a Resource Type



<Endpoint method="put" path="/api/v1/resource-types/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the resource type to replace. | path | string | true |  |
body |  | body | [ResourceType](/docs/reference/api/api-schemas#resourcetype) | true | |


#### Request Example
```json
{
  "appId": "...",
  "description": "...",
  "endpoint": "...",
  "id": "...",
  "meta": {
    "appId": "...",
    "commitId": "...",
    "created": "2021-02-25T20:49:09.170Z",
    "lastModified": "2021-02-25T20:49:09.170Z",
    "location": "...",
    "refersToId": "...",
    "resourceType": "...",
    "revision": 2,
    "tenantId": "..."
  },
  "mode": "...",
  "name": "...",
  "schema": "...",
  "schemaExtensions": [
    "..."
  ],
  "schemaInterfaces": [
    "..."
  ],
  "toApp": "...",
  "toStore": "...",
  "ui": {
    "edit": [
      "..."
    ],
    "overview": [
      "..."
    ],
    "rules": [
      "..."
    ]
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The Resource Type state after replacement. | [ResourceType](/docs/reference/api/api-schemas#resourcetype)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[412 Precondition Failed](https://tools.ietf.org/html/rfc7231) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "appId": "...",
  "description": "...",
  "endpoint": "...",
  "id": "...",
  "meta": {
    "appId": "...",
    "commitId": "...",
    "created": "2021-02-25T20:49:09.170Z",
    "lastModified": "2021-02-25T20:49:09.170Z",
    "location": "...",
    "refersToId": "...",
    "resourceType": "...",
    "revision": 2,
    "tenantId": "..."
  },
  "mode": "...",
  "name": "...",
  "schema": "...",
  "schemaExtensions": [
    "..."
  ],
  "schemaInterfaces": [
    "..."
  ],
  "toApp": "...",
  "toStore": "...",
  "ui": {
    "edit": [
      "..."
    ],
    "overview": [
      "..."
    ],
    "rules": [
      "..."
    ]
  }
}
```












import Endpoint from "../../../src/components/Endpoint.js"
