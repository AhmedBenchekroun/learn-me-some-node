var fs = require ('fs');

var count = fs.readFileSync(process.argv[2]);
var split = count.toString().split("\n")

console.log(split.length-1);