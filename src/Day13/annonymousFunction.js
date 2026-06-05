
// Anonymous function:
// A function which has no name
// expression name we have to give to anonymous function
// expression name : test
let test = function () {
    console.log('Hello...!');
};

// call it using expression name
test();


let add = function(x,y){
    return x+y;
};
let r1 = add(100,200);
console.log(r1);

console.log(add.name);      // add


/**
 * 
 * @param {string} browserName 
 */
let launchBrowser = function (browserName) {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Chrome is launched');
            return true;
        case 'Edge':
            console.log('Edge is launched');
            return true;
        case 'firefox':
            console.log('firefox is launched');
            return true;
    
        default:
            console.log('Invalid browser');
            return false;
    }
};

let flag = launchBrowser('safari');
console.log(flag);


// Advanced/Latest version of Anonymous function : Arrow Function : =>
