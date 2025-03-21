import AreaExterna from "./Componentes/AreaExterna"
import FotosInternas from "./Componentes/FotosInternas"
import HeaderSuperior from "./Componentes/HeaderSuperior"
import InfosContainer from "./Componentes/InfosContainer"
import SessInicial from "./Componentes/SessInicial"
import Tecnologia from "./Componentes/Tecnologia"

function App() {
  return (
    <>
      <HeaderSuperior/>
      <SessInicial/>
      <Tecnologia/>
      <FotosInternas/>
      <InfosContainer/>
      <AreaExterna/>
    </>
  )
}

export default App
