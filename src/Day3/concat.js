let x = 100;
let y = 200;

let a = "Selenium";
let b = "Playwright";

console.log(x+y);           // 300
console.log(a+b);           // SeleniumPlaywright

console.log(x+a);           // 100Selenium
console.log(a+y);           // Selenium200
console.log(x+y+a+b);       // 300SeleniumPlaywright
console.log(a+b+x+y);

console.log(a+b+(x+y));     // SeleniumPlaywright300

console.log(x+y+a+b+x+y);   // 300SeleniumPlaywright100200

console.log(1+'1');         // 11
console.log('1'+1);         // 11   
console.log(1+1);           // 2
console.log('1'+'1');       // 11

console.log(" - - - - - - -- - - ");
console.log(1-'1');         // (1-1) 0

console.log('5'-2);         // 3
console.log('5'+2);         // 52

console.log("10"-"4");      // 6
console.log("10"+"4");      // 104

console.log('hello'-2);     // NaN

console.log(10-'Naveen');   // NaN
console.log(10+'Naveen');   // 10Naveen

console.log(" - - - - - - -- - - ");

console.log(10 / '2');      // 5
console.log('10' / 2);      // 5

console.log('20'/'5');      // 4
console.log(20/'testing');  // NaN

console.log(" - - - - - - -- - - ");

console.log(10 * '2');      // 20
console.log('10' * '2');    // 20
console.log(10 * 'Hello');  // NaN

// Exponential 
// **
console.log(2**3);          // 2^3 exponential = 8
console.log('2'**'3');      // 8

// Unary plus (+) operator : Converts to a number

console.log(+"42");         // 42 
console.log(+"42"+5);       // 47    

let d = 45 ;
console.log(+d+10);         // 55

let totalAmount = '2000';
console.log(totalAmount + 200);         // 2000200
console.log(+totalAmount + 200);        // 2200

// Unary negation (-) operator : Converts to a number
console.log('42');                      // 42
console.log('42'+100);                  // 42100
console.log(-'42' + 100);               // 58

console.log(-'120'-20);                 // -140

let salary = "30000";
console.log(salary + 2000);             // 300002000
console.log(+salary + 2000);
console.log(-salary + 2000);

console.log(100 - - '40');             // 140
console.log(1 + + '2');                // 3

console.log(+"hello"+2);                // NaN

