import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
// import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/Immutable State/ObjectUseState";
import Parent from "./components/Parent Child/Parent";
import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";
import GrandParent from "./components/Optimization/GrandParent";
import ParentTwo from "./components/Optimization/ParentTwo";
import ParentThree from "./components/Incorrect Optimization/ParentThree";
import ParentFour from "./components/Incorrect Optimization/ParentFour";
import ContextParent from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA></ChildA>
      </ContextParent>

      {/* <ParentFour /> */}

      {/* <ParentThree /> */}

      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}

      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
