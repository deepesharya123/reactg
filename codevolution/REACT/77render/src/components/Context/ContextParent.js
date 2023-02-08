import React, { useState } from "react";
import { MemoisedChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const CountContextProvider = CountContext.Provider;

function ContextParent() {
  const [count, setCount] = useState(0);

  console.log("context parent renders");

  return (
    <div>
      <button onClick={() => setCount((pc) => pc + 1)}>
        Increment - {count}{" "}
      </button>

      <CountContextProvider value={count}>
        <MemoisedChildA></MemoisedChildA>
      </CountContextProvider>
    </div>
  );
}

export default ContextParent;
