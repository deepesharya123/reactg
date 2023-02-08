import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

function GrandParent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      GrandParent
      <button onClick={() => setCount(count + 1)}> Increment - {count}</button>
      <ParentOne count={count}>
        <ChildOne></ChildOne>
      </ParentOne>
    </div>
  );
}

export default GrandParent;
