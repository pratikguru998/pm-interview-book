import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import {Stars, Difficulty} from '@site/src/components/Badges';
import index from '@site/src/data/questions-index.json';
import categories from '@site/src/data/categories.json';
import concepts from '@site/src/data/concepts.json';
import styles from './questions.module.css';

const DIFFS = ['Easy', 'Medium', 'Hard'];
const DIFF_RANK = {Easy: 1, Medium: 2, Hard: 3};
const catBy = Object.fromEntries(categories.map((c) => [c.slug, c]));
const allCompanies = [...new Set(index.flatMap((q) => q.companies))].sort();
const allConcepts = [...new Set(index.flatMap((q) => q.concepts))].sort((a, b) =>
  (concepts[a]?.title || a).localeCompare(concepts[b]?.title || b),
);

const list = (v) => (v ? v.split(',').filter(Boolean) : []);

export default function Questions() {
  const location = useLocation();
  const history = useHistory();
  const initial = useMemo(() => {
    const p = new URLSearchParams(location.search);
    return {
      q: p.get('q') || '',
      cats: list(p.get('cat')),
      diffs: list(p.get('diff')),
      minStars: Number(p.get('stars') || 1),
      company: p.get('company') || '',
      concept: p.get('concept') || '',
      sort: p.get('sort') || 'stars',
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [f, setF] = useState(initial);
  const [showFilters, setShowFilters] = useState(false);
  const activeCount =
    f.cats.length + f.diffs.length + (f.minStars > 1 ? 1 : 0) + (f.company ? 1 : 0) + (f.concept ? 1 : 0);
  const set = (patch) => setF((prev) => ({...prev, ...patch}));
  const toggle = (key, v) => set({[key]: f[key].includes(v) ? f[key].filter((x) => x !== v) : [...f[key], v]});

  // Keep the filters in the URL so a filtered view can be bookmarked.
  useEffect(() => {
    const p = new URLSearchParams();
    if (f.q) p.set('q', f.q);
    if (f.cats.length) p.set('cat', f.cats.join(','));
    if (f.diffs.length) p.set('diff', f.diffs.join(','));
    if (f.minStars > 1) p.set('stars', f.minStars);
    if (f.company) p.set('company', f.company);
    if (f.concept) p.set('concept', f.concept);
    if (f.sort !== 'stars') p.set('sort', f.sort);
    const s = p.toString();
    history.replace({search: s ? `?${s}` : ''});
  }, [f, history]);

  const results = useMemo(() => {
    const words = f.q.toLowerCase().split(/\s+/).filter(Boolean);
    const r = index.filter((q) => {
      if (f.cats.length && !f.cats.includes(q.category)) return false;
      if (f.diffs.length && !f.diffs.includes(q.difficulty)) return false;
      if (q.stars < f.minStars) return false;
      if (f.company && !q.companies.includes(f.company)) return false;
      if (f.concept && !q.concepts.includes(f.concept)) return false;
      if (words.length) {
        const hay = `${q.title} ${q.subcategory} ${catBy[q.category]?.label} ${q.companies.join(' ')} ${q.concepts.join(' ')}`.toLowerCase();
        if (!words.every((w) => hay.includes(w))) return false;
      }
      return true;
    });
    const cmp = {
      stars: (a, b) => b.stars - a.stars || DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty],
      easy: (a, b) => DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty] || b.stars - a.stars,
      hard: (a, b) => DIFF_RANK[b.difficulty] - DIFF_RANK[a.difficulty] || b.stars - a.stars,
      title: (a, b) => a.title.localeCompare(b.title),
    }[f.sort];
    return r.sort(cmp);
  }, [f]);

  const reset = () => setF({q: '', cats: [], diffs: [], minStars: 1, company: '', concept: '', sort: 'stars'});

  return (
    <Layout title="Question Finder" description="Filter PM interview questions by category, difficulty and rating">
      <main className={`container ${styles.wrap}`}>
        <h1>🔎 Question Finder</h1>
        <p className="pm-muted">
          {index.length} questions. Filter by category, difficulty, learning value (★), company or concept.
        </p>

        <div className={styles.panel}>
          <input
            className={styles.search}
            placeholder="Search questions… e.g. retention, Uber, estimate"
            value={f.q}
            onChange={(e) => set({q: e.target.value})}
          />
          <button className={`pm-toggle ${styles.filterToggle}`} onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? '▲ Hide filters' : `▼ Filters${activeCount ? ` (${activeCount})` : ''}`}
          </button>
          <div className={`${styles.filters} ${showFilters ? styles.filtersOpen : ''}`}>

          <div className={styles.group}>
            <span className={styles.label}>Category</span>
            <div className={styles.chips}>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  className={`pm-toggle ${f.cats.includes(c.slug) ? 'on' : ''}`}
                  onClick={() => toggle('cats', c.slug)}>
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.group}>
              <span className={styles.label}>Difficulty</span>
              <div className={styles.chips}>
                {DIFFS.map((d) => (
                  <button key={d} className={`pm-toggle ${f.diffs.includes(d) ? 'on' : ''}`} onClick={() => toggle('diffs', d)}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.group}>
              <span className={styles.label}>
                Min learning value: <Stars value={f.minStars} />
              </span>
              <input type="range" min="1" max="5" value={f.minStars} onChange={(e) => set({minStars: Number(e.target.value)})} />
            </div>
          </div>

          <div className={styles.row}>
            <label className={styles.group}>
              <span className={styles.label}>Company</span>
              <select className={styles.select} value={f.company} onChange={(e) => set({company: e.target.value})}>
                <option value="">Any</option>
                {allCompanies.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className={styles.group}>
              <span className={styles.label}>Concept</span>
              <select className={styles.select} value={f.concept} onChange={(e) => set({concept: e.target.value})}>
                <option value="">Any</option>
                {allConcepts.map((c) => (
                  <option key={c} value={c}>
                    {concepts[c]?.title || c}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.group}>
              <span className={styles.label}>Sort by</span>
              <select className={styles.select} value={f.sort} onChange={(e) => set({sort: e.target.value})}>
                <option value="stars">★ Learning value</option>
                <option value="easy">Easiest first</option>
                <option value="hard">Hardest first</option>
                <option value="title">A–Z</option>
              </select>
            </label>
          </div>
          </div>
          <div className={styles.foot}>
            <strong>{results.length}</strong>&nbsp;matching
            <button className="pm-link-btn" onClick={reset}>Reset filters</button>
          </div>
        </div>

        <div className={styles.results}>
          {results.map((q) => {
            const c = catBy[q.category];
            return (
              <Link key={q.id} to={q.url} className={styles.card} style={{'--accent': c.color}}>
                <div className={styles.cardTop}>
                  <span className={styles.cat}>
                    {c.emoji} {c.label}
                  </span>
                  <Stars value={q.stars} />
                </div>
                <div className={styles.title}>{q.title}</div>
                <div className={styles.cardBottom}>
                  <Difficulty value={q.difficulty} />
                  {q.subcategory && <span className="pm-muted pm-small">{q.subcategory}</span>}
                </div>
              </Link>
            );
          })}
          {!results.length && <p className="pm-muted">No questions match. Try loosening a filter.</p>}
        </div>
      </main>
    </Layout>
  );
}
