var o = {}; //an empty object literal
o.hello = "world";
o;
> {hello: "world"}

var another = {something: "else"};
another.something;
> "else"

delete another.something;

another["something"]; //alternative syntax
> "else"

var things = []; //an empty array literal
things[0] = o;
things [1] = another;
things;
> [{hello: "world"}, {something: "else"}]

[6, 8, 9, 3, 5, 7, 8].slice(1, 5); //arrays are objects with methods
> [8, 9, 3, 5]

//to delete from an array use splice
var arr = [6, 8, 9, 3, 5, 7, 8];
arr.splice(2, 1);
arr;
> [6, 8, 3, 5, 7, 8]
