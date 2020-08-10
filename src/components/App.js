import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";
import propTypes from "prop-types";

//If I want to make this compatible for older browsers, all I need to modify is this function
const pushState = (stateObj, url) => {
  window.history.pushState(stateObj, "", url);
};

class App extends React.Component {
  static propTypes = {
    initialData: propTypes.object.isRequired,
  };
  state = this.props.initialData;
  componentDidMount() {}
  componentWillUnmount() {
    console.log("Will umnount");
  }

  //eventually, this function will fetch content from the server, but for now it just receives the contestID
  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  CurrentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.CurrentContest().contestName;
    }

    return "Naming Contests";
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.CurrentContest()} />;
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
        <Header headerMessage={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
