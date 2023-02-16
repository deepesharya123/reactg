import React, { useState } from "react";

function Joke(props) {
  const [jokes, setJokes] = useState(props.jokes);
  const toggle = (joke) => {
    const newJokes = jokes.map((joke)=>{
      if(joke.set)
    }) 
  };

  let i = 0;
  return (
    <div>
      {jokes.map((joke) => {
        return (
          <div className="joke" key={i++}>
            {joke.Setup && <h3> Setup: {joke.Setup}</h3>}
            {joke.Punchline && <p>Punchilne: {joke.Punchline}</p>}
            <button onClick={() => toggle(joke)}>Toggle IsShown</button>
          </div>
        );
      })}
    </div>
  );
}

export default Joke;
