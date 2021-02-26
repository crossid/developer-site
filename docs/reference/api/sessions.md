---
id: sessions
title: Sessions
sidebar_label: Sessions
slug: /reference/api/sessions
description: Sessions Endpoints
keywords:
  - Rest API
---

Sessions Endpoints



## Check who the current HTTP session belongs to



<Endpoint method="get" path="/api/v1/auth/sessions/whoami"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| Authorization |  | header | string | false |  |
| Cookie |  | header | string | false |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A session object belongs to the HTTP session. | [Session](/docs/reference/api/api-schemas#session)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "active": true,
  "authAt": "2021-02-25T20:49:09.170Z",
  "expiresAt": "2021-02-25T20:49:09.170Z",
  "id": "QE8WQvyqF7WTfABCq5mhRi",
  "identity": {
    "displayName": "Eric Crose"
  },
  "identityId": "8KCibRUhRDsaz5CmaAbmWB",
  "issuedAt": "2021-02-25T20:49:09.170Z"
}
```








## Invalidates a session



<Endpoint method="delete" path="/api/v1/auth/sessions/revoke"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
body |  | body | [](/docs/reference/api/api-schemas#) | true | |


#### Request Example
```json
{
  "sessionToken": "..."
}
```


#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[204 No Content](https://tools.ietf.org/html/rfc7231) | Session invalidated. | 
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)









import Endpoint from "../../../src/components/Endpoint.js"
