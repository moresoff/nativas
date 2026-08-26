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
      { etiqueta: 'Nuevas ventas', valor: '176', variacion: '+12%', sube: true },
      { etiqueta: 'Campañas realizadas', valor: '13', variacion: '+2', sube: true },
      { etiqueta: 'Conversión', valor: '67%', variacion: '−3%', sube: false },
    ],
  },
  {
    id: 'c1',
    nombre: 'Promo electricistas — abril',
    sub: 'Campaña activa',
    metricas: [
      { etiqueta: 'Consultas nuevas', valor: '48', variacion: '+12%', sube: true },
      { etiqueta: 'Alcance', valor: '3.240', variacion: '+8%', sube: true },
      { etiqueta: 'Costo por consulta', valor: '$610', variacion: '−15%', sube: true },
    ],
  },
  {
    id: 'c2',
    nombre: 'Liquidación fin de año',
    sub: 'Campaña finalizada · diciembre 2025',
    metricas: [
      { etiqueta: 'Ventas generadas', valor: '62', variacion: '+20%', sube: true },
      { etiqueta: 'Alcance', valor: '5.180', variacion: '+4%', sube: true },
      { etiqueta: 'Conversión', valor: '11%', variacion: '−1%', sube: false },
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
  },
  {
    id: 2,
    titulo: 'Liquidación de cable unipolar',
    detalle: 'Conversión · Instagram y Facebook · Todo AMBA',
    estado: 'lista',
    resultado: 'Lista para lanzar',
    foto: fotoEjemplo2,
  },
  {
    id: 3,
    titulo: 'Entrega en 48 horas',
    detalle: 'Reconocimiento · Instagram · Zona sur',
    estado: 'borrador',
    resultado: 'Falta revisar los T&C',
    foto: fotoEjemplo3,
  },
]

export const sugerencias = [
  {
    id: 's1',
    titulo: 'Campaña para el Día del Electricista',
    motivo:
      'Falta un mes y es la fecha con más movimiento del rubro según tus ventas del año pasado.',
  },
  {
    id: 's2',
    titulo: 'Recuperar clientes que no compran hace 3 meses',
    motivo:
      'Tenés 34 clientes en esa situación. Suelen volver con una promo de reposición.',
  },
]
