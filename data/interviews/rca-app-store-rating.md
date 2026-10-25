::interviewer 00:00
Your app's store rating fell from 4.6 to 3.9 in two weeks. What do you do?

::candidate 00:05
Clarifying questions:
1. iOS, Android, or both?
2. Is it the overall average or the recent rating (stores weight recent ratings more)?
3. Any releases or changes in the past two weeks?

::interviewer
Both stores, mostly Android. Recent ratings. There was a release 2 weeks ago with a redesigned home screen.

::candidate 00:25
Plan: (1) read the reviews to find themes, (2) correlate with releases and segments, (3) check quantitative signals, (4) root cause, (5) fix and recover the rating.

**1. Read the reviews.** I'd pull all 1–2 star reviews from the last 2 weeks and categorize them (manually for a sample, or with text classification):
- Crashes / bugs
- New design / "can't find X"
- Performance (slow, battery)
- Pricing / ads
- Login problems

::interviewer
Most complaints are about the new home screen: "Where did my saved items go?" and "too cluttered". Some mention crashes on Android.

::candidate 00:50
Two themes: **(a) the redesign removed or hid a key feature (saved items)** and **(b) Android crashes**.

**2. Correlate:**
- Ratings drop timing matches the release → yes.
- Segment by app version: are low ratings mostly from the new version?
- Android crashes: crash rate by device and OS version for the new release.
- Usage data: did visits to "saved items" drop after the redesign? Did support tickets spike?

**3. Quantitative signals:** session length, retention of existing users since the release, use of key features. If **power users** (who use saved items) are most affected, it's a retention risk, not just a rating issue.

::interviewer
Saved items usage dropped 40%. Android crash rate doubled on two device models.

::candidate 01:20
**Root causes:**
1. The redesign **buried saved items**, a feature loyal users rely on, which caused frustration (40% drop in usage).
2. A **crash bug** on specific Android devices.

**4. Fix:**
- **Crash:** hotfix ASAP for the affected devices; staged rollout with crash monitoring.
- **Saved items:** restore a prominent entry point (e.g. a tab or shortcut on home); show a one-time tooltip: "Saved items moved here". Run a quick A/B test of the entry point if time permits, but the priority is restoring access.
- **Process:** for future redesigns, test with power users and track key feature usage as a launch guardrail.

**5. Recover the rating:**
- Reply to negative reviews explaining the fix ("Saved items are back on the home screen in version X").
- After the fix, prompt satisfied users to rate at positive moments (e.g. after successfully saving an item), using the in-app review prompt (within platform rules).
- Monitor recent rating, crash rate and saved-items usage daily.

**Summary:** Reviews and data showed two causes: the redesign hid a key feature and a crash on certain Android devices. Hotfix the crash, restore and signpost saved items, respond to reviews, and add key-feature guardrails to future redesign launches.

::scorecard
- **Qualitative + quantitative** investigation.
- **Identified two root causes** with data.
- **Fix, recovery and process prevention.**
