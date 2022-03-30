import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./Components/Display";
import Controls from "./Components/Controls";
import {useCounter} from "./Containers/Context";

const App = () => {
  const {state, dispatch} = useCounter();
  return (
    <div className="container">
      <Display {...state} />
      <Controls handler={dispatch} />
    </div>
  );
};

export default App;
