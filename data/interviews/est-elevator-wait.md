::interviewer 00:00
How many elevators does a 50-floor office building need?

::candidate 00:05
Clarifying questions:
1. What's the goal: an acceptable wait time during the morning rush?
2. How many people work in the building?
3. Any express elevators or zones?

::interviewer
Goal: handle the morning rush with reasonable waits. Occupancy and design are up to you.

::candidate 00:20
**Approach:** this is capacity planning, like system design: size for **peak load**.

**Formula:** elevators = people arriving in the peak window ÷ people one elevator can move in that window.

::candidate 00:30
**1. Occupants:** a typical office floor might have ~1,500–2,000 m² with ~10 m² per person → ~150 people per floor. 50 floors × 150 = **7,500 people**.

**2. Peak arrival:** most people arrive between 8:30 and 9:30, with the busiest **15 minutes** carrying maybe **30%** of arrivals → **2,250 people in 15 minutes**.

**3. Elevator capacity per trip:** a large office elevator holds ~20 people, but it's rarely full; say **15 people** per trip.

**4. Round trip time:** going up 50 floors with several stops, then coming back down:
- Travel speed: high-rise elevators move ~5–8 m/s; 50 floors ≈ 200 m → ~30–40s each way without stops.
- Stops: maybe 8 stops × ~10s each = 80s.
- Loading at the lobby: ~30s.
- Total round trip: **~3–4 minutes**. Use **4 minutes**.

**5. Throughput per elevator:** in 15 minutes, 15 ÷ 4 ≈ 3.75 round trips × 15 people ≈ **56 people**.

**Calculation:** 2,250 ÷ 56 ≈ **40 elevators**.

::interviewer
That sounds like a lot. How do real buildings reduce it?

::candidate 01:35
**Zoning:** split the building into zones (floors 1–17, 18–34, 35–50), each served by its own bank of elevators. Each elevator makes fewer stops and shorter trips, so round trips drop to maybe ~2 minutes, roughly halving the number needed: **~20–25 elevators**. Plus **destination dispatch** (you choose your floor in the lobby and get assigned an elevator), which groups people going to the same floors and reduces stops. Some buildings also use sky lobbies and double-deck elevators.

**Summary:** 7,500 people, 30% arriving in the peak 15 minutes, ~56 people per elevator per 15 minutes → **~40 elevators** without optimization, or **~20–25** with zoning and destination dispatch.

::scorecard
- **Peak capacity planning**, like system design.
- **Detailed round trip reasoning.**
- **Optimizations** (zoning, dispatch) show deeper thinking.
