import React from 'react';

export function Section({ icon, title, children, extra, style:xs={} }) {
  return (
    <div style={{
      background:'var(--bg-3,#161622)',
      border:'1px solid var(--border,#2a2a3a)',
      borderRadius:'var(--radius-md,4px)',
      overflow:'hidden',
      marginBottom:'12px',
      ...xs,
    }}>
      <div style={{
        background:'var(--bg-4,#1e1e2e)',
        borderBottom:'1px solid var(--border,#2a2a3a)',
        padding:'9px 16px',
        display:'flex',
        alignItems:'center',
        gap:'8px',
      }}>
        {icon&&<span style={{fontSize:'14px'}}>{icon}</span>}
        <span style={{
          color:'var(--gold,#c09a3a)',
          fontFamily:'var(--font-heading,Oswald,sans-serif)',
          fontSize:'12px',
          fontWeight:600,
          letterSpacing:'2px',
          textTransform:'uppercase',
          flex:1,
        }}>
          {title}
        </span>
        {extra}
      </div>
      <div style={{padding:'14px 16px'}}>
        {children}
      </div>
    </div>
  );
}
