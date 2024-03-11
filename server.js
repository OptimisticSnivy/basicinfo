const http = require("node:http");
const fs = require("node:fs");

const port = 8080;
const hostname = "localhost";
const dir = "src/";
let page = "index.html";

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/contact") {
    page = "contact.html";
  } else if (req.url === "/about") {
    page = "about.html";
  } else if (req.url === "/") {
    page = "index.html";
  } else {
    page = "404.html";
  }
  fs.readFile(dir + page, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(port, hostname);
