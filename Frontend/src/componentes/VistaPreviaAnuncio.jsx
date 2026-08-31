import './VistaPreviaAnuncio.css'

/* Mockup de cómo queda el anuncio armado (foto + copy + link de
   acción) — no una herramienta de configuración de ads real, solo la
   vista previa. Se usa en Ficha de campaña y en el chat de Nueva
   campaña, con los mismos datos (foto, copy, nombre del negocio). */
export default function VistaPreviaAnuncio({ nombreNegocio, foto, copy }) {
  const inicial = nombreNegocio?.trim()?.[0]?.toUpperCase() ?? '?'

  return (
    <div className="vista-previa-anuncio">
      <div className="vista-previa-anuncio__header">
        <span className="vista-previa-anuncio__avatar" aria-hidden="true">{inicial}</span>
        <div className="vista-previa-anuncio__marca">
          <p className="vista-previa-anuncio__nombre">{nombreNegocio}</p>
          <p className="vista-previa-anuncio__rotulo">Publicidad</p>
        </div>
      </div>

      <div className="vista-previa-anuncio__foto">
        <img src={foto} alt="" />
      </div>

      <div className="vista-previa-anuncio__cuerpo">
        <p className="vista-previa-anuncio__copy">{copy}</p>
        <p className="vista-previa-anuncio__cta">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 17H7a5 5 0 0 1 0-10h2" />
            <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
            <path d="M8 12h8" />
          </svg>
          Más información
        </p>
      </div>
    </div>
  )
}
