const boy = require("./boy.js");
const girl = require("./girl.js");

let random = (max) => Math.round((max * Math.random()));

console.log(boy[random(boy.length)]);