::interviewer 00:00
Improve WhatsApp for small businesses.

::candidate 00:05
Clarifying questions:
1. Which markets? WhatsApp is huge for businesses in India, Brazil and Indonesia.
2. Free WhatsApp Business app users (tiny businesses) or larger companies on the API?
3. Goal: adoption, engagement, or revenue for Meta?

::interviewer
India. Tiny businesses on the free app. Goal: deepen usage in a way that eventually leads to revenue.

::candidate 00:30
**Goal:** make WhatsApp the operating system for tiny businesses (taking orders, answering customers, getting paid), so they depend on it daily, which later supports paid features and click-to-WhatsApp ads.

Plan: business segments → persona → journey → pains → ideas → prioritize → metrics.

::candidate 00:50
**Segments:** neighbourhood shops (kirana stores), home bakers and food sellers, service providers (tutors, salons, plumbers), small clothing resellers. I'll focus on **food sellers and kirana stores** taking orders via chat: very common, high message volume, clear workflow.

**Persona:** Ravi runs a bakery in Pune. ~200 customer chats a day: "Is the chocolate cake available?", "Price?", "Can you deliver at 5?", payment screenshots.

::candidate 01:15
**Journey and pains:**
1. Customers ask the same questions repeatedly (prices, timings, menu) → hours of typing.
2. Orders arrive as free text spread across chats → he writes them in a notebook → mistakes, missed orders.
3. Payment confirmation means checking UPI screenshots against his bank app.
4. Delivery status updates by hand.
5. Wants to tell regular customers about the Diwali special, but broadcast lists are limited and feel spammy.

**Prioritize:** (2) **order management** is the root of the chaos and lost revenue; (1) repetitive questions is the biggest time sink.

::candidate 01:50
**Ideas:**
1. **Order inbox:** chats where a customer orders from the catalog (or the AI detects an order in text) become order cards with status (new → preparing → ready → delivered), visible in one list.
2. **Catalog + cart:** customers order from the catalog with quantities; total calculated; time slot selection.
3. **Smart auto-replies:** answer FAQs (hours, prices, availability) from the catalog and business profile, in Hindi, Marathi or English.
4. **UPI payment requests inside the chat** with automatic confirmation linked to the order.
5. **Opt-in customer lists** for offers, with frequency limits.

::interviewer
Ravi isn't tech-savvy. Won't an order system be too complex?

::candidate 02:20
Fair. The design principle: **no new workflow, just structure on top of chat**. He keeps chatting as usual; an order card appears automatically when a catalog order or payment happens, and status updates are one tap (which also notifies the customer). Setup is one step: photograph your menu and the AI creates the catalog. I'd test with 20 sellers in Pune and watch them use it.

::candidate 02:50
**Prioritize:**

| Idea | Time saved | Revenue impact for the business | Effort | Path to revenue for Meta |
|---|---|---|---|---|
| Order inbox | High | High (fewer lost orders) | Medium | Indirect, but builds dependency |
| Catalog + cart | Medium | High | Exists partly | Payments, ads |
| Auto-replies | **High** | Medium | Medium | Possible paid tier later |
| Payments + auto-confirm | Medium | Medium | Medium (UPI exists) | Transaction value |
| Offers lists | Low | Medium | Low | Spam risk |

**Recommendation:** order inbox + menu-photo-to-catalog setup + payment auto-confirmation, then auto-replies.

**Metrics:**
- **North Star:** weekly active businesses processing orders via the order inbox.
- Orders per business per week, response time, payment-linked orders %, catalog creation rate.
- **Future revenue indicators:** click-to-WhatsApp ad adoption by these businesses, payment volume.
- **Guardrails:** customer block or report rate on business accounts, business churn from the app.

**Summary:** Tiny Indian businesses run their whole operation in WhatsApp chats, but orders get lost in the noise. Lightweight structure on top of chat (order cards, a catalog made from a photo, linked payments) saves hours and prevents lost orders, deepening daily dependency that supports future revenue.

::scorecard
- **Market and persona realism** (kirana, UPI, multiple languages).
- **"Structure on top of chat"** principle for low-tech users.
- **Connected improvements to Meta's monetization path.**
