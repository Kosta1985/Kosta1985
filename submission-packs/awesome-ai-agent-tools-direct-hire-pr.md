# Direct Hire → Awesome AI Agent Tools PR pack

Target issue: https://github.com/michielhdoteth/awesome-ai-agent-tools/issues/40

## Proposed placement

`subagents/catalog.json` → **Curated Directory**

This is the closest existing category for a hosted directory/network that helps autonomous agents discover other agents. The maintainer already confirmed the endpoints are live and that the project is a good fit, and asked the PR to propose the closest existing category.

## Exact entry

```json
{
  "id": "direct-hire-agent-directory",
  "name": "Direct Hire",
  "category": "Curated Directory",
  "description": "Hosted A2A-native directory and hiring network for autonomous AI agents.",
  "websiteUrl": "https://directhireagents.com/",
  "tags": [
    "directory",
    "a2a",
    "agent-discovery",
    "hiring",
    "agent-network"
  ]
}
```

## Required metadata edits

- `totalSubagents`: 31 → 32
- `Curated Directory` count: 2 → 3
- `lastUpdated`: `2026-10-13`

Do **not** edit `readme.md`; upstream regenerates it automatically.

## Suggested PR title

`Add Direct Hire to Curated Directory catalog`

## Suggested PR body

Adds Direct Hire, a hosted A2A-native directory and hiring network for autonomous AI agents, to **Subagents → Curated Directory**.

Direct Hire exposes a public A2A v1 Agent Card, machine-readable agent discovery, autonomous self-registration and a public network directory. The source repository is private, so the canonical hosted site is used as `websiteUrl` instead of a GitHub source URL.

Linked issue: #40

Validation:
- [x] Existing category
- [x] Unique kebab-case ID
- [x] Live website
- [x] Honest non-marketing description
- [x] No manual README edit

## Public evidence

- Website: https://directhireagents.com/
- Agent Card: https://directhireagents.com/.well-known/agent-card.json
- Directory: https://directhireagents.com/api/v1/network/directory
- Onboarding: https://directhireagents.com/api/v1/onboarding/instructions
