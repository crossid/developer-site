---
id: changes
title: Changes
sidebar_label: Changes
slug: /reference/api/changes
description: Changes Endpoints
keywords:
  - Rest API
---

Changes Endpoints



## Apply a ChangeLog

Use apply in order to apply discovered changes.

The discovered changes may be applied directly on store or via jobs.
when applied via jobs, the changes will affect connected applications.


<Endpoint method="post" path="/api/v1/changes/{id}/.apply"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the changeLog to apply. | path | string | true |  |
| reason | a descriptive reason of the change | query | string | false |  |
| correlation | a unique identifier of an external resource where this change should be correlated to | query | string | false |  |
body | a JSON containing the information required to apply a ChangeLog. | body | [ApplyChangeLogRequest](/docs/reference/api/api-schemas#applychangelogrequest) | true | |


#### Request Example
```json
{}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A report containing possible faults. | [ApplyChangeLogResponse](/docs/reference/api/api-schemas#applychangelogresponse)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "logId": "...",
  "report": {
    "add": [
      "..."
    ],
    "delete": [
      "..."
    ],
    "detail": "applied on store",
    "patch": [
      "..."
    ],
    "replace": [
      "..."
    ]
  }
}
```










import Endpoint from "../../../src/components/Endpoint.js"
