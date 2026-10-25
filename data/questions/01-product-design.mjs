// Product Design questions. Answers are original model answers following CIRCLES.
export default [
  {
    id: 'design-fridge-blind',
    title: 'Design a refrigerator for blind people',
    category: 'product-design',
    subcategory: 'Design for an accessibility need',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Amazon'],
    framework: 'circles',
    concepts: ['accessibility', 'user-segmentation', 'user-journey-mapping', 'mvp'],
    whyAsked: 'A classic empathy test. Can you imagine someone else\'s daily reality, avoid gimmicks, and prioritize real pain over flashy tech?',
    clarifiers: [
      'Fully blind or low vision? Born blind or vision lost later in life?',
      'Are we a fridge manufacturer, a startup, or building an add-on for existing fridges?',
      'What is the goal: market share in an underserved niche, or a mission/accessibility leadership play?',
      'Any price constraints? Many blind people face higher unemployment, so affordability matters.',
    ],
    diagram: `flowchart LR
  U["👥 Users"] --> U1["Born blind, lives alone"]
  U --> U2["Recently lost vision ⭐"]
  U --> U3["Low vision, elderly"]
  U2 --> J["Journey: shop → store → find → check freshness → cook"]
  J --> P1["😣 Can't identify items"]
  J --> P2["😣 Can't tell if food expired ⭐"]
  J --> P3["😣 Door left open"]
  P2 --> S1["🏷️ NFC/voice tags"]
  P2 --> S2["📷 Camera + AI that reads labels"]
  P2 --> S3["🌡️ Odor/spoilage sensor"]
  S1 --> MVP["✅ MVP: reusable talking tags + expiry alerts"]`,
    answer: `**Comprehend.** I'll assume we're a mid-size appliance brand. The goal is to build an accessibility-leading product that also drives brand trust, at a price close to a normal mid-range fridge.

**Users.** Blind users can be segmented by:
1. **People born blind**, who often have strong existing systems (Braille labels, fixed shelf positions).
2. **People who recently lost their sight** (for example, from diabetes or macular degeneration). They have no coping systems yet and are often older. This group is large and growing.
3. **Low-vision elderly people**, who can see contrast and large shapes.

I'll focus on **recently blind adults**. They are the most underserved, and their needs overlap heavily with the other two groups.

**Needs (journey).** Unpacking groceries → deciding where to put each item → later finding a specific item → judging whether it's still good → knowing what's running low.
- Identifying items whose containers feel the same (yogurt vs. sour cream)
- **Knowing whether food has expired or spoiled**: a safety risk
- Remembering where things are, especially when other household members move them
- Knowing whether the door is fully closed

**Prioritize.** Expiry/spoilage is frequent and high-severity (health risk). Identification comes second and is closely related. Both can be solved together.

**Solutions.**
1. **Reusable talking tags**: clip-on NFC tags. When storing an item, the user says "Milk, expires Friday". Tapping the tag later reads it back. Cheap and works with any fridge.
2. **Smart camera fridge**: an interior camera plus AI that reads labels and expiry dates, which the user can query by voice ("Do I have eggs?").
3. **Fixed tactile zones**: shelves with distinct textures and audible clicks, plus spoken door-ajar and temperature alerts.

**Evaluate.** Tags are low-cost, high-reliability and retrofit-friendly, but need manual input. The camera has the highest "wow" factor, but it is expensive, struggles with hidden items, and its errors are risky. Tactile zones are basic hygiene and should be standard.

**Recommendation.** Ship a fridge with tactile zones, spoken alerts and a pack of **talking expiry tags**. The fridge announces "2 items expire tomorrow" each morning. Add the camera later as a premium tier once the AI is accurate enough.
**Success metrics:** % of tagged items used before expiry, weekly active tag use, NPS among blind users. **Guardrail:** false "safe" readings, which should be close to zero.`,
    pitfalls: [
      'Jumping straight to "add Alexa" without exploring how blind people actually organize food.',
      'Designing a $5,000 fridge for a population with lower average income.',
      'Ignoring the safety cost of an AI misreading an expiry date.',
    ],
    proTip: 'Mention that you would interview blind users and organizations like the National Federation of the Blind. Research with real users is the first step for any accessibility design.',
    followUps: ['How would you price it?', 'How would you measure success after 6 months?', 'Would you extend this to sighted users? (curb-cut effect)'],
  },
  {
    id: 'design-alarm-deaf',
    title: 'Design an alarm clock for deaf people',
    category: 'product-design',
    subcategory: 'Design for an accessibility need',
    difficulty: 'Easy',
    learningValue: 4,
    companies: ['Google', 'Apple'],
    framework: 'circles',
    concepts: ['accessibility', 'jobs-to-be-done', 'user-segmentation'],
    whyAsked: 'Tests whether you look past the obvious answer (vibration) to real context: shared beds, heavy sleepers, emergencies and travel.',
    clarifiers: ['Standalone device or phone app?', 'Profoundly deaf or hard of hearing?', 'Home use, travel, or both?'],
    diagram: `flowchart TD
  A["Job: wake up reliably on time without disturbing others"] --> B["Segments"]
  B --> B1["Deaf, lives alone"]
  B --> B2["Deaf, shares a bed ⭐"]
  B --> B3["Deaf parent of a baby"]
  B2 --> C["Pains: vibration wakes partner, phone falls off bed, heavy sleeper"]
  C --> D1["⌚ Wrist wearable alarm"]
  C --> D2["💡 Light + bed shaker"]
  C --> D3["🏠 Smart home hub: alarms, doorbell, baby cry, smoke"]
  D1 --> E["✅ Wearable + hub combo"]`,
    answer: `**Comprehend.** We're a consumer hardware company. The goal is a reliable wake-up product for deaf and hard-of-hearing people, at a mass-market price.

**Users.** (1) Deaf people living alone, (2) **deaf people sharing a bed with a hearing partner**, (3) deaf parents who also need to know when their baby is crying, (4) travellers.
I'll pick **people sharing a bed**. Today's bed shakers wake both people, and it's a common situation.

**Needs.**
- Wake up reliably, even as a heavy sleeper
- Don't disturb the partner
- Snooze or dismiss easily in the dark
- Bonus: become aware of *other* sounds during the night (smoke alarm, doorbell, baby)

**Prioritize.** Reliable personal wake-up without disturbing the partner is the core job. Safety alerts (smoke) are the second priority and a strong differentiator.

**Solutions.**
1. **Wrist wearable**: escalating vibration patterns, with a soft light ramp beforehand. It's personal, so the partner isn't disturbed.
2. **Pillow insert shaker** that only shakes your side of the bed, plus a sunrise light.
3. **Home hub**: listens for the smoke alarm, doorbell and baby cry, and relays them as distinct vibration patterns to the wearable.

**Evaluate.** The wearable is personal and portable, but battery life and comfort matter. The pillow insert is cheap but can be missed if the user moves during sleep. The hub turns the product from "an alarm" into **24/7 sound awareness**, which is much higher value.

**Recommendation.** A wearable band paired with a small hub. V1 covers alarms and smoke detection, then doorbell and baby cry. Distinct haptic patterns map to each event type.
**Metrics:** % of alarms dismissed within 2 minutes (successful wake-up), oversleep incidents reported, partner-disturbance rating. **Guardrail:** missed smoke alerts, which must be zero.`,
    pitfalls: ['Stopping at "make it vibrate".', 'Forgetting emergency sounds like smoke alarms, which matter more than oversleeping.'],
    proTip: 'Widen the job from "wake me up" to "make me aware of important sounds while I sleep". Reframing the job is a senior-level move.',
    followUps: ['How would you test the MVP cheaply?', 'What battery life is acceptable?'],
  },
  {
    id: 'design-roommate-finder',
    title: 'Design a product to help people find roommates',
    category: 'product-design',
    subcategory: 'Design a marketplace',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Meta', 'Airbnb'],
    framework: 'circles',
    concepts: ['marketplaces', 'trust-safety', 'user-segmentation', 'network-effects'],
    whyAsked: 'A two-sided matching problem with heavy trust needs. Tests marketplace thinking and safety awareness.',
    clarifiers: ['Which city or market? Students or professionals?', 'Are we a standalone startup or a feature of an existing platform (like Facebook)?', 'Find rooms, find people, or both?'],
    diagram: `flowchart LR
  H["🏠 Has room, needs roommate"] <--> P(("Platform"))
  P <--> S["🔎 Seeking room + roommate"]
  P --> T["🛡️ Trust layer: ID verification, social proof, references"]
  P --> M["🧩 Compatibility matching: schedule, cleanliness, budget, pets"]
  M --> K["✅ Key metric: successful move-ins that last 6+ months"]`,
    answer: `**Comprehend.** We're a new feature inside a large social network (social graph data helps with trust). The goal is engagement plus a new local marketplace. We'll start with young professionals in expensive cities.

**Users.** This is a two-sided market:
- **Room holders**: have a lease and need someone to fill a room.
- **Seekers**: either moving to a new city (they don't know anyone) or local (current lease ending).
I'll focus on **people relocating to a new city**. They have the highest pain because they have no network, can't visit in person, and face high scam risk.

**Journey and pains (seeker).** Search listings → message → verify the person is real → judge compatibility → visit (often impossible) → agree on terms → move in → live together.
1. **Fear of scams or unsafe people**
2. Not knowing whether they'll get along (cleanliness, schedule, guests)
3. Slow responses and listings that are already gone

**Prioritize.** Trust and compatibility. A bad roommate means 12 months of misery, and scams mean lost deposits.

**Solutions.**
1. **Verified profiles**: ID check, workplace or school email, mutual friends shown.
2. **Compatibility quiz + match score** on lifestyle (sleep times, cleanliness, WFH, pets, budget), with dealbreakers as hard filters.
3. **Video tour + video chat** in-app, with a deposit held in escrow until move-in.
4. **Roommate references**: past roommates can vouch.

**Evaluate.** Verification + compatibility is the core differentiator compared with Craigslist. Escrow handles scams but is complex (regulation). References are powerful but face a cold-start problem.

**Recommendation.** MVP in two cities: verified profiles, mutual-friend display, a compatibility score and in-app video chat. Add escrow in v2.
**North Star:** successful matches still living together after 6 months. **Inputs:** listings with 3+ seeker messages, time to match. **Guardrails:** scam reports, harassment reports.`,
    pitfalls: ['Treating it as a listings board and ignoring compatibility.', 'Ignoring safety: meeting strangers carries real physical risk.', 'Only designing for one side of the marketplace.'],
    proTip: 'Measure a long-term outcome (roommates still together after 6 months) instead of the number of messages. It shows you are optimizing for real value.',
    followUps: ['How do you solve cold start in a new city?', 'How would you monetize?'],
  },
  {
    id: 'design-elderly-connect',
    title: 'Design a product to help elderly people stay connected with family',
    category: 'product-design',
    subcategory: 'Design for a user group',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Meta', 'Google', 'Amazon'],
    framework: 'circles',
    concepts: ['accessibility', 'personas', 'jobs-to-be-done', 'user-journey-mapping'],
    whyAsked: 'Tests empathy for non-tech users and multi-stakeholder design: the elderly user and their adult children, who are often the buyers.',
    clarifiers: ['Elderly living alone, or in care homes?', 'How comfortable are they with technology?', 'Is the goal emotional connection, safety, or both?'],
    diagram: `flowchart TD
  G["👵 Grandma, 78, lives alone, basic phone"] --- F["👩 Daughter, 45, busy, lives 300 km away"]
  G --> P1["😣 Video calls are confusing"]
  G --> P2["😣 Feels lonely between calls"]
  F --> P3["😣 Worries if mum is OK"]
  P1 & P2 & P3 --> S["Solution: always-on family frame"]
  S --> S1["📸 Photos pushed from family"]
  S --> S2["📞 One-tap 'call me' button"]
  S --> S3["✅ Daily 'I'm OK' check-in"]`,
    answer: `**Comprehend.** Goal: reduce loneliness among elderly people living alone, and give family peace of mind. We're a consumer tech company with hardware capability.

**Users.**
- **Primary:** seniors aged 75+ living alone with low tech confidence ("Grandma Rose", who has a flip phone and arthritis).
- **Secondary:** adult children who are busy, guilty and worried, and usually **set it up and pay for it**.
- Others: care home residents, seniors with dementia.

I'll focus on Rose and her daughter.

**Rose's journey.** Wakes up → quiet day → wonders how the grandkids are → wants to call but doesn't want to bother anyone → tries a video call, gets confused by the buttons and gives up.
**Pains:** complex interfaces, small text, fear of "breaking" things, loneliness, not wanting to be a burden.
**Daughter's pains:** no visibility into how Mum is doing, calls feel like a duty, setup support is hard from a distance.

**Prioritize.** Low-effort, *ambient* connection (feeling close without scheduling calls), plus simple calling.

**Solutions.**
1. **Smart family frame**: a large screen that displays photos and voice notes the family sends from their phones. No setup needed by Rose. A single big button says "Call [Name]".
2. **Auto-answer video calls** from approved family members, with a large display and no buttons.
3. **Daily check-in**: Rose taps "Good morning". If there's no tap by 11am, the family gets a gentle alert.
4. A **shared memory prompt**: "Tell us about your first job" invites storytelling replies.

**Evaluate.** The frame plus calling has a low learning curve and high emotional value. The check-in adds safety value for the daughter (who is the buyer). Memory prompts add delight and engagement.

**Recommendation.** A plug-and-play frame, configured entirely from the daughter's app, with photos, one-tap calls, auto-answer and a daily check-in.
**Metrics:** weekly two-way interactions per household (North Star), % of seniors replying or calling each week, check-in streaks. **Guardrails:** privacy complaints, false alerts.`,
    pitfalls: ['Designing only for the senior and ignoring the adult child who buys it.', 'Assuming seniors can learn a smartphone UI.', 'Over-surveillance that removes dignity.'],
    proTip: 'Call out the buyer/user split explicitly: the user (senior) and the buyer (adult child) have different jobs. Products like Amazon Echo Show and GrandPad succeed when they serve both.',
    followUps: ['How would you design for dementia?', 'What privacy concerns arise from the daily check-in?'],
  },
  {
    id: 'design-office-vending',
    title: 'Design a vending machine for a modern office',
    category: 'product-design',
    subcategory: 'Design a physical product',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Amazon', 'Google'],
    framework: 'circles',
    concepts: ['user-segmentation', 'prioritization', 'mvp'],
    whyAsked: 'A warm-up physical product question. Tests whether you identify multiple stakeholders (employees, office manager, operator).',
    clarifiers: ['Is food free (perk) or paid?', 'How big is the office?', 'Who buys the machine: the employer or a vendor?'],
    diagram: `flowchart LR
  E["👩‍💻 Employees"] --> N1["Healthy, fast, fresh options"]
  O["🧑‍💼 Office manager"] --> N2["Low admin, budget control"]
  V["🚚 Operator"] --> N3["Know what to restock"]
  N1 & N2 & N3 --> S["Smart fridge: grab-and-go, badge tap, auto restock data"]`,
    answer: `**Comprehend.** A tech office with 500 employees. The company subsidizes food as a perk and wants healthier eating and less waste.

**Users.** Employees (busy engineers, people on diets, night-shift workers), the office manager (budget, complaints) and the restocking operator.
Focus on **employees in back-to-back meetings** who need food in under 2 minutes.

**Needs.** Speed. Healthy and fresh options (not just chips). Dietary info (vegan, allergens). Food being in stock when they want it. A frictionless payment or badge tap.

**Prioritize.** Speed and fresh, healthy selection.

**Solutions.**
1. **Smart grab-and-go fridge**: unlock with your badge, take items, and weight and camera sensors charge automatically (like Amazon Go).
2. **Pre-order from Slack**: reserve a salad and it's waiting in a locker.
3. **Rotating local menu** with ratings and a weekly vote, using data to cut waste.

**Evaluate.** The smart fridge has the best speed and freshness, but higher hardware cost. Pre-order guarantees stock. Ratings improve selection over time.

**Recommendation.** A smart fridge with badge unlock, plus a Slack bot for stock checks and pre-orders. A dashboard gives the office manager consumption and waste data.
**Metrics:** daily users per 100 employees, time per transaction, waste %, satisfaction score.`,
    pitfalls: ['Forgetting the operator and buyer stakeholders.', 'Designing a fancier coin-slot machine instead of rethinking the job.'],
    followUps: ['How would you reduce food waste?', 'How would you price it to the employer?'],
  },
  {
    id: 'design-kids-bookshelf',
    title: 'Design a bookshelf for children',
    category: 'product-design',
    subcategory: 'Design a physical product',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Google', 'Amazon'],
    framework: 'circles',
    concepts: ['user-segmentation', 'jobs-to-be-done', 'personas'],
    whyAsked: 'Tests creativity and multiple users (kid and parent) on a seemingly simple object.',
    clarifiers: ['What age range?', 'Home, school or library?', 'Is the goal to encourage reading, tidiness, or safety?'],
    diagram: `flowchart TD
  K["🧒 Kid, 4–7"] --> K1["Wants to SEE covers, reach books, have fun"]
  P["👨 Parent"] --> P1["Wants safety, tidiness, a reading habit"]
  K1 & P1 --> S1["Front-facing low shelves"]
  K1 & P1 --> S2["Anchored, rounded edges"]
  K1 & P1 --> S3["Reading nook + sticker reward tracker"]`,
    answer: `**Comprehend.** A home bookshelf for ages 4–7. The goal is to encourage independent reading.

**Users.** The child (the end user) and the parent (the buyer). Segment children by age: toddlers (chew and climb), **early readers aged 4–7** (choose their own books), older kids (bigger collections). Focus on early readers.

**Needs.**
- *Child:* recognizes books by **cover, not spine**, needs to reach them, wants to have fun, and wants a sense of ownership.
- *Parent:* tip-over safety, putting books away easily, encouraging a daily habit, fitting in small rooms.

**Prioritize.** Discoverability (front-facing covers) and safety are must-haves. A reading habit is the delighter.

**Solutions.**
1. **Front-facing, low "slings"** so covers are visible and at kid height.
2. **Rotating carousel**: a small selection at a time keeps the shelf fresh and avoids overwhelm.
3. **Built-in reading nook** with a cushion and lamp.
4. **"Reading tree" tracker**: the child adds a leaf sticker for each book finished.

**Recommendation.** A low, wall-anchored shelf with front-facing slots, a reading nook bench and a sticker tracker. **Metric:** books read per week (parent-reported via a QR mini-app), plus repeat purchases. **Guardrail:** zero tip-over incidents.`,
    pitfalls: ['Designing only for parents.', 'Ignoring tip-over safety, which is a real cause of child injuries.'],
    followUps: ['How would you make it smart? Should you?', 'How would you adapt it for a school library?'],
  },
  {
    id: 'design-dog-owners',
    title: 'Design a product for dog owners',
    category: 'product-design',
    subcategory: 'Open-ended design',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Amazon', 'Google'],
    framework: 'circles',
    concepts: ['user-segmentation', 'jobs-to-be-done', 'market-sizing', 'prioritization'],
    whyAsked: 'A very open prompt. Tests whether you can narrow scope quickly with a sharp segment and pain point.',
    clarifiers: ['What kind of company are we: hardware, app, or e-commerce?', 'Any target market or business goal?'],
    diagram: `flowchart TD
  A["Dog owners"] --> S1["🐶 New puppy owners"]
  A --> S2["💼 Working owners, dog alone 9h ⭐"]
  A --> S3["👴 Senior dog owners"]
  S2 --> P["Pains: guilt, boredom, can't check in, walker reliability"]
  P --> I1["📹 Treat camera"]
  P --> I2["🚶 Trusted walker marketplace"]
  P --> I3["🐕 Dog daycare pool with neighbours"]
  I2 --> R["✅ Verified walker + GPS walk report"]`,
    answer: `**Comprehend.** I'll assume we're a consumer app startup and the goal is a product with strong retention and a clear path to revenue.

**Segments.** New puppy owners (training), **full-time working owners whose dog is home alone** (care), senior-dog owners (health), active owners (adventure). Working owners are a big segment (about half of owners work full-time away from home), the pain is daily, and they're willing to pay.

**Journey of a working owner.** Morning walk in a rush → leaves the dog for 9 hours → feels guilty and wonders what the dog is doing → hires a walker sometimes → evening walk tired.
**Pains:** dog bored or anxious alone, owner guilt, walkers who are unreliable or not trusted, cost of daycare.

**Prioritize.** Reliable midday care (activity + relief). It's frequent (daily), severe (behaviour problems, accidents) and poorly solved (finding a walker you trust is hard).

**Solutions.**
1. **Verified neighbourhood walker marketplace** with background checks, GPS-tracked walks and photo report cards.
2. **Dog "pack" sharing**: neighbours take turns walking each other's dogs.
3. **Interactive treat camera** to check in and play remotely.

**Evaluate.** The marketplace solves the core job and makes money through a take rate, but faces competition (Rover, Wag). Pack sharing is cheap and community-driven, but trust and scheduling are hard. The camera eases guilt, but doesn't give the dog exercise.

**Recommendation.** A walker marketplace differentiated by **hyper-local regular walkers**: the same walker every day, rather than gig strangers. Add a camera integration later.
**North Star:** walks completed per week. Also track repeat booking rate and owner retention. **Guardrails:** incidents and lost dogs.`,
    pitfalls: ['Trying to solve every dog problem at once.', 'Not mentioning competition in a crowded space.'],
    proTip: 'In broad prompts, state your segment choice within the first 3 minutes. Interviewers want to see you narrow down decisively.',
    followUps: ['How would you compete with Rover?', 'How do you build trust with walkers?'],
  },
  {
    id: 'design-museum-app',
    title: 'Design a mobile experience for museum visitors',
    category: 'product-design',
    subcategory: 'Design an experience',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Google'],
    framework: 'circles',
    concepts: ['user-segmentation', 'user-journey-mapping', 'mvp'],
    whyAsked: 'Tests experience design across a physical journey, plus balancing the museum\'s goals with visitors\' goals.',
    clarifiers: ['Are we building for one museum or a platform for many?', 'What does the museum want: more visitors, revenue, education?'],
    diagram: `journey
  title Family visit to an art museum
  section Plan
    Buy tickets: 3: Parent
    Decide what to see: 2: Parent
  section Visit
    Navigate halls: 2: Parent, Kids
    Understand art: 2: Kids
    Kids get bored: 1: Kids
  section After
    Gift shop: 3: Kids
    Remember visit: 2: Parent`,
    answer: `**Comprehend.** A platform app (like Google Arts & Culture) that partners with museums. Goals: more engaging visits for users, and repeat visits and membership sign-ups for museums.

**Segments.** Tourists (time-limited, want highlights), **families with kids** (need engagement), art enthusiasts (want depth), students and school groups. I'll pick **families with kids aged 6–12**. They're a large group, kids get bored quickly, and families are the future members.

**Journey pains.** Deciding what to see, getting lost, kids getting bored in 20 minutes, placards written for adults, and nothing to remember the visit by.

**Prioritize.** Keeping kids engaged, since it determines visit length and the whole family's satisfaction.

**Solutions.**
1. **Treasure-hunt mode**: kids get clues ("Find a painting with 3 dogs"), scan the artwork, and unlock a story and a badge.
2. **Point-and-learn camera**: point at a piece to get a 60-second kid-friendly audio story.
3. **Personalized route** by time available and interests, with indoor navigation.
4. **Digital souvenir**: an auto-generated album of the pieces you scanned.

**Recommendation.** Treasure hunt + point-and-learn for v1. Route planning second.
**Metrics:** visit duration for families, % of hunts completed, return visits within 12 months, membership conversion. **Guardrails:** crowding near popular works, and noise complaints.`,
    pitfalls: ['Ignoring the museum as a stakeholder with its own goals.', 'Adding AR everywhere without a clear job.'],
    followUps: ['How would you get museums to adopt it?', 'How would you monetize?'],
  },
  {
    id: 'design-self-driving-taxi',
    title: 'Design the in-car experience for a self-driving taxi',
    category: 'product-design',
    subcategory: 'Design for an emerging technology',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Google', 'Uber', 'Tesla'],
    framework: 'circles',
    concepts: ['trust-safety', 'user-journey-mapping', 'user-segmentation', 'tradeoffs-decisions'],
    whyAsked: 'Tests designing for trust in a new technology, where there is no driver to ask for help.',
    clarifiers: ['Is it fully driverless (no safety driver)?', 'Which city and type of trips?', 'Are we optimizing for first-time trust or repeat usage?'],
    diagram: `flowchart LR
  A["📲 Book"] --> B["🚗 Find & enter car"] --> C["🛣️ Ride"] --> D["🏁 Arrive & exit"]
  B -.-> P1["😟 Is this my car?"]
  C -.-> P2["😟 Is it safe? What is it doing?"]
  C -.-> P3["😟 What if something goes wrong?"]
  D -.-> P4["😟 Left item, wrong drop-off"]
  P2 --> S1["🖥️ 'What the car sees' screen"]
  P3 --> S2["🆘 One-tap human support"]`,
    answer: `**Comprehend.** Fully driverless robotaxi in a large city. The goal is to turn first-time riders into regular riders. Trust is the main barrier.

**Segments.** First-time curious riders, **anxious first-timers** (tried it because of a promo or it was cheap), daily commuters, elderly or disabled riders, parents with kids. I'll focus on **first-time riders**, because if the first ride fails, there is no second ride.

**Journey and pains.**
1. Car arrives: "Which car is mine? How do I unlock it?"
2. Ride starts: "Is it really safe? Why did it brake?"
3. Problem: "Who do I ask? There's no driver."
4. Arrival: "It dropped me at the wrong entrance." / "I left my phone inside."

**Prioritize.** Feeling **safe and in control** during the ride (fear is the main churn driver), then help when something goes wrong.

**Solutions.**
1. **"What the car sees" display**: shows detected pedestrians, cars and the planned path, and explains actions ("Slowing for a cyclist").
2. **Rider controls**: a big "Pull over safely" button, an adjustable drive style (gentle/normal), climate and music.
3. **One-tap live human support** via video, with a quick connect time.
4. **Pickup confidence**: the car flashes a rider-chosen colour or plays a sound. Unlock with your phone.
5. **Exit checks**: "Don't forget your bag" reminder using a seat sensor, plus drop-off spot fine-tuning.

**Evaluate.** The transparency display builds trust cheaply. Pull-over + human support gives control in emergencies. Personalization adds comfort, not trust.

**Recommendation.** For launch: the transparency display, a pull-over button, instant human support and pickup identification.
**Metrics:** second-ride rate within 14 days (North Star for trust), post-ride safety rating, support contacts per 100 rides. **Guardrails:** safety incidents, emergency stops.`,
    pitfalls: ['Focusing on entertainment screens while ignoring trust and safety.', 'Forgetting what happens when something goes wrong.'],
    proTip: 'Name the metric that captures trust: whether people take a second ride. It shows you link design choices to behaviour.',
    followUps: ['How would you handle a passenger who becomes ill?', 'How would you design for blind riders?'],
  },
  {
    id: 'design-city-parking',
    title: 'Design a product to make finding parking in a city easier',
    category: 'product-design',
    subcategory: 'Design for a problem',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Google', 'Uber'],
    framework: 'circles',
    concepts: ['marketplaces', 'network-effects', 'user-segmentation', 'mvp'],
    whyAsked: 'A classic urban problem with both a data challenge and a marketplace opportunity.',
    clarifiers: ['Is this a standalone app or a feature of Google Maps?', 'Street parking, garages, or both?'],
    diagram: `flowchart TD
  D["🚗 Driver"] --> P["Pain: circling for 15 minutes, unknown price, tickets"]
  P --> S1["📊 Predict open-spot probability from data"]
  P --> S2["🅿️ Reserve garage or driveway spots"]
  P --> S3["🔔 Spot-leaving alerts from other users"]
  S2 --> M["Marketplace: unused private spots ↔ drivers"]`,
    answer: `**Comprehend.** A new feature within a maps app. The goal is to reduce time spent hunting for parking (which also cuts traffic and emissions).

**Segments.** Commuters (daily, predictable), **visitors to unfamiliar busy areas** (events, shopping), delivery and gig drivers, residents. I'll focus on **visitors going to busy downtown areas**. They have the highest uncertainty and stress.

**Needs.** Know before leaving whether parking is available and what it costs. Avoid circling. Avoid tickets (confusing signs). Get close to the destination.

**Prioritize.** Certainty about availability and price before arriving.

**Solutions.**
1. **Parking likelihood forecast**: predicts how hard parking will be near the destination, using historical searches, circling detection from GPS traces, and time of day. Suggests a garage instead if it looks hard.
2. **Reservable spots marketplace**: book garage spots or private driveways ahead of time.
3. **Crowdsourced "leaving now"** spot handoffs.
4. **Sign decoder**: photograph a confusing street sign and get "Can I park here now? Yes, for 2 hours."

**Evaluate.** The forecast uses data the maps app already has and scales globally. The marketplace gives certainty and revenue but needs supply partnerships city by city. The handoff feature is clever, but has timing issues and possible safety concerns.

**Recommendation.** V1: the parking difficulty forecast with garage suggestions and booking via partners. V2: the private driveway marketplace.
**Metrics:** minutes spent searching for parking (measured from GPS circling), garage booking conversion. **Guardrail:** forecast accuracy.`,
    pitfalls: ['Proposing sensors on every street, which is expensive and slow.', 'Ignoring that the data may already exist in GPS traces.'],
    followUps: ['How would you measure "time spent circling"?', 'How do you get garages to join?'],
  },
  {
    id: 'design-commute-language',
    title: 'Design a product to help people learn a language during their commute',
    category: 'product-design',
    subcategory: 'Design for a context',
    difficulty: 'Easy',
    learningValue: 3,
    companies: ['Duolingo', 'Google'],
    framework: 'circles',
    concepts: ['jobs-to-be-done', 'retention-cohorts', 'user-segmentation'],
    whyAsked: 'Context-based design: constraints like hands busy, noise and interruptions shape the solution.',
    clarifiers: ['Driving, public transport, or walking?', 'Beginner or intermediate learners?'],
    diagram: `flowchart LR
  C1["🚗 Driving: eyes and hands busy"] --> S1["🎧 Audio-only, voice replies"]
  C2["🚇 Train: interrupted, maybe offline"] --> S2["📱 2-min bite-sized offline lessons"]
  C3["🚶 Walking: one hand"] --> S3["⌚ Watch flashcards"]`,
    answer: `**Comprehend.** A language learning app. The goal is daily engagement and retention.

**Segments by context.** Drivers (eyes and hands busy), **public transport riders** (interrupted, spotty signal, standing), walkers. I'll pick **drivers**. There are many car commuters, and almost no good solution exists because screen-based apps are unsafe while driving.

**Needs.** Hands-free and eyes-free. Works with no screen interaction. Speaking practice. Picks up exactly where you left off. Works for a commute of any length.

**Solutions.**
1. **Audio-only conversational lessons** through CarPlay or Android Auto, where you answer by voice and get feedback from speech recognition.
2. **Commute-length sessions**: auto-sized to the trip ETA.
3. **Story mode**: a serialized audio drama in the target language with recall questions, like a podcast that teaches.

**Recommendation.** Voice-interactive lessons in the car, auto-fitted to trip length, and resumable.
**Metrics:** commuter sessions per week, % of sessions completed, 30-day retention. **Guardrail:** must comply with driver distraction guidelines, with zero required screen interactions.`,
    pitfalls: ['Proposing screen-based features for drivers, which is unsafe.'],
    followUps: ['How do you measure learning, not just engagement?'],
  },
  {
    id: 'design-restaurant-food-waste',
    title: 'Design a product to help restaurants reduce food waste',
    category: 'product-design',
    subcategory: 'Design for businesses (B2B)',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['DoorDash', 'Toast'],
    framework: 'circles',
    concepts: ['jobs-to-be-done', 'unit-economics', 'mvp', 'ml-basics'],
    whyAsked: 'A B2B design question. Tests ROI thinking and fitting into existing workflows.',
    clarifiers: ['Independent restaurants or chains?', 'Waste from over-ordering, prep, or leftovers?', 'Are we a point-of-sale company or a startup?'],
    diagram: `flowchart LR
  O["📦 Order supplies"] --> Pr["🔪 Prep"] --> C["🍳 Cook & serve"] --> L["🗑️ Leftover"]
  O -.->|"over-ordering"| W1["Waste"]
  Pr -.->|"over-prep"| W2["Waste"]
  L -.->|"unsold food"| W3["Waste"]
  W2 --> S1["📈 Demand forecast → prep list"]
  W3 --> S2["🛍️ Sell surplus at a discount"]`,
    answer: `**Comprehend.** We're a restaurant point-of-sale (POS) company, so we already have sales data. The goal is a paid add-on that saves restaurants money and reduces waste.

**Segments.** Independent full-service restaurants, **small multi-location chains (2–20 locations)**, quick-service restaurants, bakeries. I'll focus on small chains. They have meaningful volume but no data team.

**Where waste happens.** Over-ordering inventory → **over-prepping each morning** → unsold dishes at closing → plate waste.
The chef or manager decides prep amounts by gut feel, so prep waste is large and controllable.

**Prioritize.** Prep forecasting. It's daily, directly cuts costs, and our POS data makes it uniquely possible for us.

**Solutions.**
1. **Smart prep list**: forecasts tomorrow's sales per dish, using POS history, weather, local events and day of week, then converts it into ingredient prep quantities.
2. **Waste logging**: a quick tablet tap to log binned items, which closes the feedback loop.
3. **End-of-day surplus marketplace** (like Too Good To Go) to sell leftovers.

**Evaluate.** The prep forecast has the highest ROI and uses our data moat. Waste logging is needed to measure savings. Surplus sales recover revenue but don't prevent waste.

**Recommendation.** Smart prep list + 10-second waste logging. Show weekly "$ saved" on a dashboard.
**Metrics:** food cost as % of revenue, logged waste in kg, prep list adoption (% of days used). **Guardrail:** stockouts of dishes ("86'd items").`,
    pitfalls: ['Forgetting that busy kitchen staff won\'t do extra data entry.', 'Not quantifying ROI for a business buyer.'],
    proTip: 'B2B design must show ROI: "If food cost is 30% of revenue and we cut waste by 20%, a $1M restaurant saves about $15–20k per year."',
    followUps: ['How would you price it?', 'How do you build trust in the forecast?'],
  },
  {
    id: 'design-maps-wheelchair',
    title: 'Design a Google Maps feature for wheelchair users',
    category: 'product-design',
    subcategory: 'Design for an accessibility need',
    difficulty: 'Medium',
    learningValue: 5,
    companies: ['Google', 'Apple'],
    framework: 'circles',
    concepts: ['accessibility', 'network-effects', 'user-journey-mapping', 'mvp'],
    whyAsked: 'Combines accessibility empathy with a data and crowdsourcing problem at scale.',
    clarifiers: ['Manual or power wheelchair users?', 'Navigation, venue info, or both?', 'Which regions?'],
    diagram: `flowchart TD
  A["♿ Plan trip"] --> B["Is the venue accessible?"]
  B --> C["Is the ROUTE accessible? curbs, slopes, elevators"]
  C --> D["Public transit: elevator working?"]
  B --> P1["❓ Unreliable or missing info"]
  C --> P2["🚧 Broken curb cut forces long detour"]
  D --> P3["🛗 Elevator out of service"]
  P1 & P2 & P3 --> S["Crowdsourced + official accessibility data layer"]`,
    answer: `**Comprehend.** A feature within Google Maps to help wheelchair users get from A to B with confidence. The goal is mission-driven, and it also strengthens Maps' quality advantage.

**Segments.** Manual wheelchair users, power wheelchair users, people with temporary injuries, plus related groups who benefit: parents with strollers, the elderly, travellers with luggage. Focus on **manual wheelchair users in cities**.

**Journey and pains.**
- *Before the trip:* "Does this restaurant have steps? Is the restroom accessible?" Information is often missing or wrong.
- *On the route:* missing curb cuts, steep slopes and construction force dangerous detours.
- *Transit:* an elevator is out of service, leaving the user stranded on a platform.

**Prioritize.** Reliable **route accessibility** plus **live elevator status**. These failures leave users stranded, while missing venue information can usually be checked by calling ahead.

**Solutions.**
1. **Wheelchair routing mode**: avoids stairs and steep slopes, prefers curb cuts. Uses sidewalk data, Street View imagery (ML-detected curb cuts) and user reports.
2. **Live transit elevator status** from transit agency feeds plus user reports, with automatic rerouting.
3. **Venue accessibility attributes**: step-free entrance, accessible restroom, parking. Crowdsourced through Local Guides prompts.
4. **"Report a barrier"** button for broken ramps and construction.

**Evaluate.** Venue attributes are the easiest win (the attribute system already exists). Routing is the highest value but needs sidewalk data. Elevator status needs agency partnerships. Crowdsourcing makes every feature better over time: a data network effect.

**Recommendation.** Launch wheelchair routing in 5 cities with good sidewalk data, plus elevator status and barrier reporting. Scale venue attributes globally through Local Guides.
**Metrics:** wheelchair route requests and completion rate (no reroute caused by a barrier), contribution volume, user trust survey. **Guardrail:** reports of routes that turned out to be inaccessible.`,
    pitfalls: ['Only adding a venue checkbox and ignoring the route itself.', 'Ignoring data quality and freshness, since a wrong "accessible" label is worse than no label.'],
    proTip: 'Mention the curb-cut effect: stroller parents and travellers with suitcases also benefit, which strengthens the business case.',
    followUps: ['How do you ensure crowdsourced data is accurate?', 'How would you prioritize cities?'],
  },
  {
    id: 'design-dating-over-50',
    title: 'Design a dating product for people over 50',
    category: 'product-design',
    subcategory: 'Design for a user group',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Meta', 'Match Group'],
    framework: 'circles',
    concepts: ['user-segmentation', 'trust-safety', 'personas'],
    whyAsked: 'Tests avoiding stereotypes and designing for different life stages, plus trust and safety.',
    clarifiers: ['Looking for marriage, companionship, or friendship?', 'Standalone app or a feature of an existing dating app?'],
    diagram: `flowchart LR
  S1["💔 Recently divorced, 52"] --> N1["Low confidence, out of practice"]
  S2["🕊️ Widowed, 68 ⭐"] --> N2["Wants companionship, fears scams"]
  S3["🧭 Long-time single, 58"] --> N3["Wants serious intent"]
  N2 --> X["Verified profiles, activity-based meetups, scam protection"]`,
    answer: `**Comprehend.** A standalone app. The goal is meaningful connections and a sustainable subscription business.

**Segments.** Recently divorced (50s), **widowed (60s–70s)**, long-time singles, people seeking friendship only. I'll focus on **widowed people in their 60s+**. Loneliness is high, existing apps feel youth-oriented, and **romance scams target exactly this group**.

**Needs.** Feel safe (scams, catfishing). Simple UX. Connect over shared activities, not swiping on photos. Family acceptance. Clear intent (companionship vs marriage).

**Solutions.**
1. **Verified identity + scam shield**: video verification, plus ML that flags requests for money, moving off-platform quickly, or overseas profiles.
2. **Activity-based matching**: join local group events (walking clubs, cooking classes) and meet in low-pressure settings.
3. **Slow dating**: a few curated matches per day with a conversation starter.

**Recommendation.** Verified profiles + scam shield + group activities as the hook.
**Metrics:** conversations reaching 10+ messages, first meetings (at events or one-on-one), subscriber retention. **Guardrails:** scam reports, financial loss incidents.`,
    pitfalls: ['Simply copying Tinder with bigger fonts.', 'Ignoring scams, which cost older people a lot of money each year.'],
    followUps: ['How would you detect romance scams?', 'Pricing for retirees?'],
  },
  {
    id: 'design-er-waiting',
    title: 'Design a product for patients waiting in a hospital emergency room',
    category: 'product-design',
    subcategory: 'Design for a stressful context',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Google', 'Microsoft'],
    framework: 'circles',
    concepts: ['user-journey-mapping', 'personas', 'trust-safety', 'stakeholder-management'],
    whyAsked: 'A high-stakes, multi-stakeholder environment (patients, families, nurses, hospital admin) with constraints like privacy (HIPAA).',
    clarifiers: ['Patients, companions, or staff as the main user?', 'Built for one hospital or sold to many?', 'Regulatory constraints?'],
    diagram: `journey
  title Patient journey in the ER
  section Arrive
    Check in: 2: Patient
    Triage: 3: Patient
  section Wait
    Waiting, no info: 1: Patient, Family
    Pain getting worse: 1: Patient
  section Treat
    See doctor: 4: Patient
    Tests: 2: Patient
  section Leave
    Discharge instructions: 2: Patient`,
    answer: `**Comprehend.** A hospital-deployed product for ER waiting rooms. The goal is to reduce anxiety and walkouts, and to free up nurses' time, all within healthcare privacy rules.

**Stakeholders.** Patients (low and medium priority, waiting for hours), family members, triage nurses (constantly asked "how long?"), and hospital admin (walkout rate, satisfaction scores).
Focus on **lower-acuity patients and their companions**, who wait the longest and are the most likely to leave without being seen.

**Pains.** No idea how long the wait will be or where they are in the queue. Fear of being forgotten. No way to say "my pain is worse". Can't leave the room for food or the restroom in case they miss their name. Family members don't know what's happening.

**Prioritize.** Transparency about the wait plus a way to escalate. These reduce anxiety and safety risk at the same time.

**Solutions.**
1. **SMS status tracker** (no app download): "You're checked in. Estimated wait 1h40m. You'll get a text 10 minutes before you're seen." This lets people step away briefly.
2. **"I feel worse" button** that routes to the triage nurse with symptom questions, and flags clinical escalation.
3. **Family updates**: the patient can opt in to share status with a family member.
4. Waiting room screens with anonymized queue progress and a simple explanation of triage ("sicker patients are seen first").

**Evaluate.** SMS has the lowest friction and works on any phone. Escalation is safety-critical but must avoid flooding nurses (use a symptom checklist). Family updates involve privacy consent.

**Recommendation.** SMS tracking + escalation + triage education. Pilot in one ER.
**Metrics:** left-without-being-seen rate, "how long" questions to nurses, patient anxiety score. **Guardrails:** missed deteriorations (clinical safety), privacy incidents.`,
    pitfalls: ['Proposing an app download for stressed patients.', 'Promising exact wait times. Triage order changes, so explain this transparently.'],
    proTip: 'Explicitly mention clinical safety and privacy constraints. Healthcare interviewers look for this.',
    followUps: ['How would you estimate wait times?', 'How do you get hospital buy-in?'],
  },
  {
    id: 'design-remote-loneliness',
    title: 'Design a product to reduce loneliness among remote workers',
    category: 'product-design',
    subcategory: 'Design for a problem',
    difficulty: 'Hard',
    learningValue: 4,
    companies: ['Meta', 'Microsoft', 'Slack'],
    framework: 'circles',
    concepts: ['jobs-to-be-done', 'user-segmentation', 'network-effects', 'engagement-metrics'],
    whyAsked: 'An abstract emotional problem. Tests breaking down the root causes of loneliness and measuring something fuzzy.',
    clarifiers: ['Loneliness at work (colleagues) or in life (community)?', 'Are we an employer tool (B2B) or a consumer product?'],
    diagram: `mindmap
  root((Remote loneliness))
    No casual chats
      Watercooler moments
    Weak team bonds
      New hires
    Isolated at home
      No local community
    Blurred boundaries
      Always-on burnout`,
    answer: `**Comprehend.** A B2B tool sold to companies (in the style of Slack or Teams). Goals: better employee wellbeing and retention.

**Segments.** **New hires who joined remotely** (no existing relationships), long-tenured remote workers, managers, people in different time zones from their team. I'll focus on **remote new hires in their first 6 months**. Weak connections lead to early attrition, which is costly.

**Root causes of loneliness.** No casual interactions (everything is a scheduled meeting), not knowing who to ask, no shared experiences, and physical isolation at home.

**Prioritize.** Creating **low-pressure casual connections** with colleagues. It's the gap remote work created and the one we can most directly fill.

**Solutions.**
1. **Smart coffee pairings**: weekly 15-minute pairings with people who share interests or are in an adjacent team, auto-scheduled, with conversation prompts.
2. **Ambient co-working rooms**: drop-in video or audio rooms ("Focus with others"). Mimics sitting near people.
3. **Onboarding buddy + cohort**: new hires are grouped with others who started the same month, with structured activities.
4. **Local meetup matcher**: connects employees who live in the same city for in-person meetups.

**Evaluate.** Pairings are simple and proven (like Donut), but can feel forced. Cohorts build lasting peer groups. Local meetups are the highest impact but depend on geography.

**Recommendation.** New-hire cohorts + interest-based coffee pairings. Measure the result.
**Metrics:** # of colleagues outside the immediate team a new hire has met by day 90, a belonging survey score, 6-month attrition of new hires. **Guardrail:** meeting load (avoid adding fatigue), and the opt-out rate.`,
    pitfalls: ['Proposing more video meetings, which can make fatigue worse.', 'Not defining how to measure loneliness.'],
    proTip: 'For fuzzy goals, propose a proxy metric plus a validated survey, e.g. "number of weak ties" plus a belonging score.',
    followUps: ['How would you prove ROI to HR?', 'What about introverts?'],
  },
  {
    id: 'design-kids-safety-wearable',
    title: 'Design a safety wearable for young children',
    category: 'product-design',
    subcategory: 'Design a physical product',
    difficulty: 'Medium',
    learningValue: 3,
    companies: ['Apple', 'Google'],
    framework: 'circles',
    concepts: ['trust-safety', 'personas', 'tradeoffs-decisions'],
    whyAsked: 'Tests balancing safety with privacy and independence, with two users (child and parent).',
    clarifiers: ['Age range?', 'Goal: location tracking, emergency calls, or both?', 'What is the price target?'],
    diagram: `flowchart LR
  P["👩 Parent: wants peace of mind"] --> T{"Trade-off"}
  K["🧒 Kid, 8: wants freedom, not to feel watched"] --> T
  T --> S["Watch: SOS button + geofence alerts + calls to approved contacts only"]`,
    answer: `**Comprehend.** A wearable for kids aged 6–10 who are starting to walk to school alone. Parents buy it. The goal is peace of mind with age-appropriate independence.

**Users.** Parents of first-time independent walkers, and the child (who wants to look cool and not feel watched). Also: kids with autism who may wander.

**Needs.** *Parent:* know the child arrived safely, get alerted when something is wrong, and reach the child quickly. *Child:* call for help easily, don't look babyish, don't get distracted by screens.

**Solutions.**
1. **Watch with SOS button** that shares live location and starts a call to parents.
2. **Geofence check-ins**: "Maya arrived at school 8:12am" alerts, with no constant tracking needed.
3. **Approved contacts only**: no internet, no social apps, no strangers.
4. **Kid-designed style**: swappable bands, a step challenge game.

**Trade-off.** Constant tracking vs trust. Default to **event-based alerts** (arrived, left, SOS) instead of live tracking, to protect the child's autonomy.

**Recommendation.** An SOS watch with geofence alerts and approved contacts.
**Metrics:** daily wear rate (kids remove devices they dislike), parent-reported peace of mind, SOS response time. **Guardrails:** false SOS alerts, data breaches (children's data is highly sensitive).`,
    pitfalls: ['Giving kids a full smartphone-like device.', 'Forgetting that children\'s data has strict legal protections (e.g. COPPA).'],
    followUps: ['How would you handle the battery dying?', 'At what age does the child outgrow it?'],
  },
  {
    id: 'design-grocery-busy-parents',
    title: 'Design a grocery shopping experience for busy parents',
    category: 'product-design',
    subcategory: 'Design for a user group',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Amazon', 'Instacart', 'Walmart'],
    framework: 'circles',
    concepts: ['jobs-to-be-done', 'retention-cohorts', 'user-journey-mapping', 'personas'],
    whyAsked: 'Tests seeing that the real job is broader than "buy groceries". It is "feed my family with minimal mental load".',
    clarifiers: ['Online, in-store, or both?', 'Is the goal basket size or frequency?'],
    diagram: `flowchart LR
  A["🤯 What's for dinner this week?"] --> B["📝 Make a list"] --> C["🛒 Shop"] --> D["🚚 Deliver"] --> E["🍳 Cook"]
  A -.-> P1["Decision fatigue ⭐"]
  B -.-> P2["Forgetting items"]
  C -.-> P3["Kids in tow, no time"]
  P1 & P2 --> S["Auto meal plan → smart cart → subscription delivery"]`,
    answer: `**Comprehend.** An online grocery retailer. The goal is to increase order frequency and retention among families.

**Persona.** Dana, 38, two kids, works full time. Shops 1–2 times a week and dreads planning meals.

**Job.** "When the week starts, I want to know what we'll eat and have everything at home, so I don't stress at 6pm every day."

**Journey pains.** Decision fatigue about meals (the biggest), building the list, forgetting items, the shopping trip itself, picky kids, food going to waste.

**Prioritize.** Planning (meal decisions + list building) is the root pain. Delivery already exists and is a commodity.

**Solutions.**
1. **Family meal planner**: pick 5 dinners from suggestions matched to the kids' preferences, budget and time. It auto-builds the cart, minus items already at home.
2. **Smart staples autopilot**: predicts when milk, diapers and so on run out and auto-adds them to a recurring order.
3. **"Rescue dinner" button**: a 30-minute delivery bundle of a ready meal kit for emergencies.

**Evaluate.** The planner is differentiated and increases basket size, but adoption depends on the quality of suggestions. Autopilot drives retention and frequency. The rescue button helps conversion in a moment of need.

**Recommendation.** Meal planner + staples autopilot.
**Metrics:** weekly ordering households (retention), % of carts created from the planner, basket size. **Guardrails:** out-of-stock substitutions, food waste reported.`,
    pitfalls: ['Only optimizing checkout speed.', 'Not addressing the root job of meal planning.'],
    followUps: ['How would you personalize for picky kids?', 'How does this change your supply chain?'],
  },
  {
    id: 'design-traveller-foreign-country',
    title: 'Design a product for travellers visiting a foreign country for the first time',
    category: 'product-design',
    subcategory: 'Design for a context',
    difficulty: 'Medium',
    learningValue: 4,
    companies: ['Airbnb', 'Google', 'Booking.com'],
    framework: 'circles',
    concepts: ['user-journey-mapping', 'user-segmentation', 'prioritization', 'trust-safety'],
    whyAsked: 'A broad journey with many pain points. Tests prioritization and choosing a sharp focus.',
    clarifiers: ['Leisure or business travellers?', 'Before, during, or after the trip?', 'Which company are we?'],
    diagram: `journey
  title First trip to Japan
  section Before
    Plan itinerary: 3: Traveller
    Visa & money: 2: Traveller
  section Arrive
    Airport to hotel: 2: Traveller
    SIM / internet: 1: Traveller
  section During
    Order food, language barrier: 1: Traveller
    Navigate transit: 2: Traveller
    Avoid tourist traps: 2: Traveller`,
    answer: `**Comprehend.** We're a travel platform (Airbnb-like). The goal is to increase trust and trip satisfaction, and build loyalty beyond the booking itself.

**Segments.** Solo backpackers, **couples on their first big international trip**, families, business travellers. I'll focus on **first-timers in a country with a language barrier**, where anxiety is highest.

**Journey pains.** Arriving with no internet, getting from the airport, the **language barrier** (menus, asking for directions, emergencies), confusing transit, cultural etiquette mistakes, overpaying and scams.

**Prioritize.** The *in-trip* language and navigation barrier. It happens dozens of times a day, and it's when people feel most helpless.

**Solutions.**
1. **Trip companion mode**: offline maps, camera menu translation, "show this to the driver" address cards, and phrase cards that adapt to your location (restaurant, train station).
2. **Arrival kit**: an eSIM bundled with the booking, plus step-by-step airport-to-stay directions with photos.
3. **Local host tips + etiquette cards** ("Don't tip in Japan"), with scam alerts.
4. **24/7 human help line** with translation for emergencies.

**Evaluate.** The companion mode solves frequent pain, and parts of it can be built with partners (translation APIs). The eSIM solves the first-hour panic and adds revenue. Host tips use our unique community.

**Recommendation.** Arrival kit (eSIM + directions) + an offline companion with translation and host tips.
**Metrics:** companion daily usage during trips, trip rating, rebooking rate within 12 months. **Guardrail:** support tickets about arrival problems.`,
    pitfalls: ['Designing for the whole journey at once.', 'Rebuilding Google Translate instead of partnering.'],
    followUps: ['Build or partner for translation?', 'How does this drive bookings?'],
  },
];
