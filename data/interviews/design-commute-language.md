::interviewer 00:00
Design a product to help people learn a language during their commute.

::candidate 00:06
Nice. Clarifying questions:
1. Are we Duolingo, or a new company?
2. Which kind of commute: driving, public transport, walking? It changes everything.
3. Beginners or intermediate learners?
4. Goal: engagement, learning outcomes, or subscriptions?

::interviewer
You're at Duolingo. Commute type is up to you. Goal: a feature that increases engagement and helps people actually learn.

::candidate 00:40
**Goal:** turn commute time, which is regular and daily, into a reliable learning habit. That should raise daily engagement and long-term retention, measured by real learning progress.

Context matters a lot here, so I'll segment by commute type first.

::candidate 01:00
| Commute | Constraints | Opportunity |
|---|---|---|
| Public transport (train/bus) | Hands partly free, noisy, interruptions, spotty signal | Current app works OK; offline mode helps |
| **Driving** | **Eyes and hands busy, safety-critical** | **Almost no good solution; the app is unusable while driving** |
| Walking/cycling | One hand or none, traffic awareness | Audio only |

A large majority of US commuters drive. I'll focus on **drivers**: a huge, underserved context where Duolingo's current visual app can't be used safely.

::candidate 01:40
**Persona:** Carlos, 38, drives 35 minutes each way, wants to learn Italian for a family trip in 6 months. Listens to podcasts and the radio.

**Journey / pains:**
- Can't look at a screen → current lessons impossible.
- Podcasts are passive → he forgets everything.
- Wants speaking practice, but feels silly speaking with others around. The car is actually a private space, which is an opportunity.
- Traffic and calls interrupt the session → needs to resume easily.
- Trip length varies → lessons need to fit.

**Prioritize:** (1) **safe, hands-free, eyes-free interaction**, (2) **active recall and speaking** (real learning, not passive listening), (3) fits trip length and resumes cleanly.

::candidate 02:20
**Solutions:**
1. **"Drive mode" voice lessons:** audio-only, through CarPlay and Android Auto. The tutor speaks, Carlos answers out loud, and speech recognition gives feedback ("Almost! It's *grazie mille*"). No screen interaction at all.
2. **Trip-fitted sessions:** reads the trip ETA from navigation and builds a 20- or 35-minute session; pauses automatically when a phone call comes in.
3. **Story mode:** a serialized audio drama in simple Italian with quick recall questions, like a learning podcast with interaction.
4. **Conversation role-play** (AI): "You're ordering coffee in Rome", a natural conversation with an AI character.
5. **Review on arrival:** when parked, a 1-minute visual summary of new words, encouraging a streak.

::interviewer
Isn't speaking practice while driving distracting and unsafe?

::candidate 02:55
It's a real concern and needs a strict safety design. Talking to passengers or on a hands-free call is generally accepted while driving. The risk is visual and manual distraction plus heavy mental load. So: **no screen content**, no button taps required, conversation paced by the user (it waits for their answer without time pressure), automatic pause during complex driving if the platform provides those signals, and simpler content in drive mode (review and conversation rather than introducing difficult grammar). I'd also follow automotive distraction guidelines and get safety review approval before launch.

::coach
Safety pushback for in-car features is predictable. Prepare it before the interviewer asks. The candidate gives specific design rules, not a vague "we'll be careful".

::candidate 03:40
**Evaluate:** drive-mode voice lessons solve the core problem (feasible: Duolingo has speech recognition and content). Trip-fitting is cheap, high value. Story mode is a strong engagement hook but needs new content. AI role-play is powerful but costly and needs quality evaluation. Review on arrival reinforces learning.

**Recommendation:**
- **V1:** Drive mode on CarPlay/Android Auto with voice-interactive review lessons (practising words already learned + speaking), trip-fitted length, automatic pause and resume, and a summary on arrival.
- **V2:** AI conversation role-play and story mode.

**Metrics:**
- **North Star:** weekly active "commute learners" (2+ drive-mode sessions a week).
- **Engagement:** sessions per week, completion rate per trip, impact on streaks.
- **Learning:** recall accuracy on words practised in drive mode vs the regular app, speaking score improvement.
- **Business:** retention of drive-mode users vs similar users who don't use it; Super subscription conversion.
- **Guardrails:** zero screen interactions required while moving, user safety feedback, app store or regulatory complaints.

**Summary:** Drivers make up most commuters but can't use a visual app safely. A voice-only, trip-fitted drive mode turns that time into active recall and speaking practice. Measured by weekly commute learners and real recall gains, with strict distraction guardrails.

::scorecard
- **Context segmentation** found the underserved group (drivers).
- **Distinguished passive listening from active learning**, so learning outcomes are measured.
- **Safety handled with specific design constraints.**
