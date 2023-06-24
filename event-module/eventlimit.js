const EventEmitter = require('events');

const eventEmmiter = new EventEmitter();

const currentMaxListeners = eventEmmiter.getMaxListeners();

console.log('The defult maximum number of event listners are:', currentMaxListeners);

eventEmmiter.setMaxListeners(5);

const updateListeners = eventEmmiter.getMaxListeners();
console.log('The updated maximum number of event listners are:', updateListeners);
