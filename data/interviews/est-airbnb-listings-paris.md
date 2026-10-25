::interviewer 00:00
Estimate the number of Airbnb listings in Paris.

::candidate 00:05
Clarifying questions:
1. Active listings (booked at least sometimes), or all listings including inactive?
2. City of Paris proper, or greater Paris region?
3. Entire homes and private rooms, both?

::interviewer
Active listings in the city of Paris. Both types.

::candidate 00:20
I'll estimate from the **demand side**: how many guest nights are booked on Airbnb in Paris per year, divided by how many nights an average listing is booked. Then I'll sanity-check from the supply side (housing stock).

**Formula:** Listings = Airbnb listing-nights per year ÷ nights booked per listing per year.

::candidate 00:35
**Demand side:**
1. **Tourist visits to Paris per year:** Paris is one of the most visited cities in the world. Including domestic tourists, maybe **~35M visits** to the city per year (staying overnight).
2. **Average nights per visit:** ~**3 nights** → **105M guest nights**.
3. **Airbnb share of guest nights:** hotels dominate, but Airbnb is big in Paris. Assume **~15%** → **~15.75M Airbnb guest nights**.
4. **Guests per booking:** couples, families, friends → average **~2.2 guests** → listing-nights = 15.75M ÷ 2.2 ≈ **7.2M listing-nights per year**.

**Supply side utilization:**
5. **Nights booked per listing per year:** Paris restricts renting out a primary residence to 120 nights/year (stricter rules lowered this further recently), and many listings are only rented occasionally while owners travel. Assume an average of **~120 nights**.

**Calculation:** 7.2M ÷ 120 ≈ **60,000 active listings**.

::interviewer
How could you sanity-check that?

::candidate 01:25
**Supply check:** Paris has ~1.4M housing units. 60k listings ≈ **4%** of homes listed at least sometimes. That seems plausible: many residents rent out their apartment while away in summer. Public data sources (e.g. independent scraping projects) have reported tens of thousands of Paris listings, so the order of magnitude fits.

**Sensitivity:** Airbnb's share of nights and nights per listing are the biggest drivers. If nights per listing were 80 (more occasional hosts), the number would be ~90k.

**Range: ~50,000–90,000**, central estimate ~60k.

::scorecard
- **Demand-based estimate** for a supply number.
- **Local context** (Paris regulations capping nights).
- **Housing stock sanity check** and a range.
