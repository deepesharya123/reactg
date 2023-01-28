import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRInput from "./components/FRInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Hero heroname={"Batman"} />
      <Hero heroname={"Superman"} />
      <ErrorBoundary>
        <Hero heroname={"joker"} />
      </ErrorBoundary>
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}

      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}

      {/* <PureComp />
      <Table />
      <FragmentDemo /> */}
      {/* <LifecycleA />
      <Form /> */}
    </div>
  );
}

export default App;
