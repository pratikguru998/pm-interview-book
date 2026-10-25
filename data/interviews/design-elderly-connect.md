::interviewer 00:00
Design a product that helps elderly people stay connected with their families.

::candidate 00:07
Great prompt. Let me take a few seconds to organize my thoughts. ... OK. Some clarifying questions:
1. What company am I at? Hardware, software, or a social platform?
2. What does "connected" mean here: emotional connection, safety and check-ins, or both?
3. How do you define elderly? I'm thinking 75+, but tell me if you meant 60+.
4. Any market or price constraints?

::interviewer
You're at Google. Connection is mostly emotional, but safety is fine to consider. Think 75+. Mass market in the US.

::candidate 00:50
Thanks. **Goal:** reduce loneliness among elderly people by making frequent, meaningful contact with family effortless, and give families peace of mind. For Google, this extends the Nest and Android ecosystem into an underserved, growing demographic.

One key insight upfront: there are **two users**. The **senior** uses it, and very often the **adult child buys it, sets it up, and pays for it**. I'll design for both.

**Plan:** users and segments → personas and journeys → pains → prioritize → solutions → recommendation → metrics. OK?

::interviewer
Sounds good.

::coach
Naming the user/buyer split in the first minute is a strong signal. Many candidates only design for the senior and miss who actually makes the purchase.

::candidate 01:35
**Segments of seniors:**

| Segment | Tech comfort | Living situation | Connection need |
|---|---|---|---|
| A. Active, tech-savvy 75+ | High (smartphones, WhatsApp) | Independent | Well served already |
| B. **Low-tech seniors living alone** | Low (basic phone, landline) | Alone, often widowed | **High: isolated** |
| C. In assisted living | Low–medium | Facility | Medium: staff and peers |
| D. Living with cognitive decline (dementia) | Very low | With carers | Special needs |

I'll focus on **B: low-tech seniors living alone**. They're the most isolated and have the biggest gap. Many live alone, and loneliness has health effects comparable to well-known risk factors. Dementia (D) deserves its own product, so I'll scope it out.

::candidate 02:30
**Personas.**
- **Rose, 81**, widowed, lives alone two hours from her daughter. Has arthritis and mild hearing loss. Uses a flip phone. Proud, doesn't want to be "a burden". Spends most afternoons with the TV on.
- **Daughter Maria, 50**, works full time, has teenagers. Calls Rose on Sundays out of a sense of duty, feels guilty, and worries whenever Rose doesn't pick up.

**Rose's day (journey):** wakes → breakfast → quiet hours → wonders what the grandkids are up to → thinks about calling but hesitates ("they're busy") → evening TV → bed.
**Rose's pains:** small screens and buttons, confusing video calls, fear of "pressing the wrong thing", missing everyday moments (grandkids' games, new photos), loneliness between calls.
**Maria's pains:** no visibility ("Is Mum OK?"), calls feel like obligations, she can't do tech support remotely, and a guilt cycle.

::candidate 03:40
**Prioritize.**
1. **Low-effort, ambient connection:** feeling part of the family's daily life without scheduling calls. High frequency, high emotional impact, poorly served.
2. **Effortless calling:** video calls with zero buttons for Rose.
3. **Peace of mind for Maria:** knowing Rose is OK without surveillance.

I'll prioritize **(1) and (2)**, with (3) included lightly because it drives Maria's decision to buy.

::interviewer
Why not just give Rose an iPad with FaceTime?

::candidate 04:10
Many families try exactly that, and it often ends up in a drawer. Three reasons: it requires *initiating* (unlocking, finding the app, choosing a contact), interfaces change with updates, and the device needs charging. The problem isn't capability, it's **effort and confidence**. So the design principle is: *the senior should never have to navigate. Content and calls come to her.*

::coach
"Why not an iPad?" is a classic pushback. The candidate turns it into a **design principle**, which then guides the solution. That's product thinking, not just defending an idea.

