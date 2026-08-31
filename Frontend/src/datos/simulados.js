/* Datos simulados — puestos a mano para que las pantallas se vean completas.
   No vienen de ninguna base de datos ni de ninguna API.
   Cuando exista backend, esto se reemplaza por datos reales. */

import fotoEjemplo1 from '../assets/campanas-ejemplo/foto-ejemplo-1.png'
import fotoEjemplo2 from '../assets/campanas-ejemplo/foto-ejemplo-2.png'
import fotoEjemplo3 from '../assets/campanas-ejemplo/foto-ejemplo-3.png'
import fotoEquipo from '../assets/producto-ejemplo/equipo.png'
import fotoProducto1 from '../assets/producto-ejemplo/producto-1.webp'
import fotoProducto2 from '../assets/producto-ejemplo/producto-2.webp'
import fotoProducto3 from '../assets/producto-ejemplo/producto-3.webp'
import fotoProducto4 from '../assets/producto-ejemplo/producto-4.jpeg'
import fotoProducto5 from '../assets/producto-ejemplo/producto-5.webp'

/* Lo que Pautia "sabe" del negocio — en el producto real se carga en el
   chat de onboarding (ver Contexto/03_Procesos_y_requerimientos/
   05-happy-path-onboarding.md). Acá vive como dato de partida editable
   en la vista "Tu información". */
export const pyme = {
  nombre: 'Van Luz',
  rubro: 'Distribuidora de materiales eléctricos',
  queVende: 'Cable, canalización, iluminación y accesorios eléctricos, por mayor y menor.',
  tiempoActividad: '8 años',
  aQuienLeVende: 'Electricistas e instaladores del conurbano sur, y consumidores finales en el local.',
}

export const visionMarca =
  'Queremos ser la casa a la que un electricista llama cuando la obra no puede parar: la que tiene el cable en stock hoy, no en tres días, y te lo explica en criollo si tenés dudas. No vendemos materiales sueltos — sostenemos obras. Por eso la entrega en 48 horas no es una promoción, es la promesa de la marca.'

export const fotoEquipoNegocio = fotoEquipo

/* Branding — para que las campañas que arma la IA no salgan genéricas:
   necesita saber no solo qué vende Van Luz, sino cómo suena y qué
   evitar. Editable con el mismo patrón que "Datos del negocio". */
export const branding = {
  paleta: [
    { nombre: 'Azul Van Luz', hex: '#0B3C8C' },
    { nombre: 'Amarillo seguridad', hex: '#F5C518' },
    { nombre: 'Gris grafito', hex: '#2E3238' },
  ],
  tono: 'Directo y técnico, sin vueltas — como un electricista con experiencia explicándole a otro. Números concretos (48 horas, 8 años en el barrio) en vez de adjetivos vacíos.',
  queEvitar: 'Evitar frases genéricas de "la mejor calidad" sin respaldo, evitar imágenes de stock que no sean de instalaciones reales, y evitar sonar como una casa de electrodomésticos — Van Luz le habla al que instala, no al que decora.',
}

/* Catálogo de productos — sirve para nutrir el contexto de las campañas
   (de qué producto hablamos cuando armamos el copy), no es una tienda. */
export const productos = [
  {
    id: 'p1',
    nombre: 'Lámpara LED E27 9W',
    categoria: 'Iluminación LED',
    descripcion:
      'Reemplazo directo para bombitas incandescentes o halógenas de zócalo E27, sin cambiar el portalámparas. Bajo consumo y hasta 15.000 horas de vida útil, así que se vende sola en cualquier mostrador. Buena puerta de entrada para el cliente que todavía no pasó a LED en toda la casa.',
    specs: ['Zócalo E27', 'Luz cálida 3000K', '9W ≈ 60W incandescente'],
    foto: fotoProducto1,
    usosEnCampanas: 12,
    precio: '$4.300',
    stock: 156,
  },
  {
    id: 'p2',
    nombre: 'Colgante triple cónico',
    categoria: 'Colgantes',
    descripcion:
      'Tres pantallas cónicas colgando de una sola roseta, con interior dorado que da un brillo cálido marcado. Pensado para living, isla de cocina o barra — donde una sola luz se queda corta y tres colgantes sueltos quedan desprolijos. La altura de cada cable se regula por separado, así que se adapta a distintos techos.',
    specs: ['3 luces', 'Zócalo E27 c/u', 'Altura de cable regulable'],
    foto: fotoProducto2,
    usosEnCampanas: 3,
    precio: '$38.900',
    stock: 22,
  },
  {
    id: 'p3',
    nombre: 'Pie de living plisado',
    categoria: 'Lámparas de pie',
    descripcion:
      'Base metálica dorada con columna torneada y pantalla de tela plisada, un clásico que combina con casi cualquier living o dormitorio. Da una luz indirecta suave, ideal como segunda fuente además de la del techo. Con 150 cm de altura entra bien al lado de un sillón o una cama.',
    specs: ['Altura 150 cm', 'Zócalo E27', 'Pantalla de tela plisada'],
    foto: fotoProducto3,
    usosEnCampanas: 1,
    precio: '$52.500',
    stock: 9,
  },
  {
    id: 'p4',
    nombre: 'Lámpara de mesa madera',
    categoria: 'Lámparas de mesa',
    descripcion:
      'Base torneada en madera maciza con pantalla de tela plisada — calidez de material, no plástico. Para mesa de luz, escritorio o una repisa donde hace falta luz puntual sin que la lámpara compita con el resto de la decoración.',
    specs: ['Base de madera maciza', 'Pantalla plisada', 'Zócalo E27'],
    foto: fotoProducto4,
    usosEnCampanas: 5,
    precio: '$29.900',
    stock: 31,
  },
  {
    id: 'p5',
    nombre: 'Colgante cónico madera',
    categoria: 'Colgantes',
    descripcion:
      'Pantalla acanalada en madera clara con cable negro visible, para colgar sola sobre una mesa, una barra o un rincón de lectura. El acabado en madera natural la distingue de los colgantes metálicos de siempre — para quien busca algo más cálido.',
    specs: ['Zócalo E27', 'Cable negro 1,5 m', 'Pantalla de madera'],
    foto: fotoProducto5,
    usosEnCampanas: 0,
    precio: '$24.600',
    stock: 47,
  },
]

