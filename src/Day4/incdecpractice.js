
// const rest = -9;
// console.log(--rest);        // TypeError: Assignment to constant variable.
// console.log(rest);      

const { type } = require("wd/lib/commands");


// let i = 11;
// let j = i++ + ++i ;
// console.log(i);     // 13
// console.log(j);     // 24

console.log("--------");

let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b ;
console.log(a);                     // 13
console.log(b);                     // 24
console.log(c);                     // 103


// let i = 0;
// let j = i++ - --i + ++i - i--;
// console.log(i);         // 0
// console.log(j);         // 0


let i = 1, j=2, k=3;
let m = i-- - j-- - k-- ;
console.log("i="+i);        // 0
console.log("j="+j);        // 1
console.log("k="+k);        // 2
console.log("m="+m);        // -4


let p = 0, q = 0;
let r = --p * --q * q-- * p-- ;
console.log(p);         // -2
console.log(q);         // -2
console.log(r);         //  1


let d = 1.5;
let D = 2.5;
console.log(d++ + ++D);     // 5


console.log(++true);        // SyntaxError: Invalid left-hand side expression in prefix operation
console.log(true++);        // SyntaxError: Invalid left-hand side expression in postfix operation


//console.log(12.33n);        // SyntaxError: Invalid or unexpected token : Not allowed

console.log(7n/2n);         // 3n
// We can not apply bigInt on decimal numbers


let pop = 10n;
console.log(++pop);         // 11n



let bill = 1000;
let finalBill = bill + "" ;        // converted number into string
console.log(finalBill);       
console.log(typeof bill);       // number
console.log(typeof finalBill);  // String



let marks = 100 ;
// convert number to string
console.log(""+marks);

// convert string into a number
let score = "1000";
let x = +score
console.log(typeof x);      // number
console.log(x+20);          // 1020


let myNum = 100n;
console.log(myNum + "");            // 100      -- converted bigInt into String
console.log(myNum + "" + 200);      // 100200


// String + anything  ===> string
// anything + string  ===> string
// string + string    ===> string
// number + number    ===> number
// bigint + bigint    ===> bigint
// bigint + number    ===> error

