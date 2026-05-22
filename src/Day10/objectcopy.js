
// create clone or copy of the object

let user = {
    name : 'naveen',
    age : 20,
    salary : 1234.56,
    isActive : true  
};

console.log(user);

console.log('------');                       // { name: 'naveen', age: 20, salary: 1234.56, isActive: true }
//  ... this is a spread parameter
// spread parameter is used to copy or clone the object
// using spread parameter it will create a shallow copy
// for nested objects it will be a problem
let myUser = {...user}                      // create copy of the user object
console.log(myUser);                        // { name: 'naveen', age: 20, salary: 1234.56, isActive: true }

user.age = 35;
console.log('------');

console.log(user);                          // { name: 'naveen', age: 35, salary: 1234.56, isActive: true }
console.log(myUser);                        // { name: 'naveen', age: 20, salary: 1234.56, isActive: true }



let userX = {
    name : 'naveen',
    age : 20,
    salary : 1234.56,
    isActive : true  
};
let newUserX = structuredClone(userX);
console.log(userX);
console.log(newUserX);


// Nested Objects
let customer = {
    name : 'Rohit',
    age : 25,
    phone : 9130945562,
    salary : 3456.77,
    isActive : true,

    address : {
        flat : 101,
        building : 'Parijatak',
        city : 'Pune',
        zip : 4337788
    }
};
console.log(customer);
console.log('------');
// clone
let newCustomer = { ...customer}
console.log(newCustomer);

console.log('------');

customer.address.city = 'Banglore';
console.log(newCustomer);               // city should be updated to banglore
console.log('------');
console.log(customer);                  // in the original object also it will update city to banglore
                                        // coz of shallow copy it's doing this to nested objects
// in nested object cases we should not use spread parameter to clone 
// we should use the structuredClone() method for cloning it will create a deep/structured copy

let customerX = {
    name : 'Rohit',
    age : 25,
    phone : 9130945562,
    salary : 3456.77,
    isActive : true,

    address : {
        flat : 101,
        building : 'Parijatak',
        city : 'Pune',
        zip : 4337788
    }
};
console.log(customerX);
console.log('------');
// clone
let newCustomerX = structuredClone(customerX);
console.log(newCustomerX);

console.log('------');

customerX.address.city = 'Banglore';
console.log(newCustomerX);               // city should be original i.e. Pune
console.log('------');
console.log(customerX);                  // city should be updated to Banglore

