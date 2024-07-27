const request = require('request')

const url = "https://jsonplaceholder.typicode.com/posts/1"

// Make a GET request

request(url, {json:true}, (error, response, body) => {
    if (error){
        console.log("Error occurred", error)
    }
    if (response.statusCode != 200){
        console.log("Unexpected Status Code: ", response.statusCode)
    }
    console.log("response", body)
})