import React from 'react';

export function Stars({value, size}) {
  return (
    <span className="pm-stars" style={size ? {fontSize: size} : undefined} title={`Learning value ${value}/5`}>
      {'★'.repeat(value)}
      <span className="pm-stars-off">{'★'.repeat(5 - value)}</span>
    </span>
  );
}

export function Difficulty({value}) {
  return <span className={`pm-pill pm-diff-${value.toLowerCase()}`}>{value}</span>;
}
