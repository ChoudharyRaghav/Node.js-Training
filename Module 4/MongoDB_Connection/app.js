const express = require('express')
const MongoClient = require('mongodb').MongoClient; //Import MongoDB Client
const fs = require('fs')
const app = express()
const PORT = 3088

//req: what we send to server
//res: what we receive from server

app.get('/', (req, res) => {
    res.send('Hello Node, Express and MongoDB')
})

// Connection URL
const mongoUrl = 'mongodb://localhost:27017/';

// Database Name
//const dbName = 'NodeJs_Training';

// Use connect method to connect to the mongodb server
MongoClient.connect(mongoUrl, (err, client) => {
  if (err) throw err
  const db = client.db("NodeJs_Training")
  console.log("Connected successfully to MongoDB");

//   app.listen is called inside Mongo DB Client Connect 
//   to ensure that the server is started only after MongoDB is connected successfully
  app.listen(PORT, () => {
    console.log("Server started on port number: ", PORT)
})

});

