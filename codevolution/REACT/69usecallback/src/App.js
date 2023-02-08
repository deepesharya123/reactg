import React, { useEffect, useRef } from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

function App() {
  return (
    <div className="App">
      <ClassTimer />

      <HookTimer />

      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
