var http = require('http');
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write("Hello, TS");
    res.end();
});
server.listen(8080);
console.log("Server started!");
