/**
  * Simple node.js example for factory cloning 
  */

// Required modules
var http = require('http');
var url = require('url');

HOST = null;

// Get values from the PAAS service.
var host = process.env.VCAP_APP_HOST || 'localhost';
var port = process.env.VCAP_APP_PORT || 3000

// Create simple HTTP server
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Hello, I was created through a Factory!</h1>');
	res.write('<p>(via: ' + host + ':' + port + ')');
	res.end('');
}).listen(port, null);

console.log('Node.JS server running at http://' + host + ':' + port + '/');
