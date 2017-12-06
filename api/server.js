const express = require("express");
const bodyParser = require("body-parser");

const server = express();
const hostname = "127.0.0.1";
const port = 7000;

// Plugins:

// Allows me to have JSON uploads
// Need to before routes
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use([require("./routes/products.js"), require("./routes/auth.js")]);

// Routes:
// Start Server:
// http://localhost:7000/
server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, error => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
