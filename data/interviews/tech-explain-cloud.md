::interviewer 00:00
Explain cloud computing and why companies use it.

::candidate 00:05
I'll give a simple explanation, the main service models, the benefits, the trade-offs, and when a PM would care.

**Simple explanation.** Cloud computing means **renting computing resources over the internet** (servers, storage, databases, AI services) from providers like Amazon Web Services, Microsoft Azure or Google Cloud, instead of buying and running your own hardware. You pay for what you use, like electricity from the grid rather than running your own generator.

**Service models:**

| Model | What you manage | Example |
|---|---|---|
| **IaaS** (infrastructure) | Operating system, apps, data; the provider runs the hardware | Renting virtual machines (AWS EC2) |
| **PaaS** (platform) | Just your code and data | Deploying an app to a managed platform (Google App Engine, Heroku) |
| **SaaS** (software) | Nothing technical; you just use it | Gmail, Salesforce, Slack |
| **Serverless / managed services** | Only functions or configuration | AWS Lambda, managed databases |

::candidate 00:55
**Why companies use it:**
1. **Elasticity:** scale up for peaks (Black Friday, a viral launch) and down afterwards, instead of buying servers for the peak that sit idle most of the year.
2. **No big upfront cost:** pay as you go (operating expense instead of capital expense), which matters a lot for startups.
3. **Speed:** spin up servers in minutes, not weeks of procurement.
4. **Global reach:** data centres worldwide, so you can serve users with low latency and meet data residency rules.
5. **Managed services:** databases, machine learning, analytics, security tools, without building and operating them.
6. **Reliability:** multiple data centres and regions for failover.

::interviewer
Are there downsides?

::candidate 01:20
Yes:
- **Cost at large, steady scale:** some very large companies find owning infrastructure cheaper for predictable workloads (some have moved parts back on-premise).
- **Vendor lock-in:** using provider-specific services makes switching hard.
- **Cost surprises:** easy to overspend without governance (forgotten resources, expensive data transfer).
- **Compliance and data residency:** regulated industries need care with where data is stored.
- **Dependency on the provider's outages.**

**When a PM cares:** cloud costs affect **unit economics** (e.g. cost per user for an AI feature), scaling plans for launches, regional expansion (data residency), and build-vs-buy decisions (use a managed service vs build in-house).

**Summary:** cloud computing is renting computing resources on demand. Companies use it for elasticity, speed, global reach and managed services without upfront investment, while managing trade-offs like cost at scale, lock-in and compliance.

::scorecard
- **Clear analogy** and service model table.
- **Balanced benefits and downsides.**
- **PM relevance** (unit economics, launches, expansion).
