console.log(1 < 2 < 3);
console.log(3 < 2 < 1);
// 3 < 2 = false
// so 3 < 2 < 1  basically is saying : false < 1
// console.log(false < 1) returns true!
// because of coersion
// Javascript tries to coerce 'false' into a number
// Number(false) returns 0!
// so
// false = 0 =   false < 1 = true!
console.log(false < 1);
//so
// 1 < 2 < 3 = true
// because 1 < 2 = true
// true < 3 = true
// Number(true) = 1
// so  1 < 2 = true!

console.log(Number(undefined)); //NaN
console.log(Number(null)); // 0 


var a = 0;
var b = false;

if (a === b) { 
    console.log("They are equal");
} else {
    console.log("nope they are not equal");
}