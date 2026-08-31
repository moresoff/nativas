import { useRef, useState } from 'react'
import './FichaProducto.css'

const leerComoDataURL = (archivo) =>
  new Promise((resolve) => {
    const lector = new FileReader()
    lector.onload = () => resolve(lector.result)
    lector.readAsDataURL(archivo)
  })

const etiquetaUsos = (n) => (n === 0 ? 'Sin usar todavía' : `${n} ${n === 1 ? 'campaña' : 'campañas'}`)

/* Ficha técnica de un producto del catálogo — la info que nutre el
   contexto de las campañas. Se agrupa en tarjetas (información,
   detalles, fotos) tomando como referencia paneles de alta de producto
   tipo SaaS. La galería arranca repitiendo la única foto que tenemos
   (simulado: en el producto real, cada una vendría de una foto
   distinta), y "Agregar imágenes" sí funciona de verdad — suma las
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
        <div className="ficha-producto__col-info">
          <div className="tarjeta ficha-producto__card">
            <h1>{producto.nombre}</h1>
            <p className="ficha-producto__descripcion">{producto.descripcion}</p>

            <div className="ficha-producto__specs">
              {producto.specs.map((s) => (
                <span key={s} className="ficha-producto__spec">{s}</span>
              ))}
            </div>
          </div>

          <div className="tarjeta ficha-producto__card">
            <p className="ficha-producto__card-titulo">Detalles</p>
            <div className="ficha-producto__detalles">
              <div className="ficha-producto__detalle">
                <p className="rotulo">Categoría</p>
                <p className="ficha-producto__detalle-valor">{producto.categoria}</p>
              </div>
              <div className="ficha-producto__detalle">
                <p className="rotulo">Precio</p>
                <p className="ficha-producto__detalle-valor">{producto.precio}</p>
              </div>
              <div className="ficha-producto__detalle">
                <p className="rotulo">Stock</p>
                <p className="ficha-producto__detalle-valor">{producto.stock} unidades</p>
              </div>
              <div className="ficha-producto__detalle">
                <p className="rotulo">Usado en campañas</p>
                <p className="ficha-producto__detalle-valor">{etiquetaUsos(producto.usosEnCampanas)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tarjeta ficha-producto__card ficha-producto__galeria">
          <p className="ficha-producto__card-titulo">Fotos</p>

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
                <p className="ficha-producto__relacionado-nombre">{p.nombre}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
