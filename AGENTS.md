# AGENTS.md

Este proyecto es una **web app**. No se va a desarrollar una aplicación mobile durante esta materia.

Antes de crear o modificar cualquier archivo, leé en este orden:

1. El contexto del proyecto en `Contexto/` (problema y relevamiento, investigación y entrevistas, procesos y requerimientos).
2. El alcance definido del MVP en `Contexto/04_MVP/`.
3. El design system disponible en `Frontend/Design_system/` (cuando exista material ahí).
4. `Wiki/index.md` — síntesis navegable de todo lo anterior (problema, entrevistas, solución, servicio, MVP, frontend). Es más rápido para orientarse que releer las fuentes crudas de cero, pero no las reemplaza: cada página de la wiki linkea a la fuente que la respalda.

## Estructura de la carpeta

```
Contexto/
├── 01_Problema_y_relevamiento/
├── 02_Investigacion_y_entrevistas/
├── 03_Procesos_y_requerimientos/
├── 04_MVP/
├── 05_Wireframes_y_prototipos/
└── Documentacion_tecnica/
    └── Versiones_anteriores/
Frontend/
├── Design_system/
├── assets/
└── src/          (cuando exista código)
Wiki/
├── index.md      (catálogo por tema, con tabla fuente → página)
├── log.md        (registro de ingesta, append-only)
└── pages/        (síntesis por tema, no por documento fuente)
```

`Wiki/` es una capa de síntesis sobre `Contexto/` y `Frontend/`, no un espacio de trabajo nuevo — el material fuente sigue viviendo exclusivamente en esas dos carpetas, organizado por tema y etapa del proyecto como ya se indica arriba.

Esta carpeta es el único espacio de trabajo del proyecto durante todo el cuatrimestre. Cualquier material nuevo se guarda dentro de esta misma estructura, organizado por tema y etapa del proyecto — no crear una carpeta nueva por clase.

No crear `Backend/` hasta que la materia comience a trabajar esa parte del sistema.
