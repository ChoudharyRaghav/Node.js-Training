var path = require("path")

var p = "https://github.com/ChoudharyRaghav?tab=repositories"

console.log(path.dirname(p));
console.log(path.basename(p));
console.log(path.join(p));


const dir = "F:\Node.js Training\Module 1\Inbuilt-Packages\Path.js"

console.log(path.dirname(dir));
console.log(path.basename(dir));
console.log(path.extname(dir));
console.log(path.join(p));
