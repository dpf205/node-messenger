const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname , '../public');

var  port =  process.env.PORT || 3000;
var app =  express();

//  configure server to use socket.io
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('\n a new user connected');

	socket.on('disconnect', (socket) => {
			console.log('\n a user disconnected');
	});
});


server.listen(port, () =>{
	console.log(`\n express server on port ${port}`);
})
