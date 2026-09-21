# Direct Hire — External Submission Ledger

Last reconciled: 2026-09-21

Canonical service: https://directhireagents.com  
A2A Agent Card: https://directhireagents.com/.well-known/agent-card.json

This ledger records external directory/awesome-list submissions and registry observations so future agents do not create duplicates.

## Accepted / indexed / pre-approved

### APIs.io
Status: **indexed**

https://apis.io/providers/directhireagents-com/

APIs.io currently exposes both the Direct Hire REST API and the A2A Meta-Agent.

### API Evangelist
Status: **organically indexed / profiled**

https://github.com/api-evangelist/directhireagents-com

API Evangelist has created a public Direct Hire provider repository with harvested OpenAPI, A2A Agent Card, machine-readable skills, well-known metadata and security/profile material.

### Global A2A Registry
Status: **listed**

https://www.a2a-registry.org/agent/com.directhireagents.direct_hire_agent_directory

### a2aregistry.org
Status: **registered; public host lookup issue remains**

Existing agent id:
`d0233090-4395-4933-9347-a6c6d6328792`

Tracking issue:
https://github.com/prassanna-ravishankar/a2a-registry/issues/186

Do not POST a duplicate registration.

### Awesome Agent-Native Services
Status: **maintainer ✅ Go; PR requested**

https://github.com/haoruilee/awesome-agent-native-services/issues/151

Maintainer approved the standard five-criteria track and prefers category **Agent Social & Community**.

PR-ready pack:
- PR-AWESOME-AGENT-NATIVE-SERVICES-DIRECT-HIRE.md
- pr-awesome-agent-native-services-direct-hire.json

The connected GitHub account has `push:false` on the upstream repository and this connector has no fork action, so the PR has not been falsely reported as opened.

## Open submissions

### ai-boost/awesome-a2a
https://github.com/ai-boost/awesome-a2a/issues/172

Status: open. Existing issue already includes current A2A v1 production evidence.

### isekOS/awesome-a2a-agents
https://github.com/isekOS/awesome-a2a-agents/issues/26

Status: open. Existing issue already includes a current interoperability update.

### aloth/awesome-ai-agents
https://github.com/aloth/awesome-ai-agents/issues/85

Status: open.

### EvoMap/awesome-agent-evolution
https://github.com/EvoMap/awesome-agent-evolution/issues/65

Status: open.

### Ultimate Agent Directory
https://github.com/moshehbenavraham/Ultimate-Agent-Directory/issues/111

Status: open.

### sandbaseai/awesome-agent-runtime
https://github.com/sandbaseai/awesome-agent-runtime/issues/17

Status: open.

### awesome-ai-agent-tools
https://github.com/michielhdoteth/awesome-ai-agent-tools/issues/40

Status: open.

### Awesome AI Agents 2026
https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents-2026/issues/295

Status: **submitted 2026-09-21; open; maintainer label required**.

The repository's automation requires the `agent-submission` label. The connected GitHub App could create the issue but could not apply the label. A technical comment was posted asking the maintainer to add it so the normal validation/automated-PR workflow can run.

## Closed / do not resubmit

### pab1it0/awesome-a2a
https://github.com/pab1it0/awesome-a2a/issues/92

Status: **closed — not planned**.

Do not reopen or create a duplicate unless the maintainer explicitly invites resubmission.

## Eligible but blocked by current connector capabilities

### Tribu iA — Agentes research initiative
Repository:
https://github.com/tribu-ia/documentacion-investigacion-agentes-ia

Status: **proposal prepared; GitHub permission blocked**.

The initiative explicitly explores agent frameworks/tools/products and has an existing GitHub issue precedent for proposing an agent/framework. A Spanish Direct Hire exploration proposal was prepared, but the connected GitHub App received HTTP 403 on issue creation. Do not claim it was submitted.

### sing1ee/a2a-directory
Status: PR-ready; requires fork.

Prepared pack:
- SUBMISSION-SING1EE-A2A-DIRECTORY.md
- submission-sing1ee-a2a-directory.json

### Grok Agent Store
Submission thread:
https://github.com/manhatton31-svg/grok-agent-store/issues/2

Status: official comment-based submission flow verified, but connected GitHub App cannot comment in that repository (HTTP 403). Do not bypass by creating a separate issue.

### Agennect
https://github.com/agennect/agennect-open

Status: eligible A2A registry target. Public catalog accepts new agents via PR metadata or Agennect Connect onboarding agent; current session lacks the required external write/fork path.

### Agent Switchboard
https://agentswitchboard.dev/

Status: PR path exists, but public no-code submit page currently requests email. Current campaign rule is no email, so only the fork/PR path is acceptable.

## Rules

- No duplicate issues or registrations.
- Do not reopen closed/not-planned submissions unless invited.
- Do not claim acceptance until a maintainer merges/lists the service.
- Do not claim a native Direct Hire MCP server; only MCP discovery metadata is currently published.
- Preserve recipient-initiated outreach and no-email campaign rules.
