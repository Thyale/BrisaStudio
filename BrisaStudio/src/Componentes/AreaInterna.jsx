import ImgAreaInterna1 from "../assets/images/ImgAreaInterna7.jpeg"
import ImgAreaInterna2 from "../assets/images/ImgAreaInterna2.jpeg"
import ImgAreaInterna3 from "../assets/images/ImgAreaInterna3.jpeg"
import ImgAreaInterna4 from "../assets/images/ImgAreaInterna4.jpeg"
import ImgAreaInterna5 from "../assets/images/ImgAreaInterna5.jpeg"
import ImgAreaInterna6 from "../assets/images/ImgAreaInterna6.jpeg"

function AreaInterna() {
  return (
    <div  className="ContainerAreaInterna">
        <div className="ContainerAreaInterna_Texts">
            <h2>Ambiente Interno: Conforto e Sofisticação</h2>
            <p>Curta cada detalhe do nosso espaço interno, pensado para proporcionar o máximo de bem-estar.</p>
        </div>
        <div className="ContainerAreaInterna_ContainerImgs">
            <img src={ImgAreaInterna1} alt="Imagem do apartamento, área Interna" />
            <img src={ImgAreaInterna2} alt="Imagem do apartamento, área Interna" />
            <img src={ImgAreaInterna3} alt="Imagem do apartamento, área Interna" />
            <img src={ImgAreaInterna4} alt="Imagem do apartamento, área Interna" />
            <img src={ImgAreaInterna5} alt="Imagem do apartamento, área Interna" />
            <img src={ImgAreaInterna6} alt="Imagem do apartamento, área Interna" />
        </div>
    </div>
  )
}

export default AreaInterna
