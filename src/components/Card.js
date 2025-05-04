import korzina from "../images/korzina.png";
import card_example from "../images/card-example.png";
import "../styles/Card.css";

function Card() {
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

      <div>
        <button className="korzina-btn">
          <img class="korzina-img" src={korzina} />
        </button>
      </div>
    </div>
  );
}

export default Card;
