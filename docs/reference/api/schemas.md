---
id: schemas
title: Schemas
sidebar_label: Schemas
slug: /reference/api/schemas
description: Schemas Endpoints
keywords:
  - Rest API
---

Schemas Endpoints



## Create a SCIM Schema



<Endpoint method="post" path="/api/v1/scim-schemas/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
body |  | body | [SCIMSchema](/docs/reference/api/api-schemas#scimschema) | true | |


#### Request Example
```json
{
  "attributes": [
    "..."
  ],
  "description": "...",
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
  "name": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The SCIM Schema state after creation. | [SCIMSchema](/docs/reference/api/api-schemas#scimschema)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "attributes": [
    "..."
  ],
  "description": "...",
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
  "name": "..."
}
```











## Get a SCIM Schema



<Endpoint method="get" path="/api/v1/scim-schemas/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the schema to retrieve. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [SCIMSchema](/docs/reference/api/api-schemas#scimschema)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "attributes": [
    "..."
  ],
  "description": "...",
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
  "name": "..."
}
```











## Replace a SCIM Schema



<Endpoint method="put" path="/api/v1/scim-schemas/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the schema to replace. | path | string | true |  |
body |  | body | [SCIMSchema](/docs/reference/api/api-schemas#scimschema) | true | |


#### Request Example
```json
{
  "attributes": [
    "..."
  ],
  "description": "...",
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
  "name": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The SCIM Schema state after replacement. | [SCIMSchema](/docs/reference/api/api-schemas#scimschema)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[412 Precondition Failed](https://tools.ietf.org/html/rfc7231) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "attributes": [
    "..."
  ],
  "description": "...",
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
  "name": "..."
}
```












## Get a JSON Schema



<Endpoint method="get" path="/api/v1/json-schemas/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the schema to retrieve. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [JSONSchema](/docs/reference/api/api-schemas#jsonschema)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "externalId": "...",
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
  }
}
```











## Create JSON Schema



<Endpoint method="post" path="/api/v1/json-schemas/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
body |  | body | [JSONSchema](/docs/reference/api/api-schemas#jsonschema) | true | |


#### Request Example
```json
{
  "externalId": "...",
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
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [JSONSchema](/docs/reference/api/api-schemas#jsonschema)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "externalId": "...",
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
  }
}
```











## replace a JSON Schema



<Endpoint method="put" path="/api/v1/json-schemas/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the schema to replace. | path | string | true |  |
body |  | body | [JSONSchema](/docs/reference/api/api-schemas#jsonschema) | true | |


#### Request Example
```json
{
  "externalId": "...",
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
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [JSONSchema](/docs/reference/api/api-schemas#jsonschema)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "externalId": "...",
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
  }
}
```











import Endpoint from "../../../src/components/Endpoint.js"
