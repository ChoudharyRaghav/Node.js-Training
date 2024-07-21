var buffer1 = Buffer.from("123456789")
var buffer2 = Buffer.from("HELLO")
var buffer3 = Buffer.from("ABCDEFJKLMNOPQRSTUVWXYZ")


console.log(buffer1)
console.log(buffer1.toString())
console.log(buffer2)
console.log(buffer2.toString())
console.log(buffer3)
console.log(buffer3.toString())

var result = buffer2.copy(buffer1, 2) //Copy buffer2 in buffer1 from index 2(3rd character)

console.log(result)
//After Copy
console.log(buffer1.toString())
console.log(buffer2.toString())

console.log(Buffer.concat([buffer1, buffer2]).toString())
console.log(buffer1.equals(buffer2))

//Compares the UTF-8 code of each character
console.log(Buffer.compare(buffer1, buffer2))
console.log(Buffer.compare(buffer2, buffer3))