/* Carrusel de resultados: cada tarjeta agrupa el nombre de una campaña
   (o el resumen general) junto con sus propias métricas, para que el
   título nunca quede separado de los números que explica. */
export const resultados = [
  {
    id: 'general',
    nombre: 'Resumen general',
    sub: 'Últimos 30 días',
    metricas: [
      { etiqueta: 'Nuevas ventas', valor: '176', variacion: '+12%', tendencia: 'sube' },
      { etiqueta: 'Campañas realizadas', valor: '13', variacion: '+2', tendencia: 'sube' },
      { etiqueta: 'Conversión', valor: '67%', variacion: '−3%', tendencia: 'baja' },
    ],
  },
  {
    id: 'c1',
    nombre: 'Promo electricistas — abril',
    sub: 'Campaña activa',
    metricas: [
      { etiqueta: 'Consultas nuevas', valor: '48', variacion: '+12%', tendencia: 'sube' },
      { etiqueta: 'Alcance', valor: '3.240', variacion: '+8%', tendencia: 'sube' },
      { etiqueta: 'Costo por consulta', valor: '$610', variacion: '−15%', tendencia: 'sube' },
    ],
  },
  {
    id: 'c2',
    nombre: 'Liquidación fin de año',
    sub: 'Campaña finalizada · diciembre 2025',
    metricas: [
      { etiqueta: 'Ventas generadas', valor: '62', variacion: '+20%', tendencia: 'sube' },
      { etiqueta: 'Alcance', valor: '5.180', variacion: '+1%', tendencia: 'neutral' },
      { etiqueta: 'Conversión', valor: '11%', variacion: '−1%', tendencia: 'baja' },
    ],
  },
]

export const campanas = [
  {
    id: 1,
    titulo: 'Promo electricistas — abril',
    detalle: 'Reconocimiento · Instagram · Conurbano sur',
    estado: 'activa',
    resultado: '48 consultas nuevas',
    foto: fotoEjemplo1,
    segmento: 'Electricistas del conurbano sur',
    objetivo: 'Más ventas',
    transmite: 'Confianza y experiencia',
    formatos: ['Post cuadrado (1:1)', 'Historia (9:16)'],
    fecha: '1 de abril de 2026',
    segmento: 'Electricistas matriculados de 28 a 55 años, con obra en curso, en Lomas de Zamora, Quilmes y Avellaneda.',
    copy:
      '¿Sos electricista y comprás por volumen? En Van Luz tenés stock permanente de cable, canalización y accesorios, con entrega en 48 horas en todo el conurbano sur. Pedí tu presupuesto hoy.',
    tyc:
      'Promoción válida del 1 al 30 de abril de 2026 en compras superiores a $150.000. Entrega en 48 horas sujeta a stock disponible en el momento de la compra. No acumulable con otras promociones vigentes.',
  },
  {
    id: 2,
    titulo: 'Liquidación de cable unipolar',
    detalle: 'Conversión · Instagram y Facebook · Todo AMBA',
    estado: 'lista',
    resultado: 'Lista para lanzar',
    foto: fotoEjemplo2,
    segmento: 'Electricistas e instaladores de todo AMBA',
    objetivo: 'Más ventas',
    transmite: 'Urgencia, que actúen ya',
    formatos: ['Post cuadrado (1:1)', 'Banner horizontal (16:9)'],
    fecha: '18 de marzo de 2026',
    copy:
      'Liquidación de cable unipolar: precios de una sola vez en 1,5mm², 2,5mm² y 4mm², con stock para entrega inmediata. Aprovechá antes de que se termine — escribinos y te reservamos tu pedido.',
    tyc:
      'Promoción válida desde el 20 de marzo de 2026 y mientras dure el stock disponible. Precios especiales solo para las medidas y cantidades publicadas. No acumulable con otras promociones vigentes.',
  },
  {
    id: 3,
    titulo: 'Entrega en 48 horas',
    detalle: 'Reconocimiento · Instagram · Zona sur',
    estado: 'borrador',
    resultado: 'Falta revisar los T&C',
    foto: fotoEjemplo3,
    segmento: 'Electricistas de la zona sur',
    objetivo: 'Más reconocimiento de marca',
    transmite: 'Confianza y experiencia',
    formatos: ['Historia (9:16)'],
    fecha: '2 de agosto de 2026',
    copy:
      'Hace 8 años sostenemos obras en la zona sur: cable, canalización y accesorios con entrega en 48 horas, sin vueltas. Conocé a Van Luz.',
    tyc:
      'Borrador — términos y condiciones todavía sin definir. Falta confirmar vigencia y alcance geográfico antes de lanzar.',
  },
]

