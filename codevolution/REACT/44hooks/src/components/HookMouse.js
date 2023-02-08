import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("calling the useEffect");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component Unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hook Mouse x- {x} y- {y}
    </div>
  );
}

export default HookMouse;
