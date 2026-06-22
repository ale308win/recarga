---
name: ale308win-design
description: Use this skill to generate well-branded interfaces and assets for @ale308win — an elite Brazilian sport shooting and ammunition reloading brand with 28+ years of experience. Contains design guidelines, Supabase SSO auth integration, color/typography tokens, and UI kit components for the Cronógrafo and Área do Atirador apps.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Key technical notes
- All products share Supabase project `retjrajrouanbjzjbyxv.supabase.co` — SSO is automatic when deployed under `ale308win.github.io/*`
- Fonts: Oswald (headings), Rajdhani (body), Share Tech Mono (data)
- Background images: `assets/crono_desktop.jpg` and `assets/crono_mobile.jpg`
- Gold accent: `#c09a3a` (hover: `#d4b050`, border: `#8b7332`)
- Dark bg stack: `#0b0b0f → #101018 → #161622 → #1e1e2e`
- Angular aesthetic: max border-radius 4px (6px for modals only)
- Ballistic metrics badges: excellent/good/acceptable/poor/critical (5-grade green→red scale)
- Language: PT-BR, imperative/technical tone, no marketing fluff
