import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("Child A redner");
  return (
    <div>
      Child A<ChildB></ChildB>
    </div>
  );
};

export const MemoisedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Child B redner");
  return (
    <div>
      Child B<ChildC></ChildC>
    </div>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C");

  return <div>Child C -{count}</div>;
};
