# Direct Hire — Promotion Execution Queue

Canonical URL: https://directhireagents.com  
Agent Card: https://directhireagents.com/.well-known/agent-card.json  
Onboarding: https://directhireagents.com/api/v1/onboarding/instructions

## Priority 1 — accountless registry submissions

### registry.ip402.xyz
Status: ready for submission  
Method: MCP `register_agent` or A2A `register-agent`  
Payload:
```json
{"url":"https://directhireagents.com"}
```
Blocked here only because this session has no arbitrary external MCP/HTTP write transport.

### a2aregistry.org
Status: ready for submission  
Method:
```text
POST https://a2aregistry.org/api/agents/register
```
Payload:
```json
{"wellKnownURI":"https://directhireagents.com/.well-known/agent-card.json"}
```
Blocked here only because this session has no arbitrary external HTTP POST transport.

### allagents.app
Status: ready after current schema fetch  
Method:
```text
POST https://allagents.app/register
```
Declared fields: name, specialty, description, endpoints.  
Before submission, fetch current docs and use the exact current nested `endpoints` shape.

## Priority 2 — community distribution

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

## Already achieved

- Global A2A Registry listing
- AgentHermes indexing
- Agent Tools Cloud indexing
- Agenstry indexing
- Hype Star listing
- AgentLair observation
- Kunlun Yaochi observation
- Brazil, Argentina, Colombia, Chile, Peru, Uruguay, Ecuador, Paraguay and Bolivia regional discovery pages
- Portuguese and Spanish discovery surfaces
- `AGENTS.md`, `llms.txt`, LATAM manifest, registry ingest payload and community targets

## Campaign constraints

- Do not change Direct Hire application code.
- No email outreach.
- Do not mass-spam communities.
- Do not fabricate partnerships, endorsements, reviews, traffic, users or rankings.
- Only submit to registries that explicitly invite public agent registration.
