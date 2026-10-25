// Technical questions for PMs.
export default [
  {
    id: 'tech-what-happens-url',
    title: 'What happens when you type a URL into a browser and press Enter?',
    category: 'technical',
    subcategory: 'How things work',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Microsoft', 'Amazon'],
    framework: 'technical',
    concepts: ['system-design-basics', 'apis'],
    whyAsked: 'The classic technical fluency question. Tests whether you can explain layers simply and correctly.',
    clarifiers: ['How deep should I go: high level, or network details?'],
    diagram: `sequenceDiagram
  participant U as You
  participant B as Browser
  participant D as DNS
  participant C as CDN / Server
  U->>B: type example.com + Enter
  B->>B: check cache
  B->>D: resolve example.com
  D-->>B: IP address
  B->>C: TCP + TLS handshake (HTTPS)
  B->>C: HTTP GET /
  C-->>B: HTML
  B->>C: fetch CSS, JS, images
  B->>U: render page`,
    answer: `**1. URL parsing & cache.** The browser checks whether the input is a URL or a search term, and checks its cache (and HSTS rules for HTTPS).

**2. DNS lookup.** It converts the domain to an IP address. It checks the browser cache, then the OS cache, then the router, then the internet provider's resolver, which asks the root servers → the .com servers → the domain's authoritative server.

**3. Connection.** TCP handshake with the server (often a CDN edge close to you), then a **TLS handshake** to encrypt (HTTPS). Certificates verify the site's identity.

**4. HTTP request.** \`GET /\` with headers (cookies, browser info).

**5. Server side.** Load balancer → web/app servers → maybe cache and database → builds a response (HTML or JSON).

**6. Response & rendering.** The browser parses the HTML → builds the DOM → requests CSS, JS and images (often from a CDN) → builds the layout → paints → runs JavaScript.

**Why a PM should care.** Each step adds latency. CDNs, caching, fewer requests and lazy-loading images improve page speed, which directly affects conversion and SEO.`,
    pitfalls: ['Skipping DNS or HTTPS.', 'Going so deep into networking that you never reach the product angle.'],
    proTip: 'End with the product implication (page speed affects conversion). It turns a technical answer into a PM answer.',
    followUps: ['How would you make a page load faster?', 'What is a CDN?'],
  },
  {
    id: 'tech-design-url-shortener',
    title: 'Design a URL shortener (like bit.ly) at a high level',
    category: 'technical',
    subcategory: 'System design for PMs',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Amazon', 'Meta'],
    framework: 'technical',
    concepts: ['system-design-basics', 'apis'],
    whyAsked: 'Simple system design. Tests components, data flow and scale trade-offs.',
    clarifiers: ['Expected scale (links created and clicks per day)?', 'Custom aliases? Analytics? Expiry?'],
    diagram: `flowchart LR
  U["User"] -->|"POST /shorten long URL"| API["API service"]
  API --> ID["ID generator: base62 code"]
  API --> DB[("DB: code → long URL")]
  V["Visitor"] -->|"GET /abc123"| R["Redirect service"]
  R --> Cache[("Cache: hot links")]
  Cache -.miss.-> DB
  R -->|"301/302 redirect"| V
  R --> Q["Click events queue"] --> AN["Analytics"]`,
    answer: `**Requirements.** Create short links; redirect fast; optional custom aliases, expiry and analytics. Reads far outnumber writes (e.g. 100:1).

**Components.**
1. **Create API:** takes a long URL and generates a unique short code, e.g. a 7-character base62 code (62⁷ ≈ 3.5 trillion combinations). Store code → URL in a database.
2. **Redirect service:** looks up the code, checking the **cache** first (popular links are read constantly), then the database, and returns an HTTP 301/302 redirect.
3. **Analytics:** log click events asynchronously to a queue so redirects stay fast.
4. **Abuse protection:** scan for malware and phishing URLs, apply rate limits.

**Trade-offs.**
- **301 (permanent)** is cached by browsers and faster, but you lose click tracking. **302** keeps tracking (which is the product value).
- A key-value NoSQL store scales easily for simple lookups.
- Code generation: a counter + base62 (needs coordination) vs random codes (needs collision checks).

**Product metrics.** Redirect latency (p99 under 50ms), uptime, links created, click-through, abuse rate.`,
    pitfalls: ['Forgetting about caching for a read-heavy system.', 'Ignoring abuse (phishing).'],
    followUps: ['How would you handle 1 billion clicks a day?'],
  },
  {
    id: 'tech-explain-api',
    title: 'Explain what an API is to a non-technical person',
    category: 'technical',
    subcategory: 'Explain a concept',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Stripe', 'Google', 'Microsoft'],
    framework: 'technical',
    concepts: ['apis'],
    whyAsked: 'Tests communication: simplifying without being wrong.',
    clarifiers: [],
    diagram: `flowchart LR
  Y["🙋 You (app)"] -->|"order from menu"| W["🧑‍🍳 Waiter (API)"] --> K["🍳 Kitchen (server/data)"]
  K -->|"dish"| W -->|"response"| Y`,
    answer: `**Analogy.** "An API is like a waiter in a restaurant. You (an app) don't go into the kitchen (another company's system). You look at the **menu** (what the API offers), give your order to the waiter (a request), and the waiter brings back your dish (the response)."

**Real example.** "When a travel site shows flights from many airlines, it asks each airline's API: 'What flights go from London to Paris on Friday?' The airline sends back a list."

**Why it matters.** APIs let products work together without sharing their internals: payments (Stripe), maps (Google Maps in Uber), logging in with Google.`,
    pitfalls: ['Using jargon (endpoints, JSON) with a non-technical audience.'],
    followUps: [],
  },
  {
    id: 'tech-how-google-search-works',
    title: 'How does Google Search work, at a high level?',
    category: 'technical',
    subcategory: 'How things work',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google'],
    framework: 'technical',
    concepts: ['system-design-basics', 'recommendation-systems', 'ml-basics'],
    whyAsked: 'Tests understanding of crawl, index and rank.',
    clarifiers: [],
    diagram: `flowchart LR
  W["🌐 Web pages"] --> C["🕷️ Crawl"] --> I["📇 Index: word → pages"]
  Q["🔎 Query"] --> U["Understand intent"] --> R["Retrieve candidates from index"] --> RK["Rank: relevance, quality, freshness, personalization"] --> S["Results page"]`,
    answer: `**1. Crawling.** Bots follow links to discover pages, revisiting popular or fresh sites more often.
**2. Indexing.** Pages are processed and stored in an **inverted index** (word → list of pages), plus signals like language, quality and structured data.
**3. Query understanding.** Spelling correction, synonyms, intent (navigational, informational, transactional), and language models that understand meaning.
**4. Retrieval.** Fetch thousands of candidate pages quickly from the index.
**5. Ranking.** ML models score relevance, quality and authority (links, E-E-A-T), freshness, location, page experience (speed, mobile friendliness).
**6. Serving.** Results plus features (snippets, maps, AI overviews) within milliseconds, served from distributed data centres.

**PM angle.** Metrics like the click-through rate of the first result, good abandonment (the answer was shown on the page), and query reformulation rate.`,
    pitfalls: [],
    followUps: ['How would you measure search quality?'],
  },
  {
    id: 'tech-sql-vs-nosql',
    title: 'When would you choose a SQL vs a NoSQL database?',
    category: 'technical',
    subcategory: 'Technical trade-off',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Amazon', 'Microsoft'],
    framework: 'technical',
    concepts: ['system-design-basics'],
    whyAsked: 'A common technical trade-off PMs discuss with engineers.',
    clarifiers: [],
    diagram: `flowchart LR
  SQL["🗄️ SQL: tables, joins, transactions, strong consistency"] --> U1["Payments, orders, inventory"]
  NOSQL["📦 NoSQL: flexible schema, horizontal scale"] --> U2["Feeds, logs, sessions, catalogs"]`,
    answer: `**SQL (relational: PostgreSQL, MySQL).** Structured data with relationships, complex queries (joins), **ACID transactions** (all-or-nothing updates). Best for money, orders and inventory, where correctness matters.

**NoSQL (key-value, document, wide-column: DynamoDB, MongoDB, Cassandra).** Flexible schemas, scales horizontally to huge volumes, very fast simple lookups, often eventually consistent. Best for user sessions, activity feeds, IoT and logs, product catalogs with varying attributes.

**PM framing.** "For checkout, we need transactions, so SQL. For the activity feed with billions of writes, NoSQL." Many companies use both.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'tech-design-notification-system',
    title: 'Design a notification system for a large app (high level)',
    category: 'technical',
    subcategory: 'System design for PMs',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Meta', 'Uber', 'Amazon'],
    framework: 'technical',
    concepts: ['system-design-basics', 'guardrail-metrics', 'apis'],
    whyAsked: 'Combines architecture with product decisions (frequency, relevance, user control).',
    clarifiers: ['Channels: push, email, SMS, in-app?', 'Transactional, marketing, or both?'],
    diagram: `flowchart LR
  E["Event sources: order shipped, new message"] --> Q["📬 Queue"]
  Q --> P["Notification service: preferences, frequency caps, priority, templates"]
  P --> Push["APNs / FCM push"] & Em["Email provider"] & SMS["SMS provider"] & In["In-app inbox"]
  Push & Em & SMS --> T["Delivery + open tracking"] --> P`,
    answer: `**Components.**
1. **Event producers** publish events to a **queue** (decoupled, absorbs spikes).
2. **Notification service:** checks **user preferences** and opt-outs, **frequency caps**, priority (transactional ones such as a password reset always go out; marketing ones can be throttled), quiet hours and time zones, deduplication, and templates/localization.
3. **Channel adapters:** Apple/Google push services, email and SMS providers, in-app inbox.
4. **Tracking:** delivered, opened and clicked, feeding back into ranking and caps.

**Product decisions.** Relevance ranking (send the best one rather than all of them), batching ("3 new likes"), user controls, guardrails (opt-out and uninstall rate).

**Reliability.** Retries with backoff, idempotency (no duplicate sends), failover to another provider for critical messages.`,
    pitfalls: ['Ignoring user preferences and fatigue.'],
    followUps: [],
  },
  {
    id: 'tech-latency-improve',
    title: 'Your app\'s screens load slowly. How would you work with engineering to improve it?',
    category: 'technical',
    subcategory: 'Performance',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Meta', 'Amazon'],
    framework: 'technical',
    concepts: ['system-design-basics', 'root-cause-trees'],
    whyAsked: 'Tests PM approach to performance: measure, prioritize and trade off.',
    clarifiers: [],
    diagram: `flowchart LR
  M["Measure: p50/p95 load time per screen"] --> F["Find bottleneck: network, backend, rendering"] --> X["Fixes: cache, CDN, pagination, compression, lazy load"] --> V["Verify impact on conversion"]`,
    answer: `**1. Measure.** Instrument load times (p50, p95) per screen, device and network type. Tie them to business metrics, e.g. "a 1-second delay reduces conversion by X%".
**2. Diagnose.** Break the load time down: network (payload size, number of calls), backend (slow queries, no cache), client (rendering, large images).
**3. Prioritize fixes.** Caching, CDN for images, smaller payloads and pagination, fewer API calls, lazy loading, skeleton screens (perceived speed).
**4. Set a performance budget** (e.g. p95 under 2s) and add regression monitoring in CI.
**5. Validate** with an A/B test to quantify the business impact.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'tech-explain-cloud',
    title: 'Explain cloud computing and why companies use it',
    category: 'technical',
    subcategory: 'Explain a concept',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Amazon', 'Microsoft', 'Google'],
    framework: 'technical',
    concepts: ['system-design-basics', 'unit-economics'],
    whyAsked: 'Basic technical literacy.',
    clarifiers: [],
    diagram: `flowchart LR
  O["On-premises: buy servers upfront"] --> C["Cloud: rent computing on demand"]
  C --> B1["Scale up/down"] & B2["Pay as you go"] & B3["Global reach"] & B4["Managed services"]`,
    answer: `**Simple explanation.** Instead of buying and maintaining your own servers, you rent computing power, storage and services from providers (AWS, Azure, Google Cloud) over the internet, and pay for what you use, like electricity.

**Why.** Elastic scaling (Black Friday spikes), no big upfront capital spend, speed to launch, global data centres, managed services (databases, ML), reliability.

**Models.** IaaS (rent virtual machines), PaaS (deploy code; the platform manages the rest), SaaS (finished software like Gmail).

**Trade-offs.** Cost at very large steady scale, vendor lock-in, data residency rules.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'tech-design-ride-matching',
    title: 'How does a ride-hailing app match riders and drivers?',
    category: 'technical',
    subcategory: 'How things work',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Uber', 'Lyft', 'Grab'],
    framework: 'technical',
    concepts: ['marketplaces', 'system-design-basics', 'ml-basics'],
    whyAsked: 'Real-time systems plus marketplace optimization.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Drivers send GPS every few seconds"] --> G["Geo index: cells"]
  R["Rider request"] --> M["Matching service"]
  G --> M
  M --> E["ETA service: maps + traffic"]
  M --> O["Optimize: ETA, acceptance, global efficiency"]
  O --> Off["Offer to driver → accept/timeout → next"]`,
    answer: `**1. Location tracking.** Driver apps send GPS updates every few seconds. They're stored in a **geospatial index** (the map is divided into cells, e.g. hexagons) for fast "nearby drivers" queries.
**2. Request.** The rider's pickup location → find candidate drivers in nearby cells.
**3. ETA.** Compute the actual driving time using the road network and live traffic, not straight-line distance.
**4. Optimize.** Choose the match that minimizes the rider's ETA and overall wait across the city (batch matching over a short window can beat greedy matching), factoring in acceptance likelihood.
**5. Offer.** Send to the driver; if they decline or time out, move to the next candidate.
**6. Pricing.** Dynamic pricing balances supply and demand per area.

**PM metrics.** Match rate, pickup ETA, driver acceptance rate, cancellations, driver utilization.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'tech-technical-debt',
    title: 'How do you decide how much time to spend on technical debt?',
    category: 'technical',
    subcategory: 'Technical trade-off',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Atlassian', 'Stripe', 'Google'],
    framework: 'technical',
    concepts: ['prioritization', 'tradeoffs-decisions', 'stakeholder-management'],
    whyAsked: 'Tests partnership with engineering and long-term thinking.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Tech debt"] --> C["Cost: slower delivery, incidents, morale"]
  C --> Q["Quantify impact"] --> P["Prioritize alongside features"] --> A["Allocate: e.g. 15–20% capacity + targeted projects"]`,
    answer: `**Make it visible and quantified.** Ask engineering which debt hurts most: incidents per month, slower delivery (e.g. a feature that takes 3× longer in a legacy module), on-call load, security risk.

**Prioritize like features.** Score debt items by impact on velocity, reliability and risk versus effort. Debt that blocks the roadmap goes first.

**Allocate.** A steady share of capacity (often 15–20%) for ongoing hygiene, plus dedicated projects for big items. Tie them to business outcomes ("migrating the payments module reduces failed checkouts and unblocks multi-currency support").`,
    pitfalls: ['Ignoring tech debt entirely, or letting it consume everything without measurable outcomes.'],
    followUps: [],
  },
  {
    id: 'tech-explain-encryption',
    title: 'What is end-to-end encryption and what product trade-offs does it create?',
    category: 'technical',
    subcategory: 'Explain a concept',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Meta', 'Apple', 'Google'],
    framework: 'technical',
    concepts: ['trust-safety', 'tradeoffs-decisions'],
    whyAsked: 'Technical concept plus product and policy trade-offs.',
    clarifiers: [],
    diagram: `flowchart LR
  A["📱 Alice encrypts with Bob's key"] --> S["🖥️ Server sees only scrambled data"] --> B["📱 Bob decrypts"]`,
    answer: `**What it is.** Messages are encrypted on the sender's device and only decrypted on the recipient's device. Even the service provider can't read them.

**Benefits.** Privacy, security against breaches, user trust.

**Trade-offs.**
- **Content moderation and safety**: the server can't scan for abuse, so you rely on user reports and metadata.
- **Features**: server-side search, cloud backups and multi-device sync are harder.
- **Account recovery**: losing the keys means losing message history.
- **Regulation**: pressure from governments for lawful access.`,
    pitfalls: [],
    followUps: [],
  },
];
