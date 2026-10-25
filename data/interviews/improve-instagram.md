::interviewer 00:00
How would you improve Instagram?

::candidate 00:05
Let me clarify a few things:
1. Any particular surface? Feed, Reels, Stories, DMs, Explore?
2. What's the company goal right now: time spent, creators, sharing among friends, or monetization?
3. Any user group you care about?

::interviewer
Up to you. Pick something and justify it.

::candidate 00:25
Then I'll pick a goal based on what I see as a strategic risk: **personal sharing among friends**. Instagram's moat is the social graph, but feeds have shifted towards Reels and recommended content, and many users (especially Gen Z) post less on their main grid and share mostly via DMs, close friends, or other apps. If friends stop sharing, the graph weakens over time.

**Goal:** increase the number of people who share personal moments with friends on Instagram.

Plan: segments → focus → pains → ideas → prioritize → metrics. OK?

::interviewer
Good.

::candidate 01:05
**Segments:**
- **Creators and brands:** post often, optimize for reach. Well served.
- **Passive consumers:** scroll Reels, rarely post.
- **Friend sharers (18–30):** used to post often, now post rarely on the grid; share in DMs and Stories to close friends.
- **Older users:** post family photos, use Facebook too.

I'll focus on **friend sharers aged 18–30** who have stopped posting to the grid. They're core to Instagram's future and the gap between desire to share and actual posting is large.

::candidate 01:40
**Why they don't post (pains):**
1. **Performance pressure:** posts feel permanent, public, judged by likes. "My grid has to look perfect."
2. **Audience mismatch:** 800 followers including coworkers and family, but they want to share with 20 friends.
3. **Visibility:** friends' posts get buried among Reels and ads, so posting feels pointless.
4. **Effort:** choosing and editing one perfect photo takes time.

This explains why "photo dumps" (carousels of casual photos) and close-friends Stories became popular: they lower pressure.

::candidate 02:20
**Ideas:**
1. **Shared albums:** create an album with friends (a trip, a birthday) where everyone adds photos, visible only to members. Low pressure, collaborative.
2. **Friends feed tab:** a chronological feed of only mutual friends' posts.
3. **Close-friends grid posts:** publish a grid post to a chosen list, hide like counts by default.
4. **Weekly recap prompt:** "Here are 10 photos from your week, share a dump with close friends?" with one tap.

**Prioritize:**

| Idea | Reduces pressure | Increases sharing | Effort | Risk |
|---|---|---|---|---|
| Shared albums | ✅✅ | ✅✅ (many contributors) | Medium | Low |
| Friends feed | – | ✅ (visibility) | Low | Lower ad revenue in that tab |
| Close-friends posts | ✅✅ | ✅ | Low | Fragmentation |
| Recap prompt | ✅ | ✅ | Medium (on-device ML) | Privacy perception |

I'd pick **shared albums**, because each album creates multiple sharers (network effect), it's inherently low pressure, and it's a behaviour not yet well served on Instagram.

::interviewer
Wouldn't that reduce time spent on Reels, which makes more money?

::candidate 03:20
Possibly a little in the short term, and that's why I'd set guardrails. But I'd argue it's a **long-term investment**: friend content brings people back daily and makes the network valuable, which protects ads revenue over years. I'd measure the net effect with a holdout: if total time and ad impressions per user drop by more than an agreed threshold without improving retention, we'd rethink it.

::candidate 03:50
**Shared albums design:**
- Create an album from a group chat or a post; members add photos and videos; comments and reactions inside.
- Default private to members; option to publish a highlight to the grid later.
- Notifications: "Ana added 12 photos to *Lisbon Trip*", a strong reason to return.

**Metrics:**
- **North Star:** weekly users who share personal content (album contributions + friend posts).
- Albums created; contributors per album (target 3+); return visits triggered by album activity.
- **Long-term:** 28-day retention of users who contribute to albums.
- **Guardrails:** total time spent and ad revenue per user (holdout), reports and blocks, privacy settings errors.

**Summary:** Instagram's friend graph is at risk as personal posting drops. Shared albums lower performance pressure and turn one share into many, rebuilding friend sharing, measured by weekly personal sharers, with time spent and ad revenue as guardrails.

::scorecard
- **Strategic goal choice** explained (protecting the moat).
- **Pain points rooted in observed behaviour** (photo dumps, close friends).
- **Handled the revenue trade-off** with a holdout and threshold.
