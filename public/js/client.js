var socket = io.connect();

$(window).load(function() {
	socket.emit('newplayer')
})

$("#trigger").on("click", function() {
	socket.emit('exit');
})

socket.on('entry', function() {
	console.log("entered");
	alert("entered");
});