import React, { useState } from "react";
import ChildOne from "./ChildOne";

function ParentOne({ children }) {
  const [count, setCount] = useState(0);

  console.log("Renderting the parent comopne");
  return (
    <div>
      <h1>Count = {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}

export default ParentOne;
