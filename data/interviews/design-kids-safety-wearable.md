::interviewer 00:00
Design a safety wearable for young children.

::candidate 00:06
Clarifying questions:
1. What age range?
2. What does safety mean here: location, emergencies, health, or all of these?
3. Are we a big tech company (Apple, Google) or a startup?
4. Price expectations?

::interviewer
Startup. Pick the age. Safety is up to you to define. It should be affordable for middle-income families.

::candidate 00:35
I'll pick **ages 6–10**. That's when kids start doing things on their own: walking to school, visiting a friend's house, going to the park with siblings. But they're too young for a smartphone (most parents delay phones until 11–13).

**Goal:** give parents peace of mind while supporting the child's growing independence. Plan: users → situations → pains → prioritize → solutions → trade-offs → recommendation → metrics.

::candidate 01:00
**Two users:**
- **Parent (the buyer):** wants to know the child arrived safely and to be reachable in emergencies.
- **Child (the wearer):** wants freedom, wants it to look cool, doesn't want to feel watched or babyish.

**Situations:** walking to and from school, playing outside in the neighbourhood, being at the mall or a park with crowds (getting lost), at a friend's house.

**Plus:** kids with special needs (e.g. autism, with a tendency to wander) are a higher-need segment with specific requirements. I'd note it as a possible later focus.

::candidate 01:35
**Persona:** Maya, 8, starting to walk 10 minutes to school with a friend. Her mom, Jess, works and worries from 8:00 to 8:15 every morning.

**Pains:**
- Jess: "Did she get there?" Has to text the school or a friend's parent.
- Emergencies: Maya gets lost or something scary happens, and she has no way to call.
- Maya: doesn't want her mom "spying"; a clunky device would get teased at school.
- Practical: battery, water, rough play, schools banning devices.

**Prioritize:** (1) **arrival and departure confirmation** (daily anxiety), (2) **emergency contact** (rare, high severity), (3) **child acceptance** (determines whether it's worn at all, so it's a requirement).

::candidate 02:15
**Solutions:**
1. **Kids' watch with an SOS button:** press and hold 3 seconds → calls the parent and shares live location.
2. **Geofenced check-ins:** automatic "Maya arrived at school 8:12" / "left school 15:05" notifications.
3. **Calls to approved contacts only**, no internet, no apps, no strangers.
4. **School mode:** the watch locks itself during school hours except SOS (addresses school bans).
5. **Kid appeal:** swappable bands, a step challenge with friends, customizable watch faces, a "walkie-talkie" voice message to parents.

::interviewer
Why not just constant live tracking? Parents would love that.

::candidate 02:45
Some parents would, but there's a **trade-off between safety and trust/autonomy**. Constant tracking can make kids feel watched and reduce the independence the parent is trying to build. It also creates more anxiety for parents ("why is she stopped there?"). So my default is **event-based**: arrivals, departures, SOS, and "out of the usual zone" alerts, with live location available on demand and visible to the child ("Mom checked your location"). Transparency keeps trust. I'd let families choose, but design the default around healthy independence.

::coach
A strong answer to a values trade-off: name it, choose a default with reasoning, keep flexibility, and propose transparency as a principle.

::candidate 03:25
**Recommendation: "Buddy Watch"**
- SOS call + location, event-based geofence notifications (home, school, grandma's).
- Approved contacts only; school mode.
- Fun: step challenges, bands, voice messages.
- Hardware: LTE, water-resistant, 2-day battery, durable.
- Price: ~$129 + ~$10/month connectivity.

**Metrics:**
- **North Star:** % of school days the watch is worn (daily wear rate). If kids won't wear it, nothing else matters.
- Parent peace-of-mind score (survey), geofence notification accuracy, SOS response time (connect within 10 seconds).
- **Business:** monthly subscription retention, return rate.
- **Guardrails:** false SOS rate, battery dead before 6pm, **children's data protection** (COPPA compliance, minimal data, no ad tracking), security breaches.

**Summary:** For kids aged 6–10 starting to be independent, parents need arrival confirmation and an emergency line, and kids need something they actually want to wear. An SOS watch with event-based check-ins, approved contacts and kid-friendly design balances safety with independence. Measured by daily wear and parent peace of mind.

::scorecard
- **Two-user design** with child acceptance as a hard requirement.
- **Thoughtful handling of the tracking vs autonomy trade-off.**
- **Privacy and regulation** (children's data) explicitly included.
