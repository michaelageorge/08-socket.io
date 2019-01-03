'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

// Command Line Arguments
let file = process.argv.slice(2).shift();

// Emit Events to Socket
socket.emit('file', file);