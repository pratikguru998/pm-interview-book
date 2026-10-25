::interviewer 00:00
How would you improve the Amazon returns experience?

::candidate 00:05
Clarifying questions:
1. Is the goal customer satisfaction, or reducing the cost of returns? Or both?
2. Any category focus?

::interviewer
Both matter. Choose a focus.

::candidate 00:20
Good. There's an inherent tension: making returns *easier* tends to increase them, and returns are expensive (shipping, handling, often items can't be resold at full price). So I'll aim for **a great experience for unavoidable returns, while reducing avoidable ones**.

Plan: why returns happen → segment → journey pains → ideas across *prevent* and *process* → prioritize → metrics.

::candidate 00:45
**Why returns happen (reasons):**
- Wrong size or fit (biggest in fashion)
- Item different from description or photos
- Defective or damaged
- Changed mind / found it cheaper
- Gift returns

**Category focus:** **fashion/apparel**. Return rates there are much higher than in other categories, and many returns are fit-related, which is preventable.

::candidate 01:15
**Customer journey (ordering jeans):**
1. Unsure of size → orders two sizes ("bracketing"), planning to return one.
2. Tries them on → one fits.
3. Starts the return → picks a reason, finds a drop-off spot.
4. Drops it off → waits for the refund (days).

**Pains:** size uncertainty, the hassle of returns, waiting for the refund, needing a printer or box.
**Amazon's pains:** bracketing doubles shipping costs, processing cost, fraud.

::candidate 01:45
**Ideas.**
*Prevent:*
1. **Fit recommendations:** "Customers who usually buy M in brand X bought L in this brand", plus "Runs small" badges based on return reasons.
2. **Review highlights about fit** and photos from customers with similar size.
3. **Virtual try-on** (AR) for some categories.

*Process better:*
4. **Exchange-first flow:** for size issues, one tap to exchange and ship the new size immediately, before the original is returned.
5. **Label-free, box-free drop-off** with a QR code at Whole Foods, Kohl's, UPS (Amazon already does a lot of this).
6. **Instant refund on drop-off** for trusted customers.
7. **"Keep it" refunds:** for low-value items where return cost exceeds value.

::candidate 02:30
**Prioritize:**

| Idea | Return reduction | Customer experience | Effort |
|---|---|---|---|
| Fit recommendations | **High** | High (gets it right first time) | Medium (data exists) |
| Fit badges from return reasons | Medium | High | Low |
| Exchange-first | Saves the sale | High | Medium |
| Instant refund | – | High | Low (trust scoring exists) |
| Virtual try-on | Medium | Medium | High |

**Recommendation:** fit recommendations + "runs small/large" badges (prevention) and an exchange-first flow (save the sale). These hit both goals: fewer returns *and* better experience.

::interviewer
How would you measure whether fit recommendations work?

::candidate 03:00
A/B test on fashion product pages: treatment sees size recommendations. Primary metric: **return rate for fit reasons** per order. Secondary: conversion (confidence may increase purchases), bracketing rate (multiple sizes of the same item in one order), and net revenue after returns. Guardrail: recommendation accuracy, i.e. returns for "too small/large" among people who followed the recommendation.

::candidate 03:30
**Metrics overall:**
- **North Star:** net return rate for apparel (returns ÷ orders), especially fit-related.
- Exchange share of size returns, time to refund, return experience CSAT, bracketing rate.
- **Guardrails:** conversion rate, return fraud rate, customer complaints.

**Summary:** The best return is one that doesn't happen. For apparel, fit-related returns dominate, so I'd use Amazon's purchase and return data for size recommendations and fit badges, and make unavoidable size returns an instant exchange. That improves satisfaction while cutting return costs.

::scorecard
- **Named the core tension** (easier returns → more returns) right away.
- **Prevent vs process** structure covers both goals.
- **Clear A/B design** with the right primary metric.
