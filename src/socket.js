
const cors = require('cors')
// const express = require('express');
// const app = express();
// app.use(cors());

const httpServer = require('http').createServer();
httpServer.listen(3001);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
// const io = require('socket.io')(3001);
// const principal = io.of('/principal');
// curl "http://localhost:3001/socket.io/?EIO=4&transport=polling"
// //io.attach(start);

// principal.on('connection', (socket) => {
//   console.log(' principal.on Connected: ' + socket.id);

//   socket.on('pickupready', (payload) => {
//     console.log('principal.on pickupready: ' + payload.name);
//   });
// })

io.on('connection', (socket) => {
  console.log('io.on Connected: ' + socket.id);

  socket.on('disconnect', () => {
    console.log('Disconnected: ' + socket.id);
  });

  socket.on('pickupready', (payload) => {
    console.log('io.on pickupReady: ' + payload.name);
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
