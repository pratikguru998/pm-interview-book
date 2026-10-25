::interviewer 00:00
Engineering says the feature you planned for one month will actually take three. What do you do?

::candidate 00:05
Clarifying questions:
1. Why is the one-month deadline important: a customer commitment, a marketing launch, an OKR?
2. What's the feature, roughly?
3. Is the estimate new information (e.g. discovered complexity), or did we never align properly?

::interviewer
It's a self-serve billing portal for a SaaS product. Leadership wants it in a month because support is overwhelmed with billing tickets. Engineers discovered the old billing system is messy and needs refactoring.

::candidate 00:35
Thanks. My approach:
1. **Understand the estimate** with engineering, as partners.
2. **Re-anchor on the goal** (reduce billing tickets).
3. **Generate options** (scope, phasing, resources, date).
4. **Decide together** and communicate.

::candidate 00:50
**1. Understand the estimate.** I'd sit with the engineering lead and ask:
- What exactly takes the extra time? The refactor? Integrations? Testing?
- Which parts are **risky unknowns** vs known work?
- Is there a version of the feature that avoids touching the messiest parts?

Not to push them to "go faster", but to find levers.

**2. Re-anchor on the goal.** The real goal isn't "a billing portal"; it's **fewer billing support tickets**. So: what are the top ticket types? Let's say: (1) "download my invoice" 40%, (2) "update my card" 30%, (3) "change plan" 20%, (4) other 10%.

::interviewer
Assume those numbers are right.

::candidate 01:20
Then **70% of tickets come from two simple actions**: downloading invoices and updating payment cards. Those might not need the full refactor: invoice download is read-only, and card updates can often go through the payment provider's hosted page (e.g. Stripe's customer portal) without touching the old billing logic.

**3. Options:**

| Option | Time | Ticket reduction | Risk |
|---|---|---|---|
| A. Full portal | 3 months | ~90% | Delay; ticket backlog continues |
| **B. Phase 1: invoices + card update (via payment provider's hosted page)** | ~1 month | **~70%** | Low; avoids the messy core |
| C. Add more engineers | Uncertain | – | Onboarding cost; refactors don't parallelize well |
| D. Interim: support macros + self-serve invoice emails | 1–2 weeks | ~20–30% | Very low |

**Recommendation: B + D, then the refactor.**
- Week 1–2: quick wins (automatic monthly invoice emails, improved help articles, support macros).
- Month 1: Phase 1 portal (invoice download + hosted card update).
- Months 2–3: refactor and plan changes (Phase 2), with a clear plan.

::interviewer
What if leadership insists on the full thing in one month?

::candidate 02:05
I'd present the trade-offs clearly with data: "Phase 1 delivers ~70% of the ticket reduction in a month at low risk. Forcing the full scope in a month would mean skipping the refactor, increasing the risk of billing errors, which are very costly (wrong charges damage trust and create even more tickets)." Usually, framing it as *outcome per month* and *risk* gets alignment. If they still insist, I'd escalate the risk explicitly in writing and ask for a decision with full awareness, but I'd also look for additional help (e.g. a contractor for the payment provider integration).

**4. Communicate:** a short written update to leadership and support: the reason for the change, the phased plan, expected ticket reduction by date, risks. Weekly progress updates.

**Summary:** Treat the estimate as information, not resistance. Go back to the real goal (fewer tickets), use data to find the 20% of scope that delivers 70% of the value, phase the work, and communicate trade-offs clearly.

::scorecard
- **Partnership with engineering** instead of pressure.
- **Re-anchored on the outcome**, using ticket data to re-scope.
- **Options table** with a phased, low-risk plan.
- **Handled leadership pushback** with outcome-per-month and risk framing.
