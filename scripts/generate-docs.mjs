// Generates question docs + indexes from data/questions/*.json.
// Run automatically before `npm start` / `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data');
const docsDir = path.join(root, 'docs');
const outQuestions = path.join(docsDir, 'questions');
const genDir = path.join(root, 'src', 'data');

const categories = JSON.parse(fs.readFileSync(path.join(dataDir, 'categories.json'), 'utf8'));
const catBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

// Map of slug -> file for every .md/.mdx under dir (recursive; index pages excluded).
const filesIn = (dir) => {
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) Object.assign(out, filesIn(full));
    else if (/\.mdx?$/.test(e.name) && !/^index\./.test(e.name)) out[e.name.replace(/\.mdx?$/, '')] = full;
  }
  return out;
};
const conceptFiles = filesIn(path.join(docsDir, 'concepts'));
const frameworkFiles = filesIn(path.join(docsDir, 'frameworks'));
const conceptSlugs = new Set(Object.keys(conceptFiles));
const frameworkSlugs = new Set(Object.keys(frameworkFiles));

// Escape characters MDX would treat as JSX/expressions in authored markdown.
const mdx = (s = '') => String(s).replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/<(?![a-zA-Z/])/g, '&lt;');
// Same, but leaves fenced code blocks (```mermaid etc.) untouched.
const mdxSafe = (s = '') =>
  String(s)
    .split(/(```[\s\S]*?```)/g)
    .map((part, i) => (i % 2 ? part : mdx(part)))
    .join('');

// Mock interview transcripts live in data/interviews/<question-id>.md, split into turns by
// marker lines: ::interviewer [mm:ss], ::candidate [mm:ss], ::coach, ::scorecard
const ROLES = {
  interviewer: {cls: 'pm-int', label: '🧑‍💼 Interviewer'},
  candidate: {cls: 'pm-cand', label: '🙋 You (candidate)'},
  coach: {cls: 'pm-coach', label: '🎓 Coach’s note'},
  scorecard: {cls: 'pm-score', label: '📊 Interviewer scorecard: why this is a “Strong hire”'},
};
const interviewDir = path.join(dataDir, 'interviews');
const renderInterview = (id) => {
  const file = path.join(interviewDir, `${id}.md`);
  if (!fs.existsSync(file)) return null;
  const turns = [];
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^::(interviewer|candidate|coach|scorecard)\s*(\S+)?\s*$/);
    if (m) turns.push({role: m[1], time: m[2] || '', body: []});
    else if (turns.length) turns[turns.length - 1].body.push(line);
  }
  if (!turns.length) throw new Error(`${file}: no ::role markers found`);
  return turns
    .map((t) => {
      const r = ROLES[t.role];
      const time = t.time ? `<span className="pm-time">⏱ ${t.time}</span>` : '';
      return `<div className="pm-turn ${r.cls}">\n<div className="pm-who">${r.label}${time}</div>\n\n${mdxSafe(t.body.join('\n').trim())}\n\n</div>\n`;
    })
    .join('\n');
};

const yamlStr = (s) => JSON.stringify(String(s));
const prop = (v) => `{${JSON.stringify(v)}}`;

