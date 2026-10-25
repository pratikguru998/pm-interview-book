::interviewer 00:00
Design a vending machine for a modern office.

::candidate 00:06
Sure. A few quick clarifying questions:
1. Who's buying this: the employer, or a vending operator who places machines in offices?
2. Is the food a free perk or paid by employees?
3. What size and type of office?
4. Is there a specific goal, like healthier eating, lower cost, or an employee perk?

::interviewer
You're a startup selling to employers. Food is subsidized: employees pay a little, the company covers the rest. Think tech offices with 300–1,000 people. The goal is up to you.

::candidate 00:45
Thanks. I'll set the goal as: **give employees fast access to fresh, healthy food at work, while giving employers an easy, data-driven perk with low waste.** For our startup that means: employers renew because employees use it and waste is low.

Plan: stakeholders → focus user → journey and pains → prioritize → solutions → recommendation → metrics.

::candidate 01:10
**Stakeholders:**
- **Employees:** the end users.
- **Office/workplace manager:** the buyer. Cares about budget, complaints and admin time.
- **Restocking operator:** needs to know what to restock and when.
- **Finance/HR:** subsidy reporting, wellbeing goals.

**Employee segments:** meeting-heavy people who need food in 2 minutes, health- or diet-focused people (vegan, allergies, high protein), late-shift workers when the cafeteria is closed, and occasional snackers.

I'll focus on **meeting-heavy employees**. They're the biggest group in tech offices and the most time-starved. The buyer also cares most about them (productivity).

::candidate 01:55
**Journey (Dev, engineer, back-to-back meetings 11am–2pm):**
1. 12:55: realizes he has 5 minutes between meetings.
2. Walks to the machine, sees chips and candy, or the sandwich he wants is sold out.
3. Payment fails (card reader), or there's a queue.
4. Grabs something unhealthy, eats at his desk, feels bad.

**Pains:** limited fresh or healthy options, stockouts, slow or failed payment, no idea what's available before walking over, no allergen info.
**Manager pains:** complaints, waste (expired food), no data on what people like.

**Priority:** *fresh, healthy food available when needed, in under 2 minutes.* It combines selection, availability and speed.

::candidate 02:40
**Solutions:**
1. **Smart fridge ("grab-and-go"):** tap your badge to unlock, take what you want. Weight sensors and cameras detect items and charge your account automatically. Holds salads, sandwiches and fruit, not just packaged snacks.
2. **Live inventory in Slack/Teams:** "/fridge" shows what's in stock, and you can **reserve** an item for 30 minutes.
3. **Rotating local menu with ratings:** weekly rotation from local kitchens, items rated after purchase. Low-rated items are dropped.
4. **Demand-based restocking:** the operator gets predicted restock lists based on sales data; the fridge sends alerts.
5. **Dietary labels + filters:** allergen and nutrition info on screen and in Slack.

::interviewer
Smart fridges are expensive. Is that really needed?

::candidate 03:20
Good question. Compared with a spiral vending machine, the smart fridge's main benefit is **fresh food** (spiral machines struggle with salads and wraps) and a faster checkout. The hardware is more expensive, but it pays off through higher usage and lower waste. For smaller offices I'd offer a cheaper version: an open fridge with a tablet kiosk and badge payment (honour system). So the hardware tier matches office size.

::candidate 03:55
**Recommendation:** a smart fridge with badge unlock + a Slack/Teams bot for checking stock and reserving items + data-driven menu rotation + a manager dashboard (spend, waste, top items, subsidy reports).

**Metrics:**
- **North Star:** weekly active employees ÷ total employees (adoption), plus repeat usage.
- **Experience:** checkout time (target under 20 seconds), stockout rate at lunchtime, item ratings.
- **Buyer value:** waste % (target under 5%), cost per employee per month, manager satisfaction, renewal rate.
- **Guardrails:** theft or shrinkage rate, food safety incidents.

**Summary:** For busy employees, the job is fresh, healthy food in under 2 minutes. A badge-unlock smart fridge with live stock and reservations in Slack, a rotating menu and smart restocking delivers that, and gives managers data and low waste.

::scorecard
- **Identified all stakeholders** (user, buyer, operator) and focused on one user.
- **Pushback handled** with a tiered offer instead of defending one option.
- **Metrics covered user value and buyer value** (renewal, waste).
