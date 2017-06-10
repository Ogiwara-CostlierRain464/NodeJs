declare function require(x: string): any
//region import
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');
//endregion
var template = fs.readFileSync('./hello.ejs','utf8');
var content1 = fs.readFileSync('./content1.ejs','utf8');//同期する
var content2 = fs.readFileSync('./content2.ejs','utf8');
var content3 = fs.readFileSync('./content3.ejs','utf8');

var routes = {
    "/":{
        "title":"Main Page",
        "message":"This is sample page",
        "content": content1
    },
    "/index":{
        "title":"Main Page",
        "message":"This is sample page",
        "content":content1
    },
    "/other":{
        "title":"Other Page",
        "message":"Another page",
        "content":content2
    },

    "/post":{
        "title":"Post Page",
        "content":content3
    }
};

const server = http.createServer()
server.on('request',doRequest);
server.listen(8080);
console.log('Server running');

function doRequest(req,res) {
    var url_parts = url.parse(req.url);


    if(routes[url_parts.pathname] == null){
        console.error(`NOT FOUND PAGE: ${req.url}`);
        res.writeHead(404,{"Content-Type": "text/html"})
        res.end(`NOT FOUND PAGE: ${req.url}`);
        return;
    }


    var content = "ERROR";

    switch(req.method){
        case "POST":
            if(url_parts.pathname=="/post"){
                var body = '';
                req.on('data',(data: string)=>{
                    body += data
                })
                req.on('end',()=>{
                    var post = qs.parse(body)
                    content = ejs.render(template,{
                        title: routes[url_parts.pathname].title,
                        content: ejs.render(routes[url_parts.pathname].content,{
                            idname: post.idname,
                            pass: post.pass
                        })
                    })
                })
            }
            break;
        case "GET":
            content = ejs.render(template,{
                title: routes[url_parts.pathname].title,
                content: ejs.render(routes[url_parts.pathname].content,{
                    message: routes[url_parts.pathname].message
                })
            });
            break;
        default:

            break;
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(content);
    res.end();
}