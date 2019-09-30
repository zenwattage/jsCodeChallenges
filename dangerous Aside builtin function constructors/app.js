//built in function constructors

// (run in browser console)
var a = new Number(3);
// a
// a returns Number{3}
//  __proto__: Number
    // [{PrimitiveValue}] : 3
// so because it is a prototype - we have access
// to prototype methods like:
// a.toFixed(2)
// "3.00"

var a = new String("Scott")
// undefined

// a.indexOf("o")
// 2

// a
// String
// ​
// 0: "S"
// ​
// 1: "c"
// ​
// 2: "o"
// ​
// 3: "t"
// ​
// 4: "t"
// ​
// length: 5
// ​
// <prototype>: String { "" }



//PROTOTYPAL INHERITENCE 

// we attach our own method to the javascript String function constructor prototype!

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}