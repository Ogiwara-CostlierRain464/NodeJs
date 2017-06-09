console.log("Hello! Node.Js x TypeScript")

import http = require("http")
var server = http.createServer()
server.on("request",doRequest)
server.listen(1234)
console.log("runnig!")

function doRequest(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write("hello,wolrd")
    res.end()
}
