import React, { useEffect, useState } from "react";
import axios from "axios";

function Meme() {
  const [formData, setFormData] = useState({
    setup: "",
    punchline: "",
  });

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

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        setMemesData(res.data.data.memes);
      })
      .catch((error) => console.log("The issues is ", error));
  }, []);

  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: [e.target.value] };
    });
  };
  console.log(formData.setup + " " + formData.punchline);
  return (
    <div className="info">
      <div className="form">
        <input
          type="text"
          name="setup"
          className="setup"
          placeholder="Top text"
          onChange={handleChange}
          value={formData.setup}
        ></input>
        <input
          type="text"
          name="punchline"
          className="punchline"
          placeholder="Bottom text"
          onChange={handleChange}
          value={formData.punchline}
        ></input>
        <br></br>
        <button type="submit" className="btn-submit" onClick={handleClick}>
          Get a new Image🖼
        </button>
        {meme.randomImage.length > 0 && (
          <div className="meme">
            <h1 className="meme--text top">{formData.setup}</h1>
            <h1 className="meme--text bottom"> {formData.punchline} </h1>
            <img src={meme.randomImage} className="meme--image"></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default Meme;

// const [statename ,dispatch] = useReducer(reducer,action);
