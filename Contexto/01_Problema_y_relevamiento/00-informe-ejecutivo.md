# Informe ejecutivo · Pautia

**Fecha:** 27/08/2026
**Equipo:** Morena y Asunción
**Estado del relevamiento:** 7 entrevistas realizadas (6 nuevas desde la última síntesis) + investigación secundaria.

## 1 · El problema

Las pymes y emprendimientos que venden producto online, sin un rol de marketing especializado en el equipo, arman sus campañas de publicidad de dos maneras — y en ambas llegan al lanzamiento con los mismos tres huecos:

1. **Segmentan mal o no segmentan.** Apuntan por zona/rubro sin precisión, o dejan que el algoritmo de la plataforma lo resuelva solo, sin base de datos propia detrás.
2. **No tienen respaldo legal.** Lanzan promociones y descuentos sin términos y condiciones claros (fechas límite, exclusiones, condiciones) — el marco de defensa del consumidor no está en el radar de nadie, ni siquiera de las agencias.
3. **No saben si el gasto en publicidad funciona.** Pagan Meta Ads o contratan una agencia sin poder confirmar que la inversión se traduce en ventas.

Lo nuevo de esta ronda de entrevistas es que estos tres huecos **no dependen del tamaño ni de la sofisticación del negocio**:

- **Martín (PrimOffice)** pasó por **cuatro agencias distintas** con el mismo resultado — gasto sin rendimiento, atención dispersa entre muchos clientes, piezas de mala calidad — y terminó resolviéndolo poniendo a su hermano a manejar la pauta puertas adentro. El problema no se resolvió cambiando de proveedor.
- **Iván (Hype Stein)**, el caso más avanzado del relevamiento (e-commerce propio con heatmaps, IA para analizar sesiones, secuencias de mail automatizadas, campañas de lookalike y remarketing), **tampoco tiene términos y condiciones formales** para sus promociones. Sus descuentos nacen de necesidad de rotar stock, no de segmentación de clientes.
- **María José (analista en la agencia ABN)** confirma el punto ciego legal desde el otro lado del mostrador: *"que nunca escuché eso... no nos pasa eso"*. Y señala ella misma una oportunidad de producto que Pautia ya tenía prevista: piezas creativas adaptadas a la etapa del embudo (awareness / consideración / acción), hoy un servicio caro y de baja calidad cuando el cliente lo arma por su cuenta.
- **José (Flypolo)** y la entrevista en la **Facultad de Ciencias Empresariales** funcionaron como límite del segmento: negocios muy relacionales o instituciones que no venden producto no tienen este dolor con la misma intensidad — ayudan a definir mejor a quién *no* le apunta Pautia.

**Conclusión del relevamiento:** el problema no es "pymes chicas sin conocimiento". Es que **nadie en esta cadena — ni la pyme, ni la agencia — tiene, en un solo lugar, segmentación con datos, generación de campaña y respaldo legal integrados.** Cuanto más madura la pyme, menos se apoya en agencias externas y más arma todo a mano — pero sigue sin resolver segmentación fina ni legal, solo cambia quién hace el trabajo manual.

## 2 · Qué vamos a hacer

**Camino elegido: Copiloto integral de campañas.** Una herramienta donde la pyme centraliza la información de su negocio, productos y clientes, pide una campaña con un objetivo (vender más, liquidar stock, captar clientes nuevos), y el sistema sugiere segmentación, arma el copy, genera los términos y condiciones legales, y — con el tiempo — aprende de los resultados de las campañas ya lanzadas.

**Por qué este camino y no los otros dos evaluados** (un checklist legal sin producto nuevo, o un revisor que se integra a las herramientas ya usadas): porque ataca los tres dolores juntos en un solo flujo, y porque el equipo ya tiene ventaja injusta en dos de las tres partes — trabajo previo propio de generación de T&C legales, y experiencia con agentes de IA para escribir y evaluar campañas.

### Alcance del MVP (ya definido, confirmado por esta ronda de entrevistas)

**Dentro del MVP:**
1. Carga/conexión de datos del negocio, productos y clientes.
2. Perfil de marca: tono de voz, identidad visual y buyer persona específico (más allá del segmento general) — se suma tras la entrevista con Hub Studio: sin este insumo, la generación automática de campañas corre el riesgo de producir el mismo output genérico para pymes distintas, el problema que hoy las agencias buenas evitan armando un equipo dedicado por cliente.
3. Input del usuario con la idea/objetivo de campaña.
4. Sugerencia de campaña y segmento.
5. Generación de copy.
6. Generación de términos y condiciones — validado como hueco transversal, no específico de un perfil.
7. Dashboard de revisión/aprobación antes de lanzar.
8. Relevamiento de resultados de la campaña lanzada (conexión Meta Ads).
9. Historial/contexto de campañas pasadas.

**Fuera del MVP pero priorizado para después:** generación de piezas visuales vía API de Canva — este relevamiento lo confirmó como oportunidad real (lo señaló espontáneamente la analista de la agencia ABN), así que sube en la lista de prioridades para la siguiente etapa.

**Descartado por ahora:** integrar más de una fuente de datos desde el arranque (Mercado Libre + sistema interno, además de la fuente principal) — se suma recién después de validar con una sola fuente.

### Próximos pasos

1. **Cerrar la validación del Supuesto 1** (confianza en T&C generados por IA sin abogado propio): ningún entrevistado hasta ahora tuvo un incidente legal real, así que falta indagar puntualmente si el dolor se siente como urgente o como "debería mejorarlo algún día" — esto decide qué tan fuerte hay que vender el ángulo legal en el pitch del producto.
2. **Sumar una segunda entrevista de agencia chica generalista** (no especializada en paid media como ABN) para terminar de validar el Supuesto 2 — por qué un cliente elige pagarle a un tercero en vez de usar una herramienta propia.
3. **Ajustar el mensaje de segmento**: excluir explícitamente a negocios muy relacionales/chicos (tipo Flypolo) e instituciones sin fines de venta directa — no son el ICP temprano, aunque compartan superficialmente el proceso de "armar contenido para redes".
4. **Empezar el diseño de la sugerencia de campaña** contemplando que el objetivo de negocio detrás de una promoción no siempre es "captar clientes nuevos" — puede ser liquidar stock o generar caja (caso Hype Stein), y eso cambia qué tipo de campaña conviene sugerir.
