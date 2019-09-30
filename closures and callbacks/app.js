//example of common use of closures and function expressions
function sayHiLater() {
    var greeting = 'Hi!';

    setTimeout(function() {
        console.log(greeting);
    }, 3000);// 3 seconds later this function still has access to 'greeting', even though sayHiLater(); has stopped running
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function() {

// });


function tellMeWhenDone(callback) {

    var a = 1000; //some
    var b = 2000;

    callback(); //the callback function - runs function i pass
}

tellMeWhenDone(function() {
    console.log('I am done');
});

tellMeWhenDone(function() {
    console.log('ALL done!');
});