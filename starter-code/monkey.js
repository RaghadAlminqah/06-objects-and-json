console.log("monkey.js loaded");


var monkey = function (name, species , foodsEaten) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [];
}
monkey.prototype.eatsomthing= function(food){
this.foodsEaten.push(food)}

monkey.prototype.introduce= function(){
    console.log('my name is '+ ${this.name} +'. my species is '+ Monkey.species+'. I ate an '+ Monkey.foodsEaten);

}

    
  var Monkey = new monkey('Monkey1','mandrill');
monkeyone.eatsomthing('apple');
monkeyone.introduce();

var Monkey = new monkey('Monkey2','mandrill');
monkeyotwo.eatsomthing('apple');
monkeytwo.introduce();

var Monkey = new monkey('Monkey3','mandrill');
monkeythree.eatsomthing('apple');
monkeythree.introduce();






/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
