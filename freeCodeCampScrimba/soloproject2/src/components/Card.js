import React from "react";

function Card(props) {
  const { id, imgURL, location, title, startDate, endDate, description } =
    props.data;
  return (
    <div className="card">
      <img src={imgURL} className={"image" + id}></img>
      <img src="../Fill 219.png" className={"location" + id}></img>
      <p className={"country" + id}> {location}</p>
      <p className={"map" + id}>View on Google Maps</p>
      <p className={"title" + id}>{title}</p>
      <p className={"desc" + id}>{description}</p>
    </div>
  );
}

export default Card;
