'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const logError = (payload) => {
  if(payload) {
    console.error('ERROR!', payload);
  }
};

const logSuccess = (payload) => {
  if(payload) {
    console.log('I think something was saved...', payload);
  }
};

socket.on('error', logError);
socket.on('save', logSuccess);