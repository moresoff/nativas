import { useState } from 'react'
import Layout from './componentes/Layout'
import Home from './vistas/Home'
import NuevaCampana from './vistas/NuevaCampana'

/* Navegación mínima entre las vistas que ya existen.
   Sin lógica de negocio: solo decide qué pantalla mostrar. */
export default function App() {
  const [vista, setVista] = useState('home')

  const irAHome = () => setVista('home')
  const irANuevaCampana = () => setVista('nueva-campana')

  return (
    <Layout
      activa={vista === 'home' ? 'home' : 'campanas'}
      onIrHome={irAHome}
      pantallaCompleta={vista === 'nueva-campana'}
    >
      {vista === 'home' && <Home onNuevaCampana={irANuevaCampana} />}
      {vista === 'nueva-campana' && <NuevaCampana onVolver={irAHome} />}
    </Layout>
  )
}
