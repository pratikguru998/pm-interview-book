::interviewer 00:00
Facebook's daily active users dropped 5% week over week. How would you investigate?

::candidate 00:06
OK. Before diving in, I'd like to clarify a few things so I investigate the right problem:
1. **How is DAU defined?** Logged-in users who opened the app, or users who did a meaningful action?
2. **Is the drop sudden or gradual?** A one-day cliff, or a steady decline across the week?
3. **Is it global**, or concentrated somewhere?
4. Is this compared to the same days last week, so weekday effects don't matter?

::interviewer
DAU = users who opened the app or website. It's a sudden drop starting Tuesday. You'll have to investigate the scope. Yes, same days last week.

::candidate 00:35
Thanks. Here's my structure:
1. **Validate the data:** is the drop real?
2. **Internal factors:** did we change something?
3. **External factors:** did the world change?
4. **Segment** to locate the drop.
5. **Decompose** DAU to understand which users disappeared.
6. **Hypothesis → confirm → action**, plus communication.

I'll ask you for data as we go, if that's OK.

::interviewer
Sure.

::coach
Root cause questions are interactive. Announce your structure, then ask the interviewer for specific data cuts. They often play the role of a data analyst.

::candidate 01:00
**1. Validate the data.** First questions:
- Was there any change to **logging or the analytics pipeline** on Tuesday (a new SDK version, an event renamed)?
- Any change to **bot or spam filtering** that removes "users" from the count?
- Do **related metrics** move the same way? If sessions, time spent, posts and ad impressions also dropped ~5%, the drop is probably real. If they're flat, it's probably a tracking issue.

Can I see whether ad impressions and sessions also dropped?

::interviewer
Ad impressions are down about 5% too. No known logging changes.

::candidate 01:30
Then the drop is likely **real**: revenue-related metrics are affected, so it's urgent.

**2. Internal factors** (sudden drops usually come from here):
- **App releases** on Monday/Tuesday: iOS, Android, web.
- **Backend changes or outages:** login service, news feed service, CDN.
- **Experiments:** a large A/B test launched (e.g. a feed ranking change or a new onboarding flow).
- **Notification changes:** fewer push notifications sent means fewer people return.
- **Policy or security changes:** forced logouts, password resets, new verification step.

**3. External factors:**
- **Holidays or events** in big markets (e.g. a national holiday in India or Brazil).
- **Internet shutdowns or outages** in specific countries.
- **App store issues:** app removed or an OS update breaking login.
- **Competitor launch** (usually causes gradual, not sudden, drops).
- **News/PR** affecting trust.

Since it's sudden, I'd prioritize internal changes and country-specific external events.

::candidate 02:20
**4. Segment.** Can I see the drop broken down by **platform** (iOS, Android, web)?

::interviewer
Android is down 12%. iOS and web are flat.

::candidate 02:35
Very useful: the drop is **concentrated in Android**. Next cuts within Android:
- **App version:** is it only the latest version?
- **Country:** global or specific regions?
- **Device / OS version:** specific manufacturers or Android versions?
- **New vs existing users.**

::interviewer
The drop is concentrated in users on app version 412, released Monday. It's global.

::candidate 02:55
That strongly points to the **Monday Android release (v412)**.

**5. Decompose.** DAU = new + retained + resurrected − churned. Which component dropped? If **retained users on v412 aren't opening the app**, possible causes:
- **Crash on launch** or after update.
- **Login bug:** users logged out and can't log back in.
- **Notification bug:** push notifications not delivered, so fewer people open the app.
- **Background refresh change** affecting how "opens" are recorded.

**Data I'd request:** crash rate for v412 vs v411, login success rate, push notification delivery and open rates, app store reviews mentioning v412.

::interviewer
Crash rates look normal. But push notification opens on v412 are down 60%.

::candidate 03:30
So the most likely root cause: **v412 broke push notification delivery or display** on Android. Many daily users open Facebook because of notifications, so DAU drops among them.

**Confirm:** check notification delivery logs (sent vs delivered vs displayed) for v412; check whether the notification permission flow or token registration changed in v412; reproduce on test devices.

**6. Action:**
- **Immediate:** roll back or hotfix v412 (or force an update to a fixed version), and halt the staged rollout.
- **Mitigation:** temporarily lean on other channels (in-app badge counts are lost too; email digests may help).
- **Monitor:** DAU recovery on Android, notification delivery rates.
- **Prevent:** add notification delivery to release health checks and the staged rollout gates, so a drop in push opens automatically halts the rollout.

**Communicate:** tell leadership and affected teams: what's known (Android v412, notifications), impact (~5% DAU, ~5% ad impressions), the fix and ETA, and post-mortem timing.

**Summary:** I validated that the drop was real (ad impressions fell too), prioritized internal causes because it was sudden, segmented to Android v412, decomposed to retained users, and found push notification opens down 60%. The fix is a rollback or hotfix plus better release gating.

::scorecard
- **Clarified the metric and shape of the drop** before investigating.
- **Validated data first**, using related metrics.
- **Systematic segmentation**, asking for specific data cuts like an analyst would.
- **Decomposition + hypothesis testing** led to the root cause.
- **Action, prevention and communication**, which goes beyond diagnosis.
