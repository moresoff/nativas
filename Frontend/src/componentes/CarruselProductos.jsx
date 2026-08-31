import { useState } from 'react'
import './CarruselProductos.css'

const VISIBLES = 3

/* Carrusel de "Mis productos" en la vista principal — solo foto y
   nombre, para dar una idea rápida del catálogo. El detalle completo
   vive en la ficha técnica (se abre al tocar un producto). Muestra
   hasta 3 a la vez, deslizando de a uno (sin dar la vuelta: no tiene
   sentido "volver" al primer producto pasando por el final). */
export default function CarruselProductos({ productos, onVerProducto }) {
  const [indice, setIndice] = useState(0)
  const total = productos.length
  const indiceMax = Math.max(0, total - VISIBLES)

  const anterior = () => setIndice((i) => Math.max(0, i - 1))
  const siguiente = () => setIndice((i) => Math.min(indiceMax, i + 1))

  return (
    <div className="carrusel-productos">
      <div className="carrusel-productos__fila">
        <button
          type="button"
          className="carrusel-productos__flecha"
          onClick={anterior}
          disabled={indice === 0}
          aria-label="Producto anterior"
        >
          ‹
        </button>

        <div className="carrusel-productos__ventana">
          <div
            className="carrusel-productos__pista"
            style={{ transform: `translateX(-${indice * (100 / VISIBLES)}%)` }}
          >
            {productos.map((p) => (
              <button
                key={p.id}
                type="button"
                className="carrusel-productos__tarjeta"
                onClick={() => onVerProducto(p.id)}
              >
                <div className="carrusel-productos__caja">
                  <div className="carrusel-productos__foto-envoltorio">
                    <img src={p.foto} alt="" className="carrusel-productos__foto" />
                  </div>
                  <p className="carrusel-productos__categoria">{p.categoria}</p>
                  <p className="carrusel-productos__nombre">{p.nombre}</p>
                  <p className="carrusel-productos__meta">
                    {p.usosEnCampanas === 0
                      ? 'Sin usar todavía'
                      : `Usado en ${p.usosEnCampanas} ${p.usosEnCampanas === 1 ? 'campaña' : 'campañas'}`}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carrusel-productos__flecha"
          onClick={siguiente}
          disabled={indice === indiceMax}
          aria-label="Producto siguiente"
        >
          ›
        </button>
      </div>
    </div>
  )
}
