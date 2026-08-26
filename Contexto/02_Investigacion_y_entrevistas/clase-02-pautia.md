# Clase 2 · Pautia
Fecha: 05/08/2026
Integrantes: Morena y Asunción

## 1. El problema
A pymes y emprendimientos que venden producto online, sin experto en marketing en el equipo, les cuesta armar campañas efectivas y legalmente seguras cuando el dueño o el comercial improvisa sin segmentación, estrategia ni términos y condiciones claros.

## 2. Usuario principal
Rol concreto: el encargado de ventas/comercial (si existe en la pyme) o, si no existe ese rol, el dueño mismo. Pymes/emprendimientos de venta de producto online.
Quién decide y quién paga: la misma persona — el encargado de "marketing" o el dueño.
Le vendemos a una organización o a una persona: a una organización (la pyme). Modelo B2B2C: la pyme, a su vez, le vende a consumidores finales.

## 3. Cómo lo resuelven hoy
- Usan Sheets y Drive para organizar información.
- Arman campañas de forma reactiva: cuando aparece la necesidad de vender.
- Se inspiran en la competencia y en redes sociales.
- Idean una promoción y usan Canva para las piezas visuales.
- Apuntan a audiencias amplias, buscando "captar lo más posible", sin segmento claro.
- No tienen en cuenta lo legal.
- Lanzan publicidad paga (ej. Meta Ads) sin segmentación definida.

## 4. Qué les cuesta
Ejemplo concreto (la última vez que pasó): una pyme, sin ventas, armó una campaña sin definir audiencia, estrategia ni términos y condiciones legales. El tiempo dedicado a las piezas visuales no se tradujo en resultados. Pagaron Meta Ads sin saber a quién dirigirse: el CAC resultó muy alto (no cuantificable en general, depende de cada empresa) y captaron pocos clientes pese a mucho alcance ("muchas personas ven sus anuncios pero no los captan"). Un cliente reclamó una oferta vieja que no tenía fecha límite en los términos y condiciones, y tuvieron que dársela para evitar que los denunciara.

## 5. Lo que estamos suponiendo sin evidencia
- Que este patrón (falta de segmentación, falta de T&C, campañas reactivas) se repite en otras pymes y no es un caso aislado.
- Que las pymes están dispuestas a pagar por una herramienta que arme campañas, sugiera cómo captar mejor y genere los términos legales.
- Que el riesgo legal de los T&C es sentido como un dolor real por el cliente, no solo algo teórico.
- Nada de esto surge de entrevistas todavía — es lo que el equipo cree hoy.

## 6. Por qué este equipo y este problema
Qué nos trajo hasta acá: More vivió el problema de cerca en la multinacional donde trabaja — los términos y condiciones tardaban mucho por muchos pasajes entre negocio y legal, y las campañas no estaban personalizadas por bajo uso de la base SQL para cruzar métricas y definir a qué público apuntar. Es un contexto distinto al de una pyme chica (más recursos, equipo legal propio), pero dio la intuición inicial sobre el problema.
Qué acceso real tenemos a gente que lo vive: compañeros de la facultad con emprendimientos propios, y conocidos dueños de pymes medianas que hacen su propio marketing o contratan una agencia chica.
Qué sabemos de este mundo: en la materia de IA cursaron un proyecto en el que armaron un agente que escribe campañas de marketing y otro que las evalúa. Trabajaron fuerte en propuesta de valor y conocimiento del usuario; segmentación / product-market fit todavía no lo trabajaron en profundidad.

