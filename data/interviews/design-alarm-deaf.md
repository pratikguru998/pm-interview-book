::interviewer 00:00
Design an alarm clock for deaf people.

::candidate 00:08
Love it. Give me a moment to structure my thoughts.

A few clarifying questions first:
1. Are we a hardware company, a phone app company, or open to either?
2. Is the goal to build a profitable product, or is this an accessibility initiative within a bigger brand?
3. When you say deaf, should I include people who are hard of hearing? That's a much larger group.
4. Is this for home use only, or should I think about travel too?

::interviewer
You're at a consumer electronics company like Google or Amazon. Hardware is fine. Goal: a product that sells and builds trust with the Deaf and hard-of-hearing community. Include hard of hearing. Home first, but travel is fair game.

::candidate 00:55
Great. So the goal I'll design for: **help deaf and hard-of-hearing people wake up reliably and on time, independently, without disturbing anyone else**. A secondary goal is to build a trusted accessible-hardware product.

My plan: users → the "wake up" job and context → pain points → prioritize → solutions → recommendation, MVP and metrics. OK?

::interviewer
Go for it.

::candidate 01:25
**Users.** Hearing loss varies, but for *waking up* the useful split is by **sleeping context**, because that's what decides which alarms work:

| Segment | Context | Today's workaround |
|---|---|---|
| A. Lives alone | No one to disturb | Bed shaker under the pillow, bright flashing lamp |
| B. **Shares a bed with a hearing partner** | Shaker and flashing light wake the partner too | Partner wakes them up (loss of independence), or a smartwatch that's often not strong enough |
| C. Deaf parents of babies or young children | Also need to know when the baby cries at night | Baby monitors with light or vibration pads |
| D. Travellers | Hotels, unfamiliar beds | Portable shaker, or ask hotel staff to knock |

I'll focus on **B, people who share a bed**. It's a very common situation, and today's products force a trade-off between your independence and your partner's sleep. That's a clear, underserved pain. Solutions here will also work for people living alone.

::coach
Segmenting by *context* rather than degree of hearing loss is a smart, non-obvious move. It's directly tied to which solutions work. Always segment on the dimension that changes the design.

::candidate 02:30
**Journey and pains** for a persona. **Sam, 32**, profoundly deaf, lives with a hearing partner, Alex, and works an early shift.

1. **Night before:** sets an alarm. Worries whether it'll work, since phone vibration on the mattress isn't strong enough.
2. **Sleeping:** heavy sleeper. A wrist vibration alone sometimes doesn't wake them.
3. **Alarm time:** the bed shaker wakes Alex an hour earlier than needed. There's tension, and Alex sometimes ends up waking Sam manually instead.
4. **Snooze:** fumbling in the dark with no audio feedback.
5. **During the night:** Sam can't hear the smoke alarm, the doorbell, or someone calling for help. *This is a safety issue, not just convenience.*

**Pain points:** (a) personal wake-up without disturbing the partner, (b) reliability for heavy sleepers, (c) awareness of emergency sounds at night, (d) easy snooze or dismiss, (e) travel portability.

::candidate 03:40
**Prioritize** by frequency and severity:

- **(a) + (b) Reliable personal wake-up:** every day. High impact on relationships and work. Top priority.
- **(c) Night-time sound awareness:** rare but potentially life-threatening. Very high severity.
- (d) and (e): lower.

I'll design for **(a)+(b) as the core**, and treat **(c) as the differentiating extension**, because the same hardware can handle both.

::interviewer
Isn't (c) more important since it's life or death?

::candidate 04:10
That's a fair challenge. In severity terms, yes. Smoke alarm awareness must be solved. Two reasons I didn't make it the core: many regions already offer strobe smoke alarms and bed-shaker smoke systems (sometimes subsidized), so it's partly served, while the daily wake-up conflict is poorly served. But since both need "a device that can wake Sam personally", I'd launch with both. Wake-up drives daily use and habit, and safety makes the product essential. I'd make smoke alarm detection a v1 requirement, not a later add-on.

::coach
The candidate didn't cave or dig in. They acknowledged the point, explained the reasoning ("partly served"), and adapted the plan. That shows judgement, not stubbornness.

