// (function(name) {
//     var greeting = 'Hello ';
    
//     console.log(greeting + ' ' + name);
// }('Scott')); //IIFE


// console.log(greeting);

(function(global, name) {
    var greeting = 'Hello ';
    global.greeting = 'Hello';

    console.log(greeting + ' ' + name);
}(window, 'Scott')); //passing reference to window object to the IIEF 'global'


console.log(greeting);