## 7. Primera mirada de afuera
Lo que encontramos:
- La falta de segmentación en pymes está documentada como problema extendido: muchas no tienen claro su cliente ideal y terminan con mensajes genéricos ([Aspid](https://aspid.marketing/problemas-comunicacion-marca-pymes-soluciones/), [Crea Industria](https://creaindustria.com/blog/2024/10/obstaculos-de-implementar-marketing-digital-en-pymes-soluciones-practicas/)).
- La falta de experiencia/recursos lleva a campañas improvisadas, coincide con lo descrito por el equipo.
- El riesgo legal es real: publicidad engañosa o promociones sin "bases legales" (T&C) pueden generar sanciones desde cientos hasta más de 30.000€, y reclamos de consumidores ([Legalitas](https://www.legalitas.com/actualidad/publicidad-enganosa), [Caja Abogados](https://www.cajaabogados.es/aspectos-legales-de-la-publicidad-y-promocion-empresarial/14819)). Confirma que el caso de la oferta vieja sin fecha límite no es un incidente aislado.

Quién ya lo resuelve:
- Herramientas de generación de contenido con IA (Jasper, Copy.ai, Writesonic, Canva IA): resuelven texto/piezas visuales, pero ninguna integra la parte legal (T&C) como parte del armado de campaña ([Brevo](https://www.brevo.com/es/blog/herramientas-ia-marketing/), [GoDaddy](https://www.godaddy.com/resources/es/crearweb/herramientas-ia-pymes)).
- Herramientas de automatización de marketing general: ayudan con segmentación, pero asumen que el usuario ya tiene algo de conocimiento previo.

Lo que no encontramos (y por eso hay que preguntarlo):
- No hay datos concretos de cuántas pymes chicas (no grandes empresas) sufrieron sanciones o reclamos específicamente por T&C mal armados en campañas de marketing.
- No encontramos ninguna herramienta que combine armado de campaña + sugerencias de segmentación + generación de T&C en un solo lugar, para pymes sin experto en marketing — no se sabe si es un hueco demandado o simplemente nadie lo resolvió.
- No hay evidencia de que las pymes estén dispuestas a pagar por algo integral en vez de seguir combinando herramientas sueltas y gratuitas.

Aclaración: esto es información de internet, no evidencia de nuestros usuarios. Sirve para afinar las entrevistas, no para reemplazarlas.

## 8. Los tres caminos que evaluamos

### Camino 1 — Checklist y plantilla legal (chico y aburrido, sin producto nuevo)
Qué tipo de solución es: ordenar un proceso, no construir nada. Una plantilla/checklist (Doc o Sheet) con los puntos legales obligatorios de una promoción (fechas límite, condiciones, exclusiones) + guía simple de segmentación.
Qué haría el usuario: (1) antes de lanzar, completa el checklist legal y de audiencia; (2) lo compara contra una lista de errores comunes; (3) lanza la campaña con sus herramientas de siempre (Canva, Meta Ads).
Por qué le resolvería el problema: ataca el riesgo más grave ya detectado (T&C incompletos) sin pedirles aprender nada nuevo ni pagar software.
Qué tendría que ser cierto: que el problema real es "no saben qué poner" y no "no tienen tiempo/ganas de completar un checklist"; que una plantilla fija (sin IA) alcanza, sin adaptarse a cada rubro.
Esfuerzo para 14 semanas: bajo — investigación legal y diseño de un documento, no desarrollo.
Dónde usaría IA: no hace falta, o como mucho un asistente chico para adaptar la plantilla al rubro.

### Camino 2 — Copiloto integral de campañas (sistema nuevo, el más grande) — ELEGIDO
Qué tipo de solución es: una app/SaaS nueva con IA.
Qué haría el usuario: (1) cuenta qué quiere vender y a quién cree que le vende; (2) la herramienta sugiere segmentación, arma el copy y las piezas visuales, y genera automáticamente los términos y condiciones; (3) exporta o lanza todo listo para Meta Ads.
Por qué le resolvería el problema: ataca los tres dolores juntos —segmentación, piezas, legal— en un solo flujo.
Qué tendría que ser cierto: que las pymes confían en que una IA les genere T&C legalmente válidos (o aceptan un borrador a revisar con un abogado); que quieren migrar a un producto nuevo en vez de seguir con lo que ya usan; que se puede sugerir segmentación útil sin acceso a su base real de clientes.
Esfuerzo para 14 semanas: alto — combina IA generativa, contenido legal confiable y una experiencia de campaña completa.
Dónde usaría IA: en las tres partes — segmentación, generación de copy/piezas, generación de T&C.

### Camino 3 — Revisor que se integra a lo que ya usan (punto medio)
Qué tipo de solución es: una mezcla — verificador/automatización conectado al proceso actual, no lo reemplaza.
Qué haría el usuario: (1) pega o sube el borrador de su campaña (texto, público al que apunta, oferta); (2) la herramienta señala qué le falta legalmente (ej. "falta fecha límite") y sugiere ajustes de segmentación; (3) corrige en Canva/Meta Ads como siempre, ya con las alertas resueltas.
Por qué le resolvería el problema: baja el riesgo legal y mejora la segmentación sin pedirles abandonar sus herramientas actuales — más fácil de adoptar.
Qué tendría que ser cierto: que "revisar antes de publicar" es un paso que están dispuestos a sumar a su rutina; que pueden describir su campaña con suficiente detalle como para que la revisión sirva; que un chequeo legal genérico (no por jurisdicción específica) es suficientemente confiable.
Esfuerzo para 14 semanas: medio — producto acotado (un revisor), no un armador de campañas completo.
Dónde usaría IA: para analizar el texto y generar sugerencias, acotada — no genera contenido creativo.

Ninguno de estos caminos está validado.

## 9. Camino elegido y por qué
Elegimos: Camino 2 — Copiloto integral de campañas, con una modificación: se agrega un paso de retroalimentación que nutre al sistema con datos reales de venta (ej. informes de Tiendanube) y con los resultados de las campañas ya corridas en Meta Ads, para que con el tiempo el copiloto aprenda qué campañas funcionan mejor.
Nuestras palabras: "La parte legal está hecho, así que por ahí no hay tanto tiempo que dedicarle." (el equipo ya tiene trabajo previo propio de generación de términos y condiciones legales para campañas de marketing, que pueden reutilizar para esa parte).
Qué nos preocupa de este camino: no tener bien mapeado el flujo completo — el riesgo de pensar que son 4 pasos simples y que en la práctica termine siendo un flujo mucho más largo y complejo (ej. "que piense que son 4 pasos y al final son 100").

## 10. Supuestos a validar
| # | Supuesto | Si es falso, pasa que... | Preguntas que lo validan |
|---|---|---|---|
| 1 | La pyme confía en (y usaría) un término y condiciones generado por IA, sin pasar por un abogado propio | El copiloto igual necesitaría un paso de revisión legal humana, lo que le saca gran parte del valor de "automático" | 1) "Contame la última vez que armaron los términos y condiciones de una promoción: ¿de dónde salió el texto — lo escribieron ustedes, lo copiaron de otro lado, contrataron a alguien?" 2) "¿Alguna vez usaron una plantilla o texto genérico de internet para los T&C de una campaña? ¿Qué pasó, lo revisó un abogado antes de publicar?" |
| 2 | Quieren migrar a un producto nuevo integral, en vez de seguir combinando las herramientas sueltas que ya usan (Sheets, Canva, Meta Ads) | El copiloto compite con hábitos ya instalados y gratuitos; la pyme puede preferir seguir combinando herramientas sueltas | 1) "¿Alguna vez probaron alguna herramienta o app para armar campañas de marketing (no Canva, no Sheets)? Contame qué probaron, qué pasó, y si la siguen usando o la abandonaron y por qué." 2) "La última vez que tuvieron que aprender una herramienta nueva para el negocio, ¿cuánto tiempo le dedicaron antes de decidir si valía la pena o no?" |
| 3 | Se puede sugerir una segmentación útil sin acceso a la base real de clientes de la pyme (al menos al principio, antes de conectar Tiendanube/Meta Ads) | Las sugerencias de segmentación iniciales serían genéricas y no mejor que lo que ya hacen por intuición | 1) "Contame la última vez que decidieron a quién apuntar con una campaña: ¿en qué se basaron para elegir el público? ¿Usaron algún dato de clientes anteriores o fue más una corazonada?" 2) "¿Alguna vez miraron datos de ventas o de su tienda (Tiendanube u otro) antes de armar una campaña? ¿Qué encontraron ahí y cómo lo usaron?" |

