# Wiki de Pautia

Capa de síntesis sobre el material de `Contexto/` y `Frontend/` (ver [`AGENTS.md`](../AGENTS.md) para la estructura de carpetas del proyecto, que esta wiki no reemplaza). Las fuentes crudas —entrevistas, síntesis, código— no se tocan; acá se arma el mapa que conecta problema, investigación, solución y su implementación como servicio.

## Problema y usuarios
- [[pages/problema]] — los tres huecos (segmentación, legal, retorno de publicidad), a quién le pasa, a quién no, y por qué los otros dos caminos evaluados se descartaron.
- [[pages/usuarios-y-entrevistas]] — las 8 entrevistas relevadas, patrones transversales, y el límite del segmento objetivo.

## Solución y servicio
- [[pages/solucion-pautia]] — qué hace Pautia, sus tres diferenciales estratégicos (loop de datos, compliance vivo, recomendaciones con cold-start), integraciones técnicas previstas y el Lean Canvas.
- [[pages/servicio-y-proceso]] — el proceso actual (AS-IS, SIPOC, handoffs PyME↔Agencia) contra el recorrido diseñado con Pautia (onboarding + recorrido central de campaña).

## Producto e implementación
- [[pages/producto-mvp]] — alcance del MVP, mapa de dependencias entre funcionalidades, qué quedó afuera y por qué.
- [[pages/frontend-y-diseno]] — el prototipo React actual: qué vista corresponde a qué paso del recorrido, qué es simulado, y el design system que lo sostiene.

## Fuente cruda → dónde fue ingerida

| Fuente | Ingerida en |
|---|---|
| `Contexto/01_Problema_y_relevamiento/00-informe-ejecutivo.md` | [[pages/problema]], [[pages/producto-mvp]] |
| `Contexto/01_Problema_y_relevamiento/01-sintesis.md` | [[pages/problema]], [[pages/usuarios-y-entrevistas]] |
| `Contexto/01_Problema_y_relevamiento/02-lean-canvas.md` | [[pages/solucion-pautia]], [[pages/producto-mvp]] |
| `Contexto/01_Problema_y_relevamiento/Notas - Estrategia y herramientas MCP.md` | [[pages/solucion-pautia]] |
| `Contexto/01_Problema_y_relevamiento/Propuesta-Pautia.pdf` | [[pages/solucion-pautia]], [[pages/producto-mvp]] |
| `Contexto/02_Investigacion_y_entrevistas/clase-02-pautia.md` | [[pages/problema]], [[pages/solucion-pautia]] |
| `Contexto/02_Investigacion_y_entrevistas/entrevista-conjunta-preguntas.md` | [[pages/usuarios-y-entrevistas]] (metodología) |
| Las 8 entrevistas individuales (`Contexto/02_Investigacion_y_entrevistas/Entrevista*.md`) | [[pages/usuarios-y-entrevistas]], citadas también en [[pages/problema]] |
| `Contexto/03_Procesos_y_requerimientos/SIPOC.md`, `as-is.md`, `04-happy-path.md`, `05-happy-path-onboarding.md` | [[pages/servicio-y-proceso]] |
| `Contexto/04_MVP/03-funcionalidades-mvp.md` | [[pages/producto-mvp]] |
| `Frontend/Design_system/README.md`, `tokens.css` | [[pages/frontend-y-diseno]] |
| `Frontend/src/**` (código) | [[pages/frontend-y-diseno]] |
| `Contexto/02_Investigacion_y_entrevistas/guia-entrevista-hubstudio.md`, `guia-entrevistas-pautia.md` | pendiente — ver [[log]] |
| `Contexto/05_Wireframes_y_prototipos/Mockup.excalidraw` | pendiente (binario) — ver [[log]] |
| `Contexto/Documentacion_tecnica/Guion_facilitador_lean_canvas/*`, `Versiones_anteriores/*` (en varias carpetas) | no ingeridas — son versiones históricas, ver [[log]] |

## Log
Historial de ingesta y consultas: [[log]]
