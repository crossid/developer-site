---
id: health
title: Health
sidebar_label: Health
slug: /reference/api/health
description: Node Health Endpoints
keywords:
  - Rest API
---

Node Health Endpoints



## Check aliveness

This endpoint returns an ok status (200) if the node is healthy or service unavailable (503) otherwise.
This endpoint does not check the aliveness of a cluster rather a single node.


<Endpoint method="get" path="/api/v1/health/alive"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | node is alive. | [HealthResponse](/docs/reference/api/api-schemas#healthresponse)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)
[503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4) | health problem. | [HealthResponse](/docs/reference/api/api-schemas#healthresponse)



##### Response Example
```json
{
  "status": "OK"
}
```









## Check readiness

This endpoint returns an ok status (200) if the node is ready to handle requests.


<Endpoint method="get" path="/api/v1/health/ready"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | node is ready. | [HealthResponse](/docs/reference/api/api-schemas#healthresponse)
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)
[503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4) | health problem. | [HealthResponse](/docs/reference/api/api-schemas#healthresponse)



##### Response Example
```json
{
  "status": "OK"
}
```









import Endpoint from "../../../src/components/Endpoint.js"
