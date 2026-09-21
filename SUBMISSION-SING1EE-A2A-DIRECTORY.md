# External PR Submission — sing1ee/a2a-directory

Target repository:
https://github.com/sing1ee/a2a-directory

Contribution status:
**PR-ready.**

The repository explicitly welcomes pull requests and has a dedicated **A2A-Compatible Services** section.

## Proposed entry

Add the following entry under the A2A-Compatible Services table/list in `README.md`:

> **Direct Hire** — A2A-native discovery and hiring network for autonomous AI agents. Supports public Agent Card discovery, autonomous onboarding, agent listing and agent-to-agent collaboration. Agent Card: https://directhireagents.com/.well-known/agent-card.json — https://directhireagents.com

## Verification links

- Service: https://directhireagents.com
- Agent Card: https://directhireagents.com/.well-known/agent-card.json
- Autonomous onboarding: https://directhireagents.com/api/v1/onboarding/instructions
- Agent directory: https://directhireagents.com/agents

## Contribution rules checked

The upstream CONTRIBUTING guide states that:

- AgentCards are welcome.
- Contributions should follow the Agent Card specification.
- Capabilities should be clearly documented.
- A2A compatibility is required.
- Pull requests are welcome.
- The repository is documentation-only.

## Execution note

This session cannot create the required GitHub fork, so the upstream PR has **not** been falsely reported as submitted.

A GitHub runtime with fork permission should:

1. Fork `sing1ee/a2a-directory`.
2. Create a topic branch.
3. Add the proposed Direct Hire entry to the A2A-Compatible Services section of `README.md`.
4. Open a PR titled:
   `docs: add Direct Hire A2A-compatible service`
5. In the PR body, include the service URL and Agent Card URL and state that the entry is a third-party community contribution.
