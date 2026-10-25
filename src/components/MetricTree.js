import React, {useState} from 'react';

// Collapsible metric tree: node = {label, note?, children?: [node]}
function Node({node, depth}) {
  const [open, setOpen] = useState(depth < 2);
  const has = node.children?.length;
  return (
    <li className={`pm-tree-node d${Math.min(depth, 3)}`}>
      <div className="pm-tree-label" onClick={() => has && setOpen(!open)} style={{cursor: has ? 'pointer' : 'default'}}>
        {has ? <span className="pm-tree-caret">{open ? '▾' : '▸'}</span> : <span className="pm-tree-caret">•</span>}
        <strong>{node.label}</strong>
        {node.note && <span className="pm-muted"> {node.note}</span>}
      </div>
      {has && open && (
        <ul>
          {node.children.map((c, i) => (
            <Node key={i} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MetricTree({tree}) {
  return (
    <ul className="pm-tree">
      <Node node={tree} depth={0} />
    </ul>
  );
}
