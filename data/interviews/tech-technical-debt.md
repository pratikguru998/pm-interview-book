::interviewer 00:00
How do you decide how much time your team should spend on technical debt?

::candidate 00:05
I'll answer with how I'd (1) understand and quantify tech debt, (2) prioritize it alongside features, (3) allocate capacity, and (4) communicate it to stakeholders.

**What tech debt is:** shortcuts or outdated code and architecture that make future work slower or riskier, like financial debt that accrues interest. Some debt is a healthy trade-off (ship fast, clean up later); unmanaged debt slows the team down and causes incidents.

**1. Understand and quantify.** I'd ask engineering to list the main debt areas and quantify their "interest":
- **Velocity cost:** "Features touching the billing module take 3× longer."
- **Reliability cost:** "This service causes 4 incidents a month."
- **Risk:** security vulnerabilities, unsupported libraries, scaling limits ("this database will hit its limit at 2× traffic").
- **People cost:** on-call burden, morale.

::candidate 00:50
**2. Prioritize alongside features.** Treat major debt items like roadmap items with impact and effort:

| Debt item | Impact | Effort | Priority |
|---|---|---|---|
| Billing module refactor | Unblocks multi-currency (Q3 goal), 3× faster billing work | 6 weeks | High |
| Flaky test suite | Saves 5 engineer-hours a week, faster releases | 2 weeks | High |
| Old logging library | Low risk | 1 week | Low |

The best debt work **connects to business goals**: "Refactoring billing enables multi-currency pricing for Europe" is much easier to prioritize than "clean up billing code".

**3. Allocate capacity.** Two mechanisms:
- **A steady baseline** of ~15–20% capacity for ongoing hygiene (small fixes, upgrades, tests), owned by engineering.
- **Dedicated projects** for big items, prioritized on the roadmap like features.
I'd adjust the baseline based on signals: rising incident rates, slowing delivery, or growing on-call load mean we need more.

::interviewer
What if leadership pushes back and wants only features?

::candidate 01:45
I'd use data: show how debt affects what leadership cares about: delivery speed ("our cycle time increased 40% in a year"), reliability (incidents, customer-facing outages), and upcoming goals that are blocked. I'd frame it as **investment with returns**, e.g. "6 weeks now saves ~2 weeks on every billing feature and enables Europe launch." I'd also show the trend over time: debt that isn't addressed gets more expensive.

**4. Communicate:** include tech health metrics in regular updates (incident count, cycle time, deploy frequency), so debt is visible, not a surprise.

**Summary:** quantify the "interest" tech debt charges (velocity, reliability, risk), prioritize it next to features by impact, especially when it unblocks goals, keep a steady 15–20% baseline plus dedicated projects for big items, and communicate it in business terms.

::scorecard
- **Quantified tech debt** in business terms.
- **Prioritization table** connecting debt to goals.
- **Practical allocation model** with adjustment signals.
- **Stakeholder pushback** handled with data and investment framing.
