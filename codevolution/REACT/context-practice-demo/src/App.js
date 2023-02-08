import React from "react";
import "./App.css";
import ComponentC from "./Component/ComponentC";
import CounterOne from "./Component/CounterOne";
import CounterThree from "./Component/CounterThree";
import CounterTwo from "./Component/CounterTwo";

export const UserContext = React.createContext();
export const TopicContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterThree />

      {/* <CounterTwo />
      <CounterOne /> */}

      {/* <UserContext.Provider value="Deepesh">
        <TopicContext.Provider value="React">
          <ComponentC />
        </TopicContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
