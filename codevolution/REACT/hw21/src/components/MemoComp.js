import React from "react";

function MemoComp({ name }) {
  console.log("Rendering MEmoCompoent");
  return <div>MemoComp {name}</div>;
}

export default React.memo(MemoComp);
