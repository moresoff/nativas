import { useEffect, useRef, useState } from 'react'
import { pyme } from '../datos/simulados'
import BloqueTexto from '../componentes/BloqueTexto'
import fotoEjemplo1 from '../assets/campanas-ejemplo/foto-ejemplo-1.png'
import fotoEjemplo2 from '../assets/campanas-ejemplo/foto-ejemplo-2.png'
import fotoEjemplo3 from '../assets/campanas-ejemplo/foto-ejemplo-3.png'
import './NuevaCampana.css'

/* Chat de nueva campaña — el recorrido central del producto.
   No hay IA real acá: el guion está escrito a mano y avanza con las
   tarjetas de opciones y los botones. Es la conversación de ejemplo que
   el equipo definió en el happy path, puesta en pantalla. */

const CHIPS_Q1 = ['Electricistas', 'Consumidor final']
const CHIPS_Q2 = ['Más ventas', 'Más reconocimiento de marca']
const CHIPS_Q3 = ['Confianza y experiencia', 'Cercanía, atención personalizada', 'Urgencia, que actúen ya']
const FORMATOS = ['Post cuadrado (1:1)', 'Historia (9:16)', 'Banner horizontal (16:9)']

const PROPUESTA_INICIAL =
  'Con lo que me contaste, te propongo una campaña de reconocimiento de marca dirigida a electricistas del conurbano sur, en Instagram, durante dos semanas.'

const AJUSTE_USUARIO =
  'Prefiero que el foco sea la entrega en 48 horas, no reconocimiento general.'

const PROPUESTA_AJUSTADA =
  'Ajustado: una campaña de conversión centrada en la entrega en 48 horas, para electricistas del conurbano sur, en Instagram, durante dos semanas.'

const RESUMEN =
  'Esto es lo que entendí: campaña de conversión, foco en la entrega en 48 horas, para electricistas del conurbano sur, con difusión en Instagram durante dos semanas. ¿Generamos el copy y los términos y condiciones?'

const COPY_GENERADO =
  '¿Sos electricista y comprás por volumen? En Van Luz tenés stock permanente de cable, canalización y accesorios, con entrega en 48 horas en todo el conurbano sur. Pedí tu presupuesto hoy.'

const TYC_GENERADO =
  'Promoción válida del 1 al 30 de abril de 2026 en compras superiores a $150.000. Entrega en 48 horas sujeta a stock disponible en el momento de la compra. No acumulable con otras promociones vigentes.'

const COPY_AJUSTADO =
  'Cable, canalización y accesorios con stock permanente — y tu pedido en la puerta de tu obra en 48 horas. Así trabajamos con los electricistas del conurbano sur hace 8 años. Pedí tu presupuesto hoy.'

const TYC_AJUSTADO =
  'Promoción válida del 1 al 30 de abril de 2026 en compras superiores a $150.000. Entrega en 48 horas sujeta a stock disponible al momento de la compra, dentro del conurbano sur. No acumulable con otras promociones vigentes.'

const EJEMPLO_IDEA = 'Quiero hacer una campaña para aumentar mis ventas'

/* Sugerencias que "arma el agente" antes de que escribas el primer
   mensaje — mismo criterio que el botón de ejemplo de siempre, pero
   con varias opciones en vez de una sola. Cualquiera de las 4 sirve
   como primer mensaje: enviarIdea no distingue de dónde vino el texto. */
const SUGERENCIAS_INICIALES = [
  EJEMPLO_IDEA,
  'Necesito una campaña para el Día del Electricista',
  'Quiero liquidar stock de cable unipolar',
  'Quiero que me conozcan los electricistas de la zona sur',
]

