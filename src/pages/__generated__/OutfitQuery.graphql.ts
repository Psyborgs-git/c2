/**
 * @generated SignedSource<<c9b32409959e5a9f37d2fcff8e3d71ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type OutfitQuery$variables = {
  id: string;
};
export type OutfitQuery$data = {
  readonly outfit: {
    readonly alsoHas: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly handle: string | null;
          readonly icon: {
            readonly id: string;
            readonly url: string | null;
          } | null;
          readonly id: string;
        } | null;
      } | null>;
    } | null;
    readonly avrRating: number | null;
    readonly category: string | null;
    readonly description: string | null;
    readonly id: string;
    readonly isLiked: boolean | null;
    readonly items: {
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
    };
    readonly liked: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly handle: string | null;
          readonly icon: {
            readonly id: string;
            readonly url: string | null;
          } | null;
          readonly id: string;
        } | null;
      } | null>;
    };
    readonly name: string | null;
    readonly numOfReviews: number | null;
    readonly reviews: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly comment: string | null;
          readonly id: string;
          readonly rating: any;
        } | null;
      } | null>;
    } | null;
    readonly thumbnail: {
      readonly id: string;
      readonly url: string | null;
    } | null;
  } | null;
};
export type OutfitQuery = {
  response: OutfitQuery$data;
  variables: OutfitQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
    "concreteType": "UserAccountEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserAccount",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "handle",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MediaType",
            "kind": "LinkedField",
            "name": "icon",
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
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Outfit",
    "kind": "LinkedField",
    "name": "outfit",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isLiked",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avrRating",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "numOfReviews",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ContentType",
        "kind": "LinkedField",
        "name": "thumbnail",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ReviewTypeConnection",
        "kind": "LinkedField",
        "name": "reviews",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ReviewTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ReviewType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "rating",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "comment",
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
        "concreteType": "UserAccountConnection",
        "kind": "LinkedField",
        "name": "liked",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ApparelConnection",
        "kind": "LinkedField",
        "name": "items",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserAccountConnection",
        "kind": "LinkedField",
        "name": "alsoHas",
        "plural": false,
        "selections": (v4/*: any*/),
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
    "name": "OutfitQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OutfitQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "c9bcd22b0496a5e4d39829c14036f458",
    "id": null,
    "metadata": {},
    "name": "OutfitQuery",
    "operationKind": "query",
    "text": "query OutfitQuery(\n  $id: ID!\n) {\n  outfit(id: $id) {\n    id\n    name\n    description\n    isLiked\n    category\n    avrRating\n    numOfReviews\n    thumbnail {\n      id\n      url\n    }\n    reviews {\n      edges {\n        node {\n          id\n          rating\n          comment\n        }\n      }\n    }\n    liked {\n      edges {\n        node {\n          id\n          handle\n          icon {\n            id\n            url\n          }\n        }\n      }\n    }\n    items {\n      edges {\n        node {\n          id\n          name\n          thumbnail {\n            id\n            url\n          }\n        }\n      }\n    }\n    alsoHas {\n      edges {\n        node {\n          id\n          handle\n          icon {\n            id\n            url\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e90e4e54ea1e4d2fd98c00d8dac264c9";

export default node;
