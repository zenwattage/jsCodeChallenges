//object literals

// var person = new Object();
var person = {
    firstname: "Tony",
    lastname: "Alicia",
    address: {
        street: "111 main st.",
        city: "New york",
        state: "ny"
    }

}

function greet(person){
    console.log('Hi ' + person.firstname);
}

greet(person);

greet({
    firstname: 'Mary',
     lastname: 'Doe'
});
 

person.address2 = {
    street: '333 Second st.'
}

console.log(person.address2);