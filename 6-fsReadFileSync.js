// Async

// Sync
//Reading files
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// Creating/Writing to file
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`);

const resultSync = readFileSync('./content/result-sync.txt', 'utf8');
console.log(resultSync);