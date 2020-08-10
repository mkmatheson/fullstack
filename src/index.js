import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// import data from "./testData.json";
// console.log(data);
import App from "./components/App";

axios
  .get("api/contests")
  .then((resp) => {
    ReactDOM.render(
      <App initialContests={resp.data.contests} />,
      document.getElementById("root")
    );
  })
  .catch(console.error);

// setTimeout(() => {
//   ReactDOM.render(
//     <div>Unmount Successful</div>,
//     document.getElementById("root")
//   );
// }, 5000);
