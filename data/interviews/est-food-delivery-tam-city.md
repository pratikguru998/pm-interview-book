::interviewer 00:00
Estimate the food delivery market size in a city of 5 million people.

::candidate 00:05
Clarifying questions:
1. GMV (total order value) or platform revenue?
2. Restaurant delivery only, or groceries too?
3. What kind of city: a US city, or a city in India, for example? Prices and habits differ a lot.

::interviewer
Both GMV and platform revenue. Restaurant delivery only. A US city.

::candidate 00:20
**Approach:** household-based, since orders are usually placed per household.

**Formula:**
GMV/year = households × % ordering delivery × orders per month × 12 × average order value.
Platform revenue = GMV × take rate (commission + customer fees − discounts).

::candidate 00:35
**1. Households:** 5M people ÷ ~2.5 people per household = **2M households**.

**2. % of households that order delivery at least monthly:** delivery is mainstream in US cities, but not universal (older people, lower-income households order less). Segment:
- Young professionals/students (30% of households): 70% order.
- Families (40%): 40%.
- Seniors and others (30%): 15%.
Weighted: 0.21 + 0.16 + 0.045 = **~41%** → ~820k ordering households.

**3. Orders per month per ordering household:** heavy users order weekly or more; casual users monthly. Average **~4**.

**4. Average order value (food only):** ~**$25**.

::candidate 01:15
**Calculation:**
- Orders per year: 820k × 4 × 12 ≈ **39M orders**
- **GMV:** 39M × $25 ≈ **~$985M per year → ~$1B**

**Platform revenue:** take rate in the US = restaurant commission (~15–30%) + customer fees − promotions → net ~**20–25%** of GMV. At 22%: **~$215M per year** across all platforms.

::interviewer
How would you estimate one company's share?

::candidate 01:35
Use market share: in the US, the market is concentrated among a few players (DoorDash is the market leader nationally, then Uber Eats, then Grubhub). For a typical city, the leader might have ~60%, so its GMV would be ~$600M. I'd refine it with local data (app downloads, restaurant coverage, observed courier density).

**Sanity check:** ~$200 GMV per resident per year (~$1B ÷ 5M). US online food delivery spending per capita is in that ballpark.

**Summary:** ~2M households × ~41% ordering × ~4 orders/month × $25 ≈ **~$1B GMV/year**, ~**$200M platform revenue** at a 22% take rate.

::scorecard
- **Household-based approach** fits the purchase behaviour.
- **GMV vs revenue** clearly distinguished.
- **Market share extension** and a per-capita sanity check.
