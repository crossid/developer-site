---
id: flows
title: Flows
sidebar_label: Flows
slug: /reference/api/flows
description: Flows and Tasks endpoints
keywords:
  - Rest API
---

Flows and Tasks endpoints



## List Flow Instances



<Endpoint method="get" path="/api/v1/flows/"/>

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
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of flow instances. | [flowInstancesList](/docs/reference/api/api-schemas#flowinstanceslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "Resources": [
    {
      "StatusExplanations": [
        "..."
      ],
      "description": "...",
      "displayName": "...",
      "endedAt": "2021-02-25T20:49:09.170Z",
      "flow": {
        "displayName": "...",
        "externalId": "...",
        "id": "...",
        "version": 2
      },
      "id": "...",
      "startedAt": "2021-02-25T20:49:09.170Z",
      "status": "...",
      "variables": "..."
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```










## Get Flow Instance



<Endpoint method="get" path="/api/v1/flows/{flowInstanceId}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| flowInstanceId | The id of the flow instance to retrieve | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A single flow instance. | [FlowInstance](/docs/reference/api/api-schemas#flowinstance)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "StatusExplanations": [
    "..."
  ],
  "description": "...",
  "displayName": "...",
  "endedAt": "2021-02-25T20:49:09.170Z",
  "flow": {
    "displayName": "...",
    "externalId": "...",
    "id": "...",
    "version": 2
  },
  "id": "...",
  "startedAt": "2021-02-25T20:49:09.170Z",
  "status": "...",
  "variables": "..."
}
```











## Cancel Flow Instance



<Endpoint method="post" path="/api/v1/flows/{flowInstanceId}/.cancel"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
| flowInstanceId | The id of the flow instance to cancel | path | string | true |  |
body | a JSON containing the information required to cancel a Flow Instance. | body | [CancelFlowInstanceRequest](/docs/reference/api/api-schemas#cancelflowinstancerequest) | true | |


#### Request Example
```json
{}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Flow was canclled successfully along with all it's jobs | [flowCancel](/docs/reference/api/api-schemas#flowcancel)
[207 Multi-Status](https://tools.ietf.org/html/rfc7231) | Flow was canclled successfully but some of it's jobs failed to cancel | [flowCancel](/docs/reference/api/api-schemas#flowcancel)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "canceledJobs": [
    "..."
  ],
  "flowId": "...",
  "flowStatus": "...",
  "notCanceledJobs": [
    "..."
  ],
  "taskIds": [
    "..."
  ]
}
```












## List Tasks



<Endpoint method="get" path="/api/v1/flows/tasks"/>

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
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A paged list of tasks. | [tasksList](/docs/reference/api/api-schemas#taskslist)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "Resources": [
    {
      "assigneeId": "...",
      "description": "...",
      "displayName": "...",
      "due": "2021-02-25T20:49:09.170Z",
      "ended": "2021-02-25T20:49:09.170Z",
      "externalId": "...",
      "flow": {
        "flowExternalId": "...",
        "flowInstanceKey": "...",
        "flowKey": "..."
      },
      "formId": "...",
      "groupsIds": [
        "..."
      ],
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
      "ownerId": "...",
      "status": "...",
      "usersIds": [
        "..."
      ],
      "variables": "..."
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```










## Get a Task



<Endpoint method="get" path="/api/v1/flows/tasks/{taskId}"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| taskId | The id of the task instance to retrieve | path | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A single task. | [Task](/docs/reference/api/api-schemas#task)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "assigneeId": "...",
  "description": "...",
  "displayName": "...",
  "due": "2021-02-25T20:49:09.170Z",
  "ended": "2021-02-25T20:49:09.170Z",
  "externalId": "...",
  "flow": {
    "flowExternalId": "...",
    "flowInstanceKey": "...",
    "flowKey": "..."
  },
  "formId": "...",
  "groupsIds": [
    "..."
  ],
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
  "ownerId": "...",
  "status": "...",
  "usersIds": [
    "..."
  ],
  "variables": "..."
}
```











## Complete a Task



<Endpoint method="post" path="/api/v1/flows/tasks/{taskId}/.complete"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
| taskId | The id of the task instance to complete | path | string | true |  |
body |  | body | [](/docs/reference/api/api-schemas#) | true | |


#### Request Example
```json
{
  "variables": {}
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A single task. | [Task](/docs/reference/api/api-schemas#task)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "assigneeId": "...",
  "description": "...",
  "displayName": "...",
  "due": "2021-02-25T20:49:09.170Z",
  "ended": "2021-02-25T20:49:09.170Z",
  "externalId": "...",
  "flow": {
    "flowExternalId": "...",
    "flowInstanceKey": "...",
    "flowKey": "..."
  },
  "formId": "...",
  "groupsIds": [
    "..."
  ],
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
  "ownerId": "...",
  "status": "...",
  "usersIds": [
    "..."
  ],
  "variables": "..."
}
```











## Cancel a Task



<Endpoint method="post" path="/api/v1/flows/tasks/{taskId}/.cancel"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
| taskId | The id of the task instance to cancel | path | string | true |  |
body |  | body | [](/docs/reference/api/api-schemas#) | true | |


#### Request Example
```json
{}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A single task. | [Task](/docs/reference/api/api-schemas#task)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "assigneeId": "...",
  "description": "...",
  "displayName": "...",
  "due": "2021-02-25T20:49:09.170Z",
  "ended": "2021-02-25T20:49:09.170Z",
  "externalId": "...",
  "flow": {
    "flowExternalId": "...",
    "flowInstanceKey": "...",
    "flowKey": "..."
  },
  "formId": "...",
  "groupsIds": [
    "..."
  ],
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
  "ownerId": "...",
  "status": "...",
  "usersIds": [
    "..."
  ],
  "variables": "..."
}
```











## Create a Task



<Endpoint method="post" path="/api/v1/flows/tasks"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body |  | body | [Task](/docs/reference/api/api-schemas#task) | true | |


#### Request Example
```json
{
  "assigneeId": "...",
  "description": "...",
  "displayName": "...",
  "due": "2021-02-25T20:49:09.170Z",
  "ended": "2021-02-25T20:49:09.170Z",
  "externalId": "...",
  "flow": {
    "flowExternalId": "...",
    "flowInstanceKey": "...",
    "flowKey": "..."
  },
  "formId": "...",
  "groupsIds": [
    "..."
  ],
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
  "ownerId": "...",
  "status": "...",
  "usersIds": [
    "..."
  ],
  "variables": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The task's state after creation. | [Task](/docs/reference/api/api-schemas#task)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "assigneeId": "...",
  "description": "...",
  "displayName": "...",
  "due": "2021-02-25T20:49:09.170Z",
  "ended": "2021-02-25T20:49:09.170Z",
  "externalId": "...",
  "flow": {
    "flowExternalId": "...",
    "flowInstanceKey": "...",
    "flowKey": "..."
  },
  "formId": "...",
  "groupsIds": [
    "..."
  ],
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
  "ownerId": "...",
  "status": "...",
  "usersIds": [
    "..."
  ],
  "variables": "..."
}
```











import Endpoint from "../../../src/components/Endpoint.js"
