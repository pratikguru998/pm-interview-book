::interviewer 00:00
Increase repeat orders on a food delivery app.

::candidate 00:05
Clarifying questions:
1. Is the problem new customers not coming back, or existing customers ordering less?
2. Any constraints, like profitability (no unlimited discounts)?
3. Which company: Uber Eats, DoorDash?

::interviewer
New customers not coming back after the first order. Must be profitable: no big discounts. Say Uber Eats.

::candidate 00:30
**Goal:** increase the second-order rate within 30 days among new customers, without relying on heavy discounts. The first-to-second order transition is typically the biggest drop in delivery apps. Customers who reach 3–4 orders often become habitual.

Plan: why customers don't return → segment → ideas → prioritize → metrics with margin guardrails.

::candidate 00:50
**Why new customers don't come back (hypotheses, to validate with data and surveys):**
1. **Bad first experience:** late, cold, missing items, wrong order.
2. **Price shock:** fees + menu markups + tip → "too expensive".
3. **One-off occasion:** they used it once (stuck at the airport, sick day).
4. **Came for a promo** (low intent).
5. Didn't find favourite restaurants, or poor selection.

**Data I'd check:** second-order rate split by first-order quality (late vs on time, issue vs no issue). My hypothesis: a bad first order cuts the repeat rate dramatically.

::interviewer
Assume customers with any issue on their first order have about half the repeat rate.

::candidate 01:30
Then **first-order quality** is the biggest lever. If, say, 15% of first orders have an issue, fixing a big part of that is worth a lot. And it's profitable: quality, not discounts.

**Segments for actions:**
- New customers with a **bad first order** → recovery.
- New customers with a good first order but no second → habit building.

::candidate 01:50
**Ideas:**
1. **First-order protection:** route new customers' orders to restaurants with high accuracy and on-time ratings and to experienced couriers; deprioritize risky restaurants in their first feed.
2. **Proactive recovery:** if the first order has a problem (late more than 15 minutes, missing item), automatically apologize and give a credit toward the next order, no complaint needed.
3. **Habit triggers:** "Your Friday pizza?" reminders at the same time a week later; one-tap reorder of the first order.
4. **Uber One trial** (free delivery for a month): reduces price friction; membership increases frequency; paid after the trial.
5. **Fee transparency:** show total cost early to avoid price shock at checkout.

**Prioritize:** first-order protection + proactive recovery (biggest lever, quality-based), then reorder triggers, then Uber One trials targeted at customers with high predicted LTV.

::candidate 02:40
**Metrics:**
- **North Star for this initiative:** 30-day second-order rate of new customers.
- First-order issue rate, on-time rate for first orders, recovery credit redemption rate, orders per customer in the first 90 days.
- **Guardrails:** contribution margin per order (incl. credits), restaurant fairness (new customers not funnelled to a few restaurants only), courier earnings.

**Summary:** New customers mostly don't return because their first order went wrong. Protecting first orders (reliable restaurants and couriers) and recovering automatically when something goes wrong, plus simple reorder habits, lifts the second-order rate profitably.

::scorecard
- **Hypotheses validated with data** and the interviewer's hint used well.
- **Profitability constraint respected** (quality over discounts).
- **Margin and fairness guardrails.**
