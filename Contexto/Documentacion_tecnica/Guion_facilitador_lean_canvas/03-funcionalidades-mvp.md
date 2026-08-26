# Etapa 3 · Funcionalidades y MVP

**Objetivo:** que definan primero el producto completo y recién después el recorte.

Antes de arrancar, leé `salidas/01-sintesis.md` y `canvas-data.json`.

---

## 3.1 · Funcionalidades completas

Antes de recortar nada, listá con ellos **todas** las funcionalidades que el producto
tendría en su versión completa. Sin filtro de esfuerzo todavía.

Después, para cada una, la pregunta central: **¿de qué otra funcionalidad depende para tener
sentido?**

Esto es lo más importante de la etapa. Ayudalos a armar el mapa de dependencias: qué
funcionalidad no sirve de nada si otra no está.

El tipo de dependencia que tienen que detectar: un módulo de stock que registra entradas de
materia prima, sin el módulo de producción que la descuenta, obliga a dar de baja todo a
mano. Entregado solo, ese módulo **agrega trabajo** en lugar de sacarlo.

Preguntas para arrancar (adaptalas):
- Si entregáramos solo esta funcionalidad, ¿el usuario estaría mejor o peor que hoy?
- ¿Esta funcionalidad necesita datos que produce otra? ¿de dónde salen si esa otra no está?
- ¿Hay algo que hoy el usuario hace automático y que con esto pasaría a hacer a mano?

---

## 3.2 · Alcance del MVP

**Criterio de corte:** el MVP no es el pedazo más chico, es el pedazo más chico que funciona
solo. Tiene que dejar al usuario mejor que hoy sin depender de nada que todavía no exista.

Guialos a separar las funcionalidades en tres grupos:

- **Dentro del MVP** — y por qué cada una es imprescindible.
- **Fuera, pero previsto** — no entra ahora, pero la arquitectura tiene que dejarle lugar.
- **Fuera, descartado** — y por qué.

Insistí en el segundo grupo. Es el que evita rehacer todo cuando llega el momento de sumar
funcionalidades.

---

## 3.3 · Control obligatorio

**Este bloque no se puede omitir ni reemplazar.** Hacé estas dos preguntas textualmente
antes de escribir el archivo de salida:

1. ¿Alguna funcionalidad del MVP depende de algo que quedó afuera?
2. ¿El MVP cubre el recorrido central completo de la Etapa 1, o lo corta por la mitad?

Si la respuesta a la primera es **sí**, o la segunda es **lo corta**, el recorte está mal.
Decíselo con claridad y volvé al punto 3.2 a ajustar. No sigas hasta que las dos den bien.

---

## 3.4 · Guardar

Escribí `salidas/03-funcionalidades-mvp.md`:

```markdown
# Funcionalidades y alcance del MVP

## Funcionalidades completas del producto
(lista, con la dependencia de cada una)

## Mapa de dependencias
(qué necesita qué para funcionar)

## MVP
### Dentro
- ... — por qué es imprescindible

### Fuera, pero previsto
- ... — cuándo entraría y qué tiene que dejar preparado la arquitectura

### Fuera, descartado
- ... — por qué

## Control final
- ¿El MVP funciona sin nada de lo que quedó afuera? (sí / no + explicación)
- ¿Cubre el recorrido central completo? (sí / no + explicación)
```

---

## Al terminar

El equipo tiene que quedarse con:

- `salidas/01-sintesis.md`
- `canvas-data.json` (más una captura del canvas desde el navegador)
- `salidas/03-funcionalidades-mvp.md`

Recordáselo y ofreceles repasar cualquier etapa si algo quedó flojo.
