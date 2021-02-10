
const httpServer = require('http').createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
// const io = require('socket.io')(3001);
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
