import React, { useEffect, useState } from "react";
import axios from "axios";

function Meme() {
  const [memesData, setMemesData] = useState([]);
  const [url, setUrl] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const handleClick = () => {
    const num = Math.random();
    const ind = Math.floor(num * 100);

    setMeme((prevState) => {
      return { ...prevState, randomImage: memesData[ind].url };
    });
  };
  console.log("url", url);
  useEffect(() => {
    console.log("I am being called");
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setMemesData(res.data.data.memes);
      })
      .catch((error) => console.log("The issues is ", error));
  }, []);

  return (
    <div className="info">
      <div className="form">
        <input
          type="text"
          name="setup"
          className="setup"
          placeholder="Top text"
        ></input>
        <input
          type="text"
          name="punchline"
          className="punchline"
          placeholder="Bottom text"
        ></input>
        <br></br>
        <button type="submit" className="btn-submit" onClick={handleClick}>
          Get a new Image🖼
        </button>
        {<img src={meme.randomImage} className="meme--image"></img>}
      </div>
    </div>
  );
}

export default Meme;
