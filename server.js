const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const http = require("http");

const PORT = process.env.PORT || 3000;
const appMessage = process.env.APP_MESSAGE || "APP_MESSAGE is missing";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello from my Node server.\nEnv value: ${appMessage}\n`);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
