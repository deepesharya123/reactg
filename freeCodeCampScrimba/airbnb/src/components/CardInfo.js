import React from "react";

function CardInfo({ data, id }) {
  //   const [maxRating, ratingByPeople, title, price] = data;
  return (
    <div>
      <img src="../Star 1.png" className={"star" + id}></img>
      <p className={"maxRating" + id}>{data.maxRating}</p>
      <p className={"ratingByPeople" + id}> ({data.ratingByPeople}) </p>
      <p className={"dot" + id}></p>
      <p className={"country" + id}>USA</p>
      <p className={"title" + id}> {data.title}</p>
      <p className={"price" + id}>From ${data.price}</p>
      <span className={"person" + id}>/ Person</span>
    </div>
  );
}

export default CardInfo;
