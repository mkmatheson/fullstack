import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";

//If I want to make this compatible for older browsers, all I need to modify is this function
const pushState = (stateObj, url) => {
  window.history.pushState(stateObj, "", url);
};

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

  //eventually, this function will fetch content from the server, but for now it just receives the contestID
  fetchContest = (contestID) => {
    pushState({ currentContestId: contestID }, `/contest/${contestID}`);
  };
  render() {
    return (
      <div>
        <Header headerMessage={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.allContests}
        />
      </div>
    );
  }
}

export default App;
