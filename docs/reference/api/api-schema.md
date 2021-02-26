---
id: api-schemas
title: API Schemas
sidebar_label: API Schemas
slug: /reference/api/api-schemas
description: API Schemas Reference
keywords:
  - Rest API
---
## ApiToken

#### Example
```json
{
  "active": true,
  "displayName": "...",
  "expiresAt": "2021-02-25T20:49:09.170Z",
  "id": "...",
  "identityId": "...",
  "issuedAt": "2021-02-25T20:49:09.170Z",
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
  "signedToken": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|active | boolean | false |
|displayName | string | false |
|expiresAt | string | false |
|id | string | false |
|identityId | string | false |
|issuedAt | string | false |
|meta | object | false |
|signedToken | string | false |

## App

#### Example
```json
{
  "appId": "...",
  "appLogic": "...",
  "config": "...",
  "displayName": "...",
  "id": "...",
  "keywords": [
    "..."
  ],
  "logoURL": "...",
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
  }
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|appId | string | false |
|appLogic | string | false |
|config |  | false |
|displayName | string | false |
|id | string | false |
|keywords | array | false |
|logoURL | string | false |
|meta | object | false |

## AppChangesBody

#### Example
```json
{
  "appIds": [
    "myapp"
  ],
  "mode": "full"
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|appIds | array | false |
|mode | string | false |

## ApplyChangeLogRequest

#### Example
```json
{}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## ApplyChangeLogResponse

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|logId | string | false |
|report | object | false |

## ApplyChangeReport

