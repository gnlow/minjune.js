const boy = require("./boy.json");
const girl = require("./girl.json");
const lastname = require("./lastname.json");

const nameLength = (boy.length + girl.length) * lastname.length * (360 * 7);

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
		this.lastname = lastname[seed % lastname.length][0];
		this.name = this.lastname + this.firstname;

		this.birth = new Date(1103932800000 + (1000 * 60 * 60 * 24 * (seed % (360 * 7)) ));
	}
}

var a = new Kid(random(nameLength));
console.log(a);