// pure prototypal inheritance:
// CREATE AN OBJECT
// THEN USE THAT OBJECT AS THE PROTOTYPE AS FOR OTHER OBJECTS



//polyfill for Object.create
if(!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error('Object.create implementation' + 'only accepts the first parameter');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}



var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

//passing the object I want to create FROM
var john = Object.create(person);
// this object is empty
// it's prototype POINTS TO JOHN

//overide defaults
john.firstname = 'John';
john.lastname = 'Doe';

console.log(john);

