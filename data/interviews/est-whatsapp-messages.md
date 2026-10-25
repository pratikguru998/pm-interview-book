::interviewer 00:00
How many messages are sent on WhatsApp per day?

::candidate 00:05
Clarification: should I count messages *sent* (one per message, even in a group), not deliveries to each group member? And text, voice notes, photos all count as messages?

::interviewer
Yes, messages sent. All types count.

::candidate 00:15
**Formula:** messages/day = daily active users × messages sent per DAU per day.

**1. Monthly active users:** WhatsApp has more than **2 billion** monthly users; I'll use **~2.5B**.

**2. DAU/MAU:** messaging apps are very sticky. People check WhatsApp daily. I'll assume **70%** → **~1.75B DAU**.

**3. Messages per DAU per day:** varies hugely by segment:

| Segment | Share of DAU | Messages/day |
|---|---|---|
| Heavy users (primary communication app; India, Brazil, Indonesia; active groups) | 30% | 120 |
| Moderate users | 40% | 30 |
| Light users (occasional family messages) | 30% | 8 |

Weighted: 0.3×120 + 0.4×30 + 0.3×8 = 36 + 12 + 2.4 = **~50 messages/day**.

::candidate 01:10
**Calculation:** 1.75B × 50 ≈ **87.5 billion messages per day**, so roughly **~90 billion**.

::interviewer
Meta has said over 100 billion messages a day. Why might yours be lower?

::candidate 01:25
Plausible reasons: (1) heavy users may send even more, since group chats and quick replies add up fast; (2) WhatsApp's count may include messages to businesses, status updates or multiple counts for media; (3) DAU/MAU might be higher than 70%. My estimate is within about 15% of the reported figure, which is good for an estimate. I'd probably revise the heavy-user assumption upward.

**Summary:** ~1.75B daily users × ~50 messages/day ≈ **90 billion messages per day**, in line with the publicly reported 100B+.

::scorecard
- **Segmentation** of the key behaviour assumption.
- **Graceful comparison** with a known figure, identifying which assumption to revise.
