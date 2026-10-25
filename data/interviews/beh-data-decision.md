::coach
Illustrative story: use your own. Show how you framed the question, which data you used (quantitative and qualitative), how you avoided misleading conclusions, and the measured result.

::interviewer 00:00
Tell me about a decision you made using data.

::candidate 00:05
**Situation.** I was PM for a mobile photo editing app with a freemium model. Premium conversion had been flat at around 2% for months. The team's plan was to build more premium features (new filters, AI tools) to make Premium more attractive.

**Task.** Before committing a quarter to new features, I wanted to understand *why* conversion was flat.

::interviewer
What did you look at?

::candidate 00:30
**Action.**
1. **Funnel analysis:** I mapped the path to purchase: user sees a premium offer → views the paywall → starts a trial → converts. The surprise: **70% of active users had never even seen the paywall**. It was only reachable through the settings menu or a small badge on premium tools.
2. **Cohort analysis:** users who **hit a free-tier limit** (e.g. tried to export in high resolution, or used a premium tool) converted at **5× the rate** of other users. The moment of need mattered.
3. **Qualitative check:** I read reviews and did 8 user interviews. Many users didn't know Premium existed or what it included.
4. **Avoiding a false conclusion:** the 5× could be selection bias (more engaged users hit limits and also convert). So instead of just assuming, I designed an **A/B test**: show a contextual upgrade prompt at the moment users hit a limit, explaining what they'd get, vs control.

::interviewer
And the result?

::candidate 01:20
**Result.**
- The contextual prompt increased premium conversion by **35%** (from ~2.0% to ~2.7%), statistically significant over 3 weeks.
- **Guardrails** stayed healthy: 7-day retention unchanged; app rating unchanged (we capped the prompt to once per session).
- We **delayed the new-feature plan** by a quarter, saving engineering time, and used it later for features informed by what users tried to do at the paywall.

**Learning.** Diagnose the funnel before building more. And when data shows a correlation (limit-hitters convert more), test it causally with an experiment before betting on it.

::scorecard
- **Funnel + cohort + qualitative** evidence.
- **Recognized selection bias** and ran an A/B test.
- **Guardrails** monitored; clear quantified result.
- **Changed the team's plan** based on data.
