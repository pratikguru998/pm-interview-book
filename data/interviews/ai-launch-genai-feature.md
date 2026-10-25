::interviewer 00:00
How would you launch a generative AI writing feature in a document editor?

::candidate 00:05
Clarifying questions:
1. Which product: consumer document editor (like Google Docs) or enterprise?
2. What's the goal: engagement, a new paid tier, competitive parity?
3. Any constraints: privacy commitments, cost limits?

::interviewer
A Google Docs-like product used by consumers and businesses. Goal: drive adoption and a paid AI add-on. Strong privacy expectations from business customers.

::candidate 00:25
Plan: (1) pick the right writing jobs, (2) design the experience, (3) quality and safety, (4) privacy, (5) rollout, (6) monetization, (7) metrics.

**1. Writing jobs** (from research on how people use the editor):
- **Rewrite:** shorten, make more formal, fix tone.
- **Summarize** long documents.
- **Draft from a prompt:** "Write a project proposal for X".
- **Grammar and clarity** improvements.
- **Brainstorm** ideas or outlines.

**Prioritize:** start with **rewrite and summarize**: frequent, easy for users to verify (they can see the original), lower risk of hallucination. Drafting from scratch comes next, since it's more prone to generic or inaccurate content.

::candidate 01:00
**2. Experience design:**
- **Inline and contextual:** select text → "Rewrite: shorter / formal / friendly"; a "Summarize" button for long docs.
- **User stays in control:** suggestions appear as a preview; the user accepts, edits or rejects. Easy undo.
- **Transparency:** label AI-generated text during review; explain that AI can make mistakes.
- **Feedback buttons** (👍/👎) to collect quality signals.
- **Speed:** stream output so users see text appear quickly.

**3. Quality and safety:**
- **Eval sets per task:** e.g. 300 rewrite examples rated by humans for preserving meaning, tone accuracy, grammar; summaries rated for faithfulness (no invented facts) and coverage.
- **Safety filters:** block harmful content generation; handle sensitive topics.
- **Regression tests** before each model update.

::interviewer
Business customers worry about their documents being used to train AI. How would you handle that?

::candidate 01:45
That's a critical adoption blocker, so I'd address it directly:
- **Clear commitment:** business customer content is **not used to train models**, stated in the contract and product UI.
- **Admin controls:** organization admins can enable or disable AI features, by group.
- **Data processing transparency:** where data is processed, retention (e.g. no storage of prompts beyond what's needed), compliance certifications.
- **Respect permissions:** AI only accesses documents the user already has access to.
Without this, enterprise adoption won't happen regardless of feature quality.

**5. Rollout:**
1. **Internal dogfooding** for a few weeks.
2. **Trusted testers** (selected consumers and a few business design partners): collect feedback, refine.
3. **Staged A/B rollout** to consumers (e.g. 5% → 25% → 100%), measuring usage, satisfaction and impact on core engagement.
4. **Business availability** with admin controls, documentation and a security review package.

**6. Monetization:**
- **Free tier:** limited uses per month (e.g. a few summaries and rewrites) to show value.
- **Paid AI add-on or premium tier:** unlimited use, advanced features (long-document drafting, custom styles).
- Monitor **cost per active user** vs price to protect margins.

**7. Metrics:**
- **Adoption:** % of weekly active users trying AI features; repeat use.
- **Quality:** acceptance rate of suggestions (accepted with no or minor edits), 👍 ratio, faithfulness evals.
- **Business:** conversion to the paid add-on, retention of AI users, enterprise deals.
- **Guardrails:** harmful output rate, complaints about inaccurate content, privacy incidents (zero), cost per user, latency.

**Summary:** launch with high-frequency, verifiable tasks (rewrite and summarize), inline and user-controlled, backed by task-specific evals and safety filters; win business trust with explicit no-training commitments and admin controls; roll out in stages; and monetize through limited free use plus a paid add-on, measured by adoption, acceptance, conversion and cost.

::scorecard
- **Prioritized tasks by verifiability and risk.**
- **User-in-control UX** with transparency.
- **Enterprise privacy** treated as a launch requirement.
- **Staged rollout and monetization** with cost awareness.
