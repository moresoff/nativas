import './PostIt.css'

/* Variante editable del post-it — a diferencia de PostIt (sugerencia
   fija, con CTA), esta es un espacio en blanco para anotaciones
   rápidas del usuario. Estado local nada más: no se guarda en
   ningún lado, se reinicia si cambiás de producto. */
export default function PostItNota({ valor, onChange, giro = -1, placeholder = 'Anotá algo…' }) {
  return (
    <article className="postit postit--nota" style={{ '--giro': `${giro}deg` }}>
      <span className="postit__pin" aria-hidden="true" />
      <h3>Notas</h3>
      <textarea
        className="postit__textarea"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
      />
    </article>
  )
}
