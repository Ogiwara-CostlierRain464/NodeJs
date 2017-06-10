//region import
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
//endregion
var hello = fs.readFileSync('./hello.ejs', 'utf8');
var content1 = fs.readFileSync('./content1.ejs', 'utf8'); //同期する
var server = http.createServer();
server.on('request', doRequest);
server.listen(8080);
console.log('Server running');
function doRequest(req, res) {
    var hello2 = ejs.render(hello, {
        title: "タイトルです",
        content: ejs.render(content1, {
            data: [
                "First", "Second", "Third"
            ]
        })
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(hello2);
    res.end();
}
