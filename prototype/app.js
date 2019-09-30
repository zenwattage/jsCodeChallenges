var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

//dont ever do this - for demo purposes only

john.__proto__ = person;
console.log(john.getFullName()); //returns John Doe
console.log(john.firstname); // returns John - instead of 'Default'

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.lastname); //returns Default
console.log(jane.getFullName()); // returns Jane Default