import React from "react";
import Biodata from "./Biodata";
import Button from "./Button";
import Content from "./Content";
import Footer from "./Footer";
import Photo from "./Photo";

function Main() {
  return (
    <div className="main">
      <Photo />
      <Content />
      <Button name="Email" logo="" />
      <Button name="LinkedIn" logo="" />
      <Biodata />
      <Footer />
    </div>
  );
}

export default Main;
