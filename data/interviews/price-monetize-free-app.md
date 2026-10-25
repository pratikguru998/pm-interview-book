::interviewer 00:00
You run a free fitness app with 10 million users. How would you monetize it?

::candidate 00:05
Clarifying questions:
1. What does the app do: workout tracking, running/GPS, guided classes?
2. How engaged are users (daily, weekly)?
3. Any constraints, e.g. brand concerns about ads?
4. Which markets?

::interviewer
Running and cycling tracking with GPS, social features (following friends, kudos). About 3M monthly active users out of 10M total. Mostly US and Europe. The team cares a lot about user experience.

::candidate 00:30
So it's similar to Strava: a social fitness tracker. I'll (1) segment users by willingness to pay, (2) list monetization options, (3) evaluate, (4) recommend with numbers, (5) metrics and guardrails.

**1. Segments (of 3M MAU):**

| Segment | Share | Needs | Willingness to pay |
|---|---|---|---|
| **Serious athletes** (training for races) | ~10% (300k) | Training plans, performance analytics, route planning, segments/leaderboards | **High** |
| Regular enthusiasts | ~40% | Tracking, social motivation, challenges | Medium |
| Casual users | ~50% | Occasional tracking | Low |

::candidate 00:55
**2. Options:**
1. **Premium subscription:** advanced analytics, training plans, route planning, safety features (live location sharing), offline maps.
2. **Advertising:** banner ads in the feed.
3. **Sponsored challenges:** brands (e.g. running shoe companies) sponsor monthly challenges with rewards.
4. **B2B corporate wellness:** employers pay for employee challenges and teams.
5. **Marketplace:** coaching, race registrations, gear (affiliate).
6. **Data partnerships:** anonymized aggregate data for city planners (e.g. cycling infrastructure). Small revenue, but must be privacy-safe.

**3. Evaluate:**

| Option | Revenue potential | UX impact | Fit with brand | Effort |
|---|---|---|---|---|
| Subscription | **High** | Positive if free tier stays good | ✅ | Medium |
| Banner ads | Medium | ❌ Negative | ❌ | Low |
| Sponsored challenges | Medium | ✅ Neutral/positive (fun, rewards) | ✅ | Low |
| Corporate wellness | Medium–high | None | ✅ | High (sales team) |
| Marketplace | Low–medium | Neutral | ✅ | Medium |

::interviewer
How would you decide what goes into the free tier vs premium?

::candidate 01:40
Principle: **the free tier must keep the core habit and social network healthy**, because that's what attracts users and makes premium valuable. So free includes: activity tracking, the social feed, following friends, kudos and basic stats. Premium includes features serious athletes value most: **training analysis** (fitness trends, heart-rate zones), **training plans**, **route planning and offline maps**, **detailed leaderboard and segment analysis**, **safety beacon**. I'd validate with user research and test upgrade prompts at moments of need (e.g. viewing a segment leaderboard).

::candidate 02:05
**4. Recommendation and numbers:**
- **Premium subscription** at ~$10/month or ~$70/year. Target conversion: ~5% of MAU (mostly serious athletes and some enthusiasts) → 150k subscribers × ~$70 average ≈ **$10.5M/year**.
- **Sponsored challenges:** say 20 brand challenges per month at ~$30k each ≈ **$7M/year**.
- **Later:** corporate wellness and marketplace.
- **No banner ads**, to protect the experience.

**5. Metrics:** conversion to premium by segment, premium retention (annual renewals), ARPU, challenge participation and sponsor renewals. **Guardrails:** free-user retention and engagement, app rating, social activity (posts, kudos), so monetization doesn't damage the network.

**Summary:** monetize the athletes who value performance tools through a premium subscription, monetize engagement through sponsored challenges rather than ads, and keep the free tier strong to protect the social network that makes the app valuable.

::scorecard
- **Segmented willingness to pay.**
- **Option evaluation** including UX and brand impact.
- **Clear free vs premium principle.**
- **Revenue estimates** with guardrails.
