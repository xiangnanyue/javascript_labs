'use strict'
var express = require('express'),
         http = require('http');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
	  console.log(req.headers);
	      res.writeHead(200, { 'Content-Type': 'text/html' });
	        res.end('<html><body><h1>Hello World</h1></body></html>');

});

var server = http.createServer(app);

server.listen(port, hostname, function(){
	  console.log(`Server running at http://${hostname}:${port}/`);
});
