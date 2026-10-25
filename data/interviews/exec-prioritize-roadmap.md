::interviewer 00:00
You have 10 feature requests and capacity for 3 this quarter. How do you prioritize?

::candidate 00:05
Clarifying questions:
1. What are the team's goals or OKRs this quarter?
2. Where do the requests come from: customers, sales, executives, internal teams?
3. Do we have effort estimates?

::interviewer
You're the PM for a B2B project management tool. The quarter's goal: improve activation of new teams. Requests come from all sources. Rough estimates exist.

::candidate 00:25
My process:
1. **Anchor on the goal** and filter.
2. **Understand each request**: problem, evidence, who it's for.
3. **Score** with a simple framework.
4. **Apply judgement**: dependencies, risk, strategy.
5. **Decide and communicate**, including what we're *not* doing.

::candidate 00:40
**1. Filter by goal.** I'd list all 10 and mark how each connects to new-team activation. Some will be clearly unrelated (e.g. "advanced admin reports" for enterprise). I'd park those unless they're urgent (legal, security, a major customer at risk) and say so explicitly.

**2. Understand the problems behind requests.** Requests are often *solutions*. E.g. "Add a tutorial video" and "Make templates" may both address "new teams don't know how to set up projects". I'd group them by underlying problem and check evidence: funnel data (where new teams drop off), support tickets, interviews.

::interviewer
Suppose 5 requests relate to activation. How do you choose 3?

::candidate 01:10
**3. Score with RICE** (Reach × Impact × Confidence ÷ Effort). Illustrative:

| Request | Reach (new teams/quarter) | Impact | Confidence | Effort (weeks) | RICE |
|---|---|---|---|---|---|
| Project templates | 4,000 | 2 | 80% | 3 | 2,133 |
| Import from spreadsheets | 2,500 | 2 | 70% | 4 | 875 |
| Invite teammates in onboarding | 4,000 | 3 | 60% | 2 | **3,600** |
| Tutorial videos | 4,000 | 0.5 | 50% | 1 | 1,000 |
| Slack integration at setup | 1,500 | 1 | 60% | 3 | 300 |

**4. Judgement:**
- **Invite teammates** is the highest score, and it's crucial for a collaboration tool (activation is team-based).
- **Templates** are second and reduce "blank page" drop-off.
- Third: **spreadsheet import** vs tutorial videos. Videos score well because they're cheap, but low impact. Import helps teams moving from Excel, a big segment. I'd check funnel data: if many new teams drop off at "create first project", import is worth it.
- Also consider **dependencies** (invites needed before collaboration features matter) and **confidence**: for lower-confidence items, run a quick experiment first.

::coach
RICE gives a starting point, but strong candidates explicitly apply judgement on top of the scores (dependencies, confidence, strategy) instead of just sorting the table.

::candidate 02:10
**5. Decide and communicate:**
- **Chosen:** invite-in-onboarding, templates, spreadsheet import, with the success metric: % of new teams with 3+ active members and 1+ project in week one.
- **Not now:** share the list with requesters, the reasoning, and when we'll revisit (next quarter planning). For the enterprise requests, talk to sales directly so there are no surprises.
- **Transparency:** publish the prioritization doc so stakeholders see the logic.

**Summary:** Start from the goal, understand the real problems behind requests, score with RICE, apply judgement on dependencies and confidence, then communicate clearly, especially the "no" decisions.

::scorecard
- **Goal-first filtering.**
- **Problem behind the request** (grouping solutions).
- **RICE + judgement**, not mechanical.
- **Communication of trade-offs** to stakeholders.
