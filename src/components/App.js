import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";

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
