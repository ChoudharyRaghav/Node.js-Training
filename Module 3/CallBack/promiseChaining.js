function async1 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async 1 is completed")
            resolve("Result from Async 1")
        }, 1000)
    })
}

function async2 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async 2 is completed")
            reject("Result from Async 2")
        }, 1000)
    })
}

function async3 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async 3 is completed")
            resolve("Result from Async 3")
        }, 1000)
    })
}

//If one is rejected, then the following promise will not execute

// async1()
// async2()
// async3()

async1()
    .then(result1 => {
        console.log(result1)
        return async2()
    })
    .then(result2 => {
        console.log(result2)
        return async3()
    })
    .then(result3 => {
        console.log(result3)
        console.log("All async function completed")
    })
    .catch(error => {
        console.log(error)
    })

//     //promise all: If one is reject then no promise is executed

//     let p1 = Promise.resolve(30)
//     let p2 = 100
//     let p3 = new Promise((resolve, reject) => {
//         setTimeout(resolve, 2000, "Hi!");
//     })
//     let p4 = new Promise((resolve, reject) => {
//         setTimeout(reject, 1000, "Error!");
//     })

//     Promise.all([p1, p2, p3, p4])
//     .then(function (values) {
//         console.log(values)
//     })
//     .catch(function(err){
//         console.log(err)
//     })