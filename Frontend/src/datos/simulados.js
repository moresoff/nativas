/* Datos simulados — puestos a mano para que las pantallas se vean completas.
   No vienen de ninguna base de datos ni de ninguna API.
   Cuando exista backend, esto se reemplaza por datos reales. */

import fotoEjemplo1 from '../assets/campanas-ejemplo/foto-ejemplo-1.png'
import fotoEjemplo2 from '../assets/campanas-ejemplo/foto-ejemplo-2.png'
import fotoEjemplo3 from '../assets/campanas-ejemplo/foto-ejemplo-3.png'

export const pyme = {
  nombre: 'Van Luz',
  rubro: 'Distribuidora de materiales eléctricos',
}

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
