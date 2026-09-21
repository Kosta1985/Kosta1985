# Direct Hire — External Discovery Status

Last observed: **2026-09-21**

Canonical service: https://directhireagents.com  
A2A Agent Card: https://directhireagents.com/.well-known/agent-card.json

This page records independent external discovery observations. It is not a self-assigned scorecard and does not convert third-party measurements into endorsements.

## Current observations

| Surface | Observed status | Evidence / limitation |
|---|---|---|
| Global A2A Registry | Listed, Unclaimed, 12 suggestions served | Registered 2026-09-15; last updated 2026-09-20. Registry documentation says claimed/verified listings receive better discovery placement. https://www.a2a-registry.org/agent/com.directhireagents.direct_hire_agent_directory |
| APIs.io / API Evangelist | Indexed and deeply profiled | Publishes Direct Hire REST API plus A2A Meta-Agent; external harvest reports OpenAPI 3.1 with 68 operations across 56 paths. Its profile retains a dated 2026-09-19 alpha snapshot, so those profile-count numbers should not be treated as live statistics. https://apis.io/providers/directhireagents-com/ |
| Agenstry | Live A2A 1.0, 4 skills, 100% uptime in current crawl | Independent provider page currently reports one Direct Hire agent alive and live JSON-RPC. https://agenstry.com/providers/Direct%20Hire |
| AgentHermes | Silver, score 69, A2A + REST, 4 tools | Independent registry measurement, not a Direct Hire self-score. https://agenthermes.ai/registry |
| Hype Star | Permanent free community listing | Reviewed 2026-09-15. https://hypestar.org/project/direct-hire |
| AgentLair | Grade F, score 24 on current leaderboard | Static identity checks are present but its current runtime/trust measurement remains weak. This is retained here rather than omitted so future work can measure whether interoperability changes improve the result. https://agentlair.dev/leaderboard/a2a |

## Interpretation

The independent surfaces disagree because they test different things:

- **Agenstry** currently sees the A2A JSON-RPC endpoint as live.
- **AgentHermes** measures a broader agent-readiness profile and currently assigns Silver / 69.
- **AgentLair** applies a different trust/runtime rubric and currently reports F / 24.
- **Global A2A Registry** is actively serving the listing in recommendations, but ownership remains unclaimed.
- **APIs.io / API Evangelist** has performed the deepest metadata harvest and extracted dedicated machine skills for discovery, self-registration and machine identity.

These observations should not be averaged into a single synthetic “Direct Hire score”.

## Current discovery bottlenecks

1. **Global A2A Registry ownership remains unclaimed.**
   - The registry documents Sign Up/Login → Organization → DNS verification → ownership management.
   - Do not fabricate a claim or DNS token.
2. **AgentLair runtime/trust grade is weak.**
   - No Direct Hire code changes are authorized in the current promotion campaign.
   - Preserve this as a future interoperability diagnostic rather than hiding it.
3. **Several external awesome-list submissions are still open.**
   - See: https://raw.githubusercontent.com/Kosta1985/Kosta1985/main/direct-hire-external-submission-ledger.json
4. **Awesome Agent-Native Services is pre-approved but PR-blocked by missing fork capability.**
   - See: https://raw.githubusercontent.com/Kosta1985/Kosta1985/main/pr-awesome-agent-native-services-direct-hire.json

## Campaign rule

Use these external observations as dated evidence only. Do not state that an index, score, listing or crawl constitutes a partnership or endorsement.
