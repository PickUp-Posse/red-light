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

// httpServer.listen(3000, () => {
//   console.log('go to http://localhost:3000');
// });

function start(PORT) {
  app.listen(PORT, () => {
    console.log('Listening on port', PORT);
    if (!PORT) { throw new Error('There is no port'); }
  })
}

const io = require('socket.io')(3001);
const principal = io.of('/principal');

// //io.attach(start);

principal.on('connection', (socket) => {
  console.log('Connected: ' + socket.id);

  socket.on('pickupready', () => {
    console.log('pickupready: ' + socket.id);
  });
})

io.on('connection', (socket) => {
  console.log('Connected: ' + socket.id);

  socket.on('disconnect', () => {
    console.log('Disconnected: ' + socket.id);
  });

  socket.on('pickupready', (payload) => {
    console.log('pickupReady: ' + payload);
  });

  socket.on('joinRoom', ({ Student }) => {
    socket.join(Student.teacher);
    console.log('A user joined chatroom: ' + Student.teacher);
  });

  socket.on('leaveRoom', ({ Student }) => {
    socket.leave(Student.teacher);
    console.log('A user left chatroom: ' + Student.teacher);
  });
})

module.exports = {
  server: app,
  start: start
}
