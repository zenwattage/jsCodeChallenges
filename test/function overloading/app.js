function greet(firstname, lastname, language){

    language = language || 'en';

    if(language === 'en'){
        console.log('hello ' + firstname + ' ' + lastname);
    }
}

greet('john', 'doe', 'en');