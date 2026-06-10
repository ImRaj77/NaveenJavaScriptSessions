
// utils.js
// export let x=10
// export function testing() { }
// export behave like a producer

// import behaves like an consumer
// app.js
// import {x, testing} from 'utils.js';
// console.log(x)           // 10

console.log('Hello World');                 // by default it will be exported so avoid write console.log
 const PI = 3.14;

 function driving() {
    console.log('Driver is driving');
}

 function printing() {
    console.log('Printing function');
}

// we can have only one default function in a .js file. we can't create multiple default functions
// default will never participate in object destructuring
// whenever we are creating default function -
// never return in the object 

// export default function coding(){
//     console.log('Coding function');
// }

let userName = 'Rajesh';
export default userName;

export {PI, driving, printing};

console.log('Hello Bye');