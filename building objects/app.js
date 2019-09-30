//function constructors,
// 'new', and the history of javascript

// var john = new Person(); //java method of creating new object

function Person(firstname, lastname) { //function constuctor
    //set parameters to avoid 'new' memory problem
    console.log(this);
    
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');
    
}

var john = new Person('John', 'Doe');
//keyword 'new' creates empty object
//so when Person() is executed
// the context is inside the empty object created by 'new'

console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane); //returns the same - because 'new' gives that empty object
