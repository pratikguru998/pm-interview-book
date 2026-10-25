// AI / ML Product questions.
export default [
  {
    id: 'ai-customer-support-bot',
    title: 'Design an AI customer support agent for an e-commerce company',
    category: 'ai-product',
    subcategory: 'Design an AI product',
    difficulty: 'Hard',
    learningValue: 5,
    companies: ['Amazon', 'Shopify', 'Google', 'Anthropic'],
    framework: 'ai-product',
    concepts: ['llm-evals', 'trust-safety', 'guardrail-metrics', 'ml-basics'],
    whyAsked: 'A very common modern AI PM question. Tests problem framing, quality bar, escalation design and evaluation.',
    clarifiers: ['Which channels: chat, email, voice?', 'Can the agent take actions (refunds) or only answer?', 'What is the current support volume and cost?'],
    diagram: `flowchart TD
  C["💬 Customer message"] --> I["Intent + account context"]
  I --> R["RAG: policies, order data"]
  R --> L["LLM response / action"]
  L --> G{"Confidence + policy check"}
  G -->|"high, low risk"| A["Answer / do action: track order, start return"]
  G -->|"low or high risk: refunds over $X, angry"| H["👩‍💼 Hand off to human with summary"]
  A & H --> F["Feedback → evals"]`,
    answer: `**Problem first.** Support volume is high, wait times are long, and costs grow with orders. Many tickets are repetitive ("Where's my order?", "How do I return this?"). Goal: resolve simple issues instantly and give human agents more time for complex ones.

**Why AI.** Natural-language understanding across varied phrasing, and the ability to use order data, which a scripted bot handles poorly.

**Scope v1 by risk.**
- *Low risk, high volume:* order status, return policy, return label creation, address changes before shipping → the AI handles these fully.
- *Medium risk:* refunds under $50 → the AI acts within policy rules.
- *High risk:* fraud claims, large refunds, angry or VIP customers → hand off to a human with a summary.

**Architecture.** Intent detection → retrieval over policies and the customer's orders (RAG) → LLM with tool calls (order lookup, start return) → policy guardrails → response. Always offer "talk to a human".

**Quality bar & evals.**
- Offline: a golden set of 500 real tickets scored for correctness, policy compliance and tone. Hallucination rate near zero on policy questions.
- Online: **resolution rate without human help**, CSAT vs human agents, repeat contact within 7 days (was it really solved?).

**Guardrails.** Wrong refunds and policy violations, escalation latency, cost per conversation, complaints about the bot.

**Rollout.** Shadow mode (AI drafts, humans send) → 10% of chats for low-risk intents → expand by intent as evals pass.`,
    pitfalls: ['Letting the AI handle everything on day one.', 'Measuring deflection only. Customers may give up rather than be helped.', 'No path to a human.'],
    proTip: 'Scope by risk level and roll out intent by intent with shadow mode. It shows mature AI product judgement.',
    followUps: ['How would you prevent the bot from inventing refund policies?', 'How do you decide the refund limit for the AI?'],
  },
  {
    id: 'ai-should-use-ai',
    title: 'Your CEO wants "AI in the product". How do you decide where to use it?',
    category: 'ai-product',
    subcategory: 'AI strategy',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Microsoft', 'Google', 'Salesforce', 'Atlassian'],
    framework: 'ai-product',
    concepts: ['jobs-to-be-done', 'prioritization', 'llm-evals', 'unit-economics'],
    whyAsked: 'Tests resisting hype and starting from problems.',
    clarifiers: ['What is our product and who are our users?', 'What triggered the request: competitors, investors?'],
    diagram: `flowchart LR
  P["User pain points list"] --> F{"AI-suited? language, patterns, personalization, scale"}
  F --> S["Score: value × feasibility × data × risk"]
  S --> T["Top 2: prototype + eval"] --> L["Launch the one with proven lift"]`,
    answer: `**Reframe.** "AI" is a tool, not a goal. I'd align with the CEO on the business goal (retention, competitive parity, new revenue).

**Process.**
1. **List user pains** from research and data: where do users spend time, get stuck, or do repetitive work?
2. **Filter for AI fit:** tasks involving language (writing, summarizing), pattern recognition, personalization or prediction, where errors are tolerable or correctable.
3. **Score opportunities:** user value, frequency, data availability, error cost, compute cost per use, competitive differentiation.
4. **Prototype quickly** and evaluate against a quality bar with real users.
5. **Launch** where there's measurable lift. Iterate with feedback loops.

**Example (project management tool).** Auto-summarize long threads, draft status updates, predict delayed tasks. Status-update drafting scores highest: frequent, low error cost, clear time saved.

**Communicate.** Give the CEO a portfolio of quick wins and one bigger bet, with metrics.`,
    pitfalls: ['Adding a chatbot by default.', 'Ignoring cost per use and error cost.'],
    followUps: [],
  },
  {
    id: 'ai-measure-recommendations',
    title: 'How would you improve and measure a recommendation system for an e-commerce home page?',
    category: 'ai-product',
    subcategory: 'Recommendation systems',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Amazon', 'Netflix', 'Spotify', 'Etsy'],
    framework: 'ai-product',
    concepts: ['recommendation-systems', 'ab-testing', 'guardrail-metrics'],
    whyAsked: 'Tests recommendation system thinking: objectives, cold start, diversity and evaluation.',
    clarifiers: ['What is the business goal: revenue, discovery, retention?', 'New vs returning users?'],
    diagram: `flowchart LR
  O["Objective: long-term purchases, not just clicks"] --> C["Candidates"] --> R["Ranking model"] --> D["Re-rank: diversity, freshness"] --> M["A/B: revenue per visitor, return visits"]`,
    answer: `**Objective.** Optimizing for clicks leads to clickbait. Optimize for **purchases and long-term return visits**, with diversity.

**Improvements.**
- **Cold start:** for new users, use popular items in context (location, season, traffic source) and quick onboarding signals.
- **Better signals:** add-to-cart, dwell time, purchases, returns (negative signal).
- **Diversity & freshness:** avoid showing 10 similar items, and include exploration of new products.
- **Context:** time of day, device, recent session behaviour.
- **Explanations:** "Because you viewed X" builds trust.

**Evaluation.** Offline: precision@k, NDCG, coverage. Online A/B: revenue per visitor, conversion, CTR on recommendations, return visits within 7 days. **Guardrails:** return rate, catalog coverage (long-tail sellers), latency.`,
    pitfalls: ['Optimizing CTR alone.'],
    followUps: [],
  },
  {
    id: 'ai-hallucination-risk',
    title: 'How would you reduce hallucinations in an AI product used for legal or medical information?',
    category: 'ai-product',
    subcategory: 'AI quality & safety',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Google', 'Microsoft', 'Anthropic', 'OpenAI'],
    framework: 'ai-product',
    concepts: ['llm-evals', 'trust-safety', 'ml-basics'],
    whyAsked: 'High-stakes AI. Tests layered mitigation and product design for uncertainty.',
    clarifiers: [],
    diagram: `flowchart TD
  Q["Question"] --> RAG["Retrieve authoritative sources"]
  RAG --> L["LLM answers ONLY from sources, with citations"]
  L --> V["Verifier: claim ↔ source check"]
  V --> U["UI: citations, confidence, 'consult a professional'"]
  U --> E["Expert review sampling + evals"]`,
    answer: `**Layers of mitigation.**
1. **Grounding (RAG):** retrieve from vetted, current sources (statutes, clinical guidelines) and instruct the model to answer only from them.
2. **Citations:** every claim links to its source passage, so users can verify.
3. **Verification:** a second check that claims are supported by the retrieved text, and blocks answers that aren't.
4. **Abstain when unsure:** "I don't have enough information" is better than a confident guess.
5. **Scope limits:** for high-risk questions (dosage, specific legal advice), give general information plus a referral to a professional.
6. **Evals:** an expert-labelled golden set, hallucination rate, citation accuracy, regular red-teaming.
7. **Human in the loop:** for professional tools, the AI drafts and an expert approves.

**Metrics.** Unsupported-claim rate, citation accuracy, expert rating, abstention rate (not too high).`,
    pitfalls: ['Relying on "a bigger model" alone.'],
    followUps: [],
  },
  {
    id: 'ai-coding-assistant-metrics',
    title: 'How would you measure the success of an AI coding assistant?',
    category: 'ai-product',
    subcategory: 'AI metrics',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['GitHub', 'Microsoft', 'Google', 'Anthropic'],
    framework: 'ai-product',
    concepts: ['llm-evals', 'north-star-metric', 'guardrail-metrics'],
    whyAsked: 'Concrete AI product metrics: acceptance vs real productivity.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Suggestions shown"] --> B["Accepted"] --> C["Retained in code after 30 min"] --> D["Shipped, no bugs"]
  D --> N["⭐ Developer time saved / tasks completed"]`,
    answer: `**Funnel metrics.** Suggestions shown → acceptance rate → **retention of accepted code** (still there after 30 minutes, i.e. not deleted) → merged to production.

**Outcome metrics.** Time to complete tasks (controlled studies), pull request cycle time, developer satisfaction (surveys), weekly active developers and retention.

**Guardrails.** Bugs or security vulnerabilities introduced, code review rejection rate, latency (suggestions must be fast), cost per developer.

**NSM.** Weekly active developers who accept and keep AI-generated code. Validate the productivity gain with periodic studies.`,
    pitfalls: ['Using acceptance rate alone; accepted code may be deleted or buggy.'],
    followUps: [],
  },
  {
    id: 'ai-fraud-detection',
    title: 'Design a fraud detection system for a payments product. How do you set the trade-offs?',
    category: 'ai-product',
    subcategory: 'Classification trade-offs',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Stripe', 'PayPal', 'Amazon'],
    framework: 'ai-product',
    concepts: ['ml-basics', 'trust-safety', 'tradeoffs-decisions'],
    whyAsked: 'The precision vs recall trade-off with real money at stake.',
    clarifiers: [],
    diagram: `flowchart LR
  T["Transaction"] --> S["Risk score (ML)"]
  S -->|"low"| A["✅ Approve"]
  S -->|"medium"| C["🔐 Step-up: 3DS / OTP"]
  S -->|"high"| B["❌ Block + review"]`,
    answer: `**Costs of errors.**
- False negative (fraud missed): chargebacks, losses, lost merchant trust.
- False positive (legitimate payment blocked): lost revenue and frustrated customers. Often costlier in aggregate than fraud itself.

**Design.** ML risk score using device, behaviour, velocity, location, merchant category and network signals. **Three bands** instead of a binary decision: approve / step-up verification (OTP, 3-D Secure) / block. The middle band adds friction only where needed.

**Set thresholds by economics.** Choose the cutoffs that minimize total cost = fraud losses + lost good revenue + friction cost. Thresholds can differ by merchant risk appetite.

**Feedback loop.** Chargeback labels arrive weeks later, so manual review labels and fast feedback matter. Monitor for drift (fraudsters adapt).

**Metrics.** Fraud rate (basis points), false decline rate, step-up completion rate, approval rate.`,
    pitfalls: ['Treating it as block-or-approve only.'],
    followUps: [],
  },
  {
    id: 'ai-launch-genai-feature',
    title: 'How would you launch a generative AI writing feature in a document editor?',
    category: 'ai-product',
    subcategory: 'AI launch',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Microsoft', 'Notion'],
    framework: 'ai-product',
    concepts: ['llm-evals', 'go-to-market', 'pricing-models', 'ab-testing'],
    whyAsked: 'End-to-end AI feature launch: UX, evals, rollout and monetization.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Discovery: which writing jobs?"] --> P["Prototype + evals"] --> B["Beta: trusted testers"] --> A["A/B rollout"] --> M["Monetize: add-on or tier"]`,
    answer: `**Jobs.** Draft from a prompt, rewrite tone, summarize, fix grammar. Start with **rewrite and summarize**: frequent, easy to verify, low risk.

**UX.** Inline suggestions the user accepts or edits (the user stays in control), clear AI labelling, undo, feedback buttons.

**Quality.** An eval set by task type, human ratings for quality and tone, safety filters, latency target (streaming output within ~1 second).

**Rollout.** Internal testing → trusted testers → staged A/B rollout. Measure usage, acceptance, retention and satisfaction.

**Monetization.** Limited free uses, then an AI add-on or a higher tier. Track gross margin per user.

**Guardrails.** Harmful output rate, privacy (don't train on customer docs without consent), cost.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'ai-content-moderation',
    title: 'Design an AI content moderation system for a social platform',
    category: 'ai-product',
    subcategory: 'Trust & safety AI',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Meta', 'TikTok', 'Google'],
    framework: 'ai-product',
    concepts: ['trust-safety', 'ml-basics', 'guardrail-metrics'],
    whyAsked: 'Scale, precision/recall by harm type, human review and appeals.',
    clarifiers: [],
    diagram: `flowchart LR
  U["Upload"] --> C["Classifiers by harm type"]
  C -->|"clear violation"| R["Remove"]
  C -->|"uncertain"| H["Human review queue (prioritized by reach × severity)"]
  C -->|"OK"| P["Publish"]
  R --> A["Appeals"] --> L["Labels → retrain"]`,
    answer: `**Principles.** Different harms need different thresholds. Child safety and terrorism get very high recall (remove aggressively, with human review). Borderline speech gets high precision (avoid over-removal), or reduced distribution instead of removal.

**System.** Pre-publish scanning with classifiers (image, video, text), hash matching for known violating content, user reports, a **human review queue prioritized by severity × potential reach**, an appeals process, and labelled outcomes feeding retraining.

**Metrics.** Prevalence (views of violating content per 10k views), proactive detection rate, time to action, false positive rate (appeal overturn rate), reviewer wellbeing.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'ai-personalized-learning',
    title: 'Design an AI tutor for high school students',
    category: 'ai-product',
    subcategory: 'Design an AI product',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Khan Academy', 'Duolingo', 'Google'],
    framework: 'ai-product',
    concepts: ['llm-evals', 'personas', 'trust-safety', 'retention-cohorts'],
    whyAsked: 'AI design with pedagogy and safety constraints (minors, cheating).',
    clarifiers: [],
    diagram: `flowchart LR
  S["Student stuck on a problem"] --> T["Tutor asks guiding questions (doesn't give the answer)"] --> P["Practice + feedback"] --> M["Mastery tracking"] --> Te["Teacher dashboard"]`,
    answer: `**Users.** Students (stuck on homework), teachers (want insight, worry about cheating), parents.

**Key design choice.** A **Socratic tutor**: guides with hints and questions instead of giving answers. It keeps learning real and addresses teachers' cheating concerns.

**Features.** Step-by-step hints, mistake diagnosis, adaptive practice, mastery tracking, a teacher dashboard showing struggling concepts.

**Safety.** Age-appropriate content filters, no personal data collection beyond what's needed, flagging of distress signals.

**Metrics.** Learning gains (pre/post assessments), problems completed with hints vs answers, weekly active students, teacher adoption. **Guardrails:** accuracy of math explanations, safety incidents.`,
    pitfalls: ['Building an answer machine.'],
    followUps: [],
  },
  {
    id: 'ai-cost-vs-quality',
    title: 'Your AI feature is great but costs too much per user. What do you do?',
    category: 'ai-product',
    subcategory: 'AI economics',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['OpenAI', 'Microsoft', 'Google', 'Anthropic'],
    framework: 'ai-product',
    concepts: ['unit-economics', 'llm-evals', 'tradeoffs-decisions', 'pricing-models'],
    whyAsked: 'AI unit economics is a real constraint for PMs today.',
    clarifiers: [],
    diagram: `flowchart LR
  C["High cost per user"] --> R["Route: small model for easy, large for hard"]
  C --> Ca["Cache common answers"]
  C --> P["Shorter prompts and context"]
  C --> M["Monetize: limits, paid tier"]`,
    answer: `**Measure first.** Cost per active user and per successful task, broken down by feature and user segment (often a few heavy users drive most of the cost).

**Reduce cost.**
- **Model routing:** a small, cheap model handles easy requests, and only hard ones go to the large model.
- **Caching** frequent answers and prompt prefixes.
- **Prompt and context trimming:** shorter context, summarized history.
- **Batch** non-urgent work.

**Monetize.** Usage limits on the free tier, a premium tier for heavy users, enterprise pricing.

**Protect quality.** Run evals before and after each optimization so quality doesn't silently degrade. Decide on acceptable trade-offs per feature.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'ai-agent-travel',
    title: 'Design an AI agent that books travel on behalf of users',
    category: 'ai-product',
    subcategory: 'AI agents',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Google', 'OpenAI', 'Anthropic', 'Expedia'],
    framework: 'ai-product',
    concepts: ['llm-evals', 'trust-safety', 'apis', 'tradeoffs-decisions'],
    whyAsked: 'Agentic AI: autonomy levels, confirmation points, error recovery.',
    clarifiers: [],
    diagram: `flowchart LR
  G["Goal: 'Weekend in Rome under $800'"] --> P["Plan options"] --> U["User reviews choices"] --> C{"Confirm payment?"}
  C -->|yes| B["Book via APIs"] --> M["Monitor: delays, rebooking"]`,
    answer: `**Autonomy levels.** Start with **AI plans, human confirms**: the agent researches and builds 2–3 itinerary options, and the user approves before any payment. Increase autonomy later (e.g. auto-rebooking within preset rules).

**Design.** Preference memory (seat, budget, airlines), tool use via airline and hotel APIs, explicit **confirmation points** before irreversible actions (payment, non-refundable bookings), clear summaries of what was booked, easy cancellation.

**Error handling.** Price changes during booking, sold-out flights, partial failures (flight booked, hotel failed): roll back or ask the user.

**Metrics.** Task completion rate, time saved, booking error rate, user trust/CSAT, repeat usage. **Guardrails:** unauthorized or incorrect purchases (target zero).`,
    pitfalls: ['Full autonomy over payments from day one.'],
    followUps: [],
  },
  {
    id: 'ai-bias-hiring',
    title: 'Your team wants to use ML to screen job applicants. What concerns do you raise?',
    category: 'ai-product',
    subcategory: 'Responsible AI',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['LinkedIn', 'Microsoft', 'Google'],
    framework: 'ai-product',
    concepts: ['ml-basics', 'trust-safety', 'data-pitfalls'],
    whyAsked: 'Responsible AI: bias, fairness, transparency, regulation.',
    clarifiers: [],
    diagram: `flowchart LR
  H["Historical hiring data"] --> B["Contains past bias"] --> M["Model learns bias"] --> R["Unfair screening"]
  R --> X["Mitigate: audits, fairness metrics, human review, transparency"]`,
    answer: `**Concerns.**
- **Historical bias:** training on past hiring decisions reproduces past discrimination (proxies like school, zip code, gaps in employment).
- **Fairness testing:** compare selection rates across demographic groups (the four-fifths rule).
- **Transparency & explainability:** candidates and recruiters should understand the factors.
- **Regulation:** local laws on automated hiring decisions and bias audits.
- **Human oversight:** use ML to assist (skills matching), not to automatically reject.

**Recommendation.** Proceed only with skills-based features, regular bias audits, human final decisions, and candidate notice.`,
    pitfalls: [],
    followUps: [],
  },
];