## 11. Preguntas prohibidas
- "¿Usarías una herramienta que te genere los términos y condiciones con IA?"
- "¿Te gustaría un copiloto integral de campañas?"
- "¿Confiarías en una IA para armar tus campañas de marketing?"
- Cualquier pregunta que mencione "Pautia" o describa el producto antes de escuchar la experiencia pasada de la persona.

## 12. Con quiénes vamos a hablar
| Perfil / rol | Para qué supuesto sirve | Cómo llegamos | Quién del equipo | Nombre (si lo tenemos) |
|---|---|---|---|---|
| Dueño de emprendimiento propio (compañero de la facultad) | Supuesto 2 (migrar a herramienta nueva) y 3 (segmentación sin datos) | Mensaje directo, contacto personal | Ambas | — |
| Dueño de pyme mediana (conocido) | Supuesto 1 (confianza en T&C con IA) y 3 (segmentación); es quien decide y paga | Mensaje directo, contacto personal | Ambas | — |
| Agencia de marketing chica (a quien pymes tercerizan) | Supuesto 2 (por qué pagan a un tercero en vez de usar una herramienta propia) | Mensaje directo, contacto de agencia | Ambas | — |

## 13. Perfiles que todavía no sabemos cómo alcanzar
Ninguno identificado por ahora: el equipo tiene acceso a los tres perfiles clave (emprendedor propio, dueño de pyme mediana que decide y paga, y agencia tercerizada) a través de contactos personales. Falta confirmar en la semana si esos contactos efectivamente responden y agendan la entrevista.
