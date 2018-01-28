
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    if (req.url === "/index" || req.url === "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        var mtstream = fs.createReadStream(__dirname+"/"+'index.html','utf-8');
    }else if (req.url === "/facebook"){
        res.writeHead(200,{'Content-Type':'text/html'});
        var mtstream = fs.createReadStream(__dirname+"/"+'facebook.html','utf-8');
    }else if(req.url === "/youtube"){
        res.writeHead(200,{'Content-Type':'text/html'});
        var mtstream = fs.createReadStream(__dirname+"/"+'youtube.html','utf-8');
    }else{
        res.writeHead(400,{'Content-Type':'text/html'});
        var mtstream = fs.createReadStream(__dirname+"/"+'notfound.html','utf-8');
    }
    mtstream.pipe(res);

}).listen(8080,'127.0.0.1');