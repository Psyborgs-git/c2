/**
 * @generated SignedSource<<954b0eb74dac88845e59cbfdab6f40ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type NoteMutationInput = {
  clientMutationId?: string | null;
  contact?: MobileNumberInput | null;
  contactId?: string | null;
  content?: string | null;
  id?: string | null;
  title?: string | null;
};
export type MobileNumberInput = {
  countryCode?: string | null;
  number?: string | null;
};
export type NoteModMutation$variables = {
  input: NoteMutationInput;
};
export type NoteModMutation$data = {
  readonly note: {
    readonly error: string | null;
    readonly note: {
      readonly content: string;
      readonly createdAt: any;
      readonly id: string;
      readonly lastUpdated: any;
      readonly title: string;
    } | null;
    readonly success: boolean | null;
  } | null;
};
export type NoteModMutation = {
  response: NoteModMutation$data;
  variables: NoteModMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "NoteMutationPayload",
    "kind": "LinkedField",
    "name": "note",
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
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastUpdated",
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
    "name": "NoteModMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteModMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b76ee7e20aef7a8d2d6da61c518ca36f",
    "id": null,
    "metadata": {},
    "name": "NoteModMutation",
    "operationKind": "mutation",
    "text": "mutation NoteModMutation(\n  $input: NoteMutationInput!\n) {\n  note(input: $input) {\n    success\n    error\n    note {\n      id\n      title\n      content\n      createdAt\n      lastUpdated\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f44e99f996d7d7dcdaebb3d2c6cad2e";

export default node;
