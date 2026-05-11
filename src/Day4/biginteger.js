
console.log(Number.MAX_SAFE_INTEGER);           // 9007199254740991

console.log(9007199254740991 + 100);

// 2^53 - 1

let num = 100n;                         // big integer
console.log(typeof num);
console.log(num);

let n1 = BigInt(2000);
console.log(n1);
console.log(typeof(n1));

console.log(n1+10);                     // Cannot mix BigInt and other types, use explicit conversions

console.log(n1+10n);                    // 110n

console.log(10n*2);                     // Cannot mix BigInt and other types, use explicit conversions

console.log(10n*2n);                    // 20n

console.log(10n / 2n);                  // 5n    

console.log(-10n);                      // -10n

console.log("100n" + 10n);              // 100n10
console.log(+"100n" + 10n);              // Cannot mix BigInt and other types, use explicit conversions
// +"100n" will be converted into 100 and then + 10n so it will give an error


let phoneNumber = "9130977787";     // SSN, Credit card, Debit Card, aadhar, PAN, FAX numbers : String datatype
let cc = "4641n 1800 2561 2899";

console.log(phoneNumber.length);
console.log(cc.length);

let salary  = 25000;
console.log(salary);


