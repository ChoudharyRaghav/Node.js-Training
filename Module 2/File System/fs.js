const fs = require("fs")

//async File Operation
// Open File
// fs.open("./cool.txt", (err, file) => {
//     if(err) console.log(err)
//         console.log("File Opened Successfully" /*, file*/)
// })

//Get file status
// fs.stat("./cool.txt", (err, stats) => {
//         console.log(stats.isFile())
//         console.log(stats.isDirectory())
//         console.log(stats.isCharacterDevice())
//         // The isCharacterDevice is to check if the file is a Character Device, that is a storage device
//         console.log(stats.isSocket()) // To check if file is a socket file to do real time connectivity
// })

// Read a File
// fs.readFile("./cool123.txt", "utf-8", (err,data) => {
//     if (err) console.log("Error: ", err)
//         console.log("File Content: ", data)
// })

const quote = 'Work, Save, Travel, Repeat'

// //Append Content at the end of the File
// fs.appendFile("./cool.txt", "\n"+quote, (err) => {
//     console.log("File Appended")
// })

// //Create a new file and write or overwrite existing file
// fs.writeFile("./cool.txt", quote, (err) => {
//     console.log("File Written")
// })

//Delete a file
// fs.unlink("./toRemove.txt", (err) => {
//     if (err) console.log(err)
//         console.log("File Deleted")
// })

//Object: {key:value} pair

const user = {
    name:"Jack",
    age: 20
}
console.log(user)
const userData = JSON.stringify(user) //convert an oject to json coz server communication is done via json
console.log(userData)

const userParse = JSON.parse(userData) //convert an json to object
console.log(userParse)

const movie = {
    name: "The Avengers",
    type: "Sci-Fi"  
}

const movieData = JSON.stringify(movie)
console.log(movieData)

//write an object to a file
fs.writeFile("movies.json",movieData, (err) => {
    if (err) console.log(err)
    console.log("Write File Done")
})