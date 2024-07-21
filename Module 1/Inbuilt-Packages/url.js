const url = require("url")

const urlString = "https://github.com/ChoudharyRaghav?tab=repositories"

const parsedUrl = url.parse(urlString, true)

console.log(parsedUrl.hostname)
console.log(parsedUrl.pathname)
console.log(parsedUrl.query)
console.log(parsedUrl.search)
