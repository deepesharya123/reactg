import React from "react";

function Columns() {
  const item = [];
  return (
    <React.Fragment>
      {item.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Deepesh</td>
    </React.Fragment>
  );
}

export default Columns;
