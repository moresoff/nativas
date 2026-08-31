import { useState } from 'react'
import Layout from './componentes/Layout'
import Home from './vistas/Home'
import Ideacion from './vistas/Ideacion'
import NuevaCampana from './vistas/NuevaCampana'
import TuInfo from './vistas/TuInfo'
import Campanas from './vistas/Campanas'
import Reportes from './vistas/Reportes'

/* Navegación mínima entre las vistas que ya existen.
   Sin lógica de negocio: solo decide qué pantalla mostrar. */
const ITEM_ACTIVO_POR_VISTA = { home: 'home', ideacion: 'ideacion', campanas: 'campanas', reportes: 'reportes', 'tu-info': 'info' }

export default function App() {
  const [vista, setVista] = useState('home')

  const irAHome = () => setVista('home')
  const irAIdeacion = () => setVista('ideacion')
  const irANuevaCampana = () => setVista('nueva-campana')
  const irATuInfo = () => setVista('tu-info')
  const irACampanas = () => setVista('campanas')
  const irAReportes = () => setVista('reportes')

  return (
    <Layout
      activa={ITEM_ACTIVO_POR_VISTA[vista] ?? 'home'}
      onIrHome={irAHome}
      onIrIdeacion={irAIdeacion}
      onIrCampanas={irACampanas}
      onIrReportes={irAReportes}
      onIrInfo={irATuInfo}
      pantallaCompleta={vista === 'nueva-campana'}
    >
      {vista === 'home' && <Home onNuevaCampana={irANuevaCampana} onVerCampanas={irACampanas} onVerIdeacion={irAIdeacion} />}
      {vista === 'ideacion' && <Ideacion onVolver={irAHome} onNuevaCampana={irANuevaCampana} />}
      {vista === 'nueva-campana' && <NuevaCampana onVolver={irAHome} />}
      {vista === 'tu-info' && <TuInfo />}
      {vista === 'campanas' && <Campanas onVolver={irAHome} onNuevaCampana={irANuevaCampana} />}
      {vista === 'reportes' && <Reportes onVolver={irAHome} onNuevaCampana={irANuevaCampana} />}
    </Layout>
  )
}
