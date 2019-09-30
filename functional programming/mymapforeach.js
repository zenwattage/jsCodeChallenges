//function that creates a new array
//loops through the array
// at each index push the index into the array - connecting each index to the mapped function

function mapForEach(array, fnctn) {
    var newArray = [];

    for( var i = 0; i < array.length; i++) {
        newArray.push(
            fnctn(array[i])
        )
    };

    return newArray;
}



var arr = [1, 2, 3];
console.log(arr);



var divideBy2 = mapForEach(arr, function(item) {
    return item / 2;
});
console.log(divideBy2); // returns [0.5, 1, 1.5]


var multiplyBy2 = mapForEach(arr, function(item) {
    return item * 2; 
});
console.log(multiplyBy2); // returns [2, 4, 6]




var checkLimit = function(limiter, item) {
    return item > limiter; //true or false
}

var arr4 = mapForEach(arr,
     checkLimit.bind(this, 2));
console.log(arr4);




var checkLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr, checkLimitSimplified(2));
console.log(arr5);