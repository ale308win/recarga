# ALE308WIN — Design System

**@ale308win** é um perfil de tiro esportivo com foco em cursos de recarga de munição para armas curtas e longas, com mais de **28 anos de experiência**. O ecossistema digital compreende ferramentas técnicas de suporte ao atirador brasileiro.

> Explore as fontes originais para mais contexto:
> - Cronógrafo: https://github.com/ale308win/cronografo
> - Recargas: https://github.com/ale308win/recargas
> - Instagram: https://instagram.com/ale308win

---

## Produtos

| Produto | URL | Descrição |
|---|---|---|
| **Base de Recargas** | `ale308win.github.io/recargas/` | Tabelas e receitas de recarga por calibre |
| **Cronógrafo** | `ale308win.github.io/cronografo/` | Registro e análise balística — AVG, SD, ES, Joules |
| **Área do Atirador** | Hub central (este DS) | Portal SSO + Custo de Recarga + ferramentas futuras |

### Autenticação
Todos os produtos compartilham o **mesmo projeto Supabase** (`retjrajrouanbjzjbyxv.supabase.co`) para SSO automático via `localStorage`. Como todos os apps vivem em `ale308win.github.io/*`, a sessão é compartilhada automaticamente — o usuário faz login uma vez e acessa todos os produtos sem nova autenticação.

---

## CONTENT FUNDAMENTALS

### Idioma e tom
- **Idioma:** Português brasileiro (PT-BR), sem anglicismos desnecessários
- **Tom:** Técnico, direto, preciso — sem floreios nem texto de marketing
- **Voz:** Imperativa e instrucional: "Confirme sempre com o manual do fabricante", "Reduza a carga em 10% e refaça o teste"
- **Pessoa:** Segunda pessoa implícita ("seu calibre", "sua sessão") ou neutro técnico
- **Segurança:** Avisos de segurança sempre em destaque; nunca omitir

### Casing
- Labels de campo: `TODAS EM CAIXA ALTA` com `letter-spacing` — nunca title case
- Títulos de seção: Oswald condensada, caixa alta
- Corpo/subtítulo: capitalização normal, Rajdhani
- Dados numéricos: Share Tech Mono, sempre com unidade sufixada (fps, m/s, J)

### Tagline
> "Material de apoio ao curso de recarga · @ale308win"

### Emoji
- Usados **somente como ícones de seção** — nunca inline no texto técnico ou em dados
- 🎯 é o ícone oficial da marca @ale308win
- Não usar em labels, botões ou mensagens de erro

### Proibido
- Termos vagos como "ótimo", "perfeito" — usar escalas técnicas (SD < 10 fps = "Excelente")
- Omitir avisos de segurança
- Cores sem semântica — gold = ação, verde = seguro/ok, vermelho = perigo

---

## VISUAL FOUNDATIONS

### Paleta
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0b0b0f` | Canvas principal |
| `--bg-2` | `#101018` | Header, superfície elevada |
| `--bg-3` | `#161622` | Cards de seção, painéis |
| `--bg-4` | `#1e1e2e` | Títulos de seção, topo de card |
| `--gold` | `#c09a3a` | Accent principal, títulos, CTAs |
| `--gold-l` | `#d4b050` | Hover do accent |
| `--gold-d` | `#8b7332` | Borders de foco, separadores |
| `--text` | `#ddd8c4` | Texto primário (off-white quente) |
| `--text-2` | `#999887` | Texto secundário (olive-gray) |
| `--border` | `#2a2a3a` | Border padrão |
| `--border-2` | `#383850` | Border elevado |

### Tipografia
- **Oswald** — headings, labels, nav, CTAs. Condensado, uppercase, `letter-spacing` 1.5–3px
- **Rajdhani** — corpo, inputs, formulários. Semi-condensada, pesos 400–700
- **Share Tech Mono** — velocidades, cálculos, dados numéricos. Tom técnico/instrumental

### Bordas e raios
- **2px** padrão (inputs, botões, tabelas) — estética angular/militar
- **4px** cards e seções
- **6px** somente modais
- **Sem** cantos muito arredondados em nenhuma circunstância

### Animações
- `pulse` no loading (opacidade 0.4→1, 1.5s)
- `all .2s` transition nos hovers
- Sem slides, bounces ou animações de entrada

### Hover/Press
- Botões: `filter: brightness(1.12)` hover, `transform: scale(.97)` press
- Cards: border-color → `--gold-d`
- Nav buttons: cor text-2 → gold + border gold
- Inputs: border → gold-d, background → `#0d0d14`

### Badges de performance (5 graus)
| Grade | Fundo | Texto | PT-BR |
|---|---|---|---|
| excellent  | rgba(46,125,50,.25) | #81c784 | Excelente |
| good       | rgba(124,179,66,.2) | #aed581 | Bom |
| acceptable | rgba(249,168,37,.2) | #ffd54f | Aceitável |
| poor       | rgba(230,81,0,.2)   | #ffb74d | Ruim |
| critical   | rgba(198,40,40,.25) | #ef9a9a | Crítico |

---

## ICONOGRAPHY

O projeto usa **exclusivamente emoji** como ícones — sem icon font, sem SVG decorativo, sem CDN externo.

### Mapeamento de seções
| Emoji | Uso |
|---|---|
| 🎯 | Marca / identidade / login |
| 🗂 | Identificação, dados gerais |
| 🔫 | Equipamento / arma |
| 🔩 | Componentes da carga |
| 📡 | Velocidades / medições |
| 📊 | Resultados / composição |
| 🔬 | Métricas / interpretação |
| 📖 | Referência / legenda |
| 📝 | Observações |
| 💾 | Salvar / dados persistidos |
| 📚 | Base de recargas |
| 💰 | Custo / financeiro |
| 📐 | Trajetória / balística |

---

## ÍNDICE

```
styles.css                      ← entry point (apenas @imports)
tokens/
  fonts.css                     ← @import Google Fonts + aliases
  colors.css                    ← CSS custom properties de cor
  typography.css                ← tamanhos, pesos, tracking, leading
  spacing.css                   ← espaçamento, radius, shadow, z-index
assets/
  crono_desktop.jpg             ← hero desktop (login background)
  crono_mobile.jpg              ← hero mobile
components/core/
  Button.jsx + .d.ts + .prompt.md
  Badge.jsx  + .d.ts + .prompt.md
  Section.jsx + .d.ts + .prompt.md
  Input.jsx  + .d.ts + .prompt.md
  core.card.html                ← card do DS tab
guidelines/
  colors-bg.card.html
  colors-accent.card.html
  colors-text.card.html
  colors-status.card.html
  type-headings.card.html
  type-body.card.html
  type-mono.card.html
  brand.card.html
ui_kits/
  hub/index.html                ← Área do Atirador
  cronografo/index.html         ← Cronógrafo (Dashboard + Form)
Custo de Recarga.html           ← App completo (SPA)
readme.md                       ← este arquivo
SKILL.md
```
