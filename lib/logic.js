var 
socketio = require('socket.io'),
io,
users = [];
const MAX_PLAYERS = 2;
var listen = function(server) {
	io = socketio.listen(server);
	//io.set('log level', 2);

	io.sockets.on('connection', function(socket) {

		socket.on('newplayer', function() {
			users.push(socket.id);
			if(users.length == MAX_PLAYERS) {
				io.to(users[0]).emit("run");
				return;
			}
		})
		socket.on('exit', function() {
			var cur_user = users.indexOf(socket.id);
			io.to(users[+!cur_user]).emit("entry");	
		});
		socket.on('disconnect', function() {
			if(users.indexOf(socket.id) !== -1)
				users.splice(users.indexOf(socket.id),1);
		});
	});
	
}

exports.listen = listen;