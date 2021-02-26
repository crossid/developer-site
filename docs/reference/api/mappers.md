---
id: mappers
title: Mappers
sidebar_label: Mappers
slug: /reference/api/mappers
description: Mappers Endpoints
keywords:
  - Rest API
---

Mappers Endpoints



## List Mappers



<Endpoint method="get" path="/api/v1/mappers/"/>

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
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of mappers. | [mappersList](/docs/reference/api/api-schemas#mapperslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "Resources": [
    {
      "displayName": "...",
      "id": "...",
      "lang": "...",
      "mapper": "...",
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
      "variables": [
        "..."
      ]
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```










## Get a Mapper



<Endpoint method="get" path="/api/v1/mappers/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the mappers to retrieve. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [Mapper](/docs/reference/api/api-schemas#mapper)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```











## Replace a Mapper



<Endpoint method="put" path="/api/v1/mappers/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the mappers to replace. | path | string | true |  |
body |  | body | [Mapper](/docs/reference/api/api-schemas#mapper) | true | |


#### Request Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The mapper state after replacement. | [Mapper](/docs/reference/api/api-schemas#mapper)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[412 Precondition Failed](https://tools.ietf.org/html/rfc7231) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```












## Update a Mapper



<Endpoint method="patch" path="/api/v1/mappers/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the mapper to patch. | path | string | true |  |
body |  | body | [Mapper](/docs/reference/api/api-schemas#mapper) | true | |


#### Request Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The mapper state after the update. | [Mapper](/docs/reference/api/api-schemas#mapper)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```











## Create a mapper



<Endpoint method="post" path="/api/v1/mappers/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
body |  | body | [Mapper](/docs/reference/api/api-schemas#mapper) | true | |


#### Request Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The mapper state after creation. | [Mapper](/docs/reference/api/api-schemas#mapper)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "displayName": "...",
  "id": "...",
  "lang": "...",
  "mapper": "...",
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
  "variables": [
    "..."
  ]
}
```











import Endpoint from "../../../src/components/Endpoint.js"
