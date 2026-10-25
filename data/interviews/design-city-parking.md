::interviewer 00:00
Design a product to make finding parking in a city easier.

::candidate 00:06
Great. A few clarifying questions:
1. Are we a standalone startup or a feature of Google Maps / Apple Maps?
2. Street parking, garages, or both?
3. Any particular city type: dense European city vs a US downtown?
4. Goal: user time saved, revenue, reducing traffic?

::interviewer
You're on Google Maps. Both. US cities. Goal is up to you.

::candidate 00:35
**Goal:** cut the time and stress of finding parking. Studies of city traffic have suggested a meaningful share of downtown driving is people circling for parking. For Google, that strengthens Maps' "door-to-door" value and opens a commerce opportunity in parking reservations.

Plan: users → pick one → journey → pains → prioritize → solutions → recommend → metrics.

::candidate 01:00
**Driver segments:**
- **Daily commuters:** routine, often have monthly parking. Low pain.
- **Visitors to busy unfamiliar areas** (concerts, restaurants, shopping, doctor's appointments): **high uncertainty, high stress**.
- **Gig and delivery drivers:** frequent short stops, double-parking issues.
- **Residents:** street parking near home at night.

I'll focus on **visitors going to unfamiliar, busy areas**. The pain is intense, Google Maps is already their navigation tool, and there's clear willingness to pay for certainty.

::candidate 01:40
**Journey (Tom is driving to a 7pm concert downtown):**
1. Before leaving: no idea if parking will be easy → leaves "early just in case".
2. Arriving: navigation ends at the venue door, but parking is the real problem.
3. Circles for 15 minutes; garages are full or $40.
4. Finds a street spot, but **can't decode the signs** ("2-hour parking except Tue 8–10am, permit zone C").
5. Walks 15 minutes, late, stressed; sometimes a $70 ticket.

**Pains:** uncertainty before arrival (the biggest), circling, confusing pricing, confusing signs and tickets, the walk from the car.

**Prioritize:** **know before you go**: certainty about where to park and what it costs. It drives everything else.

::candidate 02:20
**Solutions:**
1. **Parking difficulty forecast:** Maps already sees anonymized driving patterns. "Circling" behaviour at the end of trips is a strong signal of how hard parking is. Show it on the trip card: "Parking: very limited at 7pm".
2. **Navigate to parking, not to the door:** suggest the best garage or street area given price and walking time, then show walking directions from there.
3. **Reserve garage spots** through integrations with parking operators: book and pay in Maps, with a guaranteed spot.
4. **Sign decoder:** take a photo of a street sign → "You can park here until 9pm, $3/h, pay with the app."
5. **Live open-spot sharing:** users leaving a spot signal it (cool, but timing is tricky).

::interviewer
How would you know the forecast is accurate?

::candidate 02:55
Two ways. Offline: compare predicted difficulty with observed "parking search time" (time from arriving near the destination to the car stopping) from GPS traces. Online: ask a quick post-trip question ("How hard was parking?") and check how well the forecast matches. I'd only show forecasts with enough confidence, and say "Limited data" otherwise.

::candidate 03:20
**Evaluate:**

| Solution | Impact on uncertainty | Effort | Data or partnerships | Revenue |
|---|---|---|---|---|
| Difficulty forecast | High | Medium | Uses existing Maps data | Indirect |
| Navigate to parking | High | Medium | Garage database | Indirect |
| Reservations | Very high (guarantee) | High | Operator integrations, city by city | ✅ fees |
| Sign decoder | Medium | Medium (city rules data + vision) | Partial | – |
| Spot sharing | Low–medium | Medium | Needs density | – |

**Recommendation:**
- **V1:** parking difficulty forecast + "navigate to parking" with garage suggestions (price, distance, live availability where operators provide it).
- **V2:** garage reservations with major operators in the top 20 US cities; sign decoder in pilot cities.

::candidate 04:10
**Metrics:**
- **North Star:** average parking search time for trips to busy destinations (from GPS traces), target −30%.
- **Adoption:** % of eligible trips where the user taps a parking suggestion; reservation conversion rate.
- **Accuracy:** forecast vs observed difficulty.
- **Business:** reservation revenue, number of partner operators.
- **Guardrails:** wrong "parking available" recommendations, driver distraction (interaction while driving should be voice-first only).

**Summary:** For people driving to unfamiliar busy areas, the core pain is uncertainty. Maps can forecast parking difficulty using circling signals it already sees, then route people straight to parking, and later guarantee a spot through reservations. Measured by time spent searching for parking.

::scorecard
- **Insight about existing data** (circling detection) shows technical and company awareness.
- **Validation answer** for an ML feature (offline + online).
- **Phased roadmap** from data features to a commerce opportunity.
