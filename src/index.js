import React from "react";
import ReactDOM from "react-dom";

const color = Math.random() > 0.5 ? "blue" : "red";

ReactDOM.render(
  //This works because Babel was configured to compile this code into React
  <h1 style={{ color: color }}>Hello React ft. JSX -- {Math.random()}</h1>,
  document.getElementById("root")
);
