/**
 * @generated SignedSource<<3a3be78b0f8d6618f42153ee11d14bc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChemicalsMutationInput = {
  clientMutationId?: string | null;
  delete?: boolean | null;
  description?: string | null;
  documentation?: string | null;
  id?: string | null;
  ingredients?: ReadonlyArray<IngredientInput | null> | null;
  inventory?: string | null;
  modifyIngredient?: IngredientInput | null;
  modifyIngredientId?: string | null;
  name?: string | null;
  removeIngredients?: ReadonlyArray<string | null> | null;
  uploadedFile?: boolean | null;
};
export type IngredientInput = {
  description?: string | null;
  material?: string | null;
  name?: string | null;
  quantity?: number | null;
};
export type ChemicalMutation$variables = {
  i: ChemicalsMutationInput;
};
export type ChemicalMutation$data = {
  readonly chemicals: {
    readonly chemical: {
      readonly " $fragmentSpreads": FragmentRefs<"ChemicalFragment_data">;
    } | null;
    readonly error: string | null;
    readonly success: boolean | null;
  } | null;
};
export type ChemicalMutation = {
  response: ChemicalMutation$data;
  variables: ChemicalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "i"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "i"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChemicalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChemicalsMutationPayload",
        "kind": "LinkedField",
        "name": "chemicals",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Chemical",
            "kind": "LinkedField",
            "name": "chemical",
            "plural": false,
            "selections": [
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChemicalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChemicalsMutationPayload",
        "kind": "LinkedField",
        "name": "chemicals",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Chemical",
            "kind": "LinkedField",
            "name": "chemical",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
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
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "bbff1d41b7edcc8b20148c876823d0e4",
    "id": null,
    "metadata": {},
    "name": "ChemicalMutation",
    "operationKind": "mutation",
    "text": "mutation ChemicalMutation(\n  $i: ChemicalsMutationInput!\n) {\n  chemicals(input: $i) {\n    success\n    error\n    chemical {\n      ...ChemicalFragment_data\n      id\n    }\n  }\n}\n\nfragment ChemicalFragment_data on Chemical {\n  id\n  name\n  description\n  recipee {\n    edges {\n      node {\n        quantity\n        ...ChemicalIngredientFragment_data\n        id\n      }\n    }\n  }\n}\n\nfragment ChemicalIngredientFragment_data on Ingredient {\n  id\n  name\n  quantity\n  description\n}\n"
  }
};
})();

(node as any).hash = "e623688edb25d0faa069e84fb527e399";

export default node;
