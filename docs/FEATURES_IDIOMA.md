# Feature: Cambio de Idioma (ES / EN)

## Arquitectura

El sistema de internacionalización es 100% client-side, sin dependencias externas. Los datos de ambos idiomas se embeben en el HTML en tiempo de build y se intercambian via JavaScript.

---

## Flujo de datos

```
Build time:
  portfolio.json (ES) ─┐
                       ├──→ i18n-data (JSON embebido en <script id="i18n-data">)
  portfolio.en.json ───┘

Runtime:
  Usuario click [EN|ES]
       ↓
  Header.astro dispatch CustomEvent('language-change')
       ↓
  LanguageProvider.astro recibe el evento
       ↓
  applyTranslations(lang) busca [data-i18n] en el DOM y actualiza textContent
       ↓
  Los textos se actualizan en el idioma seleccionado
```

---

## Componentes involucrados

| Componente | Rol |
|---|---|
| `LanguageProvider.astro` | Script inline que maneja la lógica: lectura de datos, aplicación de traducciones, persistencia en localStorage |
| `Header.astro` | Botón `#toggleLanguage` que dispara el evento `language-change` |
| `ThemeProvider.astro` | *(limpiado)* Ya no maneja idioma, solo tema |
| `BaseLayout.astro` | Embebe ambos JSON como `<script type="application/json" id="i18n-data">` |

---

## Cómo agregar un nuevo texto traducible

1. Agregar la clave en `portfolio.json` (ES) y `portfolio.en.json` (EN)
2. En el template `.astro`, agregar `data-i18n="ruta.de.la.clave"` al elemento HTML
3. Si el texto está dentro de un componente (Section, Card, etc.), usar la prop `i18nKey` (ej: `<Section title="..." i18nKey="sections.about.title" />`)

### Convención de claves

```
header.title
header.description
header.links.{n}.name
sections.about.title
sections.about.description
sections.experience.title
sections.experience.items.{n}.company
sections.experience.items.{n}.position
sections.experience.items.{n}.duration
sections.experience.items.{n}.activities.{n}
sections.education.title
sections.education.items.{n}.institution
sections.education.items.{n}.degree
sections.education.items.{n}.duration
sections.proyects.title
sections.skills.title
sections.skills.types.{n}.name
footer.copyright
```

---

## Proyectos de Supabase

Los proyectos vienen de Supabase con campos `title_spanish` / `description_spanish` y opcionalmente `title_english` / `description_english`. Se renderizan ambos como data attributes:

```html
<h1 data-i18n-project-heading="0" 
    data-i18n-project-heading-es="Título ES"
    data-i18n-project-heading-en="Title EN">Título ES</h1>
```

`LanguageProvider` intercambia el `textContent` según el atributo `data-i18n-project-heading-{lang}`.

**Pendiente:** Verificar que existan las columnas `title_english` y `description_english` en Supabase.

---

## Persistencia

- Clave en `localStorage`: `language`
- Valores: `'es'` | `'en'`
- Default: `'es'`
- Se restaura en `astro:after-swap` (View Transitions)

---

## Tipos de archivos de traducción

| Archivo | Idioma | Propósito |
|---|---|---|
| `src/data/portfolio.json` | ES | Datos principales del portafolio |
| `src/data/portfolio.en.json` | EN | Traducción al inglés |
| `public/data/typingEffectData.es.json` | ES | Palabras del efecto typing |
| `public/data/typingEffectData.en.json` | EN | Palabras del efecto typing |
