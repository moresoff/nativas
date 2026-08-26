import './Layout.css'

const MENU = [
  { id: 'home', etiqueta: 'Home' },
  { id: 'campanas', etiqueta: 'Campañas' },
  { id: 'reportes', etiqueta: 'Reportes' },
  { id: 'info', etiqueta: 'Tu info' },
  { id: 'faq', etiqueta: 'Preguntas frecuentes' },
]

/* Estructura que se repite en todas las pantallas:
   barra lateral a la izquierda, barra superior arriba, contenido en el medio.
   Solo "Home" navega de verdad por ahora — el resto de las pantallas
   todavía no existen, quedan como referencia visual del menú completo. */
export default function Layout({ activa = 'home', onIrHome, pantallaCompleta = false, children }) {
  return (
    <div className="layout">
      <aside className="lateral">
        <div className="lateral__marca">Pautia</div>

        <nav className="lateral__menu" aria-label="Navegación principal">
          {MENU.map((item) => (
            <button
              key={item.id}
              className={
                'lateral__item' + (item.id === activa ? ' lateral__item--activo' : '')
              }
              aria-current={item.id === activa ? 'page' : undefined}
              onClick={item.id === 'home' ? onIrHome : undefined}
            >
              {item.etiqueta}
            </button>
          ))}
        </nav>

        <button className="lateral__item lateral__item--pie">Configuración</button>
      </aside>

      <div className="principal">
        <header className="superior">
          <div className="superior__acciones">
            <button className="icono" aria-label="Notificaciones">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.7 21a2 2 0 0 1-3.4 0" />
              </svg>
            </button>
            <button className="perfil" aria-label="Tu perfil">VL</button>
          </div>
        </header>

        <main className={'contenido' + (pantallaCompleta ? ' contenido--pantalla-completa' : '')}>
          {children}
        </main>
      </div>
    </div>
  )
}
