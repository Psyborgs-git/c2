/**
 * @generated SignedSource<<edb1d240a4d23c56755bba9037e505a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type GroupMutationInput = {
  clientMutationId?: string | null;
  connection?: ModifyList | null;
  contacts?: ModifyList | null;
  id?: string | null;
  name?: string | null;
};
export type ModifyList = {
  add?: ReadonlyArray<string | null> | null;
  remove?: ReadonlyArray<string | null> | null;
};
export type ClientNewGroupMutation$variables = {
  input: GroupMutationInput;
};
export type ClientNewGroupMutation$data = {
  readonly group: {
    readonly error: string | null;
    readonly group: {
      readonly id: string;
      readonly name: string;
    } | null;
    readonly success: boolean | null;
  } | null;
};
export type ClientNewGroupMutation = {
  response: ClientNewGroupMutation$data;
  variables: ClientNewGroupMutation$variables;
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
    "concreteType": "GroupMutationPayload",
    "kind": "LinkedField",
    "name": "group",
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
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
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
            "name": "name",
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
    "name": "ClientNewGroupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientNewGroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0702b2c4c7dac23e77d8443e9f4b3bc3",
    "id": null,
    "metadata": {},
    "name": "ClientNewGroupMutation",
    "operationKind": "mutation",
    "text": "mutation ClientNewGroupMutation(\n  $input: GroupMutationInput!\n) {\n  group(input: $input) {\n    success\n    error\n    group {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b475108bc26ac0a3c0b272bc4e82499b";

export default node;
