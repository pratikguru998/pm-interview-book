import React from 'react';
import Link from '@docusaurus/Link';
import {Stars, Difficulty} from './Badges';
import concepts from '@site/src/data/concepts.json';
import frameworks from '@site/src/data/frameworks.json';

export default function QuestionMeta({category, categorySlug, difficulty, stars, subcategory, companies, framework, concepts: used, pme}) {
  return (
    <div className="pm-meta">
      <div className="pm-meta-row">
        <Link className="pm-pill pm-pill-cat" to={`/docs/questions/${categorySlug}`}>{category}</Link>
        {subcategory && <span className="pm-pill pm-pill-soft">{subcategory}</span>}
        <Difficulty value={difficulty} />
        <Stars value={stars} />
        <span className="pm-muted">learning value</span>
      </div>
      {companies.length > 0 && (
        <div className="pm-meta-row">
          <span className="pm-muted">Similar questions reported at:</span>
          {companies.map((c) => (
            <span key={c} className="pm-pill pm-pill-soft">🏢 {c}</span>
          ))}
        </div>
      )}
      <div className="pm-meta-row">
        {framework && (
          <Link className="pm-chip pm-chip-fw" to={`/docs/frameworks/${framework}`}>
            🧭 {frameworks[framework]?.title || framework}
          </Link>
        )}
        {used.map((c) => (
          <Link key={c} className="pm-chip" to={`/docs/concepts/${c}`}>
            💡 {concepts[c]?.title || c}
          </Link>
        ))}
      </div>
      <div className="pm-meta-row">
        <a className="pm-muted pm-small" href={pme} target="_blank" rel="noopener noreferrer">
          ↗ Find community answers to similar questions on productmanagementexercises.com
        </a>
      </div>
    </div>
  );
}
