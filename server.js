// Create a server and type 'node server.js' to spin up local server
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 000;
const server = http.createServer(app);
server.listen(port);

// In terminal: node server.js then go to localhost:3000 to see message 'It works!' from app.js