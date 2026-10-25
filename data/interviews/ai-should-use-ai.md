::interviewer 00:00
Your CEO says "we need AI in our product". How do you decide where to use it?

::candidate 00:05
Clarifying questions:
1. What's our product and who are the users?
2. What's behind the CEO's request: competitors launching AI, investor pressure, or a specific opportunity?
3. Any constraints: budget, data availability, timeline?

::interviewer
We're a project management tool for teams (like Asana). Competitors have launched AI features and the board is asking. Timeline: something meaningful within two quarters.

::candidate 00:25
First, I'd **reframe the goal** with the CEO: "AI" is a tool, not a goal. The real goal is probably **staying competitive and delivering more value**, e.g. retention, winning deals against AI-equipped competitors, or a new paid tier. Agreeing on that changes which opportunities matter.

My process:
1. Start from **user problems**, not technology.
2. Filter for where **AI is the right tool**.
3. **Score** opportunities.
4. **Prototype and evaluate** quickly.
5. Ship, measure, and communicate a portfolio to the CEO.

::candidate 00:55
**1. User problems** (from research, support tickets, usage data). Where do users spend time or get stuck?
- Writing status updates for stakeholders every week.
- Catching up on long comment threads in tasks.
- Breaking a big project into tasks at the start.
- Knowing which projects are at risk of delays.
- Searching for information across projects.
- Updating task statuses (busywork).

**2. Where AI fits.** AI (especially LLMs) is good at: **language** (summarizing, drafting), **pattern recognition and prediction**, **personalization**, and **unstructured data**. It's a poor fit where exact correctness is required with no tolerance for error and no human check, or where simple rules work.

| Problem | AI fit? | Why |
|---|---|---|
| Weekly status updates | ✅✅ | Drafting from task data; user edits before sending |
| Thread summaries | ✅✅ | Summarization; low risk |
| Project breakdown | ✅ | Drafts a plan; user adjusts |
| Delay risk prediction | ✅ | Pattern recognition on historical data, needs enough data |
| Smart search / Q&A | ✅ | "What's blocking the launch?" over project data |
| Status updates automation | Partial | Could be rules plus integrations |

::candidate 01:50
**3. Score opportunities** on user value, frequency, feasibility (data, quality), risk of errors, cost per use, and differentiation:

| Opportunity | Value | Frequency | Feasibility | Error risk | Differentiation |
|---|---|---|---|---|---|
| **AI status update drafts** | High | Weekly, many users | High | Low (user reviews) | Medium |
| Thread summaries | Medium | Daily | High | Low | Low (common) |
| **Ask-your-project Q&A** | High | Daily | Medium | Medium (hallucinations) | High |
| Delay prediction | High | Weekly | Low–medium (data) | Medium | High |
| Project breakdown | Medium | Occasional | High | Low | Medium |

::interviewer
Which would you do first?

::candidate 02:20
A **portfolio**: one quick win and one bigger bet.
- **Quick win (quarter 1): AI status update drafts + thread summaries.** High frequency, low risk because the user reviews the output, clearly saves time, easy to demo for sales and the board.
- **Bigger bet (quarter 2): "Ask your project" Q&A** grounded in project data (retrieval with permissions), which differentiates and can anchor a paid AI tier.
- **Explore:** delay prediction once we validate data quality.

**4. Prototype and evaluate:**
- Prototype with real customer data (with consent) in a few design-partner teams.
- Build **eval sets**: e.g. 200 status updates rated by users for accuracy and usefulness; Q&A tests for groundedness (answers cite the right tasks) and **permission safety** (never reveal projects a user can't access).
- Measure cost per use to make sure the economics work.

**5. Ship and measure:**
- **Adoption:** % of weekly active teams using AI features; repeat usage.
- **Value:** time saved (survey + task data), % of drafted updates sent with minor edits.
- **Business:** win rate in deals vs AI competitors, AI tier attach rate, retention of AI users vs similar non-users.
- **Guardrails:** accuracy complaints, permission leaks (must be zero), cost per active user.

**Communicating with the CEO:** a one-page plan with the user problems, the portfolio, timelines, and how we'll measure impact, so the board sees AI tied to customer value, not a checkbox.

**Summary:** reframe "add AI" as solving user problems where AI is the right tool, score opportunities on value, frequency, feasibility and risk, ship a low-risk quick win (status drafts) and a differentiated bet (grounded project Q&A), and measure adoption, time saved and business impact.

::scorecard
- **Reframed the goal** away from technology-first.
- **AI-fit filter** with clear criteria (language, patterns; error tolerance).
- **Scoring table and a portfolio** recommendation.
- **AI-specific evaluation** (groundedness, permissions, cost).
- **Stakeholder communication** for the CEO and board.
