import React from "react";
import {Dispatch} from "../Containers/Context";

const Controls = ({handler}: {handler: Dispatch}) => {
  return (
    <div className="controls">
      <button onClick={() => handler("increment")} className="counter">
        +
      </button>
      <button onClick={() => handler("decrement")} className="counter">
        -
      </button>
    </div>
  );
};

export default Controls;
