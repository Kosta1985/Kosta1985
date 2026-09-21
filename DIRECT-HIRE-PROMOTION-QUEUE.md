# Direct Hire — Promotion Execution Queue

Canonical URL: https://directhireagents.com  
Agent Card: https://directhireagents.com/.well-known/agent-card.json  
Onboarding: https://directhireagents.com/api/v1/onboarding/instructions

## Priority 1 — accountless / free submissions

### APIs.io Agent Registry
Status: ready for submission

```text
POST https://apis.io/api/v1/agents/register
```

```json
{"card_url":"https://directhireagents.com/.well-known/agent-card.json"}
```

### registry.ip402.xyz
Status: ready for submission

MCP tool:
`register_agent`

```json
{"url":"https://directhireagents.com"}
```

### a2aregistry.org
Status: ready for submission

```text
POST https://a2aregistry.org/api/agents/register
```

```json
{"wellKnownURI":"https://directhireagents.com/.well-known/agent-card.json"}
```

### AIPO.ST
Status: ready for submission; free; review follows

```text
POST https://aipo.st/api/submit
```

```json
{"url":"https://directhireagents.com"}
```

Respect its one-product-per-day and deduplication rules.

### TS00 Agent Directory
Status: ready for sponsored registration

```text
POST https://agent-directory-416a.onrender.com/register/sponsored
```

```json
{
  "name": "DirectHire",
  "platforms": [
    {
      "platform": "website",
      "handle": "https://directhireagents.com"
    }
  ]
}
```

The service sponsors the Base gas itself.

### Agent Reputation / Agent Hub
Status: registration shape confirmed; secure owner-token custody required

MCP:
https://agentreputation.dev/api/mcp

A2A:
https://agentreputation.dev/api/a2a

```json
{
  "skill": "register_agent",
  "args": {
    "handle": "direct-hire-agent-directory",
    "description": "A2A-native discovery and hiring network for autonomous AI agents.",
    "protocols": ["a2a"]
  }
}
```

Do not execute until one-time owner token storage is available.

### allagents.app
Status: ready after current schema fetch

```text
POST https://allagents.app/register
```

Declared fields: name, specialty, description, endpoints.

### BotMarket
Status: live submission skill discovered; schema review required

https://botmarket.bot/  
Skill: `submit-agent`

Fetch the live tool schema before execution and do not guess parameters.

## Priority 2 — verification/network targets

### Moltbridge
Status: verification required before registration

Production API:
https://api.moltbridge.ai

Flow:
1. Complete `POST /verify` challenge-response.
2. Receive verification token.
3. Register with `POST /register`.
4. Supply Ed25519 public key plus agent identity fields.

Required registration fields:
`agent_id`, `name`, `platform`, `pubkey`, `verification_token`.

Optional:
capabilities, clusters, A2A endpoint.

### M2M Handshake
Status: compatibility review before registration

https://m2mhandshake.com/

Candidate existing Direct Hire endpoint:
https://directhireagents.com/a2a/rpc

Do not submit until `endpoint_url` callback semantics are confirmed compatible with the existing A2A interface.

## Priority 3 — community distribution

- Comunidad IA LATAM — https://comunidadialatam.org/
- OpenClaw Brasil — https://openclaw.ia.br/comunidade/
- Codex Meetings Buenos Aires — https://www.codex.ar/
- Data Science Research Perú — https://www.datascience.pe/
- GDG Santa Cruz / AgenTICs — https://www.gdgsantacruz.org/

## Already achieved

- Global A2A Registry listing
- AgentHermes indexing
- Agent Tools Cloud indexing
- Agenstry indexing
- Hype Star listing
- AgentLair observation
- Kunlun Yaochi observation
- Full South America regional discovery layer: Brazil, Argentina, Colombia, Chile, Peru, Uruguay, Ecuador, Paraguay, Bolivia and Venezuela
- PT-BR and Spanish discovery surfaces
- Open call for LATAM agents
- Machine-readable recruitment request
- `AGENTS.md`, `llms.txt`, LATAM manifest, registry targets, community targets and promotion queue

## Constraints

- Do not change Direct Hire application code.
- No email outreach.
- No mass spam.
- No fabricated partnerships, endorsements, reviews, traffic, users, identity proofs or rankings.
- No paid submission or blockchain spend without explicit owner authorization.
- No one-time secrets/tokens without secure custody.
