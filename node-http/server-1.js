'use strict'
var http = require('http');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req,res){
	console.log(req.header);
	console.log(req.body);

	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<html><h1>Hello World</h1></html>');
});

server.listen(port, host, function(){
	console.log(`using server on http://${host}:${port}`);
});
