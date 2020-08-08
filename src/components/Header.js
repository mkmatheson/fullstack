import React from "react";
import propTypes from "prop-types";

const Header = (props) => {
  Header.propTypes = { headerMessage: propTypes.string.isRequired };
  return <h1>{props.headerMessage}</h1>;
};

export default Header;
