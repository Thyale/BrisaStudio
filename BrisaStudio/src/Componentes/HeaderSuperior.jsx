import IconAirbnbHeader from "../assets/images/IconAirbnbHeader.png"
import IconWhatsAppHeader from "../assets/images/IconWhatsAppHeader.png"

function HeaderSuperior() {
    return (
      <>
        <div className="ContainerHeaderSuperior">
            <a href="https://wa.me/5581992380227?text=Gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel%20Brisa%20Studio." target="_Blank" className="ContainerHeaderSuperior_BtnWhats">
                <img src={IconWhatsAppHeader} alt="ícone do WhatsApp" />
                <p>WhatsApp</p>
            </a>
            <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_Blank" className="ContainerHeaderSuperior_BtnAirbnb">
                <img src={IconAirbnbHeader} alt="ícone do Airbnb" />
                <p>Reserva Airbnb</p>
            </a>
        </div>
      </>
    )
  }
  
  export default HeaderSuperior
  