
// default parameter - with default value
function greet(name = 'Naveen'){
    console.log('Hello', name);
}
greet();                // Hello Naveen
greet('Rajesh');        // Hello Rajesh

/**
 * 
 * @param {*} browserName 
 * @returns 
 */
function openBrowser(browserName = 'Chrome'){
    console.log('Launching the browser: '+browserName);
    switch (browserName.trim().toLowerCase()) {                         // JavaScript is a case sensitive
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
            console.log('Invalid browser : ', browserName);
            return false;
    }
}

let res = openBrowser();                  //  chrome is launched
openBrowser('safari');                    //  safari is launched
console.log(res);


function voting(name, age=18){
    console.log(name, age);
}
voting('tom');
voting('peter', 30);


// Multiple default params
function createUser(name='Anonymous', role='viewer'){
    console.log(name, role);
}
createUser();
createUser('Naveen', 'Admin');


// 
function add(a, b=10){
    console.log(b);
    return a+b;
}
let x1 = add(undefined);
console.log(x1);              // NaN

let t1 = add(5);
console.log(t1);             // 15

let t2 = add(5, undefined);  // undefined will also trigger the default value always
console.log(t2);             // 15

let t3 = add(5, null);       // null will not trigger the default. it will nullify the b 
console.log(t3);             // 5