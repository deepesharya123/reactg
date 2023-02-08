import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
import ChildThree, { MemoizedChildThree } from "./ChildThree";

function ParentThree({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Depesh");

  console.log("Renderting the parent comopne");
  return (
    <div>
      <h1>
        Count = {count}, {name}{" "}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName("React")}>change name</button>

      <MemoizedChildFour name={name} />

      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
}

export default ParentThree;
