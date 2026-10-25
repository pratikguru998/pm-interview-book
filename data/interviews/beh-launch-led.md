::coach
Illustrative story: use a real launch you owned. Cover the phases briefly (discovery → definition → build → launch → measure), but spend most time on **1–2 hard decisions** you made. Interviewers probe the hard moments.

::interviewer 00:00
Walk me through a product launch you led end to end.

::candidate 00:05
Sure. I'll cover it phase by phase and then go deeper on the hardest moment.

**Context.** I was PM for billing at a B2B SaaS company (~3,000 business customers). Billing was the #1 source of support tickets: ~1,200 per month.

**1. Discovery.** I analysed ticket categories: invoice downloads (40%), payment method updates (30%), plan changes (20%). I interviewed 20 finance admins: they wanted self-serve without contacting support, especially at month-end.

**2. Definition.** I wrote a PRD: problem, target users (finance admins), success metric (**reduce billing tickets by 40%**), scope (self-serve billing portal: invoices, payment methods, plan changes), and explicit non-goals (no new pricing models).

**3. Build.** Worked with design on prototypes, tested with 6 customers, and iterated twice. With engineering, we planned 3 phases to deliver value early.

::interviewer
What was the hardest moment?

::candidate 01:05
**Hard moment.** Halfway through, our legal team flagged that **plan changes in two countries (Germany and Brazil) required specific tax and invoice handling**: e.g. legally compliant invoices with specific fields, and rules about mid-cycle changes. Building it properly would add 6 weeks and risk the launch date that sales and support were counting on (we'd promised a launch before the year-end billing peak).

**My options:**
1. Delay everything 6 weeks.
2. Launch everywhere and fix later: not acceptable (legal risk).
3. **Launch plan changes everywhere except those two countries**, where customers would still contact support for plan changes, and add them in v2.

I chose option 3 after aligning with legal, support and sales. I made sure support had a clear macro for those countries, and sales knew exactly what to tell customers.

**4. Launch.**
- **Beta** with 50 accounts for 3 weeks → fixed 12 usability issues (e.g. confusing invoice filters).
- **GA launch** with help articles, an in-app announcement, an email to admins, and training for support and customer success.
- Rollout behind a feature flag in waves of 25% to monitor errors.

**5. Results.**
- Billing tickets dropped **48%** within two months (target was 40%).
- Admin satisfaction (CSAT for billing) improved by **15 points**.
- v2 added the two countries a quarter later.

**Learnings.** Involve legal and compliance in **discovery**, not mid-build. I now include a compliance review in the definition phase for anything involving money, data or regulated countries.

::scorecard
- **End-to-end ownership** with clear phases.
- **Hard decision** under constraints with options and trade-offs.
- **Cross-functional coordination** (legal, support, sales).
- **Quantified results** that beat the target, plus a process lesson.
