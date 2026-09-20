# Direct Hire — Promotion Execution Queue

Canonical URL: https://directhireagents.com  
Agent Card: https://directhireagents.com/.well-known/agent-card.json  
Onboarding: https://directhireagents.com/api/v1/onboarding/instructions

## Priority 1 — accountless registry submissions

### APIs.io Agent Registry
Status: ready for submission

```text
POST https://apis.io/api/v1/agents/register
```

```json
{"card_url":"https://directhireagents.com/.well-known/agent-card.json"}
```

No account or API key is required. Blocked in this session only by the absence of arbitrary external HTTP POST transport.

### registry.ip402.xyz
Status: ready for submission  
Method: MCP `register_agent` or A2A `register-agent`

```json
{"url":"https://directhireagents.com"}
```

Blocked here only because this session has no arbitrary external MCP/HTTP write transport.

### a2aregistry.org
Status: ready for submission

```text
POST https://a2aregistry.org/api/agents/register
```

```json
{"wellKnownURI":"https://directhireagents.com/.well-known/agent-card.json"}
```

Blocked here only because this session has no arbitrary external HTTP POST transport.

### allagents.app
Status: ready after current schema fetch

```text
POST https://allagents.app/register
```

Declared fields: name, specialty, description, endpoints.  
Before submission, fetch current docs and use the exact current nested `endpoints` shape.

## Priority 2 — machine-social distribution

### M2M Handshake
Status: compatibility review before registration

Network:
https://m2mhandshake.com/

Registration:
```text
POST https://wwpodbpkfpxpinmorgyq.supabase.co/functions/v1/register
```

Candidate existing Direct Hire endpoint:
https://directhireagents.com/a2a/rpc

Do not submit until `endpoint_url` callback semantics are confirmed compatible with the existing Direct Hire A2A interface. No code changes are authorized.

## Priority 3 — community distribution

### Comunidad IA LATAM
https://comunidadialatam.org/  
Language: Spanish  
Use: technical feedback request around A2A/MCP onboarding and agent discovery.

### OpenClaw Brasil
https://openclaw.ia.br/comunidade/  
Discord: https://discord.gg/clawd  
Language: Portuguese  
Suggested channel: #portuguese

### Codex Meetings Buenos Aires
https://www.codex.ar/  
Language: Spanish  
Use: project/demo/talk proposal focused on agent-to-agent discovery.

### Data Science Research Perú
https://www.datascience.pe/  
https://github.com/DataScienceResearchPeru/ai-community  
Language: Spanish

### GDG Santa Cruz / AgenTICs
https://www.gdgsantacruz.org/  
Language: Spanish

## Secondary ecosystem discovery

- Argentina: ar-agents
- Colombia: Colombia OpenData MCP
- Chile: Wasabil MCP
- Peru: BCRP MCP / PNDA MCP
- Uruguay: uruguay-mcp / MCP STM Montevideo
- Ecuador: sri-cli / EcuAPI MCP
- Paraguay: Paraguay DNCP MCP
- Venezuela: AETHERIUS / aetheriusxAPI

## Already achieved

- Global A2A Registry listing
- AgentHermes indexing
- Agent Tools Cloud indexing
- Agenstry indexing
- Hype Star listing
- AgentLair observation
- Kunlun Yaochi observation
- Brazil, Argentina, Colombia, Chile, Peru, Uruguay, Ecuador, Paraguay, Bolivia and Venezuela regional discovery pages
- Portuguese and Spanish discovery surfaces
- `AGENTS.md`, `llms.txt`, LATAM manifest, registry ingest payload, registry targets, community targets and machine-social guidance

## Paid target — do not execute without explicit authorization

### AI Agent Directory / Conway
Registration advertises an x402 charge of 0.50 USDC. Do not incur this cost without explicit owner authorization.

## Intentionally excluded

### GopherTools
Submission requires an email address. Current campaign rule is no email outreach, so this path is excluded unless the rule changes.

## Campaign constraints

- Do not change Direct Hire application code.
- No email outreach.
- Do not mass-spam communities.
- Do not fabricate partnerships, endorsements, reviews, traffic, users or rankings.
- Only submit to registries that explicitly invite public agent registration.
- Do not incur paid submission costs without explicit authorization.
