import React from 'react';

export function Input({ label, value, onChange, type='text', placeholder='', step, unit, error, options }) {
  const [focused, setFocused] = React.useState(false);
  const base = {
    width:'100%',
    background:focused?'#0d0d14':'var(--bg,#0b0b0f)',
    border:`1px solid ${focused?'var(--gold-d,#8b7332)':error?'rgba(198,40,40,.5)':'var(--border-2,#383850)'}`,
    borderRadius:'var(--radius-sm,2px)',
    padding:'6px 8px',
    color:'var(--text,#ddd8c4)',
    fontFamily:'var(--font-body,Rajdhani,sans-serif)',
    fontSize:'13px',
    outline:'none',
    transition:'border-color .2s',
  };
  return (
    <div>
      {label&&<div style={{fontSize:'10px',fontFamily:'var(--font-body,Rajdhani,sans-serif)',fontWeight:700,color:'var(--text-2,#999887)',letterSpacing:'.8px',textTransform:'uppercase',marginBottom:'3px'}}>{label}</div>}
      <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
        {options
          ? <select value={value} onChange={e=>onChange&&onChange(e.target.value)} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} style={{...base,cursor:'pointer'}}>
              {options.map(o=><option key={o.value??o} value={o.value??o}>{o.label??o}</option>)}
            </select>
          : <input type={type} value={value??''} onChange={e=>onChange&&onChange(e.target.value)} placeholder={placeholder} step={step}
              onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} style={base} />
        }
        {unit&&<span style={{fontSize:'11px',color:'var(--text-2,#999887)',fontFamily:'var(--font-body,Rajdhani,sans-serif)',whiteSpace:'nowrap',flexShrink:0}}>{unit}</span>}
      </div>
      {error&&<div style={{fontSize:'10px',color:'#ef9a9a',marginTop:'3px'}}>{error}</div>}
    </div>
  );
}
