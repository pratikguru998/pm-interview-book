// Behavioral & Leadership questions. Model answers are illustrative STAR stories:
// replace the details with your own real experiences.
export default [
  {
    id: 'beh-disagree-engineering',
    title: 'Tell me about a time you disagreed with an engineering lead',
    category: 'behavioral',
    subcategory: 'Conflict',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
    framework: 'star',
    concepts: ['stakeholder-management', 'tradeoffs-decisions'],
    whyAsked: 'PMs lead without authority. They want to see respect, data-driven persuasion, and that you can commit even when overruled.',
    clarifiers: ['(Pick a real disagreement with genuine stakes, ideally one where you changed your own mind partly.)'],
    diagram: `flowchart LR
  S["Situation: launch plan clash"] --> T["Task: align on approach"]
  T --> A1["Listened to understand their concern"]
  A1 --> A2["Brought user data"]
  A2 --> A3["Proposed a compromise: phased launch"]
  A3 --> R["Result: shipped on time, relationship stronger"]`,
    answer: `**What they look for.** Empathy, curiosity, data over ego, a constructive outcome, and what you learned.

**Sample STAR story (illustrative).**

**Situation.** At a fintech startup, I owned a new onboarding flow. Our engineering lead wanted to rebuild the identity verification service first (2 months) because it was fragile. I wanted to ship the new flow in 4 weeks because onboarding drop-off was 60%.

**Task.** We had one squad and couldn't do both. I needed us to agree on a plan the team believed in.

**Action.**
- I set up a 1:1 and **asked why he felt so strongly**. The service caused 3 incidents a month, and engineers were exhausted by on-call.
- I realized I'd underweighted that cost. I pulled data: 18% of onboarding drop-off actually happened *at* the verification step, due to timeouts.
- We reframed it together: **fix verification reliability first, as part of the onboarding project**, and phase the new UI.
- We agreed on a 2-week reliability sprint, then the UI, with shared success metrics: drop-off and incident count.

**Result.** Verification timeouts fell 80%, onboarding completion rose from 40% to 55% after the full launch, and incidents dropped to under 1 per month. The engineering lead later asked me to co-present the project.

**Learning.** "Disagreements often hide a shared goal. Now I start by understanding the other person's cost, not by defending my plan."`,
    pitfalls: ['A story where you simply "won".', 'Blaming or belittling engineering.', 'No measurable result.'],
    proTip: 'The best conflict stories include a moment where you updated your view. It shows you\'re coachable and collaborative.',
    followUps: ['What would you do if you still disagreed after all that?', 'How did you keep the relationship healthy?'],
  },
  {
    id: 'beh-biggest-failure',
    title: 'Tell me about your biggest failure',
    category: 'behavioral',
    subcategory: 'Failure & learning',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Amazon', 'Google', 'Meta', 'Stripe'],
    framework: 'star',
    concepts: ['mvp', 'tradeoffs-decisions'],
    whyAsked: 'Tests self-awareness, ownership and learning. A dodge ("I work too hard") is a red flag.',
    clarifiers: [],
    diagram: `flowchart LR
  F["Real failure with real impact"] --> O["Own it: what I did wrong"] --> L["Specific lesson"] --> C["How I changed behaviour since: proof"]`,
    answer: `**What they look for.** A real failure, clear ownership (no blaming), a specific lesson, and **evidence that you've applied it since**.

**Sample STAR story (illustrative).**

**Situation.** I led a "smart scheduling" feature for a B2B calendar product. Sales said many customers wanted it.

**Task.** Deliver it in one quarter and drive adoption.

**Action (and the mistake).** I relied on sales anecdotes and five enthusiastic customer calls, and **skipped validating the problem with a wider sample**. We built the full ML-powered version over 3 months instead of testing a simple version first.

**Result.** After launch, only 4% of accounts used it. Customer interviews revealed that the pain was real for a few large accounts, but most users preferred manual control. We'd spent a quarter of engineering time on it.

**What I did next.** I owned it in the retro, shared the data openly with my director, and we simplified the feature into an optional add-on.

**Learning + proof.** I now validate demand with a cheap test before building. On my next project, a fake-door test showed 2% interest, so we killed the idea in a week and saved the quarter. I also make sure I talk to "silent majority" users, not just the loudest voices.`,
    pitfalls: ['A fake failure or one caused entirely by others.', 'No lesson, or a lesson with no evidence of change.'],
    followUps: ['What would you do differently now?'],
  },
  {
    id: 'beh-influence-without-authority',
    title: 'Describe a time you influenced a team you had no authority over',
    category: 'behavioral',
    subcategory: 'Influence',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Microsoft', 'Amazon'],
    framework: 'star',
    concepts: ['stakeholder-management', 'okrs'],
    whyAsked: 'Influencing without authority is the core PM skill.',
    clarifiers: [],
    diagram: `flowchart LR
  U["Understand their goals"] --> W["Find the win-win"] --> E["Evidence"] --> C["Co-create"] --> R["Result"]`,
    answer: `**Sample STAR story (illustrative).**

**Situation.** My checkout team needed the platform payments team to support a new payment method (a local wallet) to grow in Indonesia. It wasn't on their roadmap.

**Task.** Get it prioritized within one quarter without escalating.

**Action.**
- I met their PM to understand **their OKRs**: lowering payment failure rates and reducing provider costs.
- I discovered the wallet had **lower processing fees** and higher success rates in Indonesia, so it helped *their* goals too.
- I brought data: 30% of checkout abandonment in Indonesia happened at payment, and I estimated revenue upside.
- I offered resources: one of my engineers would help build it, reducing their cost.
- Together we presented a joint proposal to both directors.

**Result.** The integration shipped in 8 weeks. Indonesian conversion rose 12% and the payments team hit their cost reduction goal. Our teams went on to collaborate on two more projects.

**Learning.** "Influence starts with their incentives. Frame your request as progress on their goals."`,
    pitfalls: ['Escalating as the first move.'],
    followUps: [],
  },
  {
    id: 'beh-tough-prioritization',
    title: 'Tell me about a time you had to say no to an important stakeholder',
    category: 'behavioral',
    subcategory: 'Prioritization',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Amazon', 'Atlassian', 'Salesforce'],
    framework: 'star',
    concepts: ['prioritization', 'stakeholder-management'],
    whyAsked: 'Tests courage, clear reasoning, and preserving relationships.',
    clarifiers: [],
    diagram: `flowchart LR
  R["Request from VP Sales"] --> E["Evaluate against goals + data"] --> N["Say no, with reasoning + alternative"] --> K["Keep the relationship"]`,
    answer: `**Sample STAR story (illustrative).**

**Situation.** Our VP of Sales asked for a custom reporting feature for a prospect worth $200k ARR, needed within 6 weeks.
**Task.** My team was mid-way through a retention project projected to save $1M+ ARR from churn.
**Action.** I evaluated the request: only that one prospect needed it, and it would delay the retention work by 2 months. I met the VP, acknowledged the deal's importance, shared the trade-off openly with numbers, and **offered alternatives**: an export to their BI tool (built in 1 week), plus putting native reporting on the roadmap for next quarter if 5+ customers asked.
**Result.** The prospect accepted the export solution and signed. The retention project shipped on time and cut churn by 15%. The VP later involved me earlier in deal discussions.
**Learning.** "A no lands well when it comes with transparent reasoning and an alternative."`,
    pitfalls: ['A no without alternatives or empathy.'],
    followUps: [],
  },
  {
    id: 'beh-ambiguity',
    title: 'Tell me about a time you worked through high ambiguity',
    category: 'behavioral',
    subcategory: 'Ambiguity',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Meta', 'Amazon'],
    framework: 'star',
    concepts: ['mvp', 'okrs', 'roadmapping'],
    whyAsked: 'PMs create clarity from chaos.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Vague mandate"] --> R["Research: users, data"] --> H["Hypotheses"] --> T["Quick tests"] --> P["Clear strategy + metrics"]`,
    answer: `**Sample STAR story (illustrative).**

**Situation.** Leadership asked me to "figure out our SMB strategy". There was no defined problem, team or metric.
**Task.** Turn it into a concrete plan within 6 weeks.
**Action.** I broke the ambiguity into questions: who are SMBs for us, what do they need, and where do we lose them? I interviewed 25 SMB customers, analysed funnel data (SMB trial-to-paid conversion was half the enterprise rate), and found onboarding complexity was the main barrier. I proposed 3 hypotheses and ran two quick tests: a guided setup wizard and a simpler pricing page.
**Result.** The wizard test lifted SMB trial conversion by 22%. I presented a strategy with a dedicated SMB onboarding team, and it was funded with clear OKRs.
**Learning.** "In ambiguity, structure the unknowns, then reduce them with cheap experiments."`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'beh-why-pm',
    title: 'Why do you want to be a product manager?',
    category: 'behavioral',
    subcategory: 'Motivation',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
    framework: 'star',
    concepts: ['jobs-to-be-done'],
    whyAsked: 'Tests genuine motivation and an accurate understanding of the role.',
    clarifiers: [],
    diagram: `flowchart LR
  P["Past: moments you did PM-like work"] --> N["Now: what energizes you"] --> F["Future: why this role and this company"]`,
    answer: `**Structure: past → present → future.**

- **Past (proof):** "As an engineer, I kept getting pulled into conversations about *what* to build. I started running user interviews for our team, and a feature I proposed based on them raised retention by 8%."
- **Present (what energizes you):** "I love the intersection of user problems, business outcomes and technology, and helping a team rally around solving the right problem."
- **Future (why here):** "Your product serves [segment], and the problem of [X] is something I care about because [personal connection]. I want to own outcomes, not just outputs."

**Avoid:** "I want to be the CEO of the product" or "I want to make decisions". PMs facilitate decisions and serve the team.`,
    pitfalls: ['Describing PM as being "the boss".', 'A generic answer with no evidence.'],
    followUps: [],
  },
  {
    id: 'beh-data-decision',
    title: 'Tell me about a decision you made using data',
    category: 'behavioral',
    subcategory: 'Analytical',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Amazon', 'Meta', 'Airbnb'],
    framework: 'star',
    concepts: ['ab-testing', 'data-pitfalls'],
    whyAsked: 'Tests analytical rigour and humility about data.',
    clarifiers: [],
    diagram: `flowchart LR
  Q["Question"] --> D["Data: quantitative + qualitative"] --> I["Insight"] --> De["Decision"] --> R["Measured result"]`,
    answer: `**Sample STAR story (illustrative).**

**Situation.** Our mobile app's premium conversion was flat. The team wanted to add more premium features.
**Task.** Find the real lever.
**Action.** I analysed the funnel: 70% of users never *saw* the premium offer, because it was buried in settings. Cohort analysis showed users who hit the free-tier limit converted 5× more. I ran an A/B test showing the upgrade prompt at the moment users hit the limit, with clear value messaging.
**Result.** Conversion increased 35% with no new features built, saving a quarter of engineering work. Guardrail metrics (retention, ratings) stayed flat.
**Learning.** "Diagnose the funnel before building more features."`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'beh-launch-led',
    title: 'Walk me through a product launch you led end to end',
    category: 'behavioral',
    subcategory: 'Ownership & execution',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
    framework: 'star',
    concepts: ['go-to-market', 'mvp', 'stakeholder-management'],
    whyAsked: 'Tests end-to-end ownership across discovery, delivery, launch and measurement.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Discovery"] --> P["Define + prioritize"] --> B["Build with eng/design"] --> L["Launch: beta → GA"] --> M["Measure + iterate"]`,
    answer: `**Cover all phases briefly, then go deep on 1–2 hard moments.**

**Sample story (illustrative).**
- **Discovery:** support tickets showed confusion about invoices. 20 interviews with finance admins revealed they needed self-serve invoice downloads and edits.
- **Define:** wrote a PRD with the problem, success metric (cut billing tickets by 40%) and non-goals.
- **Build:** worked with design on prototypes tested with 6 customers, and with engineering on a phased plan.
- **Hard moment:** a tax compliance issue appeared mid-build. I brought in legal early, re-scoped v1 to exclude edits in 2 countries, and kept the date.
- **Launch:** beta with 50 accounts, then GA with help docs, sales enablement and in-app announcements.
- **Result:** billing tickets fell 48%, admin NPS rose 15 points, and v2 added the remaining countries.
- **Learning:** involve compliance in discovery, not mid-build.`,
    pitfalls: ['Listing tasks without showing your decisions and impact.'],
    followUps: [],
  },
  {
    id: 'beh-customer-obsession',
    title: 'Tell me about a time you went above and beyond for a customer',
    category: 'behavioral',
    subcategory: 'Customer obsession',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Amazon'],
    framework: 'star',
    concepts: ['jobs-to-be-done', 'user-journey-mapping'],
    whyAsked: 'An Amazon leadership principle favourite.',
    clarifiers: [],
    diagram: `flowchart LR
  C["Customer pain"] --> D["Dig deep: root cause"] --> F["Fix for them AND systemically"]`,
    answer: `**Sample story (illustrative).** A key customer churned because of slow data exports. Instead of only fixing their export, I shadowed their analyst for a day, found they exported data just to build one weekly chart, and we built a scheduled dashboard report. It won them back, and the feature was adopted by 30% of accounts.

**Key:** solve the individual case, then make the fix work at scale.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'beh-mentoring',
    title: 'Tell me about a time you helped someone on your team grow',
    category: 'behavioral',
    subcategory: 'Leadership',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Google', 'Microsoft'],
    framework: 'star',
    concepts: ['stakeholder-management'],
    whyAsked: 'Tests leadership beyond your own output.',
    clarifiers: [],
    diagram: `flowchart LR
  O["Observed potential/gap"] --> C["Coached with clear goals"] --> S["Gave stretch opportunity"] --> R["Their growth outcome"]`,
    answer: `**Sample story (illustrative).** A junior designer struggled to present to execs. I set up weekly practice sessions, shared frameworks for structuring their story, then gave them the lead on the next roadmap review with me as backup. They presented confidently, got praise from the VP, and were promoted 6 months later.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'beh-tell-me-about-yourself',
    title: 'Tell me about yourself',
    category: 'behavioral',
    subcategory: 'Introduction',
    difficulty: 'Easy',
    learningValue: 5,
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Stripe'],
    framework: 'star',
    concepts: ['personas'],
    whyAsked: 'The first impression. Sets the narrative for the whole interview.',
    clarifiers: [],
    diagram: `flowchart LR
  P["Present: current role + one big win"] --> Pa["Past: how you got here, key skills"] --> F["Future: why this role"]`,
    answer: `**Structure (90 seconds): present → past → future.**

- **Present:** "I'm a PM at [Company], leading [area]. Recently I [a measurable win: e.g. launched X, which grew Y by Z%]."
- **Past:** "Before that, I was a [role], where I learned [relevant skill]. That's where I discovered I love [user problems / data / building]."
- **Future:** "I'm excited about this role because [specific connection to their product, mission or challenges]."

Keep it tight, include one or two numbers, and end with a natural hook into your strengths.`,
    pitfalls: ['A chronological life story.', 'Going over 2 minutes.'],
    followUps: [],
  },
  {
    id: 'beh-tight-deadline',
    title: 'Tell me about a time you delivered under a very tight deadline',
    category: 'behavioral',
    subcategory: 'Ownership & execution',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Amazon', 'Uber'],
    framework: 'star',
    concepts: ['mvp', 'prioritization', 'tradeoffs-decisions'],
    whyAsked: 'Tests scope management and composure.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Fixed deadline"] --> S["Cut scope ruthlessly"] --> C["Clear communication"] --> R["Delivered core value"]`,
    answer: `**Sample story (illustrative).** A regulatory deadline gave us 5 weeks to add consent management. I separated legally required items from nice-to-haves, cut scope to the compliance core, ran daily 15-minute syncs with legal and engineering, and pre-wrote help content. We shipped 3 days early with zero compliance issues, then added UX polish in the next sprint.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'beh-feedback-received',
    title: 'Tell me about a time you received difficult feedback',
    category: 'behavioral',
    subcategory: 'Self-awareness',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Meta', 'Netflix'],
    framework: 'star',
    concepts: ['stakeholder-management'],
    whyAsked: 'Tests coachability and growth mindset.',
    clarifiers: [],
    diagram: `flowchart LR
  F["Feedback"] --> L["Listen, don't defend"] --> A["Act on it"] --> P["Proof of change"]`,
    answer: `**Sample story (illustrative).** My manager told me engineers felt I handed them solutions instead of problems. It stung, but I asked for specific examples. I changed my approach: I now share the problem, the data and the constraints, then run solution workshops with engineering and design. Engagement in planning rose, and a better idea from an engineer cut a project's scope in half. In my next 360 review, collaboration was rated my top strength.`,
    pitfalls: ['Choosing trivial feedback.'],
    followUps: [],
  },
  {
    id: 'beh-wrong-decision-reversed',
    title: 'Tell me about a time you changed your mind based on new information',
    category: 'behavioral',
    subcategory: 'Judgement',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Amazon', 'Stripe'],
    framework: 'star',
    concepts: ['tradeoffs-decisions', 'ab-testing'],
    whyAsked: 'Tests intellectual honesty ("strong opinions, weakly held").',
    clarifiers: [],
    diagram: `flowchart LR
  B["Belief"] --> E["New evidence"] --> U["Updated decision"] --> R["Better outcome"]`,
    answer: `**Sample story (illustrative).** I was convinced a redesigned homepage would improve engagement. The A/B test showed a 4% drop in returning-user sessions. Instead of rationalizing it, I dug into the segments: new users loved it, power users lost their shortcuts. We kept the new design for new users and gave power users a customizable layout. Overall engagement rose 6%.`,
    pitfalls: [],
    followUps: [],
  },
];
