::interviewer 00:00
How many Uber drivers are needed in London?

::candidate 00:05
Clarifying questions:
1. Do you mean active drivers registered on the platform, or drivers online at a given moment?
2. Are we sizing for average demand or peak demand?
3. Rides only (not Uber Eats couriers)?

::interviewer
Registered active drivers. Rides only. Sizing is up to you.

::candidate 00:20
Supply must cover **peak demand**, otherwise wait times explode during rush hours and weekend nights. So I'll estimate peak demand, convert to drivers online, then to total drivers (since not everyone drives at the same time).

**Formula:**
Total drivers = (peak-hour trips ÷ trips per driver per hour) ÷ share of drivers online at peak

::candidate 00:40
**1. Daily trips in London:**
- Population ~9M, plus visitors.
- What share of people use Uber on a given day? Let me think in trips per person per week: London has excellent public transport, so most people use Uber occasionally. Maybe **0.3 Uber trips per person per week** on average (heavy users more, many people zero).
- Daily trips = 9M × 0.3 ÷ 7 ≈ **385,000 trips/day**.

**2. Peak hour share:** demand is uneven. Friday/Saturday night and weekday evening peaks. Assume the busiest hour has **~12%** of daily trips.
- Peak-hour trips = 385,000 × 0.12 ≈ **46,000 trips/hour**.

**3. Trips per driver per hour:** London traffic is slow; average trip ~20–25 min + pickup time ~5–8 min → a driver completes about **2 trips per hour** at peak.
- Drivers online at peak = 46,000 ÷ 2 = **23,000 drivers**.

**4. Share of total drivers online at peak:** many drivers are part-time; at the busiest hour, maybe **30%** of active drivers are online.
- Total active drivers = 23,000 ÷ 0.3 ≈ **77,000 drivers**.

::interviewer
Uber has said it has more than 70,000 drivers in London at some point. Does your estimate fit?

::candidate 01:40
Yes, ~77k is the same order of magnitude. Good sign. If the real number is higher, possible reasons: lower trips per driver per hour (traffic), more part-time drivers (lower % online at peak), or more demand than I assumed.

**Sensitivity:**
- If the peak share is 10% instead of 12% → ~64k.
- If only 25% are online at peak → ~92k.
So a reasonable range is **60–100k**.

**Product insight:** because supply must match peaks, Uber uses **surge pricing** and **peak incentives** to bring part-time drivers online when needed, rather than keeping many drivers idle at off-peak times.

**Summary:** ~385k trips/day → ~46k in the peak hour → ~23k drivers needed online → ~77k active drivers on the platform (range 60–100k).

::scorecard
- **Sized for peak, not average**, a key insight.
- **Clear chain from demand to supply.**
- **Range + sensitivity**, plus a product link (surge pricing).