::candidate 04:50
**Solutions.**
1. **Always-on family frame (Nest Hub-style), set up entirely by family:** photos and short videos that family members send from their phones appear automatically. No setup for Rose; Maria configures it remotely.
2. **"Big button" calling:** one physical button or a large tile per family member ("Call Maria"). Incoming calls from approved family members **auto-answer** after a 10-second countdown so Rose doesn't need to tap.
3. **Voice replies:** Rose says "Hey Google, tell Maria that photo is lovely" and a voice message is sent.
4. **Daily "good morning" check-in:** Rose taps one button. If there's no tap or motion by 11am, Maria gets a gentle notification. Opt-in and transparent to Rose.
5. **Shared rituals:** a weekly "family story prompt" ("Grandma, tell us about your first car") that records Rose's answer and shares it with the family. It turns Rose from a passive recipient into a contributor.
6. **Family album TV mode:** casting to her existing TV, since that's where she already spends time.

::candidate 06:00
**Evaluate.**

| Option | Emotional impact | Effort for Rose | Value to Maria (buyer) | Cost |
|---|---|---|---|---|
| Family frame + auto-feed | High | None | High | Medium (hardware) |
| Big-button + auto-answer calls | High | Very low | High | Low |
| Voice replies | Medium | Low | Medium | Low |
| Daily check-in | Low–medium | Very low | **Very high** | Low |
| Story prompts | High (dignity, legacy) | Low | High | Low |
| TV mode | Medium | Low | Medium | Low |

**Recommendation: "Family Hub for Grandparents"**, a Nest Hub Max-style device with a senior mode:
- Plug in, and it works: pre-configured by Maria from her phone (Wi-Fi via a cellular hotspot option for homes without broadband).
- **Ambient photo feed** from a shared family album, plus a "send to Grandma" button in Google Photos.
- **Auto-answer video calls** from approved contacts, with big text and captions for hearing loss.
- **Voice replies and reactions.**
- **Opt-in daily check-in** for peace of mind.
- **Weekly story prompts** as the delightful, sticky feature.

**Out of scope for v1:** fall detection, medication reminders, dementia mode. These are good v2 directions.

::candidate 07:30
**Metrics.**
- **North Star:** weekly *two-way* interactions per senior household (calls + replies + stories). Two-way matters: one-way photo feeds could look like engagement without connection.
- **Senior engagement:** % of seniors who initiate at least one interaction a week (reply, call, story).
- **Family engagement:** family members actively sending content each week (supply side of the feed).
- **Wellbeing:** a quarterly loneliness survey (e.g. a 3-question loneliness scale) for seniors who opt in.
- **Business:** units sold, device return rate at 30 days, 6-month retention (device still active).
- **Guardrails:** privacy complaints, false check-in alarms, unwanted calls (only approved contacts can call).

::candidate 08:30
**Summary:** For low-tech seniors living alone and their adult children, the problem isn't a lack of devices but the effort and confidence needed to use them. I'd build a plug-and-play family hub that brings photos and calls to the senior with zero navigation, adds voice replies and story prompts so she can give back, and offers an opt-in check-in for the family's peace of mind. The North Star is weekly two-way interactions.

::interviewer
How would you get it into people's homes?

::candidate 08:55
Market it to the **adult children** around gifting moments (Mother's Day, holidays). Partner with Medicare Advantage plans and senior-living communities, where reducing loneliness has health value. Offer a "set up for your parent" flow in the Google Home app. Distribution through pharmacies or retailers seniors trust. Also a 60-day free returns guarantee to reduce the risk of buying.

::scorecard
- **User/buyer split** identified immediately and designed for both.
- **Turned pushback into a principle** ("content and calls come to her").
- **Dignity-aware design:** story prompts make the senior a contributor, not just someone being watched.
- **Thoughtful North Star** (two-way interactions) with a wellbeing measure.
- **Go-to-market answer** grounded in the buyer persona.
