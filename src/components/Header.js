import "../styles/Header.css";
import Login from "../images/Login.png";
import korzina from "../images/korzina.png";

function Header() {
  return (
    <div className="header-div">
      <div className="left-section">
        <p className="text-catalog">Sirius</p>
        <button className="catalog-btn">Каталог</button>
      </div>
      <div className="right-section">
        <button className="img-btn-login">
          <img className="header-login-img" src={Login} />
          <p className="login-text">Войти</p>
        </button>
        <button className="img-btn-korzina">
          <img className="header-korzina-img" src={korzina} />
          <p>Корзина</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
