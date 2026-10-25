::interviewer 00:00
What's your favourite product, and how would you improve it?

::candidate 00:05
My favourite product is **Spotify**. Can I take a few seconds to structure my answer?

::interviewer
Of course.

::candidate 00:15
I'll cover three things: **why I love it** (what job it does and why it works), then **one improvement** with the usual flow (goal, users, pains, ideas, prioritization, metrics), and finally **how I'd measure it**. Does that work?

::interviewer
Yes.

::coach
For "favourite product", the interviewer is testing passion *and* critical thinking. Always prepare 2–3 products in advance: one consumer, one B2B or less obvious, one physical. Choose a product you use deeply.

::candidate 00:35
**Why I love it.** The job Spotify does for me: *"When I'm doing something else, like commuting, working out or cooking, give me the right audio with zero effort."* It does this brilliantly through:
- **Personalization:** Discover Weekly and Daily Mixes feel like a friend who knows my taste. That's powered by years of listening data, a data network effect competitors find hard to match.
- **Frictionless continuity:** Spotify Connect moves playback from my phone to my speaker to my laptop seamlessly.
- **Breadth:** music, podcasts and audiobooks in one app.

**Why it works as a business:** freemium (ads on the free tier) funnels users into Premium; personalization drives listening time, which drives retention. If I had to guess their North Star, it would be **time spent listening** by active users.

::candidate 01:30
**Improvement.** Clarifying question: should I assume I'm a PM at Spotify with a specific goal, or choose one myself?

::interviewer
Choose yourself.

::candidate 01:40
I'll pick the goal: **increase listening time in a context where Spotify underperforms**, without hurting personalization quality.

**Segments of listening contexts:**
- Solo personal listening (commute, workout): **excellent** today.
- **Group / shared listening** (car trips with friends, dinner parties, family at home, couples): **weak**.
- Background work listening: good.
- Kids: OK via Spotify Kids.

I'll focus on **shared listening**. It's very common: family car trips, house parties, couples cooking together. And Spotify is fundamentally designed around one person's account.

::candidate 02:20
**Pain points** (journey of a dinner party: host Maya, 6 friends):
1. **One person controls the music.** Friends shout requests or grab the host's phone.
2. **Tastes clash.** The host's playlist doesn't fit everyone.
3. **Recommendation pollution.** After the party, Maya's Discover Weekly is full of her friends' reggaeton and kids' songs. A real complaint among families.
4. **Friends without Premium** can't easily contribute.
5. **Mood mismatch:** energy too high or too low for the moment.

**Prioritize:** (1) + (2) are the core shared-listening experience (frequent during the session); (3) is a big retention-hurting side effect for families (every day after). I'll combine them into one solution.

::candidate 03:00
**Ideas:**
1. **Group session ("Blend Live"):** host starts a session, guests scan a QR code (no account needed for basic voting). The queue blends everyone's tastes using their profiles if they have one, or quick genre picks if not. Guests can add songs and upvote.
2. **"Guest mode" protection:** anything played in a group session or on shared speakers doesn't affect the host's taste profile, unless she opts in.
3. **Vibe dial:** a shared slider for energy (chill → dance) that adjusts the queue.
4. **Household profiles on smart speakers:** voice recognition switches between family members.

**Prioritize with impact and effort:**

| Idea | Reach | Impact | Effort | Notes |
|---|---|---|---|---|
| Group session | High (parties, cars, offices) | High | Medium | Brings non-users in, a growth loop |
| Guest mode protection | High (families) | Medium–high (retention) | Low | Should ship with the session |
| Vibe dial | Medium | Medium | Low | Nice add-on |
| Household voice profiles | Medium | Medium | High | Depends on speaker partners |

**Recommendation:** **Group session + guest mode protection**, with the vibe dial as a small addition.

::interviewer
Spotify already had Group Session and Blend. What's new?

::candidate 04:00
True, and that's a good point. Blend creates a mixed playlist *asynchronously* between two to ten people, and group sessions exist for Premium users. Gaps I see: friction for non-Premium or non-user guests, and **no protection for the host's taste profile**. My version focuses on (a) zero-friction joining via QR without an account, (b) live voting, and (c) guest mode protection on by default. If I were the PM, I'd first check usage data for the existing features to see where people drop off.

::coach
If the interviewer points out the feature exists, don't panic. Acknowledge it, explain the specific gaps, and say you'd look at the data. It shows humility and knowledge of the product.

::candidate 04:40
**Metrics:**
- **Primary:** listening hours in group sessions per week; group sessions per active user.
- **Growth:** new sign-ups from guests who joined a session (a viral loop).
- **Retention:** host Discover Weekly skip rate after parties (should drop with guest mode).
- **Guardrails:** personal listening time (no cannibalization), session crash rate, complaints about guests' explicit content (add a host filter).

**Summary:** I love Spotify because personalization makes effortless listening possible. Its weak spot is shared listening, so I'd build a zero-friction group session with live voting and protect the host's taste profile by default. Measured by group listening hours, guest sign-ups and lower skip rates.

::scorecard
- **Showed product love with depth:** job, mechanics, business model, likely North Star.
- **Found a non-obvious segment** (shared listening) with a real pain (profile pollution).
- **Handled "it exists" gracefully** and said what's different.
- **Growth loop and guardrails** included.
