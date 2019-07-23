const boy = require("./boy.json");
const girl = require("./girl.json");
const lastname = require("./lastname.json");

const nameLength = (boy.length + girl.length) * lastname.length * (360 * 7);
const nameRange = [boy.length + girl.length, lastname.length, 360 * 7];

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

let random = (max) => Math.trunc((max * Math.random())); //Generate random integer

class Swit{
	constructor(value, range){
		this.range = BigInt(range);
		this.value = BigInt(value) % this.range; //0~this.range
	}
	static randomize(range){
		return new Swit(random(range), range); //Generate random Swit in range
	}
	static randByRanges(ranges){
		return ranges.map(range => Swit.randomize(range));
	}
}

class Key{
	constructor(...swit){
		this.swits = [...swit];
		var switSize = 1n;
		var seedTemp = 0n;
		this.swits.map((data, index) => Object.assign(data, {index})) //Add index to keep order
		.sort((a,b) => a.range==b.range?0:(a.range>b.range?1:-1)) //Sort by range
		.forEach(obj => {
			seedTemp += obj.value * switSize;
			switSize *= obj.range;
		});
		this.swits.sort((a,b) => a.index==b.index?0:(a.index>b.index?1:-1)) //Sort by index
		.map(obj => delete obj.index); //Delete index
		this.seed = seedTemp;
	}
	getSwits(ranges){
		var sortedRanges = ranges.map((range, index) => ({range: BigInt(range), index}))
		.sort((a,b) => a.range==b.range?0:(a.range>b.range?1:-1));
		var switSize = 1n;
		var out = sortedRanges.map(obj => {
			obj.swit =(this.seed/switSize)%obj.range;
			switSize *= obj.range;
			return Object.assign(new Swit(obj.swit, obj.range), {index: obj.index});
		});
		return out.sort((a,b) => a.index==b.index?0:(a.index>b.index?1:-1))
		.map(obj => {delete obj.index;return obj});
	}
}

class Kid{
	constructor(seed){
		this.seed = seed;
		this.gender = seed % 2;
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

var b = Swit.randomize(5);
var c = Swit.randomize(3);
var d = Swit.randomize(2);
var seed = new Key(...Swit.randByRanges(nameRange));
console.log(seed.getSwits(nameRange));