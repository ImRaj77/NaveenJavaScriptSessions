
let employee = {
    name: 'Shree',
    age: 30,
    salary: 1234.55,
    coding(){                               // function inside the object   
        console.log(this.name, ' is the coder');
    },
    testing(){
        console.log(employee.name, 'is the coder');
        this.coding();
    },
    printData(x,y){
        return x+y;
    },
    data : function () {                                 // provide function expression without let and =
        console.log('Anonymous function...', this.name);
    },

    // we can not use this keyword in arrow function
    // reading : () => {
    //     console.log('Arrow function...', this.name);      // TypeError: Cannot read properties of undefined (reading 'name')
    // }

    // we need to use object reference name to call the object properties in arrow function
    reading : () => {
        console.log('Arrow function...', employee.name);      
    }

    // It does not make any sense to create IIFE Function within the object
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
employee.coding();
employee.testing();
let result = employee.printData(100,200);
console.log(result);
employee.data();
employee.reading();

// POM
let loginPage = {
    username : '#username',
    password : '#password',
    loginBtn : '//input[@id="login"]',

    login(appusername, apppassword){

    },
    forgotPwd(){

    },
    getFooters(){

    }
    // all above functions can access the properties of loginPage object using this keyword.
};


// Object destructuring for nested objects
let user = {
    name: 'tom',
    age: 30,
    address: {
        unit: 101,
        apartment: 'Parijatak',
        city: 'Pune',
        location: {
            lat: 12.33,
            lang: 45.66
        }
    }
};

let {name} = user;
console.log(name);
let {age} = user;
console.log(age);
// let {address} = user;
// console.log(address);           // { unit: 101, apartment: 'Parijatak', city: 'Pune' }

let {address : {unit, apartment}} = user;
console.log(unit);
console.log(apartment);


let { address : {location : {lat, lang}}} = user;
console.log(unit);
console.log(lat);
console.log(lang);

