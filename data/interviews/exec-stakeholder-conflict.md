::interviewer 00:00
Sales wants feature X to close a big deal. Your data says feature Y would help many more users. What do you do?

::candidate 00:05
Clarifying questions:
1. How big is the deal relative to our revenue?
2. How confident is sales that X is the deciding factor?
3. Do other customers also want X?
4. Effort for X vs Y, and can we do both eventually?

::interviewer
The deal is about 5% of annual revenue. Sales says it's a must-have. Two other prospects asked about X. X takes 6 weeks; Y takes 6 weeks; you can only do one this quarter.

::candidate 00:35
Plan:
1. **Understand X properly**: the real need, and whether it's generalizable.
2. **Evaluate both** on a common basis (value, strategy, risk).
3. **Explore creative options.**
4. **Decide with stakeholders** and communicate transparently.

**1. Understand X.** I'd talk to the sales lead and, ideally, join a call with the prospect:
- What problem does X solve for them? Sometimes the stated feature isn't the real need, and a simpler solution works.
- Is it truly a deal-breaker, or a nice-to-have in a long list?
- Is X aligned with our product vision, or would it be a one-off custom feature that we maintain forever?

::interviewer
Assume X is an integration with a popular CRM that fits your vision, and it's a genuine deal-breaker.

::candidate 01:10
That changes things: X is **generalizable** (CRM integration, two other prospects interested) and **strategic** (integrations increase stickiness). It's not a one-off.

**2. Evaluate:**

| | Feature X (CRM integration) | Feature Y (broad usability) |
|---|---|---|
| Revenue impact | ~5% of revenue (one deal) + 2 prospects | Indirect: retention/engagement across users |
| Reach | New customers + existing CRM users | Many existing users |
| Confidence | High (deal-breaker, stated) | Medium (data-driven estimate) |
| Strategic fit | ✅ integrations = switching costs | ✅ core experience |
| Cost of delay | Deal may be lost | Users keep current experience |

**3. Creative options:**
- **Do X this quarter, Y next**, with a committed date.
- **Smaller X:** build a basic version (one-way sync) in 3 weeks and start part of Y.
- **Partner:** use an integration platform (e.g. Zapier-style connector) as a stopgap for the deal, then do Y now.
- **Contractual commitment:** agree with the prospect on a delivery date for X in the contract (if they'd sign with a roadmap commitment).

::candidate 01:55
**4. Decision:** Given high confidence in revenue, strategic fit and other prospects, I'd lean toward **X this quarter (possibly a scoped-down version) and Y committed next quarter**. If the usability problem in Y is causing measurable churn, I'd look for a smaller version of Y too.

**Communication:**
- With **sales:** confirm the decision, set expectations on scope and date, ask them to secure the deal with that timeline.
- With the **team and leadership:** explain the trade-off with data, show Y's committed slot.
- With **users affected by Y:** nothing promised publicly, but track the issue.

**General principle:** I don't automatically say yes to sales, and I don't dismiss them. I evaluate requests on value, generalizability, strategic fit and cost of delay, and make the trade-off visible.

**Summary:** Understand the real need behind X, compare X and Y on revenue, reach, confidence and strategy, look for creative scoping, then decide transparently. Here X is generalizable and strategic, so I'd ship a scoped X now and commit Y next quarter.

::scorecard
- **Dug into the real need** before deciding.
- **Common evaluation table** for very different requests.
- **Creative options** beyond either/or.
- **Clear principle** for sales-driven requests.
