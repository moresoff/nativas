import { useState } from 'react'
import './CrearCuenta.css'

/* Form mínimo de cuenta. El nombre del negocio se pide acá (no en el
   chat) porque hace a la identidad de marca junto con la paleta de
   colores — no algo que se infiera de texto libre. */
export default function CrearCuenta({ onVolver, onCrear }) {
  const [nombreNegocio, setNombreNegocio] = useState('')
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')

  const listo = nombreNegocio.trim() && email.trim() && contrasena.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!listo) return
    onCrear({ nombreNegocio: nombreNegocio.trim(), email: email.trim() })
  }

  return (
    <div className="crear-cuenta">
      <div className="crear-cuenta__tarjeta">
        <button type="button" className="btn btn--fantasma btn--chico crear-cuenta__volver" onClick={onVolver}>
          ← Volver
        </button>

        <div>
          <h1 className="crear-cuenta__titulo">Creá tu cuenta</h1>
          <p className="crear-cuenta__bajada">
            Con esto arrancamos. El resto de tu negocio lo contás en el chat que sigue.
          </p>
        </div>

        <form className="crear-cuenta__form" onSubmit={handleSubmit}>
          <label className="crear-cuenta__campo">
            <span className="rotulo">Nombre del negocio</span>
            <input
              type="text"
              value={nombreNegocio}
              onChange={(e) => setNombreNegocio(e.target.value)}
              placeholder="Ej: Van Luz"
              autoFocus
              required
            />
          </label>

          <label className="crear-cuenta__campo">
            <span className="rotulo">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vos@tunegocio.com"
              required
            />
          </label>

          <label className="crear-cuenta__campo">
            <span className="rotulo">Contraseña</span>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          <button type="submit" className="btn btn--principal crear-cuenta__submit" disabled={!listo}>
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  )
}
