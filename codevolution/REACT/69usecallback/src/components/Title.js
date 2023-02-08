import React from "react";

function Title() {
  console.log("Rendering Ttile");
  return (
    <div>
      <h1>Usecallback hook</h1>
    </div>
  );
}

export default React.memo(Title);
