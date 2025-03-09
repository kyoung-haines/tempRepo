const os = require('os');

// Current user
console.log(os.userInfo());

// Current user platform
console.log(os.platform());

// Current user home directory
console.log(os.platform());

// Current uptime in seconds, minutes, hours, and day
console.log(`Seconds: ${os.uptime()}`);
console.log(`Minutes: ${os.uptime() / 60}`);
console.log(`Hours: ${os.uptime() / 60 / 60}`)

// 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);