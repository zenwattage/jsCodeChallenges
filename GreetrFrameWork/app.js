//gets a new object(the architecture allows us to not have to use the 'new' keyword here)

var g = G$('John', 'Doe');
// console.log(g);

//use our chainable methods
g.greet().greet(true);
g.greet().setLang('en').greet(true);
g.greet().setLang('es').greet(true);

const array = [
    ["one","two","three"],
    ["four","five","six"],
    ["seven","eight","nine"],
];

console.log(array[1]);



// use our object on the click of the login button
$('#login').click(function() {
    //create new Greetr object - pretending we know the name
    var loginGrtr = G$('John', 'Doe');

    $('#logindiv').hide();

    //returns an html greeting, passing the #greeting as the selector and chosen language, and the log welcome message

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})