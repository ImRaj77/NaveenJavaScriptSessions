
// 1. map : transform every element of the given array
// always returns : a new array

let num = [1,2,3,4,5];
let newNum = num.map( e => e * 2 );
console.log(newNum);

let sqr = num.map( e => e*e );
console.log(sqr);

// forEach vs map
// forEach is only for iteration it s=doesn't return anything
// where map returns a new array of same length or less length

let empNames = ['Uday', 'Nitin', 'Tom', 'Rajesh', 'Punam'];
let newEmp = empNames.map( e => e.toUpperCase() );
console.log(newEmp);                                            // [ 'UDAY', 'NITIN', 'TOM', 'RAJESH', 'PUNAM' ]
console.log(empNames);                                          // [ 'Uday', 'Nitin', 'Tom', 'Rajesh', 'Punam' ]


let number = [1,2,3,4,5,6,7,8,9,10];
number.forEach( e => {
    if(e % 2 == 0) {
        console.log(e);                 // even numbers 2,4,6,8,10
    }
});


// 2. filter : remove from existing array on the basis of given condition
// give me all the numbers greater than 30
let numbers = [10,25,30,45,50,60];
let newGrt30 = numbers.filter( e => e > 30 );
console.log(newGrt30);
console.log(typeof newGrt30);                   // object

let even = numbers.filter( e =>  e % 2 === 0 );
console.log(even);

let odd = numbers.filter( e =>  e % 2 != 0 );
console.log(odd);

let odd1 = numbers.filter( e =>  e % 2 === 1 );
console.log(odd1);


//
let empName = ['Uday', 'Nitin', 'Tom', 'Rajesh', 'Punam', 'Om'];
let grtr3 = empName.filter( e => e.length >3 );
console.log(grtr3);                                 // [ 'Uday', 'Nitin', 'Rajesh', 'Punam' ]

let productData = ['apple macbook', 'apple iph', 'samsung galaxy', 'canon', 'apple air'];
let finalProd = productData
                    .filter( e => e.startsWith('apple') )               // ['apple macbook', 'apple iph', 'apple air']
                        .filter( e => e.includes('iph') )               // ['apple iph]
                            .map( e => e.replace('iph', 'iphone'));     // ['apple iphone]
console.log(finalProd);                                                 // [ 'apple iphone' ]
console.log(productData);


// reduce : combine everything into ONE value
// it will return a single value
let numData = [10,20,30,40,50];
let total = numData.reduce( (sum, e) => sum = sum + e, 0);
console.log(total);                                             // 150


let productsData = ['apple macbook', 'apple iph', 'samsung galaxy', 'canon'];
let finalResult = productsData.reduce( (result, e) => result + e, ' ');
console.log(finalResult);

