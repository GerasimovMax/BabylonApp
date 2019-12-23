
const http = require('http');
const express = require('express');
const port = 8000;

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

server.listen(port, () => {
    console.log(`We are living at localhost:${port}`);
})
