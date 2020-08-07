import config from "./config";
import apiRouter from "./api";

import express from "express";
const server = express();

//express takes care of everything else if I just add this line
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  //   res.send("Helloooooo Express!");
  res.render("index", {
    content: "Hello Express and EJS!",
  });
});

server.use("./api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, () => {
  console.info("Express listening on port ", config.port);
});
