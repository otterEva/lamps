import "../styles/Authen.css";
import { useState } from "react";

function Authen() {
  const [confState, setConfState] = useState("send");

  function newState() {
    setConfState("confirmation");
  }

  return (
    <div className="authen">
      <div className="wrapper">
        <div>
          {confState === "send" ? (
            <p className="email-p">Введите ваш email</p>
          ) : (
            <p className="email-p">Введите отправленный код</p>
          )}
        </div>
        <div>
          {confState === "send" && (
            <p className="send-p">
              Мы отправим вам код, который нужно будет ввести далее
            </p>
          )}
        </div>
        <div>
          {confState === "send" ? (
            <input className="input" type="text" placeholder="email" />
          ) : (
            <input className="input" type="text" placeholder="Код..." />
          )}
        </div>
        <div>
          {confState === "send" && (
            <button onClick={newState} className="code-btn">
              Отправить код
            </button>
          )}
          {confState === "confirmation" && (
            <button onClick={newState} className="code-btn">
              Отправить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authen;
