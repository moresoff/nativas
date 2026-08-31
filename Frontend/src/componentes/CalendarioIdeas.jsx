import { useMemo, useState } from 'react'
import './CalendarioIdeas.css'

const DIAS_SEMANA = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]
const MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

/* Grilla del mes, semana arrancando el lunes. Rellena con días del mes
   anterior/siguiente para completar filas de 7 (fueraDeMes: true, sin
   fecha — no son clickeables). */
function construirGrilla(anio, mes) {
  const primerDia = new Date(anio, mes, 1)
  const offsetLunes = (primerDia.getDay() + 6) % 7 // getDay(): 0=domingo..6=sábado → reindexado a lunes=0
  const diasEnMes = new Date(anio, mes + 1, 0).getDate() // día 0 del mes siguiente = último día de este mes
  const diasMesAnterior = new Date(anio, mes, 0).getDate()

  const celdas = []
  for (let i = offsetLunes - 1; i >= 0; i--) {
    celdas.push({ dia: diasMesAnterior - i, fueraDeMes: true, fecha: null })
  }
  for (let d = 1; d <= diasEnMes; d++) {
    const iso = `${anio}-${String(mes + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    celdas.push({ dia: d, fueraDeMes: false, fecha: iso })
  }
  let siguiente = 1
  while (celdas.length % 7 !== 0) {
    celdas.push({ dia: siguiente++, fueraDeMes: true, fecha: null })
  }
  return celdas
}

/* Igual que en Ideacion.jsx: separar el string a mano, nunca
   `new Date('YYYY-MM-DD')` (se interpreta en UTC y en GMT-3 se puede
   correr un día). Las fechas ISO zero-padded además ordenan bien como
   string, así que "próximas" no necesita parsear nada tampoco. */
const formatearFechaCorta = (iso) => {
  const [, m, d] = iso.split('-').map(Number)
  return `${d} ${MESES_CORTOS[m - 1]}`
}

export default function CalendarioIdeas({ ideas, origenInfo, onQuitarIdea, onAgregarEnFecha }) {
  const hoy = new Date()
  // Arranca en septiembre 2026: el mes donde caen las fechas simuladas.
  const [anio, setAnio] = useState(2026)
  const [mes, setMes] = useState(8)
  const [diaSeleccionado, setDiaSeleccionado] = useState(null)

  const celdas = useMemo(() => construirGrilla(anio, mes), [anio, mes])

  const ideasPorFecha = useMemo(() => {
    const mapa = {}
    ideas.forEach((idea) => {
      if (!idea.fecha) return
      if (!mapa[idea.fecha]) mapa[idea.fecha] = []
      mapa[idea.fecha].push(idea)
    })
    return mapa
  }, [ideas])

  const hoyISO = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`

  const proximas = ideas
    .filter((i) => i.fecha && i.fecha >= hoyISO)
    .sort((a, b) => a.fecha.localeCompare(b.fecha))
    .slice(0, 5)

  const irMesAnterior = () => {
    if (mes === 0) {
      setMes(11)
      setAnio((a) => a - 1)
    } else {
      setMes((m) => m - 1)
    }
    setDiaSeleccionado(null)
  }

  const irMesSiguiente = () => {
    if (mes === 11) {
      setMes(0)
      setAnio((a) => a + 1)
    } else {
      setMes((m) => m + 1)
    }
    setDiaSeleccionado(null)
  }

  const ideasDelDia = diaSeleccionado ? ideasPorFecha[diaSeleccionado] ?? [] : []

  return (
    <div className="tarjeta calendario">
      <div className="calendario__encabezado">
        <h2>Calendario</h2>
        <div className="calendario__nav">
          <button type="button" className="calendario__flecha" onClick={irMesAnterior} aria-label="Mes anterior">
            ‹
          </button>
          <p className="calendario__mes">{MESES[mes]} {anio}</p>
          <button type="button" className="calendario__flecha" onClick={irMesSiguiente} aria-label="Mes siguiente">
            ›
          </button>
        </div>
      </div>

      <div className="calendario__dias-semana">
        {DIAS_SEMANA.map((d) => (
          <p key={d}>{d}</p>
        ))}
      </div>

      <div className="calendario__grilla">
        {celdas.map((celda, i) => {
          const ideasDelDiaCelda = celda.fecha ? ideasPorFecha[celda.fecha] ?? [] : []
          const esHoy = celda.fecha === hoyISO
          const esSeleccionada = celda.fecha !== null && celda.fecha === diaSeleccionado
          return (
            <button
              key={i}
              type="button"
              className={
                'calendario__celda' +
                (celda.fueraDeMes ? ' calendario__celda--fuera' : '') +
                (esHoy ? ' calendario__celda--hoy' : '') +
                (esSeleccionada ? ' calendario__celda--seleccionada' : '')
              }
              disabled={celda.fueraDeMes}
              onClick={() => setDiaSeleccionado(celda.fecha === diaSeleccionado ? null : celda.fecha)}
            >
              <span className="calendario__numero">{celda.dia}</span>
              {ideasDelDiaCelda.length > 0 && (
                <span className="calendario__puntos-dia">
                  {ideasDelDiaCelda.slice(0, 3).map((idea) => (
                    <span
                      key={idea.id}
                      className={'calendario__punto calendario__punto--' + idea.origen}
                      aria-hidden="true"
                    />
                  ))}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {diaSeleccionado && (
        <div className="calendario__detalle">
          {ideasDelDia.length === 0 ? (
            <p className="calendario__detalle-vacio">Nada para el {formatearFechaCorta(diaSeleccionado)}.</p>
          ) : (
            ideasDelDia.map((idea) => (
              <div key={idea.id} className="calendario__detalle-item">
                <span className={'chip ' + origenInfo[idea.origen].clase}>{origenInfo[idea.origen].etiqueta}</span>
                <span className="calendario__detalle-titulo">{idea.titulo}</span>
                <button
                  type="button"
                  className="btn btn--fantasma btn--chico calendario__detalle-quitar"
                  onClick={() => onQuitarIdea(idea.id)}
                >
                  Quitar
                </button>
              </div>
            ))
          )}
          <button
            type="button"
            className="btn btn--fantasma btn--chico calendario__detalle-agregar"
            onClick={() => onAgregarEnFecha(diaSeleccionado)}
          >
            + Agregar acá
          </button>
        </div>
      )}

      <div className="calendario__proximas">
        <p className="rotulo">Próximas</p>
        {proximas.length === 0 ? (
          <p className="calendario__proximas-vacio">No hay ideas con fecha próxima.</p>
        ) : (
          <ul className="calendario__proximas-lista">
            {proximas.map((idea) => (
              <li key={idea.id}>
                <span className={'calendario__punto calendario__punto--' + idea.origen} aria-hidden="true" />
                <span className="calendario__proximas-fecha num">{formatearFechaCorta(idea.fecha)}</span>
                <span className="calendario__proximas-titulo">{idea.titulo}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
