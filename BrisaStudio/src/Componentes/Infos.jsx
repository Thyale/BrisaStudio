function Infos(props) {
    return (
      <div className="ContainerInfos_Info">
          <img src={props.img} alt="icon de representação de algumas coisas que tem no apartamento" />
          <p>{props.text}</p>
      </div>
    )
  }
  
  export default Infos
  