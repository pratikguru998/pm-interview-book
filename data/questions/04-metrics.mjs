// Metrics & Analytics questions.
export default [
  {
    id: 'metrics-instagram-stories',
    title: 'How would you measure the success of Instagram Stories?',
    category: 'metrics',
    subcategory: 'Success metrics for a feature',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Meta'],
    framework: 'metrics',
    concepts: ['north-star-metric', 'engagement-metrics', 'guardrail-metrics', 'funnel-conversion'],
    whyAsked: 'The canonical metrics question. Tests goal → user actions → metric menu → one North Star → guardrails.',
    clarifiers: ['Is the feature mature, or just launched?', 'Is the goal sharing among friends or overall engagement?'],
    diagram: `flowchart TD
  G["🎯 Goal: casual, authentic sharing with friends"] --> C["Creators: post stories"]
  G --> V["Viewers: watch + reply"]
  C --> M1["% DAU posting a story"]
  V --> M2["Stories viewed per DAU"]
  V --> M3["Replies / reactions per story"]
  M1 & M2 & M3 --> N["⭐ NSM: daily users who post OR reply to a story"]
  N -.-> G1["🛡️ Feed posts per user"]
  N -.-> G2["🛡️ Time spent overall"]`,
    answer: `**Clarify & goal.** Stories is a mature feature. Its mission is **low-pressure, ephemeral sharing with friends**, which keeps Instagram personal and social. For the business, it drives engagement and ad inventory.

**User actions (two sides).**
- *Creators*: create → add stickers/music → post → see who viewed.
- *Viewers*: open the tray → watch → tap forward → reply or react.

**Metric menu.**
- **Adoption/reach**: % of DAU who post at least one story per day; % who view stories.
- **Engagement**: stories posted per creator; stories viewed per viewer; completion rate.
- **Interaction**: replies and reactions per 1,000 views (a sign of real social connection).
- **Retention**: % of story posters who post again within 7 days.
- **Monetization**: story ad impressions, ad CTR.

**North Star.** **Daily active users who create or reply to a story.** This captures two-sided social value (sharing *and* conversation), rather than passive viewing. A view-based metric could be gamed by autoplaying stories.

**Guardrails.**
- Feed posts and time spent in Feed and Reels (cannibalization)
- Story ad load vs completion rate (ads hurting the experience)
- Reports and blocks (safety)

**Trade-off.** Reach is a strong supporting metric, but it measures exposure, not connection. I'd watch it alongside the NSM.`,
    pitfalls: ['Choosing "number of stories viewed" without discussing quality.', 'Ignoring cannibalization of the main feed.', 'Listing metrics without picking one.'],
    proTip: 'Clarify the *why* of the feature first. The North Star should reflect its specific mission, not generic engagement.',
    followUps: ['Story posting dropped 10%. How would you investigate?', 'How would you measure the impact of adding music to stories?'],
  },
  {
    id: 'metrics-uber-north-star',
    title: 'What is the North Star metric for Uber? Why?',
    category: 'metrics',
    subcategory: 'North Star',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Uber', 'Lyft'],
    framework: 'metrics',
    concepts: ['north-star-metric', 'marketplaces', 'guardrail-metrics'],
    whyAsked: 'Tests choosing an NSM for a two-sided marketplace and defending it.',
    clarifiers: ['Rides only, or the whole of Uber (Eats, freight)?'],
    diagram: `flowchart TD
  N["⭐ Completed trips per week"] --> D["Demand: active riders × trips per rider"]
  N --> S["Supply: online driver hours × utilization"]
  N --> R["Reliability: request → completion rate"]
  N -.-> G1["🛡️ Safety incidents per million trips"]
  N -.-> G2["🛡️ Driver earnings per hour"]
  N -.-> G3["🛡️ ETA and cancellations"]`,
    answer: `**Value delivered.** Uber creates value when a rider gets from A to B reliably *and* a driver earns money. Both happen at the moment a trip is **completed**.

**Candidates.**
- *Gross bookings*: business outcome. Can rise through price increases without more value.
- *Active riders*: misses frequency and supply.
- **Completed trips per week**: captures demand, supply and reliability together.

**NSM: completed trips per week.**
**Input metrics** (map to teams): active riders, trips per rider, online driver hours, match rate, ETA, cancellation rate.

**Guardrails.**
- Safety incidents per million trips
- Driver earnings per hour (supply health)
- Rider ETA and price perception (protects against growth bought with subsidies)
- Contribution margin per trip

**Why not revenue?** Revenue is lagging and can be gamed with surge pricing. Trips track real utility and predict revenue.`,
    pitfalls: ['Choosing revenue as the NSM.', 'Ignoring the supply side.'],
    followUps: ['What would the NSM for Uber Eats be?'],
  },
  {
    id: 'metrics-google-maps-success',
    title: 'How would you measure the success of Google Maps?',
    category: 'metrics',
    subcategory: 'Success metrics for a product',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google'],
    framework: 'metrics',
    concepts: ['north-star-metric', 'engagement-metrics', 'guardrail-metrics'],
    whyAsked: 'A multi-use product. Tests picking metrics across different user jobs.',
    clarifiers: ['The whole product or a specific use case such as navigation?'],
    diagram: `flowchart LR
  J1["🧭 Navigate"] --> M1["Navigations completed, ETA accuracy"]
  J2["🔎 Discover places"] --> M2["Place searches → actions: call, directions, booking"]
  J3["🚇 Transit"] --> M3["Transit trips planned"]
  M1 & M2 & M3 --> N["⭐ Weekly users completing a successful 'get there' task"]`,
    answer: `**Mission.** Help people explore and navigate the world.

**Jobs.** Navigate (driving, transit, walking), discover places (restaurants, shops), check information (opening hours, traffic).

**Metric menu.**
- Navigation: sessions started, % completed, ETA accuracy, reroutes.
- Discovery: place searches, actions taken (call, directions, website, reservation), review contributions.
- Engagement: weekly active users, sessions per user, saved places.
- Business: local ad clicks, actions on ads.

**NSM.** **Weekly users who complete a successful "get there" task**: they navigate to or take an action on a place. This combines navigation and discovery, and ties to real-world outcomes.

**Guardrails.** ETA accuracy, safety (driver distraction), data accuracy (wrong opening hours), latency.`,
    pitfalls: ['Choosing app opens, which says nothing about value.'],
    followUps: ['How would you measure ETA accuracy?'],
  },
  {
    id: 'metrics-dashboard-food-delivery',
    title: 'Design a metrics dashboard for a food delivery app CEO',
    category: 'metrics',
    subcategory: 'Dashboard design',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['DoorDash', 'Uber', 'Swiggy'],
    framework: 'metrics',
    concepts: ['marketplaces', 'unit-economics', 'north-star-metric', 'funnel-conversion'],
    whyAsked: 'Tests organizing metrics into a coherent, executive-level view of a three-sided marketplace.',
    clarifiers: ['How often will it be viewed: daily or weekly?', 'Which markets?'],
    diagram: `flowchart TD
  T["⭐ Top: orders delivered per week + GMV"] --> C["👥 Customers: active, frequency, retention"]
  T --> R["🍽️ Restaurants: active, availability, ratings"]
  T --> D["🛵 Couriers: active hours, utilization, earnings"]
  T --> O["⚙️ Operations: delivery time, on-time %, errors"]
  T --> F["💰 Finance: take rate, contribution margin per order, CAC"]`,
    answer: `**Principle.** One page: a North Star at the top, then the health of each side, then economics. Show trends and comparisons with targets.

**Tier 1: headline.** Orders delivered per week (NSM), GMV, contribution margin per order.

**Tier 2: marketplace health.**
- *Customers*: monthly active customers, orders per customer, 30-day retention cohort, new customer CAC.
- *Restaurants*: active merchants, % online during peak hours, average rating, merchant churn.
- *Couriers*: active courier hours, utilization (time spent on a delivery), earnings per hour, courier churn.

**Tier 3: experience/operations.** Average delivery time, % on time, order accuracy (missing items), cancellations, support contacts per 100 orders.

**Tier 4: unit economics.** Take rate, delivery cost per order, promotion spend as % of GMV.

**Design.** Weekly view, broken down by city, with alerts when metrics breach thresholds. Show leading indicators (courier supply at peak) alongside lagging ones (revenue).`,
    pitfalls: ['A dashboard with 50 metrics and no hierarchy.', 'Ignoring one side of the marketplace.'],
    followUps: ['Which single metric would you look at first every morning?'],
  },
  {
    id: 'metrics-define-ai-assistant',
    title: 'How would you measure the success of an AI assistant (like ChatGPT or Gemini)?',
    category: 'metrics',
    subcategory: 'Success metrics for AI',
    difficulty: 'Hard',
    learningValue: 5,
    companies: ['Google', 'OpenAI', 'Microsoft', 'Anthropic'],
    framework: 'metrics',
    concepts: ['llm-evals', 'north-star-metric', 'guardrail-metrics', 'retention-cohorts'],
    whyAsked: 'A modern, very common question. Tests layering offline quality, online behaviour and safety.',
    clarifiers: ['Consumer or enterprise?', 'General assistant or a specific use case?'],
    diagram: `flowchart TD
  Q["Quality (offline evals)"] --> Q1["Helpfulness, accuracy, safety on a golden set"]
  B["Behaviour (online)"] --> B1["Tasks completed, retention, thumbs-up"]
  E["Economics"] --> E1["Cost per conversation, latency"]
  Q1 & B1 & E1 --> N["⭐ Weekly users who successfully complete a task"]`,
    answer: `**Mission.** Help people get tasks done (write, learn, code, decide) faster and better.

**Three layers.**
1. **Offline quality (before launch)**: eval sets measuring helpfulness, factual accuracy and groundedness, instruction following, safety refusals (both too many and too few), scored by human raters and an LLM judge.
2. **Online behaviour (after launch)**:
   - Engagement: weekly active users, conversations per user, multi-turn depth.
   - Success: task success rate (inferred from signals such as copying the answer, positive feedback, not rephrasing the same question), thumbs-up ratio.
   - Retention: week-4 retention by cohort (is it becoming a habit?).
   - Monetization: paid conversion.
3. **Guardrails**: hallucination reports, policy violation rate, latency (time to first token), cost per conversation, privacy incidents.

**NSM.** **Weekly active users who complete at least one successful task.** It combines breadth, frequency and value.

**Caveat.** Long conversations aren't always good. They might mean the assistant failed at first. Pair length with success signals.`,
    pitfalls: ['Using conversation length as a success metric.', 'Ignoring cost per query, which is significant for LLMs.'],
    proTip: 'Distinguish "the model is better" (offline evals) from "the product is better" (online behaviour). Strong candidates cover both.',
    followUps: ['How would you detect hallucinations at scale?', 'Thumbs-up rate went up but retention fell. Why?'],
  },
  {
    id: 'metrics-youtube-shorts',
    title: 'How would you evaluate whether YouTube Shorts is successful?',
    category: 'metrics',
    subcategory: 'Success metrics for a feature',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google'],
    framework: 'metrics',
    concepts: ['engagement-metrics', 'guardrail-metrics', 'marketplaces'],
    whyAsked: 'Tests ecosystem thinking (viewers, creators, advertisers) and cannibalization.',
    clarifiers: ['Strategic goal: compete with TikTok?'],
    diagram: `flowchart LR
  V["👀 Viewers: daily viewers, watch time"] --> N["⭐ Daily active Shorts viewers"]
  C["🎬 Creators: uploads, creator retention"] --> N
  A["💰 Ads: Shorts revenue per 1k views"] --> N
  N -.-> G["🛡️ Long-form watch time + creator earnings"]`,
    answer: `**Goal.** Compete with TikTok for short-form attention, especially among younger users, without destroying long-form YouTube.

**Metrics.**
- *Viewers:* daily Shorts viewers, Shorts watch time per user, % of under-25 users engaging.
- *Creators:* daily uploads, % of creators posting weekly, creator retention, creator earnings.
- *Monetization:* Shorts ad revenue per 1,000 views (RPM).
- *Ecosystem:* Shorts → long-form crossover (subscribers gained from Shorts).

**NSM.** Daily active Shorts viewers who watch at least N Shorts.

**Guardrails.** Long-form watch time per user (cannibalization), long-form creator earnings, satisfaction surveys.`,
    pitfalls: ['Ignoring cannibalization of long-form.'],
    followUps: ['Shorts are up but total YouTube watch time is flat. Is that good?'],
  },
  {
    id: 'metrics-ab-test-checkout',
    title: 'You ran an A/B test: conversion up 2%, but average order value down 3%. Ship it?',
    category: 'metrics',
    subcategory: 'Experiment interpretation',
    difficulty: 'Hard',
    learningValue: 5,
    companies: ['Amazon', 'Airbnb', 'Booking.com'],
    framework: 'metrics',
    concepts: ['ab-testing', 'statistical-significance', 'guardrail-metrics', 'tradeoffs-decisions'],
    whyAsked: 'Tests experiment literacy and trade-off reasoning with conflicting metrics.',
    clarifiers: ['Are both results statistically significant?', 'What was the goal of the test?', 'How long did it run?'],
    diagram: `flowchart TD
  R["Result: conversion +2%, AOV −3%"] --> S{"Both significant?"}
  S -- No --> W["Run longer / gather more data"]
  S -- Yes --> Rev["Revenue per visitor = conv × AOV → about −1%"]
  Rev --> P["Profit per visitor? Margin mix?"]
  P --> LT["Long-term: new buyers retain? LTV"]
  LT --> D["Decide"]`,
    answer: `**Step 1: Is it real?** Check that both changes are statistically significant, the test ran 1–2+ full weeks, there's no sample ratio mismatch, and novelty effects are ruled out.

**Step 2: Combine into the business objective.** Revenue per visitor = conversion × AOV.
1.02 × 0.97 ≈ **0.989, so about −1.1% revenue per visitor**. On revenue alone, it's slightly negative.

**Step 3: Look deeper.**
- **Profit, not revenue**: if the lower AOV comes from fewer low-margin items, profit might be up.
- **Who converted?** New customers? If the change brings in first-time buyers, their **lifetime value** could outweigh the AOV drop.
- **Segments**: maybe mobile improved while desktop got worse.
- **Mechanism**: why did AOV drop? Did the change remove upsells or bundles?

**Step 4: Decide.**
- If profit per visitor or projected LTV is up → ship.
- If not → iterate: keep the conversion improvement but restore cross-sells (for example, recommendations after adding to cart), then retest.

My default: **don't ship as is.** Run a variant that preserves the AOV drivers, unless the analysis shows long-term value from new customers.`,
    pitfalls: ['Shipping because the "primary metric" went up.', 'Not combining metrics into revenue or profit per visitor.'],
    proTip: 'Always convert conflicting metrics into a single, higher-level business metric (revenue or profit per visitor), then check long-term effects.',
    followUps: ['How would you estimate LTV impact within the test window?'],
  },
  {
    id: 'metrics-slack-engagement',
    title: 'Define engagement for Slack. How would you measure it?',
    category: 'metrics',
    subcategory: 'Defining a metric',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Slack', 'Microsoft'],
    framework: 'metrics',
    concepts: ['engagement-metrics', 'north-star-metric', 'okrs'],
    whyAsked: 'Tests defining a meaningful "active" for a B2B team tool.',
    clarifiers: ['User-level or team-level?'],
    diagram: `flowchart LR
  A["Opened Slack"] --> B["Read messages"] --> C["Sent message ⭐"] --> D["In channel with 3+ people"]
  C --> M["Weekly active senders per team ÷ seats"]`,
    answer: `**Principle.** Engagement should reflect real collaboration, not just Slack being open in a background tab.

**Definition levels.**
1. *Logged-in user*: weak (it's always open).
2. *Reader*: read at least one message.
3. **Communicator**: sent at least one message or reaction in a channel or DM. Stronger.
4. **Collaborative team**: a workspace where 70%+ of seats are weekly communicators.

**Metrics.** Weekly active communicators ÷ paid seats (seat utilization), messages in channels per user, % of messages in channels vs DMs (open collaboration), integration actions (workflows run).

**Why seat utilization matters.** Slack sells seats, so unused seats lead to churn at renewal.`,
    pitfalls: ['Counting app opens as engagement.'],
    followUps: ['How would you predict a team churning at renewal?'],
  },
  {
    id: 'metrics-amazon-reviews',
    title: 'How would you measure the health of Amazon product reviews?',
    category: 'metrics',
    subcategory: 'Ecosystem health',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Amazon'],
    framework: 'metrics',
    concepts: ['trust-safety', 'guardrail-metrics', 'funnel-conversion'],
    whyAsked: 'Tests measuring trust and quality, not just volume.',
    clarifiers: [],
    diagram: `flowchart TD
  H["Review health"] --> Q["Quantity: % of products with 5+ reviews"]
  H --> T["Trust: fake review rate, verified-purchase share"]
  H --> U["Usefulness: helpful votes, influence on conversion"]
  H --> R["Representativeness: reviewers vs buyers"]`,
    answer: `**Goal.** Reviews help shoppers make confident decisions, which drives conversion and fewer returns.

**Metrics.**
- *Coverage:* % of viewed products with 5+ reviews, review rate (reviews ÷ purchases).
- *Trust:* % of reviews removed as fake, % from verified purchases, review manipulation reports.
- *Usefulness:* helpful votes per review, % of sessions where reviews are read before purchase, conversion lift when reviews are present.
- *Accuracy:* correlation between ratings and return rates (high ratings with high returns suggests manipulation).

**North Star.** Share of purchases influenced by trustworthy reviews, with return rate as a guardrail.`,
    pitfalls: ['Measuring review count only.'],
    followUps: ['How would you detect fake reviews?'],
  },
  {
    id: 'metrics-feature-launch-success',
    title: 'You just launched a "Save for later" button on a shopping app. How do you know it worked?',
    category: 'metrics',
    subcategory: 'Feature launch metrics',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Amazon', 'Etsy', 'Shopify'],
    framework: 'metrics',
    concepts: ['ab-testing', 'funnel-conversion', 'guardrail-metrics'],
    whyAsked: 'A small feature question that tests adoption → value → business impact.',
    clarifiers: ['Was it launched as an A/B test?'],
    diagram: `flowchart LR
  A["Adoption: % users who saved"] --> B["Return: saved items revisited"] --> C["Conversion: saved → purchased"] --> D["Business: revenue per user vs control"]`,
    answer: `**Hypothesis.** Saving reduces the pressure to buy now and lost intent, so more users return and buy later.

**Funnel of metrics.**
1. **Adoption:** % of product-page viewers who tap Save.
2. **Re-engagement:** % of savers who return to their saved list within 14 days.
3. **Conversion:** % of saved items purchased within 30 days.
4. **Business impact (A/B):** revenue per user and 30-day purchase rate, treatment vs control.

**Guardrails.** Immediate add-to-cart rate. Does Save cannibalize buying now? Net revenue shows whether that's acceptable.

**Success.** A net increase in 30-day revenue per user with significance.`,
    pitfalls: ['Only counting saves (adoption is not value).'],
    followUps: ['How long would you run the test?'],
  },
  {
    id: 'metrics-linkedin-feed',
    title: 'What metrics would you use to evaluate LinkedIn\'s feed?',
    category: 'metrics',
    subcategory: 'Success metrics for a feed',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['LinkedIn'],
    framework: 'metrics',
    concepts: ['engagement-metrics', 'recommendation-systems', 'guardrail-metrics'],
    whyAsked: 'Feed quality vs engagement trade-offs.',
    clarifiers: [],
    diagram: `flowchart LR
  V["Viewers: sessions, dwell, meaningful interactions"] --> N["⭐ Members with a valuable feed session"]
  C["Creators: posts, feedback received"] --> N
  N -.-> G["🛡️ Hide/report rate, clickbait share"]`,
    answer: `**Mission.** Connect professionals to opportunities and knowledge.

**Metrics.** Feed sessions per member, dwell time on posts, meaningful interactions (comments, shares, profile visits, follows), creator metrics (posters per week, % receiving at least one response), job and learning clicks.

**NSM.** Weekly members with a "valuable feed session" (at least one meaningful interaction or a long dwell).

**Guardrails.** Hide and "not interested" rate, engagement bait prevalence, surveys on feed quality.`,
    pitfalls: ['Optimizing likes, which rewards bait.'],
    followUps: [],
  },
  {
    id: 'metrics-airbnb-experiences',
    title: 'Airbnb Experiences launched in a new city. What would you track in the first 90 days?',
    category: 'metrics',
    subcategory: 'Launch metrics',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Airbnb'],
    framework: 'metrics',
    concepts: ['marketplaces', 'funnel-conversion', 'go-to-market'],
    whyAsked: 'Launch-phase metrics for a new marketplace vertical.',
    clarifiers: [],
    diagram: `flowchart LR
  S["Supply: live experiences, categories"] --> L["Liquidity: % of searches → booking"]
  D["Demand: views from guests staying in the city"] --> L
  L --> Q["Quality: ratings, rebooking"]`,
    answer: `**Phase 1 (supply).** # of live experiences, category coverage, host activation rate.
**Phase 2 (demand).** % of guests in the city who view Experiences, view → booking conversion.
**Phase 3 (quality and liquidity).** % of experiences booked at least once a month, ratings, cancellations, rebookings.

**Primary metric.** Bookings per 100 guest stays in the city (attach rate).
**Guardrails.** Host earnings (supply retention), safety incidents.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'metrics-netflix-thumbs',
    title: 'Netflix replaced star ratings with thumbs up/down. How would you evaluate that change?',
    category: 'metrics',
    subcategory: 'Evaluate a change',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Netflix'],
    framework: 'metrics',
    concepts: ['ab-testing', 'recommendation-systems'],
    whyAsked: 'Tests evaluating input quality for a recommendation system.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Simpler input"] --> B["More ratings submitted"] --> C["Better personalization data"] --> D["Higher watch-match → retention"]`,
    answer: `**Hypothesis.** Thumbs are simpler, so more people rate. More signal leads to better recommendations, which leads to more satisfying viewing.

**Metrics.** Rating rate per title watched (should rise significantly), recommendation accuracy (does a thumbs-up predict completion of similar titles?), match-score click-through, and ultimately watch time and retention in an A/B test.

**Guardrails.** Quality of signal (less nuance than stars), user satisfaction surveys.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'metrics-notification-strategy',
    title: 'How would you measure whether push notifications are helping or hurting your app?',
    category: 'metrics',
    subcategory: 'Guardrails',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Meta', 'Duolingo', 'Uber'],
    framework: 'metrics',
    concepts: ['guardrail-metrics', 'ab-testing', 'retention-cohorts'],
    whyAsked: 'Short-term vs long-term trade-off measurement.',
    clarifiers: [],
    diagram: `flowchart LR
  P["More notifications"] --> S["Short-term: opens, DAU ↑"]
  P --> L["Long-term: opt-outs, uninstalls ↑?"]
  S & L --> H["Long-term holdout test measures the net effect"]`,
    answer: `**Short-term metrics.** Open rate, sessions caused by notifications, DAU lift.
**Long-term / guardrail metrics.** Notification opt-out rate, uninstall rate, organic sessions (not caused by notifications), 30- and 90-day retention.

**Method.** A **long-term holdout**: keep a small group receiving fewer or no notifications for months, and compare retention and organic engagement. Short-term A/B tests overstate the benefit.

**Decision rule.** Notifications help if the holdout comparison shows higher long-term retention and organic engagement, not just more opens.`,
    pitfalls: ['Judging by open rate only.'],
    followUps: [],
  },
  {
    id: 'metrics-search-quality',
    title: 'How would you measure search quality for an e-commerce site?',
    category: 'metrics',
    subcategory: 'Defining a metric',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Amazon', 'Etsy', 'Walmart'],
    framework: 'metrics',
    concepts: ['funnel-conversion', 'recommendation-systems', 'ab-testing'],
    whyAsked: 'Tests specific, behavioural success metrics.',
    clarifiers: [],
    diagram: `flowchart LR
  Q["Query"] --> R["Results"] --> C["Click"] --> A["Add to cart"] --> P["Purchase"]
  Q -.-> Z["Zero results rate"]
  R -.-> F["Refinement / reformulation rate"]`,
    answer: `**Metrics.**
- **Search conversion**: % of searches leading to a purchase.
- **Click-through rate on results**, plus position of the first click (MRR).
- **Zero-results rate** and **reformulation rate** (rephrasing suggests a failure).
- **Time to first click**.
- **Search exits** (leaving after searching).
- Offline: relevance ratings by human judges (NDCG).

**Primary metric.** Search sessions ending in add-to-cart. **Guardrails:** latency, diversity of results.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'metrics-duolingo-north-star',
    title: 'What should Duolingo\'s North Star metric be?',
    category: 'metrics',
    subcategory: 'North Star',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Duolingo'],
    framework: 'metrics',
    concepts: ['north-star-metric', 'engagement-metrics', 'retention-cohorts'],
    whyAsked: 'Engagement vs learning outcome trade-off in an NSM.',
    clarifiers: [],
    diagram: `flowchart TD
  N["⭐ Daily active learners"] --> I1["New users activated"]
  N --> I2["Current user retention rate"]
  N --> I3["Resurrected users"]
  N -.-> G["🛡️ Learning outcomes: proficiency tests"]`,
    answer: `**Value.** Learning a language requires consistent daily practice, so **daily active learners** (completing at least one lesson) is a strong NSM. It reflects habit, which leads to learning.

**Input metrics.** New user activation, current user retention rate, resurrection of lapsed users. Duolingo has publicly discussed how improving current-user retention drove DAU growth.

**Guardrail.** Actual learning (proficiency tests), so you don't optimize streak anxiety over progress.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'metrics-churn-saas',
    title: 'How would you measure and reduce churn in a B2B SaaS product?',
    category: 'metrics',
    subcategory: 'Retention metrics',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Salesforce', 'Atlassian', 'HubSpot'],
    framework: 'metrics',
    concepts: ['retention-cohorts', 'unit-economics', 'engagement-metrics'],
    whyAsked: 'B2B retention metrics: logo vs revenue churn, NRR, leading indicators.',
    clarifiers: [],
    diagram: `flowchart LR
  L["Leading: seat utilization, feature adoption, support tickets"] --> R["Risk score"] --> A["CSM action"] --> O["Lagging: logo churn, NRR"]`,
    answer: `**Lagging metrics.** Logo churn (% of customers lost), gross revenue churn, **net revenue retention (NRR)** (includes expansion; 120%+ is excellent).

**Leading indicators.** Seat utilization, depth of key feature adoption, admin logins, support ticket sentiment, champion leaving the company, slowing usage trends.

**Reduction.** Build a health score from the leading indicators → customer success outreach for at-risk accounts, onboarding to key features, annual contracts, integrations that raise switching costs.`,
    pitfalls: ['Only tracking churn after it happens.'],
    followUps: [],
  },
];
