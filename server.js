const
http = require("http"),
path = require("path"),
mime = require("mime"),
fs = require("fs"),
chatserver = require('./lib/logic.js'),
port = process.env.PORT || 1024;
var cache = {};

	function send400(res) {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Page Not Found');
	}
 function sendFile(content, res, filepath) {
 	var temp = (path.basename(filepath)).split('.');
 	var mimetype = '';
 	if(temp[1] == 'ttf' || temp[1] == 'woff' || temp[1] == 'svg' || temp[1] == 'eot')
 	mimetype = 'application/octet-stream';
 	else
 	mimetype = mime.lookup(path.basename(filepath));
 	//console.log(mimetype);
	res.writeHead(200, {'Content-Type': mimetype, 'Loading': filepath});
	res.end(content);
 }
 function serveStatic(cache, res, filepath) {
	if(cache[filepath]) {
	sendFile(cache[filepath], res, filepath);
	//console.log("Loaded from Cache");
	}
	else { 
		fs.open(filepath, 'r', function(err) {
		
			if(err) {
			send400(res);
			}
			else {
			
				fs.readFile(filepath, function(err, data) {
					cache[filepath] = data;
					sendFile(data, res, filepath);
					//console.log("Loaded from Disk");
				});
			}
			
		});
	}
 }
 var server = http.createServer(function(req, res) {
	 var filepath = '';
	 if(req.url.indexOf('favicon') === -1) {
	 if(req.url == '/') {
		filepath = './public/index.html';
	 }
	 else
		filepath = './public/' + req.url;
	}
	
	 serveStatic(cache, res, filepath);
 }).listen(port);
 server.on('close', function() {
 cache = {};
 console.log('closed');
 });
 //console.log(mime.lookup(path.basename(filepath)));
 console.log("Server Created...");
 chatserver.listen(server);