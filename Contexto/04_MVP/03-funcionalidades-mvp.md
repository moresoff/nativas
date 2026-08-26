# Funcionalidades y alcance del MVP

## Funcionalidades completas del producto
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
1. Carga/conexión de datos — no depende de nada.
2. Input del usuario con idea de campaña — no depende de nada.
3. Sugerencia de campaña/segmento — depende de 1 y 2.
4. Generación de copy — depende de 3.
5. Generación de piezas visuales — depende de 3 y 4.
6. Generación de T&C — depende de 2, 3 y 4.
7. Dashboard de revisión/aprobación — depende de 4 y 6 (y de 5 si está disponible).
8. Relevamiento de resultados — depende de que la campaña se haya lanzado (manualmente, fuera del producto) tras la aprobación en 7.
9. Retroalimentación al sistema — depende de 8.
10. Historial/contexto de campañas — se alimenta de 1 a 8 desde el principio; se enriquece con 9.

## MVP
### Dentro
- 1. Carga/conexión de datos — punto de partida, sin esto no hay nada sobre qué sugerir.
- 2. Input del usuario con idea de campaña — dispara todo el recorrido.
- 3. Sugerencia de campaña/segmento — resuelve el problema central de segmentación poco criteriosa.
- 4. Generación de copy — parte imprescindible de la campaña armada.
- 6. Generación de T&C — resuelve el problema legal, uno de los tres pilares del producto.
- 7. Dashboard de revisión/aprobación — reemplaza el paso de "evaluar la propuesta" del recorrido central.
- 8. Relevamiento de resultados — cierra el recorrido central ("visualización de resultados"); sin esto el producto es de una sola vía.
- 10. Historial/contexto de campañas — sin esto, cada campaña arranca de cero y se pierde el contexto actualizado del negocio.

### Fuera, pero previsto
- 5. Generación de piezas visuales (Canva) — entra cuando quieran automatizar el armado visual manteniendo identidad de marca; la arquitectura debe dejar un lugar para este paso entre copy (4) y dashboard (7).
- 9. Retroalimentación automática — entra cuando quieran que el sistema aprenda solo con el tiempo; el MVP ya guarda los resultados crudos (8, 10) para que esto no obligue a rehacer nada.

### Fuera, descartado
- Integrar más de una fuente de datos (Mercado Libre + sistema interno, además de la principal) — sobrecosto identificado en el bloque 8 del canvas; se suma recién después de validar con una sola fuente.

## Control final
- ¿El MVP funciona sin nada de lo que quedó afuera? Sí — ninguna funcionalidad dentro del MVP depende de piezas visuales (5) ni de la retroalimentación automática (9); el dashboard (7) funciona con copy y T&C solos.
- ¿Cubre el recorrido central completo? Sí — desde "necesita aumentar clientes/ventas" (1, 2) hasta "visualización de resultados" (8), sin cortar el recorrido a la mitad.
