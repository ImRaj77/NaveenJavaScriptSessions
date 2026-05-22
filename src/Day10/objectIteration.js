
// let x = {
//     name = 'xyz'
// };
// console.log(x);                 // SyntaxError: Invalid shorthand property initializer

let user = {
    name : 'naveen',
    age : 20,
    salary : 1234.56,
    isActive : true  
};
console.log(user);   
// Object Iteration
for(let e in user){
    console.log(user[e]);           // print values on eby one
    console.log(e);                 // print keys one by one
}        
console.log('-----');

console.log(Object.keys(user));     // [ 'name', 'age', 'salary', 'isActive' ] --> string array of keys
console.log(Object.values(user));   // [ 'naveen', 20, 1234.56, true ] ---> string array of keys
console.log(Object.entries(user));  
//  [
//   [ 'name', 'naveen' ],
//   [ 'age', 20 ],
//   [ 'salary', 1234.56 ],
//   [ 'isActive', true ]
// ]
 
console.log(Object.keys(user).length);      // 4
console.log('-----');

for(let e in user){
    console.log(user[e]);           // print values on eby one
    if(user[e] === 20){
        console.log('bye!');
        break;
    }
} 

// for ..in loop is designed for objects

console.log('-----');
// JS Object to JSON
let userJson = JSON.stringify(user);
console.log(userJson);              // {"name":"naveen","age":20,"salary":1234.56,"isActive":true}

// print json as pretty print
let userJs = JSON.stringify(user, null, 2);         // 2nd parameter - do you want to replace something
                                                    // 3rd parameter - add spacing
console.log(userJs);
// {
//   "name": "naveen",
//   "age": 20,
//   "salary": 1234.56,
//   "isActive": true
// }
