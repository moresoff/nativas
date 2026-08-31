# Frontend y diseño

Prototipo en React (Vite) que implementa el recorrido de [[servicio-y-proceso]] como interfaz navegable, con datos simulados — es la capa visual del servicio, todavía sin backend ni IA real detrás.

## Vistas y su lugar en el recorrido

| Vista | Archivo | Corresponde a |
|---|---|---|
| Home | `Home.jsx` | Panel principal — paso 1 del recorrido central en [[servicio-y-proceso]] |
| Nueva campaña | `NuevaCampana.jsx` | Chat de armado de campaña — pasos 2 a 10 |
| Campañas (repositorio) | `Campanas.jsx` | Vista de consulta de campañas armadas — paso 11 |
| Ficha de campaña | `FichaCampana.jsx` | Detalle de una campaña guardada, incluye el campo para pegar el ID de Meta Ads — paso 13 |
| Reportes | `Reportes.jsx` | Resultados de campaña vs. objetivo — paso 14 |
| Tu información | `TuInfo.jsx` | Datos del negocio, visión de marca, productos, catálogo/conexiones — alimenta el onboarding y la sugerencia de campaña |
| Todos los productos | `TodosProductos.jsx` | Listado completo con buscador y orden, accedido desde "Ver todos" del carrusel de productos |
| Ficha de producto | `FichaProducto.jsx` | Detalle de un producto (foto, specs, relacionados) |

## Componentes clave

- **`BloqueTexto`** — el componente más importante del producto: donde vive el copy y los T&C generados. Blanco sólido, sin efecto vidrio (ver por qué en Design System, sección 3) — es un documento que la pyme tiene que revisar palabra por palabra.
- **`Chat`** (dentro de `NuevaCampana`) — opciones de respuesta en tarjeta ancla fija sobre el campo de escritura (no dentro del scroll de mensajes), historial de conversaciones a la izquierda (todavía simulado, no reabre conversaciones reales), subida de fotos simulada (usa las fotos que la persona sube o un atajo "usar fotos de ejemplo", sin generación de imagen real).
- **`TarjetaCampana`** — título, chip de estado, tipo · canal · segmento, foto opcional (placeholder si no tiene).
- **`CarruselProductos`** / **`CarruselResultados`** — vidrieras rápidas (productos: foto + nombre, sin loop; resultados: panel azul con métricas en tarjetas de vidrio claro).
- **`PostIt`** — sugerencias, versión minimalista de la referencia visual del equipo.
- **`Layout`** — shell de la app; soporta modo `pantallaCompleta` para que el chat ocupe toda la altura sin vivir dentro de un recuadro.

## Qué es real y qué es simulado hoy

Todo el frontend es **visual antes que funcional**, a propósito (mismo criterio aplicado consistentemente: nombre de conversación editable sin guardar, historial de chat no reabre, subida de fotos sin generación real). Los datos de ejemplo (productos, campañas, fotos) viven en `datos/simulados.js` y en `assets/campanas-ejemplo/` y `assets/producto-ejemplo/`. No hay backend ni conexión real a Meta Ads/Tiendanube todavía — esa integración está prevista (ver [[solucion-pautia]]) pero no implementada en este prototipo.

## Design System

Aprobado en Clase 6, documentado en [`Frontend/Design_system/README.md`](../../Frontend/Design_system/README.md) con los valores en [`tokens.css`](../../Frontend/Design_system/tokens.css). Puntos que conectan directo con decisiones de producto, no solo de estética:

- **Azul principal `#0A59DA`** y **fondo crema `#FAF8F5`** (no blanco puro — el usuario lee textos largos: copy, T&C).
- **Ámbar** como color de "atención/revisar" — el estado "Para revisar" de una campaña casi siempre implica revisar copy o T&C, el corazón legal del producto.
- **Efecto vidrio** permitido en tarjetas de métrica y paneles flotantes, pero **prohibido detrás de un párrafo largo**: los T&C y el copy van sobre blanco sólido porque son un documento que la pyme tiene que revisar palabra por palabra — la regla de diseño está escrita explícitamente en función del problema legal que resuelve Pautia.
- **Accesibilidad:** contraste mínimo 4.5:1, foco siempre visible, el color nunca es la única señal de una variación (siempre va acompañado de flecha + número).

## Fuentes
- [Frontend/Design_system/README.md](../../Frontend/Design_system/README.md)
- [Frontend/Design_system/tokens.css](../../Frontend/Design_system/tokens.css)
- Código fuente en `Frontend/src/` (vistas, componentes, datos simulados)
