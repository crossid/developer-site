---
id: login
title: Login
sidebar_label: Login
slug: /reference/api/login
description: Login Endpoints
keywords:
  - Rest API
---

Login Endpoints



## Info for a specific login flow.



<Endpoint method="get" path="/api/v1/auth/self-service/login/flows"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| id | The id of the flow to retrieve | query | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [LoginFlow](/docs/reference/api/api-schemas#loginflow)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "forced": true,
  "id": "...",
  "method": "...",
  "methods": {
    "password": {
      "config": {
        "action": "...",
        "fields": [
          "..."
        ],
        "messages": [
          "..."
        ],
        "method": "..."
      },
      "method": "..."
    },
    "spnego": {
      "config": {
        "action": "...",
        "fields": [
          "..."
        ],
        "messages": [
          "..."
        ],
        "method": "..."
      },
      "method": "..."
    }
  }
}
```









import Endpoint from "../../../src/components/Endpoint.js"
