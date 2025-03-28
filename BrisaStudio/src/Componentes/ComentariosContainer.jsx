import Comentarios from "./Comentarios"
import imgcomentario1 from "../assets/images/ImgComentario1.png"
import imgcomentario2 from "../assets/images/ImgComentario2.png"
import ImgComentario3 from "../assets/images/ImgComentario3.jpeg"

function ComentariosContainer() {
    return (
        <div className="ContainerComentariosContainer">
            <div>
                <Comentarios img={ImgComentario3}name="Carol" text="Adorei a hospedagem. Limpo, extremamente organizado. A cama é bem confortável. A cozinha tem todos os equipamentos necessários, adorei! No último andar do prédio tem piscina e é ótima, gostei bastante. Fácil localização. A anfitriã foi ótima, respondeu as minhas dúvidas. Voltarei mais vezes."/>
                <Comentarios img={imgcomentario2} name="fábio" text="Tudo muito organizando, e aconchegante. Tudo tecnológico, e novinho. A cama super confortável."/>
                <Comentarios img={imgcomentario1} name="Deivison" text="Minha estadia foi incrível! O flat é altamente tecnológico, com um check-in facilitado que torna tudo mais prático. A piscina é ótima, e o ambiente no geral é muito confortável. Recomendo a todos que buscam uma experiência moderna e agradável no Airbnb!"/>
            </div>
            <a href="https://www.airbnb.com.br/rooms/1343039998077854644?source_impression_id=p3_1741390927_P3wiD7qpC9DTRR70&check_in=2025-03-21&guests=2&adults=2&check_out=2025-03-23" target="_blank">Veja mais avaliações</a>
        </div>
    )
  }
  
export default ComentariosContainer
  