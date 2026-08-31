# La solución: Pautia, copiloto integral de campañas

Pautia le da a la pyme sin experto en marketing, en un solo lugar, **segmentación certera, campañas con respaldo legal y control sobre si su gasto en publicidad realmente funciona** — sin depender de una agencia que primero tiene que aprender su negocio. Ver el problema que resuelve en [[problema]].

## Qué hace

1. Concentra en un solo lugar la información del negocio, los productos y los clientes actuales.
2. Arma un **perfil de marca** por pyme (tono de voz, identidad visual, buyer persona específico) que alimenta todo lo demás — sin este insumo, la generación automática corre el riesgo de producir el mismo output genérico para pymes distintas (el problema que las agencias buenas evitan armando un equipo dedicado por cliente, confirmado por [[usuarios-y-entrevistas|Hub Studio]]).
3. Sugiere segmentación y qué tipo de campaña funcionaría mejor, dado un objetivo de negocio — que no siempre es "captar clientes nuevos": puede ser liquidar stock o generar caja, como en el caso de Hype Stein.
4. Arma la campaña completa: copy, piezas visuales (a futuro, ver [[producto-mvp]]) y términos y condiciones legales.
5. Se retroalimenta con los resultados de cada campaña lanzada, para mejorar las próximas sugerencias.

Alcance detallado del MVP en [[producto-mvp]]; recorrido de uso en [[servicio-y-proceso]].

## Los tres diferenciales estratégicos

*(síntesis de una nota de estrategia que compara a Pautia contra un asistente de IA genérico — ver fuente)*

1. **El loop de datos cerrado.** No es solo "genera T&C": recomienda día/audiencia/medio de pago, y después ingiere los resultados reales de esa campaña (conversión, redenciones, quejas, costo por adquisición). Cada campaña que pasa por el sistema lo hace más inteligente. Un asistente genérico no tiene memoria de las campañas anteriores de nadie — este flywheel es lo único que se vuelve más difícil de copiar con el tiempo, no menos.
2. **El motor de compliance vivo.** No se vende "genera T&C", se vende "genera T&C correctos para la regulación argentina de promos y sorteos, actualizada" (Defensa del Consumidor, Lealtad Comercial, normativa provincial de sorteos, AAIP). Un LLM genérico alucina cláusulas o da algo genérico de otra jurisdicción. La ventaja injusta acá es el agente Evaluador Legal + loop de corrección + human-in-the-loop, apoyado en una base de conocimiento normativa mantenida al día — un moat porque exige trabajo legal continuo.
3. **Recomendaciones accionables — fuerte pero depende de datos.** Las fuentes son (a) los datos propios del cliente y (b) el benchmark agregado de toda la plataforma, que recién aparece a escala. **Cold-start:** los primeros clientes no tienen data agregada, así que al principio se combinan datos del propio cliente con benchmarks públicos de industria, siendo honestos de que la recomendación se afina con el uso. Acá es donde el perfil de analista de datos del equipo es la ventaja, no la IA en sí misma.

## Integraciones técnicas previstas

- **Meta Ads (MCP/API):** de la publicidad se puede recabar demografía (edad/género), ubicación, plataforma (Instagram/Facebook/Audience Network), dispositivo/SO, y rendimiento por segmento (clics, impresiones, conversiones, CPA, ROAS). **No** se puede obtener PII (nombres, mails, teléfonos) ni la lista individual de quién vio o clickeó.
- **Tiendanube (MCP):** fuente de datos de catálogo/clientes prevista para el onboarding — ver el paso opcional de conexión en [[servicio-y-proceso]].
- **Mercado Libre (API pedidos y opiniones):** evaluada, descartada para el arranque del MVP (ver [[producto-mvp]] — "fuera, descartado").

## Qué nos diferencia (no competimos por precio, competimos por atención)

| Dimensión | Hacerlo vos mismo | Agencia externa | Pautia |
|---|---|---|---|
| Segmentación | Intuitiva, sin datos detrás | Depende de cuánta atención te dé, repartida entre muchos clientes | Sugerida con los datos reales de tu negocio |
| Respaldo legal | Copiar y pegar una plantilla genérica, sin revisar | No está en su radar (confirmado en entrevistas) | Se genera como parte del armado de campaña |
| Aprendizaje | Cada campaña arranca de cero | El conocimiento queda en la agencia, no en vos | Se retroalimenta con cada campaña lanzada |
| Tiempo | Rápido para lanzar, lento para mejorar | Semanas para que entienda tu negocio — cada vez que cambiás de agencia | Minutos para pedir una campaña |
| Costo | Bajo en herramientas, alto en tiempo propio | Alto, y a veces mayor que las ventas que genera | Una fracción del costo de una agencia |

## Modelo de negocio (Lean Canvas — resumen)

| Bloque | Resumen |
|---|---|
| Segmento | PyMEs/emprendimientos B2B2C sin rol de marketing, con presupuesto ya destinado a marketing (ver [[problema]] para el detalle de ICP) |
| Canales | Redes sociales y contacto 1 a 1 (no masivo), aprovechando la red de contactos propia del equipo — prioriza confianza sobre alcance |
| Métricas clave | Tasa de conversión (campañas armadas vs. lanzadas), retención mensual, iteraciones antes de lanzar, CAC de la pyme con Pautia vs. antes, % de campañas con T&C completos, tiempo idea→lanzamiento |
| Valor capturado | Ahorro de costo (evita agencia externa) y de tiempo (reduce el ciclo de prueba y error de 3-6 meses a ajuste día a día) — todavía estimación cualitativa, a confirmar con más entrevistas |
| Estructura de costos | Ver simplificaciones para el MVP en [[producto-mvp]] |
| Ventaja injusta | T&C legales ya desarrollados en otra materia + experiencia previa con agentes de IA (proyecto de la materia de IA) + acceso directo a los tres perfiles de entrevistados |

## Fuentes
- [02-lean-canvas.md](../../Contexto/01_Problema_y_relevamiento/02-lean-canvas.md)
- [00-informe-ejecutivo.md](../../Contexto/01_Problema_y_relevamiento/00-informe-ejecutivo.md) (sección "Qué vamos a hacer")
- [clase-02-pautia.md](../../Contexto/02_Investigacion_y_entrevistas/clase-02-pautia.md) (camino elegido y por qué)
- [Notas - Estrategia y herramientas MCP.md](../../Contexto/01_Problema_y_relevamiento/Notas%20-%20Estrategia%20y%20herramientas%20MCP.md) — diferenciales estratégicos, capacidades de Meta Ads MCP, links a Tiendanube MCP y Mercado Libre API. *Nota: el archivo incluye una captura de pantalla embebida (~180 KB en base64) que no se procesó — el texto sí está incorporado íntegro acá.*
- [Propuesta-Pautia.pdf](../../Contexto/01_Problema_y_relevamiento/Propuesta-Pautia.pdf) — pitch ejecutivo (Agosto 2026), tabla comparativa y recorrido "cómo funciona" en 8 pasos
