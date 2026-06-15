
class User {
    // it's optional to create global variables
    // if we don't create class global variables 
    // and you directly create a constructor the global variables will be created automatically
    constructor(name, age, salary, isActive){
        // this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
};

let u1 = new User('Raja', 27, 237856, true);
console.log(u1.name, u1.age, u1.salary, u1.isActive);           // Raja 27 237856 true

// create one more class in the same file
class Person {

    // default constructor / 0 param constructor
    constructor(){
        console.log('default constructor');
    }

    constructor(name){
        console.log(name,'default constructor');
    }
};

// constructor will be called the moment we create the object
let p1 = new Person();                                          // default constructor

// can not overload the constructor
// Multiple constructors are not allowed in a class. we can have a single constrcutor in a class.
let p2 = new Person('The King');    
// SyntaxError: A class may only have one constructor


// you can create n number of classes in a single file