/**
 * @generated SignedSource<<92f90f96bc1abbb0625488200dcdcb35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChemicalFragment_data$data = {
  readonly description: string | null;
  readonly id: string;
  readonly name: string | null;
  readonly recipee: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly quantity: number | null;
        readonly " $fragmentSpreads": FragmentRefs<"ChemicalIngredientFragment_data">;
      } | null;
    } | null>;
  };
  readonly " $fragmentType": "ChemicalFragment_data";
};
export type ChemicalFragment_data$key = {
  readonly " $data"?: ChemicalFragment_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChemicalFragment_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChemicalFragment_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ChemicalIngredientFragment_data"
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
  "type": "Chemical",
  "abstractKey": null
};

(node as any).hash = "b0303c9ba94c7869ec34ad6cd4d46d89";

export default node;
