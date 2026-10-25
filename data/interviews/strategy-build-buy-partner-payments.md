::interviewer 00:00
Your ride-sharing app wants in-app wallets. Build, buy, or partner?

::candidate 00:05
Clarifying questions:
1. Which markets? It changes the answer a lot.
2. What's the strategic goal: convenience at checkout, or building a fintech business (lending, bills, transfers)?
3. Timeline and budget?

::interviewer
Southeast Asia (Indonesia, Vietnam, Philippines). Strategic goal is up to you. Leadership wants to move within a year.

::candidate 00:30
In Southeast Asia, a wallet is **strategic, not a utility**:
- Many people are unbanked or underbanked; cash is still common.
- Super-apps (Grab, Gojek) have shown that wallets unlock rides → food → bills → transfers → loans, increasing frequency and lock-in.
- Digital payments data enables credit scoring for drivers and merchants (lending is a big revenue opportunity).

**Strategic goal:** build a payments foundation for a **super-app strategy**, starting with ride payments and extending to financial services.

Framework: for each option, evaluate speed, control, cost, risk, and strategic fit.

::candidate 01:05
| | 🔨 Build | 💸 Buy (acquire a licensed wallet) | 🤝 Partner (e.g. existing wallets, banks) |
|---|---|---|---|
| **Speed** | Slow: e-money licences per country can take 12–24+ months | **Fast**: licences and users come with it | Fastest |
| **Control** | Full | Full after integration | Low: partner owns customer and data |
| **Cost** | Ongoing team, compliance, fraud | High upfront | Revenue share, fees |
| **Risk** | Execution, regulatory | Integration, culture, overpaying | Dependency; partner could be a competitor |
| **Strategic fit for super-app** | ✅ | ✅ | ❌ (can't build lending on someone else's data) |

::interviewer
What about partnering first and buying later?

::candidate 01:40
That's a valid sequencing, especially in smaller markets. The risk is that in the big markets, the partner wallet may itself be part of a competing super-app (some are owned by competitors), and you'd be feeding them your users' payment data. So I'd **partner only with neutral players** (banks, telcos) and only where buying isn't feasible.

::candidate 02:00
**Recommendation:**
- **Indonesia (largest market):** **acquire** a licensed local e-wallet with existing merchant acceptance, then integrate deeply into the app.
- **Vietnam and the Philippines:** **partner** with neutral banks or telco wallets now, while applying for our own licences (build) for the long term.
- **Common layer:** build our own payment orchestration, fraud detection and wallet UX in-house so the experience is consistent and data flows to us.

**First steps:** due diligence on acquisition targets (licence, user base, regulatory standing, tech), regulatory engagement, define the wallet roadmap (rides → food → P2P transfers → bills → driver micro-loans).

**Metrics:**
- % of rides paid via wallet; wallet monthly active users; number of use cases per user.
- Payment cost per transaction vs cards and cash; fraud rate.
- Later: lending book quality (default rates), revenue from financial services.

**Summary:** In Southeast Asia, a wallet is the foundation of a super-app, so control matters. Acquire in the biggest market for speed and licences, partner with neutral players elsewhere while building licences, and own the payment layer and data in-house.

::scorecard
- **Context-specific answer** (the same question in the US would get "partner").
- **Comparison table** with explicit criteria.
- **Nuanced, market-by-market recommendation** with sequencing.
