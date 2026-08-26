import './PostIt.css'

/* Sugerencia de campaña, con la forma de un post-it — referencia que
   trajo el equipo. Versión minimalista: sin renglones ni doblez,
   solo papel, alfiler y una leve inclinación. */
export default function PostIt({ titulo, motivo, giro = -1.5, onClick }) {
  return (
    <article className="postit" style={{ '--giro': `${giro}deg` }}>
      <span className="postit__pin" aria-hidden="true" />
      <h3>{titulo}</h3>
      <p>{motivo}</p>
      <button type="button" className="postit__cta" onClick={onClick}>
        Armar esta campaña →
      </button>
    </article>
  )
}
