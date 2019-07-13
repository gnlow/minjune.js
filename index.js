const boy = require("./boy.json");
const girl = require("./girl.json");
const lastname = require("./lastname.json");

const nameLength = (boy.length + girl.length) * lastname.length * (360 * 7);

const day = 1000 * 60 * 60 * 24;

const grades = [
	{school: "es", grade: 1},
	{school: "es", grade: 2},
	{school: "es", grade: 3},
	{school: "es", grade: 4},
	{school: "es", grade: 5},
	{school: "es", grade: 6},
	{school: "ms", grade: 1},
	{school: "ms", grade: 2},
	{school: "ms", grade: 3},
];

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

		this.birth = new Date(1103932800000 + day * (seed % (360 * 7)) );
		var today = new Date();
		this.age = today.getYear() - this.birth.getYear() + 1;
		this.grade = grades[this.age-8];
	}
}

var a = new Kid(random(nameLength));
console.log(a);