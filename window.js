var x = 5;
window.x = 7;
x;
> 7

var y = 3;
var f = function() {
    y = 5;
    z = 10; //never use a variable without declaring it first
    var a = 9;
};
f();
y;
> 5

z;
> 10

a;
> undefined

window.alert("I suck"); //never use window.alert
alert("I suck even more"); //same
