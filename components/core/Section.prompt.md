# Section

Dark card with gold title bar. The primary layout primitive for every form and result panel in the @ale308win ecosystem. Always use Section to group related fields or outputs.

```jsx
<Section icon="🔩" title="Componentes da Carga">
  {/* inputs go here */}
</Section>

<Section icon="📊" title="Resultados" extra={<Badge grade="excellent" />}>
  {/* result grid */}
</Section>
```

## Notes
- `icon` — pick an emoji from the brand map in readme.md
- `title` — keep short; rendered uppercase in Oswald 2px letter-spacing
- `extra` — right side of the title bar; good for a Badge or a control
- Margin-bottom 12px by default; override via `style`
