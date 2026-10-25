import React from 'react';
import Link from '@docusaurus/Link';
import categories from '@site/src/data/categories.json';
import index from '@site/src/data/questions-index.json';

export default function CategoryGrid() {
  return (
    <div className="pm-grid">
      {categories.map((c) => {
        const n = index.filter((q) => q.category === c.slug).length;
        return (
          <Link key={c.slug} to={`/docs/questions/${c.slug}`} className="pm-card" style={{'--accent': c.color}}>
            <div className="pm-card-emoji">{c.emoji}</div>
            <div className="pm-card-title">{c.label}</div>
            <div className="pm-card-text">{c.description}</div>
            <div className="pm-card-foot">{n} questions →</div>
          </Link>
        );
      })}
    </div>
  );
}
