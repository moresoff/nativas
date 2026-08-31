import { useState } from 'react'
import { campanas } from '../datos/simulados'
import './Reportes.css'

const ESTADOS = {
  activa: { texto: 'Dando resultados', clase: 'estado-punto--activa' },
  lista: { texto: 'Para revisar', clase: 'estado-punto--lista' },
  borrador: { texto: 'Recién arrancando', clase: 'estado-punto--borrador' },
}

const PERIODOS = [
  { id: '7d', etiqueta: 'Últimos 7 días' },
  { id: '30d', etiqueta: 'Últimos 30 días' },
  { id: '90d', etiqueta: 'Últimos 90 días' },
]

/* KPIs del encabezado — varían según el período elegido, para que el
   filtro de fechas se sienta real aunque los datos sean ficticios. */
const KPIS_POR_PERIODO = {
  '7d': [
    { etiqueta: 'Nuevas ventas', valor: '38', variacion: '+9%', tendencia: 'sube' },
    { etiqueta: 'Campañas activas', valor: '3', variacion: '0', tendencia: 'neutral' },
    { etiqueta: 'Conversión', valor: '64%', variacion: '−2%', tendencia: 'baja' },
    { etiqueta: 'Alcance total', valor: '1.960', variacion: '+6%', tendencia: 'sube' },
    { etiqueta: 'Presupuesto invertido', valor: '$41.200', variacion: '+11%', tendencia: 'sube' },
    { etiqueta: 'Costo por resultado prom.', valor: '$980', variacion: '−4%', tendencia: 'sube' },
  ],
  '30d': [
    { etiqueta: 'Nuevas ventas', valor: '176', variacion: '+12%', tendencia: 'sube' },
    { etiqueta: 'Campañas activas', valor: '13', variacion: '+2', tendencia: 'sube' },
    { etiqueta: 'Conversión', valor: '67%', variacion: '−3%', tendencia: 'baja' },
    { etiqueta: 'Alcance total', valor: '8.420', variacion: '+1%', tendencia: 'neutral' },
    { etiqueta: 'Presupuesto invertido', valor: '$186.400', variacion: '+18%', tendencia: 'sube' },
    { etiqueta: 'Costo por resultado prom.', valor: '$940', variacion: '−7%', tendencia: 'sube' },
  ],
  '90d': [
    { etiqueta: 'Nuevas ventas', valor: '512', variacion: '+24%', tendencia: 'sube' },
    { etiqueta: 'Campañas activas', valor: '13', variacion: '+5', tendencia: 'sube' },
    { etiqueta: 'Conversión', valor: '69%', variacion: '+4%', tendencia: 'sube' },
    { etiqueta: 'Alcance total', valor: '24.680', variacion: '+31%', tendencia: 'sube' },
    { etiqueta: 'Presupuesto invertido', valor: '$512.900', variacion: '+22%', tendencia: 'sube' },
    { etiqueta: 'Costo por resultado prom.', valor: '$890', variacion: '−1%', tendencia: 'neutral' },
  ],
}

/* Evolución de consultas nuevas — ficticio, con una granularidad que
   cambia según el período (días, semanas o meses) igual que en un
   dashboard de verdad. */
const EVOLUCION_POR_PERIODO = {
  '7d': [
    { etiqueta: 'Lun', valor: 5 }, { etiqueta: 'Mar', valor: 7 }, { etiqueta: 'Mié', valor: 6 },
    { etiqueta: 'Jue', valor: 9 }, { etiqueta: 'Vie', valor: 8 }, { etiqueta: 'Sáb', valor: 4 }, { etiqueta: 'Dom', valor: 3 },
  ],
  '30d': [
    { etiqueta: 'Sem 1', valor: 28 }, { etiqueta: 'Sem 2', valor: 34 }, { etiqueta: 'Sem 3', valor: 31 }, { etiqueta: 'Sem 4', valor: 48 },
  ],
  '90d': [
    { etiqueta: 'Jun', valor: 84 }, { etiqueta: 'Jul', valor: 101 }, { etiqueta: 'Ago', valor: 141 },
  ],
}

