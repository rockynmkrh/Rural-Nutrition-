const http = require("http");
const path = require("path");
const fs = require("fs");
const STATE_DATA = require("./stateData");

const server = http.createServer((req, res) => {
  if (req.url === "/api/states") {
    const data = Object.entries(STATE_DATA).map(([state, details]) => ({ state, ...details }));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else if (req.url === "/" || req.url === "/index.html") {
    const filePath = path.join(__dirname, "../frontend/index.html");
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading frontend");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // ✅ dynamically import open for ESM compatibility
  const open = (await import("open")).default;
  open(`http://localhost:${PORT}`);
});
