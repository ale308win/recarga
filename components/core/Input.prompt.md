# Input

Form field with uppercase Rajdhani label. Renders a `<input>` or `<select>` (when `options` is provided). Covers all data-entry surfaces across the @ale308win ecosystem.

```jsx
<Input label="Calibre" value={cal} onChange={setCal} placeholder="Ex: 5.56×45" />
<Input label="Carga (gr)" value={gr} onChange={setGr} type="number" step="0.1" unit="gr" />
<Input label="Tipo" value={tipo} onChange={setTipo} options={['Pistola','Revólver','Rifle']} />
<Input label="Senha" value={pw} onChange={setPw} type="password" error="Mínimo 8 caracteres" />
```

## Notes
- Pass `options` (string[] or `{value, label}[]`) to get a `<select>` automatically
- `unit` appends a suffix label (fps, gr, R$, mm)
- `error` shows a red message below — always in PT-BR
- Focus: border → `--gold-d`, background → `#0d0d14`
