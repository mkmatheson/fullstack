import config from "./config";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";

import express from "express";
const server = express();

server.use(
  sassMiddleware({
    //where __dirname refers to the current directory
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
  })
);

server.set("view engine", "ejs");

import serverRender from "./serverRender.js";
server.get("/", (req, res) => {
  serverRender()
    .then((content) => {
      res.render("index", {
        content,
      });
    })
    .catch(console.error);
});

server.use("/api", apiRouter);
server.use(express.static("public"));

//listen to the same port and host :)
server.listen(config.port, config.host, () => {
  console.info("Express listening on port ", config.port);
});
