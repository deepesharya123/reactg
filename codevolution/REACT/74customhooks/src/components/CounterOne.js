import React, { useState } from "react";
import useCouner from "../hooks/useCouner";

function CounterOne() {
  const [count, increment, decrement, reset] = useCouner(0, 1);
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default CounterOne;
