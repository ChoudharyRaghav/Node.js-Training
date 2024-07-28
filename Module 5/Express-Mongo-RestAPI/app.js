// const express = require('express')
// const { MongoClient } = require('mongodb') //Import MongoDB Client
// const bodyParser = require('body-parser')
// const moviesRouter = require('./routes/movies.js')

import express from 'express'
import { MongoClient } from 'mongodb' //Import MongoDB Client
import bodyParser from 'body-parser'
import { moviesRouter } from './routes/movies.js'

const app = express()
const PORT = 3088

//req: what we send to server
//res: what we receive from server

// Connection URL
const mongoUrl = 'mongodb://localhost:27017/';

//body parser initialization
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Database Name
//const dbName = 'NodeJs_Training';

// mongodb connection
function createConnection(){
  const client = new MongoClient(mongoUrl)
  client.connect()
  console.log("MongoDB is Connected")
  return client
}

export const client = createConnection()

app.get('/', (req, res) => {
  res.send('Hello Node, Express, MongoDB and Rest API')
})

app.use("/movies", moviesRouter)

app.listen(PORT, () => { console.log("Server started on port: ", PORT)})

// export default { client }