/* Ideación: todo lo que puede terminar siendo una campaña, en un solo
   lugar — fechas clave que recomienda Pautia, sugerencias de la IA e
   ideas que suma la persona a mano. El "origen" es lo que las
   distingue (chip y color en el calendario); `fecha` es opcional —
   una idea sin fecha simplemente no aparece en el calendario. */
export const ideas = [
  {
    id: 'idea-1',
    titulo: 'Día del Electricista',
    motivo: 'Es la fecha con más movimiento del rubro según tus ventas del año pasado.',
    origen: 'fecha-clave',
    fecha: '2026-09-13',
  },
  {
    id: 'idea-2',
    titulo: 'Recuperar clientes que no compran hace 3 meses',
    motivo: 'Tenés 34 clientes en esa situación. Suelen volver con una promo de reposición.',
    origen: 'sugerencia-ia',
    fecha: null,
  },
  {
    id: 'idea-3',
    titulo: 'Liquidación de stock de colgantes',
    motivo: 'Tenés 22 unidades del colgante triple cónico hace más de 2 meses sin rotar.',
    origen: 'sugerencia-ia',
    fecha: '2026-09-05',
  },
  {
    id: 'idea-4',
    titulo: 'Día de la Industria',
    motivo: 'Fecha relevante para tu público de electricistas e instaladores.',
    origen: 'fecha-clave',
    fecha: '2026-09-02',
  },
  {
    id: 'idea-5',
    titulo: 'Combo cable + canalización para obras nuevas',
    motivo: 'Idea propia: armar un combo para captar obras que arrancan en primavera.',
    origen: 'propia',
    fecha: '2026-09-20',
  },
]

/* Tendencias e inspiración — simuladas como si vinieran de fuentes
   como Meta Ads. No hay integración real: es contenido de referencia
   para inspirar el próximo copy, aclarado como simulado en pantalla. */
export const tendenciasMeta = [
  {
    id: 't1',
    titulo: 'Videos cortos con antes/después de instalación',
    descripcion:
      'Los distribuidores de materiales de construcción ven mejor rendimiento con clips de 15-20 segundos mostrando la obra terminada, más que fotos de producto solas.',
    detalle:
      'Funciona mejor cuando el "antes" dura menos de 3 segundos y el corte al "después" es directo, sin transición — la comparación tiene que leerse de un vistazo. Agregar el nombre del barrio o la zona en el texto superpuesto sube el reconocimiento local.',
    formato: 'Historia (9:16)',
  },
  {
    id: 't2',
    titulo: 'Carruseles de "antes de que se te acabe el stock"',
    descripcion:
      'Formato de urgencia con carrusel de 3-4 productos — buen desempeño en rubros de insumos con stock limitado.',
    detalle:
      'La primera tarjeta del carrusel es la que más pesa: funciona mejor con el producto más buscado del lote, no con el de menor stock. Mencionar una fecha límite concreta (no solo "por tiempo limitado") mejora la tasa de clics.',
    formato: 'Post cuadrado (1:1)',
  },
  {
    id: 't3',
    titulo: 'Testimonios cortos de electricistas matriculados',
    descripcion:
      'Contenido con caras reales del rubro genera más confianza que las piezas 100% de producto.',
    detalle:
      'Los mejores resultados vienen de testimonios grabados en la obra, no en estudio — el ruido de fondo y las manos con guantes de trabajo suman credibilidad en vez de restarla. Un testimonio de 20-30 segundos rinde mejor que uno más largo.',
    formato: 'Banner horizontal (16:9)',
  },
]
