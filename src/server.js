'use strict';

require('dotenv').config();

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


// const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(process.env.PORT);

// const httpServer = require('http').createServer(app); //Simon added app here 11:45am Thursday

// httpServer.listen(process.env.PORT || 3001); //temp removed process.env.PORT || 
// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: ['https://parent-pickup-coordinator.herokuapp.com/', "http://localhost:3002"],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }
// });

io.on('connection', (socket) => {

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log('A user joined chatroom: ' + room);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected: ' + socket.id);
  });

  socket.on('pickupready', (payload) => {
    console.log('pickupReady: ' + payload.name);
    socket.to(payload.teacher).emit('pickupready', payload);
  });

  socket.on('sendingstudent', (payload) => {
    console.log('SERVER: sending student out: ' + payload.name);
    console.log('SERVER: we made it past the stacy log');
    const clients = io.sockets.adapter.rooms.get(payload.teacher);
    console.log('SERVER: this is the clients: ', clients);
    socket.to(payload.teacher).emit('sendingstudent', (payload));
  })

  socket.on('leaveRoom', ({ Student }) => {
    socket.leave(Student.teacher);
    console.log('A user left chatroom: ' + Student.teacher);
  });
})




// function start(PORT) {
//   app.listen(PORT, () => {
//     console.log('Listening on port', PORT);
//     if (!PORT) { throw new Error('There is no port'); }
//   })
// }

// start(process.env.PORT);

module.exports = {
  server: app,
  start: start
}