::candidate 05:00
**Solutions.**
1. **Smart wristband:** strong, escalating vibration patterns, a hidden LED for a gentle light, and gesture snooze (double-tap). It's personal, so Alex isn't disturbed.
2. **Under-mattress zone pad:** a thin pad placed only under Sam's side, with targeted vibration that doesn't travel across the bed.
3. **Sunrise light pod:** gradually brightens 20 minutes before the alarm on Sam's side only, using a directional beam.
4. **Sound-listening hub:** a small device that listens for the smoke alarm, doorbell, baby cry, carbon monoxide alarm or a knock, classifies the sound, and relays it as a distinct vibration pattern plus a phone notification.
5. **Travel mode:** the wristband works on its own; a clip-on pillow vibrator as an accessory.

::candidate 06:00
**Evaluate.**

| Option | Wakes Sam reliably | Doesn't disturb Alex | Night safety | Cost | Portability |
|---|---|---|---|---|---|
| Wristband | Medium–high (strong motor plus escalation) | ✅ | Via hub | Medium | ✅ |
| Mattress zone pad | High | Mostly ✅ | Via hub | Low | ❌ |
| Light pod | Medium (good for light sleepers) | Partly | ❌ | Low | ❌ |
| Hub | n/a | ✅ | ✅✅ | Medium | ❌ |

**Recommendation: the "Quiet Wake" system.** A **wristband plus a sound-listening hub**, with an optional mattress pad for heavy sleepers.

- **Escalation logic:** gentle light (if the pod is present) → wrist vibration in a rising pattern → after 60 seconds with no response, the mattress pad vibrates → after 3 minutes, an optional text message to a chosen contact. That handles reliability without waking Alex unnecessarily.
- **Night awareness:** the hub detects the smoke alarm, doorbell and baby cry → distinct haptic "words" (for example, three long pulses for smoke) plus a screen icon on the band.
- **Snooze:** double-tap on the band, confirmed with a haptic pulse.
- **Setup:** an app with visual onboarding and sign-language video guides. Battery lasts 7+ days and the band charges on the hub.

**MVP:** wristband + hub with alarms and smoke detection. Doorbell and baby cry in v1.1 via software update. Run a beta with 50 Deaf and hard-of-hearing users recruited through community organizations, co-designing the vibration patterns with them.

::candidate 07:40
**Metrics.**
- **North Star:** % of alarms acknowledged within 3 minutes (successful wake-ups), per weekly active user.
- **Engagement:** nights worn per week. Comfort determines everything for wearables.
- **Partner-disturbance score** from an in-app survey ("Did the alarm wake your partner?").
- **Safety guardrail:** missed smoke alarm detections in testing and in the field, target **zero**. Also false positives, so the band doesn't cry wolf.
- **Business:** units sold, return rate, NPS within the Deaf community.

**Risks:** comfort while sleeping, battery anxiety, and sound misclassification. Mitigations: a soft band option, a battery warning at bedtime, and reporting false alerts to improve the model.

::candidate 08:30
**Summary:** I focused on deaf people who share a bed, because today's solutions force a choice between independence and their partner's sleep. I recommend a wristband with escalating personal alarms plus a hub that turns critical night sounds, especially smoke alarms, into distinct vibrations. Success is reliable wake-ups and zero missed emergencies.

::interviewer
How would you test that people can tell the vibration patterns apart?

::candidate 08:55
Lab sessions with Deaf participants: play each pattern while they're relaxed or drowsy, and measure recognition accuracy and time to respond. I'd keep the vocabulary small (3–4 patterns), make them very different (long vs short pulses, rhythm), and let users customize them. Then I'd do a 2-week home trial with diary check-ins. Target: over 95% correct recognition of the smoke pattern.

::scorecard
- **Reframed the job** from "alarm clock" to "personal wake-up + night sound awareness", which is a senior move.
- **Segmentation by context** (sharing a bed) is directly tied to the design constraints.
- **Handled pushback** on safety maturely and changed the scope.
- **Concrete system design:** escalation logic, haptic vocabulary, co-design with the community.
- **Metrics:** wake-up success, partner disturbance, a zero-miss safety guardrail, and a testing plan.
