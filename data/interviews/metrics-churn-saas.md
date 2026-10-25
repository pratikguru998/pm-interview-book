::interviewer 00:00
How would you measure and reduce churn in a B2B SaaS product?

::candidate 00:05
Clarifying questions:
1. What kind of product and customers: SMB or enterprise?
2. Monthly or annual contracts?
3. Do we have data on why customers leave today?

::interviewer
A marketing analytics tool, mid-market customers, mostly annual contracts. Exit surveys say "not getting enough value" and "too expensive".

::candidate 00:25
Plan: (1) define churn metrics correctly for B2B, (2) leading indicators, (3) a health score, (4) diagnosis of root causes, (5) interventions, (6) how we'd measure success.

**1. Churn metrics:**
- **Logo churn:** % of customers lost in a period.
- **Gross revenue churn:** % of starting revenue lost (cancellations + downgrades).
- **Net revenue retention (NRR):** starting revenue + expansions − downgrades − churn, ÷ starting revenue. Above 100% means expansion outweighs losses; best-in-class SaaS is often 120%+.

With annual contracts, churn happens at **renewal**, so by the time we see it, it's too late. We need **leading indicators**.

::candidate 01:00
**2. Leading indicators:**

| Signal | Why it predicts churn |
|---|---|
| Seat utilization (active users ÷ paid seats) | Unused seats → "we don't need this" |
| Depth of key feature usage (dashboards created, reports scheduled) | Shallow usage → low perceived value |
| Login frequency of admins/champions | Admins drive renewal decisions |
| Champion leaving the company | Common cause of churn |
| Support tickets and sentiment | Frustration |
| Integrations connected | More integrations = higher switching cost |
| Time to first value in onboarding | Slow onboarding → never adopt |

**3. Health score:** combine these into a score per account (e.g. green/yellow/red), and **validate** it: did past red accounts churn more? Tune weights accordingly.

::interviewer
Exit surveys say "too expensive". Should we lower prices?

::candidate 01:45
Not necessarily. In B2B, "too expensive" often means **"not worth the price for the value we get"**, which is a value problem, not a price problem. I'd check: do churned "too expensive" customers have low usage? If yes, the fix is adoption and value delivery. If high-usage customers also say it's too expensive, then it's genuinely pricing, and I'd consider packaging changes (a smaller tier) rather than across-the-board cuts.

::coach
"Too expensive" usually hides a value gap. Checking usage data before cutting prices is a strong analytical move.

::candidate 02:10
**4. Diagnosis:** segment churned accounts by usage level, size, onboarding completion, industry, and reasons. Hypothesis: many churned accounts never reached key activation milestones (e.g. a scheduled report used by their team).

**5. Interventions:**
- **Onboarding to value:** guided setup to the first scheduled report within 14 days; templates per industry.
- **Customer success playbooks:** outreach to yellow/red accounts 90+ days before renewal; business reviews showing ROI.
- **Product:** features that increase depth (automated insights, integrations).
- **Packaging:** a smaller tier for low-usage customers instead of losing them (downgrade > churn).
- **Champion risk:** multi-threading relationships (more than one champion per account).

**6. Measuring success:** gross revenue churn, NRR, logo churn by segment, % of accounts green at renewal, and A/B or cohort comparisons for onboarding changes.

**Summary:** Measure churn with logo churn, gross revenue churn and NRR, but act on leading indicators combined into a validated health score. Treat "too expensive" as a value signal first, then reduce churn with onboarding to value, proactive customer success, depth features and better packaging.

::scorecard
- **Correct B2B churn definitions** including NRR.
- **Leading indicators** and a validated health score.
- **Smart interpretation** of the "too expensive" feedback.
