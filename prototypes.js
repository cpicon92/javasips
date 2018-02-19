//constructor and "class definition" all in one (note the capital variable name)
var Cat = function(name, age, coatColour) {
    this.name = name; //"this" in a constructor function refers to the new instance; otherwise it would be the function var itself
    this.age = age;
    this.coatColour = coatColour;
    //a method
    this.sayMeow = function() {
        return "meow " + this.name;
    };
};
var cat1 = new Cat("Bob", 42, "brown");
cat1;
> Cat {name: "Bob", age: 42, coatColour: "brown", sayMeow: ƒ}

cat1.sayMeow();
> "meow Bob";

Cat("Bob", 42, "brown"); //missing "new"; "this" becomes the global execution context a.k.a. "window"
> undefined //function does not actually return anything

//modify the prototype directly; a cleaner way of adding methods
Cat.prototype.hiss = function() {
    return "hsssss " + this.name;
};
var cat2 = new Cat("Hermione", 12, "golden");
cat2;
> Cat {name: "Hermione", age: 12, coatColour: "golden", sayMeow: ƒ} //note that "hiss" is not listed as a prop

cat2.hiss();
> "hsssss Hermione" //still works

var o = {};
o.__proto__.constructor.name;
> "Object"

cat2.__proto__.constructor.name
> "Cat"
