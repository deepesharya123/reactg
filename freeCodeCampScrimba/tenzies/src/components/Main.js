import React from "react";
import Die from "./Die";

function Main() {
  const num = (function allNewDice() {
    const ar = [];
    while (ar.length < 10) {
      let n = Math.floor(Math.random() * 10) % 7;
      if (n == 0) continue;
      ar.push(n);
    }
    return ar;
  })();
  console.log("asd" + num);

  return (
    <div className="main">
      <div className="inner-main">
        <div className="die-main">
          <Die value="2" />
          <Die value="1" />
          <Die value="6" />
          <Die value="5" />
          <Die value="4" />
        </div>
        <div className="die-main">
          <Die value="4" />
          <Die value="2" />
          <Die value="6" />
          <Die value="5" />
          <Die value="1" />
        </div>
      </div>
    </div>
  );
}

export default Main;
