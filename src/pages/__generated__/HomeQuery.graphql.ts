/**
 * @generated SignedSource<<53f4258a72aa5622dd0b797bc4e51899>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeQuery$variables = {
  category?: string | null;
};
export type HomeQuery$data = {
  readonly categories: ReadonlyArray<string | null> | null;
  readonly explore: {
    readonly trending: {
      readonly apparel: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly name: string | null;
            readonly thumbnail: {
              readonly id: string;
              readonly url: string | null;
            } | null;
          } | null;
        } | null>;
      } | null;
      readonly outfits: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly name: string | null;
            readonly thumbnail: {
              readonly id: string;
              readonly url: string | null;
            } | null;
          } | null;
        } | null>;
      } | null;
    } | null;
  } | null;
};
export type HomeQuery = {
  response: HomeQuery$data;
  variables: HomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "category"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "categories",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "category",
        "variableName": "category"
      }
    ],
    "concreteType": "Explore",
    "kind": "LinkedField",
    "name": "explore",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ApparelAndOutfitAbs",
        "kind": "LinkedField",
        "name": "trending",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OutfitConnection",
            "kind": "LinkedField",
            "name": "outfits",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OutfitEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Outfit",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ContentType",
                        "kind": "LinkedField",
                        "name": "thumbnail",
                        "plural": false,
                        "selections": (v3/*: any*/),
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
            "concreteType": "ApparelConnection",
            "kind": "LinkedField",
            "name": "apparel",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ApparelEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Apparel",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MediaType",
                        "kind": "LinkedField",
                        "name": "thumbnail",
                        "plural": false,
                        "selections": (v3/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "053fc81fe3cb2160c86d25325401d0dd",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery(\n  $category: String\n) {\n  categories\n  explore(category: $category) {\n    trending {\n      outfits {\n        edges {\n          node {\n            id\n            name\n            thumbnail {\n              id\n              url\n            }\n          }\n        }\n      }\n      apparel {\n        edges {\n          node {\n            id\n            name\n            thumbnail {\n              id\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f94df2bbcfa90cd8209b69710de07bc4";

export default node;
