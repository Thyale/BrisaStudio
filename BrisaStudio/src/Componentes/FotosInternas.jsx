import FotoApartamento1 from "../assets/images/ImgAreaInterna7.jpeg"
import FotoApartamento2 from "../assets/images/ImgAreaInterna1.jpeg"
import FotoApartamento3 from "../assets/images/ImgAreaInterna2.jpeg"
import FotoApartamento4 from "../assets/images/ImgAreaInterna3.jpeg"
import FotoApartamento5 from "../assets/images/ImgAreaInterna4.jpeg"
import FotoApartamento6 from "../assets/images/ImgAreaInterna5.jpeg"
import FotoApartamento7 from "../assets/images/ImgAreaInterna6.jpeg"

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function FotosInternas() {

    useEffect(() => {
        ScrollReveal().reveal(".ContainerFotosInternas", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: true,
        });
      }, []);

    return (
        <div className="ContainerFotosInternas">
            <div className="ContainerFotosInternas_Textos">
                <h2>Ambiente Interno: Conforto e Sofisticação</h2>
                <p className="ContainerFotosInternas_Textos_Subtitle">Curta cada detalhe do nosso espaço interno, pensado para proporcionar o máximo de bem-estar.</p>
                <p className="ContainerFotosInternas_Textos_Info">(Arraste para o lado para ver mais fotos)</p>
            </div>
            <div className="ContainerFotosInternas_Imgs">
                <img src={FotoApartamento1} alt="Fotos da área interna do apartamento" />
                <img src={FotoApartamento5} alt="Fotos da área interna do apartamento" />
                <img src={FotoApartamento3} alt="Fotos da área interna do apartamento" />
                <img src={FotoApartamento2} alt="Fotos da área interna do apartamento" />
                <img src={FotoApartamento4} alt="Fotos da área interna do apartamento" />
                <img src={FotoApartamento6} alt="Fotos da área interna do apartamento" />
                <img src={FotoApartamento7} alt="Fotos da área interna do apartamento" />
            </div>
        </div>
    )
  }
  
  export default FotosInternas
  