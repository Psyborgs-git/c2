/**
 * @generated SignedSource<<db76f43b14b54b6350a5f6a88de8422a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ClientQuery$variables = {};
export type ClientQuery$data = {
  readonly connection: {
    readonly app: {
      readonly id: string;
      readonly name: string | null;
    } | null;
    readonly contacts: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly company: string | null;
          readonly currentPosition: string | null;
          readonly description: string | null;
          readonly emails: ReadonlyArray<string | null> | null;
          readonly id: string;
          readonly lastUpdated: any;
          readonly mobile: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly countryCode: string;
                readonly id: string;
                readonly number: string;
              } | null;
            } | null>;
          };
          readonly name: string | null;
        } | null;
      } | null>;
    };
    readonly id: string;
    readonly userIsOwner: boolean | null;
  } | null;
  readonly groups: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly contacts: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly emails: ReadonlyArray<string | null> | null;
              readonly id: string;
              readonly mobile: {
                readonly edges: ReadonlyArray<{
                  readonly node: {
                    readonly countryCode: string;
                    readonly id: string;
                    readonly number: string;
                  } | null;
                } | null>;
              };
              readonly name: string | null;
            } | null;
          } | null>;
        };
        readonly id: string;
      } | null;
    } | null>;
  } | null;
};
export type ClientQuery = {
  response: ClientQuery$data;
  variables: ClientQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "countryCode",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emails",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "GroupConnection",
    "kind": "LinkedField",
    "name": "groups",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GroupEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "DetailsConnection",
                "kind": "LinkedField",
                "name": "contacts",
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
                          (v1/*: any*/),
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
                                      (v2/*: any*/),
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
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
    "concreteType": "Connection",
    "kind": "LinkedField",
    "name": "connection",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userIsOwner",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ApplicationType",
        "kind": "LinkedField",
        "name": "app",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "DetailsConnection",
        "kind": "LinkedField",
        "name": "contacts",
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lastUpdated",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "currentPosition",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "company",
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
                              (v3/*: any*/),
                              (v2/*: any*/)
                            ],
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "7028f91f5d55a91a845df0d78b38bb9c",
    "id": null,
    "metadata": {},
    "name": "ClientQuery",
    "operationKind": "query",
    "text": "query ClientQuery {\n  groups {\n    edges {\n      node {\n        id\n        contacts {\n          edges {\n            node {\n              id\n              name\n              mobile {\n                edges {\n                  node {\n                    id\n                    countryCode\n                    number\n                  }\n                }\n              }\n              emails\n            }\n          }\n        }\n      }\n    }\n  }\n  connection {\n    id\n    userIsOwner\n    app {\n      id\n      name\n    }\n    contacts {\n      edges {\n        node {\n          id\n          name\n          description\n          emails\n          lastUpdated\n          currentPosition\n          company\n          mobile {\n            edges {\n              node {\n                id\n                number\n                countryCode\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f79a8678cf6f07a307efaec510d8000b";

export default node;
