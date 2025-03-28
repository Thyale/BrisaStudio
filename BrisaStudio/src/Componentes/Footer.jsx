import Logo from "../assets/images/Logo.png"
import IcomWhats from "../assets/images/IconWhatsAppFooter.png"
import IconAirbnb from "../assets/images/IconAirbnbFooter.png"
import Iconinsta from "../assets/images/IconInsta.png"

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Footer() {
    useEffect(() => {
        ScrollReveal().reveal(".Footer_ContainerInfos", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: false,
        });
      }, []);
    return (
    <footer>
        <div className="Footer_DivImg">
            <img src={Logo} alt="Logo do Brisa Studio" />
        </div>
        <div className="Footer_ContainerInfos">
            <div>
                <h2>Novidades</h2>
                <p>Siga nosso Instagram e acompanhe promoções, dicas e tudo sobre o Brisa Studio.</p>
                <a href="https://www.instagram.com/brisastudiooficial/" target="_Blank" className="Footer_ContainerInfos_Btn">
                   <img src={Iconinsta} alt="icone do instagram" />
                   Instagram
                </a>
            </div>
            <div>
                <h2>Aluguel</h2>
                <p>Hospede-se com conforto e aproveite dias inesquecíveis. Faça sua reserva agora!</p>
                <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_Blank" className="Footer_ContainerInfos_Btn">
                    <img src={IconAirbnb} alt="icone do Airbnb" />
                    Airbnb
                </a>
            </div>
            <div>
                <h2>Contato</h2>
                <p>Tem dúvidas ou quer mais informações? Chame a gente no WhatsApp!</p>
                <a href="https://wa.me/5581992380227?text=Gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel%20Brisa%20Studio." target="_Blank" className="Footer_ContainerInfos_Btn">
                    <img src={IcomWhats} alt="icone do Whats" />
                    WhatsApp
                </a> 
            </div>
        </div>
    </footer>
    )
  }
  
export default Footer
  