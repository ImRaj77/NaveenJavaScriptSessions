
/**
 * This function is used to add 2 variables
 * @param {number} x 
 * @param {number} y 
 * @returns It returns the addition of 2 numbers
 */
function addition(x, y) {
    return x+y;
}

let m1 = addition(10,20);
console.log(m1);

let m2 = addition('hello','naveen');
console.log(m2);

// Garbage collector will destroy the objects from Heap memory only not from Stack.
// function will be stored in heap memory.
// when we are calling the function the - stack call will happen from stack memory and it will allocate the memory
// for that function call. once the execution is done the allocated stack memory will be released and it will not
// occupy any space in the stack memory.

// If there are multiple functions for these functions the stacks will be created on calling

// While functions called -- stacks created and allocated to the function calls and then deallocate the stacks
// We do deallocate to free the memory space i.e. specifically stack


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
launchTheBrowser('chrome');             // calling the function  -- call stack / stack call


// 
function mm1(){
    console.log('m1 function');
}
function mm2(){
    console.log('m2 function');
}
function mm3(){
    console.log('m3 function');
}

//  m1,m2,m3 will go into the heap memory as we are not calling anyone

// Now call m1
mm1();           // while calling m1 one stack will be created
mm2()            // while calling m2 one more stack will be created
mm3()            // while calling m3 one more stack will be created and the total stacks would be 3 now

// Once the execution is done first m3() stack will be delted then m2() and then m1()
// It will follow the LIFO concept during the deallocation 

// Stack memory is easy to handle - allocate and deallocate
// Heap memory is very complex as compared to Stack memory
// When Heap Overflow is happens the Garbage collector will handle it


let x = 10;
let name = 'Dinesh';
// x, name will go into the stack memory 
// Variables will go into the stack memory


// Recursive function call
// function login(){
//     console.log('Login to application');
//     login();
// }
// login();


// function with params
// function name : calculateBilling
// params : 2 : amount, tax
function calculateBilling(amount, tax){
    let totalAmount = amount + tax;
}

calculateBilling(10000, 20);        // calling function by passing the values / arguments