const errors = [];
const questions = [];
for (const file of fs.readdirSync(path.join(dataDir, 'questions')).filter((f) => /\.(json|mjs)$/.test(f)).sort()) {
  const full = path.join(dataDir, 'questions', file);
  const items = file.endsWith('.json')
    ? JSON.parse(fs.readFileSync(full, 'utf8'))
    : (await import(pathToFileURL(full).href)).default;
  for (const q of items) {
    const where = `${file}#${q.id}`;
    if (!catBySlug[q.category]) errors.push(`${where}: unknown category ${q.category}`);
    if (!['Easy', 'Medium', 'Hard'].includes(q.difficulty)) errors.push(`${where}: bad difficulty ${q.difficulty}`);
    if (!(q.learningValue >= 1 && q.learningValue <= 5)) errors.push(`${where}: bad learningValue`);
    if (q.framework && !frameworkSlugs.has(q.framework)) errors.push(`${where}: unknown framework ${q.framework}`);
    for (const c of q.concepts || []) if (!conceptSlugs.has(c)) errors.push(`${where}: unknown concept ${c}`);
    if (questions.some((x) => x.id === q.id)) errors.push(`${where}: duplicate id`);
    questions.push(q);
  }
}
if (fs.existsSync(interviewDir)) {
  for (const f of fs.readdirSync(interviewDir).filter((f) => f.endsWith('.md'))) {
    const id = f.replace(/\.md$/, '');
    if (!questions.some((q) => q.id === id)) errors.push(`data/interviews/${f}: no question with id "${id}"`);
  }
}
if (errors.length) {
  console.error('generate-docs: data errors\n  ' + errors.join('\n  '));
  process.exit(1);
}

fs.rmSync(outQuestions, {recursive: true, force: true});
fs.mkdirSync(outQuestions, {recursive: true});
fs.mkdirSync(genDir, {recursive: true});

fs.writeFileSync(
  path.join(outQuestions, 'index.mdx'),
  `---
title: All question categories
sidebar_position: 0
sidebar_label: 🏠 Overview
---
import CategoryGrid from '@site/src/components/CategoryGrid';

# ❓ Question bank

${questions.length} original practice questions across ${categories.length} categories. Each one has a difficulty, a ★ learning-value rating, an answer map diagram, a model answer and links to the concepts it uses.

:::tip How to practise
Read the question, **close the page**, and answer out loud for 10–15 minutes. Then compare with the answer map and model answer. Use the [Question Finder](/questions) to filter by difficulty and rating.
:::

<CategoryGrid />
`,
);

