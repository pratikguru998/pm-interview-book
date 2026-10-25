::interviewer 00:00
Design a Google Maps feature for wheelchair users.

::candidate 00:06
Great prompt. Let me clarify:
1. Navigation within cities, venue information, or both?
2. Manual and power wheelchairs, or a specific type?
3. Global or starting in specific regions?
4. Goal: inclusivity and mission, or also usage growth?

::interviewer
Your call on scope. Both wheelchair types. Start wherever makes sense. Goal is mission plus making Maps more useful.

::candidate 00:35
**Goal:** let wheelchair users plan and complete trips with confidence that the route and destination are accessible. Measured by successful, barrier-free trips. It fits Google's mission of making information universally accessible, and the "curb-cut effect" means parents with strollers, travellers with luggage and older people benefit too.

Plan: users → journey → pains → prioritize → solutions (including the data challenge) → MVP → metrics.

::candidate 01:00
**Users:**
- **Manual wheelchair users:** sensitive to slopes, curbs, surfaces.
- **Power wheelchair users:** heavier; need elevators and ramps, and doors wide enough; battery range matters.
- **Temporary mobility limits:** injury, crutches.
- **Adjacent beneficiaries:** stroller parents, elderly people, travellers with luggage.

I'll focus on **manual wheelchair users in cities**, using public transit and sidewalks. Their routes involve the most possible barriers. Designing for them covers power-chair needs in most cases.

::candidate 01:40
**Journey (Aisha, 29, manual wheelchair, going to a new café across town):**
1. **Plan:** "Does the café have steps? An accessible restroom?" The website says nothing. She calls them.
2. **Route:** Maps shows a walking route with stairs at a subway exit and a missing curb cut.
3. **Transit:** takes the subway. **The elevator at her exit station is out of service.** She's stuck on the platform and has to ride to another station and backtrack 25 minutes.
4. **Last 200 metres:** construction blocks the sidewalk; she has to go into the street.
5. **Arrival:** a small step at the entrance.

**Pains:**
1. Venue accessibility info missing or unreliable.
2. Routes that include stairs, steep slopes, or missing curb cuts.
3. **Elevator outages**, a high-severity stranding risk.
4. Temporary obstacles (construction).
5. Lack of trust in data: "Last time it said accessible and it wasn't."

**Prioritize:** (3) elevator outages and (2) route barriers are the highest severity, because they leave you stranded or in danger. (1) venue info is high frequency but can be worked around by calling. I'll focus on **route + transit accessibility**, with venue info as a quick win.

::interviewer
Where does the data come from? Google doesn't know where every curb cut is.

::candidate 02:40
Right, data is the core challenge. I'd combine several sources:
- **Transit agency feeds:** many publish elevator status; integrate them like real-time arrivals.
- **Street View + computer vision:** detect curb cuts, stairs and sidewalk width from imagery. Google has huge coverage.
- **City open data:** sidewalk and curb ramp inventories in many cities.
- **Crowdsourcing:** Local Guides and wheelchair users report barriers ("elevator broken", "construction") with quick confirmations from others.
- **Implicit signals:** wheelchair-mode users rerouting at a point suggests a barrier.

Each data point gets a **confidence score** and a freshness date, and the UI is honest: "Step-free entrance (confirmed 2 weeks ago by 3 people)".

::coach
"Where does the data come from?" is the crux of most Maps questions. A layered answer (official feeds + ML on existing assets + crowdsourcing + implicit signals + confidence) shows deep, realistic thinking.

::candidate 03:30
**Solutions:**
1. **Wheelchair routing:** avoids stairs and steep slopes, prefers curb cuts and wider sidewalks. Shows a route profile (slopes) and "uncertain segments".
2. **Live elevator status** for transit with automatic rerouting ("Elevator at 14th St is out. Exit at 23rd St and take bus M23 instead").
3. **Venue accessibility attributes:** step-free entrance, accessible restroom, parking. Owner-provided plus crowdsourced.
4. **Report a barrier:** 2-tap reporting, with others confirming it or marking it fixed.
5. **Indoor accessibility maps** for big stations, malls, airports (lift locations).

**Evaluate:** elevator status is very high severity and feasible where feeds exist. Routing is the highest value but data-heavy, so launch only in cities with good coverage. Venue attributes are low effort since the attribute system exists. Barrier reporting is cheap and feeds data quality. Indoor maps are long term.

::candidate 04:20
**Recommendation (MVP):**
- Venue accessibility attributes globally (quick win, huge reach).
- In **5 launch cities** with good data (e.g. NYC, London, Tokyo, Sydney, Boston): wheelchair-accessible transit routing with live elevator status and rerouting, plus barrier reporting.
- Wheelchair sidewalk routing in v2 as Street View-based detection reaches confidence thresholds.

**Metrics:**
- **North Star:** wheelchair trips completed without reported barriers or forced reroutes.
- Adoption of wheelchair mode; elevator-outage reroutes delivered; barrier reports and confirmation rate (data freshness).
- **Trust:** "Was this route accessible?" post-trip rating.
- **Guardrails:** routes reported inaccessible after being labelled accessible (data accuracy), false outage alerts.

**Summary:** Wheelchair users get stranded by unknown barriers and elevator outages. I'd start with live elevator status and accessible transit routing in cities with good data, plus global venue accessibility attributes, powered by agency feeds, Street View vision and crowdsourcing with confidence scores. Measured by barrier-free trips.

::scorecard
- **High-severity prioritization** (stranding risk) with empathy shown through the journey.
- **Excellent data strategy**, including honesty about confidence in the UI.
- **Phased launch** matched to data availability.
