/**
 * @generated SignedSource<<46dee27790f0458f493551db9e638cb7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ContactMutationInput = {
  address?: string | null;
  city?: string | null;
  clientMutationId?: string | null;
  company?: string | null;
  country?: string | null;
  currentPosition?: string | null;
  emails?: ReadonlyArray<string | null> | null;
  id?: string | null;
  name?: string | null;
  nickname?: string | null;
  numbers?: ReadonlyArray<MobileNumberInput | null> | null;
  state?: string | null;
};
export type MobileNumberInput = {
  countryCode?: string | null;
  number?: string | null;
};
export type ContactMutation$variables = {
  input: ContactMutationInput;
};
export type ContactMutation$data = {
  readonly contact: {
    readonly contact: {
      readonly company: string | null;
      readonly currentPosition: string | null;
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
    readonly error: string | null;
    readonly success: boolean | null;
  } | null;
};
export type ContactMutation = {
  response: ContactMutation$data;
  variables: ContactMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ContactMutationPayload",
    "kind": "LinkedField",
    "name": "contact",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Details",
        "kind": "LinkedField",
        "name": "contact",
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
            "name": "emails",
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
    "name": "ContactMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fb916cda23489c1e5dd919cc217f48f6",
    "id": null,
    "metadata": {},
    "name": "ContactMutation",
    "operationKind": "mutation",
    "text": "mutation ContactMutation(\n  $input: ContactMutationInput!\n) {\n  contact(input: $input) {\n    success\n    error\n    contact {\n      id\n      name\n      emails\n      mobile {\n        edges {\n          node {\n            id\n            number\n            countryCode\n          }\n        }\n      }\n      currentPosition\n      company\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "61944a2fd256fe1b4392098f41991c00";

export default node;
