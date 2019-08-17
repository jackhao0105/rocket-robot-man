// Import the Construction Function from another files
var Person 	= require('./Person');
var Rocket  	= require('./Rocket');
var Robot  	= require('./Robot')

// Declare the variables
var person1 = new Person('jackie');
var robot1 	= new Robot('abo1');
var rocket1 = new Rocket('Falcon 9');

// Check new feature
robot1.control(rocket1);

// try ... catch the error
try{
	robot1.control(person1);
} catch(e) {
	console.log('Error while Robot wants to control Person')
}

console.log(robot1)
