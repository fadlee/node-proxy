const http = require('http');
const httpProxy = require('http-proxy');
require('dotenv').config();

// Create a proxy server with HTTPS target
const proxy = httpProxy.createProxyServer({
  target: process.env.TARGET_URL,
  changeOrigin: true,
  secure: false
});

// Create an HTTP server that listens to requests and forwards them to the target server
const server = http.createServer((req, res) => {
  proxy.web(req, res, (err) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Something went wrong.');
    }
  });
});

// Listen on a specific port
server.listen(process.env.PORT || 8000, () => {
  console.log(`Proxy server is running on http://localhost:${process.env.PORT || 8000}`);
});

