var person = new Object(); //sits in memory

person["firstName"] = "Tony"; //computed member accessor

person["lastname"] = "alicea";

var firstNameProperty = "firstName";
console.log(person);
console.log(person[firstNameProperty]);

var persona = {
    "firstName" : "Tony",
    "lastName" : "Aliciais"
}

console.log(persona[firstNameProperty]);

person.address = new Object();
person.address.street = "111 main st.";
console.log(person.address);

person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.state);

console.log(person["address"]["state"]);