var person = {
    firstname: 'steve',
    lastname: 'fuckenstein',
    getFullName: function() {

        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }

}


var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments' + lang1 + lang2);
    console.log('----------------------------');

}

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');
    
    
    
}).apply(person, ['es', 'en']);


// when would I use this in real life?
// vvvvvvvvvvvvvvvvvv



//function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));



// function currying
function multiply(a, b ){
    return a*b;
}

var multiplyTwo = multiply.bind(this, 2);
var multiplyThree = multiply.bind(this, 3);

console.log(multiplyTwo(4));
