::interviewer 00:00
How would you measure the success of Google Maps?

::candidate 00:05
Clarifying questions:
1. The whole product, or a specific area like navigation or local search?
2. Is this for a strategic dashboard or a specific team?

::interviewer
Whole product, leadership-level view.

::candidate 00:15
Plan: mission → user jobs → metrics per job → one North Star → guardrails → business metrics.

**Mission:** help people explore and navigate the world: get somewhere, and decide where to go.

**User jobs:**
1. **Navigate:** driving, walking, transit, cycling.
2. **Discover places:** restaurants, shops, services ("coffee near me").
3. **Check information:** opening hours, traffic, reviews.
4. **Contribute:** reviews, photos, edits (the supply of local data).
5. **Share:** location sharing with friends and family.

::candidate 00:45
**Metrics per job:**

| Job | Metrics |
|---|---|
| Navigate | Navigation sessions started; % completed; ETA accuracy; reroutes per trip |
| Discover | Place searches; **actions on places** (directions, call, website, reservation, order) |
| Check info | Place page views; data accuracy (e.g. hours correct) |
| Contribute | Reviews, photos, edits per week; % of places with fresh info |
| Share | Location-sharing sessions |
| Overall | Weekly active users; sessions per user; retention |

::candidate 01:10
**North Star:** **weekly users who complete a "successful outing"**: either complete a navigation or take a real-world action on a place (directions, call, booking).

Why: it combines both core jobs (navigate + decide), focuses on **real-world outcomes** rather than app opens, and links to the business (local actions are what advertisers pay for).

::interviewer
How do you know an action actually happened in the real world?

::candidate 01:35
Navigation completion is observable (arrived near the destination). For place actions, we observe intent signals (tapped directions, called, booked). For users who opt in to location history, aggregated visit detection can estimate whether people actually visited, used only in aggregate for measurement and respecting privacy settings. I'd treat "action taken" as a proxy and validate it with visit data where available.

::candidate 02:00
**Guardrails:** ETA accuracy, data accuracy (wrong hours, closed businesses), safety (interaction while driving), latency, battery usage, privacy complaints.

**Business metrics:** local ad clicks and actions, revenue per local search, partner bookings.

**Summary:** Maps serves two core jobs, navigating and deciding where to go, so my North Star is weekly users completing a successful outing (navigation or place action). Supporting metrics per job, data-quality and safety guardrails, and local ads revenue complete the picture.

::scorecard
- **Job-based metric design** for a multi-use product.
- **Outcome-oriented North Star** that combines jobs.
- **Measurement realism** for real-world actions, with privacy.
