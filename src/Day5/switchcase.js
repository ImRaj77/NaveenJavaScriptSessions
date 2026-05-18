
let browser = 'firefox'

switch (browser) {
    case 'chrome':
        console.log('Launch chrome');
        break;            // in this case it will go to the next case -- > edge
    case 'edge':
        console.log('Launch edge');
        break;
    case 'safari':
        console.log('Launch safari');
        break;
    case 'firefox':
        console.log('Launch firefox');
        break;
    default:
        console.log("Invalid browser... please pass the correct browser");
        break;
     case 'brave':
        console.log('Launch brave');
        break;
}


// marks range 0-100  :: Not a good practice to use switch case in this scenario
// instead of switch case we will go with loops concept here
let marks = 60;
switch (marks) {
    case value:
        break;
    default:
        break;
}


// Boolean doesn't make any sense to use switch case coz it has only 2 cases
// we will go for if else in this case
let flag = true;
switch (flag) {
    case value:
        
        break;

    default:
        break;
}


// after deault also we can have a case 
// it doesn't matter the sequence in the switch case
// but mostly we do prefer to write the default at the end

// use cases:
// 1. cross browser
// 2. multi environment : QA, DEV, SATGE, UAT, PROD
// 3. multi user : user, admin, customer, vendor, partner
// 4. payment : upi, cc, db, paypal, stripe, wire
// 5. api status code : 200, 400, 500, 300
// 6. OS : mac, windows, linux, cloud, server
// 7. loan : home loan, car loan, education loan
// 8. AB Testing : region wise we have different flows 


// a e i o u - vowels
let ch = 'o';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch+" is a vowel");
        break;
    default:
        console.log(ch+" is a consonent");
        break;
}
