# Badge

5-grade performance badge. Use in result tables for ballistic metrics: SD, ES%, ES absolute, and energy. Renders a colored pill with PT-BR label.

```jsx
<Badge grade="excellent" />           {/* → Excelente (green)   */}
<Badge grade="good" />                {/* → Bom (light green)   */}
<Badge grade="acceptable" />          {/* → Aceitável (yellow)  */}
<Badge grade="poor" />                {/* → Ruim (orange)       */}
<Badge grade="critical" />            {/* → Crítico (red)       */}
<Badge grade="excellent">SD < 10</Badge>  {/* custom label      */}
```

## Grade scale (SD in fps)
| Grade | SD range | ES% range |
|---|---|---|
| excellent | < 10 | < 1.0% |
| good | 10–15 | 1.0–1.5% |
| acceptable | 15–25 | 1.5–2.5% |
| poor | 25–35 | 2.5–3.5% |
| critical | > 35 | > 3.5% |
