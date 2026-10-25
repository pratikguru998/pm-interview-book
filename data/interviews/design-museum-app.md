::interviewer 00:00
Design a mobile experience for museum visitors.

::candidate 00:06
Sounds fun. Clarifying questions:
1. Are we building for one museum, or a platform for many museums, like Google Arts & Culture?
2. What's the goal: visitor satisfaction, more visits, revenue, education?
3. Art museums, science museums, or all kinds?

::interviewer
A platform at Google, partnering with museums. Goal is your call. Any type, but feel free to focus.

::candidate 00:35
**Goal:** make museum visits more engaging so people stay longer and come back. For partner museums, that means repeat visits and memberships. For Google, it means engagement plus deeper cultural content. I'll focus on **art museums**, where "I don't get it" is a common barrier.

Plan: stakeholders → visitor segments → pick one → journey → pains → prioritize → solutions → MVP → metrics.

::candidate 01:00
**Stakeholders:** visitors, museums (curators, membership teams), Google.

**Visitor segments:**

| Segment | Goal | Pain |
|---|---|---|
| Tourists | See highlights in 2 hours | Overwhelmed, get lost |
| **Families with kids 6–12** | Fun + learning together | **Kids get bored in 20 minutes** |
| Art lovers | Depth, context | Placards too short |
| School groups | Curriculum | Managed by teachers |

I'll pick **families with kids 6–12**. Visit length depends on the kids, they're the museums' future members, and current experiences are built for adults.

::candidate 01:40
**Journey (the Chen family: two parents, kids aged 7 and 10):**
1. Plan: "Is it worth it? What's kid-friendly?"
2. Arrive: buy tickets, get a map.
3. Explore: wander; the kids look at paintings for 10 seconds; placards are adult text.
4. 30 minutes in: the kids are bored ("Can we go?"); the parents rush.
5. Gift shop → leave → few memories of what they saw.

**Pains:** kids' engagement (the biggest), not knowing what to see, getting lost, adult-level information, no lasting memory.

**Prioritize:** **kids' engagement** decides visit length and satisfaction for the whole family.

::candidate 02:20
**Solutions:**
1. **Treasure Hunt mode:** a story-driven quest ("Help the museum cat find 5 hidden animals in paintings"). Kids get visual clues, find the artwork, scan it, and unlock a 45-second animated story, plus a badge.
2. **Point-and-ask camera:** point at any artwork and ask "Why is this famous?" to get a kid-friendly audio answer (AI grounded in the curator's content).
3. **Family route planner:** pick time available + interests → an optimized route, with indoor navigation.
4. **"Draw it" mode:** sketch the artwork on the phone and compare with the original.
5. **Digital souvenir:** an auto-generated album of everything scanned, with stories, shared with grandparents.

::interviewer
Isn't putting phones in kids' hands at a museum counterproductive? Shouldn't they look at the art?

::candidate 02:55
Totally fair. That's a design constraint I'd adopt explicitly: **the phone should send eyes back to the art, not replace it.** So clues are about *looking* ("Find the painting where someone is hiding behind a curtain"), the app goes quiet while they search, and the reward comes *after* they've found and looked. I'd measure "time looking at the artwork" during observed tests to make sure we aren't creating screen zombies.

::coach
The interviewer raised a values concern. The candidate turned it into a **design principle + a way to measure it**. Strong product judgement.

::candidate 03:30
**Evaluate:** Treasure Hunt directly addresses kids' engagement and needs curator content partnerships (moderate effort). Point-and-ask is powerful but requires an AI grounded in curator content (medium–high effort, risk of hallucination, which needs evals). The route planner helps the parents but not the core problem. The souvenir is cheap and builds memories and sharing (growth).

**Recommendation (MVP):** Treasure Hunt + the digital souvenir, piloted with 3 partner museums. Museums use a simple template tool to create hunts (curators choose 6–8 artworks + stories). Point-and-ask in v2 once quality is proven.

**Metrics:**
- **North Star:** family visits with a completed hunt.
- Average visit duration for families (vs baseline), hunt completion rate, souvenir shares.
- **Museum value:** return visits within 12 months, membership conversions.
- **Guardrails:** crowding at hunt artworks, noise complaints, time spent looking at the art in observation studies.

**Summary:** Families leave museums early because kids get bored. A curator-created treasure hunt that sends kids' eyes back to the art, plus a shareable souvenir, makes visits longer and more memorable. Measured by completed hunts, family visit length and return visits.

::scorecard
- **Segment choice tied to the business** (future members) and to the user problem.
- **Handled a values-based pushback** with a principle and a metric.
- **Platform thinking:** a curator template tool, so the solution scales across museums.
