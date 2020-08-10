import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";
import propTypes from "prop-types";

const pushState = (stateObj, url) => {
  window.history.pushState(stateObj, "", url);
};

//this is a handler
const onPopState = (handler) => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: propTypes.object.isRequired,
  };
  state = this.props.initialData;
  componentDidMount() {
    onPopState((e) => {
      this.setState({ currentContestId: (event.state || {}).currentContestId });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }

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

  fetchContestList = () => {
    pushState({ currentContestId: null }, `/`);
    api.fetchContestList().then((contests) => {
      this.setState({
        currentContestId: null,
        contests,
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
      return (
        <Contest
          contestListClick={this.fetchContestList}
          {...this.CurrentContest()}
        />
      );
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
