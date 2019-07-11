const boy = require("./boy.js");
const girl = require("./girl.js");

const nameLength = boy.length + girl.length;

let random = (max) => Math.round((max * Math.random()));

class Kid{
	constructor(seed){
		this.seed = seed;
		this.gender = seed % 2
		if(!this.gender){ //boy
			this.name = boy[Math.trunc(seed/2) % boy.length];
		}else{ //girl
			this.name = girl[Math.trunc(seed/2) % girl.length];
		}
	}
}

var a = random(nameLength);
console.log(new Kid(a).name, a);