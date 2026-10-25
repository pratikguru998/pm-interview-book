::interviewer 00:00
Your team wants to use machine learning to screen job applicants. What concerns would you raise, and how would you proceed?

::candidate 00:05
Clarifying questions:
1. Are we building this for our own company's hiring, or as a product for other companies (like an HR tech platform)?
2. What exactly would the model do: rank applicants, auto-reject, or suggest matches?
3. Which countries?

::interviewer
It's a feature for an HR software product used by many companies. The model would rank applicants for recruiters. US and EU.

::candidate 00:25
This is a high-stakes use of AI: it affects people's livelihoods, and it's regulated. I'd raise concerns in five areas, then propose how to proceed responsibly.

**1. Bias from historical data.** If we train on past hiring decisions, the model learns past patterns, including discrimination. A well-known example: Amazon reportedly scrapped an experimental recruiting tool after finding it downgraded résumés mentioning "women's" (e.g. women's colleges), because it learned from a male-dominated history.
Even without protected attributes (gender, race), **proxies** leak in: names, zip codes, certain schools, gaps in employment (which can correlate with caregiving).

**2. Fairness measurement.** We need to measure outcomes across groups, e.g. selection rates by gender and ethnicity. US guidance uses the **four-fifths rule** (a group's selection rate below 80% of the highest group's suggests adverse impact). We'd need demographic data (collected voluntarily and handled carefully) to audit.

**3. Regulation:**
- **EU AI Act:** AI used for recruitment is classified as **high-risk**, requiring risk management, data governance, transparency, human oversight, and documentation.
- **US:** anti-discrimination law (Title VII, EEOC guidance) applies to algorithmic tools; **New York City's Local Law 144** requires bias audits and notice for automated employment decision tools.
- GDPR rights around automated decision-making in the EU.

**4. Transparency and explainability.** Candidates and recruiters should understand the factors behind rankings; "black box" decisions undermine trust and may not meet legal requirements.

**5. Validity.** Does the model actually predict job performance, or just resemble past hires? Many signals (school prestige) predict poorly.

::interviewer
So should we not build it?

::candidate 01:35
Not necessarily. Done responsibly, it can help recruiters handle volume and can even **reduce** some human biases. But only with strict design choices:

**How to proceed:**
1. **Narrow the task:** focus on **skills-based matching** (does the candidate have the required skills and experience for this specific job?), not "predict who we'd hire".
2. **Feature design:** exclude protected attributes and known proxies (names, photos, addresses, graduation years); use job-relevant structured information.
3. **Human in the loop:** the model **ranks and explains**; recruiters decide. **No automatic rejections.**
4. **Bias audits:** before launch and regularly (e.g. quarterly), test selection rates across groups; independent third-party audits where required (NYC law).
5. **Transparency:** notify candidates that AI assists screening; provide explanations to recruiters ("Matches 8 of 10 required skills").
6. **Customer controls and documentation:** model cards, guidance for customers on responsible use, ability to turn off.
7. **Feedback and monitoring:** track outcomes and drift; a process for candidates to raise concerns.
8. **Validation:** link to job-relevant outcomes where possible.

**Metrics:** recruiter time saved, quality of shortlists (recruiter ratings, interview-to-offer rate), **adverse impact ratios** by group (must stay above thresholds), explanation usefulness, complaint rates, and regulatory audit results.

**Summary:** the main risks are historical bias and proxies, fairness, regulation (EU AI Act high-risk, NYC bias audits), transparency and validity. It's possible to proceed only with skills-based matching, proxy removal, human decisions, regular bias audits, candidate notice and strong documentation.

::scorecard
- **Comprehensive risk analysis** with a real-world example.
- **Regulatory knowledge** (EU AI Act, NYC Local Law 144, four-fifths rule).
- **Constructive path forward** rather than a flat "no".
- **Fairness metrics** included alongside product metrics.
