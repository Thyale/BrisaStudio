import ImgTecnologia from "../assets/Sgv/mobile-animate.svg"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Tecnologia() {

  useEffect(() => {
    ScrollReveal().reveal(".ContainerTecnologia", {
      duration: 1000,
      origin: "bottom", 
      distance: "50px", 
      delay: 200, 
      easing: "ease-in-out", 
      reset: false,
    });
  }, []);

  return (
    <div className="ContainerTecnologia">
        <div>
            <img src={ImgTecnologia} alt="Ilustração fictícia sobre tecnologia" />
        </div>
        <div className="ContainerTecnologia_Textos">
           <h2>Tecnologia Inteligente: Viva a Experiência da Alexa</h2>
           <p>Nosso espaço é totalmente integrado à Alexa! Controle a iluminação, o ar-condicionado e até mesmo as persianas por comandos de voz. Conforto e praticidade ao seu alcance!</p>
           <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_Blank">Saiba Mais</a>
        </div>
    </div>
  )
}

export default Tecnologia
