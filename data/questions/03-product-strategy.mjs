// Product Strategy questions.
export default [
  {
    id: 'strategy-netflix-gaming',
    title: 'Should Netflix enter the gaming market?',
    category: 'product-strategy',
    subcategory: 'Market entry',
    difficulty: 'Hard',
    learningValue: 5,
    companies: ['Netflix', 'Google', 'Meta'],
    framework: 'strategy',
    concepts: ['porters-five-forces', 'moats', 'build-buy-partner', 'jobs-to-be-done'],
    whyAsked: 'A canonical "should X do Y" question. Tests structured strategy, honest risk assessment, and making a call.',
    clarifiers: ['What is Netflix\'s objective: engagement, retention, or a new revenue line?', 'Time horizon: 1 year or 5 years?', 'Is this about mobile, cloud, or console games?'],
    diagram: `flowchart TD
  O["🎯 Objective: reduce churn, own more leisure time"] --> C["🏢 Company: 270M+ subs, IP, brand, no gaming DNA"]
  O --> Cu["👥 Customers: casual mobile gamers among subs"]
  O --> Co["⚔️ Competition: Apple Arcade, Xbox Game Pass, free-to-play"]
  C & Cu & Co --> Op["Options"]
  Op --> A["A. Don't enter"]
  Op --> B["B. Casual mobile games with IP, bundled ✅"]
  Op --> D["C. Cloud AAA platform"]`,
    answer: `**Clarify the objective.** Netflix competes for *leisure time* (Reed Hastings famously said that they compete with sleep). Gaming takes a huge share of leisure time among younger audiences. I'll assume the goal is **reducing churn and increasing engagement**, not standalone gaming revenue, over 3–5 years.

**Company.** Strengths: a global subscriber base, payment relationships, beloved IP (Stranger Things, Squid Game), a recommendation engine. Weaknesses: no game development DNA, and games have a very different economics and talent model.

**Customers.** Casual mobile gamers among existing subscribers. Kids and teens who already engage with Netflix IP. Hardcore gamers are not the target, because they're loyal to other platforms.

**Competition.** Hardcore: Xbox Game Pass, PlayStation. Casual mobile: free-to-play games with ads and in-app purchases dominate, and Apple Arcade is a bundle competitor. Substitutes: TikTok, YouTube. Porter's view: high rivalry and powerful hit-driven supply (studios), so it's tough to make money directly.

**Options.**
1. **Don't enter**: focus on video. Low risk, but cedes leisure time to gaming.
2. **Casual mobile games bundled with the subscription**: no ads or in-app purchases, IP-based, some studio acquisitions. Moderate cost, and it reinforces the core business.
3. **Cloud-streamed AAA games**: very high cost, and it competes head-on with giants.

**Evaluate.** Option 2 fits the goal: games bundled at no extra cost increase perceived value (lower churn), and IP games create **cross-promotion loops**: watch the show, play the game, then come back to the next season. Option 3 has a weak ability to win and a huge cost.

**Recommendation.** **Enter carefully with option 2**: a mix of licensed games and acquired studios, focused on IP-driven casual and narrative games, plus TV-based party games using the phone as a controller.
**Success metrics:** retention difference between subscribers who play games and similar subscribers who don't, hours of games played per member, game-to-show conversion. **Kill criteria:** if game players' retention lift is negligible after 18 months, scale back.
**Risks:** low discoverability inside the Netflix app, talent cost, and diluting the brand with poor games.`,
    pitfalls: ['Saying "yes, gaming is big" without connecting it to Netflix\'s objectives.', 'Not discussing the competition and why Netflix could win.', 'No kill criteria or success metric.'],
    proTip: 'Measure strategic bets by their effect on the core business (retention lift), not just on the new revenue line.',
    followUps: ['How would you measure whether games reduce churn (causality)?', 'Build or buy studios?'],
  },
  {
    id: 'strategy-amazon-healthcare',
    title: 'Should Amazon expand further into healthcare? How?',
    category: 'product-strategy',
    subcategory: 'Market entry',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Amazon'],
    framework: 'strategy',
    concepts: ['moats', 'build-buy-partner', 'market-sizing', 'platforms-ecosystems'],
    whyAsked: 'Tests assessing a regulated, complex industry against a company\'s capabilities.',
    clarifiers: ['Which part: pharmacy, primary care, insurance, devices?', 'US focus?'],
    diagram: `mindmap
  root((Amazon healthcare))
    Strengths
      Logistics
      Prime base
      Trust in delivery
      AWS
    Opportunities
      Pharmacy delivery
      Virtual primary care
      Chronic care devices
    Risks
      Regulation
      Privacy trust
      Incumbent insurers`,
    answer: `**Objective.** Amazon wants new large growth markets and deeper Prime loyalty. US healthcare spending is enormous (roughly a sixth of GDP) and full of consumer friction.

**Amazon's right to win.** Logistics (pharmacy delivery), a huge Prime base, customer-obsessed UX, AWS for health data, and an existing presence (Amazon Pharmacy, One Medical).

**Customer pains.** Long waits for doctors, opaque pricing, frustrating pharmacy experiences, and managing chronic conditions.

**Options.**
1. **Double down on pharmacy + Prime**: transparent pricing and fast delivery of chronic medications.
2. **Virtual-first primary care** integrated with pharmacy (One Medical), offered as a Prime add-on.
3. **Become an insurer**: huge, but heavily regulated with entrenched incumbents.
4. **B2B**: sell care to employers.

**Evaluate.** Options 1+2 fit Amazon's strengths in convenience and logistics, and create an integrated loop: virtual visit → prescription → delivery in a day. Insurance is a capability Amazon doesn't have.

**Recommendation.** Build a **Prime Health bundle**: virtual primary care + pharmacy with transparent pricing and automatic refills for chronic conditions. Partner with insurers rather than become one.
**Metrics:** members using 2+ health services, prescription retention, Prime retention lift. **Risks:** health data privacy (keep data separate from shopping data), and clinical quality.`,
    pitfalls: ['Ignoring regulation and privacy trust.', 'Recommending insurance without discussing capability gaps.'],
    followUps: ['How would you address customer fears about Amazon having their health data?'],
  },
  {
    id: 'strategy-respond-competitor',
    title: 'A competitor launches a free version of your paid product. What do you do?',
    category: 'product-strategy',
    subcategory: 'Competitive response',
    difficulty: 'Hard',
    learningValue: 5,
    companies: ['Microsoft', 'Salesforce', 'Google'],
    framework: 'strategy',
    concepts: ['moats', 'pricing-models', 'tradeoffs-decisions', 'retention-cohorts'],
    whyAsked: 'Tests calm, data-driven competitive response instead of panic.',
    clarifiers: ['What is our product (assume a B2B SaaS tool)?', 'How good is the free version compared with ours?', 'What does our churn look like so far?'],
    diagram: `flowchart TD
  A["🚨 Competitor goes free"] --> B["1. Assess threat: who switches? data"]
  B --> C{"Customers churning?"}
  C -- "Not yet" --> D["Monitor + strengthen moat"]
  C -- "Yes, small customers" --> E["Launch free/lite tier"]
  C -- "Yes, core customers" --> F["Compete on value: integrations, support, bundles"]`,
    answer: `**Don't panic, diagnose.** Assume we're a B2B project management SaaS charging $10 per user per month.

**1. Understand the competitor's move.** Why are they doing it? To gain users (land-and-expand), or because they monetize elsewhere (e.g. a bundle with an office suite)? Is it sustainable? How good is the product?

**2. Segment our exposure.**
- **Small teams / price-sensitive users**: high risk of switching.
- **Mid-market / enterprise**: care about security, integrations, admin controls and support. Lower risk.
- Look at the data: churn reasons, win/loss rates in sales, and sign-up trends since the launch.

**3. Assess our moats.** Switching costs (data, workflows, integrations), network effects inside teams, brand trust, enterprise features.

**4. Options.**
1. **Match with a free tier** for small teams. This protects the top of the funnel, but cannibalizes some revenue.
2. **Compete on value**: deepen integrations, AI features and a premium experience. Emphasize total cost of ownership.
3. **Lock in key accounts**: annual contracts, migration support, loyalty pricing.
4. **Ignore it**: if the free product is weak and our segments are safe.

**Recommendation.** It depends on the data, but most likely a combination: **launch a limited free tier** (for example, up to 3 users) to keep the funnel healthy, **double down on enterprise value** (integrations, security, admin features), and give at-risk mid-market accounts proactive outreach.
**Watch:** gross churn by segment, new paid conversions, and win rate against the competitor. **Revisit trigger:** if mid-market churn rises above X%, consider repackaging prices.`,
    pitfalls: ['Immediately cutting price to zero.', 'Not segmenting which customers are actually at risk.'],
    proTip: 'Start with "What is the competitor trying to achieve?" Understanding their incentives changes your response.',
    followUps: ['How would you price the free tier to minimize cannibalization?'],
  },
  {
    id: 'strategy-google-5-years',
    title: 'What should Google Search look like in 5 years?',
    category: 'product-strategy',
    subcategory: 'Vision',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Google'],
    framework: 'strategy',
    concepts: ['llm-evals', 'moats', 'pricing-models', 'tradeoffs-decisions'],
    whyAsked: 'A vision question. Tests trend analysis, disruption awareness and business model trade-offs.',
    clarifiers: ['Consumer search focus?', 'Should I include business model implications?'],
    diagram: `flowchart LR
  T1["📱 2010s: 10 blue links + ads"] --> T2["🤖 2020s: AI answers"] --> T3["🧑‍💼 2030: proactive agent that does tasks"]
  T3 --> R["Risk: fewer ad clicks → new monetization: agent commerce, subscriptions"]`,
    answer: `**Trends.** (1) LLMs answer questions directly. (2) Agents complete tasks (booking, buying). (3) Multimodal input: camera, voice. (4) Search shifting to TikTok, Reddit and chatbots among young users. (5) Publishers and regulators pushing back.

**User jobs.** Find facts quickly, decide (compare and buy), do things (book a trip), learn deeply, find local services.

**Vision.** Search evolves from *finding links* to a **personal agent that understands context and completes tasks**: "Plan a 4-day Lisbon trip under $1,500, kid-friendly" → itinerary → bookings, with sources cited.

**Key pillars.**
1. **AI answers with trustworthy citations**, sending traffic to creators so the content ecosystem survives.
2. **Agentic tasks** with partners (airlines, restaurants).
3. **Multimodal**: point your camera and ask.
4. **Personal context** (opt-in) from Gmail and Calendar.

**Business model tension.** Fewer ad clicks per query. Mitigation: sponsored options inside agent flows, transaction fees on bookings, premium subscriptions.

**Metrics.** Tasks completed, user satisfaction, query share among under-25s, revenue per task. **Guardrails:** answer accuracy, publisher traffic.`,
    pitfalls: ['Ignoring the business model disruption to ads.', 'Pure technology hype without user jobs.'],
    followUps: ['How do you keep publishers in the ecosystem?'],
  },
  {
    id: 'strategy-uber-new-market',
    title: 'How should Uber decide which new city or country to launch in?',
    category: 'product-strategy',
    subcategory: 'Expansion',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Uber', 'Lyft', 'DoorDash'],
    framework: 'strategy',
    concepts: ['marketplaces', 'market-sizing', 'go-to-market', 'network-effects'],
    whyAsked: 'Tests building decision criteria and understanding marketplace launch dynamics.',
    clarifiers: ['Rides or delivery?', 'What resources are available?'],
    diagram: `flowchart TD
  C["Candidate cities"] --> F1["📏 Market size: population density, car ownership"]
  C --> F2["🚗 Supply availability: drivers, regulation"]
  C --> F3["⚔️ Competition"]
  C --> F4["💳 Payments + income"]
  F1 & F2 & F3 & F4 --> S["Weighted score → pilot top 2 → expand"]`,
    answer: `**Objective.** Profitable growth: we want cities that can reach liquidity (short wait times) quickly and sustain positive unit economics.

**Criteria.**
1. **Demand**: urban density, number of trips, low car ownership, tourism, nightlife, airports.
2. **Supply**: available drivers, car availability, and the regulatory environment (licensing, legality).
3. **Competition**: entrenched local players (taxi unions, local apps).
4. **Economics**: income levels, digital payments vs cash, fuel costs, expected take rate.
5. **Strategic value**: a gateway to a region, or synergy with Uber Eats.

**Process.** Score cities with weighted criteria → choose 2–3 pilots → launch with a supply-first playbook (driver incentives, airport routes) → track the liquidity milestones → expand to nearby cities.

**Launch metrics.** ETA under 5 minutes, fulfilment rate, driver utilization, cost to acquire a rider and a driver, contribution margin per trip on track to break even.`,
    pitfalls: ['Only looking at population size.', 'Ignoring regulation.'],
    followUps: ['How would you handle a city where cash dominates?'],
  },
  {
    id: 'strategy-spotify-audiobooks',
    title: 'Why did Spotify get into audiobooks? Was it a good idea?',
    category: 'product-strategy',
    subcategory: 'Evaluate a strategic move',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Spotify'],
    framework: 'strategy',
    concepts: ['unit-economics', 'moats', 'platforms-ecosystems'],
    whyAsked: 'Tests evaluating a real strategic move: margins, bundling, and competition with Audible.',
    clarifiers: ['Should I consider both the user value and the business value?'],
    diagram: `flowchart LR
  M["🎵 Music: ~70% of revenue to labels, low margin"] --> P["Need higher-margin content"]
  P --> Pod["🎙️ Podcasts"]
  P --> AB["📚 Audiobooks"]
  AB --> B["Bundle into Premium → perceived value ↑, churn ↓"]`,
    answer: `**Why.** (1) Music margins are thin because labels take most of the revenue. Spoken-word content has better economics. (2) Spotify wants to be *the* audio destination, and it already has the listening habit. (3) Bundling hours of audiobooks into Premium raises perceived value and supports price increases and lower churn. (4) Audible's market is large and loyal, but Audible's credit-based model frustrates many users.

**Assessment.**
- *Strengths:* a huge audience, recommendation tech, an existing app habit, and bundle economics.
- *Risks:* publisher terms are costly, Audible is entrenched, the monthly listening cap feels limiting, and audiobook listeners are a niche segment.

**Verdict.** A good strategic move for retention and margin, *if* it is measured on Premium churn and ARPU uplift rather than standalone audiobook revenue.
**Metrics:** % of Premium users trying audiobooks, retention of audiobook listeners vs non-listeners, gross margin per user.`,
    pitfalls: ['Only discussing the user benefit, not the economics.'],
    followUps: ['What would make you reverse this decision?'],
  },
  {
    id: 'strategy-meta-hardware',
    title: 'Why does Meta invest in VR/AR hardware?',
    category: 'product-strategy',
    subcategory: 'Evaluate a strategic move',
    difficulty: 'Hard',
    learningValue: 3,
    companies: ['Meta'],
    framework: 'strategy',
    concepts: ['platforms-ecosystems', 'moats', 'tradeoffs-decisions'],
    whyAsked: 'Tests platform strategy and understanding of dependency risk.',
    clarifiers: ['Look at it from a business strategy viewpoint?'],
    diagram: `flowchart TD
  P["Problem: Meta lives on Apple and Google platforms"] --> R["Risk: e.g. privacy changes hurt ad targeting"]
  R --> G["Goal: own the next computing platform"]
  G --> V["VR/AR glasses + OS + app store"]
  V --> Pay["Payoff: control distribution, data, fees"]`,
    answer: `**Core reason: platform dependency risk.** Meta's apps run on iOS and Android. Apple's privacy changes (App Tracking Transparency) significantly hurt Meta's ad business. Owning the **next computing platform** (AR glasses, VR) means controlling distribution, data and app store economics.

**Secondary reasons.** A natural home for social presence (virtual hangouts), attracting talent, AI glasses as a carrier for assistants.

**Risks.** Enormous losses with uncertain adoption, hardware isn't Meta's core skill, competition from Apple Vision Pro and others, comfort and price barriers.

**Assessment.** It's a rational long-term bet on platform control. Smart glasses (light, with an AI assistant) are a more plausible near-term path to adoption than heavy VR headsets.
**Metrics:** monthly active device users, developer revenue, retention after 3 months of ownership.`,
    pitfalls: ['Only mentioning "the metaverse is cool".'],
    followUps: ['If you were CEO, would you keep investing at this level?'],
  },
  {
    id: 'strategy-build-buy-partner-payments',
    title: 'Your ride-sharing app wants in-app wallets. Build, buy, or partner?',
    category: 'product-strategy',
    subcategory: 'Build vs buy',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Uber', 'Grab'],
    framework: 'strategy',
    concepts: ['build-buy-partner', 'platforms-ecosystems', 'unit-economics'],
    whyAsked: 'Tests the build/buy/partner trade-off framework applied to fintech.',
    clarifiers: ['Which markets (e.g. Southeast Asia, where many people lack bank accounts)?', 'Strategic goal: convenience or a fintech business?'],
    diagram: `flowchart TD
  Q{"Is the wallet core to our strategy?"} -- "Yes: super-app in SE Asia" --> B["Build or acquire a licensed wallet"]
  Q -- "No: payments are a utility" --> P["Partner with Stripe / local wallets"]`,
    answer: `**Depends on strategic intent.**

- **US/Europe**: card penetration is high and payments are a utility. **Partner** (Stripe, Apple Pay). A wallet adds little differentiation.
- **Southeast Asia/India**: many people have no bank account and cash is common. A wallet is core to the **super-app strategy** (rides, food, bills, loans). Grab and Gojek did exactly this.

**For a super-app strategy:**
- *Build:* full control and data, but it needs licences, a fraud and compliance team, and years of work.
- *Buy:* acquire a licensed local wallet to move fast and gain users and licences.
- *Partner:* fastest, but you lose economics and data, which hurts the lending business later.

**Recommendation (SE Asia).** **Acquire** a licensed wallet in key markets and build a unified experience on top of it. Partner in smaller markets.
**Metrics:** % of rides paid via the wallet, number of wallet use cases per user, payment cost per transaction, fraud rate.`,
    pitfalls: ['Giving one answer without considering the market context.'],
    followUps: ['What regulatory risks matter?'],
  },
  {
    id: 'strategy-apple-search-engine',
    title: 'Should Apple build its own search engine?',
    category: 'product-strategy',
    subcategory: 'Market entry',
    difficulty: 'Hard',
    learningValue: 3,
    companies: ['Apple', 'Google'],
    framework: 'strategy',
    concepts: ['moats', 'tradeoffs-decisions', 'pricing-models'],
    whyAsked: 'Tests weighing opportunity cost: Google pays Apple billions per year to be the default.',
    clarifiers: ['What is Apple\'s goal: privacy, revenue, or control?'],
    diagram: `flowchart LR
  A["Today: Google default → Apple receives a huge annual payment"] --> D{"Build own?"}
  D --> P1["+ privacy brand, control, AI"]
  D --> N1["− lose payments, need ads business, quality gap"]`,
    answer: `**Context.** Apple reportedly receives very large annual payments from Google to be Safari's default search engine. That's almost pure profit.

**Reasons to build.** Control of a key gateway (especially as AI answers rise), strengthen the privacy brand, reduce dependence on a rival, regulatory risk to the Google deal.

**Reasons not to.** Losing a huge high-margin payment, search quality takes years and a massive index, and Apple would need an ads business that conflicts with its privacy positioning.

**Middle path.** Build **AI-powered answers in Siri and Spotlight** that handle many queries on-device (using privacy as a differentiator), while keeping a default deal for general web search. Prepare optionality in case regulators end the deal.

**Recommendation.** Don't build a full Google competitor now. Invest in AI answers to gain leverage and resilience.`,
    pitfalls: ['Ignoring the opportunity cost of the existing deal.'],
    followUps: ['What would change your answer?'],
  },
  {
    id: 'strategy-tiktok-ecommerce',
    title: 'How should TikTok grow its e-commerce business?',
    category: 'product-strategy',
    subcategory: 'Growth strategy',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['TikTok', 'Meta'],
    framework: 'strategy',
    concepts: ['marketplaces', 'trust-safety', 'go-to-market'],
    whyAsked: 'Tests marketplace and trust challenges when entering commerce from a content platform.',
    clarifiers: ['Which market? US?'],
    diagram: `flowchart LR
  V["🎬 Video discovery"] --> I["💡 Impulse interest"] --> S["🛒 TikTok Shop checkout"] --> R["📦 Delivery + reviews"]
  R -.->|"bad quality → trust lost"| V`,
    answer: `**Strength.** Discovery-based shopping: users see products in action from creators they trust.

**Barriers.** Product quality and trust (cheap or fake goods), delivery speed, competition with Amazon, and creator incentives.

**Strategy.**
1. **Trust first**: seller vetting, guaranteed returns, verified reviews.
2. **Fulfilment**: TikTok-managed logistics for top sellers to promise fast delivery.
3. **Creator affiliate tools**: easy product tagging with commissions.
4. **Live shopping events** (a format that's proven in some markets).

**Metrics.** GMV, repeat buyer rate, return and complaint rate, creator affiliate revenue. **Guardrail:** feed engagement shouldn't drop because of too much commerce content.`,
    pitfalls: ['Ignoring quality and trust issues.'],
    followUps: ['How much commerce content is too much in the feed?'],
  },
  {
    id: 'strategy-microsoft-teams-free',
    title: 'Why would Microsoft bundle Teams for free, and was it effective?',
    category: 'product-strategy',
    subcategory: 'Evaluate a strategic move',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Microsoft', 'Slack'],
    framework: 'strategy',
    concepts: ['moats', 'pricing-models', 'platforms-ecosystems'],
    whyAsked: 'A classic bundling strategy case.',
    clarifiers: [],
    diagram: `flowchart LR
  O["Office 365 installed base"] --> B["Bundle Teams at no extra cost"] --> A["Mass adoption"] --> L["Lock-in, protect O365"]`,
    answer: `**Why bundle.** Distribution beats features: Office 365 was already sold to most enterprises. Bundling Teams at no extra cost made switching to Slack hard to justify for IT buyers. It also protected Office from becoming unbundled and deepened lock-in.

**Effectiveness.** Teams reached a huge user count quickly, far beyond Slack. Downsides: regulatory scrutiny over anti-competitive bundling, which led to unbundling in some markets.

**Lesson.** Bundling uses an existing moat to win adjacent markets, but invites antitrust risk when the company is dominant.`,
    pitfalls: ['Ignoring regulatory consequences.'],
    followUps: ['How would Slack respond?'],
  },
  {
    id: 'strategy-whatsapp-monetize',
    title: 'How should WhatsApp make money?',
    category: 'product-strategy',
    subcategory: 'Monetization strategy',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Meta'],
    framework: 'strategy',
    concepts: ['pricing-models', 'trust-safety', 'platforms-ecosystems'],
    whyAsked: 'Tests monetizing without hurting core trust (end-to-end encryption, no ads in chats).',
    clarifiers: ['Constraints: keep privacy and no ads in personal chats?'],
    diagram: `flowchart TD
  W["WhatsApp: billions of users, privacy promise"] --> B["Business messaging API: per-conversation fees"]
  W --> A["Click-to-WhatsApp ads on FB/IG"]
  W --> P["Payments: transaction fees"]
  W --> C["Channels: optional subscriptions"]`,
    answer: `**Constraints.** Trust and privacy are the core value, so no ads in personal chats.

**Options.**
1. **Business messaging (B2C)**: businesses pay per conversation for notifications, support and marketing. They get value from a high open rate.
2. **Click-to-WhatsApp ads** on Facebook and Instagram (Meta captures the value elsewhere).
3. **Payments**: small fees, plus enabling commerce.
4. **Channels + subscriptions** for creators.

**Recommendation.** Prioritize **business messaging + click-to-WhatsApp ads**. They match user intent (people choose to talk to businesses) and don't intrude on private conversations.
**Guardrails:** spam blocks of business accounts, user trust surveys.`,
    pitfalls: ['Proposing ads in private chats.'],
    followUps: ['How do you prevent businesses from spamming users?'],
  },
  {
    id: 'strategy-starbucks-delivery',
    title: 'Should Starbucks build its own delivery fleet?',
    category: 'product-strategy',
    subcategory: 'Build vs buy',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Starbucks', 'DoorDash'],
    framework: 'strategy',
    concepts: ['build-buy-partner', 'unit-economics', 'porters-five-forces'],
    whyAsked: 'Classic build vs partner question with unit economics.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Build fleet"] --> A1["Control + data, but huge fixed cost"]
  B["Partner: DoorDash/Uber"] --> B1["Fast, variable cost, lose some margin + data"]
  B --> R["✅ Partner + own the ordering front-end"]`,
    answer: `**Analysis.** Delivery is not Starbucks' core competency. Delivery economics need density and multiple restaurants to share courier costs. Coffee has a small ticket size and quality degrades over time (hot drinks).

**Options.** Build (control, but high fixed costs and low utilization), partner (fast and flexible), hybrid (order in the Starbucks app, fulfilled by partner couriers).

**Recommendation.** **Hybrid**: partner for fulfilment, but keep ordering in the Starbucks app to retain customer data and loyalty. Focus on the drink quality issue (delivery-safe packaging, limiting delivery radius).
**Metrics:** delivery order margin, share of delivery orders placed in the Starbucks app, delivery satisfaction.`,
    pitfalls: ['Ignoring the economics of low-ticket delivery.'],
    followUps: ['How do you negotiate partner fees?'],
  },
  {
    id: 'strategy-netflix-ads-tier',
    title: 'Was Netflix right to launch an ad-supported tier?',
    category: 'product-strategy',
    subcategory: 'Evaluate a strategic move',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Netflix', 'Disney'],
    framework: 'strategy',
    concepts: ['pricing-models', 'unit-economics', 'user-segmentation'],
    whyAsked: 'Tests price discrimination, segmentation and cannibalization analysis.',
    clarifiers: [],
    diagram: `flowchart TD
  P["Price-sensitive users, password sharers"] --> T["Cheaper ad tier"]
  T --> R1["New subs + ad revenue"]
  T --> R2["Risk: existing subscribers downgrade"]
  R1 & R2 --> E["Evaluate: ARPU ad tier vs standard"]`,
    answer: `**Context.** Subscriber growth slowed, password sharing was widespread, and competitors (Disney+, Hulu) offered ad tiers.

**Logic.** **Price discrimination**: capture price-sensitive users who wouldn't pay full price. Ads plus a lower subscription fee can match the ARPU of a standard plan. It also pairs with the password-sharing crackdown, giving people who were sharing a cheap option.

**Risks.** Existing subscribers downgrading (cannibalization), brand dilution, needing to build ad-tech.

**Evaluation.** Smart if the ad tier's ARPU is close to or above the standard plan's, and most sign-ups are incremental. Reports indicate significant ad-tier adoption in launched markets.
**Metrics:** incremental subscribers, downgrade rate, ad-tier ARPU vs standard, churn by tier.`,
    pitfalls: ['Not discussing cannibalization.'],
    followUps: ['How would you set the ad load?'],
  },
  {
    id: 'strategy-google-pixel',
    title: 'Why does Google make its own Pixel phones when Android is free?',
    category: 'product-strategy',
    subcategory: 'Evaluate a strategic move',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Google'],
    framework: 'strategy',
    concepts: ['platforms-ecosystems', 'build-buy-partner', 'moats'],
    whyAsked: 'Tests understanding of platform vs reference hardware strategy.',
    clarifiers: [],
    diagram: `flowchart LR
  A["Android, open platform"] --> P["Pixel: reference device"]
  P --> X1["Showcase AI features"]
  P --> X2["Pressure OEMs on quality and updates"]
  P --> X3["Hedge against OEM forks"]`,
    answer: `**Reasons.** (1) **Showcase** Google's AI and software at its best (camera, assistant). (2) **Set the bar** for OEMs on updates and quality. (3) **Hedge** against dependence on Samsung, who could push its own services. (4) Gain hardware learning for an ecosystem (watch, earbuds). (5) Revenue is secondary, since market share is small.

**Tension.** Competing with the partners who license Android. Google manages this by keeping Pixel's market share modest and focused on premium segments.

**Success metrics.** Feature adoption by OEMs, Pixel NPS, ecosystem attach rate.`,
    pitfalls: ['Assuming the goal is to beat Samsung on volume.'],
    followUps: [],
  },
];
