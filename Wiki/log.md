# Log

## [2026-08-30] ingest | Bootstrap de la wiki

Primera pasada sobre todo el material existente en `Contexto/` y `Frontend/`. Se respetó la estructura de carpetas definida en `AGENTS.md` (numerada por etapa del proyecto) — la wiki se agrega como capa nueva en `Wiki/`, sin mover ni reescribir ninguna fuente cruda.

**Ingerido y sintetizado en 6 páginas** (`pages/problema.md`, `pages/usuarios-y-entrevistas.md`, `pages/solucion-pautia.md`, `pages/servicio-y-proceso.md`, `pages/producto-mvp.md`, `pages/frontend-y-diseno.md`):
- Informe ejecutivo, síntesis del relevamiento y Lean Canvas (`01_Problema_y_relevamiento/`).
- Propuesta ejecutiva en PDF (`Propuesta-Pautia.pdf`) — leída completa, incluye tabla comparativa y recorrido de 8 pasos no presentes en los demás documentos.
- Notas de estrategia y herramientas MCP — se extrajo el texto (diferenciales estratégicos: loop de datos cerrado, motor de compliance vivo, cold-start de recomendaciones; capacidades de Meta Ads MCP). El archivo trae una captura de pantalla embebida en base64 (~180 KB) que no se procesó — no aportaba texto adicional relevante más allá de lo ya extraído.
- Las 8 entrevistas individuales completas (Van Luz, PrimOffice, Valen Pozzi/Hype Stein, Majo/ABN, Flypolo, Caro/FCE, Hub Studio, Ignacio Bernad) — transcripciones largas y coloquiales, sintetizadas por hallazgo en `usuarios-y-entrevistas.md`.
  - **Nota:** la entrevista a Ignacio Bernad es la más reciente (27/08/2026) y sus hallazgos todavía no estaban volcados en `01-sintesis.md` — quedó reflejada por primera vez en esta wiki.
- Guía de entrevista conjunta (`entrevista-conjunta-preguntas.md`) y notas de clase 2 (`clase-02-pautia.md`, con los tres caminos evaluados y los supuestos 1-3).
- SIPOC, AS-IS y los dos happy paths (onboarding + recorrido central), en `03_Procesos_y_requerimientos/`.
- Funcionalidades y alcance del MVP (`04_MVP/03-funcionalidades-mvp.md`).
- Design System (`Frontend/Design_system/README.md`, `tokens.css`) y estructura del código frontend (`Frontend/src/`), mapeando cada vista al paso del recorrido que implementa.

**Pendiente de ingerir** (quedó fuera de esta primera pasada, no bloquea el resto de la wiki):
- `Contexto/02_Investigacion_y_entrevistas/guia-entrevista-hubstudio.md` y `guia-entrevistas-pautia.md` — guías de entrevista previas a la guía conjunta ya ingerida; probablemente redundantes con ella, a confirmar en una próxima pasada.
- `Contexto/05_Wireframes_y_prototipos/Mockup.excalidraw` — archivo binario de Excalidraw, no se pudo leer como texto. El diagrama AS-IS equivalente sí se ingirió vía `AS-IS.png` + el board público linkeado en `as-is.md`.
- `Contexto/Documentacion_tecnica/Guion_facilitador_lean_canvas/*` y las carpetas `Versiones_anteriores/` (en `02_Investigacion_y_entrevistas/`, `03_Procesos_y_requerimientos/`, `Documentacion_tecnica/`) — versiones históricas/guiones de facilitador, no fuente de verdad actual. No ingeridas a propósito; si el contenido vigente cambiara respecto a estas versiones, valdría la pena diffearlas.
- `Contexto/01_Problema_y_relevamiento/canvas-data.js` e `index.html` — parecen ser el render web del lean canvas (no markdown), no revisados en esta pasada.

**Estructura creada:**
```
Wiki/
  index.md
  log.md
  pages/
    problema.md
    usuarios-y-entrevistas.md
    solucion-pautia.md
    servicio-y-proceso.md
    producto-mvp.md
    frontend-y-diseno.md
```
