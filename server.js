'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('New Connection', socket.id);
  socket.on('file-error', (payload) => {
    socket.broadcast.emit('error', payload);
  });
  socket.on('file-save', (payload) => {
    socket.broadcast.emit('save', payload);
  });
});