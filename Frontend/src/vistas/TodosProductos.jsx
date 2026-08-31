import { useState } from 'react'
import './TodosProductos.css'

const ORDENES = [
  { id: 'reciente', etiqueta: 'Más reciente' },
  { id: 'utilizado', etiqueta: 'Más utilizado' },
  { id: 'alfabetico', etiqueta: 'Orden alfabético' },
]

export default function TodosProductos({ productos, onVolver, onVerProducto }) {
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState('reciente')

  const filtrados = productos.filter((p) => {
    const texto = busqueda.trim().toLowerCase()
    if (!texto) return true
    return p.nombre.toLowerCase().includes(texto) || p.categoria.toLowerCase().includes(texto)
  })

  const ordenados = [...filtrados].sort((a, b) => {
    if (orden === 'alfabetico') return a.nombre.localeCompare(b.nombre, 'es')
    if (orden === 'utilizado') return b.usosEnCampanas - a.usosEnCampanas
    return 0 // 'reciente': el orden en el que ya viene el catálogo
  })

  return (
    <div className="todos-productos">
      <div className="todos-productos__encabezado">
        <button type="button" className="btn btn--fantasma btn--chico todos-productos__volver" onClick={onVolver}>
          ← Mis productos
        </button>
        <h1>Todos los productos</h1>
      </div>

      <div className="todos-productos__controles">
        <input
          type="search"
          className="todos-productos__buscador"
          placeholder="Buscar por nombre o categoría…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar productos"
        />
        <select
          className="todos-productos__orden"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          aria-label="Ordenar por"
        >
          {ORDENES.map((o) => (
            <option key={o.id} value={o.id}>
              {o.etiqueta}
            </option>
          ))}
        </select>
      </div>

      {ordenados.length === 0 ? (
        <p className="todos-productos__vacio">No encontramos productos para "{busqueda}".</p>
      ) : (
        <div className="todos-productos__grid">
          {ordenados.map((p) => (
            <button
              key={p.id}
              type="button"
              className="todos-productos__item"
              onClick={() => onVerProducto(p.id)}
            >
              <div className="todos-productos__foto-envoltorio">
                <img src={p.foto} alt="" className="todos-productos__foto" />
                <span className="todos-productos__categoria">{p.categoria}</span>
              </div>
              <div className="todos-productos__texto">
                <p className="todos-productos__nombre">{p.nombre}</p>
                <p className="todos-productos__precio">{p.precio}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
