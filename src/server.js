'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('./models/student');
const mongoose = require('mongoose');
const Student = mongoose.model('student');


//middleware
const errorHandler = require('../error-handlers/500.js');
const notFound = require('../error-handlers/404.js');
const apiRoutes = require('./routes/apiRoutes.js');
const logger = require('./middleware/logger.js');

//App middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   console.log('routes connected');
// })
app.use('/student', apiRoutes);

app.use(logger);

//Catchalls
app.use('*', notFound);
app.use(errorHandler);


// const socketIO = require("socket.io");

// const httpServer = require('http').createServer();
// httpServer.listen(process.env.SOCKETPORT);


// const io = socketIO(httpServer, {
//   cors: {
//     origin: "http://localhost:3002",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }
// });

// io.on('connection', (socket) => {

//   socket.on('joinRoom', (room) => {
//     socket.join(room);
//     console.log('A user joined chatroom: ' + room);
//   });

//   socket.on('disconnect', () => {
//     console.log('Disconnected: ' + socket.id);
//   });

//   socket.on('pickupready', (payload) => {
//     console.log('pickupReady: ' + payload.name);
//     socket.to(payload.teacher).emit('pickupready', payload);
//   });

//   socket.on('sendingstudent', (payload) => {
//     console.log('SERVER: sending student out: ' + payload.name);
//     console.log('SERVER: we made it past the stacy log');
//     const clients = io.sockets.adapter.rooms.get(payload.teacher);
//     console.log('SERVER: this is the clients: ', clients);
//     socket.to(payload.teacher).emit('sendingstudent', (payload));
//   })

//   socket.on('leaveRoom', ({ Student }) => {
//     socket.leave(Student.teacher);
//     console.log('A user left chatroom: ' + Student.teacher);
//   });
// })


function start(PORT) {
  app.listen(PORT, () => {
    console.log('Listening on port', PORT);
    if (!PORT) { throw new Error('There is no port'); }
  })
}

module.exports = {
  server: app,
  start: start
}
