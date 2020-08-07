import React from "react";
import ReactDOM from "react-dom";

//first React API I need is to render something -- an object!
//first arg is what to render, second arg is where I want it rendered -- getElementById is a DOM API
ReactDOM.render(
  //first arg is html tag type, second arg is any attributes I want the tag to have, the rest are any children (props) I want the element to have
  React.createElement("h1", null, "Hello React!"),
  document.getElementById("root")
);
