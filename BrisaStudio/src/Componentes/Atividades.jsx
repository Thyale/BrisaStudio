import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Atividades({ img, title, subtitle, link, style, linkStyle, subtitleStyle }) {
    useEffect(() => {
        ScrollReveal().reveal(".ContainerAtividades", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: true,
        });
      }, []);
    return (
        <div className="ContainerAtividades" style={style}>
            <img src={img} alt="Imagem do lugar citado no card" />
            <h3>{title}</h3>
            <p style={subtitleStyle}>{subtitle}</p>
            <a href={link} target="_Blank" style={linkStyle}>SAIBA MAIS</a> 
        </div>
    )
}

export default Atividades;
