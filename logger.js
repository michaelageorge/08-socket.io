'use strict';

const fs = require('fs');
const util = require('util');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('read', read);
socket.on('save', save);
socket.on('error', errorCb);

function errorCb(file) {
  console.log('error');
}

function save(file) {
  console.log('file was saved');
}

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const toUpper = (buffer) => { return Buffer.from(buffer.toString().toUpperCase()); };

function read(file) {
  readFile('./new-text.txt', file)
    .then((text) => {return toUpper(text);})
    .then((text) => {writeFile('new-text.txt', text);})
    .then(() => {
      console.log(`${file} file saved`);
      socket.emit('file-saved', file);
    })
    .catch((err) => {
      console.log('error', err);
      socket.emit('file-error', file);
    });
}