/* Quiénes responden las campañas — agregado ficticio de toda la cuenta,
   con todas las cualidades que un dashboard de pauta suele mostrar. */
const POR_CLIENTE = [
  { etiqueta: 'Electricistas', porcentaje: 72 },
  { etiqueta: 'Consumidor final', porcentaje: 28 },
]
const POR_ZONA = [
  { etiqueta: 'Lomas de Zamora', porcentaje: 27 },
  { etiqueta: 'Quilmes', porcentaje: 21 },
  { etiqueta: 'Avellaneda', porcentaje: 16 },
  { etiqueta: 'Resto de AMBA', porcentaje: 36 },
]
const POR_EDAD = [
  { etiqueta: '18-24', porcentaje: 8 },
  { etiqueta: '25-34', porcentaje: 24 },
  { etiqueta: '35-44', porcentaje: 36 },
  { etiqueta: '45-54', porcentaje: 22 },
  { etiqueta: '55+', porcentaje: 10 },
]
const POR_PROFESION = [
  { etiqueta: 'Electricista matriculado', porcentaje: 54 },
  { etiqueta: 'Maestro mayor de obra', porcentaje: 17 },
  { etiqueta: 'Instalador independiente', porcentaje: 15 },
  { etiqueta: 'Consumidor final', porcentaje: 14 },
]
const POR_DISPOSITIVO = [
  { etiqueta: 'Celular', porcentaje: 81 },
  { etiqueta: 'Computadora', porcentaje: 19 },
]

/* Formatos más usados y estado de la cartera — estos sí salen de datos
   reales de `campanas` (agregados), no son inventados por separado. */
const FORMATOS_USADOS = Object.entries(
  campanas.reduce((conteo, c) => {
    c.formatos.forEach((f) => { conteo[f] = (conteo[f] ?? 0) + 1 })
    return conteo
  }, {})
)
  .map(([etiqueta, cantidad]) => ({ etiqueta, cantidad }))
  .sort((a, b) => b.cantidad - a.cantidad)

const RESUMEN_ESTADOS = ['activa', 'lista', 'borrador'].map((estado) => ({
  estado,
  ...ESTADOS[estado],
  cantidad: campanas.filter((c) => c.estado === estado).length,
}))

/* Aprendizajes: lo que Pautia va a usar para sugerir mejor la próxima
   campaña — el cierre del círculo entre "ver resultados" y "armar la
   siguiente" con ese aprendizaje ya incorporado. */
const APRENDIZAJES_GENERALES = [
  'El 54% de quienes responden son electricistas matriculados de 35 a 44 años — tu perfil más activo.',
  'Lomas de Zamora, Quilmes y Avellaneda concentran el 64% de las respuestas: son tu zona fuerte.',
  'El formato Historia (9:16) viene con mejor costo por resultado que el resto — priorizalo en la próxima.',
]

/* Qué métricas importan según el objetivo de la campaña — mismo criterio
   que usa Meta Ads para agrupar resultados, para que lo que se vea acá
   se parezca a lo que la PyME va a encontrar cuando conecte esa cuenta. */
const CATEGORIAS_OBJETIVO = {
  'Más ventas': {
    nombre: 'Ventas / Conversiones',
    metricas: ['ROAS', 'CPA (costo por resultado)', 'Tasa de conversión', 'Importe gastado', 'Interacciones con la publicación'],
  },
  'Más reconocimiento de marca': {
    nombre: 'Reconocimiento / Alcance',
    metricas: ['CPM', 'Alcance', 'Impresiones', 'Frecuencia', 'Interacciones con la publicación'],
  },
}

/* Solo la campaña activa tiene resultados reales — las que están
   "para revisar" o en borrador todavía no se lanzaron fuera de Pautia
   (paso 12 del happy path), así que no hay nada que medir todavía.
   Los valores cambian por período, igual que los KPIs generales. */
