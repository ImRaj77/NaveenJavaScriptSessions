
// class : It is the bueprint or template for the object : Laptop
// create object out of this class object 
// object : a physical entity - properties - variables, methods(actions) : Mackbook, dell, HP

// in class let, var, const are not allowed
class Employee {

    // class variables / properties : global variables - use anywhere
    name;
    age;
    salary;
    isActive;

    // constructor : it will help us to create the object of the class and initialize the global variables
    // only one constructor is allowed in a class
    constructor(name, age, salary, isActive){
        // this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    // Actions : methods
    // no difference between function and method
    // inside class we do always use method not function
    // method 
    coding(){
        console.log('Coding function');
        console.log(this.name,'is coding');
    }

    reading() {
        console.log(this.name,'is reading');
        return 100;
    }

    // Anonymous function is allowed
    // normal function with name is not allowed
    // let is not allowed while function expression
    running = function () {
        console.log(this.name,'is running');
    }

    //Arrow function
    printing = () => {
        console.log(this.name,'is printing');
    };

    add = (a,b) => {
        return a+b;
    }

    // IIFE is not allowed in classes, allowed outside the class
    // ( () => {
    //     console.log('Hello IIFE');
    // })();

};
// class has been done till };

// create object outside the class using the new keyword;
// on object creation the constructor will be called

// emp is reference variable of the Employee object
let emp = new Employee('Rajesh', 31, 206000, true);
console.log(emp.name);                                  // Rajesh
console.log(emp.salary);                                // 31
console.log(emp.age);                                   // 175000
console.log(emp.isActive);                              // true
//console.log(emp);
console.log(emp.coding());
console.log(emp.running());
console.log(emp.printing());
let t = emp.add(100,200);
console.log(t);

console.log('-----');

let emp1 = new Employee();
console.log(emp1.name, emp1.age, emp1.salary, emp1.isActive);       // undefined undefined undefined undefined
//console.log(emp1);

console.log('-----');

let emp2 = new Employee('TOm', 30);
console.log(emp2.name, emp2.age, emp2.salary, emp2.isActive);       // TOm 30 undefined undefined

console.log('-----');

let emp4 = new Employee('Peter', 41, 217041, false);;
emp4 = null;
//emp4 = undefined                                                  // TypeError : Cannot read properties of undefined
console.log(emp4.name, emp4.age, emp4.salary, emp4.isActive);       // TOm 30 undefined undefined
// TypeError : Cannot read properties of null

