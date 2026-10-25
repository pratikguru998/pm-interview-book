::coach
Illustrative story: use your own real failure. Choose one with **real impact** where **you** made a mistake (not a teammate), and where you can show how you've changed since. Avoid "fake failures" like "I work too hard".

::interviewer 00:00
Tell me about your biggest failure.

::candidate 00:05
**Situation.** At a B2B scheduling software company, I led a "smart scheduling" feature: an ML-powered assistant that would automatically find meeting times across teams. Our sales team said many prospects were asking for it.

**Task.** I was responsible for defining the feature, delivering it in one quarter, and driving adoption.

::candidate 00:30
**Action, and where I went wrong.** I talked to five enthusiastic customers that sales introduced me to, and they all loved the idea. I wrote the spec, and we spent the full quarter building a sophisticated version with ML ranking of time slots.

My mistake: **I didn't validate the problem with a broader, representative group of users, and I didn't test a simple version first.** The five customers were power users from large accounts, not typical users.

::interviewer
What happened?

::candidate 01:00
**Result.** After launch, only **4% of accounts** used it after the first month. When I interviewed a wider group of 20 users, I learned most of them **preferred manual control** over their calendars. They didn't trust an algorithm to schedule for them, and the existing manual tool was "good enough". We had spent about a quarter of the team's capacity on it.

**What I did next:**
- I **owned it openly** in the retrospective and in a write-up to my director, with the data, rather than blaming sales' input.
- We **simplified** the feature into an optional "suggest times" button inside the existing manual flow, which got much better adoption (~20% of active users) without the full automation.
- I proposed a lightweight **discovery checklist** for future features.

::interviewer
What would you do differently?

::candidate 01:40
Two things: (1) validate demand with a **representative sample**, including skeptical and average users, not just the most enthusiastic ones; and (2) test the riskiest assumption cheaply first. Here the riskiest assumption was "users will trust automatic scheduling", which a simple prototype or a fake-door test could have checked in two weeks.

**How I've applied it since:** on my next project, a reporting feature, I ran a fake-door test first: we added a menu item that measured interest before building. Only 2% clicked, so we deprioritized it in one week instead of building for a quarter. I also now always talk to at least 10 users from different segments before committing to a large build.

::coach
The strongest part of a failure story is **evidence that you changed**. A concrete example from a later project ("fake-door test → saved a quarter") is far more convincing than "I learned to validate more".

::scorecard
- **Real failure** with meaningful cost.
- **Clear ownership**, no blaming.
- **Specific lesson** linked to a root cause (unrepresentative validation, no cheap test).
- **Proof of applied learning** in a later project.
