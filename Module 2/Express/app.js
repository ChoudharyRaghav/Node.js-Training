const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3088

//req: what we send to server
//res: what we receive from server

app.get('/', (req, res) => {
    res.send('Hello Node and Express')
})

//get movies

app.get('/getMovies', (req, res) => {
    fs.readFile("./movies.json", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(JSON.parse(result))
        }
    })
})

app.listen(PORT, () => {
    console.log("Server started on port number: ", PORT)
})