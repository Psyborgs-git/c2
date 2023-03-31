/**
 * @generated SignedSource<<839cb0e039e79441ef0433d0a3419816>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChemicalIngredientFragment_data$data = {
  readonly description: string | null;
  readonly id: string;
  readonly name: string | null;
  readonly quantity: number | null;
  readonly " $fragmentType": "ChemicalIngredientFragment_data";
};
export type ChemicalIngredientFragment_data$key = {
  readonly " $data"?: ChemicalIngredientFragment_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChemicalIngredientFragment_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChemicalIngredientFragment_data",
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
      "name": "quantity",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Ingredient",
  "abstractKey": null
};

(node as any).hash = "3820be7935174915001a7716b702f649";

export default node;
