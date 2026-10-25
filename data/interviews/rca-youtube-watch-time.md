::interviewer 00:00
YouTube watch time is down 3% month over month, but DAU is flat. Why?

::candidate 00:05
Clarifying questions:
1. Is the decline gradual over the month, or did it happen suddenly?
2. Global or specific regions?
3. All devices?

::interviewer
Gradual. Global. You'll need to dig into devices.

::candidate 00:20
Since DAU is flat, the same number of people are coming, but watching less. I'll **decompose** watch time:

**Watch time = DAU × sessions per DAU × minutes per session.**

DAU is flat, so either sessions per user or minutes per session fell. Can I see which?

::interviewer
Sessions per user are flat. Minutes per session are down.

::candidate 00:40
So people come as often but watch less each time. Hypotheses:

1. **Mix shift to Shorts:** more time spent on Shorts (short videos) instead of long-form. Engagement isn't necessarily worse, but minutes per session can drop if Shorts sessions are shorter, or if Shorts replace long-form viewing.
2. **Seasonality:** e.g. back to school or summer ending (gradual change). Compare with the same period last year.
3. **Recommendation changes:** a ranking update (or experiments) surfacing shorter videos or reducing autoplay chains.
4. **Device mix:** TV viewing (long sessions) down, mobile up.
5. **Content supply:** a major creator or sports event ended.
6. **Competition** for long-form attention (e.g. a streaming service's big release).
7. **Autoplay settings or ad load changes:** more ads → people stop earlier.

Can I see minutes per session by **surface** (Shorts, Home feed, Search, Watch Next) and by **device** (mobile, TV, desktop)?

::interviewer
TV is flat. Mobile minutes per session are down. Shorts share of mobile time grew notably this month.

::candidate 01:20
That supports the **Shorts mix shift** hypothesis on mobile. Next questions:
- Did **long-form** watch time on mobile drop, or only the average session length?
- Was there a change pushing Shorts more prominently (e.g. a new Shorts entry point or ranking change)?
- Is **total ad revenue** affected? Shorts typically monetizes less per minute than long-form, so that matters.

::interviewer
Yes, there was a test that increased Shorts placement in the mobile Home feed. Long-form mobile minutes are down.

::candidate 01:45
**Root cause (likely):** the experiment that increased Shorts placement on mobile Home is **cannibalizing long-form viewing**. Sessions continue, but they're filled with shorter content, lowering watch time and probably ad revenue per user.

**Decide what to do (it's a trade-off, not just a bug):**
- Evaluate the experiment holistically: total watch time, **revenue per user**, retention, satisfaction (surveys), and **long-term** effects (do Shorts users stay with YouTube rather than leave for TikTok?).
- If total time and revenue are down without long-term benefit → reduce Shorts placement or re-balance ranking.
- If retention among younger users improves (they'd otherwise leave for competitors) → the trade-off may be worth it strategically, but needs leadership alignment on the metric.

**Summary:** Watch time fell because minutes per session dropped on mobile, driven by an experiment that pushed Shorts higher in the Home feed and cannibalized long-form viewing. The decision now is a strategic trade-off, evaluated on total time, revenue and long-term retention.

::scorecard
- **Formula decomposition** narrowed it immediately.
- **Many hypotheses**, then targeted data cuts.
- **Recognized the result as a strategic trade-off**, not just a bug.
