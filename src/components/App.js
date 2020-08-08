import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import data from "../testData.json";

class App extends React.Component {
  state = { test: 42, pageHeader: "naming contests", allContests: [] };

  componentDidMount() {
    this.setState({ allContests: data.contests });
  }
  componentWillUnmount() {
    console.log("Will umnount");
  }
  render() {
    return (
      <div>
        <Header headerMessage={this.state.pageHeader} />{" "}
        <div>
          {this.state.allContests.map((contest) => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
