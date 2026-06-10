
// Array functions : 

let num = [1,2,3,4,5];
console.log(num.length);            // 5
// length is property not method
// array is nothing but an object 

//1. push : Appends new elements to the end of an array, and returns the new length of the array.
let e1 = num.push(100);                      // 100 will be added at the end of an array
console.log(num);
console.log(e1);                    // 6
console.log(num.length);            // 6

//2. pop : Removes the last element from an array and returns it. If the array is empty, 
//  undefined is returned and the array is not modified.
let num1 = [1,2,3,4,5];
let t1 = num1.pop();                // pop will return the removed element
console.log(num1);                  // [ 1, 2, 3, 4 ]
console.log(t1);
let t2 = num1.pop();                // pop will return the removed element
console.log(num1);                  // [ 1, 2, 3 ]
console.log(t2);


//3. unshift : add to the begining of an array
// Inserts new elements at the start of an array, and returns the new length of the array.
let product = ['imac', 'iphone', 'macbook', 'samsung'];
let p1 = product.unshift('macbook pro');     // returns the new length of the array
console.log(product);                        // [ 'macbook pro', 'imac', 'iphone', 'macbook', 'samsung' ]
console.log(p1);                             // 5

//4. shift : it will remove the first element from an array
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let cart = ['imac', 'iphone', 'macbook', 'samsung'];
cart.shift();
console.log(cart);                          // [ 'iphone', 'macbook', 'samsung' ]


//5. splice: add, remove, replace: from anywhere in an array
// splice(startIndex, deletCount, items to add)
let cart1 = ['imac', 'iphone', 'macbook', 'samsung'];
// cart1.splice(0,0,'Naveen');          // start index, how many you want to delete, what you want to add
// console.log(cart1);                         // [ 'Naveen', 'imac', 'iphone', 'macbook', 'samsung' ]

// cart1.splice(0,0,'Naveen', 'tom');          // start index, how many you want to delete, what you want to add
// console.log(cart1); 

// cart1.splice(0,1,'Canon');
// console.log(cart1);                          // [ 'Canon', 'iphone', 'macbook', 'samsung' ]

// cart1.splice(0,2,'Canon');
// console.log(cart1);                          // [ 'Canon', 'macbook', 'samsung' ]


// cart1.splice(0,0);
// console.log(cart1);                         // [ 'imac', 'iphone', 'macbook', 'samsung' ]

// cart1.splice(2, 1, 'Canon');
// console.log(cart1);                         // [ 'imac', 'iphone', 'Canon', 'samsung' ]

// cart1.splice(0, cart1.length, 'Canon');
// console.log(cart1);                           // [ 'Canon' ]

// cart1.splice(cart1.length, 1, 'Canon');
// console.log(cart1);                             // [ 'imac', 'iphone', 'macbook', 'samsung', 'Canon' ]

// cart1.splice(cart1.length-1, 1, 'Canon');
// console.log(cart1);                             // [ 'imac', 'iphone', 'macbook', 'Canon' ]

cart1.splice(2, 0, 'Canon');
console.log(cart1);                         // [ 'imac', 'iphone', 'Canon', 'macbook', 'samsung' ]


//6. slice:
let productCart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
// let newCart = productCart.slice(0,4);
// console.log(newCart);                   // [ 'imac', 'samsung', 'iphone', 'macbook' ]

// let newCart = productCart.slice(0,2);
// console.log(newCart);                   // [ 'imac', 'samsung']

// let newCart = productCart.slice(0);
// console.log(newCart);                  // [ 'imac', 'samsung', 'iphone', 'macbook', 'keyboard' ]

// let newCart = productCart.slice(2);
// console.log(newCart);                  // [ 'iphone', 'macbook', 'keyboard' ]

// let newCart = productCart.slice(-1);
// console.log(newCart);                   // [ 'keyboard' ]

// let newCart = productCart.slice(-2,-5);
// console.log(newCart);                   // []

let newCart = productCart.slice(-4);
console.log(newCart);                       // [ 'samsung', 'iphone', 'macbook', 'keyboard' ]


// 7. reverse() : Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.  
let cart2 = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
cart2.reverse();                // not recomended, use loop to avoid array mutation
console.log(cart2);             // [ 'keyboard', 'macbook', 'iphone', 'samsung', 'imac' ]

//8. indexof: 
let cart3 = ['imac', 'samsung', 'iphone', 'imac', 'macbook', 'keyboard','imac'];
let i = cart3.indexOf('iphone');
console.log(i);                     // 2
let i1 = cart3.indexOf('keyboard');
console.log(i1);                    // 4
let i2 = cart3.indexOf('Raja');
console.log(i2);                    // -1

// 1st occurance of imac
let k = cart3.indexOf('imac');          // 1st occurance of imac
console.log(k);                         // 0
//2nd occurance of imac
let i4 = cart3.indexOf('imac',k+1);     //2nd occurance of imac
console.log(i4);                        // 3
//3rd occurance of imac
let i5 = cart3.indexOf('imac',i4+1);    //3rd occurance of imac
console.log(i5);                        //6
console.log(cart3.lastIndexOf('imac')); //6


// 9. includes:
let numm = [1,2,3,4,5,6,7];
console.log(numm.includes(8));          // false
console.log(numm.includes(3));          // true

// 10. join
// join all the elements into a string with a separator
let arr = ['Rajesh', 'Automation', 'Labs'];
let newArr = arr.join('-');
console.log(newArr);                    // Rajesh-Automation-Labs

let newArr1 = arr.join('|');
console.log(newArr1);                   // Rajesh|Automation|Labs


// 11. toString:
let arr1 = ['Rajesh', 'Automation', 'Labs'];
console.log(arr1.toString());           // Rajesh,Automation,Labs
console.log(arr1);                      // [ 'Rajesh', 'Automation', 'Labs' ]


//12. at: element at a given index... it supports negative index
let nummm = [1,2,3,4,5,6,7];
console.log(nummm.at(-1));              // 7
console.log(nummm.at(-3));              // 5
console.log(nummm.at(4));               // 5
console.log(nummm[-1]);                 // undefined
console.log(nummm.at(-7));              // 1


// 13. forEach : 
// not a loop it's a method
// Iterate each and every element
let cartt = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard', 'tom'];
cartt.forEach((product)=> {
    console.log(product.toUpperCase());
})

cartt.forEach( (e) => console.log(e.length) );

let number = [1,2,3,4,5];
number.forEach( (num) => console.log(num * 2) );

