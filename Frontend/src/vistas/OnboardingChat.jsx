import { useEffect, useRef, useState } from 'react'
import './NuevaCampana.css'
import './OnboardingChat.css'

/* Chat de onboarding — mismo patrón guionado que NuevaCampana (pasos por
   estado, tarjeta de opciones anclada arriba del campo de escribir), pero
   con su propio guion: cuenta el negocio, resumen con tono inferido,
   paleta de marca (obligatoria) y oferta de Meta Ads (opcional). No hay
   IA real: el resumen y el tono se arman con lo que la persona escribió,
   a mano. */

const PALETA_EJEMPLO = [
  { nombre: 'Primario', hex: '#0A59DA' },
  { nombre: 'Secundario', hex: '#DB3396' },
  { nombre: 'Neutro', hex: '#14213A' },
]

function TarjetaOpciones({ opciones, onSaltear, permiteTexto }) {
  return (
    <div className="opciones-card">
      <div className="opciones-card__lista">
        {opciones.map((op, i) => (
          <button key={op.label} type="button" className="opciones-card__item" onClick={op.onClick}>
            <span>{op.label}</span>
            <span className="opciones-card__num">{i + 1}</span>
          </button>
        ))}
        {onSaltear && (
          <button type="button" className="opciones-card__item opciones-card__item--saltear" onClick={onSaltear}>
            <span>Saltear</span>
          </button>
        )}
      </div>
      {permiteTexto && <p className="opciones-card__pista">O escribí tu propia respuesta abajo.</p>}
    </div>
  )
}

/* Preguntas de refinamiento: no obligatorias, pero sin respuestas
   sugeridas — la persona escribe libremente o saltea, sin chips que
   le dicten qué contestar. */
function TarjetaSaltear({ onSaltear }) {
  return (
    <div className="opciones-card">
      <div className="opciones-card__lista">
        <button type="button" className="opciones-card__item opciones-card__item--saltear" onClick={onSaltear}>
          <span>Saltear esta pregunta</span>
        </button>
      </div>
      <p className="opciones-card__pista opciones-card__pista--activa">Escribí tu respuesta abajo.</p>
    </div>
  )
}

