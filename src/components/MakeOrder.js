import "../styles/MakeOrder.css";

function MakeOrder() {
  return (
    <div className="order">
      <div>
        <input className="input-data" type="text" placeholder="Телефон" />
      </div>
      <div>
        <input className="input-data" type="text" placeholder="Адрес" />
      </div>
      <div>
        <input className="input-data" type="text" placeholder="Имя" />
      </div>
      <div>
        <button className="make-order">Заказать</button>
      </div>
    </div>
  );
}

export default MakeOrder;
