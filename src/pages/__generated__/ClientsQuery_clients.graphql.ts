/**
 * @generated SignedSource<<626ffffaf9115f82621190d1aa1b58b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsQuery_clients$variables = {
  after?: string | null;
  createdAfter?: any | null;
  createdBefore?: any | null;
  first?: number | null;
  mobile?: string | null;
  name?: string | null;
  nickname?: string | null;
};
export type ClientsQuery_clients$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Clients_data">;
};
export type ClientsQuery_clients = {
  response: ClientsQuery_clients$data;
  variables: ClientsQuery_clients$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "createdAfter"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "createdBefore"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "mobile"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "nickname"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "createdAt_Gt",
    "variableName": "createdAfter"
  },
  {
    "kind": "Variable",
    "name": "createdAt_Lt",
    "variableName": "createdBefore"
  },
  (v2/*: any*/),
  {
    "kind": "Variable",
    "name": "mobile_Number_Icontains",
    "variableName": "mobile"
  },
  {
    "kind": "Variable",
    "name": "name_Icontains",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "nickname_Icontains",
    "variableName": "nickname"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsQuery_clients",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          {
            "kind": "Variable",
            "name": "createdAfter",
            "variableName": "createdAfter"
          },
          {
            "kind": "Variable",
            "name": "createdBefore",
            "variableName": "createdBefore"
          },
          (v2/*: any*/),
          {
            "kind": "Variable",
            "name": "mobile",
            "variableName": "mobile"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "nickname",
            "variableName": "nickname"
          }
        ],
        "kind": "FragmentSpread",
        "name": "Clients_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsQuery_clients",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TextileAccount",
        "kind": "LinkedField",
        "name": "userAccount",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "DetailsConnection",
            "kind": "LinkedField",
            "name": "clients",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DetailsEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Details",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MobileNumberConnection",
                        "kind": "LinkedField",
                        "name": "mobile",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "MobileNumberEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MobileNumber",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "countryCode",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "number",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "filters": [
              "nickname_Icontains",
              "name_Icontains",
              "createdAt_Lt",
              "createdAt_Gt",
              "mobile_Number_Icontains"
            ],
            "handle": "connection",
            "key": "Clients_clients",
            "kind": "LinkedHandle",
            "name": "clients"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ffc3989d561a5fd96012f18bae1a933d",
    "id": null,
    "metadata": {},
    "name": "ClientsQuery_clients",
    "operationKind": "query",
    "text": "query ClientsQuery_clients(\n  $after: String\n  $createdAfter: DateTime\n  $createdBefore: DateTime\n  $first: Int = 10\n  $mobile: String\n  $name: String\n  $nickname: String\n) {\n  ...Clients_data_4BcWMT\n}\n\nfragment Clients_data_4BcWMT on Query {\n  userAccount {\n    id\n    clients(first: $first, after: $after, nickname_Icontains: $nickname, name_Icontains: $name, createdAt_Lt: $createdBefore, createdAt_Gt: $createdAfter, mobile_Number_Icontains: $mobile) {\n      edges {\n        node {\n          id\n          name\n          mobile {\n            edges {\n              node {\n                id\n                countryCode\n                number\n              }\n            }\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "58215c368ef10067f47996b074d082e5";

export default node;
