import AreaExterna from "./Componentes/AreaExterna"
import FotosInternas from "./Componentes/FotosInternas"
import HeaderSuperior from "./Componentes/HeaderSuperior"
import InfosContainer from "./Componentes/InfosContainer"
import SessInicial from "./Componentes/SessInicial"
import SaibaMais from "./Componentes/SaibaMais"
import Tecnologia from "./Componentes/Tecnologia"
import Mapa from "./Componentes/Mapa"
import AtividadesContainer from "./Componentes/AtividadesContainer"
import ComentariosContainer from "./Componentes/ComentariosContainer"
import Final from "./Componentes/Final"
import Footer from "./Componentes/Footer"
import Creditos from "./Componentes/Creditos"

function App() {
  return (
    <>
      <HeaderSuperior/>
        <SessInicial/>
        <Tecnologia/>
        <FotosInternas/>
        <InfosContainer/>
        <AreaExterna/>
        <SaibaMais/>
        <Mapa/>
        <AtividadesContainer/>
        <ComentariosContainer/>
        <Final/>
      <Footer/>
      <Creditos/>
    </>
  )
}

export default App
