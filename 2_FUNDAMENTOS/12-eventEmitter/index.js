const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('Durante o acionamento do emitter');
});

console.log('Antes');
eventEmitter.emit('start');
console.log('Depois');
