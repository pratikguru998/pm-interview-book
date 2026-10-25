::interviewer 00:00
Netflix replaced 5-star ratings with thumbs up and thumbs down. How would you evaluate that change?

::candidate 00:05
Clarifying questions:
1. What was the goal of the change: more ratings, better recommendations, or simpler UX?
2. Was it A/B tested before full rollout?

::interviewer
The goal was better personalization. Assume you can A/B test it.

::candidate 00:20
**Hypothesis:** star ratings are effortful and confusing (what's the difference between 3 and 4 stars?), and people rate what they *think they should like* (documentaries get 5 stars) rather than what they actually enjoy watching. Thumbs are simpler, so **more people rate**, and the signal is closer to "do you want more like this?" More and better signals → better recommendations → more satisfying viewing → retention.

Plan: metrics along that causal chain, then guardrails.

::candidate 00:45
```mermaid
flowchart LR
  A["Simpler input"] --> B["More ratings submitted"]
  B --> C["Better signal for recommendations"]
  C --> D["Better match: people watch and finish recommended titles"]
  D --> E["Retention"]
```

**Metrics per step:**
1. **Input volume:** % of finished titles that get a rating; ratings per member per month (expect a big increase).
2. **Signal quality:** how well does a thumbs up predict that the member will watch and finish *similar* titles? Compare the predictive power of thumbs vs stars in the model (offline evaluation).
3. **Recommendation quality:** click-through and completion rate of recommended titles; "match %" accuracy.
4. **Business outcome (A/B):** viewing hours per member, satisfied plays, retention over 2–3 months.

::interviewer
Thumbs have less information than 5 stars. Isn't that worse?

::candidate 01:25
Per rating, yes: a binary signal holds less information. But the total information depends on **volume × quality**. If far more people rate, and the ratings better match actual behaviour, the model gets more useful data overall. Plus, **implicit signals** (what people watch and finish) already carry most of the weight in modern recommenders, so explicit ratings mainly add direction ("more like this" vs "less"). The A/B test settles it: we compare recommendation quality and viewing outcomes, not information theory.

::candidate 01:50
**Guardrails:** user satisfaction with the rating UX (survey), members who loved fine-grained ratings (power-user complaints), recommendation diversity.

**Decision:** ship if ratings volume rises substantially and viewing and retention outcomes are neutral to positive. Netflix reported a large increase in ratings after the switch, which matches the hypothesis.

**Summary:** Evaluate the change along its causal chain: rating volume → signal quality → recommendation quality → viewing and retention, using an A/B test, and judge it on recommendation outcomes rather than on how much information each rating holds.

::scorecard
- **Causal chain metrics**, from input to business outcome.
- **Handled the information trade-off** with volume × quality and implicit signals.
- **Clear decision rule.**
