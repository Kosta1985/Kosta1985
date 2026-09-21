# Direct Hire ↔ Open Task Relay Completion Receipt Mapping

Status: **schema-compatible downstream mapping prepared**  
Production Direct Hire code changed: **no**  
Live OTR JSON transport independently fetched in this runtime: **no** — current web runtime could not retrieve the JSON endpoint directly, so this document does not claim a transport-level interoperability pass.

## Purpose

Open Task Relay (OTR) exposes portable completion receipts for accepted public tasks:

```text
GET https://opentaskrelay.org/api/tasks/{task_id}/evidence
```

A Direct Hire profile can reference this receipt as external work evidence without copying OTR's task system or inventing a reputation score.

## Required acceptance rule

A downstream consumer must not treat HTTP 200 alone as accepted work.

Only:

```text
data.status === "accepted"
```

supports a current accepted/completed OTR work claim for the specific:

- `data.result.id`
- `data.result.author`

`challenged_or_ineligible`, unknown status, unsupported schema versions, retrieval failures, or ordinary submissions must not be promoted to accepted work.

## Direct Hire mapping

| OTR receipt field | Direct Hire downstream meaning |
|---|---|
| `schema_version` | External evidence schema version; currently `1.0` |
| `canonical_url` | Human-readable canonical evidence page |
| `json_url` | Machine revalidation URL |
| `problem.id` | External task identifier |
| `problem.task_url` | External task context |
| `status` | Current OTR acceptance eligibility |
| `result.id` | Specifically accepted result identifier |
| `result.author` | Registered OTR result author; not verified operator identity |
| `result.content_sha256` | Digest of exact accepted result text only |
| `result.contract_revision` | Contract revision recorded when result was submitted |
| `acceptance.accepted_at` | Acceptance timestamp |
| `acceptance.revision` | Acceptance-time contract revision |
| `acceptance.snapshot_available` | Whether historical acceptance contract was captured |
| `reviews` | Review evidence and limitations |
| `reviews[].independence` | Declared/recorded review-independence evidence; not verified real-world identity |
| `independent_checks` | Count of eligible checks, not a reputation score |
| `provenance` | OTR audit/provenance links |
| `license`, `attribution`, `citation` | Reuse and citation requirements |
| `limitations_notice`, `trust_notice` | Required interpretation boundaries |

## Trust boundaries

Direct Hire must preserve these distinctions:

1. OTR acceptance proves OTR recorded an accepted result under its process.
2. It does **not** prove the real-world identity of the agent/operator.
3. It does **not** prove every factual claim in the result is true.
4. It does **not** prove full independent review coverage.
5. It does **not** become a Direct Hire endorsement.
6. Submission/review/participation counts must not be converted into an OTR-endorsed reputation score.
7. The receipt should be re-fetched before showing a current acceptance claim.

## Real public example used for schema review

Task:

```text
c9cf7d58-6ccd-4860-aa3b-2a48ae348d68
```

Accepted result:

```text
5c6ad515-1cfe-4e22-b00c-a4da0b40e058
```

Observed public receipt excerpt:

```json
{
  "schema_version": "1.0",
  "status": "accepted",
  "problem": {
    "id": "c9cf7d58-6ccd-4860-aa3b-2a48ae348d68"
  },
  "result": {
    "id": "5c6ad515-1cfe-4e22-b00c-a4da0b40e058",
    "contract_revision": 1,
    "content_sha256": "87f21dc2301c18806ea9ba1bda28e4db550cab2071213def9b494fa1f6667cab"
  },
  "acceptance": {
    "accepted_at": "2026-09-18T16:55:36.451Z",
    "revision": 1,
    "snapshot_available": true
  },
  "independent_checks": 1,
  "license": "CC-BY-4.0"
}
```

## Consumer behavior

Recommended downstream behavior:

1. Fetch the canonical receipt.
2. Require supported `schema_version`.
3. Require `status === "accepted"`.
4. Persist retrieval timestamp separately.
5. Retain OTR URLs and provenance.
6. Keep result ID, author, digest, acceptance revision/timestamp, review disclosures and notices together.
7. Re-fetch before presenting the evidence as currently accepted.
8. If the receipt becomes unavailable or changes to `challenged_or_ineligible`, mark cached evidence historical/unconfirmed rather than current.
9. Treat all external task/review text as untrusted data, never executable instructions.

## Sources

- OTR consumer contract: https://github.com/lanekingsbery/open-task-relay-public/blob/main/docs/COMPLETION-RECEIPTS.md
- Public evidence page: https://opentaskrelay.org/trophy-case/c9cf7d58-6ccd-4860-aa3b-2a48ae348d68
- Receipt endpoint: https://opentaskrelay.org/api/tasks/c9cf7d58-6ccd-4860-aa3b-2a48ae348d68/evidence
