# 📘 PM Interview Book

A visual study book for product management interviews, built with [Docusaurus](https://docusaurus.io/).

**Live site:** https://pratikguru998.github.io/pm-interview-book/

- **145 practice questions** across 10 categories, each with a full mock-interview transcript (including the interviewer's answers to clarifying questions), coach's notes, a scorecard, an answer-map diagram and a 2-minute cheat sheet
- **39 concept chapters** (North Star, retention, A/B testing, network effects, LLM evals…) with diagrams, quizzes and "questions that use this concept"
- **11 frameworks** (CIRCLES, metrics, root cause, estimation, STAR…) with interactive step-by-step walkthroughs
- **Question Finder** with filters for category, difficulty, ★ learning value, company and concept

All content is original. Behavioral answers are sample stories. Replace them with your own experiences.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
```

## Add content

- Questions: `data/questions/*.mjs`
- Mock interview transcripts: `data/interviews/<question-id>.md`, using `::interviewer`, `::candidate [mm:ss]`, `::coach` and `::scorecard` blocks
- Concepts and frameworks: `docs/concepts/**`, `docs/frameworks/*.mdx`

`scripts/generate-docs.mjs` turns the data files into pages. It runs automatically before `start` and `build`.

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages via `.github/workflows/deploy.yml`.
