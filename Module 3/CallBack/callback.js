const fs = require('fs')
//Without CallBack Function

// function add (a, b){
//     return a + b
// }

// function multiply(a, b){
//     return a * b
// }

// function doMath(){
//     const result1 = add(a, b)
//     const result2 = multiply(a, b)
//     return { sum: result1, product: result2 }
// }

// const a = 5
// const b = 3
// console.log(doMath(a, b))

//Using CallBack

function add (a, b, callback){
    const result = a + b
    callback(result)
}

function multiply (a, b, callback){
    const result = a * b
    callback(result)
}

function doMath(a, b, callback){
    add(a, b, (sum) =>{
        multiply(a, b, (product) => {
            callback({sum, product})
        })
    })
}

const a = 5
const b = 3
doMath(a, b, (results) => {
    console.log(results)
})




//callback in synchronous and asynchronous

// const [,,noOfFiles] = process.argv
// console.log(noOfFiles)

// const text = 'All that Glitters is not Gold'

//asynchronous writeFile()

// for (let i = 1; i <= noOfFiles; i++){
//     //console.log(i)
//     //backup: text-i.html
//     fs.writeFile(`./BackUp/text-${i}.html`, text, () => {
//         console.log(`text-${i}.html file is written`)
//     })
// }

//synchronous writeFileSync()

// for (let i = 1; i <= noOfFiles; i++){
//     //console.log(i)
//     //backup: text-i.html
//     fs.writeFileSync(`./BackUp/text-${i}.html`, text)
//         console.log(`text-${i}.html file is written`)
// }

//callback abstraction

function fetchData(callback){
    setTimeout(() => {
        const data = {message: "Data Fetch Successfully"}
        callback(null, data)
    }, 3000)
}

function handleData(err, data){
    if (err) {console.log(err)}
    else {console.log(data)}
}

fetchData(handleData)

//callback chaining or hell => inversion of control => pyramid of doom

//sample example of a online shopping cart
// const cart = ["shoes", "pants", "accessories", "watch"]

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.orderSection()
//         })
//     })
// })

function timeToDelay(sec, callback){
    setTimeout(callback, sec *2000)
}

console.log("Start Time")

timeToDelay(2, () => {
    console.log("Two Seconds Delay")
    timeToDelay(4, () => {
        console.log("Four Seconds Delay")
        timeToDelay(6, () => {
            console.log("Six Seconds Delay")
        })
    })
})