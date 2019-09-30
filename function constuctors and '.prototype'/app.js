//function constructors

//ANY FUNCTION WE INTEND TO USE AS A CONSTRUCTOR
// WE START WITH A CAPITAL LETTER


// var john = new Person(); //java method of creating new object

function Person(firstname, lastname) { //function constuctor
    //set parameters to avoid 'new' memory problem
    console.log(this);
    
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');
    
}



Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// because john and jane are using the 'new' keyword to use the 'Person()' function as a constructor
// they are attached to the Person object prototype
//because they are objects created using THAT function as a constructor - they are attached to THAT functions prototype


var john = new Person('John', 'Doe');
//keyword 'new' creates empty object
//so when Person() is executed
// the context is inside the empty object created by 'new'


var jane = new Person('Jane', 'Doe');
console.log(jane); //returns the same - because 'new' gives that empty object


Person.prototype.getFormalFullName = function() {
    return 'Formal name: ' + this.lastname + ', ' + this.firstname; 
}
//BY ATTACHING METHODS TO THE PROTOTYPE WE PRODUCE FAR MORE EFFICIENT CODE
// by attaching the method to the prototype we do not bloat the person object with all the methods we decide to attach
//instead by attaching the methods to the Person.prototype - we only attach the method to any
// object that is created through use of ' new Person()' constrcutor
// we keep the Person object's memory space small
// while giving access to that method - to every object that is created using person as a constructor


console.log(john.getFormalFullName());
