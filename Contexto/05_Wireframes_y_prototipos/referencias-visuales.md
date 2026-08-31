# Referencias visuales

Descripciones estructuradas de capturas/mockups que el equipo trajo como referencia de diseño, generadas con la skill `imagen-a-markdown`. Append-only: nunca se reescribe una entrada vieja, solo se agrega. Cada entrada existe para ser releída al implementar, no para volver a mirar la imagen original.

## [2026-08-31] Rediseño de Ideación (estilo Notion)

### Utrack — dashboard de notas/tareas

- **Tipo**: dashboard estilo Notion, pantalla de notas/tareas con proyectos y grid de tarjetas.
- **Estructura**:
  1. Sidebar violeta oscuro, ancho fijo: logo "Utrack" + ícono de grid arriba; grupo `/MAIN MENU` (Home, My courses, Notes and tasks —activo, con pill violeta de fondo—, Events); grupo `/RESOURCES` (Catalog, Articles, Glossary); grupo `/OTHERS` (Settings) pegado abajo del todo.
  2. Header superior: título de página "Notes and tasks" con ícono chico a la izquierda; a la derecha, buscador (ícono lupa), notificación (campana) y perfil (avatar + nombre + email).
  3. Fila "Projects": 4 tarjetas chicas en fila, cada una con ícono de carpeta de color + nombre debajo. La tarjeta activa ("General", naranja) tiene borde resaltado. Incluye una tarjeta punteada "+ Create new project" al final.
  4. Barra de alta rápida: input de texto placeholder "What's on my mind today?" + botón "+" + botón de enviar (flecha), y a la derecha un `select` "From new to old ▾" y un toggle de 2 tabs "All notes" / "By projects" (tab activo con fondo violeta sólido).
  5. Grid de 2 columnas de tarjetas de nota, sin límite de alto visible (scrollea la página, no la grilla).
- **Componentes**: cada tarjeta de nota tiene — cuadradito de ícono de color arriba a la izquierda (categoriza el tema), título en negrita seguido de 1-2 chips de categoría en la misma línea ("Urgent task" violeta, "Course" verde, "Personal" violeta), fecha chica en gris arriba a la derecha, 2-3 líneas de texto truncado con ellipsis, y opcionalmente un mini-checklist de 2 ítems al pie (uno tachado = completo, con su checkbox coloreado).
- **Estilo visual**: paleta violeta como color de marca (sidebar, tabs activos, algunos chips) + colores secundarios (naranja, verde, azul) usados como categorización de proyecto/tema, no como paleta principal. Esquinas bien redondeadas en tarjetas y pills. Tipografía sans-serif geométrica, títulos en negrita, texto de cuerpo gris medio. Tarjetas blancas sobre fondo gris muy claro, sin sombra marcada (más borde sutil que elevación).
- **Notas de implementación**:
  - No se replica la paleta violeta — Pautia ya tiene su propio sistema (`--primary` azul, `--accent-2` magenta, `--accent` lima); los chips de categoría de Ideación ya existen (`chip--fecha-clave`, `chip--sugerencia-ia`, `chip--propia`) y cumplen el mismo rol que los chips de categoría de esta referencia.
  - Lo que sí vale la pena traer a `Ideacion.jsx`: (1) grid de 2 columnas para las tarjetas de nota en vez de lista de una columna con scroll interno — la referencia no capa el alto, deja que la página scrollee entera; (2) fecha chica arriba a la derecha de cada tarjeta (ya existe, mantener); (3) controles de orden/filtro sobre la lista (acá: "From new to old" + tabs "All notes/By projects" → en Pautia se traduce a un filtro por origen con los chips ya existentes + un `select` de orden, no hace falta un segundo modo "by projects" porque Pautia no tiene el concepto de "proyectos").
  - No se replica la fila "Projects" tal cual (Pautia no tiene esa entidad) ni el mini-checklist (las ideas de Pautia no son tareas con sub-ítems).
  - La edición in-situ de cada tarjeta (pedida aparte, no visible en esta captura) se resuelve con el mismo patrón que ya usa `BloqueTexto.jsx`/las secciones editables de `TuInfo.jsx`, no copiando nada de esta referencia.
