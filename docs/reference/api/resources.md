---
id: resources
title: Resources
sidebar_label: Resources
slug: /reference/api/resources
description: Resources Endpoints
keywords:
  - Rest API
---

Resources Endpoints



## List Resources

This endpoint queries against resources across all applications and types.

<Endpoint method="get" path="/api/v1/resources/"/>

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
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of resources. | [resourcesList](/docs/reference/api/api-schemas#resourceslist)
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










## List Resources for a Type

This endpoint queries against resources of a specific resources type.

<Endpoint method="get" path="/api/v1/resources/{appID}/{resourceTypes}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
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
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of resources. | [resourcesList](/docs/reference/api/api-schemas#resourceslist)
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










## List rules applying on a Resource

List rules matching a filter and also apply on a Resource, if all requested patches were applied.


<Endpoint method="post" path="/api/v1/resources/{appID}/{resourceTypes}/{id}/.rules"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
body |  | body | [resourceRules](/docs/reference/api/api-schemas#resourcerules) | true | |


#### Request Example
```json
{
  "Patch": [
    "..."
  ],
  "filter": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request. | [rulesList](/docs/reference/api/api-schemas#ruleslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
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











## Get a Resource



<Endpoint method="get" path="/api/v1/resources/{appID}/{resourceTypes}/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| forTime | a date time indicating that the requested resources should be retrieved from history as how they looked for the specified time. | query | string | false |  |
| live | true if the resource should be fetched directly from the application rather from store. | query | boolean | false |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [Resource](/docs/reference/api/api-schemas#resource)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "displayName": "Administrators",
  "id": "3NUzqrq3s2tB3Wcg6b2eyi",
  "meta": {
    "appId": "azuread",
    "resourceType": "Group"
  }
}
```











## Create a Resource

This endpoint creates a new resource. The resource may be created locally on store or provisioned to the remote app, depends on application configuration.


<Endpoint method="post" path="/api/v1/resources/{appID}/{resourceTypes}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [Resource](/docs/reference/api/api-schemas#resource) | true | |


#### Request Example
```json
{
  "displayName": "Administrators",
  "id": "3NUzqrq3s2tB3Wcg6b2eyi",
  "meta": {
    "appId": "azuread",
    "resourceType": "Group"
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Expected response to a valid request. | [Resource](/docs/reference/api/api-schemas#resource)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)












## Create a Resource Asynchonously



<Endpoint method="post" path="/api/v1/resources/{appID}/{resourceTypes}/.async"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| notBefore | the time where the operation should be executed. | query | string | false |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [Resource](/docs/reference/api/api-schemas#resource) | true | |


#### Request Example
```json
{
  "displayName": "Administrators",
  "id": "3NUzqrq3s2tB3Wcg6b2eyi",
  "meta": {
    "appId": "azuread",
    "resourceType": "Group"
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request. | [Job](/docs/reference/api/api-schemas#job)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "by": "...",
  "commitId": "...",
  "correlation": "...",
  "error": "...",
  "failureSize": 2,
  "id": "...",
  "kind": "...",
  "lastExecutedAt": "2021-02-25T20:49:09.170Z",
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
  "notBefore": "2021-02-25T20:49:09.170Z",
  "payload": "...",
  "reason": "...",
  "status": "...",
  "statusCode": 2
}
```











## Replace a Resource

This endpoint replaces an existing resource.


<Endpoint method="put" path="/api/v1/resources/{appID}/{resourceTypes}/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [Resource](/docs/reference/api/api-schemas#resource) | true | |


#### Request Example
```json
{
  "displayName": "Administrators",
  "id": "3NUzqrq3s2tB3Wcg6b2eyi",
  "meta": {
    "appId": "azuread",
    "resourceType": "Group"
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Expected response to a valid request. | [Resource](/docs/reference/api/api-schemas#resource)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)












## Replace a Resource Asynchonously



<Endpoint method="put" path="/api/v1/resources/{appID}/{resourceTypes}/{id}/.async"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| notBefore | the time where the operation should be executed. | query | string | false |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [Resource](/docs/reference/api/api-schemas#resource) | true | |


#### Request Example
```json
{
  "displayName": "Administrators",
  "id": "3NUzqrq3s2tB3Wcg6b2eyi",
  "meta": {
    "appId": "azuread",
    "resourceType": "Group"
  }
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request. | [Job](/docs/reference/api/api-schemas#job)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "by": "...",
  "commitId": "...",
  "correlation": "...",
  "error": "...",
  "failureSize": 2,
  "id": "...",
  "kind": "...",
  "lastExecutedAt": "2021-02-25T20:49:09.170Z",
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
  "notBefore": "2021-02-25T20:49:09.170Z",
  "payload": "...",
  "reason": "...",
  "status": "...",
  "statusCode": 2
}
```











## Update a Resource

This endpoint patches an existing resource.


<Endpoint method="patch" path="/api/v1/resources/{appID}/{resourceTypes}/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body | a request to patch (update) a single model | body | [PatchRequest](/docs/reference/api/api-schemas#patchrequest) | true | |


#### Request Example
```json
{
  "Operations": [
    "..."
  ],
  "Revision": 2
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Expected response to a valid request. | [Resource](/docs/reference/api/api-schemas#resource)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)












## Update a Resource Asynchonously



<Endpoint method="patch" path="/api/v1/resources/{appID}/{resourceTypes}/{id}/.async"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| notBefore | the time where the operation should be executed. | query | string | false |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body | a request to patch (update) a single model | body | [PatchRequest](/docs/reference/api/api-schemas#patchrequest) | true | |


#### Request Example
```json
{
  "Operations": [
    "..."
  ],
  "Revision": 2
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request. | [Job](/docs/reference/api/api-schemas#job)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "by": "...",
  "commitId": "...",
  "correlation": "...",
  "error": "...",
  "failureSize": 2,
  "id": "...",
  "kind": "...",
  "lastExecutedAt": "2021-02-25T20:49:09.170Z",
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
  "notBefore": "2021-02-25T20:49:09.170Z",
  "payload": "...",
  "reason": "...",
  "status": "...",
  "statusCode": 2
}
```











## Delete a Resource



<Endpoint method="delete" path="/api/v1/resources/{appID}/{resourceTypes}/{id}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[204 No Content](https://tools.ietf.org/html/rfc7231) | Expected response to a valid request. | 
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)













## Delete a Resource Asynchonously



<Endpoint method="delete" path="/api/v1/resources/{appID}/{resourceTypes}/{id}/.async"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| notBefore | the time where the operation should be executed. | query | string | false |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request. | [Job](/docs/reference/api/api-schemas#job)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "by": "...",
  "commitId": "...",
  "correlation": "...",
  "error": "...",
  "failureSize": 2,
  "id": "...",
  "kind": "...",
  "lastExecutedAt": "2021-02-25T20:49:09.170Z",
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
  "notBefore": "2021-02-25T20:49:09.170Z",
  "payload": "...",
  "reason": "...",
  "status": "...",
  "statusCode": 2
}
```











## Test a Resource Against a Filter



<Endpoint method="get" path="/api/v1/resources/{appID}/{resourceTypes}/{id}/.test"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |
| filter | The filter string used to request a subset of models. | query | string | false |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request. | object
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "match": true
}
```











## Diffing Resources

This endpoint diffs resource

<Endpoint method="post" path="/api/v1/resources/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
body |  | body | [resourceDiffReq](/docs/reference/api/api-schemas#resourcediffreq) | true | |


#### Request Example
```json
{
  "current": {
    "displayName": "Administrators",
    "id": "3NUzqrq3s2tB3Wcg6b2eyi",
    "meta": {
      "appId": "azuread",
      "resourceType": "Group"
    }
  },
  "desired": {
    "displayName": "Administrators",
    "id": "3NUzqrq3s2tB3Wcg6b2eyi",
    "meta": {
      "appId": "azuread",
      "resourceType": "Group"
    }
  },
  "ignoreKeys": [
    "..."
  ],
  "location": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | successful diff req | [resourceDiffRes](/docs/reference/api/api-schemas#resourcediffres)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "operations": [
    "..."
  ]
}
```










## Correlate Resources

Correlate resources into other resources by filter

<Endpoint method="post" path="/api/v1/resources/.correlate"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [CorrelateResource](/docs/reference/api/api-schemas#correlateresource) | true | |


#### Request Example
```json
{
  "corrId": "...",
  "filter": "...",
  "refPath": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A changelog | [ChangeLog](/docs/reference/api/api-schemas#changelog)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "apply": "...",
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
  "note": "...",
  "state": "..."
}
```










## Map Resources

Map resources into other resources by filter

<Endpoint method="post" path="/api/v1/resources/.map"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [MapResource](/docs/reference/api/api-schemas#mapresource) | true | |


#### Request Example
```json
{
  "corrId": "...",
  "filter": "...",
  "mapperId": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A changelog | [ChangeLog](/docs/reference/api/api-schemas#changelog)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "apply": "...",
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
  "note": "...",
  "state": "..."
}
```










## Get Desired Resource

Get a desired state of a resource, taking into account roles and business rules.

<Endpoint method="get" path="/api/v1/resources/{appID}/{resourceTypes}/{id}/.desired/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| appID | The id of the app the resource belongs to. | path | string | true |  |
| resourceTypes | the type of the resource. | path | string | true |  |
| id | the unique identifier of the resource. | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Resource state calculated successfuly | [Resource](/docs/reference/api/api-schemas#resource)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "displayName": "Administrators",
  "id": "3NUzqrq3s2tB3Wcg6b2eyi",
  "meta": {
    "appId": "azuread",
    "resourceType": "Group"
  }
}
```











import Endpoint from "../../../src/components/Endpoint.js"
