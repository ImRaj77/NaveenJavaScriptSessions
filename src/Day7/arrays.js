
// Arrays : Collection of values
// first index called : LI --> Lowest Index
// Last index called  : HI --> Highest Index
// LI = 0
// HI = length - 1
// length = HI + 1

const { type } = require("wd/lib/commands");

// Different type of data :: mixed type of an array

let num = [1,2,3,4,5] ;         // 5 length ; 0-4 range
console.log(num.length);

let len = num.length ;
console.log('Hi = ', len-1);
console.log('Li = ',0);

console.log(num[-1]);           // undefined
console.log(num[2]);            // 3
console.log(num[4]);            // 5
console.log(num[5]);            // undefined

console.log('----');
console.log(num);
num[0] = 10;                    // array updation
num[4] = 50;
console.log(num);

console.log('----');
num[10] = 100;
console.log(num);
console.log(num.length);        // 11
console.log(num[5]);            // undefined
num[50] = 500;
console.log(num);
console.log(num.length);        // 51

console.log('------');
// famous interview question
let marks = [10,20,30,40];
console.log(marks.length);      // 4
marks[-1] = 5;
console.log(marks);             // it will print --> [ 10, 20, 30, 40, '-1': 5 ]
console.log(marks.length);      // 4
// If we try to create -ve index it will be added as a property i.e. key: value pair
// in the above array there are 4 values and 1 property
// Property will be added at the end 
// array lenght will be calculated on the basis of values not properties 
// Only -ve index will be added as property

console.log(marks[-1]);         // 5 --> It will not be considered as value
// it will be considered as a property like --->  -1 : 5

marks[-100] = 9000;
console.log(marks);             // [ 10, 20, 30, 40, '-1': 5, '-100': 9000 ]
marks[100] = 400;
console.log(marks);


// String array
let products = ['MacBook Pro', 'iMac', 'iPhone17', 'Canon', 'MacBook Air'];
console.log(products);
console.log(products.length);
console.log(typeof products);       // Object
console.log(typeof null);           // Object
console.log(typeof undefined);      // undefined


// Employee Data : 
let empData = ['Virat', 35, 23.44, true];
console.log(empData);
console.log(empData.length);
console.log(typeof empData);
console.log(empData[1]);


//------------//
let number = [10,20,30,40,50];
console.log(number);
// iterate the array
for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
}

console.log('-----');

for (let index = number.length-1; index >= 0; index--) {
    console.log(number[index]);    
}

// for .. of
// for .. in
// forEach
// map, reduce, filter


let pop = [];
console.log(pop.length);            // 0
pop[100] = 1000;
console.log(pop.length);
console.log(pop);