::interviewer 00:00
How would you improve Google Maps?

::candidate 00:05
Clarifying questions:
1. Any focus area: driving, transit, walking, or local discovery?
2. Any goal from leadership: engagement, local ads revenue, or user satisfaction?

::interviewer
Your choice on both.

::candidate 00:20
OK. **Goal:** increase daily engagement and loyalty among **public transit riders**. Driving navigation is very mature, but transit is a daily habit in big cities (and for people who don't drive), and competitors like Citymapper have often been praised for transit features. Owning daily commutes keeps users in Maps.

Plan: understand the transit user → journey → pains → ideas → prioritize → recommendation → metrics.

::candidate 00:50
**Transit user segments:**
- **Daily commuters:** same route, care about delays and comfort.
- Occasional riders: need step-by-step guidance.
- Tourists: confused by unfamiliar systems.
- Riders with accessibility needs.

I'll focus on **daily commuters** in big transit cities. They use the app twice a day, the most frequent use case, and they're the most loyal if served well.

::candidate 01:15
**Journey (Priya, 7:45am commute: bus + subway):**
1. Checks when the bus arrives → the real-time estimate is sometimes wrong.
2. Bus is late → misses the connection → no proactive alternative.
3. Subway is packed → can't get on the first train.
4. Exits at the wrong exit → 5 extra minutes walking.
5. Evening: delay on her line, finds out at the station.

**Pains:** unreliable real-time info, disruptions discovered too late, crowding, no in-station guidance (which carriage, which exit), uncertainty about the trip home.

**Prioritize:** **disruptions discovered too late** is high frequency and high frustration, and it's something Maps can solve with data + notifications. Crowding is second.

::candidate 01:55
**Ideas:**
1. **Proactive commute alerts:** for saved commutes, Maps checks disruptions before your usual departure and notifies you: "Line 2 delays ~15 minutes. Leave now or take bus 31 instead."
2. **Live crowding predictions** per train or carriage (from crowdsourced data + agency feeds).
3. **Best carriage and exit guidance:** "Board the front of the train; exit 4 is closest."
4. **Live rerouting during the trip** when a connection is missed.

**Prioritize (RICE-style):**

| Idea | Reach | Impact | Confidence | Effort |
|---|---|---|---|---|
| Proactive commute alerts | High (all saved commutes) | High | High (agency feeds exist) | Medium |
| Crowding | High | Medium | Medium (data gaps) | High |
| Carriage/exit guidance | Medium (top cities) | Medium | Medium | Medium |
| Live rerouting | Medium | High | High | Medium |

**Recommendation:** proactive commute alerts + live rerouting. Together: "Maps has my back on my commute."

::interviewer
How do you avoid notification fatigue?

::candidate 02:50
Notify only when it **changes a decision**: significant delays (more than 5–10 minutes) or a better alternative, at the moment you'd normally leave. No "all good" spam (a quiet widget can show status instead). User-tunable thresholds. Measure: opt-out rate and how often alerts lead to a route change.

::candidate 03:15
**Metrics:**
- **North Star:** weekly active transit commuters (users with 3+ transit navigations a week).
- Saved-commute adoption, alert open rate, % of alerts followed by a route change (usefulness), on-time arrival rate vs no alert.
- **Guardrails:** notification opt-out rate, accuracy of disruption data (false alerts), battery usage.

**Summary:** Transit commuters are Maps' most frequent users, but they discover disruptions too late. Proactive, decision-changing alerts and live rerouting for saved commutes make Maps an indispensable daily companion, measured by weekly active transit commuters.

::scorecard
- **Picked a strategic segment** with competitive context.
- **Prioritized with explicit RICE reasoning.**
- **Notification fatigue answer** shows user empathy and metric thinking.
