import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {Stars, Difficulty} from './Badges';
import index from '@site/src/data/questions-index.json';

const DIFF = {Easy: 1, Medium: 2, Hard: 3};

// Compact sortable list used on category overview pages and "used by" sections.
export default function QuestionTable({category, concept, framework, items}) {
  const [sort, setSort] = useState('stars');
  const rows = useMemo(() => {
    let r = items || index;
    if (category) r = r.filter((q) => q.category === category);
    if (concept) r = r.filter((q) => q.concepts.includes(concept));
    if (framework) r = r.filter((q) => q.framework === framework);
    const cmp = {
      stars: (a, b) => b.stars - a.stars || DIFF[a.difficulty] - DIFF[b.difficulty],
      difficulty: (a, b) => DIFF[a.difficulty] - DIFF[b.difficulty] || b.stars - a.stars,
      title: (a, b) => a.title.localeCompare(b.title),
    }[sort];
    return [...r].sort(cmp);
  }, [category, concept, framework, items, sort]);

  if (!rows.length) return <p className="pm-muted">No questions yet.</p>;
  return (
    <div>
      <div className="pm-sortbar">
        <span className="pm-muted">Sort:</span>
        {[['stars', '★ Learning value'], ['difficulty', 'Difficulty'], ['title', 'A–Z']].map(([k, l]) => (
          <button key={k} className={`pm-toggle ${sort === k ? 'on' : ''}`} onClick={() => setSort(k)}>{l}</button>
        ))}
        <span className="pm-muted">{rows.length} questions</span>
      </div>
      <ul className="pm-qlist">
        {rows.map((q) => (
          <li key={q.id}>
            <Link to={q.url}>{q.title}</Link>
            <span className="pm-qlist-meta">
              <Difficulty value={q.difficulty} />
              <Stars value={q.stars} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
