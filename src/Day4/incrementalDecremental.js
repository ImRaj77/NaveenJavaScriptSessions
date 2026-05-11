
// ++ Incremental operator  -- Decremental operator

// 1. post increment : increase the value later
// first assign and then increse
let a = 1;
let b = a++;
console.log(a);         // 2
console.log(b);         // 1

let x = -99;
let y = x++;
console.log(x);         // -98
console.log(y);         // -99


let num = 10 ;
console.log(num++);     // 10
console.log(num);       // 11


// 2. pre increment : increase the value before
// first increase and then assign
let m = 1;
let n = ++m;
console.log(m);         // 2
console.log(n);         // 2


let u = -1000;
let v = ++u;
console.log(u);         // -999
console.log(v);         // -999


// 3. Post Decrement
let w = 2;
let r = w--;
console.log(w);         // 1
console.log(r);         // 2


// 4. Pre Decrement
let p = 2;
let q = --p;
console.log(p);         // 1
console.log(q);         // 1

let pop = 100;
console.log(++pop);     // 101
console.log(pop);       // 101


let rest = -9;
console.log(--rest);    // -10
console.log(rest);      // -10