export default function OnboardingChat({ nombreNegocio, onFinalizar }) {
  const [paso, setPaso] = useState(0)
  const [inputValor, setInputValor] = useState('')

  const [respuestaNegocio, setRespuestaNegocio] = useState('')
  const [respTiempo, setRespTiempo] = useState('')
  const [respAQuien, setRespAQuien] = useState('')

  const [catalogoElegido, setCatalogoElegido] = useState(null) // 'tiendanube' | 'archivo' | 'saltado'
  const [archivoNombre, setArchivoNombre] = useState(null)

  const [corrigiendoResumen, setCorrigiendoResumen] = useState(false)
  const [resumenAjustado, setResumenAjustado] = useState(false)
  const [ajusteResumenTexto, setAjusteResumenTexto] = useState('')

  const [paleta, setPaleta] = useState([])
  const [colorNuevo, setColorNuevo] = useState('#0A59DA')
  const [nombreColorNuevo, setNombreColorNuevo] = useState('')

  const [metaAdsElegido, setMetaAdsElegido] = useState(null) // 'conectado' | 'saltado'

  const finRef = useRef(null)
  const archivoRef = useRef(null)

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [paso, paleta.length, corrigiendoResumen, resumenAjustado])

  const puedeEscribirLibre =
    paso === 0 || paso === 1 || paso === 2 || (paso === 4 && corrigiendoResumen && !resumenAjustado)

  const enviarNegocio = (texto) => {
    if (!texto.trim()) return
    setRespuestaNegocio(texto.trim())
    setPaso(1)
    setInputValor('')
  }

  const elegirTiempo = (valor) => {
    setRespTiempo(valor)
    setPaso(2)
    setInputValor('')
  }

  const elegirAQuien = (valor) => {
    setRespAQuien(valor)
    setPaso(3)
    setInputValor('')
  }

  const elegirCatalogo = (valor) => {
    setCatalogoElegido(valor)
    setPaso(4)
  }

  const handleArchivo = (e) => {
    const elegido = e.target.files?.[0]
    e.target.value = ''
    if (!elegido) return
    setArchivoNombre(elegido.name)
    elegirCatalogo('archivo')
  }

  const enviarAjusteResumen = (texto) => {
    setAjusteResumenTexto(texto)
    setResumenAjustado(true)
    setInputValor('')
  }

  const handleEnviar = (e) => {
    e.preventDefault()
    const texto = inputValor.trim()
    if (!texto) return
    if (paso === 0) enviarNegocio(texto)
    else if (paso === 1) elegirTiempo(texto)
    else if (paso === 2) elegirAQuien(texto)
    else if (paso === 4 && corrigiendoResumen && !resumenAjustado) enviarAjusteResumen(texto)
  }

  const hexValido = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(colorNuevo.trim())

  const agregarColor = () => {
    if (!hexValido) return
    const nombre = nombreColorNuevo.trim() || `Color ${paleta.length + 1}`
    setPaleta((actual) => [...actual, { nombre, hex: colorNuevo.trim() }])
    setNombreColorNuevo('')
    setColorNuevo('#0A59DA')
  }

  const quitarColor = (i) => {
    setPaleta((actual) => actual.filter((_, idx) => idx !== i))
  }

  const usarPaletaEjemplo = () => setPaleta(PALETA_EJEMPLO)

  const resumenPartes = [respuestaNegocio]
  if (respTiempo && respTiempo !== 'Salteado') resumenPartes.push(`Hace cuánto: ${respTiempo}.`)
  if (respAQuien && respAQuien !== 'Salteado') resumenPartes.push(`A quién le vende: ${respAQuien}.`)
  const resumenCompuesto = `Esto es lo que entendí: ${resumenPartes.join(' ')}`

  const tonoInferido =
    'Por cómo lo contaste, el tono suena directo y cercano — vamos a evitar frases genéricas tipo "la mejor calidad" y apostar a hablar como lo hiciste vos acá. Lo vamos a afinar con cada campaña que armemos.'

  let tarjeta = null
  if (paso === 1) {
    tarjeta = <TarjetaSaltear onSaltear={() => elegirTiempo('Salteado')} />
  } else if (paso === 2) {
    tarjeta = <TarjetaSaltear onSaltear={() => elegirAQuien('Salteado')} />
  } else if (paso === 3) {
    tarjeta = (
      <div className="opciones-card opciones-card--subir">
        <p className="opciones-card__pista opciones-card__pista--activa">
          Usá el ícono de la izquierda para subir un archivo, o conectá Tiendanube.
        </p>
        <button type="button" className="opciones-card__item" onClick={() => elegirCatalogo('tiendanube')}>
          <span>Conectar Tiendanube</span>
        </button>
        <button type="button" className="opciones-card__item opciones-card__item--saltear" onClick={() => elegirCatalogo('saltado')}>
          <span>Seguir sin catálogo</span>
        </button>
      </div>
    )
  } else if (paso === 4 && !corrigiendoResumen && !resumenAjustado) {
    tarjeta = (
      <TarjetaOpciones
        opciones={[
          { label: 'Me sirve, así está bien', onClick: () => setPaso(5) },
          { label: 'Quiero corregir algo', onClick: () => setCorrigiendoResumen(true) },
        ]}
      />
    )
  } else if (paso === 4 && resumenAjustado) {
    tarjeta = <TarjetaOpciones opciones={[{ label: 'Dale, así sí', onClick: () => setPaso(5) }]} />
  } else if (paso === 5) {
    tarjeta = (
      <div className="opciones-card opciones-card--paleta">
        <div className="paleta-picker__form">
          <span
            className="paleta-picker__preview"
            style={{ background: hexValido ? colorNuevo : 'transparent' }}
            aria-hidden="true"
          />
          <input
            type="text"
            className="paleta-picker__hex"
            placeholder="#0A59DA"
            value={colorNuevo}
            onChange={(e) => setColorNuevo(e.target.value)}
            aria-label="Código de color (hex)"
            maxLength={7}
          />
          <input
            type="text"
            className="paleta-picker__nombre"
            placeholder="Nombre del color (ej: Azul marca)"
            value={nombreColorNuevo}
            onChange={(e) => setNombreColorNuevo(e.target.value)}
          />
          <button type="button" className="btn btn--secundario btn--chico" onClick={agregarColor} disabled={!hexValido}>
            Agregar color
          </button>
        </div>

        {paleta.length > 0 && (
          <div className="paleta-picker__lista">
            {paleta.map((c, i) => (
              <div key={`${c.hex}-${i}`} className="paleta-picker__swatch">
                <span className="paleta-picker__swatch-color" style={{ background: c.hex }} aria-hidden="true" />
                <span className="paleta-picker__swatch-nombre">{c.nombre}</span>
                <button type="button" className="paleta-picker__swatch-quitar" onClick={() => quitarColor(i)} aria-label={`Quitar ${c.nombre}`}>
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="opciones-card__acciones">
          <button type="button" className="btn btn--fantasma btn--chico" onClick={usarPaletaEjemplo}>
            Usar paleta de ejemplo
          </button>
          <button type="button" className="btn btn--principal btn--chico" onClick={() => setPaso(6)} disabled={paleta.length === 0}>
            Continuar
          </button>
        </div>
        {paleta.length === 0 && (
          <p className="opciones-card__pista">Este paso es obligatorio: la paleta es parte de tu identidad de marca.</p>
        )}
      </div>
    )
  } else if (paso === 6) {
    tarjeta = (
      <div className="opciones-card opciones-card--subir">
        <p className="opciones-card__pista opciones-card__pista--activa">
          Sirve para definir audiencias y, más adelante, traer resultados de tus campañas.
        </p>
        <button type="button" className="opciones-card__item" onClick={() => { setMetaAdsElegido('conectado'); setPaso(7) }}>
          <span>Conectar Meta Ads</span>
        </button>
        <button type="button" className="opciones-card__item opciones-card__item--saltear" onClick={() => { setMetaAdsElegido('saltado'); setPaso(7) }}>
          <span>Ahora no</span>
        </button>
      </div>
    )
  }

  return (
    <div className="onboarding-chat">
      <div className="chat-vista">
        <div className="chat-vista__encabezado">
          <span className="chat-vista__nombre" style={{ cursor: 'default' }}>Bienvenida a Pautia</span>
        </div>

        <div className="chat-vista__mensajes" aria-live="polite">
          <div className="burbuja-sistema">
            ¡Hola, {nombreNegocio}! Contame de tu negocio: qué vendés, hace cuánto tiempo y a quién le
            vendés. No hace falta que sea perfecto, después lo repasamos juntos.
          </div>

          {paso >= 1 && <div className="burbuja-usuario">{respuestaNegocio}</div>}
          {paso >= 1 && <div className="burbuja-sistema">¿Hace cuánto tenés el negocio?</div>}

          {paso >= 2 && <div className="burbuja-usuario">{respTiempo}</div>}
          {paso >= 2 && <div className="burbuja-sistema">¿A quién le vendés más seguido?</div>}

          {paso >= 3 && <div className="burbuja-usuario">{respAQuien}</div>}
          {paso >= 3 && (
            <div className="burbuja-sistema">
              Si tenés un catálogo de productos armado, subilo o conectá Tiendanube — si no, seguimos igual.
            </div>
          )}

          {paso >= 4 && (
            <div className="burbuja-usuario">
              {catalogoElegido === 'tiendanube' && 'Conectar Tiendanube'}
              {catalogoElegido === 'archivo' && `Cargué "${archivoNombre}"`}
              {catalogoElegido === 'saltado' && 'Sigamos sin catálogo por ahora.'}
            </div>
          )}
          {paso >= 4 && <div className="burbuja-sistema">{resumenCompuesto}</div>}
          {paso >= 4 && <div className="burbuja-sistema">{tonoInferido}</div>}

          {resumenAjustado && (
            <>
              <div className="burbuja-usuario">{ajusteResumenTexto}</div>
              <div className="burbuja-sistema">Ajustado, gracias por la corrección. Lo vamos a tener en cuenta en tus campañas.</div>
            </>
          )}

          {paso >= 5 && (
            <div className="burbuja-sistema">
              Ahora contame los colores de tu marca — la identidad visual importa tanto como el copy.
            </div>
          )}

          {paso >= 6 && (
            <div className="burbuja-usuario burbuja-usuario--fotos">
              <div className="paleta-picker__lista paleta-picker__lista--resumen">
                {paleta.map((c, i) => (
                  <div key={`${c.hex}-${i}`} className="paleta-picker__swatch paleta-picker__swatch--chico">
                    <span className="paleta-picker__swatch-color" style={{ background: c.hex }} aria-hidden="true" />
                    <span className="paleta-picker__swatch-nombre">{c.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {paso >= 6 && (
            <div className="burbuja-sistema">
              Última cosa: ¿querés conectar Meta Ads ahora? Podés hacerlo más adelante sin problema.
            </div>
          )}

          {paso >= 7 && (
            <div className="burbuja-usuario">
              {metaAdsElegido === 'conectado' ? 'Conectar Meta Ads' : 'Ahora no, más adelante.'}
            </div>
          )}
          {paso >= 7 && (
            <>
              <div className="burbuja-sistema">
                ¡Listo! Ya tenemos lo que necesitamos para armar tu primera campaña.
              </div>
              <button type="button" className="btn btn--principal chat-vista__accion" onClick={onFinalizar}>
                Entrar a Pautia
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
            disabled={paso !== 3}
            aria-label="Subir archivo de catálogo"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05 12.25 20.24a5 5 0 0 1-7.07-7.07l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </button>
          <input type="file" accept=".csv,.xls,.xlsx" ref={archivoRef} onChange={handleArchivo} hidden />

          <input
            type="text"
            className="chat-vista__campo"
            placeholder={
              paso === 0
                ? 'Contame tu negocio…'
                : paso <= 2
                ? 'Escribí tu respuesta, o salteá la pregunta'
                : paso === 4 && corrigiendoResumen && !resumenAjustado
                ? 'Contame qué corregir'
                : 'Seguí con las opciones de arriba'
            }
            value={inputValor}
            onChange={(e) => setInputValor(e.target.value)}
            disabled={!puedeEscribirLibre}
            aria-label="Escribí tu mensaje"
          />
          <button type="submit" className="chat-vista__enviar" disabled={!puedeEscribirLibre || !inputValor.trim()} aria-label="Enviar mensaje">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
