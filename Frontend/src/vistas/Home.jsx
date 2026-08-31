import { pyme, resultados, campanas, ideas } from '../datos/simulados'
import TarjetaCampana from '../componentes/TarjetaCampana'
import CarruselResultados from '../componentes/CarruselResultados'
import PostIt from '../componentes/PostIt'
import './Home.css'

export default function Home({ onNuevaCampana, onVerCampanas, onVerIdeacion }) {
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
          <button className="btn btn--fantasma btn--chico" onClick={onVerCampanas}>Ver todas</button>
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
          <button className="btn btn--enlace btn--chico" onClick={onVerIdeacion}>Ver todo</button>
        </div>

        <div className="home__sugerencias">
          {ideas.slice(0, 2).map((idea, i) => (
            <PostIt
              key={idea.id}
              titulo={idea.titulo}
              motivo={idea.motivo || 'Agregala en Ideación.'}
              giro={i % 2 === 0 ? -1.5 : 1.5}
              onClick={onNuevaCampana}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
