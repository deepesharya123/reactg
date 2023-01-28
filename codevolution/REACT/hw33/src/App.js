import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import ComponentE from "./components/ComponentE";
import { UserProvider } from "./components/userContext";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <UserProvider value="Deepesh ">
        <ComponentC />
      </UserProvider>
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Deepesh" : "Guest")} />
      <ClickCounterTwo />
      <HoverCounterTwo /> */}

      {/* <ClickCounter name="Deepesh" />
      <HoverCounter /> */}
    </div>
  );
}

export default App;
