/**
 * @generated SignedSource<<3365119711584d01dbb45fec73c532a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Client_contact$data = {
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
  readonly " $fragmentType": "Client_contact";
};
export type Client_contact$key = {
  readonly " $data"?: Client_contact$data;
  readonly " $fragmentSpreads": FragmentRefs<"Client_contact">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Client_contact",
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
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "emails",
      "storageKey": null
    },
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "number",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "countryCode",
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
  "type": "Details",
  "abstractKey": null
};
})();

(node as any).hash = "8cb4cdec292b3ae8c2f51cf3cd9df37b";

export default node;
