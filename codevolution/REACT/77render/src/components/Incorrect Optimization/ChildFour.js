import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();

  console.log("REndering childfour");
  return (
    <div>
      Hello {name}. Is is currently {date.getHours()}: {date.getMinutes()} :
      {date.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);
