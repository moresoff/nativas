# Happy Path — Interacción del usuario con Pautia

Recorrido ideal del usuario (la PyME) con el sistema, desde que tiene una idea u objetivo de
campaña hasta que ve los resultados. Foco en qué hace y qué ve el usuario en pantalla, no en
el procesamiento interno del sistema.

| # | Qué hace la PyME | Qué ve en pantalla |
|---|---|---|
| 1 | Ingresa a Pautia | Panel principal, con dos opciones: ver sus métricas o ir al chat |
| 2 | Elige ir al chat para una nueva campaña | Se abre un chat nuevo, aislado del resto de campañas |
| 3 | Escribe libremente su idea u objetivo de campaña | El chat muestra su mensaje enviado |
| 4 | Responde las preguntas que el sistema sugiere para refinar la idea — no son obligatorias, puede saltear alguna | Intercambio conversacional, una pregunta por vez |
| 5 | Lee la propuesta de segmento y tipo de campaña que arma el sistema | Mensaje en el chat con la propuesta concreta |
| 6a | Si no le cierra, escribe la corrección en texto libre | El chat muestra su corrección y responde con una propuesta regenerada |
| 6b | Repite la corrección las veces que necesite | Ciclo propuesta → corrección → nueva propuesta |
| 7 | Lee el resumen de lo que el sistema entendió de todo el intercambio | Mensaje de resumen en el chat, antes de generar nada |
| 8 | Hace click en el botón **"Generar"** | El chat muestra el copy de campaña y los T&C generados |
| 9a | Si algo no le gusta, lo pide por texto | El chat muestra el ajuste pedido y la versión corregida |
| 9b | Repite el ajuste las veces que necesite | Ciclo generación → corrección |
| 10 | Hace click en el botón **"Guardar"** | Confirmación de guardado; la campaña pasa a la otra vista |
| 11 | Consulta la campaña ya armada | Vista de repositorio, con todas las campañas armadas hasta el momento (solo consulta) |
| 12 | Lanza la campaña por fuera de Pautia (en Meta Ads u otro canal) | — (esto ocurre fuera de la aplicación) |
| 13 | Vuelve al repositorio y pega el ID de la campaña lanzada | Campo para pegar el ID, asociado a esa campaña guardada |
| 14 | Vuelve al panel principal | Ve los resultados de esa campaña, comparados contra el objetivo que estableció al inicio |

## Decisiones tomadas al pulir el recorrido

- **Preguntas del chat (paso 4) no son obligatorias, a propósito.** Muchas pymes no saben
  segmentar fino y forzar respuestas las trabaría; se prefiere dejar el relevamiento flexible
  aunque eso implique propuestas más amplias en algunos casos.
- **Historial de campañas pasadas:** se asume disponible desde el arranque de cada chat nuevo
  (se simula una app ya en uso), sin un paso explícito para eso en este recorrido.
- **Pegar el ID de campaña (paso 13) queda manual, sin recordatorio automático**, aun sabiendo
  que si la PyME no vuelve a hacerlo, no ve resultados de esa campaña.
