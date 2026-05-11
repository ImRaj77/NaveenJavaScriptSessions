
console.log(10 === 10);         //true
console.log(10 > 5);            //true
console.log(true === true);     //true

let age = 10 ;
if(age >= 18){
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}
// Always a good practice to add else part with if condition


if(true){
    console.log("Naveen Automation Labs");
} else {
    console.log("Bye!");
}
// The above snippet will always execute the if loop either you execute it 1000 times
// The else part is dead code or unreachable code
// So please avoid writing the dead code so it will not extra space in the memory 
if(false){
    console.log("Naveen Automation Labs");
} else {
    console.log("Bye!");
}
// if block is the unreachable / dead code --> not recommended to write 

// correct way to write such code
let isPresent = true ;
if(isPresent){
    console.log("Click on the element");
} else {
    console.log("Element is not available");
}
//the above code execution is completely dependent on the isPresent variable

// Cross browser logic
// let browser = 'chrome';
// if(browser === 'chrome'){
//     console.log("Launch Chrome !");
// }
// if(browser === 'firebox'){
//     console.log("Launch firebox !");
// }
// if(browser === 'safari'){
//     console.log("Launch safari !");
// }
// else {
//     console.log("Please pass the correct browser");
// }

// Not recommended to check 

// break is not allowed to write in if condition
// break is only allowed to write in the loops and switch cases not in the conditional statements

let browser = 'safari';
if(browser === 'chrome'){
    console.log("Launch Chrome !");
}
else if(browser === 'firebox'){
    console.log("Launch firebox !");
}
else if(browser === 'safari'){
    console.log("Launch safari !");
}
else {
    console.log("Please pass the correct browser");
}
// Once the condition is satisfied it will not go into the else part 
// THe above will check all the conditions line by line but it's good practice to write code rather than first approch
// The above will be again a performance issue
// if you have very small conditions then use if else , if there are multiple conditions then use switch - case

// Switch - case 
