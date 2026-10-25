import React from 'react';
import QuestionTable from './QuestionTable';

// Auto-generated backlinks: every question that references this concept or framework.
export default function UsedBy({concept, framework}) {
  return (
    <div className="pm-usedby">
      <h2>❓ Questions that use this {concept ? 'concept' : 'framework'}</h2>
      <QuestionTable concept={concept} framework={framework} />
    </div>
  );
}
