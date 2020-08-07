import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 42, pageHeader: "naming contests" };
  }
  componentDidMount() {
    console.log("Did Mount");
    debugger;
  }
  componentWillUnmount() {
    console.log("Will umnount");
    debugger;
  }
  //I could also nix the constructor and just have state = {test: 42}
  render() {
    return (
      <div>
        <Header headerMessage={this.state.pageHeader} />{" "}
        <p>this is a number: {this.state.test}</p>
      </div>
    );
  }
}

export default App;
