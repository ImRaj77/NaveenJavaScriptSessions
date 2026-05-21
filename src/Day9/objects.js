
// Memory storage: Heap and Stack
// Non premitives will be stored in Heap memory
// Premitives are stored in Stack memory

// Objects : 
// are non primitive : memory is not fixed : stored in Heap memory
// It's collection of related data (Key - Value) ...
// JavaScript is not object oriented 
// Reference variables are always created in Stack Memory

// user is a reference variable and the entire body of user is the object here
//

let user = {
    name : 'Virat',
    age : 30,
    city : 'Pune',
    zip : 411030
};

// console.log(user);
// console.log(user.name);
// console.log(user.zip);              // dot notation
// console.log(user['age']);           
// console.log(user['city']);          // bracket notation

// user is now also pointing to the null value
// the below null value is stored in Stack memory

// user = null;
// user = undefined
// console.log(user.name);             // TypeError: Cannot read properties of null (reading 'name')

// in both the cases null and undefined it's having the same behaviour
// null and undefined are going to the statck memory

// when we are creating a framework for an application. we will create a lot of objects and that will be stored in Heap memory.
// RAM is dynamic moemory , Hard disk is static or fixed memory
// if back to back objects are getting created then the Heap memory will be getting occupied or suffocated
// and it will be affecting on the performance of the application and the app might crash
// Garbage Collector will be destrying all the objects which are null or undefined reference and the memory will be getting released
// Grabage collector will destory unnecessory objects internally.

// The below object is ready for garbage collector to destroy

// user = null;
// user = undefined

// GC is deleting the objects not null or undefined values
// node.js will decide when to call gc 
// V8 engine is cntrolling the gc
// GC is only for Heap Memory
// 


user.city = 'LA';
user.zip = 431517;
user.phone = 9890856743;
console.log(user.city);
console.log(user.phone);
console.log(user);
delete user.age;                // age propert will be deleted
console.log(user);

console.log('-------');

// Nested Objects
let customer = {
    name : 'Rohit',
    age : 25,
    phone : 9130945562,
    salary : 3456.77,
    isActive : true,

    address : {
        flat : 101,
        building : 'Parijatak',
        city : 'Pune',
        zip : 4337788
    }
};

console.log(customer.name);
console.log(customer.isActive);
console.log(customer.address);
console.log(customer.address.city);
console.log(customer.address.building);

console.log(customer['address'])
console.log(customer['address']['flat']);
console.log(customer['address']['building']);
console.log(customer['address'].city);

console.log('------');

// JS Object

let user = {
    name : 'Vinay',
    age : 30,
    city : 'Beed',
    zip : 431122
};
 
// JS object to JSON : Serialization
let userJson = JSON.stringify(user);       //  Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
console.log(user);                         //  { name: 'Vinay', age: 30, city: 'Beed', zip: 431122 }
console.log(userJson);                     //  {"name":"Vinay","age":30,"city":"Beed","zip":431122}
console.log(typeof userJson);              //  string
console.log(typeof user);                  //  object

// JSON to JS Object : De-Serialization
let userObject = JSON.parse(userJson);     // Converts a JavaScript Object Notation (JSON) string into an object.
console.log(typeof userObject);            // object
console.log(userObject);                   // { name: 'Vinay', age: 30, city: 'Beed', zip: 431122 }

console.log(user.name === userObject.name); // true
console.log(user === userObject);           // false

console.log('-----');

let emp = {
    name : 'Vishal',
    age : 21,
    city : 'Pune',
    devices : ['Airtel', 'iPhone', 'Charger']
}
console.log(emp.devices.length);
let empJson = JSON.stringify(emp);
console.log(empJson);


// Memory usage method

const mem = process.memoryUsage
