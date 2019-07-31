
//reverse a string
//Scott Hansford 7/31/19

//intake the string and split at the spaces
//this splits into an array
// we can then map .reverse to each item in the array
//then rejoin the characters in the list

let splitString = "Your mom jumps over the lazy dog";

function reverseString(str) {
    let resultString = str.split(' ').map(placeholderChar => x.split('').reverse().join('')).join(' ');
    return resultString;
}

document.getElementById('resultString').innerHTML = reverseString(splitString);