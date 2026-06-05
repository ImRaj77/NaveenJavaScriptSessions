
test('Naveen');

// Simple function : can be hoisted
function test(name) {
    console.log(name);
}


// function expression : can not be hoisted
// getData('tom');                          // ReferenceError: Cannot access 'getData' before initialization
let getData = function gettingUserDetailsFromDashboardPage(name){
    console.log("Hello, User Details..", name);
}

// calling function using ref name (expression name)
getData('tom');                                                  // Hello, User Details..
console.log(typeof getData);                                // function
console.log(typeof gettingUserDetailsFromDashboardPage);    // undefined

// hoisting is not allowed with var and let
//getUserData('Priyansh', 50);
var getUserData = function getting_user_test_data_from_excel_sheet(name, age){
    console.log(name, age);
};
getUserData('Anshul', 20);
console.log(getUserData.name);                  // getting_user_test_data_from_excel_sheet

