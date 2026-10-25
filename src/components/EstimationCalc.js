import React, {useMemo, useState} from 'react';

const fmt = (n) => {
  if (!isFinite(n)) return '—';
  const a = Math.abs(n);
  if (a >= 1e12) return (n / 1e12).toFixed(2) + ' T';
  if (a >= 1e9) return (n / 1e9).toFixed(2) + ' B';
  if (a >= 1e6) return (n / 1e6).toFixed(2) + ' M';
  if (a >= 1e3) return (n / 1e3).toFixed(1) + ' K';
  return n.toLocaleString(undefined, {maximumFractionDigits: 2});
};

// inputs = [{key, label, value, unit?}], steps = [{key, label, expr}] (expr uses input/step keys)
export default function EstimationCalc({inputs, steps}) {
  const [vals, setVals] = useState(() => Object.fromEntries(inputs.map((i) => [i.key, i.value])));
  const results = useMemo(() => {
    const scope = {...vals};
    return steps.map((s) => {
      let v;
      try {
        // eslint-disable-next-line no-new-func
        v = Function(...Object.keys(scope), `return (${s.expr});`)(...Object.values(scope));
      } catch {
        v = NaN;
      }
      scope[s.key] = v;
      return {...s, v};
    });
  }, [vals, steps]);
  const final = results[results.length - 1];
  return (
    <div className="pm-calc">
      <div className="pm-calc-inputs">
        {inputs.map((i) => (
          <label key={i.key} className="pm-calc-input">
            <span>{i.label}</span>
            <span className="pm-calc-field">
              <input
                type="number"
                step="any"
                value={vals[i.key]}
                onChange={(e) => setVals({...vals, [i.key]: e.target.value === '' ? 0 : Number(e.target.value)})}
              />
              {i.unit && <em>{i.unit}</em>}
            </span>
          </label>
        ))}
      </div>
      <div className="pm-calc-steps">
        {results.map((r, idx) => (
          <div key={r.key} className={`pm-calc-step ${idx === results.length - 1 ? 'final' : ''}`}>
            <span>{r.label}</span>
            <strong>{fmt(r.v)}</strong>
          </div>
        ))}
      </div>
      <div className="pm-muted pm-small">Change any assumption and see how the answer moves. Interviewers love it when you name which assumption the answer is most sensitive to. Your answer: <strong>{fmt(final.v)}</strong></div>
    </div>
  );
}
