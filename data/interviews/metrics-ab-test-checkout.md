::interviewer 00:00
You ran an A/B test on a new checkout page. Conversion is up 2%, but average order value is down 3%. Do you ship it?

::candidate 00:06
Interesting trade-off. Before deciding, a few questions:
1. Are those relative changes (2% of the baseline) or percentage points?
2. Are both results statistically significant?
3. How long did the test run, and on what traffic?
4. What was the goal of the new checkout?

::interviewer
Relative changes. Both significant at 95%. Ran 2 weeks on 50% of traffic. The goal was to reduce checkout friction.

::candidate 00:30
Thanks. My plan: (1) sanity-check the test, (2) combine the metrics into the business objective, (3) understand *why* AOV dropped, (4) check segments and long-term effects, (5) decide.

**1. Sanity checks:**
- **Sample ratio mismatch:** were users really split 50/50? A mismatch suggests a bug.
- **Novelty effect:** does the conversion lift fade over the 2 weeks? Look at the daily trend.
- **Full weekly cycles:** 2 weeks covers weekday/weekend patterns. Good.
- **Instrumentation:** is order value calculated the same way in both arms (e.g. discounts, shipping)?

::candidate 01:00
**2. Combine into the objective.** Revenue per visitor = conversion × AOV.
1.02 × 0.97 = 0.9894 → **about −1.1% revenue per visitor**.

So on revenue alone, the new checkout is slightly *negative*, even though "conversion" looks like a win.

But revenue isn't the only objective. I'd also look at **profit per visitor**: if the lost AOV came from low-margin add-ons, profit might be flat or up. And **customer lifetime value**: if more *new* customers converted, their future purchases could outweigh the AOV drop.

::interviewer
Assume the AOV drop is mostly because fewer people added a recommended accessory at checkout.

::candidate 01:35
That's a clear mechanism. The new, simplified checkout probably **removed or de-emphasized the cross-sell module** ("Customers also bought…"). So we have two separate effects:
- Less friction → more people complete purchase (good).
- No cross-sell → smaller baskets (bad).

That suggests we **don't have to choose**: we can keep the friction reduction and restore the cross-sell in a less intrusive place.

::coach
Finding the mechanism turns a yes/no decision into a design opportunity. Interviewers love "we don't have to accept this trade-off" when it's backed by evidence.

::candidate 02:00
**4. Segments and long-term effects:**
- **New vs returning customers:** if the conversion lift comes mainly from new customers, their LTV matters a lot. Check repeat purchase rates in 30–60 days.
- **Device:** a simpler checkout might help mobile a lot.
- **Accessory margins:** accessories often have high margins, so losing them could hurt profit more than revenue.

**5. Decision:**
- **Don't ship the variant as is**, because revenue per visitor is lower and accessories are probably high margin.
- **Run a follow-up test:** new checkout + cross-sell moved to the cart page or a post-purchase "add to your order" screen (no friction before paying).
- **Success criteria for the next test:** primary metric = **profit per visitor** (or revenue per visitor if margin data isn't available); secondary = conversion and AOV; guardrails = checkout errors, page speed, refund rate.
- If the follow-up shows both effects (higher conversion with AOV restored), ship it.

**Exception:** if the analysis shows the extra conversions are mostly new customers with strong predicted LTV, I'd consider shipping now and iterating, since the long-term value could outweigh the small revenue drop.

**Summary:** Combine the metrics into revenue or profit per visitor: here it's about −1%, so I wouldn't ship as is. Because the drop comes from removing the accessory cross-sell, I'd keep the simplified checkout and move the cross-sell to a lower-friction spot, then retest using profit per visitor as the decision metric.

::scorecard
- **Sanity checks** on the experiment before interpreting.
- **Combined conflicting metrics** into a single business objective with the right maths.
- **Found the mechanism** and proposed a follow-up test instead of a binary choice.
- **Considered LTV and segments**, with clear decision criteria.
