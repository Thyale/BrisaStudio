import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Capa() {

  useEffect(() => {
    ScrollReveal().reveal(".ContainerCapa", {
      duration: 1000,
      origin: "left", 
      distance: "50px",
      delay: 200, 
      easing: "ease-in-out", 
      reset: true, 
    });
  }, []);

    return (
      <div className="ContainerCapa">
        <h1>Descubra um refúgio perfeito para sua estadia!</h1>
        <p>Experimente conforto, tecnologia e uma localização privilegiada neste incrível espaço projetado para garantir sua melhor experiência</p>
        <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_Blank">Reserve agora no Airbnb</a>
      </div>
    )
  }
  
  export default Capa
  