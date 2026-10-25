import React, {useState} from 'react';

const PALETTE = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#0ea5e9', '#6366f1', '#ef4444', '#14b8a6'];

// Clickable step ribbon: steps = [{letter, title, desc, ask?: [..]}]
export default function FrameworkSteps({steps}) {
  const [active, setActive] = useState(0);
  const s = steps[active];
  return (
    <div className="pm-steps">
      <div className="pm-steps-ribbon">
        {steps.map((st, i) => (
          <button
            key={i}
            className={`pm-step ${i === active ? 'on' : ''}`}
            style={{'--accent': PALETTE[i % PALETTE.length]}}
            onClick={() => setActive(i)}>
            <span className="pm-step-letter">{st.letter}</span>
            <span className="pm-step-title">{st.title}</span>
          </button>
        ))}
      </div>
      <div className="pm-steps-panel" style={{'--accent': PALETTE[active % PALETTE.length]}}>
        <div className="pm-steps-head">
          Step {active + 1} of {steps.length}: <strong>{s.title}</strong>
        </div>
        <p>{s.desc}</p>
        {s.ask && (
          <ul>
            {s.ask.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}
        <div className="pm-steps-nav">
          <button className="pm-toggle" disabled={active === 0} onClick={() => setActive(active - 1)}>← Prev</button>
          <button className="pm-toggle" disabled={active === steps.length - 1} onClick={() => setActive(active + 1)}>Next →</button>
        </div>
      </div>
    </div>
  );
}
