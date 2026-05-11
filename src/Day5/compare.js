
// ==   vs   ===
// ==  loose eqaulity : It will check only the value
// === strict equality : It will check value + type
// Always recommended to go with Strict Equality

console.log(10 == 10);          // true
console.log(10 == '10');        //  10 == 10  --> true

console.log("10" == 10);        // true

console.log(10 === 10);         // true
console.log(10 === "10");       // false  --> number === string
console.log('10' === 10);       // false  --> string === number

// true  = 1
// false = 0

console.log(true == 1);         // true
console.log(true === 1);        // false  -->  boolean === number
console.log(false == 0);        // true
console.log(0 === false);       // false


console.log("" == 0);           // true   -->  //0 == 0
console.log("" === 0);          // false  -->  //0 === 0

console.log([] == 0);           // true   -->  //0 == 0
//console.log([] === 0);          // false  -->  //0 === 0

let n1 = 10;
let n2 = "10";
console.log(n1 == n2);          // true
console.log(n1 === n2);         // false  --> number === string

console.log(null == undefined);     // true    --> object == undefined
console.log(null === undefined);    // false   --> object === undefined


console.log([] == "");          // true  --> //0 == 0
//console.log([] === "");         // false --> //0 === 0
console.log([] == []);          // false --> compare memory addresses 


