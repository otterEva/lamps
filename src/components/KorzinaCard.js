import card_example from "../images/card-example.png";
import "../styles/KorzinaCard.css";

function KorzinaCard() {
  return (
    <div className="card">
      <div>
        <img className="card-img" src={card_example} />
      </div>
      <div>
        <p className="price">100р</p>
      </div>
      <div className="description-div">
        <p>Лучшая в мире лампочка</p>
      </div>
      <div className="card-amount-div">
        <button className="change-amount-btn">+1</button>
        <p className="amount-p">3</p>
        <button className="change-amount-btn">-1</button>
      </div>
    </div>
  );
}

export default KorzinaCard;
