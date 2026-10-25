::interviewer 00:00
Design a dating product for people over 50.

::candidate 00:06
Sure. Clarifying questions:
1. Standalone app or a feature within something like Facebook Dating or Match?
2. What are users looking for: long-term relationships, companionship, friendship?
3. Any business model expectation?

::interviewer
Standalone app inside Match Group. Relationship types are up to you. It should become a profitable subscription business.

::candidate 00:35
**Goal:** help people over 50 form meaningful, safe connections, measured by real-world relationships formed, in a way that sustains a subscription business. "Over 50" spans 30+ years of life, so segmenting is key.

::candidate 00:55
**Segments by life situation:**

| Segment | Typical age | Needs | Fears |
|---|---|---|---|
| Recently divorced | 50–60 | Confidence, "back in the game" | Rejection, unfamiliar apps |
| **Widowed** | 60–75+ | **Companionship, shared activities** | **Scams, family judgement, guilt** |
| Long-time single | 50–65 | Serious intent | Wasting time |
| Friendship / activity partners | 60+ | Social life | Loneliness |

I'll focus on **widowed people aged 60+**. Loneliness is high, existing apps feel built for young people (swiping, photo-first), and **romance scams heavily target older adults**, with huge reported losses each year. Solving safety is a differentiator.

::candidate 01:45
**Persona: Linda, 67**, widowed 3 years ago. Her friends encourage her to "get out there". She tried a mainstream app: lots of messages from suspicious overseas profiles; one man asked for money for a "medical emergency". She deleted the app.

**Pains:**
1. **Scams and safety**: fake profiles, money requests, meeting strangers.
2. Swipe culture feels shallow; she wants to know people's values and interests.
3. Tech friction: tiny text, confusing features.
4. Awkwardness of first dates; prefers low-pressure settings.
5. Adult children worried about her.

**Prioritize:** (1) safety is a gating factor: without it she leaves. (2)+(4) **low-pressure, interest-based connection** is the core value.

::candidate 02:30
**Solutions:**
1. **Verified profiles:** mandatory video selfie verification + ID option + a "verified" badge. Can't message without verification.
2. **Scam shield:** ML detects scam patterns (asking for money or gift cards, moving off-platform quickly, love-bombing language, inconsistent location) → warns the user in context ("This person mentioned money. Real matches rarely ask for money") and flags for review.
3. **Activity-based matching + local group events:** walking clubs, cooking classes, wine tastings, hosted by partners. Meet people in groups first.
4. **Slow, curated matching:** 3–5 thoughtful matches a day based on values, interests and intentions. Conversation starters drawn from profiles.
5. **Simple UX:** large text, a small number of clear actions, phone support.
6. **Optional "trusted contact"**: share date details with a friend or family member, with a check-in.

::interviewer
Group events are operationally heavy. Is that realistic?

::candidate 03:10
It's heavier than pure software, so I'd make it **partner-driven**: local businesses (cooking schools, wineries, walking groups) list events on the platform; we handle discovery, sign-ups and safety checks and take a fee. Start in 3 retirement-heavy metro areas (Florida, Arizona) to validate demand. If attendance and match rates from events are strong, it becomes a moat competitors' apps don't have.

::candidate 03:45
**Recommendation:**
- **V1:** verified-only community + scam shield + curated daily matches with values/interests + trusted-contact feature + simple UX.
- **V1.5:** local group events in pilot metros.

**Monetization:** a subscription (~$30/month, with discounts on 6-month plans), with event tickets as add-on revenue. Free tier: profile + limited matches, so there's a trial of value before paying.

**Metrics:**
- **North Star:** matches that move to an in-person meeting (self-reported or via event check-ins).
- Conversations reaching 10+ messages; subscriber retention at month 3; event attendance and repeat attendance.
- **Guardrails:** scam reports per 1,000 users, financial loss reports (target near zero), harassment reports, time to remove bad actors.

**Summary:** For widowed people 60+, safety is the gate and low-pressure, interest-based connection is the value. A verified-only app with an ML scam shield, curated matches and partner-run group events builds trust and real-world connection, monetized through subscriptions.

::scorecard
- **Segmented by life situation** and spotted the scam risk as a strategic differentiator.
- **Pushback on operations** answered with a partner model and a pilot.
- **Safety guardrails** are quantified and central.
