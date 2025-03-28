import Estrelas from "./Estrelas"

function Comentarios({img, name, text}) {
    return (
        <div className="ContainerComentarios">
            <div>
                <img src={img} alt="imagem de perfil da pessoa que fez o comentário" />
                <h2>{name}</h2>
            </div>
            <div>
                <Estrelas/>
                <Estrelas/>
                <Estrelas/>
                <Estrelas/>
                <Estrelas/>
            </div>
            <p>{text}</p>
        </div>
    )
  }
  
export default Comentarios
  