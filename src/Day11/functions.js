
// test();        We can call function at anytime
// function hoisting is not allowed practically but we can hoist 
// 1. Simple function
// 2. Zero input parameter
// 3. no return (void)
// 4. 
function test(){
    console.log("Hello function test.");
};
console.log(typeof test);                   // function
// call function
test();
console.log("Bye");


function click(){
    console.log('click on the element');
};

click();


// 2. Zero input, but return something
// zero input param ; return type: number
function getNumber(){
    console.log('return some number');
    return 100;
};

let x = getNumber();
console.log(x);

// name : launchBrowser ; type - boolean ; input parameter - zero
function launchBrowser(){
    console.log("Launching the browser");
    return true;
}

let isLaunched = launchBrowser()
console.log(isLaunched)

if(isLaunched){
    console.log("Enter the url : https://www.google.com");
} else {
    console.log('no need to enter the url');
}


// type : string
function getTrainerName(){
    return 'Naveeen';
}
let name = getTrainerName();
console.log(name);
console.log(getTrainerName);                        // [Function: getTrainerName]
console.log(typeof getTrainerName);                 // function


// 3. some input parameters : returning something
// input params : 2
// return type : any (not number, string etc) : the type of parameters it will be decided at the runtime 
function add(x,y){
    console.log('Addition of 2 numbers');
    let z = x+y;
    console.log(z);
    return z;
}

let a = add(10, 30);
console.log(a);

let b = add(100, 'Naveen');
console.log(b);

let c = add('Hello', 'World');
console.log(c);


// 
function calcaulateBilling(foodBill, drinksBill, tax){
    console.log('Calculating the billing amount');
    return foodBill + drinksBill + tax;
};
let total = calcaulateBilling(100, 500, 50);
console.log(total);
total = calcaulateBilling(100, 500, 0);
console.log(total);
total = calcaulateBilling(100, 100);                // tax - undefined
console.log(total);                                 // NaN

console.log('-------');

// WAF : Acceptance criteria
// launch a browser :
// params : (browserName) : valid: chrome, firefox, edge, safari : return true
// print : browser is launched
// return : true/false (boolean)
// worng browserName : Invalid browser, return false
/**
 * 
 * @param {String} bowserName 
 * @returns 
 */
function launchTheBrowser(bowserName){
    console.log('Launching the browser: '+bowserName);
    switch (bowserName.trim().toLowerCase()) {                         // JavaScript is a case sensitive
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'edge':
            console.log('edge is launched');
            return true;
        case 'safari':
            console.log('safari is launched');
            return true;
        case 'firefox':
            console.log('firefox is launched');
            return true;
    
        default:
            console.log('Invalid browser : ', bowserName);
            return false;
    }
}
let isBrowserLaunched = launchTheBrowser(' Safari ');
console.log(isBrowserLaunched);
if(isBrowserLaunched){
    console.log('enter the url : https://www.google.com');
}


// Duplicate functions are not allowed
function printing(){
    console.log('print1 called');
}
function printing(name){
    console.log('print2 called');
}
printing('naveen');                 // SyntaxError: Identifier 'printing' has already been declared
// overloading is not allowed in JavaScript
// duplicate function name are strictly not allowed in JS