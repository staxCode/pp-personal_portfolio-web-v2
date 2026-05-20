# AJUSTES PENDIENTES - V1

> Los tasks se agrupan por fecha y permanecen en su sección hasta que la fecha termine.
> Formato: `YYYY-MM-DD`

---

## 2026-05-20

### Completados
- [x] Botón de cambio de idioma (EN/ES) en el Header
- [x] Provider de idioma (LanguageProvider.astro) con lógica cliente
- [x] Traducciones ES/EN embebidas como JSON en la página
- [x] Archivo `portfolio.en.json` con todas las traducciones del portafolio
- [x] Archivo `typingEffectData.en.json` con palabras del typing effect en inglés
- [x] Atributos `data-i18n` en todos los textos del index.astro
- [x] Soporte `i18nKey` en componentes: Section, Card, ProjectCard, SkillLayout, Label, TypingEffect
- [x] Persistencia de preferencia de idioma en `localStorage`
- [x] Cambio dinámico del atributo `lang` en `<html>`
- [x] Soporte de View Transitions (`astro:after-swap`)
- [x] Traducción de proyectos de Supabase (data attributes con ambos idiomas)
- [x] Agregar animación de transición al cambiar idioma y darkmode

### Pendientes
- [ ] Verificar que existan columnas `title_english` y `description_english` en la tabla `projects` de Supabase
- [ ] Agregar más items de experiencia en ambos idiomas
- [ ] Agregar más proyectos en Supabase con ambos idiomas
- [ ] Revisar que el efecto typing no tenga flicker al cambiar de idioma

---

## Próximos sprints (sin fecha asignada)

- [ ] Agregar página "Blog" con soporte multi-idioma
- [ ] SEO: etiquetas `hreflang` para ES/EN
- [ ] Tests de regresión visual después del cambio de idioma
- [ ] Considerar migrar a `@astrojs/i18n` si el proyecto escala
- [ ] Cargar traducciones de forma lazy en lugar de embebidas (para reducir HTML inicial)