const RESULTADOS_POR_CAMPANA = {
  1: {
    '7d': [
      { etiqueta: 'ROAS', valor: '3,8x', variacion: '−0,2', tendencia: 'baja' },
      { etiqueta: 'CPA (costo por resultado)', valor: '$1.410', variacion: '−6%', tendencia: 'sube' },
      { etiqueta: 'Tasa de conversión', valor: '8,1%', variacion: '+0,4 pp', tendencia: 'sube' },
      { etiqueta: 'Importe gastado', valor: '$14.900' },
      { etiqueta: 'Interacciones con la publicación', valor: '312', variacion: '+0%', tendencia: 'neutral' },
    ],
    '30d': [
      { etiqueta: 'ROAS', valor: '4,2x', variacion: '+0,6', tendencia: 'sube' },
      { etiqueta: 'CPA (costo por resultado)', valor: '$1.280', variacion: '−12%', tendencia: 'sube' },
      { etiqueta: 'Tasa de conversión', valor: '9,5%', variacion: '+1,2 pp', tendencia: 'sube' },
      { etiqueta: 'Importe gastado', valor: '$61.400' },
      { etiqueta: 'Interacciones con la publicación', valor: '1.284', variacion: '+22%', tendencia: 'sube' },
    ],
    '90d': [
      { etiqueta: 'ROAS', valor: '4,6x', variacion: '+1,1', tendencia: 'sube' },
      { etiqueta: 'CPA (costo por resultado)', valor: '$1.150', variacion: '−18%', tendencia: 'sube' },
      { etiqueta: 'Tasa de conversión', valor: '10,2%', variacion: '+2,0 pp', tendencia: 'sube' },
      { etiqueta: 'Importe gastado', valor: '$178.600' },
      { etiqueta: 'Interacciones con la publicación', valor: '3.640', variacion: '+41%', tendencia: 'sube' },
    ],
  },
}

const TENDENCIA_POR_CAMPANA = {
  1: {
    '7d': [
      { etiqueta: 'Lun', valor: 1 }, { etiqueta: 'Mar', valor: 2 }, { etiqueta: 'Mié', valor: 1 },
      { etiqueta: 'Jue', valor: 3 }, { etiqueta: 'Vie', valor: 2 }, { etiqueta: 'Sáb', valor: 1 }, { etiqueta: 'Dom', valor: 1 },
    ],
    '30d': [
      { etiqueta: 'Sem 1', valor: 8 }, { etiqueta: 'Sem 2', valor: 11 }, { etiqueta: 'Sem 3', valor: 9 }, { etiqueta: 'Sem 4', valor: 20 },
    ],
    '90d': [
      { etiqueta: 'Jun', valor: 14 }, { etiqueta: 'Jul', valor: 19 }, { etiqueta: 'Ago', valor: 48 },
    ],
  },
}

/* Perfil de audiencia por campaña — no varía por período (la
   composición de quién responde se mantiene bastante estable), pero sí
   se abre en todas las cualidades que un dashboard de pauta ofrece. */
const AUDIENCIA_POR_CAMPANA = {
  1: {
    zonas: [
      { etiqueta: 'Lomas de Zamora', porcentaje: 32 },
      { etiqueta: 'Quilmes', porcentaje: 24 },
      { etiqueta: 'Avellaneda', porcentaje: 18 },
      { etiqueta: 'Resto del conurbano sur', porcentaje: 26 },
    ],
    edades: [
      { etiqueta: '25-34', porcentaje: 22 },
      { etiqueta: '35-44', porcentaje: 38 },
      { etiqueta: '45-54', porcentaje: 27 },
      { etiqueta: '55+', porcentaje: 13 },
    ],
    profesiones: [
      { etiqueta: 'Electricista matriculado', porcentaje: 61 },
      { etiqueta: 'Maestro mayor de obra', porcentaje: 19 },
      { etiqueta: 'Instalador independiente', porcentaje: 14 },
      { etiqueta: 'Consumidor final', porcentaje: 6 },
    ],
    dispositivos: [
      { etiqueta: 'Celular', porcentaje: 84 },
      { etiqueta: 'Computadora', porcentaje: 16 },
    ],
  },
}

