const os = require('os')

// Platform - Win/Mac/Linux/...
console.log(os.platform())

// CPU Arch - x64/x86
console.log(os.arch())

// CPU Core Info
console.log(os.cpus())

// Free Memory
console.log(os.freemem())

// Total Memory
console.log(os.totalmem())

// Home dir
console.log(os.homedir())

// Uptime
console.log(os.uptime())