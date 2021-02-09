'use strict';

// const coordinator = require('../coordinator/coordinator.js');
const io = require('socket.io-client');
//TODO: host address needed
const host = "ws://localhost:3001/coordinator";
const socket = io.connect(host);

console.log('PRINCIPAL file is connected');

socket.on('studentSentOut', updatePrincipalView);

setInterval(() => {
  socket.emit('parentReady', (payload) => {
    console.log('PRINCIPAL', {events: 'parentReady', payload});
  })
}, 5000)

function updatePrincipalView (payload) {
  //TODO: use payload to update the view on the principal device
  console.log('PRINCIPAL: updatePrincipalView ', payload);
}