import { useRef, useState } from 'react'
import {
  pyme as pymeInicial,
  visionMarca as visionInicial,
  fotoEquipoNegocio,
  productos,
} from '../datos/simulados'
import CarruselProductos from '../componentes/CarruselProductos'
import FichaProducto from './FichaProducto'
import TodosProductos from './TodosProductos'
import './TuInfo.css'

/* Lo que Pautia sabe del negocio — en el producto real se completa en el
   chat de onboarding (Contexto/03_Procesos_y_requerimientos/
   05-happy-path-onboarding.md) y se puede corregir después. Acá se edita
   como un formulario simple: no hay backend, "Guardar" solo actualiza el
   estado local de esta pantalla. */

const CAMPOS = [
  { id: 'nombre', etiqueta: 'Nombre del negocio' },
  { id: 'rubro', etiqueta: 'Rubro' },
  { id: 'queVende', etiqueta: 'Qué vendés' },
  { id: 'tiempoActividad', etiqueta: 'Hace cuánto tiempo' },
  { id: 'aQuienLeVende', etiqueta: 'A quién le vendés' },
]

const CONEXIONES_INICIALES = [
  {
    id: 'tiendanube',
    nombre: 'Tiendanube',
    detalle: 'Suma tu catálogo de productos y clientes automáticamente.',
    conectado: false,
  },
  {
    id: 'meta-ads',
    nombre: 'Meta Ads',
    detalle: 'No hace falta ahora — se usa más adelante, para traer los resultados de las campañas que lances.',
    conectado: false,
  },
]

