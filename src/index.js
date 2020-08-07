import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

setTimeout(() => {
  ReactDOM.render(
    <div>Unmount Successful</div>,
    document.getElementById("root")
  );
}, 5000);
