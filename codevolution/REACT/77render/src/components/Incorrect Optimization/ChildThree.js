import React from "react";

const ChildThree = ({ children, name }) => {
  console.log("Rensering childthree componet");
  return (
    <div>
      ChildOne {children} {name}
    </div>
  );
};

export const MemoizedChildThree = React.memo(ChildThree);
