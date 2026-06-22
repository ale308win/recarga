import React from 'react';

const V = {
  primary:   { background:'var(--gold,#c09a3a)',       color:'#000',                    border:'none'                                    },
  secondary: { background:'var(--bg-4,#1e1e2e)',        color:'var(--text-2,#999887)',   border:'1px solid var(--border-2,#383850)'       },
  ghost:     { background:'transparent',                color:'var(--text-2,#999887)',   border:'1px solid var(--border,#2a2a3a)'         },
  danger:    { background:'rgba(198,40,40,.15)',         color:'#ef9a9a',                 border:'1px solid rgba(198,40,40,.35)'           },
  success:   { background:'#1d3b1d',                    color:'#81c784',                 border:'1px solid #2e7d32'                       },
  info:      { background:'#0d2030',                    color:'#64b5f6',                 border:'1px solid #1565c0'                       },
};
const S = {
  sm: { padding:'5px 12px',  fontSize:'11px' },
  md: { padding:'9px 20px',  fontSize:'13px' },
  lg: { padding:'11px 24px', fontSize:'15px' },
};

export function Button({ variant='primary', size='md', children, onClick, disabled=false, type='button', style:xs={} }) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  return (
    <button
      type={type} onClick={onClick} disabled={disabled}
      onMouseEnter={()=>setH(true)}
      onMouseLeave={()=>{setH(false);setA(false);}}
      onMouseDown={()=>setA(true)}
      onMouseUp={()=>setA(false)}
      style={{
        ...S[size]||S.md, ...V[variant]||V.primary, ...xs,
        borderRadius:'var(--radius-sm,2px)',
        fontFamily:'var(--font-heading,Oswald,sans-serif)',
        fontWeight:600,
        letterSpacing:'1.5px',
        textTransform:'uppercase',
        cursor:disabled?'not-allowed':'pointer',
        display:'inline-flex',
        alignItems:'center',
        gap:'7px',
        transition:'all .2s',
        opacity:disabled?.5:1,
        whiteSpace:'nowrap',
        filter:a?'brightness(.9)':h?'brightness(1.12)':'none',
        transform:a?'scale(.97)':'none',
      }}
    >
      {children}
    </button>
  );
}
