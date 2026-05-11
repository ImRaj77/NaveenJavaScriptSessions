
//Data Types
// 1. Primitive Data Type :  Memory is fixed - Predefined datatype
// number, 
// String, 
// boolean : true/false
// BigInt
// undefined
// null

// 2.Non Primitive Data type: Reference Type - Memory is not fixed (dynamic)
// Array
// objects
// functions
// map, list, set



// 3 Identifiers : var, let, const - introduced in 2015 with ES6
// 1. number
// size : 8 bytes = 8*8 = 64 bits
let x = 10;
console.log(x);

console.log(typeof x);

let y = 12.33;
console.log(y);
console.log(typeof y);

let i = -100;
console.log(i);
console.log(typeof i);


// 2. string : collection / set of characters 
// " ",  ' '
// size : for each char it will take 2 bytes 
let name = "Rajesh";
console.log(name);
console.log(typeof name);


let msg = 'Welcome to India'
console.log(msg);
console.log(typeof msg);


let m1 = "$";
console.log(m1);
console.log(typeof m1)


let m2 = '1000';
console.log(m2);
console.log(typeof m2);


let p;
console.log(p);                     // undefined
console.log(typeof p);              // undefined


// boolean : true/false
// size : 4 bytes
let flag = true
console.log(flag);
console.log(typeof flag);


let isElementExists = false;
console.log(isElementExists);
console.log(typeof isElementExists);


// 4. undefined : when we are not sure about specific variable
// size : 0 bytes

let firstName = undefined;
console.log(firstName);
console.log(typeof firstName);

firstName = 'Pooja';
console.log(firstName);
console.log(typeof firstName);


// null : no values
// size : 0 bytes
let obj = null;
console.log(obj);
console.log(typeof obj);      // object    // existing bug in JS.. legacy bug


// Re-Initialization:

let c = 10 ;
c = 20;                 
c = 25;
c = 100;
c = 1789;
c = "Rajesh"
console.log(c);
console.log(typeof c);


// var is leagacy identifier - in olg js the way of declaring variables
var p = 10;
var p = 20;
console.log(p);                     // it will print 20 on the console


var lastName = "Sharma";
var toolName = "Playwright";
var toolName = "Selenium";
console.log(toolName);

// var is not recommended to use : we never use var


// const... fixed value
const pi = 3.14;
pi = 0.56;                          // Not allowed the assignment to a const variable
console.log(pi);
console.log(typeof pi);


const trainerName = "Naveen";
trainerName = "Rajesh";             // Not allowed the assignment to a const variable
console.log(trainerName);

const title;                        // Missing initializer in const declaration
console.log(title);

// cont : 
// redeclaration : Not allowed
// reassignment : Not allowed

// let : mostly recommended to use
// redeclaration : Not allowed
// reassignment : allowed                              

// var :  Not recommended to use
// redeclaration : allowed
// reassignment : allowed 


// Hoisting : If you are trying to access the variable before declaring
console.log(m);         // Cannot access 'm' before initialization
let m = 10 ;            // Hoisting is not allowed with let

// Hoisting is allowed with var but not with let 
console.log(n);         // undefined
var n = 10;

console.log(y);         // Cannot access 'y' before initialization
const y = 10;           // Hoisting is not allowed with const