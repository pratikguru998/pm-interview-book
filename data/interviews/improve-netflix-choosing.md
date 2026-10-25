::interviewer 00:00
Netflix users spend too long choosing what to watch. Improve it.

::candidate 00:05
Clarifying questions:
1. Do we have data showing how long people browse, and how many leave without watching?
2. Which device: TV or mobile?
3. Any user group in particular?

::interviewer
Assume the average browse time before playing is 10 minutes, and 20% of sessions end without anything played. Mostly TV.

::candidate 00:25
Those are useful numbers. **20% of sessions with no play** is serious: each one is a moment where Netflix failed to deliver value, and repeated failures likely predict cancellation. **Goal:** reduce time to play and sessions with no play, while making sure people are satisfied with what they choose (not just that they pick faster).

Plan: segment who struggles → why → ideas → prioritize → metrics.

::candidate 00:55
**Segments:**
- Solo viewers who know what they want (fast).
- **Solo viewers with no plan** ("something to watch tonight").
- **Couples or families deciding together**: two or more tastes, negotiation.
- Kids profiles.

I'd check data on which sessions have the longest browse time. My hypothesis: **group viewing on the TV** has the longest decisions and the highest no-play rate. I'll focus there, but solutions should also help solo viewers.

::candidate 01:25
**Why choosing takes long:**
1. **Too many options** (choice overload).
2. **Uncertainty:** "Will I like it?" Thumbnails and synopses aren't enough.
3. **Time commitment unknown:** a 3-season series vs a 90-minute film.
4. **Mood mismatch:** "I want something light", but rows are organized by genre.
5. **Group conflict:** different tastes; one person scrolls while the other vetoes.
6. **TV navigation is slow** (remote, rows).

**Prioritize:** (5) group conflict and (4) mood/time mismatch are the most specific and solvable. (2) uncertainty applies to all.

::candidate 02:00
**Ideas:**
1. **"Watch together" match:** each person swipes on their phone (yes/no on 15 suggestions picked for the group); matches appear on the TV. Gamifies the negotiation.
2. **Mood + time filters:** "I have 45 minutes and want something funny" → a short list of 5.
3. **Shuffle play / "Play something":** one-click play of a personalized pick.
4. **Better previews:** autoplay trailers with honest tags ("Slow-burn", "Light", "Episodes are 25 minutes").
5. **Continue-watching for groups:** a shared queue for the couple's series.

**Prioritize:**

| Idea | Time saved | Group fit | Effort | Satisfaction risk |
|---|---|---|---|---|
| Watch together match | High | ✅✅ | Medium | Low |
| Mood + time filters | High | ✅ | Low | Low |
| Shuffle play | Very high | ✅ | Low (exists) | Medium (may not satisfy) |
| Better previews | Medium | ✅ | Medium | Low |

**Recommendation:** mood + time filters on the home screen (broad reach, low effort) and a "Watch together" match mode for couples.

::interviewer
How would you know people are satisfied, not just faster?

::candidate 02:55
Measure **what happens after choosing**: completion rate of the title chosen (or 30+ minutes watched for films), thumbs up rate, and whether they return the next day. A fast choice that's abandoned in 5 minutes isn't success. I'd use "satisfied plays" as the primary metric: a play that leads to at least 70% completion or 30+ minutes.

::candidate 03:20
**Metrics:**
- **North Star for this initiative:** % of sessions with a satisfied play.
- Median time to play, % of sessions with no play, feature usage (filters, watch together), completion rate of chosen titles.
- **Long term:** retention for households that use these features vs a holdout.
- **Guardrails:** total viewing hours (shouldn't drop), discovery diversity (we don't want filters to only show top-10 titles).

**Summary:** Long browsing, especially when choosing as a group, leads to 1 in 5 sessions ending without watching anything. Mood and time filters plus a swipe-to-match mode for couples cut decision time, measured by satisfied plays rather than speed alone.

::scorecard
- **Used the numbers given** and connected them to churn.
- **Defined a quality-adjusted metric** ("satisfied plays") instead of just speed.
- **Segment hypothesis to validate with data.**
