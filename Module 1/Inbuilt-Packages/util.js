var util = require("util")

var text = "Happy %dth Birthday %s 🎉"

var result = util.format(text, 58, "Papa")

console.log(result)

const nm = "Raghav"
const age = 26

const frmtStrg = util.format("Name : %s, Age : %d", nm, age)
console.log(frmtStrg)