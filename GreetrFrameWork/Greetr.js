//create safe execution context

//' wrap up some code to make anything inside of it safe and only expose onto the global object - what we want to '

// then pass to it -> anything we need access to , ie - the global variable(window), the jquery variable

//IIEF that takes in the global and jquery object

//execution context is created 
(function (global, $) {


    //safe code inside here ready to be reused by anyone

    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language); //creates our seperate constructor object
    }


    //hidden within the scope of the IIFE an dnever directly accessible
    var supportedLanguages = ['en', 'es'];


    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };


    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged In',
        es: 'Inicio Sesion'
    };

    //putting our methods onto the prototype(to save memory space)

    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            //checking if the language exists in the array
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },


        //determine which greeting will be returned
        greet: function (formal) {
            var msg;

            //if undefined or null it will be coerced to 'false'

            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);

            }

            //this refers to the calling object at execution time
            //makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());

            }
            return this;
        },

        setLang: function (lang) {

            //set the language
            this.language = lang;
            //validate the language
            this.validate();

            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded'
            }
            if (!selector) {
                throw 'Missing jQuery selector'
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            //update the selector
            $(selector).html(msg);

            //making method chainable
            return this;
        }

    };


    //function constructor that builds an object and gives it 3 properties
    //sets the values of those properties if something is passed in
    //otherwise it sets defaults
    Greetr.init = function (firstName, lastName, language) {
        var self = this; //self points to empty object created by the new operator
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        self.validate();

    }

    //any object created from this function - will have a prototype attached to:
    //trick borrowed from jQuery so we dont need the 'new' keyword
    Greetr.init.prototype = Greetr.prototype; //prototype for all objects created with the Greetr.prototype function

    // setting alias of G$
    global.Greetr = global.G$ = Greetr; //expose to outside world attached to global object

    // TODO: CHECK TO SEE IF WINDOW OBJ EXISTS
}(window, jQuery)); //invoked with window or jquery