var arr = [6, 8, 9, 3, 5, 7, 8];
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}
arr;
> [12, 16, 18, 6, 10, 14, 16]

var obj = {name: "Seiji Amasawa", age: 12, gender: "n/a"};
var out = "";
for (var k in obj) {
    out += k + " is " + obj[k] + ", ";
}
out;
> "name is Seiji Amasawa, age is 12, gender is n/a, "
