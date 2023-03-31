/**
 * @generated SignedSource<<d449809ebdb780d70d964c5a9b81302f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Clients_data$data = {
  readonly userAccount: {
    readonly clients: {
      readonly edges: ReadonlyArray<{
        readonly node: {
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
    } | null;
    readonly id: string;
  } | null;
  readonly " $fragmentType": "Clients_data";
};
export type Clients_data$key = {
  readonly " $data"?: Clients_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"Clients_data">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "userAccount",
  "clients"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./ClientsQuery_clients.graphql')
    }
  },
  "name": "Clients_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TextileAccount",
      "kind": "LinkedField",
      "name": "userAccount",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": "clients",
          "args": [
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
          ],
          "concreteType": "DetailsConnection",
          "kind": "LinkedField",
          "name": "__Clients_clients_connection",
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
                    (v1/*: any*/),
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
                                (v1/*: any*/),
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "58215c368ef10067f47996b074d082e5";

export default node;
