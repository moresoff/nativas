# Design System de Pautia

Aprobado por el equipo en la Clase 6. Los valores concretos (colores, tamaños,
espaciados) viven en [`tokens.css`](tokens.css). Este archivo explica **por qué**
son esos y **cuándo** usar cada cosa.

Regla general: si un valor visual se repite en más de una pantalla, va en
`tokens.css` y se usa desde ahí. Nunca escribir un color o un tamaño a mano
dentro de un componente.

---

## 1. Color

### Principal — Azul `#0A59DA`

*(Tercer cambio de paleta, Ciclo 2.4: el equipo probó varios tonos de azul
en vivo antes de decidir — descartamos un celeste más claro porque el texto
blanco de los botones no llegaba al contraste mínimo — y sacamos el violeta
del todo, reemplazado por un azul más brillante solo para detalles.)*
Botones, barra lateral, foco: blanco sobre este azul da 6.1:1 de contraste,
por encima del mínimo de 4.5:1.

Se usa en: botones principales, links, burbuja del usuario en el chat, barrita
lateral de los bloques de texto, estado de foco, ítem activo del menú lateral,
degradado del panel de resultados (carrusel, en dos intensidades del mismo
azul).

### Fondo crema `#FAF8F5`

No blanco puro. El usuario va a leer textos largos (copy, términos y
condiciones) y el blanco puro cansa la vista.

### Acento `#3B82F6`

Un azul más claro y brillante que el principal, para detalles puntuales
— el alfiler del post-it y poco más — a propósito angosto, para que no se
sienta "un solo color de IA". **Nunca como texto chico sobre el fondo
crema** — no llega al contraste mínimo. Para texto sobre `--accent-soft`,
usar `--accent-ink`.

### Ámbar `#F59E0B`

Color de "atención / revisar". Antes vivía solo en `--warn`; ahora es también
el criterio para todo lo que necesita que la PyME se detenga a mirarlo antes
de lanzar una campaña — por ejemplo el estado "Para revisar" de una campaña
en borrador, que casi siempre implica revisar el copy o los T&C.

### Pasteles — menta, durazno, arena, cielo

Fondo de las tarjetas de métrica. Cada métrica tiene su color fijo, siempre el
mismo, para que se distingan de un vistazo sin leer la etiqueta.

---

## 2. Tipografía

**Inter**, una sola familia, en cinco pesos. La jerarquía la hace el peso y el
tamaño, no una segunda fuente.

| Token | Uso |
|---|---|
| `--t-display` | Saludo del Home ("¡Hola, Van Luz!") |
| `--t-h1` / `--t-h2` | Títulos de pantalla y de sección |
| `--t-h3` | Título de una tarjeta |
| `--t-body` | Copy, T&C, resúmenes — todo párrafo largo |
| `--t-ui` | Botones y navegación |
| `--t-small` | Etiquetas y textos de ayuda |
| `--t-label` | Rótulos en mayúsculas, con `letter-spacing: .08em` |

**Los párrafos largos nunca superan `--lectura` (68 caracteres de ancho).** Más
ancho que eso y el ojo pierde el renglón al volver.

Los números llevan `font-variant-numeric: tabular-nums` para que no bailen al
actualizarse.

---

## 3. Efecto vidrio

```css
backdrop-filter: blur(18px);
background: rgba(255, 255, 255, .62);
border: 1px solid rgba(255, 255, 255, .8);
border-radius: var(--r-lg);
box-shadow: var(--sh-2);
```

**Sí:** tarjetas de métrica, barra superior fija, paneles flotantes. Siempre
apoyado sobre una franja con `--grad`.

**No:** nunca detrás de un párrafo largo. El copy y los T&C van sobre blanco
sólido. Son un documento que la PyME tiene que revisar palabra por palabra antes
de lanzar la campaña; si el fondo tiene transparencias, se lee peor y se cometen
errores. Ese es justo el problema que Pautia vino a resolver.

El degradado usa **un solo color en dos intensidades**. Más colores compiten con
el contenido que tiene encima.

---

## 4. Espaciado, bordes y sombras

- **Espaciado:** todo múltiplo de 4 (`--s-1` a `--s-8`). Sin excepciones.
- **Radios:** `8` campos y bloques de texto · `16` tarjetas · `24` paneles y
  vidrio · `999` botones y chips.
- **Sombras:** dos niveles nada más. `--sh-1` para tarjetas apoyadas,
  `--sh-2` para lo que flota.

---

## 5. Componentes

### Botón
Cinco estados: normal, hover, foco (contorno visible, para quien navega con
teclado), deshabilitado, y las tres variantes — principal (sólido), secundario
(solo borde) y fantasma (sin fondo).

### Campo de formulario
Tres estados: normal, con foco (borde azul + halo), con error (borde rojo +
mensaje debajo explicando **qué hacer**, no solo que está mal).

