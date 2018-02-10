'use strict'
var http = require('http');
var fs = require('fs');
var path = require('path');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(req,res){
	console.log(req.header);
	console.log('request server ' + req.url + ' with method ' + req.method);
	if (req.method == 'GET'){
		var filepath;
		var url;
		if (req.url == '/') url = '/index.html';
		else url = req.url;
		filepath = path.resolve('./public' + url);

		var ext = path.extname(filepath);
		if (ext == '.html'){
			res.writeHead(200, {'Content-Type':'text/html'});
			fs.createReadStream(filepath).pipe(res);	
		}else{
			res.writeHead(404, {'Content-Type':'text/html'});
			res.end('<h1>Error 404 file type error</h1>')
		}
	}else{
		res.writeHead(404,{'Content-Type':'text/html'});
		res.end('<h1>Error 404 Method error</h1>'+req.method + ' is not allowed');
	}
});

server.listen(port, host, function(){
	        console.log(`using server on http://${host}:${port}`);
});
