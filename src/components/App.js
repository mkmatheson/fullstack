import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 42, pageHeader: "naming contests" };
  }
  componentDidMount() {
    console.log("Did Mount");
  }
  componentWillUnmount() {
    console.log("Will umnount");
  }
  render() {
    return (
      <div>
        <Header headerMessage={this.state.pageHeader} />{" "}
        <div>
          {this.props.contests.map((contest) => (
            <ContestPreview key={contest.contestName} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
