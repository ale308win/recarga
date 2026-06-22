import React from 'react';

const G = {
  excellent:  { background:'rgba(46,125,50,.25)',  color:'#81c784', border:'1px solid rgba(46,125,50,.4)',  label:'Excelente' },
  good:       { background:'rgba(124,179,66,.2)',  color:'#aed581', border:'1px solid rgba(124,179,66,.35)',label:'Bom'       },
  acceptable: { background:'rgba(249,168,37,.2)',  color:'#ffd54f', border:'1px solid rgba(249,168,37,.35)',label:'Aceitável' },
  poor:       { background:'rgba(230,81,0,.2)',    color:'#ffb74d', border:'1px solid rgba(230,81,0,.35)',  label:'Ruim'      },
  critical:   { background:'rgba(198,40,40,.25)',  color:'#ef9a9a', border:'1px solid rgba(198,40,40,.4)', label:'Crítico'   },
};

export function Badge({ grade='acceptable', children, style:xs={} }) {
  const g = G[grade]||G.acceptable;
  return (
    <span style={{
      display:'inline-block',
      fontSize:'10px',
      fontFamily:'var(--font-body,Rajdhani,sans-serif)',
      fontWeight:700,
      padding:'2px 8px',
      borderRadius:'10px',
      letterSpacing:'.3px',
      whiteSpace:'nowrap',
      ...g, ...xs,
    }}>
      {children||g.label}
    </span>
  );
}
