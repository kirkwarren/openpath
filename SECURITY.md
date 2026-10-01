# Security policy

This alpha contains sample curriculum and browser-local progress. It has no student accounts, remote tutor, shared school database, telemetry, or server-side learner processing. It is not ready to collect school records. Only the latest reviewed main branch is supported.

Privately report vulnerabilities or suspected malicious contributions at https://github.com/kirkwarren/openpath/security/advisories/new. Include affected revision, reproduction steps using fictional data, impact, and proposed mitigation. Do not disclose secrets, real children's records, or weaponized payloads in public issues. We aim to acknowledge reports within seven days; this volunteer project has no guaranteed response SLA.

## Threats and controls

- **Content poisoning:** curriculum is data-only JSON with strict fields, lengths, answer bounds, unique identifiers, provenance fields, and limited text. Human reviewers must still catch false facts, biased framing, deceptive answer keys, harmful advice, plagiarism, and mistranslations. Pattern matching does not reliably detect semantic poisoning or all prompt injection.
- **Script injection:** lesson text is escaped during HTML rendering; markup and URLs are rejected from curriculum; a same-origin script policy blocks inline/remote scripts. Inline styles remain permitted for the current UI. Browser data is validated before use.
- **Supply chain:** no application dependencies. CI actions are pinned to full commits. New dependencies or tools require explicit maintainer review.
- **Malicious PRs:** protected main, code-owner review, stale-approval dismissal, required tests, no force pushes/deletion, and maintainer approval for external workflow runs. CI has read-only permissions, no production secrets, no persistent credentials, and runs on disposable GitHub-hosted runners. The `pull_request_target` event is not used.
- **Agent manipulation:** no automatic agent executes issue text; no agent has merge/deploy authority. Operators must treat all external text as data and review commands.
- **Deployment compromise:** contributions do not deploy automatically. The maintainer releases reviewed code separately to Vercel. Never expose Vercel tokens to PR workflows. Repository administrators and deployment-account owners remain trust roots.

Source hygiene checks are heuristic and not a professional penetration test. A malicious change can alter tests as well as code, so reviewers must inspect test/workflow/policy diffs. No check guarantees that a contribution is safe. Recruit an independent security reviewer and educator before a school pilot.

## Incident response

Pause merges and deployments; preserve the suspicious PR, commit IDs, and relevant logs. Review the deployed revision, roll back to the last known-good Vercel deployment if affected, revoke exposed credentials if any, and investigate the entire change history. Document a fix and regression test before resuming. Notify affected users if user data or safety was impacted. Never run a suspected payload with secrets to investigate it.
