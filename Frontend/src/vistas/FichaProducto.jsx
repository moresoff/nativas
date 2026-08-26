import { useRef, useState } from 'react'
import './FichaProducto.css'

const leerComoDataURL = (archivo) =>
  new Promise((resolve) => {
    const lector = new FileReader()
    lector.onload = () => resolve(lector.result)
    lector.readAsDataURL(archivo)
  })

/* Ficha técnica de un producto del catálogo — la info que nutre el
   contexto de las campañas. La galería arranca repitiendo la única foto
   que tenemos (simulado: en el producto real, cada una vendría de una
   foto distinta), y "Agregar imágenes" sí funciona de verdad — suma las
   fotos que elijas a la galería de esta pantalla. */
export default function FichaProducto({ producto, productos, onVolver, onVerProducto }) {
  const [galeria, setGaleria] = useState([producto.foto, producto.foto, producto.foto, producto.foto])
  const [fotoActiva, setFotoActiva] = useState(0)
  const inputRef = useRef(null)

  const relacionados = productos.filter((p) => p.id !== producto.id).slice(0, 5)

  const agregarImagenes = async (e) => {
    const archivos = Array.from(e.target.files || [])
    e.target.value = ''
    if (archivos.length === 0) return
    const urls = await Promise.all(archivos.map(leerComoDataURL))
    setGaleria((g) => [...g, ...urls])
  }

  return (
    <div className="ficha-producto">
      <button type="button" className="btn btn--fantasma btn--chico ficha-producto__volver" onClick={onVolver}>
        ← Mis productos
      </button>

      <div className="ficha-producto__principal">
        <div className="ficha-producto__galeria">
          <div className="ficha-producto__foto-grande">
            <img src={galeria[fotoActiva]} alt={producto.nombre} />
          </div>

          <div className="ficha-producto__miniaturas">
            {galeria.map((foto, i) => (
              <button
                key={i}
                type="button"
                className={
                  'ficha-producto__miniatura' + (i === fotoActiva ? ' ficha-producto__miniatura--activa' : '')
                }
                onClick={() => setFotoActiva(i)}
                aria-label={`Ver foto ${i + 1}`}
                aria-current={i === fotoActiva}
              >
                <img src={foto} alt="" />
              </button>
            ))}

            <button
              type="button"
              className="ficha-producto__agregar"
              onClick={() => inputRef.current?.click()}
              aria-label="Agregar imágenes"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={inputRef}
              onChange={agregarImagenes}
              hidden
            />
          </div>

          <p className="ficha-producto__descripcion">{producto.descripcion}</p>
        </div>

        <div className="ficha-producto__info">
          <p className="rotulo">{producto.categoria}</p>
          <h1>{producto.nombre}</h1>

          <ul className="ficha-producto__specs">
            {producto.specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="ficha-producto__uso">
            Usado en {producto.usosEnCampanas}{' '}
            {producto.usosEnCampanas === 1 ? 'campaña' : 'campañas'} hasta ahora.
          </p>
        </div>
      </div>

      {relacionados.length > 0 && (
        <div className="ficha-producto__relacionados">
          <h2>Ver también</h2>
          <div className="ficha-producto__relacionados-grid">
            {relacionados.map((p) => (
              <button
                key={p.id}
                type="button"
                className="ficha-producto__relacionado"
                onClick={() => onVerProducto(p.id)}
              >
                <div className="ficha-producto__relacionado-foto">
                  <img src={p.foto} alt="" />
                </div>
                <p>{p.nombre}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
