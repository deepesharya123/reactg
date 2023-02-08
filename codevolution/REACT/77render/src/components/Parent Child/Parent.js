import React, { useState } from "react";
import { Child } from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent componenet");
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setCount(count - count)}> Reset</button>
      <button onClick={() => setCount((pc) => 5)}>Increase by 5</button>
      <Child />
    </div>
  );
}

export default Parent;
