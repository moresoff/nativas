import './BloqueTexto.css'

/* El componente que más se usa en Pautia: donde vive lo que el producto
   realmente entrega (copy, términos y condiciones, resúmenes). Blanco
   sólido a propósito — nada de vidrio acá, es texto que hay que poder
   leer y revisar palabra por palabra. */
export default function BloqueTexto({ etiqueta, children }) {
  return (
    <div className="bloque-texto">
      <p className="rotulo bloque-texto__etiqueta">{etiqueta}</p>
      <p className="bloque-texto__contenido">{children}</p>
      <div className="bloque-texto__acciones">
        <button type="button" className="btn btn--fantasma btn--chico">
          Copiar
        </button>
        <button type="button" className="btn btn--fantasma btn--chico">
          Editar
        </button>
      </div>
    </div>
  )
}
