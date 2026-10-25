// Pricing & Monetization questions.
export default [
  {
    id: 'price-new-saas',
    title: 'How would you price a new B2B SaaS analytics product?',
    category: 'pricing',
    subcategory: 'Set a price',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Salesforce', 'HubSpot', 'Atlassian', 'Stripe'],
    framework: 'pricing',
    concepts: ['pricing-models', 'unit-economics', 'user-segmentation'],
    whyAsked: 'The canonical pricing question: value, costs, competition, model, tiers, test.',
    clarifiers: ['Who is the buyer (SMB or enterprise)?', 'Goal: fast adoption or maximum revenue?', 'Any competitors?'],
    diagram: `flowchart TD
  V["💎 Value: hours saved, revenue gained"] --> P["Price range"]
  C["💸 Cost: infrastructure + support per account"] --> P
  Co["🏷️ Competitors: $X–$Y per seat"] --> P
  P --> M["Model: per seat + usage tiers"]
  M --> T["Free → Pro → Business → Enterprise"]
  T --> E["Test: conversion, ARPU, churn"]`,
    answer: `**Objective.** Early-stage product: land customers quickly while capturing enough value to show strong unit economics. Target mid-market teams.

**1. Value.** What does it save or earn? E.g. it replaces 10 hours a month of analyst work at $60/hour = $600/month of value per team. Charge a fraction of that (10–30%) so the decision to buy is easy.

**2. Cost floor.** Infrastructure cost per account (data processing), support, onboarding. E.g. $40/month per account.

**3. Competition.** Competitors charge $20–50 per user per month. Position based on differentiation (faster setup, AI insights).

**4. Model.** Choose a **value metric** that grows with customer value: seats (collaboration) plus data volume tiers (usage). Avoid charging for things that discourage adoption (like dashboards viewed).

**5. Packaging (good–better–best).**
- **Free:** 1 user, limited data. Drives product-led acquisition.
- **Pro ($30/user/month):** core analytics, integrations.
- **Business ($60/user/month):** AI insights, permissions.
- **Enterprise (custom):** SSO, audit logs, SLA. Also serves as a price anchor.

**6. Test & iterate.** Van Westendorp survey and interviews before launch. After launch: trial→paid conversion, ARPU, win rates, discount frequency, net revenue retention.`,
    pitfalls: ['Pricing only on cost.', 'Choosing a value metric that punishes usage.'],
    proTip: 'Always name the value metric and say why it scales with customer value. This is the most important pricing decision.',
    followUps: ['Would you offer a free tier or a free trial?', 'How would you raise prices later?'],
  },
  {
    id: 'price-spotify-increase',
    title: 'Should Spotify raise its Premium price? How would you decide?',
    category: 'pricing',
    subcategory: 'Price change',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Spotify', 'Netflix'],
    framework: 'pricing',
    concepts: ['pricing-models', 'retention-cohorts', 'ab-testing', 'unit-economics'],
    whyAsked: 'Tests price elasticity thinking, churn risk and segmentation.',
    clarifiers: ['Which markets?', 'What is driving the need: margins, investor pressure?'],
    diagram: `flowchart LR
  P["+$1 price"] --> R["Revenue gain from those who stay"]
  P --> C["Churn from those who leave"]
  R & C --> N{"Net revenue + LTV ↑?"}
  N --> S["Segment: family, student, emerging markets"]`,
    answer: `**Why raise.** Music licensing costs are high, so margins are thin. Competitors have raised prices. More content (podcasts, audiobooks) adds value.

**Key question: elasticity.** Will the revenue gained from retained subscribers outweigh the revenue lost to churn and downgrades?
Break-even churn: a 10% price increase is profitable if fewer than about 9% of subscribers leave because of it.

**Analysis.**
- **Segment** by market (willingness to pay differs), plan (individual, family, student), and engagement (heavy users are less price-sensitive).
- **Evidence:** competitor price rises and churn reactions, survey willingness to pay, small market tests.
- **Mitigations:** grandfather loyal users for a few months, add value at the same time, keep a cheaper or ad-supported tier for price-sensitive users.

**Decision.** Raise prices in markets with strong engagement and low elasticity, keep students and emerging markets lower, communicate the added value.
**Watch:** churn by cohort for 3 months, downgrades to Free, net revenue.`,
    pitfalls: ['Ignoring segmentation.', 'Looking only at short-term churn.'],
    followUps: [],
  },
  {
    id: 'price-freemium-vs-trial',
    title: 'Freemium or free trial: which would you choose for a note-taking app?',
    category: 'pricing',
    subcategory: 'Model choice',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Notion', 'Evernote', 'Dropbox'],
    framework: 'pricing',
    concepts: ['pricing-models', 'funnel-conversion', 'growth-loops'],
    whyAsked: 'A core monetization model choice with growth implications.',
    clarifiers: [],
    diagram: `flowchart LR
  F["🆓 Freemium: free forever, limited"] --> F1["+ virality, habit, SEO"] & F2["− low conversion 2–5%, free-user cost"]
  T["⏳ Free trial: full, 14 days"] --> T1["+ higher conversion, urgency"] & T2["− fewer users, less virality"]`,
    answer: `**Considerations.** How long until a user sees value? Is there virality or collaboration? What does a free user cost to serve? How big is the market?

**For a note-taking app.** Value builds over time (notes accumulate, which creates switching costs), it spreads through sharing, and storage is cheap. So **freemium** fits: a generous free tier builds the habit and lock-in, and premium unlocks power features (offline access, AI, larger uploads, team features).

**When a trial is better.** Complex B2B tools where value shows up quickly but needs the full feature set, and where free users are costly.

**Hybrid.** Freemium plus a "try Pro free for 14 days" upsell when users hit a limit.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'price-monetize-free-app',
    title: 'You run a free fitness app with 10M users. How would you monetize it?',
    category: 'pricing',
    subcategory: 'Monetization strategy',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Strava', 'Google', 'Meta'],
    framework: 'pricing',
    concepts: ['pricing-models', 'user-segmentation', 'unit-economics'],
    whyAsked: 'Tests generating monetization options and evaluating fit with users.',
    clarifiers: ['What do users do in the app?', 'Engagement levels?'],
    diagram: `flowchart TD
  U["10M users"] --> P["Power users: subscription for advanced analytics, plans"]
  U --> C["Casual users: ads? brand partnerships"]
  U --> B["B2B: corporate wellness"]
  U --> M["Marketplace: coaches, gear"]`,
    answer: `**Segment users.** Serious athletes (5–10%, high willingness to pay), casual exercisers (most users), beginners.

**Options.**
1. **Premium subscription** for power users: training plans, advanced analytics, route planning. Proven by Strava.
2. **Ads / sponsored challenges**: brand-sponsored challenges fit the context better than banner ads.
3. **B2B corporate wellness**: employers pay for employees.
4. **Marketplace**: coaching, events, gear affiliate sales.

**Evaluate.** A subscription aligns with value and keeps the experience clean. Sponsored challenges monetize casual users. Banner ads hurt the experience.

**Recommendation.** Premium subscription (target 4–6% conversion) plus sponsored challenges. Assume 10M × 5% × $60/year ≈ $30M ARR, plus challenge revenue.
**Guardrails:** free-user retention, ratings.`,
    pitfalls: ['Jumping to ads without considering the user experience.'],
    followUps: [],
  },
  {
    id: 'price-uber-surge',
    title: 'Explain and evaluate Uber\'s surge pricing',
    category: 'pricing',
    subcategory: 'Dynamic pricing',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Uber', 'Lyft'],
    framework: 'pricing',
    concepts: ['marketplaces', 'pricing-models', 'trust-safety'],
    whyAsked: 'Dynamic pricing in a marketplace, with fairness and trust trade-offs.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Demand > supply"] --> S["Surge multiplier ↑"]
  S --> L["Less demand: price-sensitive riders wait"]
  S --> M["More supply: drivers move in"]
  L & M --> B["Balance restored → reliable rides"]`,
    answer: `**How it works.** When requests exceed available drivers in an area, prices rise. Higher prices (1) reduce demand from price-sensitive riders and (2) attract more drivers, restoring reliability.

**Benefits.** Rides are available when you really need one, drivers earn more at peak times, and the marketplace clears.

**Problems.** Perceived as price gouging (especially during emergencies), unpredictable cost, brand damage.

**Improvements.** Upfront fixed prices (no surprises), caps during emergencies, notifications when the surge ends, "wait and save" options, transparent explanations.

**Metrics.** Fulfilment rate during surges, ETA, conversion at surge prices, complaints.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'price-api-pricing-ai',
    title: 'How would you price an AI API (like a large language model API)?',
    category: 'pricing',
    subcategory: 'Set a price',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['OpenAI', 'Anthropic', 'Google'],
    framework: 'pricing',
    concepts: ['pricing-models', 'unit-economics', 'llm-evals'],
    whyAsked: 'Modern usage-based pricing with variable compute costs.',
    clarifiers: [],
    diagram: `flowchart LR
  C["Compute cost per token"] --> P["Per-token price, input vs output"]
  P --> T["Tiers by model size"]
  T --> V["Volume discounts, committed spend"]
  V --> E["Enterprise: SLA, privacy, dedicated capacity"]`,
    answer: `**Cost driver.** Inference compute scales with tokens, and output tokens cost more than input tokens.

**Model.** **Usage-based per token**, separate input and output rates, with different prices for each model tier (small/fast/cheap vs large/smart). Add batch discounts (non-urgent work), cached-input discounts, and committed-use contracts for enterprises.

**Considerations.** Developer adoption needs a free tier or credits. Price relative to competitors and to the value of the task. Make pricing predictable with spending caps and dashboards.

**Metrics.** Gross margin per token, spend growth per account, churn to competitors, time to first API call.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'price-amazon-prime',
    title: 'Why does Amazon Prime bundle so many services? Is it worth it for Amazon?',
    category: 'pricing',
    subcategory: 'Bundling',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Amazon'],
    framework: 'pricing',
    concepts: ['pricing-models', 'retention-cohorts', 'unit-economics', 'moats'],
    whyAsked: 'Tests bundling economics and loyalty effects.',
    clarifiers: [],
    diagram: `flowchart LR
  P["Prime fee"] --> F["Free fast shipping"]
  P --> V["Video, Music"]
  F --> S["Shop more on Amazon"]
  V --> R["Retention: harder to cancel"]
  S & R --> L["Higher LTV, lower churn"]`,
    answer: `**Logic.** Prime members reportedly spend much more per year than non-members. The fee itself matters less than the **change in behaviour**: free shipping removes friction, so members consolidate their shopping on Amazon.

**Why bundle video and music?** Each service adds perceived value and reasons not to cancel (lower churn), and gives different segments a reason to join.

**Is it worth it?** Shipping and content are costly, but the extra purchases, ads and retention make Prime highly valuable. It's a moat through loyalty.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'price-discount-strategy',
    title: 'Your sales team discounts heavily to close deals. How would you fix it?',
    category: 'pricing',
    subcategory: 'Pricing operations',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Salesforce', 'Oracle', 'HubSpot'],
    framework: 'pricing',
    concepts: ['pricing-models', 'stakeholder-management', 'unit-economics'],
    whyAsked: 'B2B pricing discipline.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Heavy discounting"] --> W["Why? price too high, weak value story, sales incentives"]
  W --> F["Fix: packaging, approval rules, value selling, incentive on margin"]`,
    answer: `**Diagnose.** Is the list price too high for some segments? Is the value story weak? Do sales incentives reward bookings rather than margin? Is there end-of-quarter pressure?

**Fixes.** Repackage (a cheaper tier for price-sensitive buyers instead of discounting), discount approval levels, give-get rules (a discount in exchange for a longer contract or a case study), sales training on value selling with ROI calculators, commission tied to net price.

**Metrics.** Average discount %, win rate, net revenue retention.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'price-international',
    title: 'How would you set prices for your app in India vs the US?',
    category: 'pricing',
    subcategory: 'Regional pricing',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Netflix', 'Spotify', 'Google'],
    framework: 'pricing',
    concepts: ['pricing-models', 'user-segmentation', 'market-sizing'],
    whyAsked: 'Purchasing power and local competition.',
    clarifiers: [],
    diagram: `flowchart LR
  P["Purchasing power"] --> L["Local price"]
  C["Local competitors"] --> L
  M["Payment habits: UPI, prepaid"] --> L
  L --> X["Mobile-only, sachet plans"]`,
    answer: `**Principles.** Purchasing-power-adjusted pricing, local competitor prices, payment methods (UPI, small prepaid packs), device usage (mobile-only).

**Tactics in India.** Lower prices, mobile-only plans (as Netflix did), short-duration "sachet" plans (weekly), telecom bundles, student plans.

**Risks.** VPN arbitrage (users in rich countries buying cheaper plans) can be mitigated with payment-method and location checks.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'price-ads-vs-subscription',
    title: 'Should a news app monetize through ads or subscriptions?',
    category: 'pricing',
    subcategory: 'Model choice',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Google', 'Apple'],
    framework: 'pricing',
    concepts: ['pricing-models', 'unit-economics', 'user-segmentation'],
    whyAsked: 'Classic model trade-off.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Ads: scale, free access, clickbait risk"] --- H["Hybrid: metered paywall + ads for free users"] --- S["Subscription: loyal readers, quality incentive"]`,
    answer: `**Ads** need massive scale and push toward clickbait. Revenue per user is low. **Subscriptions** reward quality journalism and loyal readers, but limit reach.

**Recommendation.** A **hybrid metered paywall**: a few free articles a month with ads, then subscribe. Bundles and annual plans reduce churn. This is used successfully by major news outlets.`,
    pitfalls: [],
    followUps: [],
  },
];
