function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet();


// undefined || 'hello'
// returns "hello"
// because || returns the value that can be coerced
// "hi" || "hello" returns "hi" because "hi" is the first // value that can be coerced to true


