
// Callback function
// calling a function by passing a function....

// callback is just a parameter name here 
function testing(callback){
    console.log('Hello');
    callback();
}

function printing(){
    console.log('Hello World');
}

// 1. calling : call by passing the function
testing(printing);
// callback = printing
// printing is the callback function

console.log('------');

// 
let coding = function doCoding(){
    console.log('I am in coding');
}
// 2. callback by passing function expression
testing(coding);

console.log('------');

// 3. callback by passing an anonymous function
testing(function (){
    console.log('I am anonymous function');
});

console.log('------');

// 4. callback by passing the Arrow function
testing( () => {
    console.log('Hello Arrow function');
} );

console.log('------');

let num = [1,2,3,4];
num.map( (n) => n*2);
// here Arrow function is a callback function


//
let add = (a,b) => a+b ;
let sub = (a,b) => a-b ;
let mul = (a,b) => a*b ;
let div = (a,b) => a/b ;
// Generic function : helper : utility function
function calculator(callback, a, b){
    console.log('Performing calculation...');
    return callback(a,b);
};
// user wants to use the calculator
let result = calculator(add, 10, 20);
console.log(result);

let result1 = calculator(sub, 90, 20);
console.log(result1);

let result2 = calculator(mul, 10, 20);
console.log(result2);

let result3 = calculator(div, 100, 20);
console.log(result3);

// Animation : https://claude.ai/public/artifacts/76438295-4807-45e3-9ed9-4ebf45e9fa61

function print(callback){
    console.log('Hello Printing....');
    callback(100, 200);
}

print( (num1, num2) => {
    console.log('Hello', num1+num2);
})


/**
 * 
 * @param {*} callback1 
 * @param {*} callback2 
 */
function finding(callback1, callback2){
    console.log('Doing something...');
    callback1();
    callback2();
}

function code(){
    console.log('Hello Coding');
}
function write(){
    console.log('Hello Writing');
}

finding(code, write);

//
function click(element){
    console.log('click on', element);
}

function performAction(callbackAction, element){
    console.log('Do this action..');
    callbackAction(element);
}

performAction(click, 'loginButton');

//

function getUserDetails(callback, userObject) {
    console.log('Getting user details....');
    callback(userObject);
}

getUserDetails( (user) => {
    console.log(user);
    console.log(user.name);
} , {name : 'Manish', age : 30} );


// 
function get(){
    console.log('GET API');
};

function post(){
    console.log('POST API');
};

function put(){
    console.log('PUT API');
};

function deletee(){
    console.log('DELETE API');
};

// user facing function 
function performAPICall(callback){
    callback();
}

performAPICall(get);
performAPICall(post);
performAPICall(put);
performAPICall(deletee);

// wait for sometime (4 sec) and then callback - perform some action
setTimeout( () => {
    console.log('Hello World');
}, 4000);


function getData(){
    console.log('getting data from DB');
    setTimeout( () => {
        //get the data from API via DB
    }, 4000);
};

getData( () => {
    console.log('User Data');
});

