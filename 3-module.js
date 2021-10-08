// Node uses CommonJS library, Every file is a module in node
// module : Incapsulated code, to share min code
// Objects, utilities are being imported from modules(files) using riquire GLOBAL 
const names = require('./4-names')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavour')
require('./7-mind-granade'); // The function from this module gets executed

console.log(data)
console.log(data.items)
console.log(data.singlePerson)


sayHi(`Sushan`)
sayHi(names.john)
sayHi(names.peter)