categories.forEach((cat, i) => {
  const dir = path.join(outQuestions, cat.slug);
  fs.mkdirSync(dir, {recursive: true});
  fs.writeFileSync(
    path.join(dir, '_category_.json'),
    JSON.stringify({label: `${cat.emoji} ${cat.label}`, position: i + 1, link: {type: 'doc', id: `questions/${cat.slug}/index`}}, null, 2),
  );
  const list = questions.filter((q) => q.category === cat.slug);
  fs.writeFileSync(
    path.join(dir, 'index.mdx'),
    `---
title: ${yamlStr(cat.label)}
sidebar_label: ${yamlStr(`Overview (${list.length})`)}
sidebar_position: 0
---
import QuestionTable from '@site/src/components/QuestionTable';

# ${cat.emoji} ${cat.label}

${mdx(cat.description)}

:::info Framework for this category
Start with the [${cat.framework} framework](/docs/frameworks/${cat.framework}) before practising.
:::

<QuestionTable category="${cat.slug}" />
`,
  );
  list.forEach((q, j) => {
    const pme = `https://www.google.com/search?q=${encodeURIComponent(`site:productmanagementexercises.com ${q.title}`)}`;
    const out = [];
    out.push('---');
    out.push(`id: ${q.id}`);
    out.push(`title: ${yamlStr(q.title)}`);
    out.push(`sidebar_label: ${yamlStr(`${'★'.repeat(q.learningValue)} ${q.title}`)}`);
    out.push(`sidebar_position: ${j + 1}`);
    out.push(`description: ${yamlStr(`${cat.label} · ${q.difficulty} · ${q.learningValue}/5`)}`);
    out.push(`tags: [${q.difficulty.toLowerCase()}, ${cat.slug}]`);
    out.push('---');
    out.push(`import QuestionMeta from '@site/src/components/QuestionMeta';`);
    if (q.calc) out.push(`import EstimationCalc from '@site/src/components/EstimationCalc';`);
    out.push('');
    out.push(`# ${mdx(q.title)}`);
    out.push('');
    out.push(
      `<QuestionMeta category=${prop(cat.label)} categorySlug=${prop(cat.slug)} difficulty=${prop(q.difficulty)} stars=${prop(q.learningValue)} subcategory=${prop(q.subcategory || '')} companies=${prop(q.companies || [])} framework=${prop(q.framework || '')} concepts=${prop(q.concepts || [])} pme=${prop(pme)} />`,
    );
    out.push('');
    if (q.whyAsked) out.push(`:::note[Why interviewers ask this]\n${mdx(q.whyAsked)}\n:::\n`);
    const interview = renderInterview(q.id);
    if (interview) {
      out.push('## 🎙️ Full mock interview');
      out.push(
        `:::tip[How to use this transcript]\nThis is a complete, realistic interview, including the interviewer's answers to clarifying questions. **First answer the question out loud yourself** (cover the transcript), then read it and compare. 🎓 Coach's notes explain *why* each move scores points.\n:::\n`,
      );
      out.push(interview);
    } else if (q.clarifiers?.length) {
      out.push('## 🤔 Clarifying questions to ask first');
      out.push(q.clarifiers.map((c) => `- ${mdx(c)}`).join('\n'));
      out.push('');
    }
    if (q.diagram) {
      out.push(interview ? '## 🗺️ Answer map: the whole interview on one page' : '## 🗺️ Answer map');
      out.push('```mermaid\n' + q.diagram.trim() + '\n```');
      out.push('');
    }
    if (q.calc) {
      out.push('## 🧮 Play with the assumptions');
      out.push(`<EstimationCalc inputs=${prop(q.calc.inputs)} steps=${prop(q.calc.steps)} />`);
      out.push('');
    }
    out.push(
      interview
        ? '<details>\n<summary><strong>📋 Cheat sheet: the answer in 2 minutes</strong> (for quick revision)</summary>\n'
        : '<details open>\n<summary><strong>✍️ Model answer</strong> (try answering yourself first!)</summary>\n',
    );
    out.push(mdx(q.answer));
    out.push('\n</details>\n');
    if (q.pitfalls?.length) {
      out.push(':::warning[Common pitfalls]');
      out.push(q.pitfalls.map((p) => `- ${mdx(p)}`).join('\n'));
      out.push(':::\n');
    }
    if (q.proTip) out.push(`:::tip[Pro move]\n${mdx(q.proTip)}\n:::\n`);
    if (q.followUps?.length) {
      out.push('## 🔁 Likely follow-up questions');
      out.push(q.followUps.map((f) => `- ${mdx(f)}`).join('\n'));
      out.push('');
    }
    fs.writeFileSync(path.join(dir, `${q.id}.mdx`), out.join('\n'));
  });
});

const index = questions.map((q) => ({
  interview: fs.existsSync(path.join(interviewDir, `${q.id}.md`)),
  id: q.id,
  title: q.title,
  category: q.category,
  subcategory: q.subcategory || '',
  difficulty: q.difficulty,
  stars: q.learningValue,
  companies: q.companies || [],
  framework: q.framework || '',
  concepts: q.concepts || [],
  url: `/docs/questions/${q.category}/${q.id}`,
}));
fs.writeFileSync(path.join(genDir, 'questions-index.json'), JSON.stringify(index));
fs.writeFileSync(path.join(genDir, 'categories.json'), JSON.stringify(categories));
// Titles of concepts/frameworks, for chips and backlinks.
const metaOf = (files) =>
  Object.fromEntries(
    Object.entries(files).map(([slug, file]) => {
      const fm = fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
      const get = (k) => fm.match(new RegExp(`^${k}:\\s*["']?(.*?)["']?\\s*$`, 'm'))?.[1];
      return [slug, {title: get('title') || slug, emoji: get('emoji') || ''}];
    }),
  );
fs.writeFileSync(path.join(genDir, 'concepts.json'), JSON.stringify(metaOf(conceptFiles)));
fs.writeFileSync(path.join(genDir, 'frameworks.json'), JSON.stringify(metaOf(frameworkFiles)));
console.log(`generate-docs: ${questions.length} questions, ${conceptSlugs.size} concepts, ${frameworkSlugs.size} frameworks`);
