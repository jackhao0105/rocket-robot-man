function Rocket(name){
	this.name = name;
	this.staff = []
}

Rocket.prototype.fly= function(){
	console.log("3...2...1... Go")
}



module.exports = Rocket;