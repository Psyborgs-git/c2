/**
 * @generated SignedSource<<b316728a5dd925653993db19c7c28173>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignupInput = {
  clientMutationId?: string | null;
  password?: string | null;
  username?: string | null;
};
export type AuthenticationSignupMutation$variables = {
  i: SignupInput;
};
export type AuthenticationSignupMutation$data = {
  readonly signup: {
    readonly error: string | null;
    readonly success: boolean | null;
    readonly token: string | null;
  } | null;
};
export type AuthenticationSignupMutation = {
  response: AuthenticationSignupMutation$data;
  variables: AuthenticationSignupMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "i"
      }
    ],
    "concreteType": "SignupPayload",
    "kind": "LinkedField",
    "name": "signup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
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
    "name": "AuthenticationSignupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthenticationSignupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0034854df03c678d934d2f28740b4bd8",
    "id": null,
    "metadata": {},
    "name": "AuthenticationSignupMutation",
    "operationKind": "mutation",
    "text": "mutation AuthenticationSignupMutation(\n  $i: SignupInput!\n) {\n  signup(input: $i) {\n    token\n    success\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "b8d72031c6824e42519bce5d633658c4";

export default node;
