// var a; 

// if (a === 3) {
//     console.log('fuck');
// }

// greet();

//function statement
//doesn't result in a value when it's run
function greet() {
    console.log('Hi');
}

//-----------------------------

//creating object, on the fly, and setting it equal to the variable - to the address in the memory that the variable points to which now contains a function object

//this function is anonymous because there is no name before the paranthesis - the objects' name property is empty
//because the variable name is pointing to the address where the function lives

// anonymousGreet(); 

var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet(); //we invoke the code by pointing to the address where the function lives


// function log(a) {
//     console.log(a);
// }


// log('hi');

// log({
//     greeting: 'hi'
// });

function log(a) {
    a();
}

//function expression
log(function() {
    console.log('hi');
});


