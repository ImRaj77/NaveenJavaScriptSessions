
// Falsy values : 8 values available
// true  : 1, -5, [], Infinity, " ", "AnyValue", 
// false : false, 0, -0, 0n, "", '', ``, null, undefined, NaN, 
// any number other than 0 it will treat as TRUE in JavaScript

if (0) {
    console.log('Hi');
} else {
    console.log('Bye');
}
console.log('-----');
if (1) {
    console.log('Hi');
} else {
    console.log('Bye');
}

