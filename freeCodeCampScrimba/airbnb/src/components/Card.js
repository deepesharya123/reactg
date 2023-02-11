import React from "react";

function Card() {
  return (
    <div>
      <img src="../image.png" className={"card-image0"}></img>
      <button className="sold">Sold Out</button>
      <img src="../wedding-photography.png" className={"card-image1"}></img>
      <button className="online">Online</button>
      <img src="../mountain-bike.png" className={"card-image2"}></img>
    </div>
  );
}

export default Card;
