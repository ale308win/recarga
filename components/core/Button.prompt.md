# Button

Renders a styled button matching the @ale308win dark-gold tactical aesthetic. Use for any actionable trigger — form save, calculate, export, delete, navigation.

```jsx
<Button variant="primary" onClick={save}>💾 Salvar Sessão</Button>
<Button variant="secondary" size="sm">← Voltar</Button>
<Button variant="ghost">Limpar</Button>
<Button variant="danger" size="sm">Excluir</Button>
<Button variant="success">📊 Excel</Button>
<Button variant="info">⚡ Calcular</Button>
<Button disabled>Aguarde...</Button>
```

## Variants
| Variant | Aparência | Quando usar |
|---|---|---|
| primary | Gold background, black text | Ação principal da tela (Salvar, Entrar) |
| secondary | Dark bg, gray text | Ação secundária, seletor de tab |
| ghost | Transparent, gray text | Cancelar, Voltar, ações terciárias |
| danger | Red tint | Excluir, ações destrutivas |
| success | Green tint | Export Excel, ações de sucesso |
| info | Blue tint | Calcular, ações analíticas |
