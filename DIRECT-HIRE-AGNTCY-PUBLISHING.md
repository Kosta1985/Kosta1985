# Direct Hire — AGNTCY Directory Publishing Plan

Target:
https://dir.agntcy.org/

Direct Hire Agent Card:
https://directhireagents.com/.well-known/agent-card.json

## Why this target fits

AGNTCY Directory is a distributed publish/discovery network for agent records. It supports A2A import/export, OASF metadata, DHT publication and capability-based discovery.

## Safe publishing workflow

Do **not** hand-author guessed OASF skill IDs.

Preferred flow:

1. Fetch the live Direct Hire A2A Agent Card.
2. Import it into OASF using the AGNTCY OASF import flow.
3. Run skill/domain enrichment.
4. Validate the resulting OASF record.
5. Store the validated record locally with `dirctl push`.
6. Publish the returned CID with `dirctl routing publish`.
7. Verify discovery by searching the Directory for the resulting name/capabilities.

## MCP-assisted import

The AGNTCY Directory MCP tooling documents an import operation for A2A:

```text
agntcy_oasf_import_record
```

Inputs:

```json
{
  "source_format": "a2a",
  "source_data": "<LIVE_DIRECT_HIRE_AGENT_CARD_JSON>"
}
```

The raw imported record still requires enrichment and validation. Prefer the higher-level `import_record` prompt when available.

## CLI publication

After a validated record is produced:

```bash
CID=$(dirctl push direct-hire-oasf-record.json --output raw)
dirctl routing publish "$CID"
```

Verification examples:

```bash
dirctl routing list -o json
dirctl routing search --skill "AI" -o json
```

Use capability/domain searches derived from the validated OASF record rather than inventing tags.

## Current status

Prepared for execution.

Blocked in this chat only because the current runtime does not expose the AGNTCY `dirctl` binary or Directory MCP server.

## Campaign constraints

- Do not change Direct Hire application code.
- Do not invent OASF skill or domain IDs.
- Do not publish an unvalidated record.
- Use the live Agent Card as the canonical source.
- No email outreach is involved.
