
Array.prototype.myCustomFeature = 'Cool!';

var arr= ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log((prop + ': ' + arr[prop]));
}

// if we use for in with an array - we return the prototypes as well 
