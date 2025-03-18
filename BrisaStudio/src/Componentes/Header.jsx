import Logo from "../assets/images/Logo.png";
function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo do Brisa Studio" />
        <ul>
          <li>
            <a href="">Apartamento</a>
          </li>
          <li>
            <a href="">Lazer</a>
          </li>
          <li>
            <a href="">Localização</a>
          </li>
          <li>
            <a href="">Depoimentos</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
