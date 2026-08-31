import { useState } from 'react'
import { campanas } from '../datos/simulados'
import TarjetaCampana from '../componentes/TarjetaCampana'
import FichaCampana from './FichaCampana'
import './Campanas.css'

const ESTADOS_FILTRO = [
  { id: 'todas', etiqueta: 'Todos los estados' },
  { id: 'activa', etiqueta: 'Dando resultados' },
  { id: 'lista', etiqueta: 'Para revisar' },
  { id: 'borrador', etiqueta: 'Recién arrancando' },
]

/* Vista de repositorio: todas las campañas armadas hasta el momento,
   solo consulta (paso 11 del happy path). Reusa la misma tarjeta que
   ya se ve en Home, así el aspecto no cambia entre las dos pantallas. */
export default function Campanas({ onVolver, onNuevaCampana }) {
  const [pantalla, setPantalla] = useState('lista') // 'lista' | 'detalle'
  const [campanaActivaId, setCampanaActivaId] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('todas')

  const verCampana = (id) => {
    setCampanaActivaId(id)
    setPantalla('detalle')
  }

  const volverALista = () => setPantalla('lista')

  if (pantalla === 'detalle') {
    const campana = campanas.find((c) => c.id === campanaActivaId)
    return <FichaCampana key={campana.id} campana={campana} onVolver={volverALista} />
  }

  const filtradas = campanas.filter((c) => {
    if (filtroEstado !== 'todas' && c.estado !== filtroEstado) return false
    const texto = busqueda.trim().toLowerCase()
    if (!texto) return true
    return c.titulo.toLowerCase().includes(texto) || c.detalle.toLowerCase().includes(texto)
  })

  return (
    <div className="campanas">
      <div className="campanas__encabezado">
        <button type="button" className="btn btn--fantasma btn--chico campanas__volver" onClick={onVolver}>
          ← Home
        </button>

        <div className="campanas__titulo-fila">
          <div>
            <h1>Campañas</h1>
            <p className="campanas__bajada">
              Todas las campañas que armaste con Pautia hasta ahora.
            </p>
          </div>
          <button type="button" className="btn btn--principal campanas__nueva" onClick={onNuevaCampana}>
            Nueva campaña
          </button>
        </div>
      </div>

      <div className="campanas__controles">
        <input
          type="search"
          className="campanas__buscador"
          placeholder="Buscar por nombre…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar campañas"
        />
        <select
          className="campanas__filtro"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          aria-label="Filtrar por estado"
        >
          {ESTADOS_FILTRO.map((e) => (
            <option key={e.id} value={e.id}>
              {e.etiqueta}
            </option>
          ))}
        </select>
      </div>

      {filtradas.length === 0 ? (
        <p className="campanas__vacio">No encontramos campañas para "{busqueda}".</p>
      ) : (
        <div className="campanas__lista">
          {filtradas.map((c) => (
            <TarjetaCampana campana={c} onVer={verCampana} key={c.id} />
          ))}
        </div>
      )}
    </div>
  )
}
