# Alcance del MVP

## Funcionalidades completas del producto (visión completa, no solo MVP)

1. Carga/conexión de información del negocio, productos y clientes (manual, o integración con Tiendanube/Mercado Libre/sistema interno).
2. Input del usuario con idea de campaña.
3. Sugerencia de qué tipo de campaña y segmento funcionaría mejor.
4. Generación de copy de campaña.
5. Generación de piezas visuales (vía API de Canva).
6. Generación de términos y condiciones legales.
7. Dashboard de revisión/aprobación de la campaña armada.
8. Relevamiento de resultados de la campaña lanzada (conexión API Meta Ads).
9. Retroalimentación del sistema con esos resultados, para mejorar futuras sugerencias.
10. Historial/contexto de campañas pasadas y sus resultados.

## Mapa de dependencias

1 y 2 no dependen de nada → 3 depende de 1 y 2 → 4 depende de 3 → 5 depende de 3 y 4 → 6 depende de 2, 3 y 4 → 7 depende de 4 y 6 (y de 5 si está disponible) → 8 depende de que la campaña se haya lanzado manualmente tras la aprobación en 7 → 9 depende de 8 → 10 se alimenta de 1 a 8 desde el principio y se enriquece con 9.

## Dentro del MVP

| # | Funcionalidad | Por qué |
|---|---|---|
| 1 | Carga/conexión de datos | Punto de partida — sin esto no hay nada sobre qué sugerir |
| 2 | Input de idea de campaña | Dispara todo el recorrido |
| 3 | Sugerencia de campaña/segmento | Resuelve el problema central de segmentación poco criteriosa |
| 4 | Generación de copy | Parte imprescindible de la campaña armada |
| 6 | Generación de T&C | Resuelve el problema legal, uno de los tres pilares (ver [[problema]]) |
| 7 | Dashboard de revisión/aprobación | Reemplaza "evaluar la propuesta" del AS-IS (ver [[servicio-y-proceso]]) |
| 8 | Relevamiento de resultados | Cierra el recorrido central; sin esto el producto es de una sola vía |
| 10 | Historial/contexto de campañas | Sin esto, cada campaña arranca de cero y se pierde el contexto del negocio |

## Fuera, pero previsto

- **5 — Generación de piezas visuales (Canva):** entra cuando se quiera automatizar el armado visual manteniendo identidad de marca; la arquitectura debe dejar un lugar para este paso entre copy (4) y dashboard (7). Validado como oportunidad real por María José/ABN — lo señaló espontáneamente sin que se le preguntara.
- **9 — Retroalimentación automática:** entra cuando se quiera que el sistema aprenda solo con el tiempo; el MVP ya guarda los resultados crudos (8, 10) para que esto no obligue a rehacer nada. Ver el "loop de datos cerrado" en [[solucion-pautia]].

## Fuera, descartado

- **Integrar más de una fuente de datos** (Mercado Libre + sistema interno, además de la principal) — sobrecosto identificado en el bloque de costos del Lean Canvas ([[solucion-pautia]]); se suma recién después de validar con una sola fuente.
- **Multiagente con 3 agentes independientes** (segmentación, copy+visual, T&C) → simplificado a un solo agente con pasos/prompts secuenciales para el MVP, sin orquestación entre agentes autónomos.
- **Canal de entrega nuevo** (bot, WhatsApp) → alcanza con el dashboard simple de revisión/aprobación.

## Control final (checks de consistencia)

- ¿El MVP funciona sin nada de lo que quedó afuera? **Sí** — ninguna funcionalidad dentro del MVP depende de piezas visuales (5) ni de retroalimentación automática (9); el dashboard (7) funciona con copy y T&C solos.
- ¿Cubre el recorrido central completo? **Sí** — desde "necesita aumentar clientes/ventas" (1, 2) hasta "visualización de resultados" (8), sin cortar el recorrido a la mitad.

## Estado actual de implementación (frontend)

El estado real del código — qué vistas existen y qué está simulado vs. conectado — vive en [[frontend-y-diseno]].

## Fuentes
- [03-funcionalidades-mvp.md](../../Contexto/04_MVP/03-funcionalidades-mvp.md)
- [02-lean-canvas.md](../../Contexto/01_Problema_y_relevamiento/02-lean-canvas.md) (bloque 8 — estructura de costos)
- [00-informe-ejecutivo.md](../../Contexto/01_Problema_y_relevamiento/00-informe-ejecutivo.md) (alcance del MVP confirmado por la última ronda de entrevistas)
- [Propuesta-Pautia.pdf](../../Contexto/01_Problema_y_relevamiento/Propuesta-Pautia.pdf) (página "Alcance del MVP")
