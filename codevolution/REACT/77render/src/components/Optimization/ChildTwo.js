import React from "react";

function ChildTwo() {
  console.log("Rensering childone componet");
  return <div>ChildOne</div>;
}

export default React.memo(ChildTwo);
