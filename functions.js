var x = 5;
var incX = function() { //a function literal
    x += 5;
};
function incX() { //technically the same, but less clear (could be invoked before it is declared)
    x += 5;
};
incX();
x;
> 10

incX();
x;
> 15

//methods
var obj = {
    addFive: function(x) {
        this.lastFive = x; //inside a "method", "this" refers to the enclosing object
        return x + 5;
    },
    addTen: function(x) {
        return x + 10;
    }
}
obj.addFive(1);
> 6

obj.lastFive;
> 1
