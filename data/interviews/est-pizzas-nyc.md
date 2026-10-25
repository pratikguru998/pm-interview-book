::interviewer 00:00
How many pizzas are sold in New York City every day?

::candidate 00:05
Quick clarifications:
1. Whole pizzas, or should slices count as fractions of a pizza?
2. Just the five boroughs?
3. All channels: restaurants, delivery, frozen pizzas from supermarkets?

::interviewer
Count slices as fractions. Five boroughs. Restaurants and delivery; ignore frozen.

::candidate 00:20
I'll do a **top-down** estimate (people → pizza consumption) and then a **bottom-up** check (pizzerias → sales per shop).

**Top-down formula:**
Pizzas/day = people in NYC × pizza meals per person per week ÷ 7 × fraction of a pizza per meal

::candidate 00:35
**People in NYC on a typical day:**
- Residents: ~8.3 million
- Plus commuters and tourists: ~1.5 million on an average day
- Total: **~9.8 million** people

**Pizza meals per person per week:** pizza is very popular in NYC (dollar slices, late-night food). Segment:
- Young adults (18–34), ~25% of people: maybe 1 pizza meal/week
- Kids and teens, ~20%: ~0.7/week (school, parties)
- Adults 35–64, ~40%: ~0.4/week
- Seniors, ~15%: ~0.2/week

Weighted: 0.25×1 + 0.2×0.7 + 0.4×0.4 + 0.15×0.2 = 0.25 + 0.14 + 0.16 + 0.03 = **0.58 → ~0.5 meals per person per week**.

::coach
Segmenting a key assumption (here, by age) makes it more defensible than a single guess. Use it for the most important input, not every input.

::candidate 01:15
**Fraction of a pizza per meal:** some people eat a slice or two (1/8 of a pizza per slice), others share a whole pizza among a family. Average ~2.5 slices = **~1/3 of a pizza** per pizza meal.

**Calculation:**
- Pizza meals/day = 9.8M × 0.5 ÷ 7 ≈ **700,000**
- Pizzas/day = 700,000 × 1/3 ≈ **233,000 pizzas per day**

::interviewer
How would you check that?

::candidate 01:35
**Bottom-up check:** NYC has a lot of pizzerias, plus chains (Domino's, Papa John's) and restaurants that serve pizza. Let's estimate ~**2,500** places that sell meaningful pizza volume.
- A busy slice shop might sell 150–200 pizzas' worth a day; a small neighbourhood place ~50; a chain outlet ~100.
- Average ~**90 pizzas/day** × 2,500 = **225,000**.

Top-down 233k vs bottom-up 225k: very close (that's somewhat lucky, but it suggests the order of magnitude, ~200–250k, is right).

**Sensitivity:** the biggest driver is meals per person per week. If it's 0.75 instead of 0.5, the answer rises 50% to ~350k.

**Summary:** About **230,000 pizzas a day** in NYC (range 200k–350k), with top-down and bottom-up methods agreeing.

::scorecard
- **Clarified units** (slices as fractions) up front.
- **Segmented the most important assumption.**
- **Two methods** that cross-check each other.
- **Sensitivity range** rather than false precision.
