//fetch API data here

import config from "./config";
import axios from "axios";

//can't do 'api' here because this is not a frontend trigger--use https...
axios.get(`${config.serverUrl}/api/contests`).then((resp) => {
  console.log(resp.data);
});
