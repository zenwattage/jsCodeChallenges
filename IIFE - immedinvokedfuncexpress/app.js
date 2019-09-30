//immediate invoked function expression IIFE

function greet(name) {
    console.log('hello ' + name);
}//function statement

greet();//invoking statement
//returns undefined because javascript assigns undefined to global context execution variables unless otherwise specified by the programmer


//using function expression or function literal
// creating function on the fly
var greetFunc = function(name) {
    console.log('hello ' + name);
};
greetFunc('Scott');


// Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    //console.log('hello ' + name);
    return 'Hello ' + name;
}('Scott');



//3; //valid javascript expression
//but
// if we put:
// function(name) {
//     console.log(name);
// };
// we get a syntax error 'function statement requires a name'

//wrapping a function in parenthesis 

//tells javascript this is an expression

// or a function that is being created on the fly

// (function(name) {
//     console.log('Hello' + ' ' + name);
// });
// we get no errors - function is sitting there doing nothing
// so

var firstName = 'Scott';

(function(name) {
    var greeting = 'Hello my name is: ';
    console.log(greeting+ ' ' + name);
}(firstName));
//IIEF - function wrapped in parens to trick syntax parser
//then invoking the function at the same time