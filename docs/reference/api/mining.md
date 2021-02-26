---
id: mining
title: Mining
sidebar_label: Mining
slug: /reference/api/mining
description: Data mining and role clustering Endpoints
keywords:
  - Rest API
---

Data mining and role clustering Endpoints



## Send classication data to ML server.



<Endpoint method="post" path="/api/v1/mining/export-classification-data"/>

#### Request Parameters

| Parameter     |      Description      |  Param Type | Data Type | Required | Default
| ------------- | -----------         | ----       | ----     | ----    | ------ |




#### Responses

| Status     |     Description       |  Schema
| ---------- | :--------------:      | -------:|
[200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | The data was posted to the ML server successfuly | 
[400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | The submitted request is invalid. | [BadRequest](/docs/reference/api/api-schemas#badrequest)
[401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Client is not authenticated. | [Unauthorized](/docs/reference/api/api-schemas#unauthorized)
[403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Client is not authorized to perform the requested action. | [Forbidden](/docs/reference/api/api-schemas#forbidden)
[404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | The specified resource was not found. | [NotFound](/docs/reference/api/api-schemas#notfound)
[500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | An internal error has occured. | [InternalError](/docs/reference/api/api-schemas#internalerror)



##### Response Example












import Endpoint from "../../../src/components/Endpoint.js"
