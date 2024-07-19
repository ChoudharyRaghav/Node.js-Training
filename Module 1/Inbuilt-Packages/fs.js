const fs = require("fs") //ES5 Import

console.log("Hello World 😊")

const greet = "Hello Node.js ❤"
fs.writeFileSync("Test.pdf", greet)

//callback function:
fs.writeFile("fun.xml", greet, (error) => {
    console.log("File Created")
})