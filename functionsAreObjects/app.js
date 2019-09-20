const log = console.log;
//gets put onto global execution context
function greet() {
    log('hi');
}

//attaches language property to the function object
greet.language = 'english';

log(greet);


log(greet.language);