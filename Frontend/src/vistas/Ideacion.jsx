import { useEffect, useRef, useState } from 'react'
import { ideas as ideasIniciales, tendenciasMeta } from '../datos/simulados'
import CalendarioIdeas from '../componentes/CalendarioIdeas'
import './Ideacion.css'

/* Origen de cada idea: qué la trajo hasta acá. Determina el chip que
   se ve en la lista y el color del punto en el calendario. */
export const ORIGEN_INFO = {
  'fecha-clave': { etiqueta: 'Fecha clave', clase: 'chip--fecha-clave' },
  'sugerencia-ia': { etiqueta: 'Sugerencia de Pautia', clase: 'chip--sugerencia-ia' },
  propia: { etiqueta: 'Idea propia', clase: 'chip--propia' },
}

const FILTROS = [
  { id: 'todas', etiqueta: 'Todas' },
  { id: 'fecha-clave', etiqueta: 'Fecha clave' },
  { id: 'sugerencia-ia', etiqueta: 'Sugerencia' },
  { id: 'propia', etiqueta: 'Propia' },
]

const MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

/* Nunca `new Date('YYYY-MM-DD')` para mostrar una fecha simulada: se
   interpreta en UTC y en Argentina (GMT-3) puede correrse un día.
   Separamos el string a mano en vez de crear un Date. */
const formatearFecha = (iso) => {
  const [, m, d] = iso.split('-').map(Number)
  return `${d} de ${MESES_CORTOS[m - 1]}`
}

/* Todo lo que puede terminar siendo una campaña, en un solo lugar:
   fechas clave que recomienda Pautia, sugerencias de la IA e ideas
   que suma la persona a mano. La sección de ideas va a lo ancho de
   la página (tarjeta de alta + grilla), con el calendario debajo —
   filtro/orden sobre la lista y edición in-situ de cada idea (mismo
   patrón que ya usan BloqueTexto/TuInfo: Editar → inputs →
   Guardar/Cancelar), y una sección de tendencias simuladas al final. */
