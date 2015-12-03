// socket.emit('givemeroomlist');
// socket.on('initrooms', function(room) {
// 	row = 0;
// 	page=0;
// 	var i =1;
// 	numrooms = room.length;
// 	for(var i = 1; i<numrooms; i++)
// 		roomBox(room,i);
// });
// socket.on('changedpassword', function(val) {
// 	var h = $(".msg-container")[0].scrollHeight;
// 	var msg = '';
// 	if(val.length == 0) msg = 'Password of this room is removed'; else msg = 'Password of this room is changed.';
// 	$("<p>Server: "+msg+".</p>").addClass('servermsg').appendTo(".msg-container");
// 	$(".msg-container").animate({scrollTop: h}, 500);
	
// });
// socket.on('roompwdchanged', function(id, val) {
// 	id = parseInt(id);
// 	if(val.length == 0)
// 	$(".box:eq("+(id+1)+")").attr('data-pwd', 'false').removeClass('lockedRoom');
// 	else
// 	$(".box:eq("+(id+1)+")").attr('data-pwd', 'true').addClass('lockedRoom');
// })
// socket.on('getNewRoomId', function(name, id) {
// 		cguest.cur_roomid = id;
// 		cguest.creatorChannel = id;
// 		$.cookie('room', id, {expires: 30});
// 		enterLoad(name, id);
// });
// socket.on('roomlist', function(arr, index) {
// 		roomBox(arr, index);
// });
// socket.on('newguestname', function(name, id, ver) {
// 	cguest.name = name;
// 	cguest.id = id;
// 	$.cookie('guest_name', name, {expires: 30});
// 	$.cookie('guest_id', id, {expires: 30});
// 	$.cookie('room', -2, {expires: 30});
// 	$.cookie('version', ver, {expires: 30});
// 	cguest.cur_room = 'default';
// 	cguest.cur_roomid = -2;

// 	$("#change-nick-inp").attr('placeholder', cguest.name);	
// });
// socket.on('newmessage', function(json) {
// 	var h = $(".msg-container")[0].scrollHeight;
// 	var name = json.guest;
// 	var msg = json.message;
// 	var html = "<p><span>"+name+" said</span> "+msg+"</p>";
// 	$(html).addClass('message').appendTo(".msg-container");
// 	$(".msg-container").animate({scrollTop: h}, 500);
	
// });

// socket.on('nickChanged', function(json,cboo) {
// var h = $(".msg-container")[0].scrollHeight;
// $("<p>Server: '"+json.oldname+"'' changed nick to '"+json.newname+"'</p>").addClass('servermsg').appendTo(".msg-container");
// $(".msg-container").animate({scrollTop: h}, 500);
// removeUserDot(json.oldname);
// createUserDot(json.newname, cboo);
// });
// socket.on('RoomNameChanged', function(json) {
// 	var h = $(".msg-container")[0].scrollHeight;
// 	var rid = parseInt(json.roomid);
// 	$("<p>Server: Room name changed to '"+json.newname+"'</p>").addClass('servermsg').appendTo(".msg-container");
// 	$(".msg-container").animate({scrollTop: h}, 500);
// 	$(".room-name").find('h1').text(json.newname).attr('data-id', rid);
// 	//$(".box:eq("+(rid+1)+")").find('.top span').text(json.newname);
// });

// socket.on('UserJoined', function(roomname, rid, activearr) {
// 	var newIndex = activearr.length - 1; //Index of New Guest
// 	console.log('socket.on-User Joined');
// 	var json = {active: activearr, newIndex: newIndex, roomid: rid, name: roomname, creator: activearr[newIndex].creator, creatorChannel: activearr[newIndex].creatorChannel};	
// 	userJoins(json);
// });
// socket.on('UserLeft', function(name) {
// 	//var h = $(".msg-container")[0].scrollHeight;
// 	$("<p>"+name+" left the room.</p>").addClass('servermsg').appendTo(".msg-container");
// 	removeUserDot(name);
// 	//$(".msg-container").animate({scrollTop: h}, 500);
// });
// socket.on('IncorrectPassword', function() {
// $(".errMessage").text('Incorrect Password');
// console.log('IncorrectPassword');
// });
// socket.on("lethimjoin", function(name, id) {
// $("#afpinp").val('');
// $("#askforpwd").hide();
// $(".errMessage").text('');
// console.log('lethimjoin');
// enterLoad(name, id);
// });
// socket.on('typingStart', function(rid, gname) {
// 	$("."+gname+"-dot").addClass('users-flash');
// });
// socket.on('typingStop', function(rid, gname) {
// 	$("."+gname+"-dot").removeClass('users-flash');
// });