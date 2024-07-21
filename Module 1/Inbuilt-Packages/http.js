var http = require("http")

//req => what we send to server
//res => what we receive from server

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/plain"})
    res.write("Hello Node")
    res.end()
}).listen(3088) //server starts to listen to port 3088