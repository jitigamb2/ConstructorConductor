//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age) {
	this.name = name;
	this.age = age;
	
	this.sayName = function() {
		alert(this.name);
	}
}


//Now create three instances of Person with data you make up

  //code here

var user1 = new Person("Ben", 23);
var user2 = new Person("Ted", 25);
var user3 = new Person("Lily", 30);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
