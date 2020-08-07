import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.headerMessage}</h1>;
};

const App = ({ welcomeMessage }) => {
  return (
    <div>
      <Header headerMessage={welcomeMessage} /> <p>this is a paragraph</p>
    </div>
  );
};

// App.propTypes = {
//   headerMessage: React.PropTypes.string.isRequired,
// };

App.defaultProps = {
  welcomeMessage: "Hello default!",
};

ReactDOM.render(
  <App welcomeMessage="Hello props" />,
  document.getElementById("root")
);
