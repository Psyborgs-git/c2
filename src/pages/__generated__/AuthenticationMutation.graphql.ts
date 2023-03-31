/**
 * @generated SignedSource<<a487bd756c67d778269e7c0f693db1f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthenticationInput = {
  clientMutationId?: string | null;
  credentials?: CredentialInput | null;
  deviceName?: string | null;
  mobile?: MobileAuthInput | null;
};
export type CredentialInput = {
  password: string;
  username: string;
};
export type MobileAuthInput = {
  mobile?: MobileNumberInput | null;
  verification?: Verification | null;
  whatsapp?: boolean | null;
};
export type MobileNumberInput = {
  countryCode?: string | null;
  number?: string | null;
};
export type Verification = {
  id?: string | null;
  otp?: string | null;
};
export type AuthenticationMutation$variables = {
  i: AuthenticationInput;
};
export type AuthenticationMutation$data = {
  readonly authenticate: {
    readonly error: string | null;
    readonly id: string | null;
    readonly success: boolean | null;
    readonly token: string | null;
  } | null;
};
export type AuthenticationMutation = {
  response: AuthenticationMutation$data;
  variables: AuthenticationMutation$variables;
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
    "concreteType": "AuthenticationPayload",
    "kind": "LinkedField",
    "name": "authenticate",
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
        "name": "id",
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
    "name": "AuthenticationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthenticationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a5a6553002478da2d83f86b2870727ab",
    "id": null,
    "metadata": {},
    "name": "AuthenticationMutation",
    "operationKind": "mutation",
    "text": "mutation AuthenticationMutation(\n  $i: AuthenticationInput!\n) {\n  authenticate(input: $i) {\n    token\n    id\n    success\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "39415f26e9d0b9cd6a1b69a605494e29";

export default node;
