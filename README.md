# OpenPath Learning Studio

An independent, MIT-licensed education platform alpha, inspired by the combination of focused academics, mastery-based progression, and practical life skills. Not affiliated with Alpha School. No claims of accelerated learning outcomes.

**[Try the demo](https://openpath-two.vercel.app) · [Find a starter issue](https://github.com/kirkwarren/openpath/issues) · [Join discussions](https://github.com/kirkwarren/openpath/discussions) · [Contribution guide](CONTRIBUTING.md)**

Teachers, translators, parents, developers, and human-supervised coding agents are welcome worldwide. See [governance](GOVERNANCE.md), [agent instructions](AGENTS.md), and the [security policy](SECURITY.md). All current lessons are original sample content awaiting educator review. Help improve them using the [review rubric](docs/CONTENT_REVIEW.md).

## Run

Requires Git and Node.js 22 or newer. No application dependencies or build step.

```sh
npm start
```

Open http://127.0.0.1:4173. For Vercel, run `npx vercel --prod` from this directory; `vercel.json` serves `dist` as static output. Authentication with your Vercel account is required.

## Working features

- Elementary and middle school switcher with separate device-local progress.
- 18 original sample lessons across mathematics, reading/language, and science.
- Lesson explanations, answer checking, hints, retry and sequential progression.
- Four practical projects with saved reflections.
- Progress history, JSON export, and a guide view of the current device's learner.
- Responsive layout, keyboard-accessible dialogs and controls.
- Public MIT-licensed source repository linked from the sidebar.

Elementary content samples foundational skills typically encountered across grades 1–5; it is not a complete curriculum, grade placement, or kindergarten literacy program. Middle school content is also a sample. Each skill has one practice question, so a completion indicator does not establish educational mastery. Hints are authored content, not a live AI tutor. Repeated attempts can reveal the answer; use these as learning activities rather than secure assessments.

## Data and architecture

Static HTML, CSS, and vanilla JavaScript make this version easy to fork and host. `dist/content/elementary.json` and `dist/content/middle.json` contain data-only curriculum. `dist/app.js` contains shared application behavior. Each lesson contains a title, explanation, question, answer choices, correct index, hint, and rationale. The shared `dist/content-validation.js` validates curriculum in both the browser and CI. Text is escaped at display boundaries. `dist/style.css` contains the responsive theme. A strict same-origin script policy is configured in `vercel.json`.

Progress and reflections use browser localStorage, scoped by school band. There are no accounts, server database, analytics, remote fonts, or remote tutor calls. The guide view is not an authorization boundary. Clearing browser storage removes progress. System fonts keep the app self-contained. The exported JSON is a backup for inspection; importing backups is not yet supported.

## Roadmap

1. **Playable alpha (this version):** two school bands, sample lessons, projects, local progress, and guide view.
2. **Curriculum pilot:** have educators review content, add grade-specific standards and prerequisite maps, expand item banks, provide accessible read-aloud support, and add spaced review with unseen questions. Validate learning outcomes in a supervised pilot.
3. **Multi-user school pilot:** introduce a database, authenticated learner and guide roles, server-enforced school isolation, assignment management, and parent/guardian workflows. Establish consent, data retention/deletion, accessibility review, and security testing before collecting children's personal information.
4. **Optional AI tutoring:** use a server-side provider adapter with protected secrets, curated lesson context, age-appropriate behavior, bounded hints, guide escalation, rate limits, and quality evaluation. Keep a non-AI learning path available.
5. **Open-source community launch:** public GitHub contribution hub, contributor and agent guides, issue templates, automated checks, and human review gates. Recruit educator, accessibility, translation, and security reviewers before classroom deployment.

## Checks and contribution safety

Run `npm run check` and `npm test`. CI uses pinned actions, read-only permissions, disposable hosted runners, and no production credentials. Human review is still required: structural checks and a small set of suspicious-pattern checks cannot prove educational correctness, absence of bias, or absence of malicious code. There is no automatic merge, agent executor, or PR deployment. Release reviewed main to Vercel manually. See SECURITY.md for residual risks and incident response.

## Acceptance checks

Verify that both bands show their own content; a correct answer updates progress only in its band; switching back or reloading preserves progress; incorrect answers offer hints and retry; projects save safely as text; all views remain usable at mobile width; exports contain only the active band's local data.

## License

MIT; see LICENSE. All lesson text in this release is original sample content. The package includes no Alpha School curriculum or proprietary technology.
