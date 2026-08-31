# Servicio: proceso actual (AS-IS) y experiencia con Pautia

## AS-IS — cómo se arma una campaña hoy

**SIPOC:**
- **Supplier:** pymes y emprendimientos.
- **Input:** necesidad de activar ventas/usuarios; datos de campañas viejas y contexto del negocio, aportados a mano.
- **Process:** se contrata una agencia de marketing o personal especializado que arma textos, contenido visual y todo lo necesario para lanzar.
- **Output:** lanzamiento de publicidad por medio orgánico o pautado.
- **Customer:** la misma pyme, que recibe el impacto y debe evaluar los resultados.

**Recorrido con handoffs (swimlanes PyME ↔ Agencia):**

1. PyME necesita aumentar su base de clientes/ventas (falta flujo de caja o interacciones).
2. PyME contrata una agencia (por recomendación).
3. PyME traslada la necesidad → *handoff* → 4. traslada información del producto (WhatsApp, reuniones, documentos sueltos, sin proceso estructurado).
5. Agencia comprende el negocio (reúne la información en sus propias herramientas).
6. Agencia arma la propuesta → *handoff* →
7. PyME evalúa la propuesta. 8. PyME asigna presupuesto → *handoff* →
9. Agencia arma la campaña personalizada (copy, ilustraciones, segmento).
10. Agencia lanza la campaña. 11. Agencia evalúa resultados → *handoff* →
12. PyME visualiza resultados.

**Variante confirmada por PrimOffice y Hype Stein:** cuando la pyme trae el marketing adentro (mala experiencia previa, o nunca tercerizó), el recorrido se acorta — no hay traslado de información a un tercero — pero persisten los mismos huecos: segmentación no muy fina y T&C ausentes o informales. Ver evidencia en [[usuarios-y-entrevistas]].

Los *handoffs* PyME↔Agencia son exactamente el punto donde hoy se pierde información (WhatsApp, reuniones, documentos sueltos, sin proceso estructurado) — Pautia colapsa ese recorrido de 12 pasos con 2 handoffs en un solo flujo sin traspaso a un tercero. Ver [[solucion-pautia]] para el "cómo funciona" en 8 pasos del lado de la propuesta.

## TO-BE — Onboarding (usuario nuevo)

Recorrido desde que crea la cuenta hasta el panel principal:

1. Pantalla de bienvenida → crea cuenta (form simple) → confirma → se abre un **chat de onboarding**.
2. Cuenta libremente su negocio (qué vende, rubro, hace cuánto, a quién le vende); el sistema hace preguntas de refinamiento **no obligatorias** (puede saltear).
3. En cualquier momento puede subir un archivo o conectar Tiendanube para sumar catálogo — complemento opcional, no la vía por defecto.
4. Lee un resumen de lo que el sistema entendió; puede corregir en texto libre en un ciclo resumen → corrección → nuevo resumen.
5. Al confirmar, se ofrece conectar Meta Ads (explicando para qué sirve: audiencias y, más adelante, resultados) — **opcional, no bloqueante**. Se vuelve a ofrecer más adelante, al guardar la primera campaña o pegar el ID de campaña lanzada.
6. Termina el onboarding → entra al panel principal.

**Decisiones de diseño clave:**
- Carga por chat, no por formulario — mismo patrón conversacional que el recorrido central, en vez de una interfaz distinta solo para onboarding.
- Conexión con Meta Ads no obligatoria antes de ver cualquier valor del producto: el segmento (pymes reactivas/informales, según entrevistas) ya viene "escaldado" de agencias que no entregaron resultados (caso Fernando/Van Luz) — pedirla de entrada suma fricción innecesaria.

## TO-BE — Recorrido central (nueva campaña)

| # | Qué hace la PyME | Qué ve en pantalla |
|---|---|---|
| 1 | Ingresa a Pautia | Panel principal: ver métricas o ir al chat |
| 2 | Elige ir al chat para nueva campaña | Chat nuevo, aislado del resto |
| 3 | Escribe libremente su idea/objetivo | El chat muestra el mensaje enviado |
| 4 | Responde preguntas sugeridas (no obligatorias) | Intercambio conversacional, una pregunta por vez |
| 5 | Lee la propuesta de segmento y tipo de campaña | Mensaje con la propuesta concreta |
| 6 | Corrige en texto libre las veces que necesite | Ciclo propuesta → corrección → nueva propuesta |
| 7 | Lee el resumen de todo el intercambio | Mensaje de resumen, antes de generar nada |
| 8 | Click en **"Generar"** | Copy de campaña + T&C generados |
| 9 | Pide ajustes por texto las veces que necesite | Ciclo generación → corrección |
| 10 | Click en **"Guardar"** | Confirmación; la campaña pasa al repositorio |
| 11 | Consulta la campaña armada | Vista de repositorio (solo consulta) |
| 12 | Lanza la campaña fuera de Pautia (Meta Ads u otro canal) | — (ocurre fuera de la app) |
| 13 | Vuelve y pega el ID de la campaña lanzada | Campo para pegar el ID, asociado a la campaña guardada |
| 14 | Vuelve al panel principal | Resultados de esa campaña vs. el objetivo inicial |

**Decisiones de diseño clave:**
- Las preguntas del chat (paso 4) son opcionales a propósito: muchas pymes no saben segmentar fino, y forzar respuestas trabaría el flujo — se prefiere una propuesta más amplia antes que bloquear al usuario.
- Pegar el ID de campaña (paso 13) queda manual, sin recordatorio automático, aun sabiendo que si la PyME no vuelve a hacerlo, no ve resultados de esa campaña — trade-off aceptado para el MVP.

## Fuentes
- [SIPOC.md](../../Contexto/03_Procesos_y_requerimientos/SIPOC.md)
- [as-is.md](../../Contexto/03_Procesos_y_requerimientos/as-is.md) (incluye diagrama [AS-IS.png](../../Contexto/03_Procesos_y_requerimientos/AS-IS.png) y [board de Excalidraw](https://excalidraw.com/#room=5687a93a80b216673043,5dH7SswIUtyiz7wmQfE-Kg))
- [04-happy-path.md](../../Contexto/03_Procesos_y_requerimientos/04-happy-path.md)
- [05-happy-path-onboarding.md](../../Contexto/03_Procesos_y_requerimientos/05-happy-path-onboarding.md)
