import './TarjetaCampana.css'

/* El estado ya no es un chip arriba, al lado del título: es lo último
   que se lee, un punto de color tipo semáforo — se entiende de un
   vistazo sin competir con el nombre de la campaña. */
const ESTADOS = {
  activa: { texto: 'Dando resultados', clase: 'estado-punto--activa' },
  lista: { texto: 'Para revisar', clase: 'estado-punto--lista' },
  borrador: { texto: 'Recién arrancando', clase: 'estado-punto--borrador' },
}

export default function TarjetaCampana({ campana, onVer }) {
  const estado = ESTADOS[campana.estado]

  return (
    <article className="tarjeta tarjeta-campana">
      <div
        className={'foto-placeholder' + (campana.foto ? ' foto-placeholder--con-foto' : '')}
        aria-hidden="true"
      >
        {campana.foto ? (
          <img src={campana.foto} alt="" className="foto-placeholder__img" />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
            <circle cx="12" cy="13" r="3.2" />
          </svg>
        )}
      </div>

      <div className="tarjeta-campana__texto">
        <h3>{campana.titulo}</h3>
        <p className="tarjeta-campana__detalle">{campana.detalle}</p>

        <p className="tarjeta-campana__meta">
          <span className={'estado-punto ' + estado.clase} aria-hidden="true" />
          <span>{estado.texto}</span>
          <span className="tarjeta-campana__separador" aria-hidden="true">·</span>
          <span>{campana.resultado}</span>
        </p>
      </div>

      <button type="button" className="btn btn--secundario btn--chico" onClick={() => onVer?.(campana.id)}>
        Ir
      </button>
    </article>
  )
}
