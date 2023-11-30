const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');
  socket.on('start', () => {
    io.emit('adminStarted');
    
  });
  socket.on('afavor', ()=> {
    io.emit('af');
    
  });
  socket.on('encontra', () => {
    io.emit('en');
   
  });
  socket.on('abstinencia', () => {
    io.emit('ab');
 
  });
  socket.on('mensaje',(mensaje) => {

    io.emit('msj',mensaje)
    
  })
  socket.on('reset',() => {

    io.emit('res')
    
  })
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor WebSocket escuchando en el puerto ${PORT}`);
});
