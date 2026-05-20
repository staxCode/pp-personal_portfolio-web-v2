# Feature: Animaciones de Transición

## Animación de carga de página (Fade In)

### Cómo funciona
- El elemento `<main id="page-content">` tiene la clase `animate-fade-in`
- Al cargar la página, parte con `opacity: 0`, `scale(0.97)`, `blur(6px)` y `translateY(20px)`
- Transiciona suavemente a `opacity: 1`, `scale(1)`, `blur(0)`, `translateY(0)`

### CSS (`src/styles/app.css`)
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.97);
        filter: blur(6px);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
}

.animate-fade-in {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### Implementado en
- `src/layouts/BaseLayout.astro` - clase `animate-fade-in` en `<main>`

---

## Animación al cambiar idioma o tema (Switch)

### Cómo funciona
1. Se agrega la clase `is-switching` al `<main>`
2. CSS transiciona: `opacity: 1→0`, `scale: 1→0.95`, `translateY: 0→-16px`, `blur: 0→6px`
3. Un `setTimeout` de 400ms espera que termine la animación de salida
4. Se aplica el cambio (traducciones o tema oscuro/claro)
5. Se remueve la clase `is-switching`, lo que revierte la transición (fade in)

### CSS
```css
.transition-layer {
    transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                filter 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.transition-layer.is-switching {
    opacity: 0;
    transform: translateY(-16px) scale(0.95);
    filter: blur(6px);
}
```

### Timing
| Fase | Duración | Descripción |
|---|---|---|
| Fade Out | 450ms | `is-switching` agregado → contenido se desvanece |
| Cambio | instantáneo | Se aplican traducciones o se togglea `.dark` |
| Fade In | 450ms | `is-switching` removido → contenido reaparece |

### Implementado en
- `src/components/LanguageProvider.astro` - `setLanguage(lang, animated)`
- `src/components/ThemeProvider.astro` - `setTheme(theme, animated)`
- `src/layouts/BaseLayout.astro` - clase `transition-layer` en `<main>`

### Diferencia entre animado y no animado
| Llamada | `animated` | ¿Por qué? |
|---|---|---|
| `DOMContentLoaded` | `false` | No animar en carga inicial (ya hay `animate-fade-in`) |
| `astro:after-swap` | `false` | View Transition ya tiene su propia animación |
| `language-change` event | `true` | Animación visible al hacer clic |
| `theme-change` event | `true` | Animación visible al hacer clic |
| `prefers-color-scheme` change | `false` | Cambio de sistema, debe ser instantáneo |

---

## Propiedades de animación

| Propiedad | Valor |
|---|---|
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Duración transición | 450ms |
| Duración carga inicial | 800ms |
| Desplazamiento Y | ±16-20px |
| Escala | 0.95→1 |
| Blur | 6px→0 |
