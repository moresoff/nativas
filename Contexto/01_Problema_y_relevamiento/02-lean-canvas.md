# Lean Canvas

**Proyecto:** Pautia
**Equipo:** Morena y Asunción

## 1 · Problema
1. Segmentan de forma poco criteriosa (por zona/rubro, sin precisión), lo que reduce la efectividad de las campañas.
2. Desconocen el marco legal de defensa del consumidor al lanzar campañas y promociones.
3. Gastan en publicidad pagada sin saber si están invirtiendo bien: no logran traducir la inversión en ventas.

## 2 · Segmento de clientes
PyMEs y emprendimientos que venden producto online, sin un rol de marketing especializado en el equipo, pero que ya destinan algún presupuesto a marketing. El encargado de ventas/comercial (si existe ese rol) o, si no, el dueño mismo — es quien decide y paga. Modelo B2B2C: la pyme le vende a consumidores finales o a un canal especialista/intermediario.

## 3 · Propuesta de valor única
Pautia le da a la pyme sin experto en marketing, en un solo lugar, segmentación certera, campañas con respaldo legal y control sobre si su gasto en publicidad realmente funciona — sin depender de una agencia que primero tiene que aprender su negocio.

## 4 · Solución
1. Concentra en un solo lugar la información del negocio, los productos y los clientes actuales.
2. Sugiere segmentación y qué tipo de campaña funcionaría mejor, y arma la campaña completa: copy, piezas visuales y términos y condiciones legales.
3. Se retroalimenta con los resultados de cada campaña lanzada, para mejorar las próximas sugerencias.

## 5 · Canales
Redes sociales y contacto 1 a 1 (no masivo), aprovechando la red de contactos propia del equipo: compañeros con emprendimientos y conocidos dueños de pymes. El objetivo es generar confianza antes que alcance.

## 6 · Métricas clave
1. Tasa de conversión: campañas armadas vs. campañas lanzadas exitosamente.
2. Tasa de retención: % de pymes que siguen usando Pautia mes a mes después de su primera campaña.
3. Tasa de iteraciones: cuántas veces ajustan una campaña sugerida antes de lanzarla.
4. CAC de las campañas armadas por la pyme con Pautia (costo de adquisición de clientes de la pyme, no de Pautia), comparado con lo que gastaban antes con agencia.
5. % de campañas lanzadas con términos y condiciones completos (sin huecos legales).
6. Tiempo desde "necesito una campaña" hasta "campaña lanzada".

## 7 · Valor capturado
- Ahorro de costo: evita pagar agencia externa/equipo de marketing propio (según la entrevista con Fernando, la inversión en agencia terminó siendo mayor que las ventas generadas) y permite diversificar el presupuesto en varias campañas chicas en simultáneo en vez de concentrarlo en una sola campaña grande.
- Ahorro de tiempo: reduce el ciclo de prueba y error (3 a 6 meses con una agencia externa, según la entrevista) a un ajuste día a día dentro de la misma herramienta. También ahorra el tiempo que hoy se pierde en que la agencia conozca el negocio y entienda los productos que se venden, ya que esa información queda concentrada en Pautia.
- A confirmar con más entrevistas: cuánto tiempo y presupuesto exacto se ahorra en términos numéricos — todavía es una estimación cualitativa.

## 8 · Estructura de costos
Puntos de riesgo de sobrecostos identificados y su alternativa más simple para el MVP:

1. Multiagente con 3 agentes independientes (segmentación, copy+visual, T&C) → simplificar a un solo agente con pasos/prompts secuenciales, sin orquestación entre agentes autónomos.
2. Integrar Tiendanube + Mercado Libre + Meta Ads + sistema interno desde el arranque → empezar con una sola fuente de datos (la más repetida entre las pymes entrevistadas, o carga manual/CSV), sumar el resto después de validar.
3. Motor propio de generación de piezas visuales → usar la API de Canva (o similar) con templates, para además mantener identidad de marca consistente.
4. Canal de entrega nuevo (bot, WhatsApp, etc.) → alcanza con un dashboard simple donde el dueño revisa y aprueba antes de lanzar.
5. Conexión con la API de Meta Ads para el relevamiento de resultados de campaña, una vez lanzada.

## 9 · Ventaja injusta
- Trabajo previo propio de generación de términos y condiciones legales para campañas de marketing (de otra materia), reutilizable directamente para esta parte del producto.
- Experiencia previa del equipo trabajando con agentes de IA (proyecto de la materia de IA: agente que escribe campañas y otro que las evalúa).
- Capacidad de detectar necesidades distintas de los usuarios, no solo construir la solución obvia.
- Acceso directo a los tres perfiles clave de entrevistados (emprendedor propio, dueño de pyme mediana que decide y paga, y agencia chica tercerizada) a través de contactos personales del equipo.