export default function Ideacion({ onVolver, onNuevaCampana }) {
  const [ideas, setIdeas] = useState(ideasIniciales)
  const [creandoAbierto, setCreandoAbierto] = useState(false)
  const [textoNuevo, setTextoNuevo] = useState('')
  const [motivoNuevo, setMotivoNuevo] = useState('')
  const [fechaNueva, setFechaNueva] = useState('')
  const [filtroOrigen, setFiltroOrigen] = useState('todas')
  const [orden, setOrden] = useState('recientes')
  const [editandoId, setEditandoId] = useState(null)
  const [borrador, setBorrador] = useState(null)
  const [tendenciaAbierta, setTendenciaAbierta] = useState(null)
  const campoNombreRef = useRef(null)

  // Al abrir la tarjeta de alta (a mano o desde "+ Agregar acá" del
  // calendario), llevarla a la vista — el foco ya lo pone `autoFocus`
  // en el input una vez que el formulario está montado.
  useEffect(() => {
    if (creandoAbierto) campoNombreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [creandoAbierto])

  const abrirCreador = () => setCreandoAbierto(true)

  const cancelarCreador = () => {
    setCreandoAbierto(false)
    setTextoNuevo('')
    setMotivoNuevo('')
    setFechaNueva('')
  }

  const agregarIdea = (e) => {
    e.preventDefault()
    const texto = textoNuevo.trim()
    if (!texto) return
    setIdeas((actuales) => [
      { id: `propia-${Date.now()}`, titulo: texto, motivo: motivoNuevo.trim(), origen: 'propia', fecha: fechaNueva || null },
      ...actuales,
    ])
    setCreandoAbierto(false)
    setTextoNuevo('')
    setMotivoNuevo('')
    setFechaNueva('')
  }

  const quitarIdea = (id) => {
    setIdeas((actuales) => actuales.filter((idea) => idea.id !== id))
    if (editandoId === id) setEditandoId(null)
  }

  const empezarEdicion = (idea) => {
    setBorrador({ titulo: idea.titulo, motivo: idea.motivo ?? '', fecha: idea.fecha })
    setEditandoId(idea.id)
  }

  const cancelarEdicion = () => {
    setEditandoId(null)
    setBorrador(null)
  }

  const guardarEdicion = (id) => {
    setIdeas((actuales) =>
      actuales.map((idea) => (idea.id === id ? { ...idea, ...borrador, titulo: borrador.titulo.trim() || idea.titulo } : idea))
    )
    setEditandoId(null)
    setBorrador(null)
  }

  /* Desde el calendario: abrir la tarjeta de alta con la fecha del
     día elegido ya cargada, en vez de duplicar un formulario adentro
     del calendario. */
  const agregarEnFecha = (fechaISO) => {
    setFechaNueva(fechaISO)
    setCreandoAbierto(true)
  }

  const ideasFiltradas = ideas.filter((idea) => filtroOrigen === 'todas' || idea.origen === filtroOrigen)
  const ideasOrdenadas =
    orden === 'con-fecha'
      ? [...ideasFiltradas].sort((a, b) => {
          if (a.fecha && b.fecha) return a.fecha.localeCompare(b.fecha)
          if (a.fecha) return -1
          if (b.fecha) return 1
          return 0
        })
      : ideasFiltradas

  return (
    <div className="ideacion">
      <div className="ideacion__encabezado">
        <button type="button" className="btn btn--fantasma btn--chico ideacion__volver" onClick={onVolver}>
          ← Home
        </button>
        <h1>Ideación</h1>
        <p className="ideacion__bajada">
          Todo lo que puede terminar siendo tu próxima campaña: fechas clave, sugerencias de
          Pautia y tus propias ideas, con un calendario para verlas juntas.
        </p>
      </div>

      <div className="tarjeta ideacion__panel">
        <div className="ideacion__panel-encabezado">
          <h2>Notas e ideas</h2>
          <div className="ideacion__controles">
            <div className="ideacion__filtros" role="tablist" aria-label="Filtrar ideas por origen">
              {FILTROS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={filtroOrigen === f.id}
                  className={
                    'chip ideacion__filtro' +
                    (filtroOrigen === f.id
                      ? ' ' + (f.id === 'todas' ? 'ideacion__filtro--activo' : ORIGEN_INFO[f.id].clase)
                      : '')
                  }
                  onClick={() => setFiltroOrigen(f.id)}
                >
                  {f.etiqueta}
                </button>
              ))}
            </div>
            <select
              className="ideacion__orden"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              aria-label="Ordenar ideas"
            >
              <option value="recientes">Más recientes primero</option>
              <option value="con-fecha">Con fecha primero</option>
            </select>
          </div>
        </div>

        <ul className="ideacion__lista">
          <li className="ideacion__idea ideacion__crear">
            {creandoAbierto ? (
              <form className="ideacion__crear-form" onSubmit={agregarIdea}>
                <input
                  type="text"
                  ref={campoNombreRef}
                  className="ideacion__crear-nombre"
                  placeholder="Nombre de la idea"
                  value={textoNuevo}
                  onChange={(e) => setTextoNuevo(e.target.value)}
                  aria-label="Nombre de la idea"
                  autoFocus
                />
                <textarea
                  className="ideacion__crear-descripcion"
                  placeholder="Descripción (opcional)"
                  value={motivoNuevo}
                  onChange={(e) => setMotivoNuevo(e.target.value)}
                  rows={3}
                  aria-label="Descripción de la idea"
                />
                <input
                  type="date"
                  className="ideacion__campo-fecha"
                  value={fechaNueva}
                  onChange={(e) => setFechaNueva(e.target.value)}
                  aria-label="Fecha de la idea (opcional)"
                />
                <div className="ideacion__idea-acciones">
                  <button type="button" className="btn btn--fantasma btn--chico" onClick={cancelarCreador}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn--principal btn--chico" disabled={!textoNuevo.trim()}>
                    Agregar
                  </button>
                </div>
              </form>
            ) : (
              <button type="button" className="ideacion__crear-boton" onClick={abrirCreador}>
                <span className="ideacion__crear-icono" aria-hidden="true">+</span>
                Agregar idea
              </button>
            )}
          </li>

          {ideasOrdenadas.length === 0 ? (
            <li className="ideacion__lista-vacia">No hay ideas para este filtro.</li>
          ) : (
            ideasOrdenadas.map((idea) => {
              const info = ORIGEN_INFO[idea.origen]
              const enEdicion = editandoId === idea.id

              return (
                <li key={idea.id} className="ideacion__idea">
                  {enEdicion ? (
                    <div className="ideacion__idea-edicion">
                      <input
                        type="text"
                        className="ideacion__campo-edicion"
                        value={borrador.titulo}
                        onChange={(e) => setBorrador((b) => ({ ...b, titulo: e.target.value }))}
                        aria-label="Título de la idea"
                        autoFocus
                      />
                      <input
                        type="text"
                        className="ideacion__campo-edicion"
                        value={borrador.motivo}
                        onChange={(e) => setBorrador((b) => ({ ...b, motivo: e.target.value }))}
                        placeholder="Motivo (opcional)"
                        aria-label="Motivo"
                      />
                      <input
                        type="date"
                        className="ideacion__campo-edicion"
                        value={borrador.fecha || ''}
                        onChange={(e) => setBorrador((b) => ({ ...b, fecha: e.target.value || null }))}
                        aria-label="Fecha (opcional)"
                      />
                      <div className="ideacion__idea-acciones">
                        <button type="button" className="btn btn--fantasma btn--chico" onClick={cancelarEdicion}>
                          Cancelar
                        </button>
                        <button
                          type="button"
                          className="btn btn--principal btn--chico"
                          onClick={() => guardarEdicion(idea.id)}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="ideacion__idea-encabezado">
                        <span className={'chip ' + info.clase}>{info.etiqueta}</span>
                        {idea.fecha && <span className="ideacion__idea-fecha">{formatearFecha(idea.fecha)}</span>}
                      </div>
                      <p className="ideacion__idea-titulo">{idea.titulo}</p>
                      {idea.motivo && <p className="ideacion__idea-motivo">{idea.motivo}</p>}
                      <div className="ideacion__idea-acciones">
                        <button
                          type="button"
                          className="btn btn--enlace btn--chico ideacion__idea-cta"
                          onClick={onNuevaCampana}
                        >
                          Armar esta campaña →
                        </button>
                        <button
                          type="button"
                          className="btn btn--fantasma btn--chico"
                          onClick={() => empezarEdicion(idea)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="btn btn--fantasma btn--chico"
                          onClick={() => quitarIdea(idea.id)}
                        >
                          Quitar
                        </button>
                      </div>
                    </>
                  )}
                </li>
              )
            })
          )}
        </ul>
      </div>

      <CalendarioIdeas ideas={ideas} origenInfo={ORIGEN_INFO} onQuitarIdea={quitarIdea} onAgregarEnFecha={agregarEnFecha} />

      <div className="ideacion__tendencias">
        <h2>Tendencias e inspiración</h2>
        <p className="ideacion__tendencias-bajada">
          Contenido simulado, a modo de referencia — todavía no hay conexión real con Meta.
        </p>
        <div className="ideacion__tendencias-grid">
          {tendenciasMeta.map((t) => {
            const abierta = tendenciaAbierta === t.id
            return (
              <div key={t.id} className="tarjeta ideacion__tendencia">
                <span className="chip chip--pendiente">Fuente: Meta Ads (simulado)</span>
                <h3>{t.titulo}</h3>
                <p>{t.descripcion}</p>
                {abierta && <p className="ideacion__tendencia-detalle">{t.detalle}</p>}
                <button
                  type="button"
                  className="btn btn--enlace btn--chico ideacion__tendencia-vermas"
                  onClick={() => setTendenciaAbierta(abierta ? null : t.id)}
                >
                  {abierta ? 'Ver menos' : 'Ver más →'}
                </button>
                <p className="rotulo ideacion__tendencia-formato">{t.formato}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
