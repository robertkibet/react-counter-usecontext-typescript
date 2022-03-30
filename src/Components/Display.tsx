import React from "react";
import {State} from "../Containers/Context";

const Display = ({count}: State) => {
  return (
    <div className="display">
      <code>{count || 0}</code>
      {count < 0 && <p>You are waaay below zero mark ;)</p>}
    </div>
  );
};

export default Display;
