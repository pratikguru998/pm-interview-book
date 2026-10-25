::interviewer 00:00
Design a product for dog owners.

::candidate 00:05
That's broad, so let me narrow it with some clarifying questions:
1. What kind of company are we: hardware, software or e-commerce?
2. Any business goal: revenue, engagement, a new market?
3. Any geography?

::interviewer
You're a consumer app startup. Goal: build something people pay for. US.

::candidate 00:30
Got it. **Goal:** a product dog owners use often and are willing to pay for, i.e. one that solves a frequent, painful problem.

The dog space is huge (tens of millions of US households own dogs), so the most important thing is **choosing a sharp segment and problem**. Plan: segment owners → choose one → journey → pains → prioritize → solutions → recommendation → metrics.

::coach
For very broad prompts, explicitly say "the key is narrowing down". It shows you know where the judgement lies.

::candidate 01:00
**Segments by life situation** (this drives needs more than demographics do):

| Segment | Core job | Frequency of pain | Willingness to pay |
|---|---|---|---|
| New puppy owners | Training, routines | Daily, for ~6 months | High |
| **Full-time working owners (dog alone 8–10h)** | Midday care, peace of mind | **Daily, ongoing** | **High** |
| Senior-dog owners | Health and mobility | Ongoing | High |
| Active outdoor owners | Adventure, trails | Weekly | Medium |
| Owners who travel | Boarding, sitters | Few times a year | High, but rare |

I'll focus on **full-time working owners**. The pain is daily and never goes away (puppy pain fades), there are lots of them, and they're willing to pay. Many owners returned to offices after the remote-work years, and their dogs now spend long days alone.

::candidate 01:50
**Journey (Jordan, 30, office job, 3-year-old lab named Max):**
- 7:00 rushed 10-minute walk → 8:00 leaves → **Max alone for 10 hours** → Jordan feels guilt, checks a camera that's not set up → hires a walker occasionally, but different gig walkers keep showing up → 18:30 home, tired, short walk → Max is restless and chews shoes.

**Pains:**
1. Dog under-exercised and bored → behaviour problems.
2. Unreliable midday care: no-show walkers, a different stranger each time, can't tell whether the walk actually happened.
3. Guilt and anxiety: "Is Max OK?"
4. Daycare is expensive ($30–50 a day) and far away.

**Prioritize:** **reliable midday exercise from someone trusted** (pains 1+2) is the root problem; guilt (3) follows from it.

::candidate 02:50
**Solutions:**
1. **Dedicated neighbourhood walker:** instead of on-demand gig walkers (the Rover/Wag model), match each dog with **one consistent, vetted walker within 1 km** on a weekly subscription. GPS-tracked walks plus a photo and report card.
2. **Dog "pack" co-op:** neighbours with dogs rotate midday walks for each other (free or credit-based).
3. **Smart treat camera:** check in and toss treats remotely.
4. **Group walks:** a walker takes 3–4 nearby dogs together, so the price per dog drops.

::interviewer
Rover and Wag already exist. Why would yours win?

::candidate 03:30
Their model is **transactional and on-demand**: you book, someone shows up. The top complaint in this space is inconsistency, a different walker each time. My wedge is **consistency + hyper-locality**: the same walker, a fixed schedule, a subscription. That's better for the dog (familiarity), for the owner (trust), and for the walker (predictable income, short travel). Hyper-local density also lowers costs, enabling **group walks** at a lower price. It's a different operating model, not just a different app.

::coach
"Why would you win?" deserves a sharp differentiation statement. "Consistency + hyper-locality → subscription + group walks" is a specific strategic wedge.

::candidate 04:15
**Evaluation:**

| Option | Solves exercise | Trust | Willingness to pay | Differentiation |
|---|---|---|---|---|
| Dedicated local walker (subscription) | ✅ | ✅✅ | High | ✅ |
| Pack co-op | ✅ | Medium | Low (free) | Medium |
| Treat camera | ❌ | – | One-time | Low |
| Group walks | ✅ | ✅ | Medium, cheaper | ✅ with density |

**Recommendation: "Pack", a subscription for a dedicated local dog walker.**
- Onboarding: the dog's profile (energy, behaviour), schedule (e.g. Mon–Fri at 12:30).
- Matching: walkers within 1 km, background-checked, meet-and-greet before starting.
- During the walk: GPS route, photos, pee/poo log, report card. Backup walker if the main one is sick (same backup each time).
- Pricing: about $300/month for 5 solo walks a week, or $200/month for group walks.
- Launch in 2–3 dense neighbourhoods of one city to build walker density.

::candidate 05:20
**Metrics:**
- **North Star:** completed walks per week.
- **Retention:** month-3 subscriber retention (target 80%+), walker retention.
- **Quality:** on-time walk rate, walk report ratings, % of walks by the dog's regular walker (consistency).
- **Unit economics:** walks per walker per day (density), contribution margin per subscription, CAC.
- **Guardrails:** incidents (injuries, lost dogs), owner complaints.

**Summary:** I focused on working owners whose dogs are alone all day. Their core pain is unreliable midday care. I'd build a subscription for a consistent, hyper-local walker with GPS reports, differentiated from on-demand marketplaces by consistency and density, measured by completed walks and subscriber retention.

::scorecard
- **Narrowed a broad prompt fast** with a clear segment table and reasoning.
- **Strong competitive answer**, a real strategic wedge rather than "better UX".
- **Business model and unit economics** included naturally.
