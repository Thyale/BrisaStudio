import imgFinal from "../assets/Sgv/thinking-face-animate.svg"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Final() {
  useEffect(() => {
    ScrollReveal().reveal(".ContainerFinal_Div", {
      duration: 1000,
      origin: "left", 
      distance: "50px", 
      delay: 200, 
      easing: "ease-in-out", 
      reset: true,
    });
  }, []);
  return (
    <div className="ContainerFinal">
        <div className="ContainerFinal_Div">
          <img src={imgFinal} alt="Ilustração do final" />
          <div className="ContainerFinal_Div_Texts">
              <h2>Se interessou?</h2>
              <p className="ContainerFinal_Div_Texts_Subtitle1">Reserve agora e tenha uma estadia inesquecível!  
              Venha viver essa experiência com conforto, tecnologia e uma localização perfeita.</p>
              <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_Blank">Reservar no Airbnb</a>
          </div>
        </div>
    </div>
  )
}

export default Final
