import React from "react";
import Card from "./Card";
import CardInfo from "./CardInfo";
import Group from "./Group";
import Info from "./Info";
import Navbar from "./Navbar";

const cardData = [
  {
    maxRating: 5.0,
    ratingByPeople: 6,
    title: "Life lessons with Katie Zaferes",
    price: 136,
  },
  {
    maxRating: 5.0,
    ratingByPeople: 30,
    title: "Learn wedding photography",
    price: 125,
  },
  {
    maxRating: 4.8,
    ratingByPeople: 2,
    title: "Group Mountain Biking",
    price: 50,
  },
];

function Main() {
  return (
    <div>
      <Navbar />
      <Group></Group>
      <Info />
      <Card />

      <CardInfo data={cardData[0]} id={0} />
      <CardInfo data={cardData[1]} id={1} />
      <CardInfo data={cardData[2]} id={2} />
    </div>
  );
}

export default Main;
