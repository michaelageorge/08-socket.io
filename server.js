'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('New connection', socket.id);

  socket.on('file', file => {
    console.log(file);
    socket.broadcast.emit('read', file);
  });

  socket.on('file-saved', file => {
    console.log('saved file');
    socket.broadcast.emit('saved', file);
  });

  socket.on('error', file => {
    console.error('An error occurred');
    socket.broadcast.emit('error', file);
  });

});

