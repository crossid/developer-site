---
id: rules
title: Rules
sidebar_label: Rules
slug: /reference/api/rules
description: rules Endpoints
keywords:
  - Rest API
---

rules Endpoints



## List Rules



<Endpoint method="get" path="/api/v1/rules/"/>

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
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of rules. | [rulesList](/docs/reference/api/api-schemas#ruleslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "Resources": [
    {
      "active": true,
      "displayName": "...",
      "filter": "...",
      "id": "...",
      "keywords": [
        "..."
      ],
      "lifecycle": "...",
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
      "modelType": "...",
      "result": {
        "modelType": "...",
        "op": "...",
        "path": "...",
        "value": "..."
      }
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```










## Get a Rule



<Endpoint method="get" path="/api/v1/rules/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the rules to retrieve. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [Rule](/docs/reference/api/api-schemas#rule)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "active": true,
  "displayName": "...",
  "filter": "...",
  "id": "...",
  "keywords": [
    "..."
  ],
  "lifecycle": "...",
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
  "modelType": "...",
  "result": {
    "modelType": "...",
    "op": "...",
    "path": "...",
    "value": "..."
  }
}
```











## Create a Rule



<Endpoint method="post" path="/api/v1/rules/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
body |  | body | [Rule](/docs/reference/api/api-schemas#rule) | true | |


#### Request Example
```json
{
  "active": true,
  "displayName": "...",
  "filter": "...",
  "id": "...",
  "keywords": [
    "..."
  ],
  "lifecycle": "...",
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
  "modelType": "...",
  "result": {
    "modelType": "...",
    "op": "...",
    "path": "...",
    "value": "..."
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The Rule state after creation. | [Rule](/docs/reference/api/api-schemas#rule)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "active": true,
  "displayName": "...",
  "filter": "...",
  "id": "...",
  "keywords": [
    "..."
  ],
  "lifecycle": "...",
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
  "modelType": "...",
  "result": {
    "modelType": "...",
    "op": "...",
    "path": "...",
    "value": "..."
  }
}
```











## Replace a Rule



<Endpoint method="put" path="/api/v1/rules/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the rule to replace. | path | string | true |  |
body |  | body | [Rule](/docs/reference/api/api-schemas#rule) | true | |


#### Request Example
```json
{
  "active": true,
  "displayName": "...",
  "filter": "...",
  "id": "...",
  "keywords": [
    "..."
  ],
  "lifecycle": "...",
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
  "modelType": "...",
  "result": {
    "modelType": "...",
    "op": "...",
    "path": "...",
    "value": "..."
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The Rule state after the update. | [Rule](/docs/reference/api/api-schemas#rule)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "active": true,
  "displayName": "...",
  "filter": "...",
  "id": "...",
  "keywords": [
    "..."
  ],
  "lifecycle": "...",
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
  "modelType": "...",
  "result": {
    "modelType": "...",
    "op": "...",
    "path": "...",
    "value": "..."
  }
}
```











## Delete a Rule



<Endpoint method="delete" path="/api/v1/rules/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| id | The id of the rule to delete. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[204 No Content](https://tools.ietf.org/html/rfc7231) | The Rule was deleted successfully. | 
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)













import Endpoint from "../../../src/components/Endpoint.js"
