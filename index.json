const boy = require("./boy.js");
const girl = require("./girl.js");
const lastname = require("./lastname.js");

const nameLength = (boy.length + girl.length) * lastname.length;

let random = (max) => Math.round((max * Math.random()));

class Kid{
	constructor(seed){
		this.seed = seed;
		this.gender = seed % 2
		if(!this.gender){ //boy
			this.firstname = boy[Math.trunc(seed/2) % boy.length];
		}else{ //girl
			this.firstname = girl[Math.trunc(seed/2) % girl.length];
		}
		this.lastname = lastname[Math.trunc(seed) % lastname.length][0];
		this.name = this.lastname + this.firstname;
	}
}

var a = random(nameLength);
console.log(new Kid(a).name, a);