function EmpezarVacio({ nombreNegocio, onSugerencia }) {
  return (
    <div className="chat-vacio">
      <h2 className="chat-vacio__saludo">
        Hola, {nombreNegocio}
        <br />
        ¿Qué campaña armamos hoy?
      </h2>
      <p className="chat-vacio__bajada">Elegí una idea para arrancar, o escribí la tuya abajo.</p>
      <div className="chat-vacio__grid">
        {SUGERENCIAS_INICIALES.map((texto) => (
          <button
            key={texto}
            type="button"
            className="chat-vacio__tarjeta"
            onClick={() => onSugerencia(texto)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.5 13.7 9.3 20.5 11 13.7 12.7 12 19.5 10.3 12.7 3.5 11 10.3 9.3Z" />
            </svg>
            <span>{texto}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* Conversaciones anteriores — datos simulados, todavía no se pueden
   reabrir (no hay guiones escritos para ellas). Están para mostrar
   dónde va a vivir el historial cuando exista de verdad. */
const CONVERSACIONES_PREVIAS = [
  'Promo electricistas — abril',
  'Liquidación de cable unipolar',
  'Entrega en 48 horas',
]

const NOMBRE_POR_DEFECTO = 'Nueva campaña'

/* Fotos de ejemplo para probar el paso de subida sin tener que elegir
   archivos de verdad — simulan que la persona ya subió las suyas. */
const FOTOS_EJEMPLO = [
  { id: 'ejemplo-1', nombre: 'foto-ejemplo-1.png', url: fotoEjemplo1 },
  { id: 'ejemplo-2', nombre: 'foto-ejemplo-2.png', url: fotoEjemplo2 },
  { id: 'ejemplo-3', nombre: 'foto-ejemplo-3.png', url: fotoEjemplo3 },
]

const leerComoDataURL = (archivo) =>
  new Promise((resolve) => {
    const lector = new FileReader()
    lector.onload = () => resolve(lector.result)
    lector.readAsDataURL(archivo)
  })

/* Tarjeta de opciones, anclada arriba del campo de escribir (no vive
   adentro del scroll de mensajes): así las respuestas posibles quedan
   siempre a mano y los mensajes ya enviados no se mueven de lugar. */
function TarjetaOpciones({ opciones, onSaltear, permiteTexto }) {
  return (
    <div className="opciones-card">
      <div className="opciones-card__lista">
        {opciones.map((op, i) => (
          <button
            key={op.label}
            type="button"
            className="opciones-card__item"
            onClick={op.onClick}
          >
            <span>{op.label}</span>
            <span className="opciones-card__num">{i + 1}</span>
          </button>
        ))}
        {onSaltear && (
          <button
            type="button"
            className="opciones-card__item opciones-card__item--saltear"
            onClick={onSaltear}
          >
            <span>Saltear</span>
          </button>
        )}
      </div>
      {permiteTexto && (
        <p className="opciones-card__pista">O escribí tu propia respuesta abajo.</p>
      )}
    </div>
  )
}

export default function NuevaCampana({ onVolver }) {
  const [paso, setPaso] = useState(0)
  const [ideaInicial, setIdeaInicial] = useState('')
  const [respQ1, setRespQ1] = useState('')
  const [respQ2, setRespQ2] = useState('')
  const [respQ3, setRespQ3] = useState('')
  const [huboAjuste, setHuboAjuste] = useState(false)
  const [inputValor, setInputValor] = useState('')
  const [nombreChat, setNombreChat] = useState(NOMBRE_POR_DEFECTO)
  const [editandoNombre, setEditandoNombre] = useState(false)
  const [fotos, setFotos] = useState([])
  const [formatosSeleccionados, setFormatosSeleccionados] = useState([])

  const [copyTexto, setCopyTexto] = useState(COPY_GENERADO)
  const [tycTexto, setTycTexto] = useState(TYC_GENERADO)
  const [huboAjusteCopy, setHuboAjusteCopy] = useState(false)
  const [ajusteCopyUsuario, setAjusteCopyUsuario] = useState('')

  const finRef = useRef(null)
  const archivoRef = useRef(null)

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [paso, fotos.length, huboAjusteCopy])

  const enviarIdea = (texto) => {
    if (!texto.trim()) return
    setIdeaInicial(texto.trim())
    setPaso(1)
    setInputValor('')
  }

  /* El campo de escribir libre solo queda habilitado donde el guion
     realmente puede interpretar texto suelto: las tres preguntas de
     arranque y la ronda de ajuste del copy. En el resto se avanza con
     las tarjetas de opciones o los botones de acción. */
  const puedeEscribirLibre = paso <= 3 || (paso === 6 && !huboAjusteCopy)

  const handleEnviar = (e) => {
    e.preventDefault()
    const texto = inputValor.trim()
    if (!texto) return
    if (paso === 0) enviarIdea(texto)
    else if (paso === 1) elegirQ1(texto)
    else if (paso === 2) elegirQ2(texto)
    else if (paso === 3) elegirQ3(texto)
    else if (paso === 6 && !huboAjusteCopy) enviarAjusteCopy(texto)
  }

  const elegirQ1 = (valor) => {
    setRespQ1(valor)
    setPaso(2)
    setInputValor('')
  }

  const elegirQ2 = (valor) => {
    setRespQ2(valor)
    setPaso(3)
    setInputValor('')
  }

  const elegirQ3 = (valor) => {
    setRespQ3(valor)
    setPaso(4)
    setInputValor('')
  }

  const enviarAjusteCopy = (texto) => {
    setAjusteCopyUsuario(texto)
    setCopyTexto(COPY_AJUSTADO)
    setTycTexto(TYC_AJUSTADO)
    setHuboAjusteCopy(true)
    setInputValor('')
  }

  const toggleFormato = (valor) => {
    setFormatosSeleccionados((actuales) =>
      actuales.includes(valor) ? actuales.filter((f) => f !== valor) : [...actuales, valor]
    )
  }

  const confirmarFormatos = (valores) => {
    setFormatosSeleccionados(valores)
    setPaso(9)
  }

  const usarFotosEjemplo = () => {
    setFotos(FOTOS_EJEMPLO)
    setPaso(8)
  }

  const handleArchivos = async (e) => {
    const archivos = Array.from(e.target.files || [])
    e.target.value = ''
    if (archivos.length === 0) return
    const urls = await Promise.all(archivos.map(leerComoDataURL))
    setFotos(
      archivos.map((archivo, i) => ({
        id: `${archivo.name}-${i}-${Date.now()}`,
        nombre: archivo.name,
        url: urls[i],
      }))
    )
    setPaso(8)
  }

  const reiniciarChat = () => {
    setPaso(0)
    setIdeaInicial('')
    setRespQ1('')
    setRespQ2('')
    setRespQ3('')
    setHuboAjuste(false)
    setInputValor('')
    setNombreChat(NOMBRE_POR_DEFECTO)
    setEditandoNombre(false)
    setFotos([])
    setFormatosSeleccionados([])
    setCopyTexto(COPY_GENERADO)
    setTycTexto(TYC_GENERADO)
    setHuboAjusteCopy(false)
    setAjusteCopyUsuario('')
  }

  let tarjeta = null
  if (paso === 1) {
    tarjeta = (
      <TarjetaOpciones
        opciones={CHIPS_Q1.map((op) => ({ label: op, onClick: () => elegirQ1(op) }))}
        onSaltear={() => elegirQ1('Salteado')}
        permiteTexto
      />
    )
  } else if (paso === 2) {
    tarjeta = (
      <TarjetaOpciones
        opciones={CHIPS_Q2.map((op) => ({ label: op, onClick: () => elegirQ2(op) }))}
        onSaltear={() => elegirQ2('Salteado')}
        permiteTexto
      />
    )
  } else if (paso === 3) {
    tarjeta = (
      <TarjetaOpciones
        opciones={CHIPS_Q3.map((op) => ({ label: op, onClick: () => elegirQ3(op) }))}
        onSaltear={() => elegirQ3('Salteado')}
        permiteTexto
      />
    )
  } else if (paso === 4 && !huboAjuste) {
    tarjeta = (
      <TarjetaOpciones
        opciones={[
          { label: 'Me sirve, seguimos', onClick: () => setPaso(5) },
          { label: 'No me cierra, lo ajusto', onClick: () => setHuboAjuste(true) },
        ]}
      />
    )
  } else if (paso === 4 && huboAjuste) {
    tarjeta = (
      <TarjetaOpciones opciones={[{ label: 'Dale, así sí', onClick: () => setPaso(5) }]} />
    )
  } else if (paso === 6 && !huboAjusteCopy) {
    tarjeta = (
      <TarjetaOpciones
        opciones={[
          { label: 'Está perfecto, sigamos', onClick: () => setPaso(7) },
          { label: 'Que suene más cercano', onClick: () => enviarAjusteCopy('Que suene más cercano') },
          { label: 'Que tenga más urgencia', onClick: () => enviarAjusteCopy('Que tenga más urgencia') },
        ]}
        permiteTexto
      />
    )
  } else if (paso === 6 && huboAjusteCopy) {
    tarjeta = (
      <TarjetaOpciones opciones={[{ label: 'Buenísimo, sigamos', onClick: () => setPaso(7) }]} />
    )
  } else if (paso === 7) {
    tarjeta = (
      <div className="opciones-card opciones-card--subir">
        <p className="opciones-card__pista opciones-card__pista--activa">
          Usá el ícono de la izquierda para subir las fotos.
        </p>
        <button type="button" className="opciones-card__item" onClick={usarFotosEjemplo}>
          <span>Usar fotos de ejemplo</span>
        </button>
        <button
          type="button"
          className="opciones-card__item opciones-card__item--saltear"
          onClick={() => {
            setFotos([])
            setPaso(8)
          }}
        >
          <span>Seguir sin fotos</span>
        </button>
      </div>
    )
  } else if (paso === 8) {
    tarjeta = (
      <div className="opciones-card">
        <div className="opciones-card__lista">
          {FORMATOS.map((op) => {
            const activo = formatosSeleccionados.includes(op)
            return (
              <button
                key={op}
                type="button"
                className={'opciones-card__item' + (activo ? ' opciones-card__item--activo' : '')}
                onClick={() => toggleFormato(op)}
                aria-pressed={activo}
              >
                <span>{op}</span>
                <span className="opciones-card__check" aria-hidden="true">✓</span>
              </button>
            )
          })}
          <button
            type="button"
            className="opciones-card__item opciones-card__item--saltear"
            onClick={() => confirmarFormatos([])}
          >
            <span>Saltear</span>
          </button>
        </div>
        <div className="opciones-card__acciones">
          <p className="opciones-card__pista">Podés elegir más de uno.</p>
          <button
            type="button"
            className="btn btn--principal btn--chico"
            onClick={() => confirmarFormatos(formatosSeleccionados)}
            disabled={formatosSeleccionados.length === 0}
          >
            Continuar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-layout">
      <aside className="chat-historial">
        <button type="button" className="btn btn--secundario btn--chico chat-historial__nueva" onClick={reiniciarChat}>
          + Nueva campaña
        </button>

        <div className="chat-historial__actual" aria-current="true">{nombreChat}</div>

        <p className="rotulo chat-historial__etiqueta">Conversaciones anteriores</p>
        <ul className="chat-historial__lista">
          {CONVERSACIONES_PREVIAS.map((nombre) => (
            <li key={nombre} className="chat-historial__item">{nombre}</li>
          ))}
        </ul>
        <p className="chat-historial__pista">Todavía no se pueden reabrir — por ahora es solo una vista previa de dónde van a vivir.</p>
      </aside>

      <div className="chat-vista">
        <div className="chat-vista__encabezado">
          <button type="button" className="btn btn--fantasma btn--chico chat-vista__volver" onClick={onVolver}>
            ← Home
          </button>

          {editandoNombre ? (
            <input
              type="text"
              className="chat-vista__nombre-campo"
              value={nombreChat}
              autoFocus
              onChange={(e) => setNombreChat(e.target.value)}
              onBlur={() => setEditandoNombre(false)}
              onKeyDown={(e) => e.key === 'Enter' && setEditandoNombre(false)}
              aria-label="Nombre de la conversación"
            />
          ) : (
            <button type="button" className="chat-vista__nombre" onClick={() => setEditandoNombre(true)}>
              {nombreChat}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </button>
          )}
        </div>

        <div className="chat-vista__mensajes" aria-live="polite">
          {paso === 0 ? (
            <EmpezarVacio nombreNegocio={pyme.nombre} onSugerencia={enviarIdea} />
          ) : (
            <>
              <div className="burbuja-sistema">
                ¡Hola! Contame qué campaña tenés en mente y la armamos juntos.
              </div>

              <div className="burbuja-usuario">{ideaInicial}</div>
              <div className="burbuja-sistema">
                ¿A quién le vendés más seguido: electricistas o consumidor final?
              </div>
            </>
          )}

          {paso >= 2 && <div className="burbuja-usuario">{respQ1}</div>}
          {paso >= 2 && (
            <div className="burbuja-sistema">¿Qué buscás lograr con esta campaña?</div>
          )}

          {paso >= 3 && <div className="burbuja-usuario">{respQ2}</div>}
          {paso >= 3 && (
            <div className="burbuja-sistema">
              ¿Qué querés transmitir con esta campaña? Por ejemplo, confianza, cercanía o urgencia.
            </div>
          )}

          {paso >= 4 && <div className="burbuja-usuario">{respQ3}</div>}
          {paso >= 4 && <div className="burbuja-sistema">{PROPUESTA_INICIAL}</div>}
          {huboAjuste && (
            <>
              <div className="burbuja-usuario">{AJUSTE_USUARIO}</div>
              <div className="burbuja-sistema">{PROPUESTA_AJUSTADA}</div>
            </>
          )}

          {paso >= 5 && <div className="burbuja-sistema">{RESUMEN}</div>}
          {paso === 5 && (
            <button type="button" className="btn btn--principal chat-vista__accion" onClick={() => setPaso(6)}>
              Generar
            </button>
          )}

          {paso >= 6 && (
            <>
              <div className="burbuja-sistema">Así quedaría el copy y los términos y condiciones.</div>
              <BloqueTexto etiqueta="Copy de campaña" value={copyTexto} onGuardar={setCopyTexto} />
              <BloqueTexto etiqueta="Términos y condiciones" value={tycTexto} onGuardar={setTycTexto} />
              <div className="burbuja-sistema">
                ¿Cómo lo ves? Si querés que ajuste el tono o el mensaje, contame qué cambiarías
                — también podés tocar "Editar" arriba y corregirlo vos misma.
              </div>
            </>
          )}
          {huboAjusteCopy && (
            <>
              <div className="burbuja-usuario">{ajusteCopyUsuario}</div>
              <div className="burbuja-sistema">Listo, lo ajusté. Fijate cómo quedó arriba.</div>
            </>
          )}

          {paso >= 7 && (
            <div className="burbuja-sistema">
              Para armar las piezas para tus redes, subí una o más fotos de tus productos.
            </div>
          )}

          {paso >= 8 && (
            <div className="burbuja-usuario burbuja-usuario--fotos">
              {fotos.length > 0 ? (
                <div className="fotos-miniaturas">
                  {fotos.map((f) => (
                    <img key={f.id} src={f.url} alt={f.nombre} className="fotos-miniaturas__img" />
                  ))}
                </div>
              ) : (
                'Sigamos sin fotos.'
              )}
            </div>
          )}
          {paso >= 8 && <div className="burbuja-sistema">¿En qué formato la vas a usar? Podés elegir más de uno.</div>}

          {paso >= 9 && (
            <div className="burbuja-usuario">
              {formatosSeleccionados.length > 0 ? formatosSeleccionados.join(' · ') : 'Salteado'}
            </div>
          )}
          {paso >= 9 && (
            <div className="burbuja-sistema">
              {fotos.length > 0 ? (
                <>
                  <p className="chat-vista__resultado-titulo">
                    Así quedarían tus piezas, formato{formatosSeleccionados.length > 1 ? 's' : ''}{' '}
                    {formatosSeleccionados.length > 0 ? formatosSeleccionados.join(' · ') : 'Salteado'}:
                  </p>
                  <div className="fotos-miniaturas">
                    {fotos.map((f) => (
                      <img key={f.id} src={f.url} alt={f.nombre} className="fotos-miniaturas__img" />
                    ))}
                  </div>
                  <p className="chat-vista__nota-simulada">
                    Simulado: son las mismas fotos que subiste. En el producto real, acá la IA
                    va a generar las piezas nuevas a partir de ellas.
                  </p>
                </>
              ) : (
                <p>No subiste fotos, así que todavía no hay una vista previa para mostrar.</p>
              )}
            </div>
          )}
          {paso === 9 && (
            <button type="button" className="btn btn--principal chat-vista__accion" onClick={() => setPaso(10)}>
              Guardar campaña
            </button>
          )}

          {paso >= 10 && (
            <>
              <div className="burbuja-sistema">
                ¡Guardada! El repositorio de Campañas todavía no lo construimos — cuando
                exista, la vas a encontrar ahí.
              </div>
              <button type="button" className="btn btn--secundario chat-vista__accion" onClick={onVolver}>
                Volver a Home
              </button>
            </>
          )}

          <div ref={finRef} />
        </div>

        {tarjeta && <div className="chat-vista__tarjeta-anclada">{tarjeta}</div>}

        <form className="chat-vista__input" onSubmit={handleEnviar}>
          <button
            type="button"
            className="chat-vista__adjuntar"
            onClick={() => archivoRef.current?.click()}
            disabled={paso !== 7}
            aria-label="Subir fotos"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05 12.25 20.24a5 5 0 0 1-7.07-7.07l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </button>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={archivoRef}
            onChange={handleArchivos}
            hidden
          />

          <input
            type="text"
            className="chat-vista__campo"
            placeholder={
              paso === 0
                ? 'Contame tu idea de campaña…'
                : paso <= 3
                ? 'Escribí tu respuesta o elegí una opción de arriba'
                : paso === 6 && !huboAjusteCopy
                ? 'Contame qué le cambiarías, o elegí una opción de arriba'
                : paso === 7
                ? 'Subí tus fotos con el ícono de la izquierda'
                : 'Podés seguir con las opciones de arriba'
            }
            value={inputValor}
            onChange={(e) => setInputValor(e.target.value)}
            disabled={!puedeEscribirLibre}
            aria-label="Escribí tu mensaje"
          />
          <button
            type="submit"
            className="chat-vista__enviar"
            disabled={!puedeEscribirLibre || !inputValor.trim()}
            aria-label="Enviar mensaje"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
