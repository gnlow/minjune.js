const mj = require("./index.js");
var seed = new mj.Key(...mj.Swit.randByRanges(mj.nameRange));
var a = new mj.Kid(seed);
console.log(a);