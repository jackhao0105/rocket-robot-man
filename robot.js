var Rocket = require('./Rocket');

function Robot(name){
	this.name = name
	this.auto = true;
	this.machine = [];

}

Robot.prototype.auto = function() {
	this.auto = false;
}

Robot.prototype.control = function(rocket){
	if( rocket instanceof Rocket){
		this.machine = [rocket];
	} else {
		throw new Error('Robot just can only control the machine')
	}
}

module.exports = Robot;