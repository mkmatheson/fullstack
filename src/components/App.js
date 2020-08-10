import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";

//If I want to make this compatible for older browsers, all I need to modify is this function
const pushState = (stateObj, url) => {
  window.history.pushState(stateObj, "", url);
};

class App extends React.Component {
  state = {
    test: 42,
    pageHeader: "naming contests",
    contests: this.props.initialContests,
  };
  componentDidMount() {}
  componentWillUnmount() {
    console.log("Will umnount");
  }

  //eventually, this function will fetch content from the server, but for now it just receives the contestID
  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    } else {
      return (
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <Header headerMessage={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
