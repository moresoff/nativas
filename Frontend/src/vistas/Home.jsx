import { pyme, resultados, campanas, sugerencias } from '../datos/simulados'
import TarjetaCampana from '../componentes/TarjetaCampana'
import CarruselResultados from '../componentes/CarruselResultados'
import PostIt from '../componentes/PostIt'
import './Home.css'

export default function Home({ onNuevaCampana }) {
  return (
    <div className="home">
      {/* Saludo y acción principal */}
      <section className="home__saludo">
        <div>
          <h1>¡Hola, {pyme.nombre}!</h1>
          <p className="home__bajada">
            Contale a Pautia qué querés lograr y armamos juntos el segmento, el copy y
            los términos y condiciones de tu próxima campaña.
          </p>
        </div>
        <button className="btn btn--principal home__cta" onClick={onNuevaCampana}>
          Nueva campaña
        </button>
      </section>

      {/* Tus resultados */}
      <section className="home__seccion">
        <div className="home__titulo">
          <h2>Tus resultados</h2>
        </div>

        <CarruselResultados resultados={resultados} />
      </section>

      {/* Tus campañas */}
      <section className="home__seccion">
        <div className="home__titulo">
          <h2>Tus campañas</h2>
          <button className="btn btn--fantasma btn--chico">Ver todas</button>
        </div>

        <div className="home__lista">
          {campanas.map((c) => (
            <TarjetaCampana campana={c} key={c.id} />
          ))}
        </div>
      </section>

      {/* Sugerencias */}
      <section className="home__seccion">
        <div className="home__titulo">
          <h2>Sugerencias para tu negocio</h2>
        </div>

        <div className="home__sugerencias">
          {sugerencias.map((s, i) => (
            <PostIt
              key={s.id}
              titulo={s.titulo}
              motivo={s.motivo}
              giro={i % 2 === 0 ? -1.5 : 1.5}
              onClick={onNuevaCampana}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
