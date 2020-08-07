import config from "./config";
//fs isn't needed when I'm using .use
// import fs from "fs";
import apiRouter from "./api";

import express from "express";
const server = express();

server.get("/", (req, res) => {
  res.send("Helloooooo Express!");
});

server.use("./api", apiRouter);

//note that about.html is moved to the public folder
server.use(express.static("public"));

// server.get("/about.html", (req, res) => {
//   //   res.send("this is the about page!\n");
//   fs.readFile("./about.html", (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info("Express listening on port ", config.port);
});
