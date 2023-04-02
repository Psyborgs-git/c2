/**
 * @generated SignedSource<<295c69dd060a1db4058657b2805178a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ApparelQuery$variables = {
  id: string;
};
export type ApparelQuery$data = {
  readonly apparel: {
    readonly avrRating: number | null;
    readonly category: string | null;
    readonly description: string | null;
    readonly id: string;
    readonly isLiked: boolean | null;
    readonly media: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly type: string | null;
          readonly url: string | null;
        } | null;
      } | null>;
    };
    readonly name: string | null;
    readonly numOfReviews: number | null;
    readonly outfits: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly thumbnail: {
            readonly id: string;
            readonly url: string | null;
          } | null;
        } | null;
      } | null>;
    } | null;
    readonly owners: {
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
    readonly price: string | null;
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
export type ApparelQuery = {
  response: ApparelQuery$data;
  variables: ApparelQuery$variables;
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
  "name": "url",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Apparel",
    "kind": "LinkedField",
    "name": "apparel",
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
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
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
        "name": "isLiked",
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
        "name": "owners",
        "plural": false,
        "selections": [
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
        "storageKey": null
      },
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
        "concreteType": "MediaTypeConnection",
        "kind": "LinkedField",
        "name": "media",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MediaTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MediaType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ApparelQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ApparelQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "c7546a0877f5b821d32ce553601634c5",
    "id": null,
    "metadata": {},
    "name": "ApparelQuery",
    "operationKind": "query",
    "text": "query ApparelQuery(\n  $id: ID!\n) {\n  apparel(id: $id) {\n    id\n    name\n    description\n    price\n    category\n    avrRating\n    isLiked\n    reviews {\n      edges {\n        node {\n          id\n          rating\n          comment\n        }\n      }\n    }\n    owners {\n      edges {\n        node {\n          id\n          handle\n          icon {\n            id\n            url\n          }\n        }\n      }\n    }\n    outfits {\n      edges {\n        node {\n          id\n          thumbnail {\n            id\n            url\n          }\n        }\n      }\n    }\n    media {\n      edges {\n        node {\n          id\n          url\n          type\n        }\n      }\n    }\n    numOfReviews\n    thumbnail {\n      id\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d1363859d725670ef41927f9d8a6de4";

export default node;
