::interviewer 00:00
How would you improve Duolingo's long-term retention?

::candidate 00:05
Clarifying questions:
1. Which period is the concern: early churn (first week) or long-term (month 3+)?
2. Free users, Super subscribers, or both?
3. Do we have data on why people leave?

::interviewer
Month 3 onwards. Both. Assume surveys say "I'm not making real progress" is a top reason.

::candidate 00:25
That's an important clue. Duolingo is excellent at **habit formation** (streaks, notifications, leagues, gamification), which explains strong early retention. But long-term retention needs **perceived progress toward a real goal**. Habits alone fade when the reward feels hollow.

**Goal:** raise month-6 retention by making learners feel and achieve real progress.

Plan: segments → why progress feels missing → ideas → prioritize → metrics (including learning guardrails).

::candidate 00:55
**Segments at month 3+:**
- **Goal-driven learners** (trip, move abroad, exam, partner's family): concrete deadline.
- **Casual brain-trainers:** enjoy the game, don't care about fluency.
- **Intermediate plateauers:** finished the basics, now feel stuck.
- Kids/students using it for school.

I'll focus on **intermediate plateauers**, with goal-driven learners as a close second. They're the group saying "I'm not making real progress", and they're the most likely to pay for real outcomes.

**Persona:** Emma, 31, 210-day streak in Spanish. Can't hold a conversation; froze when ordering food on holiday in Madrid. "I'm good at Duolingo, not at Spanish."

::candidate 01:35
**Root causes:**
1. **Skills gap:** lessons focus on recognition and translation; little speaking and listening at natural speed.
2. **No real-world proof:** progress is shown as XP and units, not abilities.
3. **Repetition:** content at intermediate level feels similar.
4. **Streak anxiety:** for some, the streak becomes a chore; one missed day → they quit entirely.

**Prioritize:** (1) + (2) together: **real-world ability and proof of it**.

::candidate 02:00
**Ideas:**
1. **Real-world milestones:** "You can now order at a café" → unlocked by passing a short **AI role-play conversation** (speaking with an AI waiter). Celebrate it as a real achievement.
2. **Ability-based progress view:** "You can: introduce yourself ✅, order food ✅, talk about your weekend 🔜" + an estimated CEFR level (A2 → B1).
3. **Goal-based paths:** "Trip to Spain in 3 months" → a curriculum focused on travel situations with a countdown.
4. **Immersive content at intermediate level:** short stories, podcasts, videos with adapted speed.
5. **Streak flexibility:** streak repair, "weekend amulets", reframe as "weekly goal" for some users.

::interviewer
AI conversations are expensive to run. Is it worth it?

::candidate 02:40
I'd frame it in unit economics. If AI conversations meaningfully increase month-6 retention and Super conversion among intermediate users, the lifetime value increase can outweigh compute costs. I'd (a) offer limited free conversations (e.g. one milestone per week) and more in Super, (b) use smaller models for simpler scenarios, (c) A/B test the effect on retention and conversion before rolling out. Duolingo has already moved in this direction with AI features in higher tiers, which suggests it can work.

::candidate 03:10
**Prioritize:**

| Idea | Fixes "no progress" | Retention impact | Cost |
|---|---|---|---|
| Real-world milestones + AI role-play | ✅✅✅ | High | Medium–high (compute) |
| Ability-based progress view | ✅✅ | Medium | Low |
| Goal-based paths | ✅✅ | High for goal-driven | Medium (content) |
| Immersive content | ✅ | Medium | High (content) |
| Streak flexibility | – | Medium (prevents rage-quits) | Low |

**Recommendation:** ability-based progress view (cheap, immediate) + real-world milestones with AI role-play checkpoints + streak repair as a quick fix.

**Metrics:**
- **North Star for the initiative:** month-6 retention of users who reach intermediate level.
- % reaching milestones, conversation completion rate, self-reported confidence, Super conversion among intermediates.
- **Learning guardrails:** proficiency test scores (e.g. Duolingo English Test-style assessments) shouldn't drop; we want real learning, not easier games.
- **Cost guardrail:** AI cost per active user vs LTV uplift.

**Summary:** Duolingo is great at building habits, but long-term users leave when they don't see real-world progress. Showing progress as abilities and proving it with AI role-play milestones turns XP into confidence, measured by month-6 retention of intermediate learners with learning outcomes as a guardrail.

::scorecard
- **Diagnosed a deeper cause** (habit vs progress) from the data hint.
- **Unit-economics answer** for AI cost.
- **Learning-outcome guardrail** prevents optimizing pure engagement.
