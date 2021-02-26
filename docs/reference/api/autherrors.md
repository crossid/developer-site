---
id: auth-errors
title: Auth Errors
sidebar_label: Auth Errors
slug: /reference/api/auth-errors
description: Authentication Errors Endpoints
keywords:
  - Rest API
---

Authentication Errors Endpoints



## Info for a specific errors.



<Endpoint method="get" path="/api/v1/auth/auth-errors/"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |
| error | The id of the errors document to retrieve | query | string | true |  |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Expected response to a valid request | [AuthErrors](/docs/reference/api/api-schemas#autherrors)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example
```json
{
  "errors": [
    "..."
  ],
  "id": "..."
}
```









import Endpoint from "../../../src/components/Endpoint.js"
