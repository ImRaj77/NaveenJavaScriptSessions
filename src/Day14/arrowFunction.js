
// Arrow function : Anonymous function
// has no name
// it is denoted by  ()=>
// has no function keyword
// this is heavily used in callback function

const { element } = require("wd/lib/commands");

let printing = ()=> console.log('Hello World');
printing();            // calling arrow function           // Hello World

let pop = ()=> {
    console.log('line 1');
    console.log('line 2');
}
pop();

// arrow function with params
// param: 1 param -> name
let printInfo = (name) => console.log(name+' India Pvt. ltd');
printInfo('Globant');


// Zero param
let info = ()=> console.log('Hello World');
info();

// 1 Param
// If arrow function having only one param
// it is not manadatory to write the brackets/paranthesis ()
let printuser = username => console.log('Hello', username);
printuser('Kiran');

// 1 param
let clickElement = element => {
    console.log('check the', element,'is visible');
    console.log('click on the',element);
    console.log('close the browser');
}
clickElement('loginButton');


// add 2 numbers
// 2 params: x,y
// return x+y
// if you are having more than 2 parameters we neeed to use paranthesis/brackets
// we do not need to write return as well here
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
let add = (x,y) =>  x+y ;
let result = add(100,200);
console.log(result);


// if we are having multiple lines 
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
let addition = (x,y) => {
    console.log('Adding 2 numbers....');
    let z = x+y;
    return z;
}
let res = addition(10,11);
console.log(res);

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
let division = (x,y) => {
    return x/y;
}
let res1 = division(100,2);
console.log(res1);


let findElement = id => `//div[@id='${id}']`;
let xpath = findElement('openCart');
console.log(xpath);


// launch browser : ch, ff, edge
// browsername : 1 param
// return boolean
// found : true
// not found : invalid, false
/**
 * 
 * @param {string} browserName 
 * @returns 
 */
let launchBrowser = browserName => {
    console.log('trying to launch', browserName);
    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;    
        default:
            console.log('Invalid browser', browserName);
            return false;
    }
};
let isLaunched = launchBrowser('edge');
console.log(isLaunched);
if(isLaunched){
    console.log('Enter the url: ', 'https:google.com');
}


// without return keyword
let sum = (a,b) => a+b;
let sub = (a,b) => a-b;
let div = (a,b) => a/b;
let mul = (a,b) => a*b;

console.log(sum(100,200));
console.log(sub(200,100));
console.log(div(100,2));
console.log(mul(10,20));

//
// give a string and convert it into a lowercase
let convertLower = name => name.trim().toLowerCase();
let u1 = convertLower(' AtBnCm ');
console.log(u1);

// spread param ...
/**
 * 
 * @param  {...string} employeeNames 
 */
let printEmployeeList = (...employeeNames) => {
    console.log(employeeNames.length); 
    console.log(employeeNames); 
};
printEmployeeList('Senthil', 'Pooja', 'Akshay', 'Dipti');


// arrow function with Objects :
let user = {
    name : 'tom',
    age : 30,
    salary : 12.33,
    isActive : true
};

let printuserInfo = (userObject) => {
    console.log(userObject);
};

let printuserInfo1 = ({name, salary}) => {              // Destructuring
    console.log(name, salary);
};

printuserInfo(user);
printuserInfo1(user);