export default function TuInfo() {
  const [pyme, setPyme] = useState(pymeInicial)
  const [borrador, setBorrador] = useState(pymeInicial)
  const [editando, setEditando] = useState(false)
  const [conexiones, setConexiones] = useState(CONEXIONES_INICIALES)
  const [archivo, setArchivo] = useState(null)
  const archivoRef = useRef(null)

  const [vision, setVision] = useState(visionInicial)
  const [borradorVision, setBorradorVision] = useState(visionInicial)
  const [editandoVision, setEditandoVision] = useState(false)

  const [pantalla, setPantalla] = useState('principal') // 'principal' | 'producto' | 'todos-productos'
  const [productoActivoId, setProductoActivoId] = useState(null)

  const empezarEdicion = () => {
    setBorrador(pyme)
    setEditando(true)
  }

  const guardar = (e) => {
    e.preventDefault()
    setPyme(borrador)
    setEditando(false)
  }

  const cancelar = () => {
    setBorrador(pyme)
    setEditando(false)
  }

  const toggleConexion = (id) => {
    setConexiones((lista) =>
      lista.map((c) => (c.id === id ? { ...c, conectado: !c.conectado } : c))
    )
  }

  const handleArchivo = (e) => {
    const elegido = e.target.files?.[0]
    e.target.value = ''
    if (elegido) setArchivo(elegido.name)
  }

  const empezarEdicionVision = () => {
    setBorradorVision(vision)
    setEditandoVision(true)
  }

  const guardarVision = (e) => {
    e.preventDefault()
    setVision(borradorVision)
    setEditandoVision(false)
  }

  const cancelarVision = () => {
    setBorradorVision(vision)
    setEditandoVision(false)
  }

  const verProducto = (id) => {
    setProductoActivoId(id)
    setPantalla('producto')
  }

  const volverAPrincipal = () => setPantalla('principal')

  if (pantalla === 'producto') {
    const producto = productos.find((p) => p.id === productoActivoId)
    return (
      <FichaProducto
        key={producto.id}
        producto={producto}
        productos={productos}
        onVolver={volverAPrincipal}
        onVerProducto={verProducto}
      />
    )
  }

  if (pantalla === 'todos-productos') {
    return (
      <TodosProductos productos={productos} onVolver={volverAPrincipal} onVerProducto={verProducto} />
    )
  }

  return (
    <div className="tu-info">
      <div className="tu-info__encabezado">
        <h1>Tu información</h1>
        <p className="tu-info__bajada">
          Esto es lo que Pautia sabe de tu negocio — lo contaste en el chat cuando
          te registraste. Actualizalo cuando cambie algo.
        </p>
      </div>

      <section className="tu-info__seccion">
        <div className="tu-info__seccion-titulo">
          <h2>Datos del negocio</h2>
          {!editando && (
            <button type="button" className="btn btn--secundario btn--chico" onClick={empezarEdicion}>
              Editar
            </button>
          )}
        </div>

        <div className="tarjeta tu-info__card">
          {editando ? (
            <form className="tu-info__form" onSubmit={guardar}>
              {CAMPOS.map((campo) => (
                <label key={campo.id} className="tu-info__campo">
                  <span className="rotulo">{campo.etiqueta}</span>
                  <textarea
                    value={borrador[campo.id]}
                    onChange={(e) => setBorrador({ ...borrador, [campo.id]: e.target.value })}
                    rows={campo.id === 'nombre' || campo.id === 'rubro' || campo.id === 'tiempoActividad' ? 1 : 2}
                  />
                </label>
              ))}
              <div className="tu-info__acciones">
                <button type="button" className="btn btn--fantasma btn--chico" onClick={cancelar}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn--principal btn--chico">
                  Guardar cambios
                </button>
              </div>
            </form>
          ) : (
            <dl className="tu-info__lista">
              {CAMPOS.map((campo) => (
                <div key={campo.id} className="tu-info__item">
                  <dt className="rotulo">{campo.etiqueta}</dt>
                  <dd>{pyme[campo.id]}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="tu-info__seccion">
        <div className="tu-info__seccion-titulo">
          <h2>Visión de marca</h2>
          {!editandoVision && (
            <button type="button" className="btn btn--secundario btn--chico" onClick={empezarEdicionVision}>
              Editar
            </button>
          )}
        </div>

        <div className="tarjeta tu-info__card">
          <div className="tu-info__vision">
            <div className="tu-info__vision-foto">
              <img src={fotoEquipoNegocio} alt="Equipo de Van Luz" />
            </div>

            <div className="tu-info__vision-texto">
              {editandoVision ? (
                <form className="tu-info__form" onSubmit={guardarVision}>
                  <textarea
                    className="tu-info__vision-campo"
                    value={borradorVision}
                    onChange={(e) => setBorradorVision(e.target.value)}
                    rows={6}
                    autoFocus
                  />
                  <div className="tu-info__acciones">
                    <button type="button" className="btn btn--fantasma btn--chico" onClick={cancelarVision}>
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn--principal btn--chico">
                      Guardar cambios
                    </button>
                  </div>
                </form>
              ) : (
                <p className="tu-info__vision-parrafo">{vision}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="tu-info__seccion">
        <div className="tu-info__seccion-titulo">
          <h2>Mis productos</h2>
          <button type="button" className="btn btn--enlace btn--chico" onClick={() => setPantalla('todos-productos')}>
            Ver todos
          </button>
        </div>

        <div className="tarjeta tu-info__card">
          <CarruselProductos productos={productos} onVerProducto={verProducto} />
        </div>

        <button type="button" className="btn btn--principal tu-info__agregar-producto">
          Agregar producto
        </button>
      </section>

      <section className="tu-info__seccion">
        <div className="tu-info__seccion-titulo">
          <h2>Catálogo y conexiones</h2>
        </div>

        <div className="tarjeta tu-info__card">
          <ul className="tu-info__conexiones">
            {conexiones.map((c) => (
              <li key={c.id} className="tu-info__conexion">
                <div>
                  <p className="tu-info__conexion-nombre">{c.nombre}</p>
                  <p className="tu-info__conexion-detalle">{c.detalle}</p>
                </div>
                <div className="tu-info__conexion-derecha">
                  <span className={'chip ' + (c.conectado ? 'chip--conectado' : 'chip--pendiente')}>
                    {c.conectado ? 'Conectado' : 'No conectado'}
                  </span>
                  <button
                    type="button"
                    className={'btn btn--chico ' + (c.conectado ? 'btn--fantasma' : 'btn--secundario')}
                    onClick={() => toggleConexion(c.id)}
                  >
                    {c.conectado ? 'Desconectar' : 'Conectar'}
                  </button>
                </div>
              </li>
            ))}

            <li className="tu-info__conexion">
              <div>
                <p className="tu-info__conexion-nombre">Archivo de catálogo</p>
                <p className="tu-info__conexion-detalle">
                  {archivo
                    ? `Cargaste "${archivo}".`
                    : 'Subí un CSV o Excel con tus productos, si no usás Tiendanube.'}
                </p>
              </div>
              <div className="tu-info__conexion-derecha">
                <button
                  type="button"
                  className="btn btn--secundario btn--chico"
                  onClick={() => archivoRef.current?.click()}
                >
                  {archivo ? 'Cambiar archivo' : 'Subir archivo'}
                </button>
                <input
                  type="file"
                  accept=".csv,.xls,.xlsx"
                  ref={archivoRef}
                  onChange={handleArchivo}
                  hidden
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
