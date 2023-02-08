import React from "react";

export const ChildFive = ({ name }) => {
  console.log("Rendering child five");
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
