import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";
import { MemoizedChildFour } from "./ChildFour";
import ChildThree, { MemoizedChildThree } from "./ChildThree";

function ParentFour({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Depesh");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("Renderting the parent comopne");
  return (
    <div>
      <h1>
        Count = {count}, {name}{" "}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName("React")}>change name</button>

      <MemoizedChildFive
        name={name}
        person={memoizedPerson}
        handleClick={memoizedHandleClick}
      />

      {/* <MemoizedChildFour name={name} /> */}

      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
}

export default ParentFour;
