import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  Header.PropTypes = { headerMessage: PropTypes.string.isRequired };
  return <h1>{props.headerMessage}</h1>;
};

export default Header;
