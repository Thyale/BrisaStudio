import IconAirbnbHeader from "../assets/images/IconAirbnbHeader.png"
import IconWhatsAppHeader from "../assets/images/IconWhatsAppHeader.png"

function HeaderSuperior() {
    return (
      <>
        <div className="ContainerHeaderSuperior">
            <a href="" className="ContainerHeaderSuperior_BtnWhats">
                <img src={IconWhatsAppHeader} alt="ícone do WhatsApp" />
                <p>WhatsApp</p>
            </a>
            <a href="" className="ContainerHeaderSuperior_BtnAirbnb">
                <img src={IconAirbnbHeader} alt="ícone do Airbnb" />
                <p>Reserva Airbnb</p>
            </a>
        </div>
      </>
    )
  }
  
  export default HeaderSuperior
  