import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";

class App extends React.Component {
  state = {
    test: 42,
    pageHeader: "naming contests",
    allContests: this.props.initialContests,
  };
  componentDidMount() {}
  componentWillUnmount() {
    console.log("Will umnount");
  }
  render() {
    return (
      <div>
        <Header headerMessage={this.state.pageHeader} />
        <ContestList contests={this.state.allContests} />
      </div>
    );
  }
}

export default App;
