const http = require("http");

const PORT = process.env.PORT || 3000;
const secret = process.env.APP_SECRET || "";
const secretStatus = secret
  ? `set (ends with ${secret.slice(-4)})`
  : "NOT SET";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello from my Node server.\nSecret: ${secretStatus}\n`);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
