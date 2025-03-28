import ImgAreaExternaCapa from "../assets/images/ImgAreaExternaCapa.jpeg"
import ImgAreaExterna1 from "../assets/images/ImgAreaExterna1.jpeg"
import ImgAreaExterna2 from "../assets/images/ImgAreaExterna2.jpeg"
import ImgAreaExterna3 from "../assets/images/ImgAreaExterna3.jpeg"

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function AreaExterna() {

    useEffect(() => {
        ScrollReveal().reveal(".ContainerAreaExterna", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: true,
        });
      }, []);

    return (
        <div className="ContainerAreaExterna">
            <div className="ContainerAreaExterna_Textos">
                <h2>Área de Lazer: Diversão e Relaxamento</h2>
                <p className="ContainerAreaExterna_Textos_Subtitle">Desfrute de uma área de lazer completa, ideal para momentos inesquecíveis.</p>
                <p className="ContainerAreaExterna_Textos_Info">(Arraste para o lado para ver mais fotos)</p>
                <ul>
                    <li>Área de jantar externa</li>
                    <li>Cozinha compartilhada ao ar livre</li>
                    <li>Churrasqueira</li>
                    <li>Itens básicos de praia</li>
                    <li>Piscina relaxante</li>
                </ul>
            </div>
            <div className="ContainerAreaExterna_Imgs">
                <img src={ImgAreaExternaCapa} alt="Imagem da área externa" />
                <img src={ImgAreaExterna1} alt="Imagem da área externa" />
                <img src={ImgAreaExterna2} alt="Imagem da área externa" />
                <img src={ImgAreaExterna3} alt="Imagem da área externa" />
            </div>
        </div>
    )
  }
  
  export default AreaExterna
  