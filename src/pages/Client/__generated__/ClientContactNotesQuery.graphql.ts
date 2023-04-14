/**
 * @generated SignedSource<<243739b254463a5b5832e201375af56c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ClientContactNotesQuery$variables = {
  contactId: string;
};
export type ClientContactNotesQuery$data = {
  readonly notes: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly content: string;
        readonly createdAt: any;
        readonly id: string;
        readonly lastUpdated: any;
        readonly title: string;
        readonly userIsOwner: boolean | null;
      } | null;
    } | null>;
  } | null;
};
export type ClientContactNotesQuery = {
  response: ClientContactNotesQuery$data;
  variables: ClientContactNotesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contactId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "contactId",
        "variableName": "contactId"
      }
    ],
    "concreteType": "NoteConnection",
    "kind": "LinkedField",
    "name": "notes",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NoteEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "userIsOwner",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientContactNotesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientContactNotesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6392a67c0123ed2001c2d754aa37a668",
    "id": null,
    "metadata": {},
    "name": "ClientContactNotesQuery",
    "operationKind": "query",
    "text": "query ClientContactNotesQuery(\n  $contactId: ID!\n) {\n  notes(contactId: $contactId) {\n    edges {\n      node {\n        id\n        title\n        content\n        userIsOwner\n        createdAt\n        lastUpdated\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c65f90fb4afc4b99afb1926d838fe351";

export default node;
