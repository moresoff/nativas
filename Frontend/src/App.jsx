import { useState } from 'react'
import Layout from './componentes/Layout'
import Home from './vistas/Home'
import NuevaCampana from './vistas/NuevaCampana'
import TuInfo from './vistas/TuInfo'

/* Navegación mínima entre las vistas que ya existen.
   Sin lógica de negocio: solo decide qué pantalla mostrar. */
const ITEM_ACTIVO_POR_VISTA = { home: 'home', 'tu-info': 'info' }

export default function App() {
  const [vista, setVista] = useState('home')

  const irAHome = () => setVista('home')
  const irANuevaCampana = () => setVista('nueva-campana')
  const irATuInfo = () => setVista('tu-info')

  return (
    <Layout
      activa={ITEM_ACTIVO_POR_VISTA[vista] ?? 'campanas'}
      onIrHome={irAHome}
      onIrInfo={irATuInfo}
      pantallaCompleta={vista === 'nueva-campana'}
    >
      {vista === 'home' && <Home onNuevaCampana={irANuevaCampana} />}
      {vista === 'nueva-campana' && <NuevaCampana onVolver={irAHome} />}
      {vista === 'tu-info' && <TuInfo />}
    </Layout>
  )
}
