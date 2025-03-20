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
      /*Sessão Fotos internas do apartamento*/
      <InfosContainer/>
    </>
  )
}

export default App
