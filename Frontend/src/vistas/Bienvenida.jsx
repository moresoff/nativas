import './Bienvenida.css'

export default function Bienvenida({ onCrearCuenta }) {
  return (
    <div className="bienvenida">
      <div className="bienvenida__marca">Pautia</div>

      <div className="bienvenida__texto">
        <h1 className="bienvenida__titulo">Armá tu próxima campaña en minutos, no en semanas</h1>
        <p className="bienvenida__bajada">
          Contale a Pautia qué vendés y a quién le vendés. Te ayudamos a definir el segmento,
          escribir el copy y armar los términos y condiciones — todo en un chat, sin agencia de por medio.
        </p>
      </div>

      <button type="button" className="btn btn--principal bienvenida__cta" onClick={onCrearCuenta}>
        Crear cuenta
      </button>

      <p className="bienvenida__pie">
        ¿Ya tenés cuenta? <button type="button" onClick={onCrearCuenta}>Iniciar sesión</button>
      </p>
    </div>
  )
}
