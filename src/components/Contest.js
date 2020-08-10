import React, { Component } from "react";
import propTypes from "prop-types";

class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        <div className="content-description">{this.props.description}</div>
        <div className="home-link link" onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: propTypes.string.isRequired,
  contestListClick: propTypes.func.isRequired,
};

export default Contest;
