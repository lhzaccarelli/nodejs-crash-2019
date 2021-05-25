const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter()

// Event Listener
myEmitter.on('event', () => console.log('Event fired'))

// Init Event
myEmitter.emit('event')