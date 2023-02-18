import React from "react";

function Die(props) {
  return (
    <div className="die-container">
      <div className="die-face">{props.value}</div>
    </div>
  );
}

export default Die;
