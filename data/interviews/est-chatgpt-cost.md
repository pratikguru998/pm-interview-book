::interviewer 00:00
Estimate the daily compute cost of running a popular AI chatbot.

::candidate 00:05
Clarifying questions:
1. Inference only (serving users), not training?
2. Which scale: something like ChatGPT with ~100M+ daily users?
3. Should I estimate it from per-token prices, or from GPU costs?

::interviewer
Inference only. Assume 100 million daily active users. Approach is up to you; ideally show both.

::candidate 00:25
**Approach 1: token-based.**
Cost/day = DAU × messages per user × tokens per message × cost per token.

**1. Messages per user per day:** casual users send a few; power users send dozens. Average **~8**. → 800M messages/day.

**2. Tokens per message:** this includes the **input** (the user message + the conversation history + system instructions, which grow over a conversation) and the **output** (the response).
- Input: ~1,000 tokens on average (context accumulates).
- Output: ~500 tokens.
- Total: **~1,500 tokens** → 800M × 1,500 = **1.2 trillion tokens/day**.

**3. Cost per token (internal compute cost, not the public API price):** depends heavily on model size. A blended internal cost of maybe **~$1 per million tokens** (small models much cheaper, frontier models more expensive).

**Cost:** 1.2T ÷ 1M × $1 = **$1.2M per day** (≈ $440M/year).

::candidate 01:25
**Approach 2: GPU-based check.**
- Suppose one high-end GPU can generate ~1,000–3,000 tokens/second when serving with batching for a mid-size model → ~100–250M tokens/day per GPU.
- 1.2T tokens ÷ ~150M per GPU ≈ **8,000 GPUs**, plus headroom for peaks (2×) → **~16,000 GPUs**.
- At ~$2–3 per GPU-hour (cloud-equivalent cost): 16,000 × 24 × $2.5 ≈ **$960k/day**.

Both approaches land at **~$1M per day**: a reasonable order of magnitude, with a big range (maybe $0.5M–$5M) depending on model size and efficiency.

::interviewer
As a PM, how would you reduce this cost by half?

::candidate 02:00
1. **Model routing:** send simple requests to small, cheap models and only hard ones to large models. Often the biggest lever.
2. **Context management:** summarize long conversation history instead of resending everything, which cuts input tokens.
3. **Caching:** cache common prompt prefixes (system prompts) and frequent answers.
4. **Shorter outputs:** default to concise responses where appropriate.
5. **Free-tier limits:** usage caps or smaller models for free users; paid tiers for heavy users.
6. **Efficiency:** batching, quantization, newer hardware, distillation.

I'd measure **cost per active user** and **cost per successful task** alongside quality evals, so cost cuts don't silently degrade quality.

**Summary:** ~100M users × 8 messages × 1,500 tokens ≈ 1.2T tokens/day; at ~$1 per million tokens, that's **~$1M+ per day**, confirmed by a GPU-based estimate. Biggest savings levers: model routing, context trimming and caching.

::scorecard
- **Two independent methods** that agree.
- **AI-specific detail** (context accumulation, input vs output tokens).
- **Actionable cost-reduction levers** with quality guardrails.
