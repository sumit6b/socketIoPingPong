var socket = io.connect();

var emitted = false, ANIMATION_TIME = 5000;
var earlyBy = 600;

$(window).on('load', function() {
	socket.emit('newplayer');	
})
var consts = {
	width: $("#box").width(),
	height: $("#box").height(),
	w: $(window).width(),
}

function init() {
	$("#box").css("left", "-" + consts.width + "px");
}

function action() {
	emitted = false;
	$("#box").css("left", "-" + consts.width + "px");
	$("#box").animate({
		left: "100%"
	}, {
		duration: ANIMATION_TIME,
		progress: function(time,element,left) {
			console.log("left"  + left);
			if(left <= consts.width+earlyBy && !emitted) {
				socket.emit('exit');
				emitted = true;
			}
		},
		easing: "linear"
	});	
}
socket.on('run', function() {
	action();
})

socket.on('entry', function() {
	action();
});
init();