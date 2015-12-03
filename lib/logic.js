var 
socketio = require('socket.io'),
io,

var listen = function(server) {
	io = socketio.listen(server);
	//io.set('log level', 2);

	io.sockets.on('connection', function(socket) {
		//room.push({name: "Adult Talk", id: ++roomid, pwd: false, password: undefined, activeUsers: [], numusers: 0 });
			socket.emit('version', version);
			socket.on('createroom', function(roomname, guestid) {
			roomid++;
			room.push({name: roomname, id: roomid, pwd: false, password: undefined, activeUsers: [], numusers: 0 });
			socket.emit('getNewRoomId', roomname, roomid);
			io.sockets.emit('roomlist', room, (roomid));
			guest[guestid-1].creator = true;
			guest[guestid-1].creatorChannel = roomid;
			});
			channelCreator(socket);
			changeRoomName(socket);
			guestIsHere(socket);
			changeNick(socket);
			joinRoom(socket);
			leaveRoom(socket);
			passwordChanged(socket);
			typingStart(socket);
			typingStop(socket);
			checkPassword(socket);
			socket.on('givemeroomlist',function() {
				socket.emit('initrooms', room);
			});
			socket.on('disconnect', function() {
				//console.log("disconnected" + socket.id);
			});
			messageSent(socket);
	});
	
}

exports.listen = listen;