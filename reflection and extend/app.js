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

for ( var prop in john) {
    if(john.hasOwnProperty(prop)) {//reflecting on john object
    console.log(prop + ': ' + john[prop]);
}
}

var jane = {
    address: '111 main st',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}


_.extend(john, jane, jim);

console.log(john);





// console.log(john.getFullName()); //returns John Doe
// console.log(john.firstname); // returns John - instead of 'Default'

// var jane = {
//     firstname: 'Jane'
// }

// jane.__proto__ = person;



// console.log(jane.lastname); //returns Default
// console.log(jane.getFullName()); // returns Jane Default