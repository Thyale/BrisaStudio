import Infos from "./Infos"

import imgAr from "../assets/images/ar-condicionado.png"
import imgArmario from "../assets/images/armario-de-cozinha.png"
import imgCafeteira from "../assets/images/cafeteira-inteligente.png"
import imgCamera from "../assets/images/camera-de-seguranca.png"
import imgFechadura from "../assets/images/fechadura-da-porta.png"
import imgChurrasco from "../assets/images/grade.png"

function InfosContainer() {
  return (
    <div className="ContainerInfos">
        <Infos img={imgAr} text="Ar-condicionado"/>
        <Infos img={imgArmario} text="Cozinha completa"/>
        <Infos img={imgCafeteira} text="Cafeteira elétrica"/>
        <Infos img={imgCamera} text="Câmeras de segurança"/>
        <Infos img={imgFechadura} text="Fechadura inteligente"/>
        <Infos img={imgChurrasco} text="Utensílios para churrasco"/>
    </div>
  )
}

export default InfosContainer
