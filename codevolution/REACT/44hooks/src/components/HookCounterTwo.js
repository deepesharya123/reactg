import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) setCount((preCount) => preCount + 1);
  };

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <br />
      <button onClick={incrementFive}> Increment by five</button>
    </div>
  );
}

export default HookCounterTwo;
