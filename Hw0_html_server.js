var http = require("http"); 
var port = 1234;

http.createServer(function(reqst, resp) { 
    resp.writeHead(200, {'Content-Type': 'text/plain'}); 
    resp.end('Hello World!'); 
}).listen(port); 

console.log('server is running on the port 1234')
//load http://127.0.0.1:1234/