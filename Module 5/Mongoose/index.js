import express from "express"
import mongoose from "mongoose"
import userModel from "./Model/userModel.js"

const app = express()
const port = 8080
const mongoUrl = 'mongodb://localhost:27017/NodeJs_Training'

//Inbuilt midleware
app.use(express.json())

mongoose.connect(mongoUrl)
console.log("MongoDB is Connected")

app.get("/", (req, res) => {
    res.send("Welcome to User Management")
})

//Add New User
app.post("/addUser", (req, res) => {
    userModel.create(req.body).then(() => {
        res.send("User added successfully")
    })
})

//Get User
app.get("/getUser", (req, res) => {
    userModel.find().then((result) => {
        res.send(result)
    })
})

//delete User
app.delete("/deleteUser", (req, res) => {
    userModel.findOneAndDelete({ name: req.body.name }).then((result) => {
        res.send("User deleted successfully")
    })
})

//update User
app.put("/updateUser", (req, res) => {
    userModel.findOneAndUpdate(
        { name: req.body.name },
        {$set: {
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        }
        }, { upsert : true })
        .then((result) => {
        res.send("User updated successfully")
    })
})

app.listen(port, () => {console.log("Server started on port: ", port)})