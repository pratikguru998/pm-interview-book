::interviewer 00:00
How many Google searches happen per second?

::candidate 00:05
Quick clarification: all Google searches worldwide, including on mobile and voice, but not YouTube searches?

::interviewer
Yes, Google Search only, worldwide.

::candidate 00:10
**Formula:** searches/second = internet users × % who use Google daily × searches per user per day ÷ 86,400 seconds per day.

**1. Internet users worldwide:** ~**5.3 billion**.

**2. % using Google Search on a given day:** Google has ~90% search market share globally, but China (~1B internet users) mostly uses Baidu, and not everyone searches every day. Excluding China: ~4.3B users; daily searchers maybe 70% → ~3B. As a share of 5.3B, that's ~**57%**, so I'll use **~60%**.

**3. Searches per user per day:** some people search dozens of times (work, curiosity), others once or twice. Average ~**4**.

**Calculation:**
- Searches/day: 5.3B × 0.6 × 4 ≈ **12.7B per day**
- Per second: 12.7B ÷ 86,400 ≈ **~147,000 searches per second**.

::interviewer
And at peak?

::candidate 00:55
Traffic isn't uniform: it follows daytime across time zones. Peak might be ~1.5–2× average, so **~220–300k per second** at peak. That's what infrastructure must be designed for.

**Sanity check:** public estimates of Google search volume are often cited in the range of 8.5–14B searches/day, so ~13B fits.

**Summary:** ~5.3B internet users × ~60% daily Google searchers × ~4 searches ≈ 13B searches/day ≈ **~150,000 searches per second**, with peaks around 2× higher.

::scorecard
- **Clean formula**, with the China adjustment showing attention to detail.
- **Peak vs average** extension, relevant for system design.
- **Sanity check** against public estimates.
