const os = require("os")

console.log(os.platform())
console.log(os.version())
console.log(os.release())
//console.log(os.cpus())

console.log(os.totalmem()/(Math.pow(2, 30)))
console.log(os.freemem()/(Math.pow(2, 30)))