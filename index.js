const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((req, res) => {
  const routes = {
    "/": "./index.html",
    "/about": "./about.html",
    "/contact-me": "./contact-me.html",
  };

  const file = routes[req.url] || "./404.html";
  const status = routes[req.url] ? 200 : 404;

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });

      return res.end("Internal Server Error");
    }

    res.writeHead(status, {
      "Content-Type": "text/html",
    });

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});