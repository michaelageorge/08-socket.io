'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  
  console.log('New Connection', socket.id);
  
  socket.on('speak', (payload) => {
    console.log({payload});
    socket.broadcast.emit('message', payload);
  });
  
});

