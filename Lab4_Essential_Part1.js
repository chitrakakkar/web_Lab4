/**
 * Created by chitrakakkar on 2/2/17.
 */

//Acts as our class definition - define a constructor
var Squirrel = function(n) {
    this.name = n;
    this.nuts = 0;
};

//Add a method to the Squirrel class
Squirrel.prototype.sayHello = function()
{
    console.log(this.name + " Says Hello!");
};

//Add another method
Squirrel.prototype.faveFood = function()
{
    console.log(this.name + " likes nuts");
};

//And another method
Squirrel.prototype.addNutsToStore = function(newNuts)
{
    this.nuts += newNuts;
};
Squirrel.prototype.jump = function()
{
    console.log(this.name + " is jumping!");
};

var fluffy = new Squirrel("Fluffy");

//Call some squirrel methods for fluffy

fluffy.sayHello();
fluffy.faveFood();
fluffy.addNutsToStore(10);
console.log("fluffy now has " + fluffy.nuts + " nuts in storage.");
console.log("\n");


var squeaky = new Squirrel("Squeaky");

squeaky.sayHello();
squeaky.faveFood();
squeaky.addNutsToStore(20);
console.log("squeaky now has " + squeaky.nuts + " nuts in storage.");
console.log("\n");



//Can you call addNutsToStore for this Squirrel?

var Mighty = new  Squirrel("Mighty");
Mighty.sayHello();
Mighty.addNutsToStore(28);
console.log("Mighty now has " + Mighty.nuts + " nuts in storage.");
console.log("\n");


var Jacky = new  Squirrel("Jacky");
Jacky.sayHello();
Jacky.addNutsToStore(28);
console.log("Jacky now has " + Jacky.nuts + " nuts in storage.");
console.log("\n");
//Adding properties to one Squirrel only
//squeaky.tree = "Oak Tree";

////console.log("Squeaky's tree is : "+ squeaky.tree);   // "Oak Tree"
//Fluffy doesn't have a tree
//console.log("Fluffy's tree is : "+ fluffy.tree);   // "undefined"

//Add a jump method only for fluffy

console.log("Here is the list of all the squirrels :-");
console.log("----------------------------------------");
console.log("\t");
//fluffy.jump();   //This works

//squeaky.jump();  //Calling this results in an error - squeaky doesn't have a jump method*/

var List_of_squirrels = ['Fluffy', 'squeaky', 'Mighty', "Jacky"];

for(var i=0;i<List_of_squirrels.length;i++)
{
    var new_Squirrel= new Squirrel(List_of_squirrels[i]);
    console.log(new_Squirrel.name);
    new_Squirrel.jump();
    console.log("\t");
}