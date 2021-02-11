// 'use strict';

// require('dotenv').config();
// const PORT = require('../../../env.js');

// console.log('Coordinator port ', PORT);

// // const io = require('socket.io');
// // const server = io(process.env.PORT);

// const port = process.env.PORT || 3001; 
// const io = require('socket.io')(port); 



// // const io = require('socket.io');

// // const server = io(3001);

// io.on('connection', (socket) => {
//   io.emit('bullshit');
//   console.log('bullshit2');
// })

// // console.log('COORDINATOR file is connected');

// // io.on('connection', (socket) => {
// //   console.log('You are connected on socket ', socket.id);
// // })

// const coordinator = io.of('/coordinator');

// coordinator.on('connection', (socket) =>{
//   console.log(`${socket.id} connected to socket`)
//   socket.on('join', room => {
//     socket.join(room);
//   })
  
//   socket.on('parentReady', (payload) => {
//     //TODO: coordinator action from principal message to teacher indicating student to send out
//     console.log('EVENT', {events: 'parentReady', payload: payload});
//     socket.to(payload.teacher).emit('parentReady', payload);
//   })

//   socket.on('studentSentOut', (payload) => {
//     console.log('EVENT', {events: 'studentSentOut', payload});
//     //TODO: figure out how to refer to the principal, possibly for multiple devices
//     coordinator.in('principal').emit('studentSentOut', payload);
//   })

//   socket.on('messageAll', (payload) => {
//     console.log('EVENT', {events: 'messageAll', payload});
//     //TODO: figure out how to name all teachers here
//     coordinator.in('teacher').emit('messageAll', payload);
//   })
  
//   socket.on('busRoute', (payload) => {
//     console.log('EVENT', {events: 'busRoute', payload});
//     //TODO: figure out how to name all relevant teachers
//     //payload.forEach to access each teacher that needs to be notified
//     socket.to(payload.teacher).emit('busRoute', payload);
//   })

//   //TODO: Stretch direct message teacher to principal

// })