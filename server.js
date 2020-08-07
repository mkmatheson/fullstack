import http from "http";

const server = http.createServer((req, res) => {
  res.write("Hello HTTP!\n");
  //line written to user after three seconds
  setTimeout(() => {
    res.write("I can stream!\n");
    //terminate stream response
    res.end();
  }, 3000);
});

server.listen(8080);

// server.on("request", //callback would go here normally);