const APRENDIZAJE_POR_CAMPANA = {
  1: 'Esta campaña respondió mejor entre electricistas matriculados de 35 a 44 años en Lomas de Zamora — un buen punto de partida para tu próxima campaña parecida.',
}

/* Paleta que rota color por barra/fila, para que los gráficos se vean
   diversos en vez de un solo color repetido de punta a punta. */
const PALETA_GRAFICO = ['var(--primary)', 'var(--accent)', 'var(--accent-2)']

function GraficoBarras({ datos, ariaLabel }) {
  const max = Math.max(...datos.map((d) => d.valor))
  return (
    <div className="reportes__chart" role="img" aria-label={ariaLabel}>
      {datos.map((d, i) => (
        <div className="reportes__chart-columna" key={d.etiqueta}>
          <p className="reportes__chart-valor num">{d.valor}</p>
          <div className="reportes__chart-pista">
            <div
              className="reportes__chart-barra"
              style={{ height: `${(d.valor / max) * 100}%`, background: PALETA_GRAFICO[i % PALETA_GRAFICO.length] }}
            />
          </div>
          <p className="reportes__chart-mes">{d.etiqueta}</p>
        </div>
      ))}
    </div>
  )
}

function MetricaCampana({ etiqueta, valor, variacion, tendencia }) {
  const icono = tendencia === 'sube' ? '▲' : tendencia === 'baja' ? '▼' : '–'
  return (
    <div className="reportes__metrica-campana">
      <p className="rotulo">{etiqueta}</p>
      <p className="reportes__metrica-campana-valor num">{valor}</p>
      {variacion && (
        <p className={'reportes__kpi-variacion reportes__kpi-variacion--' + tendencia}>
          {icono} {variacion}
        </p>
      )}
    </div>
  )
}

function BarraProporcion({ etiqueta, porcentaje, cantidad, max, color }) {
  const esCantidad = cantidad !== undefined
  const ancho = esCantidad ? (cantidad / max) * 100 : porcentaje
  return (
    <div className="reportes__barra-fila">
      <p className="reportes__barra-etiqueta">{etiqueta}</p>
      <div className="reportes__barra-pista">
        <div className="reportes__barra-relleno" style={{ width: `${ancho}%`, background: color }} />
      </div>
      <p className="reportes__barra-valor num">{esCantidad ? cantidad : `${porcentaje}%`}</p>
    </div>
  )
}

function PanelDesglose({ titulo, datos }) {
  return (
    <div className="tarjeta reportes__panel reportes__panel--desglose">
      <h2>{titulo}</h2>
      <div className="reportes__grupo">
        {datos.map((d, i) => (
          <BarraProporcion key={d.etiqueta} {...d} color={PALETA_GRAFICO[i % PALETA_GRAFICO.length]} />
        ))}
      </div>
    </div>
  )
}

function PanelAprendizajes({ titulo, items, onNuevaCampana }) {
  return (
    <div className="tarjeta reportes__panel reportes__aprendizajes">
      <div className="reportes__aprendizajes-encabezado">
        <div>
          <h2>{titulo}</h2>
          <p className="reportes__aprendizajes-bajada">
            Esto es lo que Pautia va a tener en cuenta la próxima vez que arme una campaña con vos.
          </p>
        </div>
        {onNuevaCampana && (
          <button type="button" className="btn btn--principal btn--chico" onClick={onNuevaCampana}>
            Usar este aprendizaje
          </button>
        )}
      </div>
      <ul className="reportes__aprendizajes-lista">
        {items.map((texto) => (
          <li key={texto}>{texto}</li>
        ))}
      </ul>
    </div>
  )
}

