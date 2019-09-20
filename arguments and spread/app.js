function greet(firstname, lastname, language,) {

    language = language || 'en';
    lastname = lastname || 'scott';

    if(arguments.length === 0){
        console.log('missing parameters!');
        return;
    }


    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('----------------------');
}

greet();
greet('john', 'shit', 'fuck');
