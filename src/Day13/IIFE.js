
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