function VistaGeneral({ periodo, onNuevaCampana }) {
  const maxFormato = Math.max(...FORMATOS_USADOS.map((f) => f.cantidad))
  const kpis = KPIS_POR_PERIODO[periodo]
  const evolucion = EVOLUCION_POR_PERIODO[periodo]

  return (
    <>
      <div className="reportes__kpis">
        {kpis.map((k) => {
          const icono = k.tendencia === 'sube' ? '▲' : k.tendencia === 'baja' ? '▼' : '–'
          return (
            <div className="tarjeta reportes__kpi" key={k.etiqueta}>
              <p className="rotulo reportes__kpi-etiqueta">{k.etiqueta}</p>
              <p className="reportes__kpi-valor num">{k.valor}</p>
              <p className={'reportes__kpi-variacion reportes__kpi-variacion--' + k.tendencia}>
                {icono} {k.variacion}
              </p>
            </div>
          )
        })}
      </div>

      <div className="tarjeta reportes__panel">
        <h2>Consultas nuevas</h2>
        <GraficoBarras datos={evolucion} ariaLabel="Evolución de consultas nuevas en el período elegido" />
      </div>

      <div className="reportes__fila-doble">
        <div className="tarjeta reportes__panel">
          <h2>Formatos más usados</h2>
          <div className="reportes__grupo">
            {FORMATOS_USADOS.map((f, i) => (
              <BarraProporcion
                key={f.etiqueta}
                etiqueta={f.etiqueta}
                cantidad={f.cantidad}
                max={maxFormato}
                color={PALETA_GRAFICO[i % PALETA_GRAFICO.length]}
              />
            ))}
          </div>
        </div>

        <div className="tarjeta reportes__panel">
          <h2>Estado de tu cartera</h2>
          <div className="reportes__resumen-estados">
            {RESUMEN_ESTADOS.map((r) => (
              <div className="reportes__resumen-estado" key={r.estado}>
                <span className={'estado-punto ' + r.clase} aria-hidden="true" />
                <p className="reportes__resumen-estado-etiqueta">{r.texto}</p>
                <p className="reportes__resumen-estado-cantidad num">{r.cantidad}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="reportes__seccion-titulo">Quién responde tus campañas</h2>
      <div className="reportes__desglose-grid">
        <PanelDesglose titulo="Tipo de cliente" datos={POR_CLIENTE} />
        <PanelDesglose titulo="Zona" datos={POR_ZONA} />
        <PanelDesglose titulo="Edad" datos={POR_EDAD} />
        <PanelDesglose titulo="Profesión" datos={POR_PROFESION} />
        <PanelDesglose titulo="Dispositivo" datos={POR_DISPOSITIVO} />
      </div>

      <PanelAprendizajes titulo="Aprendizajes para tu próxima campaña" items={APRENDIZAJES_GENERALES} onNuevaCampana={onNuevaCampana} />
    </>
  )
}

function VistaCampana({ campana, periodo, onNuevaCampana }) {
  const estado = ESTADOS[campana.estado]
  const categoria = CATEGORIAS_OBJETIVO[campana.objetivo]
  const metricas = RESULTADOS_POR_CAMPANA[campana.id]?.[periodo]
  const tendencia = TENDENCIA_POR_CAMPANA[campana.id]?.[periodo]
  const audiencia = AUDIENCIA_POR_CAMPANA[campana.id]
  const aprendizaje = APRENDIZAJE_POR_CAMPANA[campana.id]

  return (
    <div className="reportes__vista-campana">
      <div className="tarjeta reportes__panel">
        <div className="reportes__campana-encabezado">
          <div>
            <p className="reportes__tabla-estado">
              <span className={'estado-punto ' + estado.clase} aria-hidden="true" />
              {estado.texto}
            </p>
            <h2>{campana.titulo}</h2>
          </div>
          {categoria && <span className="reportes__categoria">{categoria.nombre}</span>}
        </div>

        <dl className="reportes__meta">
          <div><dt className="rotulo">A quién le habla</dt><dd>{campana.segmento}</dd></div>
          <div><dt className="rotulo">Objetivo</dt><dd>{campana.objetivo}</dd></div>
          <div><dt className="rotulo">Qué transmite</dt><dd>{campana.transmite}</dd></div>
          <div><dt className="rotulo">Creada</dt><dd>{campana.fecha}</dd></div>
        </dl>

        <div className="reportes__formatos-chips">
          {campana.formatos.map((f) => (
            <span key={f} className="chip chip--pendiente">{f}</span>
          ))}
        </div>
      </div>

      {metricas ? (
        <>
          <div className="tarjeta reportes__panel">
            <h2>Resultados</h2>
            <div className="reportes__metricas-campana">
              {metricas.map((m) => (
                <MetricaCampana key={m.etiqueta} {...m} />
              ))}
            </div>
          </div>

          {tendencia && (
            <div className="tarjeta reportes__panel">
              <h2>Consultas nuevas</h2>
              <GraficoBarras datos={tendencia} ariaLabel="Consultas nuevas de esta campaña en el período elegido" />
            </div>
          )}

          {audiencia && (
            <>
              <h2 className="reportes__seccion-titulo">Quién responde esta campaña</h2>
              <div className="reportes__desglose-grid">
                <PanelDesglose titulo="Zona" datos={audiencia.zonas} />
                <PanelDesglose titulo="Edad" datos={audiencia.edades} />
                <PanelDesglose titulo="Profesión" datos={audiencia.profesiones} />
                <PanelDesglose titulo="Dispositivo" datos={audiencia.dispositivos} />
              </div>
            </>
          )}

          {aprendizaje && (
            <PanelAprendizajes titulo="Aprendizaje de esta campaña" items={[aprendizaje]} onNuevaCampana={onNuevaCampana} />
          )}
        </>
      ) : (
        <div className="tarjeta reportes__panel">
          <h2>Resultados</h2>
          <p className="reportes__sin-resultados">
            {campana.estado === 'borrador'
              ? 'Todavía es un borrador — terminá de revisar los T&C antes de lanzarla.'
              : `Lanzala fuera de Pautia y pegá el ID de la campaña para ver acá sus métricas de ${categoria?.nombre.toLowerCase()}.`}
          </p>
          {categoria && (
            <div className="reportes__pendientes">
              {categoria.metricas.map((m) => (
                <span key={m} className="chip chip--pendiente">{m}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Reportes({ onVolver, onNuevaCampana }) {
  const [vista, setVista] = useState('general')
  const [periodo, setPeriodo] = useState('30d')
  const campanaSeleccionada = vista !== 'general' ? campanas.find((c) => c.id === vista) : null

  return (
    <div className="reportes">
      <div className="reportes__encabezado">
        <button type="button" className="btn btn--fantasma btn--chico reportes__volver" onClick={onVolver}>
          ← Home
        </button>
        <div className="reportes__titulo-fila">
          <div>
            <h1>Reportes</h1>
            <p className="reportes__bajada">
              Cómo vienen andando tus campañas, comparadas contra lo que te propusiste al armarlas.
            </p>
          </div>
          <select
            className="reportes__periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            aria-label="Elegir el período a mostrar"
          >
            {PERIODOS.map((p) => (
              <option key={p.id} value={p.id}>{p.etiqueta}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="reportes__selector" role="tablist" aria-label="Elegir qué campaña ver">
        <button
          type="button"
          role="tab"
          aria-selected={vista === 'general'}
          className={'reportes__selector-item' + (vista === 'general' ? ' reportes__selector-item--activo' : '')}
          onClick={() => setVista('general')}
        >
          Vista general
        </button>
        {campanas.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={vista === c.id}
            className={'reportes__selector-item' + (vista === c.id ? ' reportes__selector-item--activo' : '')}
            onClick={() => setVista(c.id)}
          >
            <span className={'estado-punto ' + ESTADOS[c.estado].clase} aria-hidden="true" />
            {c.titulo}
          </button>
        ))}
      </div>

      {campanaSeleccionada ? (
        <VistaCampana campana={campanaSeleccionada} periodo={periodo} onNuevaCampana={onNuevaCampana} />
      ) : (
        <VistaGeneral periodo={periodo} onNuevaCampana={onNuevaCampana} />
      )}
    </div>
  )
}
