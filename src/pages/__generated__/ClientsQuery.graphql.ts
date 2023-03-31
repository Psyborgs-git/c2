/**
 * @generated SignedSource<<69d7e31c288addd58d2e5e32adc59a05>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsQuery$variables = {};
export type ClientsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Clients_data">;
};
export type ClientsQuery = {
  response: ClientsQuery$data;
  variables: ClientsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Clients_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TextileAccount",
        "kind": "LinkedField",
        "name": "userAccount",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                      (v0/*: any*/),
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
                                  (v0/*: any*/),
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
            "storageKey": "clients(first:10)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
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
    "cacheID": "338305d865123bff49ee58395cb7a304",
    "id": null,
    "metadata": {},
    "name": "ClientsQuery",
    "operationKind": "query",
    "text": "query ClientsQuery {\n  ...Clients_data\n}\n\nfragment Clients_data on Query {\n  userAccount {\n    id\n    clients(first: 10) {\n      edges {\n        node {\n          id\n          name\n          mobile {\n            edges {\n              node {\n                id\n                countryCode\n                number\n              }\n            }\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3282845ca80a5ab1db3008999e3477b2";

export default node;
