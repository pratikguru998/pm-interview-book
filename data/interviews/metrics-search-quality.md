::interviewer 00:00
How would you measure search quality for an e-commerce site?

::candidate 00:05
Clarifying questions:
1. Product search on a marketplace like Amazon or Etsy, or a single-brand store?
2. Is this to evaluate ranking changes, or ongoing health?

::interviewer
Marketplace. Both.

::candidate 00:15
Plan: (1) what a "good search" means for the shopper, (2) behavioural metrics along the search funnel, (3) failure signals, (4) offline relevance metrics, (5) primary metric and guardrails.

**1. Good search** = the shopper quickly finds a relevant product they want to buy, with minimal effort.

::candidate 00:30
**2. Search funnel:**

```mermaid
flowchart LR
  Q["Query"] --> R["Results shown"] --> C["Click a result"] --> A["Add to cart"] --> P["Purchase"]
```

**Behavioural metrics:**
- **Click-through rate** on results; **position of first click** (higher = better ranking; measured with mean reciprocal rank)
- **Time to first click**
- **Search-to-cart rate** and **search-to-purchase rate**
- **Revenue per search**

**3. Failure signals:**
- **Zero-result rate:** queries with no results.
- **Reformulation rate:** users rephrase immediately (the first results weren't good).
- **Search exit rate:** leaving the site right after searching.
- **Pogo-sticking:** clicking a result, quickly coming back, clicking another.
- Heavy use of filters to fix bad results.

**4. Offline relevance:**
- Human raters judge results for sampled queries (relevant / partially / irrelevant).
- **NDCG** (how well the ranking puts relevant items at the top), precision@10.
- Used to test ranking changes before going live.

::interviewer
Revenue per search could go up just by showing expensive items. Is that a good primary metric?

::candidate 01:30
Good point: that's a risk. Revenue per search mixes relevance with price and margin. I'd use **search sessions ending in add-to-cart or purchase** as the primary metric for search *quality*, and keep revenue per search as a business metric. Ranking changes that raise revenue but also raise reformulation and exit rates would be suspicious: we'd be pushing expensive items rather than relevant ones.

::candidate 01:50
**5. Primary metric:** search-to-purchase (or add-to-cart) conversion. **Guardrails:** reformulation and zero-result rates, latency (search must be fast, e.g. under 200ms), diversity of sellers in results (marketplace fairness), return rates on items bought via search (relevance quality).

**Summary:** Measure search by whether shoppers find and buy what they want: conversion through the search funnel, plus failure signals like reformulations and zero results, validated offline with human relevance ratings, with latency and seller diversity as guardrails.

::scorecard
- **Funnel + failure signals**, a complete picture.
- **Offline and online evaluation.**
- **Caught the revenue-per-search bias** and chose a better primary metric.
