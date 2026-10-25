::interviewer 00:00
Design a product for patients waiting in a hospital emergency room.

::candidate 00:06
Important space. Clarifying questions:
1. Who are we? A health-tech startup selling to hospitals, or part of a hospital system?
2. Who's the main user: the patient, family members, or staff?
3. Any constraints, such as privacy regulation (HIPAA in the US) or integration with hospital systems?

::interviewer
Health-tech startup selling to US hospitals. The main user is up to you. Yes, HIPAA applies.

::candidate 00:35
**Goal:** reduce anxiety and safety risk for people waiting in the ER, and reduce "left without being seen" rates, while saving nursing time. For hospitals (the buyer), that improves patient experience scores, safety and revenue (patients who leave unseen are lost visits and potential liability).

Plan: stakeholders → focus → journey → pains → prioritize → solutions → recommendation → metrics.

::candidate 01:05
**Stakeholders:**
- **Patients**, by acuity: critical (seen immediately), urgent, and **lower-acuity (wait hours)**.
- **Companions / family.**
- **Triage nurses:** overloaded, asked "How much longer?" constantly.
- **Hospital admin:** throughput, patient experience scores, safety.

I'll focus on **lower-acuity patients and their companions**. They wait the longest, they're the ones most likely to leave without being seen, and their anxiety is high.

::candidate 01:40
**Journey (Mark, 45, deep cut on his hand, wife with him):**
1. Arrives, checks in at the desk → triage nurse assesses (5 minutes) → "Please take a seat."
2. **Waits 3 hours with zero information.** People who arrived later get called first (because they're sicker, but Mark doesn't know that) → feels forgotten, angry.
3. Hungry, needs the restroom, but scared to leave in case he misses his name.
4. The cut starts bleeding through the bandage. Unsure whether he should tell someone.
5. His wife texts family: "No idea how long."
6. Finally seen → discharged with paper instructions he half-reads.

**Pains:** no visibility of the wait or queue, feeling forgotten, not understanding triage order, fear of missing his name, no way to report getting worse, family uninformed.

**Prioritize:** (1) **wait transparency** → reduces anxiety and walkouts; (2) **reporting deterioration** → clinical safety; both are high severity. Comfort and family updates come next.

::interviewer
Hospitals can't promise wait times. They change constantly.

::candidate 02:35
Exactly, so the product must **never promise an exact time**. Show a **range** and an explanation: "Typical wait for your priority right now: 1.5–3 hours. Patients with more urgent conditions are seen first, so this may change." Update it as the department's state changes. Transparency about *uncertainty* still reduces anxiety. Studies of waiting psychology suggest that unexplained, unknown waits feel longer than explained ones.

::candidate 03:05
**Solutions:**
1. **SMS wait tracker (no app needed):** after triage, the patient gets a text with a link: status ("waiting for doctor"), expected wait range, an explanation of triage, and "we'll text you 10 minutes before you're called."
2. **"I'm feeling worse" button** in the same link: short symptom questions (pain increasing? bleeding? dizzy?) → flags to the triage nurse dashboard with priority, so they can re-assess.
3. **Freedom to step away:** with a "called soon" text, the patient can go to the cafeteria or restroom without fear.
4. **Family updates:** the patient opts in to share status with a contact.
5. **Waiting-room screen:** anonymized queue progress, the triage explanation, and average waits.
6. **Discharge follow-up:** instructions by text with a video explanation and a symptom check 48 hours later.

::candidate 03:55
**Evaluate:**
- SMS tracker: high impact, low friction (works on any phone), needs integration with the ER tracking board (EHR). **Core.**
- Feeling-worse button: high safety value; risk of flooding nurses → mitigate with structured symptom questions and rules that escalate only red flags. **Core.**
- Family updates: medium value, needs consent flows. **V1 optional.**
- Screen: cheap, helps everyone. **V1.**
- Discharge follow-up: good, but a different phase. **V2.**

**Recommendation:** an SMS-based ER companion (tracker + escalation + "text before you're called") + a waiting-room screen, integrated with the hospital's EHR tracking board. HIPAA-compliant: minimal information in texts, secure links, no diagnoses shown. Pilot in one ER for 3 months.

**Metrics:**
- **Primary:** left-without-being-seen rate (hospital-critical).
- Patient anxiety / experience scores; number of "how long?" questions to nurses (staff time saved); escalations flagged and confirmed clinically.
- **Guardrails:** missed deteriorations (clinical safety review), nurse workload from false escalations, privacy incidents, wait estimate error.

**Summary:** For lower-acuity patients waiting hours, the core problems are not knowing what's happening and not being able to say "I'm getting worse". An SMS companion with honest wait ranges, triage education, a "text before you're called" feature and structured escalation reduces anxiety and walkouts, improves safety, and frees nurses.

::scorecard
- **Multi-stakeholder** (patient, nurse, admin, buyer) with a clear focus.
- **Handled the "can't promise times" constraint** with ranges + explanations.
- **Clinical safety and privacy** built into the design and guardrails.
