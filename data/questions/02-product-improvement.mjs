// Product Improvement questions.
export default [
  {
    id: 'improve-favorite-product',
    title: 'What is your favourite product and how would you improve it?',
    category: 'product-improvement',
    subcategory: 'Favourite product',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
    framework: 'product-improvement',
    concepts: ['jobs-to-be-done', 'user-segmentation', 'prioritization', 'north-star-metric'],
    whyAsked: 'The most common product sense opener. It tests passion, depth of understanding, and whether you can critique a product you love.',
    clarifiers: ['(You choose the product. Prepare 2–3 in advance: one consumer, one B2B, one physical.)', 'Should I assume I am a PM at that company?'],
    diagram: `flowchart LR
  A["❤️ Why I love it<br/>job it does well"] --> B["🧠 Why it works<br/>design choices + business model"]
  B --> C["👥 Segment it underserves"]
  C --> D["😣 Pain points"]
  D --> E["💡 3 ideas"]
  E --> F["⚖️ Prioritize"]
  F --> G["📏 Metric"]`,
    answer: `**Pick something you genuinely use and understand deeply.** Example: **Spotify**.

**Why I love it (the job).** "When I'm doing something else, commuting or working, I want the right music without effort." Spotify does this with Discover Weekly, Daily Mixes and seamless playback across devices.

**Why it works.** Personalization data (a network effect over listening history), a freemium funnel, and Spotify Connect for switching devices. The North Star is roughly *time spent listening*.

**Goal for my improvement.** Increase listening engagement among a segment that underuses Spotify.

**Segments.** Power listeners (well served), casual listeners, podcast-first listeners, **people who listen with others** (couples, families, friends at parties), artists.
I'll focus on **group listening**. Spotify is deeply individual, and shared contexts (car, dinner party, family home) mess up recommendations and cause arguments about the music.

**Pains.** One person's account gets "polluted" by others' tastes. It's hard to mix tastes. Only one person controls the phone. Kids' music ruins the parents' Discover Weekly.

**Ideas.**
1. **Group session mode**: everyone in the room joins with a QR code, and the queue blends their tastes. Listening history doesn't pollute personal profiles.
2. **Guest/profile switching** on shared speakers using voice ID.
3. **Party "vibe dial"** to set energy levels for everyone.

**Prioritize.** Group session mode has the highest reach (car rides, parties) and supports growth through invites, since non-users join and convert.

**Metrics.** Group sessions per week, minutes per session, new sign-ups from joiners. **Guardrails:** personal recommendation quality, measured as skip rate on Discover Weekly.`,
    pitfalls: ['Picking a product you barely use.', 'Only praising the product. You must critique it.', 'Proposing features with no clear user segment.'],
    proTip: 'Explain *why* the product works (the business model, the moat) before proposing changes. Most candidates skip this.',
    followUps: ['What would you NOT change and why?', 'How would you A/B test this?'],
  },
  {
    id: 'improve-instagram',
    title: 'How would you improve Instagram?',
    category: 'product-improvement',
    subcategory: 'Improve a social product',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Meta'],
    framework: 'product-improvement',
    concepts: ['user-segmentation', 'engagement-metrics', 'guardrail-metrics', 'network-effects'],
    whyAsked: 'Tests whether you can find an underserved segment in a mature, heavily optimized product.',
    clarifiers: ['Any particular surface (Feed, Reels, DMs, Stories)?', 'What is the company goal: engagement, creators, or monetization?'],
    diagram: `flowchart TD
  I["Instagram users"] --> C["🎨 Creators"]
  I --> V["👀 Passive viewers"]
  I --> F["👯 Friends sharing with close circle ⭐"]
  F --> P["Pain: feels performative, posting anxiety, friends' posts buried"]
  P --> S1["Close-friends feed tab"]
  P --> S2["Photo dumps to group albums"]`,
    answer: `**Goal.** I'll pick *sharing among friends*. Instagram has shifted toward Reels and creators, and personal posting has declined, which risks its social network moat.

**Segments.** Creators, brands, passive scrollers, and **people who want to share with close friends**. I'll focus on the last group: 18–30 year olds who now post less on their main feed.

**Pains.** Posting feels performative (you're judged by likes), friends' posts get buried under Reels and ads, there's pressure to curate a perfect grid, and sharing moves to DMs and other apps.

**Ideas.**
1. **Friends tab**: a chronological feed of only mutual friends' posts.
2. **Shared group albums**: friends add trip photos to one album, with low pressure.
3. **Private posts**: share to a chosen list without public like counts.

**Prioritize.** The Friends tab has broad reach and is cheap to build. Shared albums drive new posting behaviour and network effects.

**Recommendation.** Ship shared group albums tied to group chats, so it's low pressure, collaborative and private.
**Metrics:** # of users posting per week (personal content), albums created, contributors per album. **Guardrails:** total time spent and Reels engagement (shouldn't drop sharply), and safety reports.`,
    pitfalls: ['Proposing "more Reels". It needs a user-centred rationale.', 'Forgetting guardrails on ads revenue and time spent.'],
    followUps: ['How would this affect ad revenue?', 'How do you measure a "healthier" social network?'],
  },
  {
    id: 'improve-google-maps',
    title: 'How would you improve Google Maps?',
    category: 'product-improvement',
    subcategory: 'Improve a utility product',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google'],
    framework: 'product-improvement',
    concepts: ['user-segmentation', 'user-journey-mapping', 'prioritization'],
    whyAsked: 'A mature, feature-rich product. Tests whether you can find a sharp opportunity.',
    clarifiers: ['Navigation, discovery (local search), or transit?', 'Which goal: engagement, local ads, or user trust?'],
    diagram: `flowchart LR
  U["Maps users"] --> D["🚗 Drivers"]
  U --> T["🚇 Transit riders ⭐"]
  U --> E["🍜 Explorers looking for places"]
  T --> P["Pains: crowded trains, last-mile walk unclear, transfers at night feel unsafe"]
  P --> S["Live crowding + safer route option + exit/carriage guidance"]`,
    answer: `**Goal.** Increase daily engagement among transit riders. Transit is a daily habit and builds loyalty in cities where many people don't drive.

**Segments.** Drivers (well served), **public transit commuters**, walkers and cyclists, explorers looking for places, tourists.

**Transit rider journey pains.**
- Not knowing which carriage or exit is best for the transfer
- Crowded trains (comfort, and health concerns)
- Delays not reflected in real time
- Walking alone at night: is the route well lit?

**Ideas.**
1. **Live crowding by carriage**, predicted from crowdsourced data plus agency feeds.
2. **"Best carriage & exit" guidance** so you exit right at the stairs for your transfer.
3. **Well-lit route option** for night walking segments.
4. **Proactive disruption rerouting** with push alerts before you leave.

**Prioritize (RICE).** Disruption alerts have the highest reach and a medium build. Crowding is valuable but needs data. Carriage guidance is a delighter that's cheap in the top cities.

**Recommendation.** Proactive disruption alerts + rerouting for commuters with saved commutes, then crowding.
**Metrics:** weekly active transit navigators, saved-commute adoption, on-time arrival rate. **Guardrail:** false alert rate.`,
    pitfalls: ['Listing random features without picking a segment.', 'Ignoring data availability (agency feeds differ by city).'],
    followUps: ['How would you gather crowding data?', 'How does this help Google financially?'],
  },
  {
    id: 'improve-spotify-podcasts',
    title: 'How would you improve podcast discovery on Spotify?',
    category: 'product-improvement',
    subcategory: 'Improve a feature',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Spotify'],
    framework: 'product-improvement',
    concepts: ['recommendation-systems', 'funnel-conversion', 'retention-cohorts'],
    whyAsked: 'Tests understanding of discovery funnels and recommendation challenges.',
    clarifiers: ['New podcast listeners, or existing ones?', 'Goal: hours listened or creator growth?'],
    diagram: `flowchart LR
  A["Music-only listener"] -->|"discover"| B["Tries a podcast"]
  B -->|"enjoys"| C["Follows"]
  C -->|"habit"| D["Weekly listener"]
  A -.->|"leak: doesn't know what to try"| X1["❌"]
  B -.->|"leak: hour-long episode, picked a bad one"| X2["❌"]`,
    answer: `**Goal.** Convert music-only users into regular podcast listeners. Podcasts have better margins and drive ad revenue.

**Funnel.** Aware → tries an episode → finishes and enjoys it → follows → weekly habit.
The biggest leak is **trying a podcast**: it's a long commitment (an hour) with an uncertain payoff, unlike a 3-minute song.

**Ideas.**
1. **Podcast previews**: a vertical feed of 30–60 second auto-generated highlight clips (like Reels for audio). Tap to continue the full episode from that moment.
2. **"Because you listen to [artist]" picks**, using music taste to predict podcast interests.
3. **Short-format starter episodes** under 15 minutes, highlighted for trial.

**Prioritize.** Previews directly cut the cost of trying something and suit how people discover today.

**Metrics.** % of music-only users who start a podcast in 30 days, follow rate after a preview, 4-week podcast retention. **Guardrails:** music listening time, creator complaints about clip quality.`,
    pitfalls: ['Not identifying the specific funnel leak.'],
    followUps: ['How would you generate good clips automatically?'],
  },
  {
    id: 'improve-linkedin-job-search',
    title: 'Improve LinkedIn job search for new graduates',
    category: 'product-improvement',
    subcategory: 'Improve for a segment',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['LinkedIn', 'Microsoft'],
    framework: 'product-improvement',
    concepts: ['marketplaces', 'user-journey-mapping', 'personas'],
    whyAsked: 'A two-sided marketplace (job seekers and recruiters) with a clearly defined segment.',
    clarifiers: ['Which markets?', 'Is success defined as applications, interviews, or hires?'],
    diagram: `journey
  title New grad job hunt
  section Search
    Find relevant roles: 2: Grad
    Understand fit: 1: Grad
  section Apply
    Tailor resume: 2: Grad
    Apply, then silence: 1: Grad
  section Interview
    Prepare: 2: Grad
    Get offer: 4: Grad`,
    answer: `**Goal.** More new grads getting interviews and hires through LinkedIn, because successful hires drive recruiter spending.

**Persona.** Aisha, a final-year student. Her network is small and she has little experience. She applies to 100 jobs and hears nothing back.

**Pains.** "Entry level" jobs requiring 3+ years of experience, not knowing whether she's qualified, applications disappearing into silence, no referrals.

**Ideas.**
1. **"Truly entry-level" filter + fit score**: the job's requirements matched against her skills, coursework and projects, with gaps highlighted.
2. **Alumni referral bridge**: shows alumni at the company with a one-click referral request template.
3. **Application status transparency**: recruiters are nudged to send quick status updates.
4. **Skill-based mini-assessments** that let grads stand out without experience.

**Prioritize.** The fit score + entry-level filter fixes the core search problem. Alumni referrals give a big conversion lift and use LinkedIn's unique graph.

**Recommendation.** Fit score + alumni referral bridge.
**Metrics:** interview rate per application for grads, referrals requested and accepted. **Guardrails:** recruiter spam complaints, alumni opt-out rate.`,
    pitfalls: ['Only designing for job seekers and ignoring recruiters.'],
    followUps: ['How would you avoid spamming alumni?'],
  },
  {
    id: 'improve-amazon-returns',
    title: 'How would you improve the Amazon returns experience?',
    category: 'product-improvement',
    subcategory: 'Improve a flow',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Amazon'],
    framework: 'product-improvement',
    concepts: ['user-journey-mapping', 'unit-economics', 'tradeoffs-decisions'],
    whyAsked: 'Tests balancing customer experience and cost. Returns are expensive.',
    clarifiers: ['Is the goal customer satisfaction or reducing return costs?', 'Which categories?'],
    diagram: `flowchart LR
  A["Order arrives"] --> B{"Problem?"}
  B -->|"wrong size"| C["Return flow"]
  B -->|"defective"| C
  C --> D["Print label / find drop-off"] --> E["Wait for refund"]
  A -.-> P["Prevention: better size and fit info reduces returns"]`,
    answer: `**Goal.** Two goals, which I'll hold together: improve customer satisfaction **and** reduce return costs (returns cost retailers a large share of the item's value).

**Insight.** The best return is the one that never happens. Many apparel returns come from size and fit problems.

**Segments.** Fashion shoppers (size issues), electronics (defects, buyer's remorse), gift recipients.

**Ideas.**
1. **Prevention**: "Customers like you chose size M" fit predictions, plus return-reason badges on listings ("Runs small").
2. **Instant refund on drop-off** for trusted customers, with label-free QR drop-off.
3. **"Keep it" refunds** for low-value items where return shipping costs more than the item.
4. **Exchange-first flow**: one tap to swap sizes, with the new size shipped before the old one arrives.

**Prioritize.** Fit prediction gives the largest cost reduction. The exchange-first flow saves the sale.

**Metrics.** Return rate by category, % of returns converted to exchanges, refund time. **Guardrail:** return fraud rate.`,
    pitfalls: ['Only making returns easier, which can increase returns and costs.'],
    followUps: ['How do you detect return fraud?'],
  },
  {
    id: 'improve-youtube-creators',
    title: 'Improve YouTube for small creators',
    category: 'product-improvement',
    subcategory: 'Improve for a segment',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google'],
    framework: 'product-improvement',
    concepts: ['marketplaces', 'recommendation-systems', 'retention-cohorts'],
    whyAsked: 'Creator supply drives a content platform. Tests ecosystem thinking.',
    clarifiers: ['How do you define "small" (e.g. under 1k subscribers)?', 'Long form or Shorts?'],
    diagram: `flowchart LR
  U["Upload"] --> V["Few views"] --> D["😞 Demotivated"] --> Q["Quits within 3 months"]
  U --> S1["📊 Actionable feedback"]
  U --> S2["🌱 New-creator discovery boost"]
  S1 & S2 --> R["Creator retention ↑ → more content supply"]`,
    answer: `**Goal.** Retain new creators. Most quit within a few months, and long-term content supply depends on them.

**Persona.** Leo, who has posted 8 videos and averages 40 views. He doesn't know what to improve.

**Pains.** No audience and no feedback, analytics he doesn't understand, the algorithm feeling like a black box, monetization out of reach (the Partner Program threshold).

**Ideas.**
1. **AI coach**: plain-language tips ("Viewers left at 0:15. Try a shorter intro"), plus comparisons with similar videos.
2. **New creator exploration slot**: a small share of recommendations tests fresh creators with matched audiences.
3. **Creator communities / collab matching** with peers.
4. **Early milestone rewards** (first 100 subscribers).

**Prioritize.** The exploration slot attacks the zero-audience problem, but has to protect viewer satisfaction. The coach is lower risk.

**Metrics.** 90-day creator retention (still uploading), uploads per creator. **Guardrails:** viewer watch time and satisfaction on exploration impressions.`,
    pitfalls: ['Hurting viewer experience by forcing low-quality content.'],
    followUps: ['How would you design the exploration experiment?'],
  },
  {
    id: 'improve-uber-airport',
    title: 'Improve the Uber airport pickup experience',
    category: 'product-improvement',
    subcategory: 'Improve a flow',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Uber', 'Lyft'],
    framework: 'product-improvement',
    concepts: ['marketplaces', 'user-journey-mapping'],
    whyAsked: 'A specific, high-friction moment that affects both sides of the marketplace.',
    clarifiers: ['Rider or driver experience?', 'Which airports?'],
    diagram: `sequenceDiagram
  participant R as Rider
  participant A as App
  participant D as Driver
  R->>A: Lands, requests ride
  A->>D: Driver from waiting lot
  R->>R: Walks to wrong pickup zone 😣
  D->>R: Calls: "Where are you?"
  R->>D: Finally meets (15 min)`,
    answer: `**Goal.** Faster, less stressful airport pickups, measured by time from request to pickup.

**Journey pains (rider).** Confusing signs to pickup zones, the GPS pin wrong indoors, many identical cars, drivers circling, language barriers.
**Driver pains.** Long waits in the queue lot, then can't find the rider, then traffic police move them on.

**Ideas.**
1. **Step-by-step wayfinding** from baggage claim to a specific pickup door, using photos and indoor maps.
2. **PIN matching**: riders go to a queue and take the first car, giving the driver a PIN (already used at some airports).
3. **Smart request timing**: request when you get your bags, and the driver's arrival is synced.
4. **Driver queue transparency**: expected wait time in the lot.

**Prioritize.** PIN matching removes the need for the rider and driver to find each other at all. It works at airports with organised queues. Wayfinding works everywhere.

**Metrics.** Pickup time, contacts between driver and rider per trip, cancellation rate at airports. **Guardrail:** driver earnings per hour at airports.`,
    pitfalls: ['Only considering riders.'],
    followUps: ['How would you choose which airports get PIN matching?'],
  },
  {
    id: 'improve-gmail',
    title: 'How would you improve Gmail?',
    category: 'product-improvement',
    subcategory: 'Improve a productivity product',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Google'],
    framework: 'product-improvement',
    concepts: ['user-segmentation', 'llm-evals', 'prioritization'],
    whyAsked: 'A mature productivity tool. Tests prioritization and responsible use of AI.',
    clarifiers: ['Consumer or Workspace?', 'Goal: engagement, time saved, or Workspace subscriptions?'],
    diagram: `flowchart TD
  U["Gmail users"] --> A["📥 Inbox overloaded professionals ⭐"]
  U --> B["👵 Light personal users"]
  U --> C["🛍️ Shoppers, receipts"]
  A --> P["Pain: 120 emails/day, miss important ones, slow replies"]
  P --> S1["AI daily brief"]
  P --> S2["Follow-up tracker"]`,
    answer: `**Goal.** Save time for professionals and increase Workspace paid adoption.

**Segment.** Busy professionals receiving 100+ emails a day (managers, salespeople).

**Pains.** Important emails get lost, time is spent triaging, they forget to follow up, and long threads take ages to understand.

**Ideas.**
1. **Morning brief**: AI summary of what needs your action today, grouped by priority.
2. **Follow-up tracker**: detects emails where you're waiting on a reply and nudges you after N days.
3. **Thread summaries** at the top of long threads.
4. **Smart unsubscribe** suggestions for newsletters you never open.

**Prioritize.** The morning brief has the highest value but must be accurate (evaluate missed important emails). The follow-up tracker is simpler and high value.

**Metrics.** Time to inbox zero, response time to important emails, Workspace upgrade rate. **Guardrails:** summary accuracy, privacy trust surveys.`,
    pitfalls: ['Ignoring privacy concerns around AI reading email.'],
    followUps: ['How would you evaluate the AI brief quality?'],
  },
  {
    id: 'improve-netflix-choosing',
    title: 'Netflix users spend too long choosing what to watch. Improve it.',
    category: 'product-improvement',
    subcategory: 'Improve a problem',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Netflix'],
    framework: 'product-improvement',
    concepts: ['recommendation-systems', 'engagement-metrics', 'ab-testing'],
    whyAsked: 'Tests understanding of decision fatigue and recommendation UX.',
    clarifiers: ['Solo viewers or groups?', 'TV or mobile?'],
    diagram: `flowchart LR
  O["Open Netflix"] --> B["Browse 10+ min"] --> Q{"Decide?"}
  Q -- No --> X["Quit / switch to YouTube 😞"]
  Q -- Yes --> W["Watch"]
  B --> S1["🎲 Play something"]
  B --> S2["⏱️ Mood + time filter"]
  B --> S3["🎬 Auto-preview trailers"]`,
    answer: `**Goal.** Reduce time to play and browse abandonment. Sessions that end without watching anything hurt retention.

**Segments.** Solo evening viewers, **couples or families deciding together**, kids. Couples face the longest negotiation.

**Pains.** Too many options, not knowing what a show is like, different tastes in the group, and an unknown time commitment (a 3-season show vs a 90-minute movie).

**Ideas.**
1. **"Watch together" swipe match**: both people swipe on their phones and matches appear on the TV.
2. **Mood + time filter**: "I have 40 minutes and want something light".
3. **Shuffle play** for low-effort viewing.
4. **Better previews** with an honest "why we picked this".

**Prioritize.** Mood + time is cheap and broad. Swipe match is a delighter for couples.

**Metrics.** Median time to play, % of sessions with no play, completion rate of what was chosen. **Guardrail:** satisfaction with the choice (a thumbs rating afterwards).`,
    pitfalls: ['Only "improving the algorithm" without UX changes.'],
    followUps: ['How would you A/B test time-to-play?'],
  },
  {
    id: 'improve-whatsapp-small-business',
    title: 'Improve WhatsApp for small businesses',
    category: 'product-improvement',
    subcategory: 'Improve for a segment',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Meta'],
    framework: 'product-improvement',
    concepts: ['jobs-to-be-done', 'pricing-models', 'platforms-ecosystems'],
    whyAsked: 'Tests B2B2C thinking and emerging markets.',
    clarifiers: ['Which markets (India, Brazil)?', 'Type of business?'],
    diagram: `flowchart LR
  C["🛍️ Customers ask: price? open? delivered?"] --> B["🧑‍🍳 Small business owner, answering manually"]
  B --> P["Pain: overwhelmed, slow replies, lost orders"]
  P --> S1["Catalog + order cart"]
  P --> S2["Quick replies + auto FAQ"]
  P --> S3["Payments in chat"]`,
    answer: `**Goal.** Business adoption that leads to paid features (Business API, ads that click to WhatsApp).

**Persona.** Ravi runs a bakery in India and takes orders over WhatsApp. He answers 200 chats a day by hand.

**Pains.** Repetitive questions, orders scattered across chats, tracking payments, and no time.

**Ideas.**
1. **Order inbox**: chats that contain orders are auto-tagged and shown as a simple order list with statuses.
2. **AI auto-replies** for FAQs (hours, prices) drawn from the catalog.
3. **In-chat payments + receipts**.
4. **Broadcast deals** to customers who opted in.

**Prioritize.** The order inbox fixes the core operational mess. Auto-replies save the most time.

**Metrics.** Active business accounts per week, response time, orders processed. **Guardrails:** customer spam complaints and blocks.`,
    pitfalls: ['Designing for large enterprises instead of tiny businesses.'],
    followUps: ['How would you monetize without hurting trust?'],
  },
  {
    id: 'improve-airbnb-hosts',
    title: 'How would you improve Airbnb for first-time hosts?',
    category: 'product-improvement',
    subcategory: 'Improve for a segment',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Airbnb'],
    framework: 'product-improvement',
    concepts: ['marketplaces', 'funnel-conversion', 'trust-safety'],
    whyAsked: 'Supply growth is critical for marketplaces. Tests funnel thinking on the supply side.',
    clarifiers: ['Goal: more listings or better quality listings?', 'Which markets?'],
    diagram: `flowchart LR
  A["Curious"] -->|"leak: scared of damage"| B["Starts listing"]
  B -->|"leak: pricing confusion"| C["Publishes"]
  C -->|"leak: no bookings"| D["First booking"]
  D --> E["Superhost"]`,
    answer: `**Goal.** Convert more curious homeowners into active hosts who get a first booking within 30 days.

**Funnel leaks.** Fear (damage, strangers) → listing setup effort (photos, pricing) → no bookings because there are no reviews yet.

**Ideas.**
1. **Protection made visible**: explain damage protection and guest verification right at the start.
2. **AI listing builder**: upload photos and get a title, description and smart price suggestion.
3. **First-booking boost**: new listings get a visibility boost plus a "New" badge with discounted first stays.
4. **Superhost mentor matching**.

**Prioritize.** The first-booking boost fixes the cold-start problem for listings. The AI builder reduces drop-off during setup.

**Metrics.** Listing-start to publish rate, % of new listings booked within 30 days, 6-month host retention. **Guardrail:** guest rating of new listings.`,
    pitfalls: ['Ignoring guest experience when boosting new listings.'],
    followUps: ['How would you measure listing quality?'],
  },
  {
    id: 'improve-duolingo-retention',
    title: 'How would you improve Duolingo\'s long-term retention?',
    category: 'product-improvement',
    subcategory: 'Improve a metric',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Duolingo'],
    framework: 'product-improvement',
    concepts: ['retention-cohorts', 'engagement-metrics', 'growth-loops', 'guardrail-metrics'],
    whyAsked: 'Tests retention mechanics beyond streaks, plus outcome vs engagement trade-offs.',
    clarifiers: ['Which cohort is dropping: month 3+?', 'Free or paid users?'],
    diagram: `xychart-beta
  title "Hypothetical retention: streak plateau"
  x-axis "Month" [1, 2, 3, 4, 5, 6]
  y-axis "% retained" 0 --> 100
  line [60, 42, 30, 24, 20, 18]`,
    answer: `**Goal.** Raise month-6 retention. Streaks and gamification work early on, but users plateau and leave when they don't feel progress.

**Segments.** Casual learners, **intermediate learners who hit a plateau**, test-prep learners, kids.

**Why they leave.** "I've done 200 days but still can't have a conversation." There's no perceived real-world progress, lessons get repetitive, and life gets in the way.

**Ideas.**
1. **Real-world milestones**: "You can now order in a café", with a short AI role-play conversation to prove it.
2. **Progress reports** with a CEFR-level estimate.
3. **Goal-based paths** (travel in 3 months, work).
4. **Gentle streak repair** to stop one missed day ending the habit.

**Prioritize.** Real-world milestones + conversation practice tackle the main reason people churn at a plateau (no sense of meaningful progress).

**Metrics.** Month-6 retention, % reaching milestones, skill test scores. **Guardrail:** daily lesson completion (don't break the habit loop).`,
    pitfalls: ['Adding more gamification that increases engagement but not learning.'],
    followUps: ['How would you measure learning outcomes?'],
  },
  {
    id: 'improve-zoom-meetings',
    title: 'Improve Zoom to reduce meeting fatigue',
    category: 'product-improvement',
    subcategory: 'Improve a problem',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Zoom', 'Microsoft'],
    framework: 'product-improvement',
    concepts: ['jobs-to-be-done', 'llm-evals', 'okrs'],
    whyAsked: 'Tests counterintuitive thinking: making the product used *less*, but better.',
    clarifiers: ['Meeting hosts or attendees?', 'Business goal?'],
    diagram: `flowchart LR
  A["Too many meetings"] --> B["Fatigue, less focus"]
  A --> S1["📝 AI recap: skip and catch up"]
  A --> S2["⏱️ 25/50-min defaults"]
  A --> S3["🎥 Async video updates"]`,
    answer: `**Goal.** Reduce fatigue while increasing the value of meetings. This builds loyalty as AI competitors emerge.

**Pains.** Back-to-back meetings, meetings that could have been an email, being on camera all the time, missing decisions if you skip.

**Ideas.**
1. **AI recap + action items**, so people can skip and catch up in 2 minutes.
2. **Smart agendas**: meetings with no agenda get a nudge.
3. **Camera-off norms + avatar mode**.
4. **Async video clips** for status updates.

**Prioritize.** The AI recap enables "optional attendance" and is a strong differentiator.

**Metrics.** Recap views, number of meeting attendees (should fall), satisfaction score. **Guardrail:** paid seat retention. Fewer meetings should still mean Zoom is valued.`,
    pitfalls: ['Assuming more usage is always good.'],
    followUps: ['How do you measure "meeting value"?'],
  },
  {
    id: 'improve-starbucks-app',
    title: 'Improve the Starbucks app',
    category: 'product-improvement',
    subcategory: 'Improve a consumer app',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Starbucks', 'Amazon'],
    framework: 'product-improvement',
    concepts: ['user-journey-mapping', 'retention-cohorts', 'pricing-models'],
    whyAsked: 'A loyalty and order-ahead product combining physical and digital. Good practice in omnichannel thinking.',
    clarifiers: ['Goal: frequency, ticket size, or store efficiency?'],
    diagram: `journey
  title Morning mobile order
  section Order
    Open app: 4: Customer
    Customize drink: 3: Customer
  section Pickup
    Arrive, order not ready: 1: Customer
    Crowded pickup counter: 2: Customer
  section Reward
    Earn stars: 4: Customer`,
    answer: `**Goal.** Increase visit frequency among mobile-order regulars without overwhelming stores.

**Pains.** Arriving too early or too late, crowded pickup areas, mixed-up orders, rewards that feel slow.

**Ideas.**
1. **Arrival-timed preparation**: start making the drink based on the customer's ETA (location-based).
2. **Pickup shelf with name screens**.
3. **Personalized challenges** ("Try a new drink, earn 50 stars").
4. **Routine shortcut**: one tap to order "my usual" from a widget.

**Prioritize.** Arrival-timed preparation fixes the main complaint and improves store throughput.

**Metrics.** Wait time at pickup, mobile order frequency per user. **Guardrail:** in-store (non-app) customer wait time.`,
    pitfalls: ['Forgetting store staff and in-store customers.'],
    followUps: ['What about privacy for location data?'],
  },
  {
    id: 'improve-slack-onboarding',
    title: 'Improve Slack onboarding for new teams',
    category: 'product-improvement',
    subcategory: 'Improve a metric',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Slack', 'Salesforce'],
    framework: 'product-improvement',
    concepts: ['funnel-conversion', 'north-star-metric', 'growth-loops', 'go-to-market'],
    whyAsked: 'Tests PLG activation thinking: the aha moment and team-level activation.',
    clarifiers: ['Free teams or enterprise?', 'Definition of activation?'],
    diagram: `flowchart LR
  A["Create workspace"] --> B["Invite teammates"] --> C["Messages from 3+ people"] --> D["2,000 messages: sticky ✅"]
  A -.->|"leak: solo, no invites"| X["❌"]`,
    answer: `**Goal.** Raise team activation. Slack's well-known insight: teams that exchange around 2,000 messages tend to stick.

**Key leak.** The creator sets up the workspace but teammates never join, so it stays an empty room.

**Ideas.**
1. **Invite-first setup**: import teammates from Google contacts or the email domain during creation.
2. **Templates by use case** (project, launch, team), with pre-made channels and a bot asking the first questions.
3. **Connect existing tools** (Google Drive, Jira) to bring in activity from day one.
4. **Email bridge**: people not yet on Slack can reply from email.

**Prioritize.** Invite-first and the email bridge solve the cold start of a team network.

**Metrics.** % of workspaces with 3+ active members in week 1, messages per team in week 1, paid conversion. **Guardrail:** invite spam reports.`,
    pitfalls: ['Optimizing individual activation for a team product.'],
    followUps: ['How would you define the aha moment with data?'],
  },
  {
    id: 'improve-uber-eats-reorders',
    title: 'Increase repeat orders on a food delivery app',
    category: 'product-improvement',
    subcategory: 'Improve a metric',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Uber', 'DoorDash', 'Swiggy'],
    framework: 'product-improvement',
    concepts: ['retention-cohorts', 'marketplaces', 'unit-economics'],
    whyAsked: 'Retention is where the economics of delivery apps are won.',
    clarifiers: ['New customers or lapsed ones?', 'Profitability constraints?'],
    diagram: `flowchart TD
  A["First order"] --> B{"Good experience?"}
  B -- "Late / cold / wrong" --> X["Churn"]
  B -- Yes --> C["Second order within 14 days?"]
  C --> D["Habit: weekly orderer"]`,
    answer: `**Goal.** Raise the second-order rate within 30 days. It's the biggest drop-off point.

**Why customers don't come back.** A bad first experience (late, cold, wrong items), high fees, or ordering was just a one-off occasion.

**Ideas.**
1. **First-order quality protection**: route new customers to highly rated restaurants and reliable couriers, with automatic credit if the order is late.
2. **Membership trial** (free delivery for a month).
3. **Reorder in one tap** and "your Friday favourites" nudges.
4. **Personalized discovery** of new restaurants.

**Prioritize.** First-order quality protection: experience drives retention more than discounts do.

**Metrics.** 30-day repeat rate, orders per month per customer. **Guardrails:** contribution margin per order, restaurant fairness.`,
    pitfalls: ['Relying only on discounts, which hurts unit economics.'],
    followUps: ['How would you measure first-order quality?'],
  },
  {
    id: 'improve-apple-watch',
    title: 'How would you improve Apple Watch?',
    category: 'product-improvement',
    subcategory: 'Improve a hardware product',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Apple'],
    framework: 'product-improvement',
    concepts: ['user-segmentation', 'accessibility', 'jobs-to-be-done'],
    whyAsked: 'Hardware improvement with ecosystem considerations.',
    clarifiers: ['Hardware or software improvements?', 'Which segment?'],
    diagram: `flowchart LR
  U["Watch users"] --> F["🏃 Fitness"]
  U --> H["❤️ Health monitoring ⭐ older adults"]
  U --> N["🔔 Notifications"]
  H --> S["Fall detection + medication reminders + family sharing"]`,
    answer: `**Goal.** Grow adoption among adults aged 60+, whose health needs are a strong job fit for the watch.

**Pains.** Small text, complex gestures, battery anxiety, family wanting to know they're OK, managing medications.

**Ideas.**
1. **Simplified "Essentials" mode**: big text, 4 key functions.
2. **Medication reminders + log** shared with family members.
3. **Family health sharing**: alerts on falls, irregular heart rhythm, inactivity.
4. **Multi-day battery mode**.

**Prioritize.** Family health sharing + Essentials mode. The buyer is often an adult child (connecting with them is the job).

**Metrics.** Adoption among people aged 60+, daily wear rate, family-sharing activation. **Guardrail:** false alert rate.`,
    pitfalls: ['Adding more fitness features for already well-served users.'],
    followUps: ['Privacy concerns with family health sharing?'],
  },
];
