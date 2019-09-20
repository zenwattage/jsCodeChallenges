// by value primitives
var a = 3;
var b;

//2 different spots in memory

b = a;
a = 2;

console.log(a);
console.log(b);

//by reference - all objects including functions

var c = {
    greeting: 'hi'
};

var d; 

d = c;

c.greeting = 'hello'; //mutate

//both are pointing to the same location in memory
console.log(c);
console.log(d);



//by reference- even as parameters
function changeGreeting(obj) {
    obj.greeting = 'hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

//equals operator sets up new memory space - new address
c = { greeting: 'howdy'}; //new object being created so new memory is created
console.log(c);
console.log(d);

