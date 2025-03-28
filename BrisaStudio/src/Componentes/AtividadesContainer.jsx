import Atividades from "./Atividades"
import imgMuroAlto from "../assets/images/ImgMuroAlto.jpg"
import ImgPiscinasNaturaisCAPA from "../assets/images/ImgPiscinasNaturaisCAPA.jpg"
import ImgMaracaipe from "../assets/images/ImgMaracaipe.jpg"

function AtividadesContainer() {
    return (
      <div className="ContainerAtividadesContainer">
          <div className="ContainerAtividadesContainer_texts">
            <h2>Localização Privilegiada</h2>
            <p className="ContainerAtividadesContainer_texts_sub1">Nosso imóvel está a poucos minutos da praia, oferecendo a localização perfeita para quem deseja aproveitar o melhor da região. Além de estar a poucos metros do mar, você terá fácil acesso a restaurantes renomados, passeios turísticos imperdíveis e uma vida noturna vibrante. E para ainda mais comodidade, há um <a href="https://maps.app.goo.gl/rDhGGjzB74wNzj756" target="_blank">mercadinho</a> a apenas 5 minutos, ideal para suas compras do dia a dia.</p>
            <p className="ContainerAtividadesContainer_texts_sub2">Confira as melhores opções de passeios para aproveitar ao máximo sua estadia</p>
          </div>
          <div className="ContainerAtividadesContainer_Atividades">
            <Atividades img={imgMuroAlto} title="Praia de Muro Alto" subtitle="Uma das mais belas da região, possui uma imensa piscina natural protegida por recifes de corais. Ideal para relaxar e praticar esportes aquáticos." link="https://www.empetur.pe.gov.br/sala-de-imprensa/blog/1498-destino-dos-sonhos-conheca-o-turismo-na-praia-de-muro-alto"/>
            <Atividades img={ImgPiscinasNaturaisCAPA} title="Piscinas Naturais" subtitle="Formadas na maré baixa, as piscinas naturais são perfeitas para mergulho com peixinhos coloridos. O passeio de jangada até lá é imperdível!" link="https://enter.travel/portodegalinhas/pt/piscinas-naturais-em-porto-de-galinhas/" style={{background: "rgba(3, 48, 89, 1)", color: "white"}} linkStyle={{ color: "rgba(6, 199, 242, 1)" }} subtitleStyle={{ color: "rgba(210, 210, 210, 1)" }}/>
            <Atividades img={ImgMaracaipe} title="Pontal de Maracaípe" subtitle="Onde o rio encontra o mar, formando um visual incrível. Passeios de jangada pelo mangue levam a um berçário de cavalos-marinhos." link="https://www.dicasportodegalinhas.com.br/para-colocar-no-roteiro-por-do-sol-no-pontal-de-maracaipe/"/>
          </div>
      </div>
    )
  }
  
  export default AtividadesContainer
  