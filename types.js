var x = "1";
var y = 7;
x + y;
> "17"

y + x;
> "71"

y - x;
> 6 //why?

x - 0 + y
> 8

//NaN
var a = 5;
var b = "hello";
a - b;
> NaN //not its own type; this is a Number

!undefined; //coercion
> true;
