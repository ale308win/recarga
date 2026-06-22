/* @ds-bundle: {"format":3,"namespace":"ALE308WINDesignSystem_4e35da","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Section","sourcePath":"components/core/Section.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"aff31e277ae1","components/core/Button.jsx":"46802bb005cf","components/core/Input.jsx":"8a6df67af4d6","components/core/Section.jsx":"1369b419f635"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ALE308WINDesignSystem_4e35da = window.ALE308WINDesignSystem_4e35da || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const G = {
  excellent: {
    background: 'rgba(46,125,50,.25)',
    color: '#81c784',
    border: '1px solid rgba(46,125,50,.4)',
    label: 'Excelente'
  },
  good: {
    background: 'rgba(124,179,66,.2)',
    color: '#aed581',
    border: '1px solid rgba(124,179,66,.35)',
    label: 'Bom'
  },
  acceptable: {
    background: 'rgba(249,168,37,.2)',
    color: '#ffd54f',
    border: '1px solid rgba(249,168,37,.35)',
    label: 'Aceitável'
  },
  poor: {
    background: 'rgba(230,81,0,.2)',
    color: '#ffb74d',
    border: '1px solid rgba(230,81,0,.35)',
    label: 'Ruim'
  },
  critical: {
    background: 'rgba(198,40,40,.25)',
    color: '#ef9a9a',
    border: '1px solid rgba(198,40,40,.4)',
    label: 'Crítico'
  }
};
function Badge({
  grade = 'acceptable',
  children,
  style: xs = {}
}) {
  const g = G[grade] || G.acceptable;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: '10px',
      fontFamily: 'var(--font-body,Rajdhani,sans-serif)',
      fontWeight: 700,
      padding: '2px 8px',
      borderRadius: '10px',
      letterSpacing: '.3px',
      whiteSpace: 'nowrap',
      ...g,
      ...xs
    }
  }, children || g.label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    background: 'var(--gold,#c09a3a)',
    color: '#000',
    border: 'none'
  },
  secondary: {
    background: 'var(--bg-4,#1e1e2e)',
    color: 'var(--text-2,#999887)',
    border: '1px solid var(--border-2,#383850)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-2,#999887)',
    border: '1px solid var(--border,#2a2a3a)'
  },
  danger: {
    background: 'rgba(198,40,40,.15)',
    color: '#ef9a9a',
    border: '1px solid rgba(198,40,40,.35)'
  },
  success: {
    background: '#1d3b1d',
    color: '#81c784',
    border: '1px solid #2e7d32'
  },
  info: {
    background: '#0d2030',
    color: '#64b5f6',
    border: '1px solid #1565c0'
  }
};
const S = {
  sm: {
    padding: '5px 12px',
    fontSize: '11px'
  },
  md: {
    padding: '9px 20px',
    fontSize: '13px'
  },
  lg: {
    padding: '11px 24px',
    fontSize: '15px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  type = 'button',
  style: xs = {}
}) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      ...(S[size] || S.md),
      ...(V[variant] || V.primary),
      ...xs,
      borderRadius: 'var(--radius-sm,2px)',
      fontFamily: 'var(--font-heading,Oswald,sans-serif)',
      fontWeight: 600,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      transition: 'all .2s',
      opacity: disabled ? .5 : 1,
      whiteSpace: 'nowrap',
      filter: a ? 'brightness(.9)' : h ? 'brightness(1.12)' : 'none',
      transform: a ? 'scale(.97)' : 'none'
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  step,
  unit,
  error,
  options
}) {
  const [focused, setFocused] = React.useState(false);
  const base = {
    width: '100%',
    background: focused ? '#0d0d14' : 'var(--bg,#0b0b0f)',
    border: `1px solid ${focused ? 'var(--gold-d,#8b7332)' : error ? 'rgba(198,40,40,.5)' : 'var(--border-2,#383850)'}`,
    borderRadius: 'var(--radius-sm,2px)',
    padding: '6px 8px',
    color: 'var(--text,#ddd8c4)',
    fontFamily: 'var(--font-body,Rajdhani,sans-serif)',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color .2s'
  };
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      fontFamily: 'var(--font-body,Rajdhani,sans-serif)',
      fontWeight: 700,
      color: 'var(--text-2,#999887)',
      letterSpacing: '.8px',
      textTransform: 'uppercase',
      marginBottom: '3px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, options ? /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...base,
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))) : /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value ?? '',
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    step: step,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: base
  }), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--text-2,#999887)',
      fontFamily: 'var(--font-body,Rajdhani,sans-serif)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, unit)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      color: '#ef9a9a',
      marginTop: '3px'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Section.jsx
try { (() => {
function Section({
  icon,
  title,
  children,
  extra,
  style: xs = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-3,#161622)',
      border: '1px solid var(--border,#2a2a3a)',
      borderRadius: 'var(--radius-md,4px)',
      overflow: 'hidden',
      marginBottom: '12px',
      ...xs
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-4,#1e1e2e)',
      borderBottom: '1px solid var(--border,#2a2a3a)',
      padding: '9px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold,#c09a3a)',
      fontFamily: 'var(--font-heading,Oswald,sans-serif)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      flex: 1
    }
  }, title), extra), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px'
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Section.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Section = __ds_scope.Section;

})();
