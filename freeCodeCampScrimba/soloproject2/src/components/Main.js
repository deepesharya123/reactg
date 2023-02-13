import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Data from "./Data";

function Main() {
  const ShowAllPlace = Data.map((item) => {
    // console.log("das", item);
    return <Card key={item.id} data={item} />;
  });
  return (
    <div>
      <Navbar />
      {ShowAllPlace}
    </div>
  );
}

export default Main;
