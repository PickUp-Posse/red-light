'use strict';

// const coordinator = require('../coordinator/coordinator.js');
const io = require('socket.io-client');
//TODO: host address needed
const host = "ws://localhost:3001/coordinator";
const socket = io.connect(host);

// console.log('TEACHER file is connected');

socket.on('connection', () => {
  console.log('TEACHER socket.io is connected');
})

let teacher = 'bob'; 

socket.emit('join', teacher)

socket.on('parentReady', (payload) => {
  console.log('TEACHER', {events: 'parentReady', payload});
  //TODO: change student color on teacher display
})

socket.on('messageAll', (payload) => {
  console.log('TEACHER', {events: 'messageAll', payload});
  //TODO: display principal message at top of list
})

socket.on('busRoute', (payload) => {
  console.log('TEACHER', {events: 'busRoute', payload});
  //TODO: change student colors to yellow based on bus route
})

