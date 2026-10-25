::interviewer 00:00
How would you price an AI API, like a large language model API?

::candidate 00:05
Clarifying questions:
1. Are we a model provider selling to developers and businesses?
2. Do we have multiple model sizes (small/fast vs large/smart)?
3. Goal: developer adoption, revenue, or market share against competitors?

::interviewer
Model provider. Three model sizes. Goal: grow adoption while keeping healthy gross margins.

::candidate 00:20
Plan: (1) cost structure, (2) value and customers, (3) value metric, (4) price structure, (5) packaging for different customers, (6) metrics.

**1. Cost structure.** Inference cost is driven by **compute (GPUs)**, roughly proportional to tokens processed. **Output tokens** cost more than input tokens (generation is sequential and slower), and larger models cost much more per token. There are also fixed costs: training, infrastructure, safety, support.

**2. Value and customers:**
- **Hobbyist developers/startups:** experimenting, price-sensitive, need low barriers.
- **Growth-stage companies:** building products on the API; care about cost at scale, reliability, latency.
- **Enterprises:** care about security, privacy (no training on their data), compliance, SLAs, dedicated capacity.
Value varies hugely by use case: a customer support bot saving $2 per resolved ticket vs a coding assistant saving hours of developer time.

::candidate 01:00
**3. Value metric: tokens.** Per-token pricing:
- **Aligns with cost** (compute scales with tokens).
- **Scales with usage/value** (more usage = more value delivered).
- Familiar in the market.
Downside: hard for customers to predict costs, so we need tools to help.

**4. Price structure:**

| Element | Why |
|---|---|
| **Separate input and output prices** (output higher) | Reflects cost difference; encourages efficient prompts |
| **Tiered by model size** | Small model: cheap for high-volume simple tasks; large model: premium for hard tasks |
| **Discounts for batch (asynchronous) processing** | Uses idle capacity; lower price for non-urgent work |
| **Prompt caching discount** | Repeated context (system prompts, documents) costs less to process again |
| **Volume tiers / committed-use discounts** | Rewards large customers; revenue predictability |
| **Free credits for new developers** | Lowers barrier to try; adoption |

::interviewer
How do you set the actual price per token?

::candidate 01:45
Three anchors:
1. **Cost floor:** compute cost per token at expected utilization, plus overhead, with a target gross margin (e.g. 50–70%+ depending on strategy).
2. **Competitive reference:** competitors' prices for models of comparable quality, because developers compare actively and switching is relatively easy.
3. **Value:** for the largest model, price based on capability for high-value tasks; customers pay a premium for the best quality when it matters.

Then I'd monitor **price elasticity**: if a price cut triggers a big increase in usage (new use cases become viable), revenue may grow even at lower prices, a pattern seen as AI prices have fallen over time.

**5. Packaging:**
- **Self-serve pay-as-you-go** with spending limits and usage dashboards.
- **Scale tier:** committed monthly spend for discounts and higher rate limits.
- **Enterprise:** dedicated capacity, data privacy guarantees, SLAs, security reviews, custom contracts.

**6. Metrics:** gross margin per token by model, revenue per customer and growth, developer activation (time to first successful API call), share of usage by model size, churn to competitors, rate-limit hits (unmet demand), cost per token trends.

**Summary:** price per token with separate input/output rates, tiered by model size, with batch and caching discounts, free credits for adoption, volume commitments for scale customers and custom enterprise plans, anchored on cost, competition and value, and adjusted with elasticity data.

::scorecard
- **Cost-structure understanding** specific to LLMs (input vs output, model size).
- **Value metric and structure table.**
- **Three-anchor pricing method** with elasticity insight.
- **Packaging by customer segment.**
