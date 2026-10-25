::interviewer 00:00
Improve the Starbucks app.

::candidate 00:05
Clarifying questions:
1. Goal: increase visit frequency, ticket size, or improve store operations?
2. Any user group to focus on?

::interviewer
Frequency. Pick the users.

::candidate 00:15
**Goal:** increase visit frequency among app users. The Starbucks app is one of the most successful loyalty and mobile ordering apps, and Rewards members drive a large share of sales. So improvements should build on what works.

**What works today:** Order ahead, Rewards stars, payment, personalized offers.

Plan: segments → journey → pains → ideas → prioritize → metrics.

::candidate 00:40
**Segments:**
- **Daily mobile-order regulars** (morning commute).
- Occasional visitors (weekends, treats).
- Afternoon pick-me-up customers.
- Groups / office orders.

Focus: **mobile-order regulars**, since they're the core of frequency. Small friction improvements turn 4 visits a week into 5. I'd also note that crowded pickup counters hurt *in-store* customers, so improving mobile order flow helps everyone.

::candidate 01:05
**Journey (Tom, orders at 7:50 on his way to work):**
1. Opens the app, re-customizes his usual drink.
2. Arrives → the drink is not ready (or was ready 10 minutes ago and is now cold).
3. Crowded pickup counter → hunts for his name among 15 cups.
4. Leaves. Occasionally gets a reward.

**Pains:** timing mismatch, crowding, repetitive ordering, mixed-up orders, rewards feeling slow.

**Prioritize:** **timing** (ready exactly when I arrive) is the biggest friction and affects drink quality and store crowding.

::candidate 01:30
**Ideas:**
1. **Arrival-timed preparation:** the app tracks ETA (with permission); the barista queue sequences orders so drinks are made as customers approach.
2. **"My usual" one-tap ordering** from a widget or watch.
3. **Pickup shelves with order status screens** (name + "ready").
4. **Personalized challenges:** "Visit 3 afternoons this week, get 100 bonus stars" to grow new occasions.
5. **Subscription:** e.g. a monthly coffee plan.

::interviewer
Location tracking might worry people. Also, would baristas cope with changing queues?

::candidate 02:00
Location: opt-in, only during an active order, with clear benefit messaging ("Your drink will be ready when you arrive"), and fallback to a "I'm 5 minutes away" button. Baristas: the system wouldn't reshuffle constantly. It would hold orders from customers who are far away and release them to the queue at the right time, so the barista sees a normal queue. I'd pilot it in a few stores and measure barista workload and throughput.

::candidate 02:30
**Prioritize:** arrival-timed preparation (highest impact on the main pain, plus operations benefits) + "my usual" widget (low effort, adds frequency) + targeted challenges for new occasions.

**Metrics:**
- **Primary:** mobile orders per active user per week (frequency).
- Wait time at pickup, drink "ready to collected" time (freshness), order accuracy, challenge completion.
- **Guardrails:** in-store (non-app) customer wait time, barista workload and satisfaction, location opt-in rate, complaints.

**Summary:** For mobile-order regulars, the main friction is timing. Preparing drinks based on arrival time, plus one-tap "my usual" ordering, makes the routine smoother and builds frequency, with in-store wait times and barista workload as guardrails.

::scorecard
- **Built on what already works** before proposing changes.
- **Operations and privacy pushback** handled concretely.
- **Guardrails covered other customers and staff.**
