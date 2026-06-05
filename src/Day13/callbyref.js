
function test(name){
    console.log(name);
}

// call by value
test('Tom');            // Calling a function by passing value / argument

// Call by reference : Object reference

let user = {
    name : 'Tom',
    age : 30,
    salary : 12345.71,
    isActive : true
};

function getUserDetails(userObject){
    console.log(userObject.name, userObject.age);
    console.log(userObject);
    userObject.name = 'Peter';
}
console.log(user.name);         // Tom
getUserDetails(user);           // call function by passing user object reference
console.log(user.name);         // Peter

// Destructuring concept :- when we pass the entire object and then fetch the limited or partial values wherever required
// 4 key : value  -  pairs
let person = {
    name : 'Tom',
    age : 30,
    salary : 12345.71,
    isActive : true
}

function getPersonData({name, age, salary}){
    console.log(name, age, salary);
}

getPersonData(person);          // call function by passing user object reference

console.log("------");

function getData({name}){       // parameter name should be the same as per the object property
    console.log(name);
}
getData(person);

console.log("------");

let {name, age} = person;       // Destructuring
console.log(name, age);         // Tom 30

console.log("------");

let {userName, userAge} = person;
console.log(userName, userAge);     // undefined undefined

console.log("------");

let {name : userName1, age: userAge1} = person;     // need to map 
console.log(userName1, userAge1);   // Tom 30