### Tarjeta de métrica
Etiqueta chica arriba, número grande abajo, comparación contra el período
anterior en verde o rojo. Fondo pastel.

### Tarjeta de campaña
Título, chip de estado, línea de detalle (tipo · canal · segmento), botón "Ir".
La foto de la izquierda: mientras la campaña no tiene ninguna, es un recuadro
con ícono de cámara y borde punteado; si ya tiene una (por ahora, 3 fotos de
ejemplo puestas a mano en `datos/simulados.js`, todavía no hay subida real
conectada a esta pantalla), se muestra ahí adentro con borde sólido.

### Bloque de texto — copy y T&C
Blanco sólido, barrita azul a la izquierda, ancho limitado a `--lectura`,
botones de copiar y editar al pie. **Es el componente más importante del
producto**: es donde vive lo que Pautia realmente entrega.

### Carrusel de resultados
Panel azul; una campaña a la vez. El título va directo sobre el
degradado, y cada métrica es su propia tarjeta de vidrio claro
(`--vidrio-panel-bg`, blur 14px) — vidrio sobre un fondo saturado, no
sobre el fondo crema, por eso usa texto blanco y verdes/rojos más claros
(`--ok-sobre-saturado` / `--err-sobre-saturado`) en vez de los tonos de
estado normales, que no se leerían bien ahí. Flechas a los costados,
puntos siempre abajo, centrados.

### Post-it (sugerencias)
Papel color manteca, alfiler de acento, leve inclinación alternada — versión
minimalista de la referencia que trajo el equipo. Sin renglones ni doblez de
papel: solo lo esencial para que se lea como una nota pegada, no como una
tarjeta más.

### Chat
Burbuja del usuario en azul alineada a la derecha; respuesta en blanco
con borde a la izquierda.

Las opciones de respuesta viven en una **tarjeta ancla, pegada justo arriba
del campo de escribir** — no adentro del scroll de mensajes. Al no formar
parte de la conversación que se va acumulando, los mensajes ya enviados no
se corren de lugar cuando aparece una pregunta nueva: el chat siempre baja
solo hasta el último mensaje (`scrollIntoView` sobre un ancla al final de la
lista) y lo anterior queda fijo, como en un chat de verdad. Cada opción es
una fila con un número a la derecha (mismo lenguaje visual que las tarjetas
de elección de Claude); "Saltear" va al final, en cursiva y con menos peso.
Mientras haya una pregunta con tarjeta de opciones y el campo de texto esté
habilitado, la persona puede tipear su propia respuesta en vez de elegir una
— el campo queda habilitado en las primeras preguntas abiertas, no solo en
el primer mensaje.

La vista de chat ocupa toda la altura disponible de la pantalla
(`Layout` recibe `pantallaCompleta`) y no vive dentro de ningún recuadro: el
encabezado queda pegado arriba, los mensajes scrollean directo sobre el fondo
de la pantalla, y el campo para escribir queda siempre pegado abajo — igual
que en un chat de verdad, no como una tarjeta más de contenido en medio de
la página.

A la izquierda vive el historial de conversaciones (`+ Nueva campaña` arriba
de todo, la conversación activa resaltada, después las anteriores). Por ahora
las conversaciones anteriores son datos simulados y no se pueden reabrir —
existen para mostrar dónde va a vivir esa lista cuando el repositorio de
Campañas exista de verdad. El nombre de la conversación activa es editable
(ícono de lápiz al lado del título): tocarlo lo convierte en un campo de
texto, sin guardar nada todavía — es la misma lógica de "visual antes que
funcional" del resto del prototipo.

**Subida de fotos y formato.** Después de generar el copy y los T&C, el chat
pide las fotos de producto para armar las piezas de redes: el campo de texto
se deshabilita y se habilita el ícono de clip a la izquierda, que abre el
selector de archivos del sistema (multi-selección, solo imágenes). Las fotos
elegidas aparecen como miniaturas en la burbuja del usuario. Después se
pregunta el formato (post cuadrado, historia, banner) con la misma tarjeta de
opciones. **No hay generación de imagen real:** el "resultado" que se
muestra son las mismas fotos que la persona subió, con un texto aclarando
que es simulado — es frontend puro, no hay IA ni backend generando nada
todavía. Subir fotos es opcional, igual que el resto de las preguntas. Para
probar este paso sin tener que elegir archivos cada vez, hay un atajo "Usar
fotos de ejemplo" que carga 3 fotos fijas (las mismas de las tarjetas de
campaña del Home) — mismo mecanismo que "Usar ejemplo" en el primer mensaje.

---

## 6. Accesibilidad

- Contraste mínimo **4.5:1** para texto normal. Tinta sobre crema da 13.9:1,
  blanco sobre el azul principal da 6.1:1.
- El estado de foco siempre es visible.
- El color nunca es la única señal: si algo subió o bajó, además del verde o el
  rojo va una flecha y el número.
- Ningún texto por debajo de 13px.
