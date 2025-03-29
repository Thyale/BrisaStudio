import ImgSaibaMais from "../assets/Sgv/load-more-animate.svg"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
function SaibaMais() {

  useEffect(() => {
    ScrollReveal().reveal(".ContainerSaibaMais", {
      duration: 1000,
      origin: "left", 
      distance: "50px", 
      delay: 200, 
      easing: "ease-in-out", 
      reset: false,
    });
  }, []);

  return (
    <div className="ContainerSaibaMais">
        <div className="ContainerSaibaMais_Div">
          <img src={ImgSaibaMais} alt="Ilustração de saiba mais" />
          <div className="ContainerSaibaMais_Div_Texts">
              <h2>Quer Saber Mais?</h2>
              <p className="ContainerSaibaMais_Div_Texts_Subtitle1">Aqui você viu um pouco sobre o ambiente interno, as comodidades e a área de lazer, mas ainda tem muito mais!</p>
              <p className="ContainerSaibaMais_Div_Texts_Subtitle2">Clique no botão abaixo para conferir todas as informações, datas disponíveis e valores, que variam conforme a temporada e duração da estadia.  
              </p>
              <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_Blank">Ver no Airbnb</a>
          </div>
        </div>
    </div>
  )
}

export default SaibaMais
