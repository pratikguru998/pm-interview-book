::interviewer 00:00
Improve YouTube for small creators.

::candidate 00:05
Clarifying questions:
1. How do we define small: under 1,000 subscribers? Under 10,000?
2. Long-form videos, Shorts, or both?
3. What's the goal: creator retention, more uploads, or monetization?

::interviewer
Under 1,000 subscribers. Long-form. Goal is your choice.

::candidate 00:25
**Goal:** retain new creators, i.e. help them keep uploading past the first 3 months. Long-term content supply and diversity depend on new creators, and most quit early when they see little progress. That's a big leak in YouTube's supply side.

Plan: creator segments → journey → why they quit → ideas → prioritize (balancing viewer experience) → metrics.

::candidate 00:50
**Small creator segments:**
- Hobbyists (share for fun, low ambition)
- **Aspiring creators** (want to grow, maybe earn)
- Small businesses / experts (content as marketing)
- Students and educators

I'll focus on **aspiring creators**: high effort, high churn risk, and the future top creators come from here.

**Persona:** Leo, 24, makes cooking videos. 8 videos in 2 months, average 40 views each, 23 subscribers. Spends 10 hours per video.

::candidate 01:25
**Journey and pains:**
1. Uploads a video → checks views every hour → 12 views.
2. Opens YouTube Studio analytics → sees CTR, retention graphs → doesn't know what to change.
3. Compares himself to big creators → discouraged.
4. No feedback, no community → "Is anyone watching?"
5. Monetization (YPP threshold) feels impossibly far away.
6. Quits after video 12.

**Root causes:** (1) **no audience to start with**, so there's no signal; (2) **no actionable feedback**; (3) isolation; (4) unclear milestones.

**Prioritize:** (1) cold start and (2) actionable feedback, because they make effort feel worthwhile. Progress drives motivation.

::candidate 02:00
**Ideas:**
1. **AI channel coach:** plain-language insights after each video: "Viewers dropped at 0:20; your intro is long. Try starting with the finished dish." Compare with similar small channels, not MrBeast.
2. **New creator exploration slots:** a small % of recommendation impressions go to promising new videos shown to *matched* audiences (e.g. people who watch home cooking), and the system learns faster whether a video resonates.
3. **Creator communities:** connect creators in the same niche for collaborations and feedback.
4. **Milestones and rewards:** first 100 subscribers badge, "your first video with 100% retention in the first 30 seconds".
5. **Early monetization paths:** tips or memberships (where policy allows) before YPP.

::interviewer
Showing unproven videos might hurt viewer satisfaction. How do you handle that?

::candidate 02:40
That's the key trade-off. I'd **protect viewers with guardrails**: only include videos that pass basic quality signals (audio quality, not spam, policy-compliant), show them to audiences with matching interests, limit exploration to a small share (e.g. 1–2% of impressions), and stop promoting a video quickly if early satisfaction signals are poor. I'd run it as an experiment and measure viewer satisfaction surveys and watch time on exploration impressions compared with normal ones.

::candidate 03:15
**Prioritize:**

| Idea | Fixes cold start | Feedback | Viewer risk | Effort |
|---|---|---|---|---|
| AI coach | – | ✅✅ | None | Medium |
| Exploration slots | ✅✅ | ✅ (signal) | Medium (guardrails) | Medium |
| Communities | ✅ (collabs) | ✅ | None | Medium |
| Milestones | – | ✅ (motivation) | None | Low |

**Recommendation:** AI coach (zero viewer risk, high creator value) + exploration slots as a controlled experiment + milestones as a quick win.

**Metrics:**
- **North Star:** 90-day new-creator retention (% still uploading after 90 days).
- Uploads per creator in the first 90 days; coach tip adoption; small creators reaching 100 subscribers.
- **Viewer guardrails:** satisfaction and watch time on exploration impressions, "not interested" rate.
- **Long-term:** the share of total watch time from creators who started in the last 12 months (supply health).

**Summary:** Small creators quit because they have no audience and no clear feedback. An AI coach with specific advice plus a guarded exploration programme that gives new videos a fair test helps them improve and grow, measured by 90-day creator retention, while protecting viewer satisfaction.

::scorecard
- **Supply-side ecosystem thinking.**
- **Exploration vs exploitation trade-off** handled with concrete guardrails.
- **North Star directly tied to the goal** (creator retention).
