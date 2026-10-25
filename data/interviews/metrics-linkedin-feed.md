::interviewer 00:00
What metrics would you use to evaluate LinkedIn's feed?

::candidate 00:05
Clarifying questions:
1. For a ranking team, or overall feed health?
2. Should I include the ads in the feed?

::interviewer
Overall feed health. Ads briefly.

::candidate 00:15
Plan: (1) purpose of the feed, (2) two sides (viewers and creators), (3) metric menu, (4) North Star, (5) quality guardrails.

**1. Purpose:** LinkedIn's mission is to connect professionals to economic opportunity. The feed should help members **learn, stay connected with their network, and discover opportunities** (jobs, contacts, ideas). It's not meant to maximize entertainment.

::candidate 00:35
**2–3. Metrics:**

| Area | Metrics |
|---|---|
| **Viewers: engagement** | Feed sessions per member per week; dwell time on posts; scroll depth |
| **Viewers: meaningful interactions** | Comments, shares, saves; profile visits, follows, connection requests from the feed; job clicks from feed |
| **Creators** | % of members posting monthly; % of posts receiving at least one comment; creator retention |
| **Quality** | Hide / "not interested" rate; reports; % of feed from first-degree connections vs viral content; engagement-bait prevalence |
| **Ads** | Feed ad CTR, revenue per session, ad hide rate |

::candidate 01:00
**4. North Star:** **weekly members with a "valuable feed session"**: a session with at least one meaningful interaction (comment, share, follow, profile visit, job click) or a long dwell on a professional post.

Why: likes and impressions are easy to inflate with bait ("Agree?" posts). Meaningful interactions are closer to the mission.

::interviewer
How would you stop the feed from rewarding engagement bait?

::candidate 01:25
Three ways: (1) **rank on quality signals**, not just likes: dwell time, comments with substance, "saved" and shares, and downrank known bait patterns; (2) **measure bait prevalence** with classifiers and human rating panels as a guardrail; (3) **survey members** ("Was this post valuable to you?") and use those ratings to calibrate ranking. LinkedIn has said publicly it adjusted ranking toward expertise and knowledge content, which supports this direction.

::candidate 01:50
**5. Guardrails:** hide and report rates, bait prevalence, member-reported feed quality, creator diversity (not just a few viral creators), session satisfaction.

**Summary:** LinkedIn's feed should be measured by meaningful professional value, not raw engagement. My North Star is weekly members with a valuable feed session, supported by creator health metrics and quality guardrails against engagement bait.

::scorecard
- **Mission-aligned North Star** that avoids vanity likes.
- **Two-sided view** including creators.
- **Concrete anti-bait measurement.**
