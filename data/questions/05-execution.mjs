// Root cause & Execution questions.
export default [
  {
    id: 'rca-facebook-dau-drop',
    title: 'Facebook DAU dropped 5% week over week. How would you investigate?',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Meta', 'Google', 'Microsoft'],
    framework: 'root-cause',
    concepts: ['root-cause-trees', 'data-pitfalls', 'mece', 'engagement-metrics'],
    whyAsked: 'The most common execution question. Tests structured, calm debugging.',
    clarifiers: ['Is this a sudden drop (one day) or gradual over the week?', 'Global, or in certain regions?', 'How is DAU defined: logged in, or did an action?'],
    diagram: `flowchart TD
  A["📉 DAU −5% WoW"] --> B{"Data real?"}
  B -->|"logging change, bot filter"| B1["Fix tracking"]
  B -->|real| C{"Sudden or gradual?"}
  C --> D["Internal: release, outage, experiment, notification change"]
  C --> E["External: holiday, competitor, news, app store issue"]
  D & E --> F["Segment: platform, version, country, new vs existing"]
  F --> G["Decompose: DAU = new + retained + resurrected − churned"]
  G --> H["Hypothesis → confirm → fix"]`,
    answer: `**1. Clarify.** How is DAU defined? Is the comparison week-over-week with the same days? Is the drop sudden or gradual? Global or local? I'll assume a sudden 5% drop starting Tuesday.

**2. Validate the data.** Any change to logging or the analytics pipeline? A new bot filter? A dashboard definition change? Check related metrics: if sessions, posts and ad impressions are flat, the DAU drop is probably a tracking issue.

**3. Internal factors.** App releases (crashes in a new version?), backend outages (login failures), experiments (an A/B test that hurts the feed), notification changes (fewer pushes means fewer return visits), policy changes.

**4. External factors.** Holidays (a national holiday in a big market), major news or events, a competitor launch, app store issues, OS updates that break login, internet shutdowns in some countries.

**5. Segment.** Platform (iOS, Android, web), app version, country, new vs existing users, entry point (notification, organic, link).
→ *Example finding:* the drop is concentrated on Android, version 412, all countries.

**6. Decompose.** DAU = new + retained + resurrected − churned. If **retained** users dropped on Android 412 → it's an in-app experience problem.

**7. Hypothesis & action.** "Android 412 has a crash or login bug" → check crash logs → roll back or hotfix → monitor recovery → write a post-mortem.

**Communicate.** Tell stakeholders what's known, the scope, the next steps and the expected time to recovery.`,
    pitfalls: ['Jumping to "a competitor launched" without checking data or internal changes.', 'Not segmenting.', 'Listing 30 causes without a structure.'],
    proTip: 'State your structure up front: "I\'ll validate the data, then check internal vs external factors, then segment and decompose." It immediately signals clarity.',
    followUps: ['What if the drop is gradual over 3 months instead?', 'What if only new users are affected?'],
  },
  {
    id: 'rca-uber-wait-times',
    title: 'Uber ride wait times increased 20% in one city. What happened?',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Uber', 'Lyft'],
    framework: 'root-cause',
    concepts: ['marketplaces', 'root-cause-trees', 'data-pitfalls'],
    whyAsked: 'Root cause in a two-sided marketplace. Supply and demand both matter.',
    clarifiers: ['Since when, and at what times of day?', 'Specific areas in the city?'],
    diagram: `flowchart TD
  W["⏱️ Wait time +20%"] --> S["Supply ↓"]
  W --> D["Demand ↑"]
  W --> M["Matching / ops"]
  S --> S1["Drivers offline: fuel prices, competitor bonus, regulation"]
  D --> D1["Event, weather, transit strike"]
  M --> M1["Dispatch algorithm change, map/routing bug, airport rules"]`,
    answer: `**Clarify.** Wait time = time from request to pickup. Started last Monday, mostly during evening peak, citywide.

**Validate.** Did the ETA calculation change? Is it a GPS or map data issue?

**Structure: supply / demand / matching.**
- **Supply down?** Fewer online driver hours. Why? A competitor's driver incentives, fuel price spike, lower driver pay from a recent incentive change, new regulation (licence checks), driver protest.
- **Demand up?** Major events, bad weather, a public transport strike, university term starting, a successful promotion.
- **Matching issues?** A dispatch algorithm update, mapping bug (roads closed for construction), airport queue rules.

**Segment.** By hour, neighbourhood, product (UberX vs Pool), and new vs regular drivers.
→ *Example finding:* online driver hours are down 15% in the evening, and a competitor launched an evening driver bonus last week.

**Action.** Short term: targeted driver incentives for evening peaks, surge pricing calibration. Longer term: driver loyalty programme (earnings guarantees, perks).
**Metrics to watch.** Driver online hours, ETA, fulfilment rate, driver churn to competitors.`,
    pitfalls: ['Only thinking about demand.'],
    followUps: ['How would you design the driver incentive?'],
  },
  {
    id: 'rca-checkout-conversion',
    title: 'E-commerce checkout conversion dropped 8% yesterday. Walk me through it.',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Amazon', 'Shopify', 'Etsy'],
    framework: 'root-cause',
    concepts: ['funnel-conversion', 'root-cause-trees', 'data-pitfalls'],
    whyAsked: 'A sudden drop in a funnel step. Tests funnel decomposition.',
    clarifiers: ['Checkout start → purchase, or visit → purchase?', 'All payment methods?'],
    diagram: `flowchart LR
  C["Cart"] --> A["Address"] --> S["Shipping"] --> P["Payment"] --> O["Order placed"]
  P -.->|"drop is here?"| X["Payment provider outage? 3-D Secure change?"]`,
    answer: `**1. Validate.** Is tracking still firing on the order confirmation page? Are orders in the backend (database) down too?

**2. Locate in the funnel.** Break checkout into steps: cart → address → shipping → payment → confirmation. Find which step's conversion fell.

**3. Segment.** Payment method, device, browser, country, new vs returning.

**4. Typical causes for a sudden drop.**
- Payment provider outage or a new 3-D Secure authentication flow
- A release that broke a form field on one browser
- Shipping cost change, or a promo code that stopped working
- Mix shift: a traffic spike from a low-intent ad campaign (lots of cart starts, few purchases)

→ *Example:* the drop is only at the payment step, only for one card network → payment processor issue → switch to a backup processor and contact the provider.`,
    pitfalls: ['Not checking whether orders in the database dropped too (is it a tracking or real problem?).'],
    followUps: [],
  },
  {
    id: 'rca-youtube-watch-time',
    title: 'YouTube watch time is down 3% month over month, but DAU is flat. Why?',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google'],
    framework: 'root-cause',
    concepts: ['root-cause-trees', 'engagement-metrics', 'data-pitfalls'],
    whyAsked: 'Tests decomposition when the top-line user count is unchanged.',
    clarifiers: [],
    diagram: `flowchart LR
  WT["Watch time"] --> U["DAU (flat)"]
  WT --> S["Sessions per DAU"]
  WT --> L["Minutes per session"]
  L --> L1["Shorter videos: Shorts mix shift?"]
  L --> L2["Recommendation quality ↓"]
  S --> S1["Fewer notifications? Autoplay change?"]`,
    answer: `**Decompose.** Watch time = DAU × sessions per DAU × minutes per session. DAU is flat, so look at sessions and session length.

**Hypotheses.**
- **Mix shift to Shorts**: more Shorts consumption means shorter videos, so total minutes fall even though engagement didn't drop.
- **Seasonality**: e.g. the back-to-school period.
- **Recommendation change** reducing session depth.
- **Autoplay or notification setting changes.**
- **TV/connected device issues** (long sessions happen there).
- **Competition** for long-form attention.

**Investigate.** Break it down by surface (Shorts, home, search, TV), device and content type. Compare with the same period last year. Check the experiment log.

→ *If Shorts are cannibalizing long-form,* evaluate whether that's acceptable strategically (see the Shorts metrics question).`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'exec-launch-with-bug',
    title: 'Launch is tomorrow and QA found a bug affecting 2% of users. Do you launch?',
    category: 'execution',
    subcategory: 'Launch decision',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Amazon', 'Microsoft'],
    framework: 'root-cause',
    concepts: ['tradeoffs-decisions', 'stakeholder-management', 'guardrail-metrics'],
    whyAsked: 'A classic trade-off question. Tests judgement, risk assessment, and communication.',
    clarifiers: ['What is the severity: cosmetic, broken function, data loss, or security?', 'Is the launch date tied to a hard external event?', 'Which 2%: a specific segment?'],
    diagram: `flowchart TD
  B["🐞 Bug affecting 2%"] --> S{"Severity?"}
  S -->|"security / data loss / payments"| N["❌ Don't launch"]
  S -->|"functional, workaround exists"| M{"Can we limit exposure?"}
  S -->|"cosmetic"| Y["✅ Launch, fix in next release"]
  M -->|"feature flag / exclude segment"| Y2["✅ Launch to 98% + fix"]
  M -->|"no"| D["Weigh: cost of delay vs harm"]`,
    answer: `**Clarify the bug.**
- **Severity:** cosmetic? feature broken? data loss, security or payments?
- **Who** are the 2%? Random, or a specific device or segment (enterprise customers, or accessibility users)?
- **Workaround?** **Fix time?** **Reversibility?**

**Clarify the cost of delay.** Is the date tied to a marketing event, a partner contract or a competitor launch? Or is it an internal target?

**Decision framework.**
- **Security, privacy, data loss, money**: don't launch. Trust damage is a one-way door.
- **Functional bug with containment**: launch with a **feature flag** that excludes the affected segment, show a clear message, and ship a hotfix ASAP.
- **Cosmetic**: launch and fix in the next sprint.

**Example answer.** "The bug breaks image upload on old Android versions (2% of users) and there's a workaround. I'd launch to everyone except those versions using a feature flag, prepare support macros, hotfix within 3 days, and monitor crash rates. I'd align with engineering, QA, support and marketing today, and document the decision."

**Communicate.** Inform stakeholders with the reasoning, risk and plan. Make sure support is ready.`,
    pitfalls: ['Answering yes or no without asking about severity.', 'Forgetting to communicate with support and stakeholders.'],
    proTip: 'Mention feature flags or staged rollouts. Modern launches aren\'t all-or-nothing.',
    followUps: ['What if the CEO insists on launching a severe bug?'],
  },
  {
    id: 'exec-prioritize-roadmap',
    title: 'You have 10 feature requests and capacity for 3. How do you prioritize?',
    category: 'execution',
    subcategory: 'Prioritization',
    difficulty: 'Easy',
    learningValue: 5,
    companies: ['Amazon', 'Atlassian', 'Microsoft'],
    framework: 'root-cause',
    concepts: ['prioritization', 'okrs', 'stakeholder-management', 'roadmapping'],
    whyAsked: 'Tests structured prioritization and connecting to strategy.',
    clarifiers: ['What are this quarter\'s goals or OKRs?', 'Where do the requests come from (customers, sales, execs)?'],
    diagram: `flowchart LR
  R["10 requests"] --> G["Filter by goal / OKR fit"] --> S["Score: RICE"] --> D["Check dependencies, risk, strategic bets"] --> T["Top 3 + communicate the 'not now' list"]`,
    answer: `**1. Anchor on goals.** What is the team's objective this quarter? (e.g. improve activation.) Drop or defer requests that don't connect to it, unless they're urgent (legal or security).

**2. Understand each request.** What problem does it solve, for whom, and what evidence do we have (data, customer count, revenue at risk)? Combine duplicates. Many requests are different solutions to the same problem.

**3. Score.** Use RICE (Reach, Impact, Confidence, Effort). Effort estimates come from engineering.

**4. Apply judgement.** Dependencies (A unblocks B), strategic bets, quick wins to build momentum, tech debt that slows everything down, balancing the portfolio (one big bet + some small wins).

**5. Decide and communicate.** Share the top 3 with the reasoning. Share the "not now" list with requesters, including why and when it'll be revisited. Transparency maintains trust.`,
    pitfalls: ['Prioritizing by who shouts loudest.', 'Using a framework mechanically without strategic judgement.'],
    followUps: ['A big customer threatens to churn without feature #8. Now what?'],
  },
  {
    id: 'exec-engineering-delay',
    title: 'Engineering says the feature will take 3 months, not 1. What do you do?',
    category: 'execution',
    subcategory: 'Execution trade-off',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Meta', 'Stripe'],
    framework: 'root-cause',
    concepts: ['tradeoffs-decisions', 'mvp', 'stakeholder-management'],
    whyAsked: 'Tests scope negotiation and partnership with engineering.',
    clarifiers: ['Why the gap: unknowns, tech debt, dependencies?', 'Is the deadline fixed?'],
    diagram: `flowchart TD
  A["3 months vs 1"] --> U["Understand why: dependencies, tech debt, unknowns"]
  U --> O1["Cut scope: MVP in 1 month"]
  U --> O2["Add resources: if parallelizable"]
  U --> O3["Move deadline"]
  U --> O4["Phase it: v1 → v2"]`,
    answer: `**1. Understand, don't push.** Ask engineering what drives the estimate: unknowns, tech debt, integration with another team, or scale requirements. Treat it as a joint problem.

**2. Revisit the goal.** What's the core outcome we need, and why the 1-month deadline (event, contract, OKR)?

**3. Options.**
- **Cut scope to an MVP**: what's the 20% of the work that delivers 80% of the value? (e.g. manual admin tools behind the scenes, a single platform first.)
- **Phase it**: v1 in 1 month, full version in 3.
- **Remove dependencies**: negotiate priority with the other team.
- **Add resources**: only if the work can be done in parallel (adding people to a late project can make it later).
- **Move the date**: if the date is soft.

**4. Decide together and communicate.** Update stakeholders on the trade-offs and the new plan.`,
    pitfalls: ['Pressuring engineers to "just work harder".'],
    followUps: [],
  },
  {
    id: 'rca-app-store-rating',
    title: 'Your app\'s store rating fell from 4.6 to 3.9 in two weeks. What do you do?',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Apple', 'Google', 'Spotify'],
    framework: 'root-cause',
    concepts: ['root-cause-trees', 'data-pitfalls'],
    whyAsked: 'A qualitative signal root cause.',
    clarifiers: [],
    diagram: `flowchart LR
  R["⭐ Rating drop"] --> T["Read the reviews: themes"] --> V["Correlate with release / version"] --> F["Fix + respond to reviews + rating prompt timing"]`,
    answer: `**Investigate.** Read the recent 1–2 star reviews and categorize them (crash, new UI, price, login). Check whether the timing matches a release. Segment by app version, device and OS. Check crash rates and support tickets.

**Common causes.** A buggy release, an unpopular redesign, a paywall or price change, removing a beloved feature, review bombing.

**Action.** Fix the root issue (hotfix), reply to reviews, and once it's fixed, prompt satisfied users for ratings at good moments (after a successful task).`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'rca-signups-up-revenue-flat',
    title: 'Sign-ups are up 30% but revenue is flat. What\'s going on?',
    category: 'execution',
    subcategory: 'Conflicting metrics',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Dropbox', 'Spotify', 'Notion'],
    framework: 'root-cause',
    concepts: ['funnel-conversion', 'data-pitfalls', 'unit-economics'],
    whyAsked: 'Tests mix shift and funnel quality thinking.',
    clarifiers: [],
    diagram: `flowchart TD
  S["Sign-ups +30%"] --> Q["Lower-quality traffic? new channel, bots, promo"]
  S --> L["Conversion lag: paid conversion takes 30+ days"]
  S --> F["Free tier changes, so fewer need to pay"]
  Q & L & F --> A["Analyse by cohort + channel"]`,
    answer: `**Hypotheses.**
1. **Time lag**: new users convert to paid after 30–60 days, so revenue hasn't caught up yet. Check cohort conversion curves.
2. **Lower-quality sign-ups**: a new channel (viral campaign, affiliate, bots) brings low-intent users. Check conversion by channel.
3. **Free tier more generous**: fewer users need to upgrade.
4. **Churn of existing paid users** is offsetting new revenue.
5. **Price or discount changes** lowering ARPU.

**Approach.** Break revenue into new vs existing customers. Look at cohort trends by acquisition channel.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'exec-stakeholder-conflict',
    title: 'Sales wants feature X for a big deal; your data says feature Y helps more users. What do you do?',
    category: 'execution',
    subcategory: 'Stakeholder trade-off',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Salesforce', 'Microsoft', 'Atlassian'],
    framework: 'root-cause',
    concepts: ['stakeholder-management', 'prioritization', 'tradeoffs-decisions'],
    whyAsked: 'Classic B2B tension between sales and product.',
    clarifiers: ['Deal size relative to revenue?', 'Do other customers also want X?'],
    diagram: `flowchart LR
  X["Feature X: one big deal"] --> E["Evaluate: revenue, strategic fit, reuse"]
  Y["Feature Y: many users"] --> E
  E --> D["Decision + transparent communication"]`,
    answer: `**Understand both sides.** Deal size, likelihood of closing, whether X is really a deal-breaker, whether other customers want X, and whether X fits the product vision. For Y: reach, impact and evidence.

**Options.** Build X if it's strategically aligned and generalizable. Offer a workaround or partner integration. Phase it (Y now, X next quarter with a commitment in the contract). Build a smaller version of X.

**Decide with data and communicate.** Bring sales into the trade-off conversation. Avoid one-off custom features that create long-term maintenance cost.`,
    pitfalls: ['Automatically saying yes to sales, or dismissing it entirely.'],
    followUps: [],
  },
  {
    id: 'rca-spotify-skip-rate',
    title: 'Skip rate on Spotify\'s Discover Weekly jumped 15%. Investigate.',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Spotify'],
    framework: 'root-cause',
    concepts: ['recommendation-systems', 'root-cause-trees', 'ab-testing'],
    whyAsked: 'Root cause for a recommendation system metric.',
    clarifiers: [],
    diagram: `flowchart LR
  S["Skip rate ↑"] --> M["Model change / experiment"]
  S --> D["Data pipeline: stale features"]
  S --> C["Catalog: licensing removed songs"]
  S --> U["User mix: more new users with sparse history"]`,
    answer: `**Validate.** Did skip tracking change? Is the drop concentrated on one platform?

**Hypotheses.** A recommendation model update or experiment, a data pipeline bug (stale user features), catalog changes (labels removing tracks), a user mix shift (more new users with little listening history), a UI change (e.g. autoplay previews).

**Segment.** By new vs tenured users, region, model version and genre. Check the experiment log. If a model update coincides with the jump, roll back and compare.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'exec-sunset-feature',
    title: 'How would you decide whether to sunset (remove) a feature?',
    category: 'execution',
    subcategory: 'Product lifecycle',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Google', 'Meta'],
    framework: 'root-cause',
    concepts: ['tradeoffs-decisions', 'stakeholder-management', 'user-segmentation'],
    whyAsked: 'Tests weighing usage, cost and user harm, plus communication.',
    clarifiers: [],
    diagram: `flowchart LR
  U["Usage + who uses it"] --> D{"Sunset?"}
  C["Maintenance cost + complexity"] --> D
  S["Strategic fit"] --> D
  D -->|yes| P["Migration path, notice, export, comms"]`,
    answer: `**Evaluate.** Usage (how many users and who: are they high-value?), whether usage is trending up or down, maintenance cost (engineering time, bugs, security), complexity it adds to the UI, strategic fit, alternatives available.

**Decision.** Sunset if costs outweigh value and there's a reasonable alternative.

**Execution.** Notify well in advance, offer migration or export, help power users, stage the shutdown, monitor complaints and churn.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'rca-delivery-times-up',
    title: 'Average delivery time on a food app rose from 30 to 38 minutes. Diagnose.',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['DoorDash', 'Swiggy', 'Uber'],
    framework: 'root-cause',
    concepts: ['marketplaces', 'root-cause-trees', 'mece'],
    whyAsked: 'Process decomposition in a three-sided marketplace.',
    clarifiers: [],
    diagram: `flowchart LR
  O["Order placed"] --> A["Restaurant accepts"] --> P["Prep time"] --> C["Courier assigned + travel to restaurant"] --> W["Wait at restaurant"] --> D["Drive to customer"]`,
    answer: `**Decompose the delivery time into stages:** acceptance → prep → courier assignment → courier to restaurant → wait at pickup → drive to customer. Find which stage grew.

**Hypotheses by stage.**
- Prep: new popular restaurants that are slow, staff shortages.
- Assignment: courier shortage (supply), dispatch algorithm change.
- Driving: weather, road closures, a larger delivery radius setting.
- Mix: more orders from distant restaurants or batched orders.

**Segment.** By city, time of day, restaurant, courier vehicle type.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'exec-goal-setting-new-team',
    title: 'You just joined as PM of a new team. What do you do in your first 90 days?',
    category: 'execution',
    subcategory: 'Leadership execution',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Amazon', 'Google', 'Microsoft'],
    framework: 'root-cause',
    concepts: ['stakeholder-management', 'okrs', 'roadmapping'],
    whyAsked: 'Tests onboarding, relationship building and strategy formation.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Days 1–30: Listen and learn"] --> B["Days 31–60: Diagnose + quick wins"] --> C["Days 61–90: Strategy + roadmap + OKRs"]`,
    answer: `**Days 1–30: Learn.** 1:1s with engineering, design, data, sales and support. Talk to 10+ customers. Study metrics, past decisions and the roadmap. Use the product deeply.

**Days 31–60: Diagnose + quick wins.** Identify the top problems and opportunities. Ship 1–2 small wins to build trust. Fix process gaps.

**Days 61–90: Direction.** Write a strategy doc: vision, goals, key bets. Align on OKRs and a roadmap with leadership and the team. Set up regular rituals.`,
    pitfalls: ['Making big changes before understanding the context.'],
    followUps: [],
  },
  {
    id: 'rca-ads-revenue-drop',
    title: 'Ad revenue dropped 10% but impressions are flat. What\'s happening?',
    category: 'execution',
    subcategory: 'Metric drop (root cause)',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Meta', 'Google', 'Pinterest'],
    framework: 'root-cause',
    concepts: ['root-cause-trees', 'data-pitfalls', 'mece'],
    whyAsked: 'Revenue decomposition: price (CPM, CPC) vs volume.',
    clarifiers: [],
    diagram: `flowchart LR
  R["Ad revenue"] --> I["Impressions (flat)"]
  R --> CTR["Click-through rate"]
  R --> CPC["Price per click / CPM"]
  CPC --> A["Advertiser demand: budgets, seasonality, macro"]
  CPC --> T["Targeting quality: privacy changes"]`,
    answer: `**Decompose.** Revenue = impressions × CTR × CPC (or impressions × CPM). Impressions are flat, so price or CTR fell.

**Hypotheses.**
- **Lower advertiser demand**: seasonality (post-holiday January), macroeconomic budget cuts, a big advertiser category pausing.
- **Lower targeting effectiveness**: privacy changes reduce conversion tracking, so advertisers bid less.
- **Lower CTR**: ad relevance dropped (a model change), ad format change.
- **Mix shift**: more impressions in low-CPM regions or surfaces (e.g. Reels vs Feed).
- **Auction or pricing changes.**

**Segment.** By region, surface, advertiser vertical and objective. Then act accordingly (better measurement tools, sales outreach).`,
    pitfalls: [],
    followUps: [],
  },
];
