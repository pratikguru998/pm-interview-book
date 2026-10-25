::coach
Illustrative story: use your own. Deadline stories should show ruthless prioritization, clear communication, and protecting quality where it matters, not heroic overtime.

::interviewer 00:00
Tell me about a time you delivered under a very tight deadline.

::candidate 00:05
**Situation.** At a consumer app company, a new privacy regulation required us to implement **consent management** (users choosing which data uses they allow) within **5 weeks**, or risk fines and app store issues. Our original estimate for the "ideal" version was 10 weeks.

**Task.** As PM, I had to deliver a compliant solution on time without derailing the rest of the roadmap.

**Action.**
1. **Separated must-haves from nice-to-haves** with our legal team. Legally required: a consent prompt with clear choices, the ability to change choices later in settings, records of consent, and respecting choices in data pipelines. Nice-to-have: a beautiful, personalized privacy centre, and granular toggles beyond the legal minimum.
2. **Cut scope to the compliance core**, with a design that was simple but clear (tested quickly with 5 users for comprehension).
3. **Daily 15-minute syncs** with legal, engineering and data, so blockers were resolved the same day.
4. **Parallel work:** while engineering built the prompt, the data team updated pipelines; I wrote help articles and support macros in advance.
5. **Clear communication:** I told leadership which roadmap items would slip by two weeks and why.

::interviewer
Did you have to make any difficult trade-offs?

::candidate 01:15
Yes: the design team wanted a more polished consent experience to avoid hurting opt-in rates. I agreed opt-in rates mattered, so we committed to a **follow-up A/B test of improved designs** in the next sprint, rather than delaying compliance. That kept the team aligned: compliance first, optimization second.

**Result.**
- Shipped **3 days early**, passed the legal review, no compliance issues.
- The follow-up A/B test improved consent opt-in by **9%** with clearer wording.
- Only two roadmap items slipped, by two weeks each, as communicated.

**Learning.** Under a hard deadline, define "done" with the people who own the requirement (here, legal), cut everything else, and plan the polish as a fast follow-up so quality concerns don't block the deadline.

::scorecard
- **Ruthless scoping** with the requirement owner.
- **Coordination and parallel work.**
- **Trade-off handled** with a committed follow-up.
- **Transparent communication** of impacts.
