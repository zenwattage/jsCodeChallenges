function makeGreeting(language) {
    
    return function(firstname, lastname) { //this function has access to the language that was passed at the time of invocation

        
        if(language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if(language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }

    }
}

var greetEnglish = makeGreeting('en');//function object whose closure points to the language being english
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');