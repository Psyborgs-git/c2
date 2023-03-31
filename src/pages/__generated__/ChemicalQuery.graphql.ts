/**
 * @generated SignedSource<<5223d03e79498e20225096df72f8400f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChemicalQuery$variables = {};
export type ChemicalQuery$data = {
  readonly chemicals: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ChemicalFragment_data">;
      } | null;
    } | null>;
  } | null;
  readonly userContents: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly text: string | null;
        readonly type: string | null;
        readonly url: string | null;
      } | null;
    } | null>;
  } | null;
};
export type ChemicalQuery = {
  response: ChemicalQuery$data;
  variables: ChemicalQuery$variables;
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
  "concreteType": "ContentTypeConnection",
  "kind": "LinkedField",
  "name": "userContents",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ContentTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ContentType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ChemicalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ChemicalConnection",
        "kind": "LinkedField",
        "name": "chemicals",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ChemicalEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Chemical",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ChemicalFragment_data"
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
      (v1/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ChemicalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ChemicalConnection",
        "kind": "LinkedField",
        "name": "chemicals",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ChemicalEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Chemical",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IngredientConnection",
                    "kind": "LinkedField",
                    "name": "recipee",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "IngredientEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ingredient",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "quantity",
                                "storageKey": null
                              },
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
      (v1/*: any*/)
    ]
  },
  "params": {
    "cacheID": "5456adc1138d6ffc0470a21bdc0843ad",
    "id": null,
    "metadata": {},
    "name": "ChemicalQuery",
    "operationKind": "query",
    "text": "query ChemicalQuery {\n  chemicals {\n    edges {\n      node {\n        id\n        ...ChemicalFragment_data\n      }\n    }\n  }\n  userContents {\n    edges {\n      node {\n        id\n        url\n        text\n        type\n      }\n    }\n  }\n}\n\nfragment ChemicalFragment_data on Chemical {\n  id\n  name\n  description\n  recipee {\n    edges {\n      node {\n        quantity\n        ...ChemicalIngredientFragment_data\n        id\n      }\n    }\n  }\n}\n\nfragment ChemicalIngredientFragment_data on Ingredient {\n  id\n  name\n  quantity\n  description\n}\n"
  }
};
})();

(node as any).hash = "6cbe7b225df60aeaf9361678097c9552";

export default node;
