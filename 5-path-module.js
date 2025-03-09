const path = require('path');

// A separator property - returns platform specific separator
console.log(path.sep);

// Joins a sequence of 
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// Returning absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);