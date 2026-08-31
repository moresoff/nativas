import { useState } from 'react'
import './BloqueTexto.css'

/* El componente que más se usa en Pautia: donde vive lo que el producto
   realmente entrega (copy, términos y condiciones, resúmenes). Blanco
   sólido a propósito — nada de vidrio acá, es texto que hay que poder
   leer y revisar palabra por palabra. Editable in situ: "Editar" abre
   un textarea y "Guardar" avisa al padre del nuevo valor. */
export default function BloqueTexto({ etiqueta, value, onGuardar }) {
  const [editando, setEditando] = useState(false)
  const [borrador, setBorrador] = useState(value)

  const empezarEdicion = () => {
    setBorrador(value)
    setEditando(true)
  }

  const guardar = () => {
    onGuardar(borrador)
    setEditando(false)
  }

  const cancelar = () => {
    setBorrador(value)
    setEditando(false)
  }

  return (
    <div className="bloque-texto">
      <p className="rotulo bloque-texto__etiqueta">{etiqueta}</p>

      {editando ? (
        <textarea
          className="bloque-texto__campo"
          value={borrador}
          onChange={(e) => setBorrador(e.target.value)}
          rows={4}
          autoFocus
        />
      ) : (
        <p className="bloque-texto__contenido">{value}</p>
      )}

      <div className="bloque-texto__acciones">
        {editando ? (
          <>
            <button type="button" className="btn btn--fantasma btn--chico" onClick={cancelar}>
              Cancelar
            </button>
            <button type="button" className="btn btn--principal btn--chico" onClick={guardar}>
              Guardar
            </button>
          </>
        ) : (
          <>
            <button type="button" className="btn btn--fantasma btn--chico" onClick={() => navigator.clipboard?.writeText(value)}>
              Copiar
            </button>
            <button type="button" className="btn btn--fantasma btn--chico" onClick={empezarEdicion}>
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  )
}
