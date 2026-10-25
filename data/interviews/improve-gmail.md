::interviewer 00:00
How would you improve Gmail?

::candidate 00:05
Clarifying questions:
1. Consumer Gmail or Google Workspace (business)?
2. Any goal: engagement, time saved, Workspace revenue?

::interviewer
Your call.

::candidate 00:20
I'll pick **Google Workspace Gmail for professionals**. **Goal: save professionals time on email while increasing Workspace paid adoption.** Email overload is a major productivity drain: knowledge workers spend a big chunk of their week on email.

Plan: segments → focus → pains → ideas → prioritize → metrics.

::candidate 00:40
**Segments:** executives (delegate, huge volume), **managers and salespeople** (100+ emails a day, many threads, many follow-ups), individual contributors (moderate), support teams (shared inboxes).

Focus: **managers and salespeople** with high volume, where time saved is most valuable.

**Persona:** Raj, sales manager, 150 emails a day, constantly switching between client threads, internal updates and approvals.

**Pains:**
1. Important emails get lost among newsletters and CCs.
2. Forgetting to follow up on emails where he's waiting for a reply → lost deals.
3. Long threads take ages to catch up on.
4. Writing repetitive replies.
5. Morning triage takes 45 minutes.

::candidate 01:20
**Prioritize:** (2) forgotten follow-ups have direct business cost (deals lost); (1)+(5) triage is the biggest time sink. I'll address both.

**Ideas:**
1. **Daily AI brief:** at 8am, "3 emails need your decision, 5 people are waiting for your reply, 2 threads changed overnight."
2. **Follow-up tracker:** detects emails Raj sent that ask a question or request something, and flags if there's no reply after N days: "Acme hasn't replied to your proposal (4 days). Nudge?" with a drafted nudge.
3. **Thread summaries** at the top of threads longer than 5 messages.
4. **Smart reply drafts** in his writing style.
5. **Newsletter digest:** bundles newsletters into one weekly email.

::interviewer
AI reading emails raises privacy concerns. How do you handle that?

::candidate 01:55
For Workspace, it's critical: (1) admin controls to enable or disable AI features by organization; (2) clear commitments that customer data isn't used to train general models; (3) processing within Google's existing data protection commitments; (4) transparency, i.e. showing *why* something was flagged; (5) easy off-switch for users. Trust is a prerequisite for adoption in enterprise.

::candidate 02:20
**Prioritize:**

| Idea | Time saved | Business value | Accuracy risk | Effort |
|---|---|---|---|---|
| Follow-up tracker | Medium | **High (deals)** | Low–medium | Medium |
| Daily brief | **High** | Medium | Medium (missing important email) | Medium–high |
| Thread summaries | Medium | Medium | Medium (hallucination) | Medium |
| Smart drafts | Medium | Medium | Low | Exists partly |

**Recommendation:** follow-up tracker first (clear value, lower risk) + daily brief in beta with strict evaluation.

**Metrics:**
- **Primary:** time spent in the inbox per day (should drop) and response time to important emails.
- Follow-up nudges sent → replies received; brief open rate; "missed important email" rate (accuracy eval).
- **Business:** Workspace upgrades and retention among users of these features.
- **Guardrails:** wrong flags or missed emails, privacy complaints, admin disable rate.

**Summary:** For high-volume professionals, the biggest costs are triage time and forgotten follow-ups. A follow-up tracker and a daily brief (with strong privacy controls) save time and protect deals, driving Workspace value.

::scorecard
- **Picked a monetizable segment** and tied it to revenue.
- **Privacy answer specific to enterprise.**
- **Prioritized by risk**, shipping the lower-risk feature first.
