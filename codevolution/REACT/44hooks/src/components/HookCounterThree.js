import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName({
            ...name,
            firstName: e.target.value,
          })
        }
      />
      <br />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) =>
          setName({
            ...name,
            lastName: e.target.value,
          })
        }
      />
      <br />
      your firstname: {name.firstName}
      <br />
      your lastName: {name.lastName}
    </div>
  );
}

export default HookCounterThree;
