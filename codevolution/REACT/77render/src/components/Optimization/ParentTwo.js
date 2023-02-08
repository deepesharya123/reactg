import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function ParentTwo({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Depesh");

  console.log("Renderting the parent comopne");
  return (
    <div>
      <h1>
        Count = {count}, {name}{" "}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName("REact")}>change name</button>
      <ChildTwo count={count} />
    </div>
  );
}

export default ParentTwo;
