::interviewer 00:00
Design an AI tutor for high school students.

::candidate 00:05
Clarifying questions:
1. Which subjects: maths, writing, all subjects?
2. Sold to schools (teachers assign it) or directly to students and parents?
3. Any region? Regulation for minors' data matters.

::interviewer
Maths first. Sold to schools. US.

::candidate 00:20
Plan: (1) users and their jobs, (2) the key design principle, (3) core features, (4) AI quality and safety, (5) teacher role, (6) rollout, (7) metrics.

**1. Users and jobs:**
- **Students:** "When I'm stuck on homework at night, help me understand how to solve it, without feeling dumb." Many feel anxious about maths.
- **Teachers (key buyers/users):** "Help me see who's struggling and with what, and give each student practice at the right level, without enabling cheating."
- **School administrators:** improved outcomes, data privacy compliance, budget.
- **Parents:** confidence their child is learning.

::interviewer
Students will just use it to get answers. How do you prevent that?

::candidate 00:55
That's the core design decision: **a Socratic tutor, not an answer machine.** The tutor:
- Asks what the student has tried; identifies where they're stuck.
- Gives **hints step by step**, asking guiding questions ("What happens if you isolate x first?").
- Only shows a full worked solution after real attempts, then gives a **similar practice problem** to check understanding.
- Teachers can configure how much help is allowed (e.g. no full solutions on graded homework).

This also addresses teachers' biggest concern (cheating), which is essential for school adoption. Khan Academy's Khanmigo took a similar approach, which suggests it's a viable design.

::coach
In education AI, the "won't it just give answers?" question is almost guaranteed. Make pedagogy (Socratic hints) your core principle and link it to buyer concerns.

::candidate 01:30
**3. Core features:**
- **Step-by-step hints** on homework problems (typed or photographed).
- **Mistake diagnosis:** "You distributed the negative sign incorrectly in step 2."
- **Adaptive practice:** problems at the right difficulty, spaced repetition of weak skills.
- **Mastery tracking** by skill (e.g. linear equations, quadratic factoring).
- **Encouraging tone** to reduce maths anxiety.

**4. AI quality and safety:**
- **Maths correctness:** LLMs can make arithmetic or reasoning errors, so verify steps with a **symbolic maths engine** (computer algebra) before presenting them.
- **Eval sets** by topic with teacher-verified solutions; track the error rate in explanations.
- **Content safety:** age-appropriate guardrails, staying on topic.
- **Wellbeing:** detect signs of distress (e.g. self-harm mentions) and route to school-defined support procedures.
- **Privacy:** compliance with student data laws (FERPA, COPPA for under-13s, state laws), minimal data collection, no advertising, school-controlled data.

**5. Teacher role:**
- **Dashboard:** class-level and student-level mastery, common misconceptions ("60% of students struggle with negative exponents").
- **Assign** practice sets; set help levels.
- **Alerts** for students who are stuck or disengaged.

**6. Rollout:** pilot in 10 schools with teacher co-design; train teachers; iterate on hint quality and dashboard usefulness; then expand.

**7. Metrics:**
- **Learning outcomes:** pre/post assessment gains vs comparable classes (the most important measure).
- **Engagement:** weekly active students, problems attempted, hint usage vs full-solution views (ratio shows productive struggle).
- **Teacher adoption:** % of teachers using the dashboard weekly, assignments created.
- **Guardrails:** explanation error rate, safety incidents, privacy compliance, student-reported frustration.
- **Business:** school renewals, district expansion.

**Summary:** an AI maths tutor that teaches through Socratic hints rather than answers, verifies maths with a symbolic engine, adapts practice to each student, and gives teachers actionable insights, all under strict student privacy, measured by learning gains and teacher adoption.

::scorecard
- **Pedagogy-first design** that solves the cheating concern.
- **Technical accuracy safeguard** (symbolic maths verification).
- **Multi-stakeholder design** (students, teachers, admins).
- **Learning outcomes as the primary metric** with privacy compliance.
