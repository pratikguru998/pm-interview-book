::coach
This is an **illustrative story**. Replace the details with a real experience of your own. Interviewers probe deeply, and made-up stories fall apart under follow-up questions. Keep the structure: brief Situation and Task, a detailed Action, a quantified Result, and a real lesson.

::interviewer 00:00
Tell me about a time you disagreed with an engineering lead.

::candidate 00:05
Sure. This was at a fintech startup where I was the PM for customer onboarding.

**Situation.** Our onboarding completion rate was only 40%. I wanted to ship a redesigned onboarding flow in 4 weeks. Our engineering lead, Marco, wanted to spend 2 months first rebuilding the identity verification service, because it was fragile and caused frequent incidents. We had one squad and couldn't do both at once.

**Task.** As the PM, I owned the roadmap, but I didn't want to just overrule him. I needed us to agree on a plan the whole team would commit to.

::interviewer
What did you do?

::candidate 00:45
**Action.** Four things:

1. **I tried to understand his position first.** I set up a 1:1 and asked him to walk me through why the rebuild mattered so much. I learned the service caused about **3 incidents a month**, and engineers were getting paged at night. Morale was suffering. I had underestimated that cost.

2. **I looked at the data together with him.** I pulled the onboarding funnel. It turned out **18% of the drop-off happened at the verification step itself**, mostly due to timeouts. So his reliability concern was also a *conversion* problem, not just an engineering one.

3. **We reframed the problem together.** Instead of "redesign vs rebuild", we asked: "What's the fastest way to improve completion *and* reduce incidents?" We agreed to start with a **2-week reliability sprint** focused on the timeout issues (not the full rebuild), then ship the new onboarding UI, and plan the rest of the rebuild for the following quarter.

4. **We set shared success metrics** (completion rate and incidents per month) and presented the plan together to our head of product, so it was clearly a joint decision.

::interviewer
What if he hadn't agreed?

::candidate 01:50
I'd have proposed a time-boxed experiment, or brought data on both options to our head of product for a decision, but presented it as "two good options with trade-offs", not as a conflict between us. Escalation is fine, but it should be the last step and done together.

::candidate 02:10
**Result.**
- Verification timeouts dropped by about **80%** after the reliability sprint.
- After the new onboarding launched, completion went from **40% to 55%**.
- Incidents fell to **less than one per month**.
- Marco and I presented the project together at the company all-hands, and he later asked me to join his team's planning sessions.

**Learning.** Disagreements often hide a shared goal. Now I start by understanding the other person's costs and constraints before defending my plan, and I look for data that reframes "my priority vs your priority" as one problem.

::coach
Notice what makes this strong: the candidate **changed their own view** partly (underestimated the incident cost), used **data** to find common ground, reached a **creative solution** (a reliability sprint, not a full rebuild), and quantified the result. Avoid stories where you simply "won".

::scorecard
- **Empathy:** sought to understand first, and acknowledged their own blind spot.
- **Data-driven persuasion** that reframed the conflict.
- **Collaborative outcome** with shared metrics and joint communication.
- **Quantified results** and a real, applied lesson.
- **Handled the "what if" probe** maturely (escalation as a last, joint step).
