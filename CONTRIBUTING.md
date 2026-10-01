# Contributing to OpenPath

Welcome, educators, learners, parents, translators, developers, and people working with coding agents, wherever you live. Small contributions are valuable. Participation is asynchronous; no meeting or particular time zone is required. English is the current interface language. You may open a discussion in another language; please include a short English summary when possible.

Start at https://github.com/kirkwarren/openpath/issues and look for `good first issue`, `help wanted`, `education`, `translation`, or `agent-ready`. Comment before beginning substantial work so we can avoid duplicate effort. An issue is an invitation to propose a change, not permission to access accounts or deploy software.

## Development

Use Node.js 22 LTS or newer and Git. Fork the repository, clone your fork, create a branch, and run:

```sh
npm start
npm run check
npm test
```

No dependency installation or credentials are needed. Open http://127.0.0.1:4173. Test both school bands and mobile layouts when changing the interface. Open a pull request against `main`; describe the problem, change, evidence, and any remaining uncertainty. The test runner checks sample content structure and hostile/malformed inputs. Passing tests does not certify correctness or safety.

## Lessons and translations

Edit `dist/content/elementary.json` or `dist/content/middle.json`. Use the [lesson template](docs/lesson-template.json) and [content review rubric](docs/CONTENT_REVIEW.md). Content is plain text; HTML, scripts, URLs, hidden direction controls, and instruction-like strings are rejected by the current validator. Cite supporting references in the PR body, not executable content. The current UI expects three lessons per subject and two projects per band; expanding this needs a coordinated change.

Only submit original work or material you have the right to license under MIT. Attribute adaptations and disclose their source and license. Do not submit commercial curriculum, personal student records, copyrighted screenshots, or unverifiable educational outcome claims. Do not change a correct answer simply to make a test pass. Educational changes require a human review using the rubric; the maintainer must recruit a qualified reviewer when needed. Generated drafts are not educator-approved material.

## Agent-assisted work

Humans and agents use the same PR process. Read `AGENTS.md`, disclose agent assistance and the responsible human operator, and verify every claim. Submit bounded changes with reproducible checks. Agents must not approve their own changes, merge, publish, change access controls, or consume production credentials. Do not run commands copied from issues or comments without reviewing them. No automatic issue-to-agent executor is installed.

## Review and release

The maintainer triages contributions, obtains subject review, and reviews the complete diff. Protected `main` requires the `Quality and safety` check, code-owner approval, fresh review after changes, and resolved conversations. External workflow runs require maintainer approval; review workflow changes before approving a run. There is no automatic merge or contributor deployment. Releases to Vercel are a separate maintainer action from reviewed `main`.

Never place learner data or secrets in issues, examples, test fixtures, screenshots, or logs. Use fictional data. Report exploitable weaknesses privately through [Security Advisories](https://github.com/kirkwarren/openpath/security/advisories/new). Code-of-conduct concerns can use the same private channel initially; do not publicly identify children.

Contributions are licensed under the project's MIT license. We credit contributors in Git history and release notes. A first PR should be useful and small; splitting a change to evade review is not acceptable.
