function Robot(name){
	this.name = name
	this.auto = true;
}

Robot.prototype.auto = function() {
	this.auto = false;
}

module.exports = Robot