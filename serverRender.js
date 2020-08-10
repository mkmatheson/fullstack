import React from "react";
import ReactDOMServer from "react-dom/server";

//new top level of the application
import App from "./src/components/App";

import config from "./config";
import axios from "axios";

const serverRender = () => {
  //this entire call is a promise, so it cannot be used directly without getting wrapped
  return axios.get(`${config.serverUrl}/api/contests`).then((resp) => {
    //in this current status, with no data passed to the app, there is no way to load data from the App.js
    ReactDOMServer.renderToString(<App initialContests={resp.data.contests} />);
  });
};

export default serverRender;
