# Happy Path — Onboarding (usuario nuevo)

Recorrido de un usuario (la PyME) que entra a Pautia por primera vez, desde que crea su cuenta
hasta que llega al panel principal — momento en el que empalma con el recorrido central
([04-happy-path.md](04-happy-path.md)). Foco en qué hace y qué ve el usuario en pantalla, no en
el procesamiento interno del sistema.

| # | Qué hace la PyME | Qué ve en pantalla |
|---|---|---|
| 1 | Entra a Pautia por primera vez | Pantalla de bienvenida con opción de crear cuenta |
| 2 | Crea su cuenta | Formulario simple (email/contraseña o similar) |
| 3 | Confirma la cuenta creada | Se abre un chat de onboarding |
| 4 | Cuenta libremente de su negocio: qué vende, rubro, hace cuánto, a quién le vende | El chat muestra su mensaje enviado |
| 5 | Responde las preguntas que el sistema sugiere para completar lo que falta — no son obligatorias, puede saltear alguna | Intercambio conversacional, una pregunta por vez |
| 5a | En cualquier momento puede subir un archivo o conectar Tiendanube para sumar catálogo de productos/clientes | El sistema lo suma al contexto del chat |
| 6 | Lee el resumen de lo que el sistema entendió de su negocio | Mensaje de resumen en el chat |
| 6a | Si algo no cierra, lo corrige por texto | El chat muestra la corrección y responde con un resumen regenerado |
| 6b | Repite la corrección las veces que necesite | Ciclo resumen → corrección → nuevo resumen |
| 7 | Confirma el resumen | Arranca el paso de Meta Ads |
| 8 | Se le ofrece conectar Meta Ads, con opción de saltear | Pantalla explicando para qué sirve (audiencias y, más adelante, resultados) |
| 8a | Si conecta ahora | Confirmación de cuenta vinculada |
| 8b | Si lo saltea | Sigue sin bloqueo; se le vuelve a ofrecer al guardar su primera campaña / pegar el ID de campaña lanzada |
| 9 | Termina el onboarding | Entra al panel principal (empalma con el paso 1 del recorrido central) |

## Decisiones tomadas al pulir el recorrido

- **Carga de datos del negocio por chat, no por formulario.** Mantiene el mismo patrón
  conversacional que ya usa el recorrido central (idea de campaña, corrección, resumen), en vez
  de introducir una interfaz distinta solo para el onboarding.
- **Formulario/carga estructurada (archivo o Tiendanube) es un complemento opcional, no la vía
  por defecto.** El segmento (pymes sin rol de marketing especializado, patrón reactivo/informal
  según las entrevistas) no necesariamente tiene un catálogo prolijo armado; el chat cubre el
  caso base y el archivo/Tiendanube suman contexto cuando existen.
- **Conexión con Meta Ads opcional en el onboarding, no bloqueante.** Según
  [03-funcionalidades-mvp.md](Clase%204/salidas/03-funcionalidades-mvp.md), esa conexión recién
  se usa en el relevamiento de resultados (después de lanzada una campaña), que puede tardar
  semanas desde el registro. Pedirla como obligatoria antes de que el usuario vea cualquier valor
  del producto suma fricción temprana a un segmento que ya viene escaldado de agencias que no
  entregaron resultados (caso Fernando/Van Luz en las entrevistas). Se vuelve a ofrecer más
  adelante, en el momento en que el pedido tiene contexto inmediato (guardar campaña / pegar ID).
