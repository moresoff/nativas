import { useState } from 'react'
import './CarruselResultados.css'

/* Panel de resultados en formato carrusel: una campaña a la vez, con su
   nombre y todas sus métricas juntas en tarjetas de vidrio separadas,
   flotando sobre el panel azul. Va pasando entre el resumen general
   y las campañas que ya tienen resultados. */
export default function CarruselResultados({ resultados }) {
  const [indice, setIndice] = useState(0)
  const total = resultados.length

  const anterior = () => setIndice((i) => (i - 1 + total) % total)
  const siguiente = () => setIndice((i) => (i + 1) % total)

  return (
    <div className="carrusel">
      <div className="carrusel__fila">
        <button
          type="button"
          className="carrusel__flecha"
          onClick={anterior}
          aria-label="Campaña anterior"
        >
          ‹
        </button>

        <div className="carrusel__ventana">
          <div
            className="carrusel__pista"
            style={{ transform: `translateX(-${indice * 100}%)` }}
          >
            {resultados.map((r, i) => (
              <div className="carrusel__tarjeta" key={r.id} aria-hidden={i !== indice}>
                <div className="carrusel__encabezado">
                  <p className="carrusel__nombre">{r.nombre}</p>
                  <p className="carrusel__sub">{r.sub}</p>
                </div>

                <div className="carrusel__grid">
                  {r.metricas.map((m) => {
                    const bajo = m.variacion.trim().startsWith('−')
                    return (
                      <div className="carrusel__metrica" key={m.etiqueta}>
                        <p className="carrusel__etiqueta">{m.etiqueta}</p>
                        <p className="carrusel__valor num">{m.valor}</p>
                        <p
                          className={
                            'carrusel__variacion' +
                            (m.sube ? '' : ' carrusel__variacion--baja')
                          }
                        >
                          {bajo ? '▼' : '▲'} {m.variacion}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carrusel__flecha"
          onClick={siguiente}
          aria-label="Campaña siguiente"
        >
          ›
        </button>
      </div>

      <div className="carrusel__puntos" role="tablist" aria-label="Elegir campaña">
        {resultados.map((r, i) => (
          <button
            key={r.id}
            type="button"
            className={
              'carrusel__punto' + (i === indice ? ' carrusel__punto--activo' : '')
            }
            onClick={() => setIndice(i)}
            aria-label={`Ver resultados de ${r.nombre}`}
            aria-current={i === indice}
          />
        ))}
      </div>
    </div>
  )
}
