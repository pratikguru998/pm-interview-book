::interviewer 00:00
Your AI feature is great, but it costs too much per user. What do you do?

::candidate 00:05
Clarifying questions:
1. What's the feature, and is it free or paid today?
2. How big is the gap: cost per user vs revenue per user?
3. How is usage distributed: do a few users drive most of the cost?

::interviewer
An AI assistant in a consumer productivity app, included in the $10/month plan. AI costs average $6 per paying user per month, making margins too thin. Usage is very uneven.

::candidate 00:25
Plan: (1) understand where the cost comes from, (2) reduce cost without hurting quality, (3) align pricing and usage, (4) protect quality with evals, (5) metrics.

**1. Understand the cost:**
- **Distribution:** with uneven usage, maybe the top 10% of users drive 60%+ of cost. The average hides this.
- **By feature/request type:** which requests are expensive (long documents, long conversations, image generation)?
- **By token type:** input (long context) vs output.
- **By model:** are we using the largest model for everything?

::candidate 00:50
**2. Reduce cost (engineering + product levers):**

| Lever | How | Typical impact |
|---|---|---|
| **Model routing** | Small, cheap model for simple requests (rewrite a sentence); large model only for complex ones | Often the biggest saving |
| **Context management** | Summarize long conversation history; retrieve only relevant document parts instead of sending whole files | Big reduction in input tokens |
| **Caching** | Cache repeated system prompts and common answers; prompt-caching discounts | Moderate |
| **Shorter outputs** | Concise defaults; "expand" on request | Moderate |
| **Batching / async** | Non-urgent tasks (e.g. nightly summaries) at lower batch prices | Moderate for those tasks |
| **Distillation / fine-tuning** | Train a smaller model on the big model's outputs for frequent tasks | High, needs investment |

::interviewer
Won't routing to smaller models hurt quality?

::candidate 01:30
It can, which is why routing needs **evals**. For each task type, I'd compare small vs large model outputs on an eval set (human ratings + automated checks). Only route tasks where the small model is "good enough" (e.g. within a few points of the large model on quality). Also use a **fallback**: if the small model's answer is low confidence or the user retries, escalate to the large model. And monitor online signals (retries, thumbs-down) by route.

**3. Align pricing and usage:**
- **Fair-use limits** in the base plan (generous for typical users), with a **higher tier for heavy users** (e.g. $20/month AI Pro with higher limits).
- Usage visibility so users understand limits.
- Make sure the heavy users who drive costs either pay more or get routed efficiently.

**4. Protect quality:**
- Run quality evals before and after every cost optimization.
- Track user-facing quality metrics during rollout (A/B test each change).

**5. Metrics:**
- **Cost per active user** and **cost per successful task** (target: e.g. under $2/user/month).
- **Gross margin** per plan.
- **Quality:** eval scores, thumbs-up ratio, retry rate.
- **Business:** conversion to the higher tier, retention (make sure limits don't cause churn).

**Summary:** find where cost concentrates (heavy users, expensive requests, oversized models), cut it with model routing, context trimming, caching and distillation, all validated by evals and A/B tests, and align pricing with usage through fair-use limits and a premium tier for heavy users.

::scorecard
- **Diagnosis of cost drivers** before solutions.
- **Lever table** with realistic impacts.
- **Quality protection** through evals, fallbacks and A/B tests.
- **Pricing alignment** for heavy users.
