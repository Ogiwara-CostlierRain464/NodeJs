"use strict";
exports.__esModule = true;
console.log("Hello! Node.Js x TypeScript");
var http = require("http");
var server = http.createServer();
server.on("request", doRequest);
server.listen(1234);
console.log("runnig!");
function doRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("hello,wolrd");
    res.end();
}
