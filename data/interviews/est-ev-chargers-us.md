::interviewer 00:00
Estimate the market size for home EV chargers in the US.

::candidate 00:05
Clarifying questions:
1. Annual market (new sales per year) or the total installed base?
2. Revenue or units?
3. Hardware only, or including installation?
4. Level 2 chargers only (240V), or also basic Level 1 cords?

::interviewer
Annual revenue, including installation. Level 2 home chargers.

::candidate 00:25
**Approach:** the main driver is new EV purchases, since most Level 2 chargers are installed when someone gets an EV. I'll also consider replacements and secondary buyers.

**Formula:**
Annual market ($) = new EV buyers per year × % with home parking × % who install a Level 2 charger × average price (charger + installation) + other sources (used EV buyers, upgrades).

::candidate 00:45
**1. New EVs sold in the US per year:** in recent years, roughly **1.2–1.6 million** new EVs (battery electric + plug-in hybrids). I'll use **1.4M**.

**2. % with home parking (garage or driveway):** EV buyers skew toward homeowners in suburbs. I'll assume **70%**. Apartment dwellers often can't install chargers.

**3. % of those who install a Level 2 charger:** some use a regular 120V outlet (fine for short commutes or plug-in hybrids), some charge at work. I'll assume **65%**.

**4. Average price:**
- Charger hardware: ~$400–$700 → ~**$600**
- Installation by an electrician: ~$500–$2,000 (more if the electrical panel needs upgrading) → ~**$900**
- Total: **~$1,500**

::candidate 01:20
**Core calculation:**
- 1.4M × 0.70 = 980,000 buyers with home parking
- × 0.65 = **~637,000 chargers per year**
- × $1,500 = **~$955 million per year**

**Other sources:**
- **Used EV buyers** installing chargers: used EV sales are growing; say 400k used EVs/year × 70% × 50% = 140k chargers × $1,500 ≈ $210M.
- **Upgrades / second chargers** (two-EV households, replacing old units): small, say ~$50–100M.

**Total: ~$1.2 billion per year.**

::interviewer
How would this change in 5 years?

::candidate 01:50
It depends mainly on EV adoption. If EV sales grow to ~3M per year (more models, lower prices, policy support), the new-EV part alone would be ~$2B, and the used EV market would grow too, so maybe **$2.5–3B** per year. Counter-forces: falling hardware prices and more public fast charging reducing the need for home chargers for some people.

**Sanity check:** ~640k chargers vs ~1.4M EVs: about half of EV buyers install a Level 2 charger, which matches what I'd expect.

**Sensitivity:** EV sales volume and installation cost (older homes needing panel upgrades) are the biggest drivers.

**Summary:** About **$1–1.2 billion a year** today, driven by ~640k new installations at ~$1,500 each, potentially $2.5–3B in 5 years with EV growth.

::scorecard
- **Identified the true driver** (new EV purchases).
- **Included installation** and other sources.
- **Forward-looking extension** with growth drivers and counter-forces.
