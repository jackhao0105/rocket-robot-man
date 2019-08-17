var chalk = require('chalk')

function Person(name){
	this.name = name;
}

Person.prototype.sayHi = function(){
	console.log("My name is " + chalk.red(this.name))
}

module.exports = Person;