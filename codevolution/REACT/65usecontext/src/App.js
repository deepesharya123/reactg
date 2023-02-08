import "./App.css";
import React, { useReducer } from "react";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
import DataFetchingOne from "./component/DataFetchingOne";
import DataFetchingtwo from "./component/DataFetchingtwo";

export const CountContext = React.createContext();
// export const DispatchContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <DataFetchingtwo />
    // <DataFetchingOne />

    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     Count-{count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
  );
}

export default App;
