//namespace = container for variables and functions

//used to keep variables and functions with the same name seperate
const log = console.log;


var greet = 'Hello!';
var greet = 'Hola!';

// log(greet);

var english = { 
    greetings: { 
        basic: 'Hello!'
    }
};

var spanish = {};

// english.greetings = {};
english.greet = 'Hello!';
spanish.greet = 'Hola!';

log(english);

