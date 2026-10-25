// Estimation questions. Each includes an interactive calculator (calc).
export default [
  {
    id: 'est-youtube-storage',
    title: 'Estimate how much new video storage YouTube needs per day',
    category: 'estimation',
    subcategory: 'Technical estimate',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Google'],
    framework: 'estimation',
    concepts: ['system-design-basics', 'mece'],
    whyAsked: 'Combines estimation with technical understanding (encoding and replication).',
    clarifiers: ['Raw uploads or after encoding into multiple resolutions?', 'Include replicas and backups?'],
    diagram: `flowchart TD
  T["Daily storage"] --> H["Hours uploaded per minute"]
  H --> D["× 1,440 minutes/day"]
  D --> S["× GB per hour of video"]
  S --> R["× resolutions (encodings)"]
  R --> X["× replication factor"]`,
    calc: {
      inputs: [
        {key: 'hpm', label: 'Hours of video uploaded per minute', value: 500, unit: 'hours'},
        {key: 'gbph', label: 'GB per hour (1080p, compressed)', value: 1.5, unit: 'GB'},
        {key: 'enc', label: 'Encoding multiplier (all resolutions)', value: 2.5, unit: '×'},
        {key: 'rep', label: 'Replication factor', value: 3, unit: '×'},
      ],
      steps: [
        {key: 'hpd', label: 'Hours uploaded per day', expr: 'hpm * 1440'},
        {key: 'raw', label: 'Base GB per day', expr: 'hpd * gbph'},
        {key: 'encd', label: 'GB after encodings', expr: 'raw * enc'},
        {key: 'tot', label: '💾 Total GB per day (with replicas)', expr: 'encd * rep'},
      ],
    },
    answer: `**Clarify.** Storage for newly uploaded video per day, after encoding into multiple resolutions and replication.

**Approach.** Uploads per minute → per day → size per hour → multipliers.

**Assumptions.**
- About **500 hours** of video uploaded every minute (a commonly cited figure).
- 1 hour of 1080p compressed video ≈ **1.5 GB**.
- Encodings (144p to 4K): the total of all versions ≈ **2.5×** the 1080p size.
- **3×** replication for durability.

**Calculation.**
- 500 × 1,440 = **720,000 hours per day**
- × 1.5 GB = **1.08 PB**
- × 2.5 = **2.7 PB**
- × 3 = **≈ 8 PB per day**

**Sanity check.** About 3 exabytes per year of new storage. That's plausible for a company with Google's data centre scale.

**Sensitivity.** The most sensitive assumptions are the encoding multiplier and the share of 4K content.`,
    pitfalls: ['Forgetting replication and multiple encodings.'],
    followUps: ['How could YouTube reduce storage cost?'],
  },
  {
    id: 'est-pizzas-nyc',
    title: 'How many pizzas are sold in New York City every day?',
    category: 'estimation',
    subcategory: 'Consumer market estimate',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Google', 'Amazon', 'DoorDash'],
    framework: 'estimation',
    concepts: ['market-sizing', 'mece'],
    whyAsked: 'A classic warm-up. Tests a clean structure and stated assumptions.',
    clarifiers: ['Whole pizzas or slices?', 'Include tourists and commuters?'],
    diagram: `flowchart TD
  T["Pizzas per day"] --> P["People in NYC: residents + visitors"]
  P --> F["× pizza meals per person per week"]
  F --> W["÷ 7 days"]
  W --> S["÷ people per pizza"]`,
    calc: {
      inputs: [
        {key: 'pop', label: 'Residents', value: 8300000},
        {key: 'vis', label: 'Visitors + commuters on a given day', value: 1500000},
        {key: 'meals', label: 'Pizza meals per person per week', value: 0.5, unit: 'meals'},
        {key: 'share', label: 'People per pizza', value: 3, unit: 'people'},
      ],
      steps: [
        {key: 'ppl', label: 'People in NYC on a day', expr: 'pop + vis'},
        {key: 'daily', label: 'Pizza meals per day', expr: 'ppl * meals / 7'},
        {key: 'pz', label: '🍕 Whole pizzas per day', expr: 'daily / share'},
      ],
    },
    answer: `**Clarify.** Whole-pizza equivalents (slices counted as fractions) sold in NYC per day, including visitors.

**Assumptions.**
- 8.3M residents + about 1.5M visitors and commuters ≈ **9.8M people**.
- The average person eats pizza **once every 2 weeks** (0.5 meals per week), higher among younger people.
- **About 3 people share** a pizza (or slices equivalent to ⅓ of a pizza each).

**Calculation.** 9.8M × 0.5 ÷ 7 ≈ **700k pizza meals per day** ÷ 3 ≈ **~233k pizzas per day**.

**Sanity check (bottom-up).** NYC has around 2,000+ pizzerias. 233k ÷ 2,000 ≈ 115 pizzas per shop per day, or roughly 10 an hour over 12 hours. Plausible, especially counting chains and grocery sales.`,
    pitfalls: ['Not sanity-checking with a bottom-up estimate.'],
    followUps: ['How would you estimate revenue?'],
  },
  {
    id: 'est-ev-chargers-us',
    title: 'Estimate the market size for home EV chargers in the US',
    category: 'estimation',
    subcategory: 'Market sizing (TAM)',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Tesla', 'Amazon', 'Google'],
    framework: 'estimation',
    concepts: ['market-sizing', 'mece'],
    whyAsked: 'Market sizing with a growth dimension. Common for strategy-flavoured PM roles.',
    clarifiers: ['Annual new sales or the installed base?', 'Hardware only, or including installation?'],
    diagram: `flowchart TD
  T["Annual market ($)"] --> E["New EVs sold per year"]
  E --> H["× % with home parking (garage/driveway)"]
  H --> L["× % buying a Level-2 charger"]
  L --> P["× price incl. install"]`,
    calc: {
      inputs: [
        {key: 'ev', label: 'New EVs sold in the US per year', value: 1400000},
        {key: 'home', label: 'Share with home parking', value: 0.7},
        {key: 'l2', label: 'Share who buy a Level-2 charger', value: 0.65},
        {key: 'price', label: 'Charger + installation price', value: 1500, unit: '$'},
      ],
      steps: [
        {key: 'h', label: 'Buyers with home parking', expr: 'ev * home'},
        {key: 'units', label: 'Chargers sold per year', expr: 'h * l2'},
        {key: 'mkt', label: '💰 Annual market ($)', expr: 'units * price'},
      ],
    },
    answer: `**Clarify.** The annual US market for new home Level-2 chargers, including installation.

**Assumptions.**
- About **1.4M new EVs** sold in the US per year (recent levels; growing).
- **70%** of EV buyers have a garage or driveway (EV buyers skew toward homeowners).
- **65%** of those install a Level-2 charger (others use a normal outlet or charge at work).
- Average **$600 charger + $900 installation = $1,500**.

**Calculation.** 1.4M × 0.7 × 0.65 ≈ **637k chargers per year** × $1,500 ≈ **$950M per year**.

**Extensions.** Used EV buyers and second-home or replacement chargers add more. With EV sales growing, the market could double within a few years.

**Sensitivity.** EV sales growth and installation cost (older homes may need electrical panel upgrades).`,
    pitfalls: ['Using total cars instead of EVs.', 'Forgetting installation costs.'],
    followUps: ['Would you enter this market? As which kind of player?'],
  },
  {
    id: 'est-uber-drivers-london',
    title: 'How many Uber drivers are needed in London?',
    category: 'estimation',
    subcategory: 'Operations estimate',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Uber', 'Lyft'],
    framework: 'estimation',
    concepts: ['marketplaces', 'market-sizing'],
    whyAsked: 'A marketplace supply estimate. Tests demand → capacity logic.',
    clarifiers: ['Peak or average? Full-time equivalents or individuals?'],
    diagram: `flowchart LR
  D["Trips per day"] --> PK["Peak hour share"] --> C["÷ trips per driver per hour"] --> N["Drivers needed at peak"] --> T["÷ share of drivers online at peak"]`,
    calc: {
      inputs: [
        {key: 'pop', label: 'London population', value: 9000000},
        {key: 'rate', label: 'Uber trips per person per week', value: 0.3},
        {key: 'peak', label: 'Share of daily trips in peak hour', value: 0.12},
        {key: 'tph', label: 'Trips per driver per hour', value: 2},
        {key: 'online', label: 'Share of all drivers online at peak', value: 0.3},
      ],
      steps: [
        {key: 'daily', label: 'Trips per day', expr: 'pop * rate / 7'},
        {key: 'peakTrips', label: 'Trips in peak hour', expr: 'daily * peak'},
        {key: 'drv', label: 'Drivers needed at peak', expr: 'peakTrips / tph'},
        {key: 'total', label: '🚗 Total drivers on the platform', expr: 'drv / online'},
      ],
    },
    answer: `**Clarify.** The number of individual drivers on the platform needed to meet demand, sized for the peak.

**Assumptions.**
- 9M residents. About **0.3 Uber trips per person per week** (including visitors) ≈ 385k trips per day.
- **12%** of daily trips happen in the peak hour ≈ 46k trips.
- A driver completes about **2 trips per hour**, so about 23k drivers are needed online at peak.
- Only **30%** of all registered drivers are online at peak, so the total is ≈ **77k drivers**.

**Sanity check.** London has publicly reported tens of thousands of active drivers, which is the same order of magnitude.

**Insight.** Supply is sized for the **peak**, not the average. That's why surge pricing and peak incentives exist.`,
    pitfalls: ['Sizing for average demand instead of peak.'],
    followUps: [],
  },
  {
    id: 'est-gmail-storage-revenue',
    title: 'Estimate annual revenue from Google One storage subscriptions',
    category: 'estimation',
    subcategory: 'Revenue estimate',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Google'],
    framework: 'estimation',
    concepts: ['pricing-models', 'funnel-conversion'],
    whyAsked: 'Revenue estimation via a freemium conversion funnel.',
    clarifiers: [],
    diagram: `flowchart LR
  U["Google account users"] --> A["× active storage users"] --> C["× paid conversion %"] --> P["× average annual price"]`,
    calc: {
      inputs: [
        {key: 'users', label: 'Active Google accounts', value: 2500000000},
        {key: 'conv', label: 'Share paying for storage', value: 0.04},
        {key: 'price', label: 'Average annual price', value: 25, unit: '$'},
      ],
      steps: [
        {key: 'subs', label: 'Paying subscribers', expr: 'users * conv'},
        {key: 'rev', label: '💰 Annual revenue', expr: 'subs * price'},
      ],
    },
    answer: `**Assumptions.** About 2.5B active accounts. Around **4%** pay (Google has reported 100M+ subscribers across all Google One plans). Average price about **$25 per year**, mostly entry-level plans.

**Calculation.** 2.5B × 4% = 100M subscribers × $25 ≈ **$2.5B per year**.

**Sanity check.** It matches the publicly reported scale of 100M+ subscribers. Bundles with AI features would raise ARPU.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-coffee-shops-city',
    title: 'How many coffee shops can a city of 2 million people support?',
    category: 'estimation',
    subcategory: 'Supply estimate',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Starbucks', 'Amazon'],
    framework: 'estimation',
    concepts: ['market-sizing', 'unit-economics'],
    whyAsked: 'Demand vs capacity per unit.',
    clarifiers: [],
    diagram: `flowchart LR
  D["Coffee cups bought per day"] --> C["÷ cups a shop sells per day"] --> N["Number of shops"]`,
    calc: {
      inputs: [
        {key: 'pop', label: 'Population', value: 2000000},
        {key: 'drink', label: 'Share buying coffee out on a given day', value: 0.15},
        {key: 'cups', label: 'Cups per buyer', value: 1.2},
        {key: 'shop', label: 'Cups a shop sells per day to break even', value: 300},
      ],
      steps: [
        {key: 'd', label: 'Cups bought per day', expr: 'pop * drink * cups'},
        {key: 'n', label: '☕ Shops supported', expr: 'd / shop'},
      ],
    },
    answer: `**Demand.** 2M people × 15% buying coffee out on a given day × 1.2 cups ≈ 360k cups per day.
**Supply.** A shop needs about 300 cups a day to be viable (~$1,500 revenue).
**Answer.** 360k ÷ 300 ≈ **1,200 coffee shops**.
**Sanity check.** That's about 1 shop per 1,700 people, which is in line with coffee-heavy cities.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-airbnb-listings-paris',
    title: 'Estimate the number of Airbnb listings in Paris',
    category: 'estimation',
    subcategory: 'Supply estimate',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Airbnb'],
    framework: 'estimation',
    concepts: ['marketplaces', 'market-sizing'],
    whyAsked: 'Demand-side estimate of a supply number.',
    clarifiers: [],
    diagram: `flowchart LR
  T["Tourist nights per year"] --> A["× Airbnb share"] --> N["÷ nights booked per listing per year"]`,
    calc: {
      inputs: [
        {key: 'tour', label: 'Tourist visits per year', value: 35000000},
        {key: 'nights', label: 'Nights per visit', value: 3},
        {key: 'share', label: 'Airbnb share of nights', value: 0.15},
        {key: 'party', label: 'Guests per booking', value: 2.2},
        {key: 'occ', label: 'Nights booked per listing per year', value: 120},
      ],
      steps: [
        {key: 'gn', label: 'Guest nights per year', expr: 'tour * nights'},
        {key: 'an', label: 'Airbnb guest nights', expr: 'gn * share'},
        {key: 'ln', label: 'Listing nights (÷ party size)', expr: 'an / party'},
        {key: 'lst', label: '🏠 Listings', expr: 'ln / occ'},
      ],
    },
    answer: `**Assumptions.** About 35M tourist visits per year × 3 nights = 105M guest nights. Airbnb share 15% = 15.75M guest nights ÷ 2.2 guests per booking ≈ 7.2M listing nights. An average listing is booked about 120 nights a year.

**Answer.** ≈ **60,000 listings**.

**Sanity check.** Public data has shown tens of thousands of Paris listings, which matches.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-whatsapp-messages',
    title: 'How many messages are sent on WhatsApp per day?',
    category: 'estimation',
    subcategory: 'Usage estimate',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Meta'],
    framework: 'estimation',
    concepts: ['engagement-metrics'],
    whyAsked: 'Simple usage decomposition with segments.',
    clarifiers: [],
    diagram: `flowchart LR
  U["Monthly users"] --> D["× DAU/MAU"] --> M["× messages per DAU per day"]`,
    calc: {
      inputs: [
        {key: 'mau', label: 'Monthly active users', value: 2500000000},
        {key: 'stick', label: 'DAU / MAU', value: 0.7},
        {key: 'msgs', label: 'Messages sent per DAU per day', value: 50},
      ],
      steps: [
        {key: 'dau', label: 'Daily active users', expr: 'mau * stick'},
        {key: 'tot', label: '💬 Messages per day', expr: 'dau * msgs'},
      ],
    },
    answer: `**Assumptions.** About 2.5B monthly users, 70% active daily (it's a messaging app) ≈ 1.75B DAU. They send on average about 50 messages a day (heavy group chat use in some markets).

**Answer.** ≈ **90 billion messages per day**. This is consistent with figures of around 100B messages per day that have been reported publicly.

**Segments.** Heavy users in India and Brazil send hundreds of messages a day; light users send a few.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-smartwatches-india',
    title: 'Estimate the annual smartwatch market in India (units)',
    category: 'estimation',
    subcategory: 'Market sizing (TAM)',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Apple', 'Samsung', 'Amazon'],
    framework: 'estimation',
    concepts: ['market-sizing', 'user-segmentation'],
    whyAsked: 'Population-based sizing with income segmentation.',
    clarifiers: [],
    diagram: `flowchart LR
  P["Population"] --> A["× ages 15–55"] --> S["× smartphone owners"] --> I["× can afford it"] --> O["× owns one"] --> R["÷ replacement years"]`,
    calc: {
      inputs: [
        {key: 'pop', label: 'Population', value: 1430000000},
        {key: 'age', label: 'Share aged 15–55', value: 0.6},
        {key: 'phone', label: 'Smartphone owners in that group', value: 0.7},
        {key: 'own', label: 'Share who own a smartwatch', value: 0.2},
        {key: 'life', label: 'Replacement cycle (years)', value: 2.5},
      ],
      steps: [
        {key: 'a', label: 'Target age group', expr: 'pop * age'},
        {key: 's', label: 'Smartphone owners', expr: 'a * phone'},
        {key: 'o', label: 'Smartwatch owners (installed base)', expr: 's * own'},
        {key: 'u', label: '⌚ Units sold per year', expr: 'o / life'},
      ],
    },
    answer: `**Approach.** Installed base ÷ replacement cycle.
1.43B × 60% aged 15–55 × 70% with smartphones ≈ 600M → 20% own a smartwatch (cheap local brands drive adoption) ≈ 120M → replaced every 2.5 years ≈ **48M units per year**.

**Sanity check.** India has been one of the largest smartwatch markets by volume, with tens of millions of units a year at peak. That's consistent.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-google-searches',
    title: 'How many Google searches happen per second?',
    category: 'estimation',
    subcategory: 'Usage estimate',
    difficulty: 'Easy',
    learningValue: 2,
    companies: ['Google'],
    framework: 'estimation',
    concepts: ['engagement-metrics'],
    whyAsked: 'Quick warm-up. Good for practising unit conversions.',
    clarifiers: [],
    diagram: `flowchart LR
  U["Internet users"] --> G["× Google users"] --> S["× searches per user per day"] --> X["÷ 86,400 seconds"]`,
    calc: {
      inputs: [
        {key: 'net', label: 'Internet users', value: 5300000000},
        {key: 'g', label: 'Share using Google daily', value: 0.6},
        {key: 's', label: 'Searches per user per day', value: 4},
      ],
      steps: [
        {key: 'd', label: 'Searches per day', expr: 'net * g * s'},
        {key: 'ps', label: '🔎 Searches per second', expr: 'd / 86400'},
      ],
    },
    answer: `5.3B internet users × 60% daily Google users × 4 searches a day ≈ 12.7B searches per day ÷ 86,400 ≈ **~150k searches per second**. This is in line with public estimates of 8–10B+ searches per day.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-netflix-bandwidth',
    title: 'Estimate Netflix\'s peak streaming bandwidth in the US',
    category: 'estimation',
    subcategory: 'Technical estimate',
    difficulty: 'Hard',
    learningValue: 3,
    companies: ['Netflix'],
    framework: 'estimation',
    concepts: ['system-design-basics'],
    whyAsked: 'Technical capacity estimate combining usage and bitrate.',
    clarifiers: [],
    diagram: `flowchart LR
  S["US households subscribed"] --> P["× streaming at peak hour"] --> B["× average bitrate"]`,
    calc: {
      inputs: [
        {key: 'hh', label: 'US subscriber households', value: 80000000},
        {key: 'peak', label: 'Share streaming at peak (9pm)', value: 0.25},
        {key: 'mbps', label: 'Average bitrate (Mbps)', value: 5, unit: 'Mbps'},
      ],
      steps: [
        {key: 'streams', label: 'Concurrent streams', expr: 'hh * peak'},
        {key: 'tbps', label: '📡 Peak bandwidth (Tbps)', expr: 'streams * mbps / 1e6'},
      ],
    },
    answer: `80M households × 25% streaming at peak = 20M concurrent streams × 5 Mbps average (a mix of HD and 4K) = 100M Mbps = **~100 Tbps**.
**Insight.** This is why Netflix built its own CDN (Open Connect) with servers inside internet providers' networks.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-food-delivery-tam-city',
    title: 'Estimate the food delivery market (GMV) in a city of 5 million',
    category: 'estimation',
    subcategory: 'Market sizing (TAM)',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['DoorDash', 'Swiggy', 'Zomato', 'Uber'],
    framework: 'estimation',
    concepts: ['market-sizing', 'marketplaces', 'unit-economics'],
    whyAsked: 'Market sizing tied to marketplace economics (GMV → revenue).',
    clarifiers: [],
    diagram: `flowchart LR
  P["Population"] --> H["÷ household size"] --> O["× ordering households"] --> F["× orders per month"] --> V["× order value"] --> G["GMV"] --> R["× take rate → revenue"]`,
    calc: {
      inputs: [
        {key: 'pop', label: 'Population', value: 5000000},
        {key: 'hh', label: 'People per household', value: 2.5},
        {key: 'ord', label: 'Share of households ordering', value: 0.4},
        {key: 'freq', label: 'Orders per month', value: 4},
        {key: 'aov', label: 'Average order value', value: 25, unit: '$'},
        {key: 'take', label: 'Take rate', value: 0.22},
      ],
      steps: [
        {key: 'h', label: 'Households', expr: 'pop / hh'},
        {key: 'oh', label: 'Ordering households', expr: 'h * ord'},
        {key: 'gmv', label: 'Annual GMV', expr: 'oh * freq * 12 * aov'},
        {key: 'rev', label: '💰 Platform revenue (annual)', expr: 'gmv * take'},
      ],
    },
    answer: `2M households × 40% ordering × 4 orders a month × 12 × $25 ≈ **$960M GMV per year**. At a 22% take rate, that's ≈ **$210M** of platform revenue for the whole market. Split it by competitor share to estimate one company's revenue.`,
    pitfalls: ['Confusing GMV with revenue.'],
    followUps: [],
  },
  {
    id: 'est-elevator-wait',
    title: 'How many elevators does a 50-floor office building need?',
    category: 'estimation',
    subcategory: 'Operations estimate',
    difficulty: 'Hard',
    learningValue: 2,
    companies: ['Google', 'Microsoft'],
    framework: 'estimation',
    concepts: ['system-design-basics'],
    whyAsked: 'Capacity planning at peak, similar to a systems problem.',
    clarifiers: [],
    diagram: `flowchart LR
  O["Occupants"] --> P["% arriving in peak 15 min"] --> T["Round-trip time per elevator"] --> C["Capacity per trip"] --> N["Elevators needed"]`,
    calc: {
      inputs: [
        {key: 'occ', label: 'Occupants (50 floors × 150)', value: 7500},
        {key: 'peak', label: 'Share arriving in the peak 15 minutes', value: 0.3},
        {key: 'cap', label: 'People per trip', value: 15},
        {key: 'rt', label: 'Round trip (minutes)', value: 4},
      ],
      steps: [
        {key: 'arr', label: 'Arrivals in 15 minutes', expr: 'occ * peak'},
        {key: 'perElev', label: 'People one elevator moves in 15 minutes', expr: '(15 / rt) * cap'},
        {key: 'n', label: '🛗 Elevators needed', expr: 'Math.ceil(arr / perElev)'},
      ],
    },
    answer: `7,500 occupants. 30% arrive in the peak 15 minutes = 2,250. Each elevator does a 4-minute round trip (≈ 3.75 trips in 15 minutes) × 15 people ≈ 56 people. So 2,250 ÷ 56 ≈ **40 elevators**, typically split into zones (low, mid and high floors) to cut round-trip time.`,
    pitfalls: [],
    followUps: [],
  },
  {
    id: 'est-chatgpt-cost',
    title: 'Estimate the daily compute cost of running a popular AI chatbot',
    category: 'estimation',
    subcategory: 'Technical estimate',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['OpenAI', 'Google', 'Anthropic', 'Microsoft'],
    framework: 'estimation',
    concepts: ['unit-economics', 'llm-evals', 'pricing-models'],
    whyAsked: 'AI unit economics. A very relevant modern question.',
    clarifiers: ['Inference only?', 'Mix of free and paid users?'],
    diagram: `flowchart LR
  U["Daily users"] --> Q["× queries per user"] --> T["× tokens per query"] --> C["× cost per 1M tokens"]`,
    calc: {
      inputs: [
        {key: 'dau', label: 'Daily active users', value: 100000000},
        {key: 'q', label: 'Messages per user per day', value: 8},
        {key: 'tok', label: 'Tokens per message (input + output)', value: 1500},
        {key: 'cost', label: 'Compute cost per 1M tokens', value: 1, unit: '$'},
      ],
      steps: [
        {key: 'msgs', label: 'Messages per day', expr: 'dau * q'},
        {key: 'tokens', label: 'Tokens per day', expr: 'msgs * tok'},
        {key: 'c', label: '💸 Daily compute cost', expr: 'tokens / 1e6 * cost'},
      ],
    },
    answer: `**Assumptions.** 100M daily users × 8 messages each = 800M messages a day. Average 1,500 tokens per message (including conversation context). Blended internal compute cost of about $1 per million tokens (varies widely by model size).

**Calculation.** 800M × 1,500 = 1.2 trillion tokens per day × $1 per million = **$1.2M per day**, or roughly $440M a year.

**Product implications.** Cost per free user drives limits on the free tier, routing between small and large models, caching, and pricing for paid tiers. The cost per token assumption is the biggest source of uncertainty.`,
    pitfalls: ['Forgetting that the conversation context adds input tokens on every turn.'],
    followUps: ['How would you cut this cost by 50%?'],
  },
];
