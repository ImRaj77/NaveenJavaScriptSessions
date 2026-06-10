
// IIFE -- Immediately Invoked Function Expression
// IIFE is also Anonymous function 
// this function will be invoked (called) by itself

// IIFE 

(() => {
    console.log('Hello World !');
})();                                   // calling this IIFE function by ()


// Anonymous IIFE Function
(function () {
    console.log('Hello World !');
})();                                  // Immediately calling or invoking

// Anonymous IIFE Function
( function (username) {
    console.log("Hello, ", username);
})('Rajesh');


// Anonymous IIFE Function
( function (name, age) {
    console.log(name, age);
})('Rohan', 20);

// Anonymous IIFE function can not be hoisted

// Advantage :
// 1. automatically will get called by itself

// We can not reuse it


// IIFE with arrow function
( () => {
    console.log('Hello World');
    console.log('Bye');
})();

let flag = ( (browserName) => {
    console.log('Hello World', browserName);
    console.log('Bye');
    return true;
})('Chrome');
console.log(flag);

// IIFE Function will be stored in the Heap Memory