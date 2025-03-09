// Modules
const names = require('./names.js');
const sayHi = require('./sayHi.js');

console.log(names);
console.log(`You've chosen: ${names.john}`);

console.log(sayHi(names.john));
console.log(sayHi(names.peter));