#### Example
```json
{
  "detail": "could not find entry in store",
  "id": "...",
  "status": 404
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|detail | string | false |
|id | string | false |
|status | integer | false |

## ApplyChangesReport

#### Example
```json
{
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
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|add | array | false |
|delete | array | false |
|detail | string | false |
|patch | array | false |
|replace | array | false |

## AuthError

#### Example
```json
{
  "code": 2,
  "message": "...",
  "status": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|code | integer | false |
|message | string | false |
|status | string | false |

## AuthErrors

#### Example
```json
{
  "errors": [
    "..."
  ],
  "id": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|errors | array | false |
|id | string | false |

## CancelChangeLogRequest

#### Example
```json
{}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## CancelFlowInstanceRequest

#### Example
```json
{}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## ChangeLog

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|apply | string | false |
|id | string | false |
|meta | object | false |
|note | string | false |
|state | string | false |

## Changelog

#### Example
```json
{
  "apply": "created",
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
  "state": "store"
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|apply | string | false |
|id | string | false |
|meta | object | false |
|note | string | false |
|state | string | false |

## Commit

#### Example
```json
{
  "by": "...",
  "correlation": "...",
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
  "reason": "...",
  "requestId": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|by | string | false |
|correlation | string | false |
|id | string | false |
|meta | object | false |
|reason | string | false |
|requestId | string | false |

## CorrelateResource

#### Example
```json
{
  "corrId": "...",
  "filter": "...",
  "refPath": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|corrId | string | true |
|filter | string | true |
|refPath | string | true |

## DocPatch

#### Example
```json
{
  "created": "2021-02-25T20:49:09.170Z",
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
  "patch": [
    "..."
  ]
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|created | string | false |
|id | string | false |
|meta | object | false |
|patch | array | false |

## EntitlementReqResponse

#### Example
```json
{
  "flowIds": [
    "..."
  ],
  "notCreated": [
    "..."
  ]
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|flowIds | array | false |
|notCreated | array | false |

## EntitlementRequest

#### Example
```json
{
  "operations": [
    "..."
  ]
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|operations | array | false |

## Error

#### Example
```json
{
  "code": 2,
  "message": "...",
  "status": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|code | integer | false |
|message | string | false |
|status | string | false |

## Filter

#### Example
```json
{
  "description": "...",
  "displayName": "...",
  "filter": "...",
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
  "table": "...",
  "template": true
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|description | string | false |
|displayName | string | false |
|filter | string | false |
|id | string | false |
|meta | object | false |
|table | string | false |
|template | boolean | false |

## FlowDefinition

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|StatusExplanations | array | false |
|description | string | false |
|displayName | string | false |
|endedAt | string | false |
|flow | object | false |
|id | string | false |
|startedAt | string | false |
|status | string | false |
|variables |  | false |

## FlowInstance

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|StatusExplanations | array | false |
|description | string | false |
|displayName | string | false |
|endedAt | string | false |
|flow | object | false |
|id | string | false |
|startedAt | string | false |
|status | string | false |
|variables |  | false |

## HealthResponse

#### Example
```json
{
  "errors": {},
  "status": "OK"
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|errors | object | false |
|status | string | true |

## Insight

#### Example
```json
{
  "actions": [
    "..."
  ],
  "displayName": "...",
  "id": "...",
  "insightId": "...",
  "insightModelType": "...",
  "kind": "...",
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
  "modelIds": [
    "..."
  ],
  "payload": "...",
  "readBy": [
    "..."
  ],
  "severity": 2,
  "snoozeUntil": "2021-02-25T20:49:09.170Z",
  "status": "...",
  "tags": [
    "..."
  ]
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|actions | array | false |
|displayName | string | false |
|id | string | false |
|insightId | string | false |
|insightModelType | string | false |
|kind | string | false |
|meta | object | false |
|modelIds | array | false |
|payload |  | false |
|readBy | array | false |
|severity | integer | false |
|snoozeUntil | string | false |
|status | string | false |
|tags | array | false |

## JSONSchema

#### Example
```json
{
  "externalId": "...",
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
  }
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|externalId | string | false |
|id | string | false |
|meta | object | false |

## Job

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|by | string | false |
|commitId | string | false |
|correlation | string | false |
|error | string | false |
|failureSize | integer | false |
|id | string | false |
|kind | string | false |
|lastExecutedAt | string | false |
|meta | object | false |
|notBefore | string | false |
|payload |  | false |
|reason | string | false |
|status | string | false |
|statusCode | integer | false |

## LoginFlow

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|forced | boolean | false |
|id | string | false |
|method | string | false |
|methods | object | false |

## LoginFlowMethod

#### Example
```json
{
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
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|config | object | false |
|method | string | false |

## MapResource

#### Example
```json
{
  "corrId": "...",
  "filter": "...",
  "mapperId": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|corrId | string | true |
|filter | string | true |
|mapperId | string | true |

## Mapper

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|displayName | string | false |
|id | string | false |
|lang | string | false |
|mapper |  | false |
|meta | object | false |
|variables | array | false |

## Meta

#### Example
```json
{
  "appId": "...",
  "commitId": "...",
  "created": "2021-02-25T20:49:09.170Z",
  "lastModified": "2021-02-25T20:49:09.170Z",
  "location": "...",
  "refersToId": "...",
  "resourceType": "...",
  "revision": 2,
  "tenantId": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|appId | string | false |
|commitId | string | false |
|created | string | false |
|lastModified | string | false |
|location | string | false |
|refersToId | string | false |
|resourceType | string | false |
|revision | integer | false |
|tenantId | string | false |

## PatchOP

#### Example
```json
{
  "op": "/replace",
  "path": "/status",
  "value": "canceled"
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|op | string | true |
|path | string | true |
|value |  | true |

## PatchRequest

#### Example
```json
{
  "Operations": [
    "..."
  ],
  "Revision": 2
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|Operations | array | false |
|Revision | integer | false |

## Resource

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|id | string | false |
|meta | object | false |

## ResourceType

#### Example
```json
{
  "appId": "...",
  "description": "...",
  "endpoint": "...",
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
  "mode": "...",
  "name": "...",
  "schema": "...",
  "schemaExtensions": [
    "..."
  ],
  "schemaInterfaces": [
    "..."
  ],
  "toApp": "...",
  "toStore": "...",
  "ui": {
    "edit": [
      "..."
    ],
    "overview": [
      "..."
    ],
    "rules": [
      "..."
    ]
  }
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|appId | string | false |
|description | string | false |
|endpoint | string | false |
|id | string | false |
|meta | object | false |
|mode | string | false |
|name | string | false |
|schema | string | false |
|schemaExtensions | array | false |
|schemaInterfaces | array | false |
|toApp | string | false |
|toStore | string | false |
|ui | object | false |

## Rule

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|active | boolean | false |
|displayName | string | true |
|filter | string | false |
|id | string | true |
|keywords | array | false |
|lifecycle | string | false |
|meta | object | false |
|modelType | string | false |
|result | object | true |

## RuleResult

#### Example
```json
{
  "modelType": "...",
  "op": "...",
  "path": "...",
  "value": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|modelType | string | false |
|op | string | false |
|path | string | false |
|value | interface{} | false |

## RuleResultValue

#### Example
```json
{}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## SCIMSchema

#### Example
```json
{
  "attributes": [
    "..."
  ],
  "description": "...",
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
  "name": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|attributes | array | false |
|description | string | false |
|id | string | false |
|meta | object | false |
|name | string | false |

## SCIMSchemaAttribute

#### Example
```json
{
  "canonicalValues": "work",
  "caseExact": true,
  "description": "phone numbers",
  "multiValued": false,
  "mutability": "readWrite",
  "name": "phoneNumber",
  "noRevision": true,
  "referenceTypes": [
    "..."
  ],
  "required": true,
  "returned": "default",
  "search": {
    "boost": 1,
    "fuzziness": 2
  },
  "subAttributes": [
    "..."
  ],
  "type": "string",
  "uniqueness": "none"
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|canonicalValues | array | false |
|caseExact | boolean | false |
|description | string | false |
|multiValued | boolean | false |
|mutability | string | false |
|name | string | true |
|noRevision | boolean | false |
|referenceTypes | array | false |
|required | boolean | false |
|returned | string | false |
|search | object | false |
|subAttributes | array | false |
|type | string | true |
|uniqueness | string | false |

## Secret

#### Example
```json
{
  "data": {
    "secret": "passwd",
    "user": "root"
  }
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|data | object | false |

## SecretPutBody

#### Example
```json
{
  "data": {
    "secret": "passwd",
    "user": "root"
  }
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|data | object | false |

## Session

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|active | boolean | false |
|authAt | string | false |
|expiresAt | string | false |
|id | string | false |
|identity | object | false |
|identityId | string | false |
|issuedAt | string | false |

## Task

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|assigneeId | string | false |
|description | string | false |
|displayName | string | false |
|due | string | false |
|ended | string | false |
|externalId | string | false |
|flow | object | false |
|formId | string | false |
|groupsIds | array | false |
|id | string | false |
|meta | object | false |
|ownerId | string | false |
|status | string | false |
|usersIds | array | false |
|variables |  | false |

## UserFacingMessage

#### Example
```json
{
  "id": 2,
  "text": "...",
  "type": "info"
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|id | integer | false |
|text | string | false |
|type | string | false |

## apiTokensList

#### Example
```json
{
  "Resources": [
    {
      "active": true,
      "displayName": "...",
      "expiresAt": "2021-02-25T20:49:09.170Z",
      "id": "...",
      "identityId": "...",
      "issuedAt": "2021-02-25T20:49:09.170Z",
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
      "signedToken": "..."
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## appsList

#### Example
```json
{
  "Resources": [
    {
      "appId": "...",
      "appLogic": "...",
      "config": "...",
      "displayName": "...",
      "id": "...",
      "keywords": [
        "..."
      ],
      "logoURL": "...",
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
      }
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## changeLogsList

#### Example
```json
{
  "Resources": [
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
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## commitsList

#### Example
```json
{
  "Resources": [
    {
      "by": "...",
      "correlation": "...",
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
      "reason": "...",
      "requestId": "..."
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## filtersList

#### Example
```json
{
  "Resources": [
    {
      "description": "...",
      "displayName": "...",
      "filter": "...",
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
      "table": "...",
      "template": true
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## flowCancel

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|canceledJobs | array | false |
|flowId | string | false |
|flowStatus | string | false |
|notCanceledJobs | array | false |
|taskIds | array | false |

## flowInstancesList

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## insightList

#### Example
```json
{}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## jobsList

#### Example
```json
{
  "Resources": [
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
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## list

#### Example
```json
{
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|itemsPerPage | integer | false |
|startIndex | integer | false |
|totalResults | integer | false |

## mappersList

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## patchesList

#### Example
```json
{
  "Resources": [
    {
      "created": "2021-02-25T20:49:09.170Z",
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
      "patch": [
        "..."
      ]
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## refsReqBody

#### Example
```json
{
  "limitAppIds": [
    "..."
  ]
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|limitAppIds | array | true |

## resourceDiffReq

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|current | object | true |
|desired | object | true |
|ignoreKeys | array | false |
|location | string | true |

## resourceDiffRes

#### Example
```json
{
  "operations": [
    "..."
  ]
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|operations | array | false |

## resourceEval

#### Example
```json
{
  "effective": [
    "..."
  ],
  "explanation": {}
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|effective | array | false |
|explanation | object | false |

## resourceList

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## resourceRules

#### Example
```json
{
  "Patch": [
    "..."
  ],
  "filter": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|Patch | array | false |
|filter | string | false |

## resourceTypesList

#### Example
```json
{
  "Resources": [
    {
      "appId": "...",
      "description": "...",
      "endpoint": "...",
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
      "mode": "...",
      "name": "...",
      "schema": "...",
      "schemaExtensions": [
        "..."
      ],
      "schemaInterfaces": [
        "..."
      ],
      "toApp": "...",
      "toStore": "...",
      "ui": {
        "edit": [
          "..."
        ],
        "overview": [
          "..."
        ],
        "rules": [
          "..."
        ]
      }
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## resourcesList

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## rulesList

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## searchBody

#### Example
```json
{
  "appIds": [
    "..."
  ],
  "attributes": [
    "..."
  ],
  "count": 2,
  "searchFor": "...",
  "startIndex": 2,
  "term": "..."
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |
|appIds | array | false |
|attributes | array | false |
|count | integer | false |
|searchFor | string | true |
|startIndex | integer | false |
|term | string | false |

## secretsList

#### Example
```json
{
  "Resources": [
    {
      "data": {
        "secret": "passwd",
        "user": "root"
      }
    }
  ],
  "itemsPerPage": 10,
  "startIndex": 1,
  "totalResults": 100
}
```

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

## tasksList

#### Example
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

#### Properties
|Name	| Type	| Required	| Description
| ----- | ----- | --------  | ----------- |

