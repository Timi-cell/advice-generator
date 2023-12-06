import LineDividerDesktop from "./assets/pattern-divider-desktop.svg";
import LineDividerMobile from "./assets/pattern-divider-mobile.svg";
import IconDice from "./assets/icon-dice.svg";
import { useEffect, useState } from "react";

const adviceAPI = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetch(adviceAPI, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      });
  }, []);
  const changeAdvice = () => {
    setAdvice("");
    fetch(adviceAPI, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      });
  };
  return (
    advice && (
      <section>
        <div className="box">
          <p>ADVICE #{advice.slip.id}</p>
          <h1>"{advice.slip.advice}"</h1>
          <div className="line_divider hide">
            <img src={LineDividerDesktop} alt="line_divider" />
          </div>
          <div className="line_divider show">
            <img src={LineDividerMobile} alt="line_divider" />
          </div>
        </div>
        <div className="icon_box" onClick={changeAdvice}>
          <div className="icon_dice">
            <img src={IconDice} alt="icon_dice" />
          </div>
        </div>
      </section>
    )
  );
};

export default App;
