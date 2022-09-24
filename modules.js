const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");

require("./mind-grenade");
console.log(data);

console.log(names);

sayHi(names.john);
sayHi(names.peter);
sayHi("Judas");
