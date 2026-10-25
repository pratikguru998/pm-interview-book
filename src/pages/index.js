import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Mermaid from '@theme/Mermaid';
import CategoryGrid from '@site/src/components/CategoryGrid';
import index from '@site/src/data/questions-index.json';
import concepts from '@site/src/data/concepts.json';
import frameworks from '@site/src/data/frameworks.json';
import styles from './index.module.css';

const path = `flowchart LR
  A["💡 Concepts<br/>learn the building blocks"] --> B["🧭 Frameworks<br/>structure your answer"]
  B --> C["❓ Questions<br/>practise out loud"]
  C --> D["🔁 Review<br/>compare with the model answer"]
  D -->|"gap found"| A
  style A fill:#ede9fe,stroke:#8b5cf6,color:#1e1b4b
  style B fill:#fce7f3,stroke:#ec4899,color:#500724
  style C fill:#dcfce7,stroke:#10b981,color:#052e16
  style D fill:#fef3c7,stroke:#f59e0b,color:#451a03`;

export default function Home() {
  const stats = [
    ['❓', index.length, 'questions'],
    ['💡', Object.keys(concepts).length, 'concepts'],
    ['🧭', Object.keys(frameworks).length, 'frameworks'],
    ['⭐', index.filter((q) => q.stars === 5).length, 'must-practise (5★)'],
  ];
  return (
    <Layout title="Home" description="Visual product management interview study book">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>📘 PM Interview Book</h1>
          <p className={styles.sub}>Learn product management interviews visually: concepts, frameworks and rated practice questions with model answers.</p>
          <div className={styles.ctas}>
            <Link className="button button--primary button--lg" to="/docs/start-here">🗺️ Start here</Link>
            <Link className="button button--secondary button--lg" to="/questions">🔎 Find questions</Link>
          </div>
          <div className={styles.stats}>
            {stats.map(([e, n, l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statN}>{e} {n}</span>
                <span className="pm-muted">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
      <main className="container" style={{padding: '2rem 16px 4rem'}}>
        <h2>The learning loop</h2>
        <Mermaid value={path} />
        <h2>Pick a category</h2>
        <CategoryGrid />
      </main>
    </Layout>
  );
}
