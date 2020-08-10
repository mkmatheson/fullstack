import React, { Component } from "react";
import propTypes from "prop-types";

class Contest extends Component {
  render() {
    return <div className="Contest">{this.props.description}</div>;
  }
}

Contest.propTypes = {
  //   id: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
};

export default Contest;
