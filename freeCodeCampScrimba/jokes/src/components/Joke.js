import React from "react";

function Joke(props) {
  return (
    <div>
      {props.jokes.map((joke) => {
        return (
          <div className="joke">
            {joke.Setup && <h3> Setup: {joke.Setup}</h3>}
            {joke.Punchline && <p>Punchilne: {joke.Punchline}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Joke;
