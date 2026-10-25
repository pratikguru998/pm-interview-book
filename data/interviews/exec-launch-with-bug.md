::interviewer 00:00
Your launch is tomorrow, and QA just found a bug affecting 2% of users. Do you launch?

::candidate 00:05
It depends on a few things, so let me ask:
1. **What does the bug do?** Cosmetic, broken feature, data loss, security, or payments?
2. **Which 2%?** Random users, or a specific segment (a device, a region, enterprise customers)?
3. **Is there a workaround?**
4. **How long to fix**, and can we contain it (feature flags, staged rollout)?
5. **How fixed is the date?** Tied to a marketing event, a partner contract, a conference, or internal?

::interviewer
It's a new photo editor in our app. On some older Android phones (2% of users), the "save" button fails and the edited photo is lost. Users can retake and re-edit. Fix: about 3 days. The launch is tied to a big marketing campaign starting tomorrow.

::candidate 00:40
Thanks. Let me assess **severity** and **cost of delay**, then decide, then plan communication.

**Severity:**
- Not security, privacy or payments.
- But **data loss** (the edited photo is lost), which is frustrating, even if the original photo is kept.
- Affects a **specific, identifiable segment** (older Android devices), not random users.
- Workaround exists but is annoying.

**Cost of delay:** a big marketing campaign is booked, which means spend, partners and press. Delaying would be costly and visible.

::candidate 01:05
**Options:**

| Option | Pros | Cons |
|---|---|---|
| A. Launch to everyone | Hits campaign | 2% get data loss: bad reviews, support load |
| B. Delay everything 3 days | No bug | Wastes campaign, coordination cost |
| **C. Launch with the editor disabled for affected devices** (feature flag) | 98% get it on time; affected users don't hit the bug | 2% wait 3 days; need device targeting |
| D. Launch to all with a warning | Transparent | Still frustrating, looks unpolished |

**Recommendation: Option C.**
- Use a **feature flag** to hide the new editor on the affected Android device and OS versions; they keep the old editor.
- Ship the hotfix in ~3 days, then enable for them.
- Add **auto-save drafts** in the hotfix to prevent data loss in future.

::interviewer
What if engineering says they can't target those devices reliably?

::candidate 01:35
Then I'd look for the next-best containment: target by **Android OS version or app version** (broader, maybe 5% of users instead of 2%), which is still good. If no targeting is possible, I'd choose between A and B by severity: since the original photo isn't lost, I'd probably launch (A) with an in-app tip for affected users and a fast hotfix, *unless* support data suggests users would be very upset. Data loss of the original photo, or anything with security or money, would make me delay.

::coach
Good candidates have a fallback plan. The decision rule (security, money or permanent data loss means delay) makes the reasoning reusable.

::candidate 02:00
**Execution plan for tomorrow:**
- **Align today:** engineering (flag + hotfix timeline), QA (verify the flag works), marketing (no change), support (macro for affected users), leadership (informed of the decision and risk).
- **Monitor after launch:** crash rate and save success rate by device, support tickets, app store reviews mentioning the editor.
- **Rollback plan:** if issues spread beyond the targeted devices, turn the feature off with the flag.
- **Post-launch:** retro on why QA caught it late (device coverage in testing).

**Summary:** Launch on time for 98% of users and use a feature flag to protect the 2% on affected devices until the 3-day hotfix lands, because the bug causes data loss and the marketing date is fixed. My general rule: security, privacy, money or permanent data loss means don't launch. Everything else, contain it and fix it fast.

::scorecard
- **Clarified severity and cost of delay** before deciding.
- **Options table** with a clear recommendation.
- **Fallback when assumptions fail** (can't target devices).
- **Cross-functional execution plan** with monitoring and rollback.
