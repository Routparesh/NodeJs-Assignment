const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', (name) => {
	console.log(`Thanks For Subscribing to ${name}`);
});

eventEmitter.emit('subscribe', 'College Wallah');
